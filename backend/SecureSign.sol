pragma solidity ^0.8.19;

import "./Ownable.sol";

contract SecureSign is Ownable {
    enum currentState {
        pending,
        signed,
        notarized,
        canceled
    }

    struct Doc {
        uint256 createdTime;
        uint256 remainingSignatures;
        uint256 completedTime;
        bytes32 completedHash;
        currentState status;
        mapping(address => uint256) signers;
    }

    mapping(bytes32 => Doc) documents;
    mapping(bytes32 => bytes32) finalDocs;

    event Created(bytes32 hash);
    event Signature(bytes32 hash, bytes32 signatureHash, address signer);
    event Signed(bytes32 hash);
    event Notarized(bytes32 hash, bytes32 signatureHash, address signer);
    event Completed(bytes32 hash, bytes32 finalHash);

    function createDoc(
        bytes32 hash,
        address[] memory signers,
        bool notarize
    ) public onlyOwner {
        require(!checkDoc(hash));
        if (signers.length == 0 && !notarize) {
            documents[hash] = Doc(now, 0, now, hash, currentState.signed);
            finalDocs[hash] = hash;
        } else {
            documents[hash] = Doc(
                now,
                signers.length,
                0,
                "",
                currentState.pending
            );
            for (uint8 i = 0; i < signers.length; i++) {
                documents[hash].signers[signers[i]] = 1;
            }
        }
        emit Created(hash);
    }


    function sign(
        bytes32 hash,
        bytes32 signatureHash,
        address signer,
        bool notarized
    ) public onlyOwner {
        require(checkDoc(hash));
        if (notarized) {
            documents[hash].status = currentState.notarized;
            documents[hash].signers[signer] = now;
            emit Signature(hash, signatureHash, signer);
            emit Notarized(hash, signatureHash, signer);
        } else {
            require(documents[hash].signers[signer] == 1);
            documents[hash].remainingSignatures--;
            documents[hash].signers[signer] = now;
            emit Signature(hash, signatureHash, signer);
            if (documents[hash].remainingSignatures == 0) {
                documents[hash].status = currentState.signed;
                emit Signed(hash);
            }
        }
    }

    function getFinalDoc(
        bytes32 hash
    ) public view returns (bytes32 originalHash) {
        require(checkDoc(finalDocs[hash]));
        originalHash = finalDocs[hash];
    }

    function getDocument(
        bytes32 hash
    )
        public
        view
        returns (
            uint256 createdTime,
            uint256 remainingSignatures,
            uint256 completedTime,
            bytes32 completedHash,
            string memory status
        )
    {
        require(checkDoc(hash));
        createdTime = documents[hash].createdTime;
        if (documents[hash].status == currentState.pending) {
            status = "pending";
        } else if (documents[hash].status == currentState.signed) {
            status = "signed";
        } else if (documents[hash].status == currentState.notarized) {
            status = "notarized";
        } else if (documents[hash].status == currentState.canceled) {
            status = "canceled";
        }
        remainingSignatures = documents[hash].remainingSignatures;
        completedTime = documents[hash].completedTime;
        completedHash = documents[hash].completedHash;
    }

    function getSignerTime(
        bytes32 hash,
        address signer
    ) public view returns (uint256) {
        require(checkDoc(hash));
        require(documents[hash].signers[signer] > 1);
        return documents[hash].signers[signer];
    }

    function checkDoc(bytes32 hash) internal view returns (bool) {
        return documents[hash].createdTime > 0;
    }
}

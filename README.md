# SecureSign

A decentralized document signing platform built on Ethereum. SecureSign lets users create, sign, and notarize documents on-chain, with encrypted document storage backed by IPFS.

---

## Features

- **Blockchain-verified signatures** — every signature and state change is recorded on-chain and is tamper-proof.
- **Multi-party signing** — specify a list of required signers when creating a document; the contract tracks remaining signatures and emits a `Signed` event when all parties have signed.
- **Notarization support** — documents can be flagged for notarization, producing an on-chain notarization record.
- **Document lifecycle states** — `pending → signed / notarized → canceled`.
- **IPFS-encrypted storage** — document contents are encrypted and persisted on IPFS; only the hash is stored on-chain.
- **React dashboard** — a clean Tailwind CSS dashboard to request, review, and manage signing workflows.
- **Dark mode** — full light/dark theme support in the frontend.

---

## Architecture

```
SecureSign/
├── backend/
│   ├── Ownable.sol        # Access-control base contract
│   └── SecureSign.sol     # Core document-signing contract
└── frontend/              # React + Vite + Tailwind CSS app
    ├── src/
    │   ├── pages/
    │   │   ├── Home.jsx       # Marketing / landing page
    │   │   ├── Dashboard.jsx  # Signing-request management dashboard
    │   │   └── Admin.jsx      # Admin panel
    │   ├── components/        # Reusable UI components (Navbar, Footer, Forms, …)
    │   └── partials/          # Dashboard-specific widgets and sidebar
    └── package.json
```

### Smart Contract Overview

| Function | Description |
|---|---|
| `createDoc(hash, signers, notarize)` | Register a document hash on-chain. Optionally provide required signers and/or request notarization. |
| `sign(hash, signatureHash, signer, notarized)` | Record a signer's signature. Emits `Signed` when all required signatures are collected, or `Notarized` for notarization. |
| `getDocument(hash)` | Return document metadata: creation time, remaining signatures, completion time, completed hash, and status string. |
| `getSignerTime(hash, signer)` | Return the timestamp at which a given signer signed the document. |
| `getFinalDoc(hash)` | Return the original document hash from the finalized document mapping. |

Document states: `pending` → `signed` / `notarized` → `canceled`

---

## Prerequisites

- **Node.js** ≥ 16 and **npm** (for the frontend)
- An Ethereum development environment (e.g., [Hardhat](https://hardhat.org/) or [Remix IDE](https://remix.ethereum.org/)) for deploying the smart contracts
- MetaMask or another Web3 wallet

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Manas-33/SecureSign-1.git
cd SecureSign-1
```

### 2. Deploy the smart contracts

Open `backend/SecureSign.sol` in Remix IDE (or your preferred Solidity toolchain) and deploy to your target network (local, testnet, or mainnet). Copy the deployed contract address — you will need it in the frontend configuration.

### 3. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

The app is served at `http://localhost:5173` by default.

To create a production build:

```bash
npm run build
npm run preview
```

---

## Usage

1. **Landing page** — visit `/` to learn about the platform's features.
2. **Dashboard** — visit `/dashboard` to:
   - **Request** a new document signing — upload your document and specify the required signers.
   - **Monitor** active requests — track which signers have completed their signatures.
   - **Review** previous requests — see finalized and canceled documents.
3. **Admin panel** — visit `/admin` for owner-level contract management.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Smart contracts | Solidity ^0.8.19 |
| Frontend framework | React 18 |
| Build tool | Vite 4 |
| Styling | Tailwind CSS 3 |
| Charts | Chart.js 4 |
| Routing | React Router DOM 6 |
| Document storage | IPFS |

---

## License

This project is provided as-is. See individual source files for any embedded license headers.

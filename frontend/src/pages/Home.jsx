import React from 'react';
import InfoSection  from '../components/InfoSection/InfoSection';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
// import Pricing from '../components/Pricing/Pricing'


const homeObjOne = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: '',
    headline: 'Secure Document Signing on Blockchain',
    description:
      'A Next-Gen Solution for Secure and Verifiable Document Signing',
    buttonLabel: 'Get Started',
    imgStart: '',
    img: 'images/svg-1.svg',
    alt: 'Credit Card',
    start: ''
  };
  
const homeObjTwo = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Features',
    headline: 'Decentralized Document Signatures, Leverage the Power of Blockchain for Immutable Signatures',
    description:
      "All Involved Parties Contribute Signatures in a Secure and Collaborative Environment",
    buttonLabel: 'Learn More',
    imgStart: '',
    img: 'images/svg-2.svg',
    alt: 'Vault',
    start: ''
  };
  
const homeObjThree = {
    primary: false,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: ' How It Works',
    headline:
      'Effortless Document Signing Process, from Invitation to Finalization, Seamless and Verified',
    description:
      "Generating Unique Doc Tokens, State Updates, and Final Signatures",
    buttonLabel: 'Try Now',
    imgStart: 'start',
    img: 'images/profile.jpg',
    alt: 'Vault',
    start: 'true'
  };
  
const homeObjFour = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Security',
    headline: 'IPFS-Encrypted Document Storage',
    description:
      'Encrypted Contents Persisted on IPFS for Ultimate Security',
    buttonLabel: 'Get Started',
    imgStart: 'start',
    img: 'images/svg-3.svg',
    alt: 'Vault',
    start: 'true'
  };

const Home = () => {
    return (
        <div>
            <Navbar/>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjTwo} />
            {/* <Pricing /> */}
            <InfoSection {...homeObjFour} />
            <Footer/>
        </div>
    )
}

export default Home;
import { StationStop, GlossaryTerm, SignalWarning } from '../types';

export const STOPS_DATA: StationStop[] = [
  {
    id: 1,
    name: 'Wallet',
    shortName: 'Wallet',
    zone: 'start',
    zoneLabel: 'Getting started',
    cx: 80,
    cy: 200,
    title: 'Wallet',
    headline: 'Your Digital Passport & Keychain',
    body: 'An app like Phantom, Solflare, or Backpack. It securely stores your cryptographic private keys and lets you sign transactions across web3 apps — think login and digital signature combined into one.',
    analogy: 'Like your physical wallet and key ring in your pocket, but for the decentralized internet.',
    proTip: 'Never store your funds entirely on a centralized exchange if you want to use Solana apps directly.',
    badge: 'Step 1 of 9',
    iconName: 'Wallet'
  },
  {
    id: 2,
    name: 'Seed phrase',
    shortName: 'Seed phrase',
    zone: 'start',
    zoneLabel: 'Getting started',
    cx: 180,
    cy: 200,
    title: 'Seed phrase',
    headline: 'The Master Key to All Your Assets',
    body: 'A 12 or 24-word backup mnemonic phrase that recreates your wallet completely on any device. Write it on physical paper, store it in a secure spot, never type it into any website or search bar, and never take a photo or screenshot.',
    analogy: 'Like the master physical vault key with zero replacement service. Lose it or leak it, and the vault is unlocked.',
    proTip: 'No legit team, admin, or support agent will ever ask for your 12/24 words.',
    badge: 'Critical Security',
    iconName: 'Key'
  },
  {
    id: 3,
    name: 'Address',
    shortName: 'Address',
    zone: 'start',
    zoneLabel: 'Getting started',
    cx: 280,
    cy: 200,
    title: 'Address',
    headline: 'Your Public Destination Code',
    body: 'A base58 public string (e.g. 7xKX...9qZ) that anyone can safely send you funds or digital assets to. It is 100% public and safe to share, unlike your private key or seed phrase.',
    analogy: 'Like your email address or bank account IBAN/routing number — safe to give to anyone paying you.',
    proTip: 'You can also map your long address to human-friendly .sol domain names via Solana Name Service (SNS).',
    badge: 'Public Key',
    iconName: 'AtSign'
  },
  {
    id: 4,
    name: 'Send',
    shortName: 'Send',
    zone: 'works',
    zoneLabel: 'How it works',
    cx: 380,
    cy: 200,
    title: 'Send',
    headline: 'Broadcasting Your Instruction to the World',
    body: 'You approve an action in your wallet — whether it is a payment, token swap on an AMM, staking, or minting an NFT. Your wallet cryptographically signs the message and broadcasts it to Solana validator nodes via RPC.',
    analogy: 'Like dropping a sealed, stamped letter into an ultra-high-speed pneumatic tube system.',
    proTip: 'Always verify the destination and token amount in your wallet approval modal before clicking confirm.',
    badge: 'Transaction Initiated',
    iconName: 'Send'
  },
  {
    id: 5,
    name: 'Confirmed ~400ms',
    shortName: 'Confirmed',
    zone: 'works',
    zoneLabel: 'How it works',
    cx: 480,
    cy: 200,
    isHub: true,
    title: 'Confirmed ~400ms',
    headline: 'Sub-Second Global Settlement Interchange',
    body: 'This is the central interchange station! Solana uses Proof of History (PoH) alongside Tower BFT consensus so validator nodes agree on order in real-time. In roughly 400 milliseconds, your transaction is finalized and permanently inscribed on-chain.',
    analogy: 'Like tapping your subway contactless card at the turnstile — instant beep and green gate opens instantly.',
    proTip: 'No waiting 10-60 minutes for block confirmations like older proof-of-work blockchains.',
    badge: 'Interchange Hub',
    iconName: 'Zap'
  },
  {
    id: 6,
    name: 'Fee',
    shortName: 'Fee',
    zone: 'works',
    zoneLabel: 'How it works',
    cx: 580,
    cy: 200,
    title: 'Fee',
    headline: 'Tiny Fractions of a Cent',
    body: 'A microscopic network fee (paid in SOL, typically ~0.000005 SOL or around $0.0005) paid to the validators processing and storing your transaction. Whether you move $1 or $10,000, the fee remains negligible.',
    analogy: 'Like paying a hundredth of a penny for postage on a high-speed intercontinental express parcel.',
    proTip: 'Always keep at least 0.05 SOL in your wallet so you never get stuck unable to pay network gas fees.',
    badge: '< $0.001 Fee',
    iconName: 'Coins'
  },
  {
    id: 7,
    name: 'Verify URL',
    shortName: 'Verify URL',
    zone: 'safety',
    zoneLabel: 'Stay safe',
    cx: 680,
    cy: 200,
    title: 'Verify URL',
    headline: 'Spotting the Phishing Trap',
    body: 'Fake copycat websites look 100% pixel-identical to genuine decentralized apps. Always bookmark official project URLs, check character-by-character for subtle misspellings (e.g. jup.ag vs júp-airdrop.com), and never click sponsored search ads.',
    analogy: 'Like checking the street sign before walking into a replica storefront built by fraudsters.',
    proTip: 'Never trust Google Search sponsored ad links for crypto apps; always check official Twitter/Discord links.',
    badge: 'Anti-Phishing',
    iconName: 'ShieldCheck'
  },
  {
    id: 8,
    name: 'Test first',
    shortName: 'Test first',
    zone: 'safety',
    zoneLabel: 'Stay safe',
    cx: 780,
    cy: 200,
    title: 'Test first',
    headline: 'The Golden Small-Amount Rule',
    body: 'Before moving significant sums or interacting with a brand new smart contract, execute a small test transaction ($1 or $2). Once you see the test funds safely arrive at the destination, proceed with the full amount.',
    analogy: 'Like dipping your toe in the water to check the temperature and current before diving in head-first.',
    proTip: 'Because Solana fees are under a penny, running two or three test transfers costs virtually nothing!',
    badge: 'Best Practice',
    iconName: 'Sparkles'
  },
  {
    id: 9,
    name: 'Read & sign',
    shortName: 'Read & sign',
    zone: 'safety',
    zoneLabel: 'Stay safe',
    cx: 880,
    cy: 200,
    title: 'Read & sign',
    headline: 'Your Final Protective Checkpoint',
    body: 'Your wallet pop-up window is your final barrier. Modern Solana wallets (Phantom, Backpack) show simulated balance changes before you sign. Read what leaves your wallet and what enters. If you see unexpected token approvals, reject it immediately.',
    analogy: 'Like reading a legally binding signature page before signing on the dotted line with indelible ink.',
    proTip: 'If a site asks you to sign a transaction when you only intended to "view" or "log in", reject and disconnect.',
    badge: 'Final Barrier',
    iconName: 'FileCheck'
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'SOL',
    definition: 'The native currency of Solana — used to pay tiny network fees (gas), secure the network through validator staking, and participate in the ecosystem economy.',
    tag: 'Currency',
    simpleAnalogy: 'The fuel and official currency of the Solana network.'
  },
  {
    term: 'Validator',
    definition: 'Independent high-performance computing nodes around the globe that verify transactions, participate in consensus, and maintain the public ledger.',
    tag: 'Infrastructure',
    simpleAnalogy: 'Independent accountants verifying the ledger in unison.'
  },
  {
    term: 'Proof of History (PoH)',
    definition: 'A cryptographic clock built into the blockchain that creates an indisputable historical record of when events took place, eliminating consensus communication bottlenecks.',
    tag: 'Core Innovation',
    simpleAnalogy: 'A synchronized stopwatch every validator wears on their wrist.'
  },
  {
    term: 'RPC Node',
    definition: 'Remote Procedure Call servers that bridge client apps (wallets, websites) with the core validator cluster, allowing users to read state and submit transactions.',
    tag: 'Connectivity',
    simpleAnalogy: 'The telephone switchboard connecting your phone to the network.'
  },
  {
    term: 'Token Program (SPL)',
    definition: 'The standard on Solana for creating fungible tokens (like USDC) and non-fungible tokens (NFTs), equivalent to ERC-20 on Ethereum.',
    tag: 'Standard',
    simpleAnalogy: 'The standardized blueprint for minting digital assets.'
  },
  {
    term: 'Simulation',
    definition: 'A safety feature built into Solana wallets that dry-runs your transaction on a local fork before submitting, predicting exact balance changes.',
    tag: 'Safety Guard',
    simpleAnalogy: 'A crystal ball showing exact consequences before you sign.'
  }
];

export const SIGNAL_WARNINGS: SignalWarning[] = [
  {
    id: '01',
    num: '01',
    title: 'Your seed phrase is not a password',
    detail: 'It is the unchangeable master private key. No legit app, exchange, developer, or "support agent" will ever ask for it. Anyone with your seed phrase owns 100% of your funds permanently.',
    severity: 'critical'
  },
  {
    id: '02',
    num: '02',
    title: 'A copycat phishing site looks 100% identical',
    detail: 'Scammers copy designs pixel-for-pixel and buy Google search ads. Verify the exact domain in your browser bar before connecting. Bookmark genuine apps.',
    severity: 'high'
  },
  {
    id: '03',
    num: '03',
    title: 'Free money airdrop DMs are the bait, not a gift',
    detail: 'Random NFTs appearing in your wallet directing you to "claim $5,000" or Telegram/Discord DMs promising free tokens will drain your wallet the moment you sign their malicious contract.',
    severity: 'caution'
  }
];

export const GITHUB_REPO_PROFILES = {
  suggestedRepoNames: [
    'the-solana-line',
    'solana-line-transit-guide',
    'explain-solana-transit-map',
    'solana-for-beginners-interactive'
  ],
  title: 'The Solana Line — A Beginner\'s Transit Map',
  shortDescription: 'Ride the Solana Line: 9 stops, pure clarity. An interactive transit-style blueprint map & visual guide explaining Solana blockchain fundamentals simply for crypto beginners. Built for Superteam Earn.',
  topics: [
    'solana',
    'crypto-beginner',
    'transit-map',
    'superteam-earn',
    'solana-education',
    'web3-onboarding',
    'interactive-guide',
    'react',
    'typescript',
    'tailwind'
  ],
  bountyListingUrl: 'https://superteam.fun/earn/listing/explain-solana-to-crypto-beginners'
};

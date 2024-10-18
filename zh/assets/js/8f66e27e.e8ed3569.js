"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[2904],{6934:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var s=n(4848),r=n(8453);const t={title:"Auto ID",sidebar_position:3,description:"Functions to build on Auto ID domain",slug:"/develop/auto-sdk/auto-id",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto ID"]},a=void 0,o={id:"develop/auto_sdk/auto-id",title:"Auto ID",description:"Functions to build on Auto ID domain",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/auto_sdk/auto-id.md",sourceDirName:"develop/auto_sdk",slug:"/develop/auto-sdk/auto-id",permalink:"/zh/develop/auto-sdk/auto-id",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/auto_sdk/auto-id.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Auto ID",sidebar_position:3,description:"Functions to build on Auto ID domain",slug:"/develop/auto-sdk/auto-id",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto ID"]},sidebar:"tutorialSidebar",previous:{title:"Consensus",permalink:"/zh/develop/auto-sdk/consensus"},next:{title:"XDM",permalink:"/zh/develop/auto-sdk/xdm"}},c={},l=[{value:"Auto-ID Package Documentation",id:"auto-id-package-documentation",level:2},{value:"\u4e00. \u5bfc\u8a00",id:"\u4e00-\u5bfc\u8a00",level:3},{value:"Features",id:"features",level:3},{value:"Installation",id:"installation",level:2},{value:"Importing the Package",id:"importing-the-package",level:2},{value:"Available Functions",id:"available-functions",level:2},{value:"Auto ID Functions",id:"auto-id-functions",level:3},{value:"Certificate Management",id:"certificate-management",level:3},{value:"Key Management",id:"key-management",level:3},{value:"Usage Examples",id:"usage-examples",level:2},{value:"1. User Authentication",id:"1-user-authentication",level:3},{value:"<strong>Authenticate a User with Auto ID</strong>",id:"authenticate-a-user-with-auto-id",level:4},{value:"2. Certificate Management",id:"2-certificate-management",level:3},{value:"<strong>Self-Issuing a Certificate</strong>",id:"self-issuing-a-certificate",level:4},{value:"<strong>Issuing a Certificate</strong>",id:"issuing-a-certificate",level:4},{value:"3. Key Management",id:"3-key-management",level:3},{value:"<strong>Generating and Saving a Key Pair</strong>",id:"generating-and-saving-a-key-pair",level:4},{value:"4. Zero-Knowledge Proofs (ZKPs)",id:"4-zero-knowledge-proofs-zkps",level:3},{value:"<strong>Creating a ZKP Claim</strong>",id:"creating-a-zkp-claim",level:4},{value:"Notes",id:"notes",level:2}];function d(e){const i={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"auto-id-package-documentation",children:"Auto-ID Package Documentation"}),"\n",(0,s.jsx)(i.h3,{id:"\u4e00-\u5bfc\u8a00",children:"\u4e00. \u5bfc\u8a00"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"@autonomys/auto-id"})," package provides functionalities for managing certificates, authenticating users, and integrating Zero-Knowledge Proofs (ZKPs) on the Autonomys Network. It enables developers to:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Authenticate Users"}),": Verify user identities using their Auto IDs."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Manage Certificates"}),": Create, issue, and handle x509 certificates associated with Auto IDs."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Integrate Zero-Knowledge Proofs (ZKPs)"}),": Utilize ZKP claims for enhanced privacy and authentication."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Certificate Management"}),": Create and manage x509 certificates linked to Auto IDs."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Zero-Knowledge Proof Integration"}),": Implement privacy-preserving claims using ZKPs."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"User Authentication"}),": Authenticate users through their Auto IDs and certificates."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"TypeScript Support"}),": Fully typed for enhanced developer experience."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Blockchain Interaction"}),": Interact with the Autonomys Network without dealing with low-level blockchain complexities."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(i.p,{children:"Install the package via npm or yarn:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"# Using npm\nnpm install @autonomys/auto-id\n\n# Using yarn\nyarn add @autonomys/auto-id\n"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"importing-the-package",children:"Importing the Package"}),"\n",(0,s.jsxs)(i.p,{children:["Before using the functions provided by the ",(0,s.jsx)(i.code,{children:"auto-id"})," package, you need to import them into your project:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"// Import specific functions\nimport { selfIssueCertificate, authenticateAutoIdUser } from '@autonomys/auto-id';\n\n// Or import everything\nimport * as autoId from '@autonomys/auto-id';\n"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"available-functions",children:"Available Functions"}),"\n",(0,s.jsx)(i.h3,{id:"auto-id-functions",children:"Auto ID Functions"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"addDaysToCurrentDate(days: number): Date"})}),": Returns current date plus specified days."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"authenticateAutoIdUser(api, autoId, challenge, signature): Promise<boolean>"})}),": Verifies an Auto ID user by signature over a challenge."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"AutoIdError"})}),": Enum of possible Auto ID errors."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"checkCertificateAndRevocationList(api, autoIdIdentifier, getCertificate): Promise<AutoIdX509Certificate>"})}),": Checks if a certificate exists and is not revoked."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"convertX509CertToDerEncodedComponents(certificate): [Uint8Array, Uint8Array]"})}),": Converts an X.509 certificate to DER-encoded components."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"decryptPem(pem, password): string"})}),": Decrypts an encrypted PEM key using a password."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"deactivateAutoId(api, autoIdIdentifier, signature): Promise<SubmittableExtrinsic>"})}),": Creates a transaction to deactivate an Auto ID."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"derEncodeSignatureAlgorithmOID(oid, parameters?): Uint8Array"})}),": DER-encodes a signature algorithm OID."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"getCertificate(api, autoIdIdentifier): Promise<AutoIdX509Certificate | undefined>"})}),": Retrieves a certificate from the blockchain."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"getCertificateRevocationList(api, autoIdIdentifier): Promise<string[]>"})}),": Gets the revocation list for an Auto ID."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"getCertificateSubjectPublicKey(api, autoIdIdentifier): Promise<CryptoKey>"})}),": Retrieves the public key from a stored certificate."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"hexStringToU8a(hexString): Uint8Array"})}),": Converts a hex string to a ",(0,s.jsx)(i.code,{children:"Uint8Array"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"identifierFromX509Cert(issuerId, certificate): string"})}),": Generates an Auto ID identifier from a certificate."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"mapErrorCodeToEnum(errorCode): AutoIdError | null"})}),": Maps an error code to an ",(0,s.jsx)(i.code,{children:"AutoIdError"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"pemToCryptoKeyForSigning(pem, algorithm): Promise<CryptoKey>"})}),": Converts a PEM key to a ",(0,s.jsx)(i.code,{children:"CryptoKey"})," for signing."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"pemToHex(pem): string"})}),": Converts a PEM key to a hex string."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"registerAutoId(api, certificate, issuerId?): SubmittableExtrinsic"})}),": Creates a transaction to register an Auto ID."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"renewAutoId(api, autoIdIdentifier, newCertificate): Promise<SubmittableExtrinsic>"})}),": Creates a transaction to renew an Auto ID."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"revokeCertificate(api, autoIdIdentifier, signature): Promise<SubmittableExtrinsic>"})}),": Creates a transaction to revoke a certificate."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"validateCertificatePublicKey(certPublicKey, derivedPublicKey): Promise<boolean>"})}),": Validates if a derived public key matches the certificate's."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"certificate-management",children:"Certificate Management"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"certificateToPem(cert): string"})}),": Converts a certificate to PEM format."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"createAndSignCSR(subjectName, keyPair): Promise<Pkcs10CertificateRequest>"})}),": Creates and signs a CSR."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"createCSR(subjectName, keyPair): Promise<Pkcs10CertificateRequest>"})}),": Creates a Certificate Signing Request."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"getCertificateAutoId(certificate): string | undefined"})}),": Extracts Auto ID from a certificate's SAN extension."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"getSubjectCommonName(subject): string | undefined"})}),": Retrieves the common name from a certificate subject."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"issueCertificate(csr, issuerCertificateData, validityPeriodDays?): Promise<X509Certificate>"})}),": Issues a certificate based on a CSR."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"pemToCertificate(pem): X509Certificate"})}),": Converts a PEM string to a certificate object."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"prettyPrintCertificate(cert): void"})}),": Prints certificate details to the console."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"saveCertificate(certificate, filePath): Promise<void>"})}),": Saves a certificate to a file in PEM format."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"selfIssueCertificate(subjectName, keyPair, validityPeriodDays?): Promise<X509Certificate>"})}),": Generates a self-signed certificate."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"signCSR(csr, keyPair): Promise<Pkcs10CertificateRequest>"})}),": Signs a CSR using a private key."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"key-management",children:"Key Management"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"cryptoKeyPairFromPrivateKey(privateKey, algorithm, password?): Promise<CryptoKeyPair>"})}),": Generates a key pair from a private key."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"cryptoKeyToPem(key, password?): Promise<string>"})}),": Converts a ",(0,s.jsx)(i.code,{children:"CryptoKey"})," to PEM format."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"doPublicKeysMatch(publicKey1, publicKey2): Promise<boolean>"})}),": Checks if two public keys are identical."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"generateEd25519KeyPair(): Promise<CryptoKeyPair>"})}),": Generates an Ed25519 key pair."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"generateRsaKeyPair(keySize?): Promise<CryptoKeyPair>"})}),": Generates an RSA key pair."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"keyToHex(key): Promise<string>"})}),": Converts a ",(0,s.jsx)(i.code,{children:"CryptoKey"})," to a hex string."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"loadPrivateKey(filePath, algorithm, password?): Promise<CryptoKey>"})}),": Loads a private key from a file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"loadPublicKey(filePath, algorithm): Promise<CryptoKey>"})}),": Loads a public key from a file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"pemToPrivateKey(pemData, algorithm, password?): Promise<CryptoKey>"})}),": Converts a PEM private key to a ",(0,s.jsx)(i.code,{children:"CryptoKey"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"pemToPublicKey(pemData, algorithm): Promise<CryptoKey>"})}),": Converts a PEM public key to a ",(0,s.jsx)(i.code,{children:"CryptoKey"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"rawToPrivateKey(arrayBuffer, algorithm): Promise<CryptoKey>"})}),": Imports a private key from raw data."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"rawToPublicKey(rawKey, algorithm): Promise<CryptoKey>"})}),": Imports a public key from raw data."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"saveKey(key, filePath, password?): Promise<void>"})}),": Saves a ",(0,s.jsx)(i.code,{children:"CryptoKey"})," to a file."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,s.jsxs)(i.p,{children:["Below are examples demonstrating how to use the functions provided by ",(0,s.jsx)(i.code,{children:"@autonomys/auto-id"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"1-user-authentication",children:"1. User Authentication"}),"\n",(0,s.jsx)(i.h4,{id:"authenticate-a-user-with-auto-id",children:(0,s.jsx)(i.strong,{children:"Authenticate a User with Auto ID"})}),"\n",(0,s.jsx)(i.p,{children:"Verify a user's identity using their Auto ID, challenge message, and signature."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"import { authenticateAutoIdUser } from '@autonomys/auto-id';\nimport { activate } from '@autonomys/auto-utils';\n\n(async () => {\n  // Activate the network API\n  const api = await activate({ networkId: 'gemini-3h' });\n\n  // User's Auto ID\n  const autoId = 'user-auto-id'; // Replace with the user's Auto ID\n\n  // Challenge message that the user needs to sign\n  const challengeMessage = 'Please sign this message to authenticate.';\n  const challenge = new TextEncoder().encode(challengeMessage);\n\n  // Assume the user provides the signature\n  const signature = new Uint8Array([...]); // User's signature as Uint8Array\n\n  // Authenticate the user\n  const isAuthenticated = await authenticateAutoIdUser(api, autoId, challenge, signature);\n\n  if (isAuthenticated) {\n    console.log('User authenticated successfully.');\n  } else {\n    console.log('Authentication failed.');\n  }\n\n  // Disconnect when done\n  await api.disconnect();\n})();\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api"}),": Connected API instance."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"autoId"}),": User's Auto ID."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"challenge"}),": The challenge message (",(0,s.jsx)(i.code,{children:"BufferSource"}),")."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"signature"}),": User's signature over the challenge (",(0,s.jsx)(i.code,{children:"BufferSource"}),")."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Promise<boolean>"})," indicating authentication success."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"2-certificate-management",children:"2. Certificate Management"}),"\n",(0,s.jsx)(i.h4,{id:"self-issuing-a-certificate",children:(0,s.jsx)(i.strong,{children:"Self-Issuing a Certificate"})}),"\n",(0,s.jsx)(i.p,{children:"Generate a self-signed x509 certificate for an Auto ID."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"import { selfIssueCertificate } from '@autonomys/auto-id';\nimport { generateKeyPair } from '@autonomys/auto-utils';\n\n(async () => {\n  // Generate a key pair\n  const keyPair = await generateKeyPair();\n\n  // Subject name for the certificate\n  const subjectName = 'CN=User Name'; // Replace with appropriate subject\n\n  // Generate a self-signed certificate\n  const certificate = await selfIssueCertificate(subjectName, keyPair);\n\n  console.log('Certificate created:', certificate);\n\n  // Optionally, save the certificate to a file or store it securely\n})();\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"subjectName"}),": The subject name for the certificate (e.g., ",(0,s.jsx)(i.code,{children:"'CN=User Name'"}),")."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"keyPair"}),": The key pair for the certificate."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Promise<x509.X509Certificate>"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"issuing-a-certificate",children:(0,s.jsx)(i.strong,{children:"Issuing a Certificate"})}),"\n",(0,s.jsx)(i.p,{children:"Issue a certificate based on a Certificate Signing Request (CSR)."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"import {\n  createAndSignCSR,\n  issueCertificate,\n  selfIssueCertificate,\n} from '@autonomys/auto-id';\nimport { generateKeyPair } from '@autonomys/auto-utils';\n\n(async () => {\n  // Generate key pairs for the subject and issuer\n  const subjectKeyPair = await generateKeyPair();\n  const issuerKeyPair = await generateKeyPair();\n\n  // Subject and issuer names\n  const subjectName = 'CN=Subject Name';\n  const issuerName = 'CN=Issuer Name';\n\n  // Create issuer's self-signed certificate\n  const issuerCertificate = await selfIssueCertificate(issuerName, issuerKeyPair);\n\n  // Create and sign CSR for the subject\n  const csr = await createAndSignCSR(subjectName, subjectKeyPair);\n\n  // Issue certificate for the subject using issuer's certificate and key pair\n  const issuedCertificate = await issueCertificate(csr, {\n    certificate: issuerCertificate,\n    keyPair: issuerKeyPair,\n  });\n\n  console.log('Issued Certificate:', issuedCertificate);\n})();\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.strong,{children:["Parameters for ",(0,s.jsx)(i.code,{children:"issueCertificate"}),":"]})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"csr"}),": The CSR from the subject."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"issuerCertificateData"}),": Contains the issuer's certificate and key pair."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"validityPeriodDays"})," (optional): Certificate validity period in days."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Promise<x509.X509Certificate>"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"3-key-management",children:"3. Key Management"}),"\n",(0,s.jsx)(i.h4,{id:"generating-and-saving-a-key-pair",children:(0,s.jsx)(i.strong,{children:"Generating and Saving a Key Pair"})}),"\n",(0,s.jsx)(i.p,{children:"Generate a cryptographic key pair and save it to files."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"import { generateKeyPair, saveKey } from '@autonomys/auto-id';\n\n(async () => {\n  // Generate a key pair\n  const keyPair = await generateKeyPair();\n\n  // Save the private key\n  await saveKey(keyPair.privateKey, 'path/to/privateKey.pem', 'your-password');\n\n  // Save the public key\n  await saveKey(keyPair.publicKey, 'path/to/publicKey.pem');\n\n  console.log('Keys saved successfully.');\n})();\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"key"}),": The ",(0,s.jsx)(i.code,{children:"CryptoKey"})," to save."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"filePath"}),": The file path where the key will be saved."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"password"})," (optional): Password for encrypting the private key."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"4-zero-knowledge-proofs-zkps",children:"4. Zero-Knowledge Proofs (ZKPs)"}),"\n",(0,s.jsx)(i.h4,{id:"creating-a-zkp-claim",children:(0,s.jsx)(i.strong,{children:"Creating a ZKP Claim"})}),"\n",(0,s.jsx)(i.p,{children:"Generate a Zero-Knowledge Proof claim using the Reclaim protocol."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"import { ReclaimZKPClaim, buildReclaimRequest } from '@autonomys/auto-id';\nimport { Proof } from '@reclaimprotocol/js-sdk';\n\n(async () => {\n  // Application ID from Reclaim Protocol\n  const appId = 'your-app-id'; // Replace with your actual app ID\n\n  // Supported claim type (e.g., 'GoogleEmail')\n  const claimType = 'GoogleEmail';\n\n  // Build a Reclaim proof request\n  const reclaimRequest = await buildReclaimRequest(appId, claimType);\n\n  // Start the Reclaim session (this may involve user interaction)\n  reclaimRequest.startSession({\n    onSuccessCallback: async (proofs: Proof[]) => {\n      // Handle the proofs\n      const proof = proofs[0];\n\n      // Create a ZKP claim\n      const zkpClaim = new ReclaimZKPClaim('your-service-id', proof);\n\n      // Verify the proof validity\n      const isValid = await zkpClaim.verify();\n\n      if (isValid) {\n        console.log('ZKP Claim is valid:', zkpClaim);\n      } else {\n        console.log('ZKP Claim verification failed.');\n      }\n    },\n    onFailureCallback: (error: Error) => {\n      console.error('Reclaim session failed:', error);\n    },\n  });\n})();\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"serviceId"}),": An identifier for your service."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"proof"}),": The proof object obtained from the Reclaim protocol."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Promise<void>"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Asynchronous Functions"}),": Many functions return promises and should be used with ",(0,s.jsx)(i.code,{children:"await"})," to ensure proper execution flow."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"API Disconnection"}),": Always disconnect the API instance after your operations are complete to free up resources."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Error Handling"}),": Wrap your asynchronous calls in ",(0,s.jsx)(i.code,{children:"try...catch"})," blocks to handle potential errors gracefully."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Security Considerations"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Private Keys"}),": Handle private keys securely. Do not expose them in your code or logs."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Password Protection"}),": When saving private keys, use password protection to encrypt the key files."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Certificate Validity"}),": Ensure that certificates have appropriate validity periods and are renewed before expiration."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>o});var s=n(6540);const r={},t=s.createContext(r);function a(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);
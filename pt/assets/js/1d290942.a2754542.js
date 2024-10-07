"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4720],{5628:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=s(4848),t=s(8453);const r={title:"Auto Utils",sidebar_position:5,description:"Start Building using Auto SDK",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto Utils"]},d=void 0,l={id:"develop/auto_sdk/auto-utils",title:"Auto Utils",description:"Start Building using Auto SDK",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/develop/auto_sdk/auto-utils.md",sourceDirName:"develop/auto_sdk",slug:"/develop/auto_sdk/auto-utils",permalink:"/pt/docs/develop/auto_sdk/auto-utils",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/auto_sdk/auto-utils.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Auto Utils",sidebar_position:5,description:"Start Building using Auto SDK",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto Utils"]},sidebar:"tutorialSidebar",previous:{title:"Auto XDM",permalink:"/pt/docs/develop/auto_sdk/auto-xdm"},next:{title:"Develop on Nova EVM",permalink:"/pt/docs/category/develop-on-nova-evm"}},c={},a=[{value:"Available functions",id:"available-functions",level:3},{value:"Account Utilities",id:"account-utilities",level:3},{value:"Event Utilities",id:"event-utilities",level:3},{value:"Transaction Utilities",id:"transaction-utilities",level:3},{value:"Signing Utilities",id:"signing-utilities",level:3},{value:"Event Validation",id:"event-validation",level:3},{value:"Utility Functions",id:"utility-functions",level:3},{value:"Types and Interfaces",id:"types-and-interfaces",level:3},{value:"Usage Examples",id:"usage-examples",level:3}];function o(e){const n={admonition:"admonition",br:"br",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"available-functions",children:"Available functions"}),"\n",(0,i.jsx)(n.h3,{id:"account-utilities",children:"Account Utilities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"createAccountIdType(api: ApiPromise, address: string): Uint8Array"}),(0,i.jsx)(n.br,{}),"\n","Creates a typed ",(0,i.jsx)(n.code,{children:"AccountId"})," object from an address and returns it as a ",(0,i.jsx)(n.code,{children:"Uint8Array"}),". This is useful for low-level interactions where the account ID needs to be in a specific binary format."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"event-utilities",children:"Event Utilities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Type"})," (Enum)",(0,i.jsx)(n.br,{}),"\n","Enum representing event types:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"system"}),": ",(0,i.jsx)(n.code,{children:"'system'"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"eventName(type: Type, event: string): string"}),(0,i.jsx)(n.br,{}),"\n","Constructs a full event name by combining the event type and event name, e.g., ",(0,i.jsx)(n.code,{children:"system.ExtrinsicSuccess"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"eventsGroup: { system: { [key: string]: string } }"}),(0,i.jsx)(n.br,{}),"\n","An object grouping system events by name, such as ",(0,i.jsx)(n.code,{children:"failure"}),", ",(0,i.jsx)(n.code,{children:"newAccount"}),", and ",(0,i.jsx)(n.code,{children:"success"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expectSuccessfulTxEvent: string[]"}),(0,i.jsx)(n.br,{}),"\n","An array containing the default success event names, typically used to validate transaction success."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"transaction-utilities",children:"Transaction Utilities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"signAndSendTx<TError>(sender: AddressOrPair | KeyringPair, tx: SubmittableExtrinsic<'promise', ISubmittableResult>, options?: Partial<SignerOptions>, eventsExpected?: Events, log?: boolean, mapErrorCodeToEnum?: (errorCode: string) => TError | undefined): Promise<TransactionSignedAndSend & { receipt: SubmittableResult; identifier?: string | null }>"}),(0,i.jsx)(n.br,{}),"\n","Signs and sends a transaction, waits for its inclusion in a block, and validates that expected events have occurred. It returns an object containing the transaction hash, block hash, events, receipt, and any identifier if applicable."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sender"}),": The account or keyring pair sending the transaction."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tx"}),": The transaction to be sent."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"options"}),": Optional signer options."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eventsExpected"}),": An array of expected event names to validate against."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"log"}),": If ",(0,i.jsx)(n.code,{children:"true"}),", logs transaction progress and events."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mapErrorCodeToEnum"}),": Optional function to map error codes to custom error enums."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns:"})," A promise that resolves to an object containing transaction details and receipt."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"signing-utilities",children:"Signing Utilities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"signMessage(signer: Signer, address: string, data: string): Promise<{ signature: string }>"}),(0,i.jsx)(n.br,{}),"\n","Signs a message using the provided signer and address. Returns an object containing the signature."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"signer"}),": The signer object capable of signing raw messages."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"address"}),": The address of the account used for signing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"data"}),": The message or data to be signed."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"signingKey(publicKey: Uint8Array): string"}),(0,i.jsx)(n.br,{}),"\n","Converts a public key ",(0,i.jsx)(n.code,{children:"Uint8Array"})," into a hexadecimal string representation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"signatureVerify"}),":",(0,i.jsx)(n.br,{}),"\n","Re-exported from ",(0,i.jsx)(n.code,{children:"@polkadot/util-crypto"}),". A function used to verify signatures against messages and public keys."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"event-validation",children:"Event Validation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"validateEvents(events: EventRecord[], eventsExpected?: Events, tx: string, block: string, log?: boolean): EventsValidated"}),(0,i.jsx)(n.br,{}),"\n","Validates that the expected events are present in the list of events from a transaction."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"events"}),": The array of ",(0,i.jsx)(n.code,{children:"EventRecord"})," objects emitted by the transaction."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eventsExpected"}),": An array of expected event names to validate against."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tx"}),": The transaction hash as a string."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"block"}),": The block hash as a string."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"log"}),": If ",(0,i.jsx)(n.code,{children:"true"}),", logs detailed information about event validation."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns:"})," An object containing arrays of expected events and found events."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"utility-functions",children:"Utility Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"isAddress(address: string): boolean"}),(0,i.jsx)(n.br,{}),"\n","Checks if the provided string is a valid Substrate address."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"isHex(value: string): boolean"}),(0,i.jsx)(n.br,{}),"\n","Checks if the provided string is a valid hexadecimal value."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"types-and-interfaces",children:"Types and Interfaces"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Type Enums:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Type"}),": Enum for event types, currently includes:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"system"}),": Represents system events."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Custom Types:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"AddressOrPair"}),": Represents an address string or a keyring pair."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Events"}),": An array of event names (",(0,i.jsx)(n.code,{children:"string[]"}),") or nested arrays for grouping."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"EventsValidated"}),": An object with two properties:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"expected"}),": Events that were expected but not found."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"found"}),": Events that were found during validation."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TransactionSignedAndSend"}),": An object containing transaction details like ",(0,i.jsx)(n.code,{children:"success"}),", ",(0,i.jsx)(n.code,{children:"txHash"}),", ",(0,i.jsx)(n.code,{children:"blockHash"}),", and ",(0,i.jsx)(n.code,{children:"events"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signing and Sending a Transaction:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { signAndSendTx } from '.packages/auto-utils';\n\nconst sender = keyringPair; // Your keyring pair or address\nconst tx = api.tx.balances.transfer(receiverAddress, amount);\nconst result = await signAndSendTx(sender, tx);\n\nif (result.success) {\n  console.log('Transaction successful:', result.txHash);\n} else {\n  console.error('Transaction failed');\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signing a Message:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { signMessage } from '.packages/auto-utils';\n\nconst signature = await signMessage(signer, address, 'Message to sign');\nconsole.log('Signature:', signature);\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Validating Events:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { validateEvents } from '.packages/auto-utils';\n\nconst eventsValidated = validateEvents(events, ['system.ExtrinsicSuccess'], txHash, blockHash);\n\nif (eventsValidated.expected.length === 0) {\n  console.log('All expected events were found.');\n} else {\n  console.warn('Some expected events were not found:', eventsValidated.expected);\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Checking an Address and Hex Value:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { isAddress, isHex } from '.packages/auto-utils';\n\nconst addressValid = isAddress('5F3sa2TJAWMqDhXG6jhV4N8ko9p2Y3j5N5eZ5c9pWAFaFfLZ');\nconsole.log('Address is valid:', addressValid);\n\nconst hexValid = isHex('0x123abc');\nconsole.log('Hex value is valid:', hexValid);\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["All asynchronous functions that return a ",(0,i.jsx)(n.code,{children:"Promise<T>"})," should be awaited to retrieve the desired data. Functions interacting with the blockchain may require an active connection (",(0,i.jsx)(n.code,{children:"api"}),") to a node."]})}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsx)(n.p,{children:"Ensure that you handle any errors that may occur during asynchronous operations, especially when dealing with transactions or network requests. Always validate user input and be cautious with private keys and sensitive data."})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var i=s(6540);const t={},r=i.createContext(t);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
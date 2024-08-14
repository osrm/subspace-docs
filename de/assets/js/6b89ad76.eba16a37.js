"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[1929],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Allgemeine Informationen zu Entwicklerwerkzeugen und Autonomys EVM",sidebar_position:3,description:"Guide on setting up",keywords:["metamask","autonomys network"]},i=void 0,s={unversionedId:"develop/nova/general-information",id:"develop/nova/general-information",title:"Allgemeine Informationen zu Entwicklerwerkzeugen und Autonomys EVM",description:"Guide on setting up",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/develop/nova/general-information.md",sourceDirName:"develop/nova",slug:"/develop/nova/general-information",permalink:"/de/docs/develop/nova/general-information",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/general-information.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Allgemeine Informationen zu Entwicklerwerkzeugen und Autonomys EVM",sidebar_position:3,description:"Guide on setting up",keywords:["metamask","autonomys network"]},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/de/docs/develop/nova/quick_start"},next:{title:"Setting up MetaMask",permalink:"/de/docs/develop/nova/setting-up-metamask"}},l={},c=[{value:"What tools are available for developers?",id:"what-tools-are-available-for-developers",level:3},{value:"Smart Contract",id:"smart-contract",level:3},{value:"Differences with Ethereum",id:"differences-with-ethereum",level:3},{value:"What is Solidity?",id:"what-is-solidity",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"what-tools-are-available-for-developers"},"What tools are available for developers?"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Developing smart contracts involves a suite of tools that aid in writing, testing and deploying code on the blockchain. ",(0,a.kt)("strong",{parentName:"p"},"Autonomys nutzt eine Instanz der Ethereum Virtual Machine. Daher ist jedes Werkzeug, das zum Erstellen, Testen und Bereitstellen intelligenter Vertr\xe4ge auf Ethereum verwendet wird, auch f\xfcr Autonomys verf\xfcgbar!")),(0,a.kt)("p",null,"First, Solidity is the primary programming language for writing smart contracts. It is statically typed, supports inheritance, libraries, and complex user-defined types, making it familiar for developers with a background in other statically typed languages such as C++, Java, or JavaScript."),(0,a.kt)("p",null,"Integrated Development Environments (IDEs) such as the ",(0,a.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix IDE")," are often used to aid in writing smart contracts. Remix IDE is a browser-based IDE that enables you to write, deploy, and interact with Solidity smart contracts. It features a built-in static analysis tool that checks your code for common errors."),(0,a.kt)("p",null,"For local development and testing, you have multiple options. Sie k\xf6nnen Ihre eigene Autonomys Entwickler Node und Farmer aufsetzen, um Vertr\xe4ge zu ver\xf6ffentlichen, Anwendungen zu entwickeln und Tests durchzuf\xfchren. Alternatively, you can use Ethereum development tools like ",(0,a.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-network/docs/overview"},"Hardhat")," or ",(0,a.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/anvil/"},"Anvil"),", which are fully compatible with Autonomys due to their EVM compatibility."),(0,a.kt)("p",null,"For deploying and interacting with smart contracts, a JavaScript provider like the one injected by the ",(0,a.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," browser extension is used. This provider enables JavaScript applications to communicate with the Autonomys network or any Ethereum-compatible network. It's compatible with both ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ethers.org/v5/"},"ethers.js"),", ",(0,a.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.10.0/"},"web3.js")," and ",(0,a.kt)("a",{parentName:"p",href:"https://web3py.readthedocs.io/en/stable/"},"Web3.py"),", allowing developers to use either library for their blockchain operations."),(0,a.kt)("p",null,"All these tools together provide an ecosystem for EVM-compatible smart contract development, making the process more manageable and efficient."),(0,a.kt)("h3",{id:"smart-contract"},"Smart Contract"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"A smart contract is a digital agreement coded into a blockchain network, designed to automatically execute or enforce the terms of a contract. These self-executing contracts, primarily developed on decentralized computer systems, eliminate the need for an intermediary by conducting transactions directly between parties. Smart contracts are transparent, traceable, and irreversible, providing immediate certainty about outcomes once preset conditions are met. They streamline various applications, from finance to supply chain management, by automating workflows and facilitating trustless interactions."),(0,a.kt)("h3",{id:"differences-with-ethereum"},"Differences with Ethereum"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Autonomys Token (ATC) (TSSC for Subspace Credit during the testnet) is the sole method of payment for gas within the Autonomys EVM runtime.\nThere will be a bridge to convert farmed tokens into EVM-compatible tokens to cover the gas fees, however, at the moment the only viable option to get some TSSC on your wallet is through the Autonomys ",(0,a.kt)("a",{parentName:"p",href:"/de/docs/develop/nova/faucet"},"faucet")),(0,a.kt)("h3",{id:"what-is-solidity"},"What is Solidity?"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Solidity is a statically typed, contract-oriented, high-level language primarily used for implementing smart contracts on blockchain platforms like Ethereum. Its syntax is similar to that of JavaScript and C++, which makes it relatively easy for developers from those language backgrounds to pick it up. Its features such as contract classes, inheritance, complex user-defined types, and libraries bring object-oriented programming capabilities to blockchain development."),(0,a.kt)("p",null,'One of the key features of Solidity is its first-class support for "contracts." These are akin to classes in object-oriented languages but are deployed on the Ethereum blockchain, allowing them to maintain a persistent state over time and interact with other contracts, the same way as objects interact in traditional programming.'),(0,a.kt)("p",null,"Moreover, Solidity comes with safety features, such as a robust type system and control structures, which help prevent bugs. It also provides a variety of built-in functions for performing operations like cryptographic hashing, signature verification, and address checking, making it easier to write secure code."),(0,a.kt)("p",null,"The popularity of Solidity is primarily due to its design for Ethereum, the leading smart contract platform. As Ethereum gained traction for decentralized applications (dApps), Solidity became the go-to language for writing smart contracts for these applications. Furthermore, its resemblance to widely-used languages like JavaScript and C++ helped its adoption amongst developers."),(0,a.kt)("p",null,"Lastly, Solidity is continually evolving with frequent updates, new features, and improvements that address the unique needs of blockchain development. This responsive development and the thriving community around it further solidify its position as the leading language for smart contract development."),(0,a.kt)("p",null,"Solidity has a great community of developers and extensive documentation is available on the official ",(0,a.kt)("a",{parentName:"p",href:"https://soliditylang.org/"},"website"),"."))}d.isMDXComponent=!0}}]);
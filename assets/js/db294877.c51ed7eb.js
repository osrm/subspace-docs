"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[1769],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||n;return o?a.createElement(h,i(i({ref:t},p),{},{components:o})):a.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3810:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=o(7462),r=(o(7294),o(3905));const n={title:"General information on dev tools and Autonomys EVM",sidebar_position:3,description:"Guide on setting up",keywords:["metamask","autonomys network"]},i=void 0,s={unversionedId:"develop/nova/general-information",id:"develop/nova/general-information",title:"General information on dev tools and Autonomys EVM",description:"Guide on setting up",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/develop/nova/general-information.md",sourceDirName:"develop/nova",slug:"/develop/nova/general-information",permalink:"/docs/develop/nova/general-information",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/general-information.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"General information on dev tools and Autonomys EVM",sidebar_position:3,description:"Guide on setting up",keywords:["metamask","autonomys network"]},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/docs/develop/nova/quick_start"},next:{title:"Setting up MetaMask",permalink:"/docs/develop/nova/setting-up-metamask"}},l={},c=[{value:"What tools are available for developers?",id:"what-tools-are-available-for-developers",level:3},{value:"Smart Contract",id:"smart-contract",level:3},{value:"Differences with Ethereum",id:"differences-with-ethereum",level:3},{value:"What is Solidity?",id:"what-is-solidity",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"what-tools-are-available-for-developers"},"What tools are available for developers?"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Developing smart contracts involves a suite of tools that aid in writing, testing and deploying code on the blockchain. ",(0,r.kt)("strong",{parentName:"p"},"Autonomys utilizes an instance of the Ethereum Virtual Machine. Therefore, every tool used to build, test, and deploy smart contracts on Ethereum is also available for Autonomys!")),(0,r.kt)("p",null,"First, Solidity is the primary programming language for writing smart contracts. It is statically typed, supports inheritance, libraries, and complex user-defined types, making it familiar for developers with a background in other statically typed languages such as C++, Java, or JavaScript."),(0,r.kt)("p",null,"Integrated Development Environments (IDEs) such as the ",(0,r.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix IDE")," are often used to aid in writing smart contracts. Remix IDE is a browser-based IDE that enables you to write, deploy, and interact with Solidity smart contracts. It features a built-in static analysis tool that checks your code for common errors."),(0,r.kt)("p",null,"For local development and testing, you have multiple options. You can spin up your own version of an Autonomys Developer Node and farmer to deploy contracts, develop applications, and run tests. Alternatively, you can use Ethereum development tools like ",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-network/docs/overview"},"Hardhat")," or ",(0,r.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/anvil/"},"Anvil"),", which are fully compatible with Autonomys due to their EVM compatibility."),(0,r.kt)("p",null,"For deploying and interacting with smart contracts, a JavaScript provider like the one injected by the ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," browser extension is used. This provider enables JavaScript applications to communicate with the Autonomys network or any Ethereum-compatible network. It's compatible with both ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethers.org/v5/"},"ethers.js"),", ",(0,r.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.10.0/"},"web3.js")," and ",(0,r.kt)("a",{parentName:"p",href:"https://web3py.readthedocs.io/en/stable/"},"Web3.py"),", allowing developers to use either library for their blockchain operations."),(0,r.kt)("p",null,"All these tools together provide an ecosystem for EVM-compatible smart contract development, making the process more manageable and efficient."),(0,r.kt)("h3",{id:"smart-contract"},"Smart Contract"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"A smart contract is a digital agreement coded into a blockchain network, designed to automatically execute or enforce the terms of a contract. These self-executing contracts, primarily developed on decentralized computer systems, eliminate the need for an intermediary by conducting transactions directly between parties. Smart contracts are transparent, traceable, and irreversible, providing immediate certainty about outcomes once preset conditions are met. They streamline various applications, from finance to supply chain management, by automating workflows and facilitating trustless interactions."),(0,r.kt)("h3",{id:"differences-with-ethereum"},"Differences with Ethereum"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Autonomys Token (ATC) (TSSC for Subspace Credit during the testnet) is the sole method of payment for gas within the Autonomys EVM runtime.\nThere will be a bridge to convert farmed tokens into EVM-compatible tokens to cover the gas fees, however, at the moment the only viable option to get some TSSC on your wallet is through the Autonomys ",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/nova/faucet"},"faucet")),(0,r.kt)("h3",{id:"what-is-solidity"},"What is Solidity?"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Solidity is a statically typed, contract-oriented, high-level language primarily used for implementing smart contracts on blockchain platforms like Ethereum. Its syntax is similar to that of JavaScript and C++, which makes it relatively easy for developers from those language backgrounds to pick it up. Its features such as contract classes, inheritance, complex user-defined types, and libraries bring object-oriented programming capabilities to blockchain development."),(0,r.kt)("p",null,'One of the key features of Solidity is its first-class support for "contracts." These are akin to classes in object-oriented languages but are deployed on the Ethereum blockchain, allowing them to maintain a persistent state over time and interact with other contracts, the same way as objects interact in traditional programming.'),(0,r.kt)("p",null,"Moreover, Solidity comes with safety features, such as a robust type system and control structures, which help prevent bugs. It also provides a variety of built-in functions for performing operations like cryptographic hashing, signature verification, and address checking, making it easier to write secure code."),(0,r.kt)("p",null,"The popularity of Solidity is primarily due to its design for Ethereum, the leading smart contract platform. As Ethereum gained traction for decentralized applications (dApps), Solidity became the go-to language for writing smart contracts for these applications. Furthermore, its resemblance to widely-used languages like JavaScript and C++ helped its adoption amongst developers."),(0,r.kt)("p",null,"Lastly, Solidity is continually evolving with frequent updates, new features, and improvements that address the unique needs of blockchain development. This responsive development and the thriving community around it further solidify its position as the leading language for smart contract development."),(0,r.kt)("p",null,"Solidity has a great community of developers and extensive documentation is available on the official ",(0,r.kt)("a",{parentName:"p",href:"https://soliditylang.org/"},"website"),"."))}u.isMDXComponent=!0}}]);
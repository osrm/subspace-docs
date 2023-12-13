"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[2182],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||n;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4601:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={title:"General information on dev tools and Subspace EVM",sidebar_position:3,description:"Guide on setting up",keywords:["metamask","subspace network"]},i=void 0,s={unversionedId:"develop/nova/general-information",id:"develop/nova/general-information",title:"General information on dev tools and Subspace EVM",description:"Guide on setting up",source:"@site/docs/develop/nova/general-information.md",sourceDirName:"develop/nova",slug:"/develop/nova/general-information",permalink:"/it/docs/pre-release/develop/nova/general-information",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/develop/nova/general-information.md",tags:[],version:"current",lastUpdatedBy:"Emil Fattakhov",lastUpdatedAt:1702503704,formattedLastUpdatedAt:"13 dic 2023",sidebarPosition:3,frontMatter:{title:"General information on dev tools and Subspace EVM",sidebar_position:3,description:"Guide on setting up",keywords:["metamask","subspace network"]},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/it/docs/pre-release/develop/nova/quick_start"},next:{title:"Setting up MetaMask",permalink:"/it/docs/pre-release/develop/nova/setting-up-metamask"}},l={},c=[{value:"What tools are available for developers?",id:"what-tools-are-available-for-developers",level:3},{value:"Smart Contract",id:"smart-contract",level:3},{value:"Differences with Ethereum",id:"differences-with-ethereum",level:3},{value:"What is Solidity?",id:"what-is-solidity",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"what-tools-are-available-for-developers"},"What tools are available for developers?"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Developing smart contracts involves a suite of tools that aid in writing, testing and deploying code on the blockchain. ",(0,o.kt)("strong",{parentName:"p"},"Subspace utilizes an instance of the Ethereum Virtual Machine. Therefore, every tool used to build, test, and deploy smart contracts on Ethereum is also available for Subspace!")),(0,o.kt)("p",null,"First, Solidity is the primary programming language for writing smart contracts. It is statically typed, supports inheritance, libraries, and complex user-defined types, making it familiar for developers with a background in other statically typed languages such as C++, Java, or JavaScript."),(0,o.kt)("p",null,"Integrated Development Environments (IDEs) such as the ",(0,o.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix IDE")," are often used to aid in writing smart contracts. Remix IDE is a browser-based IDE that enables you to write, deploy, and interact with Solidity smart contracts. It features a built-in static analysis tool that checks your code for common errors."),(0,o.kt)("p",null,"For local development and testing, you have multiple options. You can spin up your own version of a Subspace Developer Node and farmer to deploy contracts, develop applications, and run tests. Alternatively, you can use Ethereum development tools like ",(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-network/docs/overview"},"Hardhat")," or ",(0,o.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/anvil/"},"Anvil"),", which are fully compatible with Subspace due to their EVM compatibility."),(0,o.kt)("p",null,"For deploying and interacting with smart contracts, a JavaScript provider like the one injected by the ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," browser extension is used. This provider enables JavaScript applications to communicate with the Subspace network or any Ethereum-compatible network. It's compatible with both ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ethers.org/v5/"},"ethers.js"),", ",(0,o.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.10.0/"},"web3.js")," and ",(0,o.kt)("a",{parentName:"p",href:"https://web3py.readthedocs.io/en/stable/"},"Web3.py"),", allowing developers to use either library for their blockchain operations."),(0,o.kt)("p",null,"All these tools together provide an ecosystem for EVM-compatible smart contract development, making the process more manageable and efficient."),(0,o.kt)("h3",{id:"smart-contract"},"Smart Contract"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"A smart contract is a digital agreement coded into a blockchain network, designed to automatically execute or enforce the terms of a contract. These self-executing contracts, primarily developed on decentralized computer systems, eliminate the need for an intermediary by conducting transactions directly between parties. Smart contracts are transparent, traceable, and irreversible, providing immediate certainty about outcomes once preset conditions are met. They streamline various applications, from finance to supply chain management, by automating workflows and facilitating trustless interactions."),(0,o.kt)("h3",{id:"differences-with-ethereum"},"Differences with Ethereum"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Subspace Token (TSSC) is the sole method of payment for gas within the Subspace EVM runtime.\nThere will be a bridge to convert farmed tokens into EVM-compatible tokens to cover the gas fees, however, at the moment the only viable option to get some TSSC on your wallet is through the Subspace ",(0,o.kt)("a",{parentName:"p",href:"/it/docs/pre-release/develop/nova/faucet"},"faucet")),(0,o.kt)("h3",{id:"what-is-solidity"},"What is Solidity?"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Solidity is a statically typed, contract-oriented, high-level language primarily used for implementing smart contracts on blockchain platforms like Ethereum. Its syntax is similar to that of JavaScript and C++, which makes it relatively easy for developers from those language backgrounds to pick it up. Its features such as contract classes, inheritance, complex user-defined types, and libraries bring object-oriented programming capabilities to blockchain development."),(0,o.kt)("p",null,'One of the key features of Solidity is its first-class support for "contracts." These are akin to classes in object-oriented languages but are deployed on the Ethereum blockchain, allowing them to maintain a persistent state over time and interact with other contracts, the same way as objects interact in traditional programming.'),(0,o.kt)("p",null,"Moreover, Solidity comes with safety features, such as a robust type system and control structures, which help prevent bugs. It also provides a variety of built-in functions for performing operations like cryptographic hashing, signature verification, and address checking, making it easier to write secure code."),(0,o.kt)("p",null,"The popularity of Solidity is primarily due to its design for Ethereum, the leading smart contract platform. As Ethereum gained traction for decentralized applications (dApps), Solidity became the go-to language for writing smart contracts for these applications. Furthermore, its resemblance to widely-used languages like JavaScript and C++ helped its adoption amongst developers."),(0,o.kt)("p",null,"Lastly, Solidity is continually evolving with frequent updates, new features, and improvements that address the unique needs of blockchain development. This responsive development and the thriving community around it further solidify its position as the leading language for smart contract development."),(0,o.kt)("p",null,"Solidity has a great community of developers and extensive documentation is available on the official ",(0,o.kt)("a",{parentName:"p",href:"https://soliditylang.org/"},"website"),"."))}u.isMDXComponent=!0}}]);
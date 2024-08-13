"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8247],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>h});var n=o(7294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var l=n.createContext({}),u=function(t){var e=n.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=u(o),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return o?n.createElement(h,i(i({ref:e},c),{},{components:o})):n.createElement(h,i({ref:e},c))}));function h(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:r,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5016:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const a={title:"Quick start",sidebar_position:2,description:"Quick start one-pager",keywords:["autonomys network","quickstart"]},i=void 0,s={unversionedId:"develop/nova/quick_start",id:"develop/nova/quick_start",title:"Quick start",description:"Quick start one-pager",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/develop/nova/quick_start.md",sourceDirName:"develop/nova",slug:"/develop/nova/quick_start",permalink:"/de/docs/develop/nova/quick_start",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/quick_start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Quick start",sidebar_position:2,description:"Quick start one-pager",keywords:["autonomys network","quickstart"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/de/docs/develop/nova/intro"},next:{title:"General information on dev tools and Autonomys EVM",permalink:"/de/docs/develop/nova/general-information"}},l={},u=[{value:"The only tools needed to get you started",id:"the-only-tools-needed-to-get-you-started",level:2},{value:"Setup a MetaMask Wallet (or any other EVM-compatible wallet) and connect it to our custom EVM",id:"setup-a-metamask-wallet-or-any-other-evm-compatible-wallet-and-connect-it-to-our-custom-evm",level:3},{value:"Get tokens to your wallet using our faucet",id:"get-tokens-to-your-wallet-using-our-faucet",level:3},{value:"Test and deploy your smart contract",id:"test-and-deploy-your-smart-contract",level:3},{value:"Important note about submitting a transaction",id:"important-note-about-submitting-a-transaction",level:3},{value:"Have any questions? Feel free to post them on our forum or in our Developer-chat on Discord.",id:"have-any-questions-feel-free-to-post-them-on-our-forum-or-in-our-developer-chat-on-discord",level:3}],c={toc:u},p="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"the-only-tools-needed-to-get-you-started"},"The only tools needed to get you started"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The Quick Start is designed with the presumption that you are not a novice developer and have some basic understanding or experience. The Quick Start also anticipates that you seek a straightforward initiation into setting up a remote development environment."),(0,r.kt)("p",null,"Autonomys utilizes EVM (Ethereum Virtual Machine) so any tool available for Ethereum development is compatible with Autonomys."),(0,r.kt)("h3",{id:"setup-a-metamask-wallet-or-any-other-evm-compatible-wallet-and-connect-it-to-our-custom-evm"},"Setup a MetaMask Wallet (or any other EVM-compatible wallet) and connect it to our custom EVM"),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Network Name: Autonomys EVM\nNew RPC URL: https://nova-0.gemini-3h.subspace.network/ws\nChain ID: 490000\nCurrency Symbol: TSSC\n")),(0,r.kt)("h3",{id:"get-tokens-to-your-wallet-using-our-faucet"},"Get tokens to your wallet using our faucet"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Follow the instructions ",(0,r.kt)("a",{parentName:"p",href:"/de/docs/develop/nova/faucet"},"here")," to use our ",(0,r.kt)("strong",{parentName:"p"},"Faucet")," to get some TSSC."),(0,r.kt)("h3",{id:"test-and-deploy-your-smart-contract"},"Test and deploy your smart contract"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"You can use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://remix.ethereum.org/"},"Remix")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://book.getfoundry.sh/"},"Foundry"))," or any other tool familiar to you for testing and deploying your smart contracts. Just make sure to use our custom EVM domain and you're all set."),(0,r.kt)("p",null,"If anything above sounds unfamiliar, you can always fall back to our full guide."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"important-note-about-submitting-a-transaction"},"Important note about submitting a transaction"),(0,r.kt)("p",null,"Please avoid attempting to accelerate a transaction by including a tip alongside the gas fees. The transaction queue operates differently with Autonomys, leading to the possibility of two transactions sharing the same nonce. This could result in dual charges for gas fees - once for the execution and storage in the first transaction, and solely for storage in the second transaction. To prevent this scenario, ensure that you refrain from adding a tip in an attempt to speed the transaction up."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"have-any-questions-feel-free-to-post-them-on-our-forum-or-in-our-developer-chat-on-discord"},"Have any questions? Feel free to post them on ",(0,r.kt)("a",{parentName:"h3",href:"https://forum.autonomys.xyz/"},"our forum")," or in our ",(0,r.kt)("a",{parentName:"h3",href:"https://discord.gg/EAw6B48r"},"Developer-chat on Discord"),"."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In order to get access to the role-gated developer chat:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Join our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/vhv5cEZN"},"Discord"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Autonomys Network at the top left corner and choose ",(0,r.kt)("strong",{parentName:"p"},"Linked Roles"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Discord-1",src:o(2635).Z,width:"231",height:"539"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Link your GitHub account to get a developer role and gain access to ",(0,r.kt)("strong",{parentName:"p"},"developer-chat"),".\n",(0,r.kt)("img",{alt:"Discord-2",src:o(9744).Z,width:"737",height:"206"})))))}d.isMDXComponent=!0},2635:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/Discord-1-25bd70f76741163d9340dee4581cdb68.png"},9744:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/Discord-2-f26a783c4324243dec4a1c10235f646f.png"}}]);
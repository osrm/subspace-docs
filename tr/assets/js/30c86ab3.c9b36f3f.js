"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={title:"Remix IDE - testing and deployment",sidebar_position:6,description:"Testing and Deploying Smart Contracts using Remix IDE",keywords:["subspace network","remix ide"]},o=void 0,s={unversionedId:"developers/remix_guide",id:"developers/remix_guide",title:"Remix IDE - testing and deployment",description:"Testing and Deploying Smart Contracts using Remix IDE",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/developers/remix_guide.md",sourceDirName:"developers",slug:"/developers/remix_guide",permalink:"/tr/docs/pre-release/developers/remix_guide",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/tr/docusaurus-plugin-content-docs/current/developers/remix_guide.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Remix IDE - testing and deployment",sidebar_position:6,description:"Testing and Deploying Smart Contracts using Remix IDE",keywords:["subspace network","remix ide"]},sidebar:"tutorialSidebar",previous:{title:"Subspace faucet",permalink:"/tr/docs/pre-release/developers/faucet"},next:{title:"Foundry - testing and deployment",permalink:"/tr/docs/pre-release/developers/foundry_guide"}},c={},l=[{value:"Remix IDE guide",id:"remix-ide-guide",level:3}],p={toc:l},m="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"remix-ide-guide"},"Remix IDE guide"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Remix is a great tool that allows you to easily write, test and deploy smart contracts on any EVM-compatible  blockchain. Moreover, integration with MetaMask allows the utilization of any RPC, that\u2019s why we\u2019ve just set up a reference to Subspace core EVM in our MetaMask wallet!"),(0,r.kt)("p",null,"Remix has ",(0,r.kt)("a",{parentName:"p",href:"https://remix-ide.readthedocs.io/en/latest/"},"amazing documentation"),", but this guide will cover everything required to get you started."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using the browser of your choice navigate to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://remix.ethereum.org"},"Remix website."))," You will see a file explorer and interface for creating new workspaces, integrations with GitHub, Gist, IPFS, HTTPS, preloaded templates, and plugins. Let\u2019s create a new workspace by clicking on the + sign beside WORKSPACES."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Remix-1",src:n(684).Z,width:"685",height:"350"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can enter any name and use the ERC20 template."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Remix-2",src:n(8268).Z,width:"340",height:"377"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Right after you create your workspace, you will see a few folders created for you. Let\u2019s click on contracts and have a look at ",(0,r.kt)("inlineCode",{parentName:"p"},"MyToken.sol"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Remix-3",src:n(3613).Z,width:"342",height:"379"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Here, you can change the name of your contract (in the example, to ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter"),"), the name of the token (in this example, we're calling it ",(0,r.kt)("inlineCode",{parentName:"p"},"SubspaceTestToken"),") and the token symbol (we're using ",(0,r.kt)("inlineCode",{parentName:"p"},"TSSCtest"),"). Let\u2019s add a simple smart contract that has three functions - ",(0,r.kt)("inlineCode",{parentName:"p"},"setNumber()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"increment()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"decrement()"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},' // SPDX-License-Identifier: MIT\npragma solidity ^0.8.9;\n\nimport \'@openzeppelin/contracts/token/ERC20/ERC20.sol\';\n\ncontract Counter is ERC20 {\n    constructor() ERC20("SubspaceTestToken", "TSSCtest") {}\n\n    uint256 public number;\n\n    function setNumber(uint256 newNumber) public {\n        number = newNumber;\n    }\n\n    function increment() public {\n        number++;\n    }\n\n    function decrement() public {\n        number--;\n    }\n }\n')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Remix-4",src:n(1065).Z,width:"684",height:"350"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, let\u2019s compile a ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter")," contract. To compile, click on SOLIDITY COMPILER on the left and choose the compiler version that corresponds to the Solidity version of your contract. In our case, it\u2019s version 0.8.9. Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Compile MyToken.sol")," and check if it compiles correctly. If it does, you will see a green checkmark by the compiler."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Remix-5",src:n(4720).Z,width:"350",height:"569"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploying a smart contract could be an expensive procedure, based on the gas costs associated with the transaction. That is why it\u2019s recommended that you thoroughly test the smart contracts for correctness before proceeding with deployment. To test the contract, let\u2019s open the tests folder and have a look at ",(0,r.kt)("inlineCode",{parentName:"p"},"MyToken.sol")," created for us.",(0,r.kt)("br",{parentName:"p"}),"\n","Let\u2019s first try to run a test as is without making any changes."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Remix-6",src:n(4315).Z,width:"779",height:"400"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To run the tests, select SOLIDITY UNIT TESTING in the bar on the left and click Run."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Remix-7",src:n(1658).Z,width:"350",height:"417"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"As expected, the test failed because we manually changed the token name and symbol. This is Test Driven Development (TDD) in action! In order to make the test pass, replace the internals of ",(0,r.kt)("inlineCode",{parentName:"p"},"MyToken.sol")," with the provided below code. In the test, we're adding a few assertions for the ",(0,r.kt)("inlineCode",{parentName:"p"},"increment()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"decrement()")," functions. In this example, we will set up an initial value of ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," to 2 and ",(0,r.kt)("inlineCode",{parentName:"p"},"increment")," and then ",(0,r.kt)("inlineCode",{parentName:"p"},"decrement")," it by 1. We would expect the number to increase to 3 and then decrease back to 2."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' pragma solidity >=0.7.0 <0.9.0;\n import "remix_tests.sol";\n import "../contracts/MyToken.sol";\n\n contract CounterTest is Counter {\n\n    function testTokenInitialValues() public {\n        Assert.equal(name(), "SubspaceTestToken", "token name did not match");\n        Assert.equal(symbol(), "TSSCtest", "token symbol did not match");\n        Assert.equal(decimals(), 18, "token decimals did not match");\n        Assert.equal(totalSupply(), 0, "token supply should be zero");\n    }\n\n    Counter public counter;\n\n    function setUp() public {\n        counter = new Counter();\n        counter.setNumber(2);\n    }\n\n    function testIncrement() public {\n        counter.increment();\n        Assert.equal(counter.number(), 3, "test increment did not match");\n    }\n\n    function testDecrement() public {\n        counter.decrement();\n        Assert.equal(counter.number(), 2, "test decrement did not match");\n    }\n }\n')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Remix-8",src:n(5177).Z,width:"778",height:"400"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Great, all tests are now passing which means our smart contract ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter")," is indeed working as we expect. We\u2019re all set to deploy it now!"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Remix-9",src:n(7798).Z,width:"350",height:"447"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To deploy click on the DEPLOY AND RUN TRANSACTIONS tab on the left. Remix allows you to use one of the existing EVMs or inject your own provider through its integration with MetaMask. Since we already have a MetaMask Account set up, let\u2019s use this option."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Remix-10",src:n(5966).Z,width:"350",height:"595"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will be prompted to confirm the password with MetaMask, just make sure that the network you\u2019re connected to is Subspace EVM."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Remix-11",src:n(5467).Z,width:"350",height:"605"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Adjust the gas limit and deploy your smart contract on Subspace Core EVM. Now your transaction is recorded and you can interact with your smart contract at the bottom of the page - it's possible to call the functions ",(0,r.kt)("inlineCode",{parentName:"p"},"increment()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"decrement()")," as well as ",(0,r.kt)("inlineCode",{parentName:"p"},"setNumber()")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Remix-12",src:n(4757).Z,width:"350",height:"550"})))),(0,r.kt)("p",null,"Congratulations, you've just deployed your smart contract on Subspace Core EVM!"))}d.isMDXComponent=!0},684:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Remix-1-d0206fa95d420451ecdd17e94ef74788.png"},5966:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Remix-10-1f9898d164cdb54a3eb26ddc2137d3e1.png"},5467:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Remix-11-8fcd199526796d55c6cace291168a57f.png"},4757:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Remix-12-c77f1688bb362b204a4095bca6fe75fc.png"},8268:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Remix-2-00870623668f141197ba57f205a38ac5.png"},3613:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Remix-3-6ecfd57605e0a80582c45edd1da2bef1.png"},1065:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Remix-4-ebafc2bcd0f80ac8b135020f21b5c4ef.png"},4720:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Remix-5-b0fd840e43bebb342b1c4b458f2e13ca.png"},4315:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Remix-6-325d40445ae4448152be2fb307d30c1f.png"},1658:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Remix-7-7596e211dcc6b1ec76a949572cc6d118.png"},5177:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Remix-8-74aaeec76c2236665e0db5465bd5377a.png"},7798:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Remix-9-a04bacfa6217fc47e94f82673dfc3f33.png"}}]);
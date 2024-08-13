"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[2545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return n?o.createElement(h,r(r({ref:t},m),{},{components:n})):o.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={title:"Remix IDE - testing and deployment",sidebar_position:6,description:"Testing and Deploying Smart Contracts using Remix IDE",keywords:["autonomys network","remix ide"]},r=void 0,s={unversionedId:"develop/nova/remix_guide",id:"develop/nova/remix_guide",title:"Remix IDE - testing and deployment",description:"Testing and Deploying Smart Contracts using Remix IDE",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/develop/nova/remix_guide.md",sourceDirName:"develop/nova",slug:"/develop/nova/remix_guide",permalink:"/pl/docs/develop/nova/remix_guide",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/remix_guide.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Remix IDE - testing and deployment",sidebar_position:6,description:"Testing and Deploying Smart Contracts using Remix IDE",keywords:["autonomys network","remix ide"]},sidebar:"tutorialSidebar",previous:{title:"Autonomys faucet",permalink:"/pl/docs/develop/nova/faucet"},next:{title:"Foundry - testing and deployment",permalink:"/pl/docs/develop/nova/foundry_guide"}},l={},c=[{value:"Remix IDE guide",id:"remix-ide-guide",level:3}],m={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"remix-ide-guide"},"Remix IDE guide"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Remix is a great tool that allows you to easily write, test and deploy smart contracts on any EVM-compatible  blockchain. Moreover, integration with MetaMask allows the utilization of any RPC, that\u2019s why we\u2019ve just set up a reference to Autonomys core EVM in our MetaMask wallet!"),(0,a.kt)("p",null,"Remix has ",(0,a.kt)("a",{parentName:"p",href:"https://remix-ide.readthedocs.io/en/latest/"},"amazing documentation"),", but this guide will cover everything required to get you started."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Using the browser of your choice navigate to ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://remix.ethereum.org"},"Remix website.")),"\nYou will see a file explorer and interface for creating new workspaces, integrations with GitHub, Gist, IPFS, HTTPS, preloaded templates, and plugins.\nLet\u2019s create a new workspace by clicking on the + sign beside WORKSPACES.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remix-1",src:n(684).Z,width:"685",height:"350"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"You can enter any name and use the ERC20 template.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remix-2",src:n(8268).Z,width:"340",height:"377"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Right after you create your workspace, you will see a few folders created for you.\nLet\u2019s click on contracts and have a look at ",(0,a.kt)("inlineCode",{parentName:"li"},"MyToken.sol"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remix-3",src:n(3613).Z,width:"342",height:"379"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Here, you can change the name of your contract (in the example, to ",(0,a.kt)("inlineCode",{parentName:"li"},"Counter"),"), the name of the token (in this example, we're calling it ",(0,a.kt)("inlineCode",{parentName:"li"},"SubspaceTestToken"),") and the token symbol (we're using ",(0,a.kt)("inlineCode",{parentName:"li"},"TSSCtest"),").\nLet\u2019s add a simple smart contract that has three functions - ",(0,a.kt)("inlineCode",{parentName:"li"},"setNumber()"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"increment()")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"decrement()"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' // SPDX-License-Identifier: MIT\npragma solidity ^0.8.9;\n\nimport \'@openzeppelin/contracts/token/ERC20/ERC20.sol\';\n\ncontract Counter is ERC20 {\n    constructor() ERC20("AutonomysTestToken", "TSSCtest") {}\n\n    uint256 public number;\n\n    function setNumber(uint256 newNumber) public {\n        number = newNumber;\n    }\n\n    function increment() public {\n        number++;\n    }\n\n    function decrement() public {\n        number--;\n    }\n }\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remix-4",src:n(1065).Z,width:"684",height:"350"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Next, let\u2019s compile a ",(0,a.kt)("inlineCode",{parentName:"li"},"Counter")," contract. To compile, click on SOLIDITY COMPILER on the left and choose the compiler version that corresponds to the Solidity version of your contract. In our case, it\u2019s version 0.8.9.\nClick on ",(0,a.kt)("inlineCode",{parentName:"li"},"Compile MyToken.sol")," and check if it compiles correctly. If it does, you will see a green checkmark by the compiler.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remix-5",src:n(4720).Z,width:"350",height:"569"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Deploying a smart contract could be an expensive procedure, based on the gas costs associated with the transaction. That is why it\u2019s recommended that you thoroughly test the smart contracts for correctness before proceeding with deployment.\nTo test the contract, let\u2019s open the tests folder and have a look at ",(0,a.kt)("inlineCode",{parentName:"li"},"MyToken.sol")," created for us.\\\nLet\u2019s first try to run a test as is without making any changes.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remix-6",src:n(4315).Z,width:"779",height:"400"})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"To run the tests, select SOLIDITY UNIT TESTING in the bar on the left and click Run.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remix-7",src:n(1658).Z,width:"350",height:"417"})),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"As expected, the test failed because we manually changed the token name and symbol.\nThis is Test Driven Development (TDD) in action! In order to make the test pass, replace the internals of ",(0,a.kt)("inlineCode",{parentName:"li"},"MyToken.sol")," with the provided below code. In the test, we're adding a few assertions for the ",(0,a.kt)("inlineCode",{parentName:"li"},"increment()")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"decrement()")," functions. In this example, we will set up an initial value of ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," to 2 and ",(0,a.kt)("inlineCode",{parentName:"li"},"increment")," and then ",(0,a.kt)("inlineCode",{parentName:"li"},"decrement")," it by 1. We would expect the number to increase to 3 and then decrease back to 2.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},' pragma solidity >=0.7.0 <0.9.0;\n import "remix_tests.sol";\n import "../contracts/MyToken.sol";\n\n contract CounterTest is Counter {\n\n    function testTokenInitialValues() public {\n        Assert.equal(name(), "AutonomysTestToken", "token name did not match");\n        Assert.equal(symbol(), "TSSCtest", "token symbol did not match");\n        Assert.equal(decimals(), 18, "token decimals did not match");\n        Assert.equal(totalSupply(), 0, "token supply should be zero");\n    }\n\n    Counter public counter;\n\n    function setUp() public {\n        counter = new Counter();\n        counter.setNumber(2);\n    }\n\n    function testIncrement() public {\n        counter.increment();\n        Assert.equal(counter.number(), 3, "test increment did not match");\n    }\n\n    function testDecrement() public {\n        counter.decrement();\n        Assert.equal(counter.number(), 2, "test decrement did not match");\n    }\n }\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remix-8",src:n(5177).Z,width:"778",height:"400"})),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Great, all tests are now passing which means our smart contract ",(0,a.kt)("inlineCode",{parentName:"li"},"Counter")," is indeed working as we expect.\nWe\u2019re all set to deploy it now!")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remix-9",src:n(7798).Z,width:"350",height:"447"})),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"To deploy click on the DEPLOY AND RUN TRANSACTIONS tab on the left.\nRemix allows you to use one of the existing EVMs or inject your own provider through its integration with MetaMask.\nSince we already have a MetaMask Account set up, let\u2019s use this option.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remix-10",src:n(5966).Z,width:"350",height:"595"})),(0,a.kt)("ol",{start:11},(0,a.kt)("li",{parentName:"ol"},"You will be prompted to confirm the password with MetaMask, just make sure that the network you\u2019re connected to is Autonomys EVM.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remix-11",src:n(5467).Z,width:"350",height:"605"})),(0,a.kt)("ol",{start:12},(0,a.kt)("li",{parentName:"ol"},"Adjust the gas limit and deploy your smart contract on Autonomys Core EVM.\nNow your transaction is recorded and you can interact with your smart contract at the bottom of the page - it's possible to call the functions ",(0,a.kt)("inlineCode",{parentName:"li"},"increment()")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"decrement()")," as well as ",(0,a.kt)("inlineCode",{parentName:"li"},"setNumber()"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Do not attempt to speed up a transaction (do not include a tip on top of the gas fees). To read more about this, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/pl/docs/develop/nova/quick_start#important-note-about-submitting-the-transaction"},"this section"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remix-12",src:n(4757).Z,width:"350",height:"550"})),(0,a.kt)("p",null,"Congratulations, you've just deployed your smart contract on Autonomys Core EVM!"))}p.isMDXComponent=!0},684:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Remix-1-d0206fa95d420451ecdd17e94ef74788.png"},5966:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Remix-10-1f9898d164cdb54a3eb26ddc2137d3e1.png"},5467:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Remix-11-8fcd199526796d55c6cace291168a57f.png"},4757:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Remix-12-c77f1688bb362b204a4095bca6fe75fc.png"},8268:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Remix-2-00870623668f141197ba57f205a38ac5.png"},3613:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Remix-3-6ecfd57605e0a80582c45edd1da2bef1.png"},1065:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Remix-4-ebafc2bcd0f80ac8b135020f21b5c4ef.png"},4720:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Remix-5-b0fd840e43bebb342b1c4b458f2e13ca.png"},4315:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Remix-6-325d40445ae4448152be2fb307d30c1f.png"},1658:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Remix-7-7596e211dcc6b1ec76a949572cc6d118.png"},5177:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Remix-8-74aaeec76c2236665e0db5465bd5377a.png"},7798:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Remix-9-a04bacfa6217fc47e94f82673dfc3f33.png"}}]);
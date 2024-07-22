"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[5901],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Hardhat",sidebar_position:8,description:"Testing and Deploying Smart Contracts using HardHat",keywords:["subspace network","hardhat"]},i=void 0,l={unversionedId:"develop/nova/hardhat_guide",id:"version-latest/develop/nova/hardhat_guide",title:"Hardhat",description:"Testing and Deploying Smart Contracts using HardHat",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-latest/develop/nova/hardhat_guide.md",sourceDirName:"develop/nova",slug:"/develop/nova/hardhat_guide",permalink:"/it/docs/develop/nova/hardhat_guide",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/edit/main/docs/develop/nova/hardhat_guide.md",tags:[],version:"latest",sidebarPosition:8,frontMatter:{title:"Hardhat",sidebar_position:8,description:"Testing and Deploying Smart Contracts using HardHat",keywords:["subspace network","hardhat"]},sidebar:"tutorialSidebar",previous:{title:"Foundry - testing and deployment",permalink:"/it/docs/develop/nova/foundry_guide"},next:{title:"Local development",permalink:"/it/docs/develop/nova/local_development"}},s={},c=[{value:"Hardhat testing and deployment",id:"hardhat-testing-and-deployment",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"hardhat-testing-and-deployment"},"Hardhat testing and deployment"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Hardhat is an excellent tool that facilitates building on the Ethereum Virtual Machine. It helps developers manage and automate the recurring tasks that are inherent to the process of building smart contracts and dApps, and it allows them to easily introduce more functionality around this workflow. This includes compiling and testing at the very core. Flexible deployment options also allow you to point to the Subspace EVM domain RPC to deploy your contracts and dApps."),(0,r.kt)("p",null,"Official documentation for Hardhat is available ",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/docs"},"on their website"),", but this guide will cover everything required to get you started."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites"),"\nMake sure you have ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en"},"NodeJS")," version >=16.0 installed."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open a new terminal and run these commands to create a new folder for the project.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir subspace-hardhat\ncd subspace-hardhat\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Then initialize an npm project as shown below. You'll be prompted to answer some questions.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install --save-dev hardhat\nnpm install --save-dev @openzeppelin/contracts\nnpx hardhat\n")),(0,r.kt)("p",null,'Select "Create a JavaScript Project" from the list of the available options. Select project root folder and select to create a .gitignore file (optional).'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hardhat-1",src:n(3515).Z,width:"492",height:"196"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Right after you create your workspace, you will notice several folders. All of your contracts will reside inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"contracts")," folder, deployment scripts are available inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"scripts")," folder, and tests can be found inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," folder. Click on the contracts folder and open ",(0,r.kt)("inlineCode",{parentName:"li"},"Lock.sol"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hardhat-3",src:n(2269).Z,width:"423",height:"246"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"When in ",(0,r.kt)("inlineCode",{parentName:"li"},"Lock.sol"),", you can change the name of your contract (in the example, to ",(0,r.kt)("inlineCode",{parentName:"li"},"Counter"),"), the name of the token (in this example, we're calling it ",(0,r.kt)("inlineCode",{parentName:"li"},"SubspaceTestToken"),") and the token symbol (we're using ",(0,r.kt)("inlineCode",{parentName:"li"},"TSSCtest"),").")),(0,r.kt)("p",null,"Let\u2019s add a simple smart contract that has three functions - ",(0,r.kt)("inlineCode",{parentName:"p"},"setNumber()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"increment()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"decrement()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.9;\n\nimport \'@openzeppelin/contracts/token/ERC20/ERC20.sol\';\n\ncontract Counter is ERC20 {\n    constructor() ERC20("SubspaceTestToken", "TSSCtest") {}\n\n    uint256 public number;\n\n    function setNumber(uint256 newNumber) public {\n        number = newNumber;\n    }\n\n    function increment() public {\n        number++;\n    }\n\n    function decrement() public {\n        number--;\n    }\n}\n')),(0,r.kt)("p",null,"Let's also rename the filename to ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter.sol")," for consistency."),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Deploying a smart contract can be an expensive procedure due to the gas costs associated with the transaction. Hence, it\u2019s advisable to thoroughly test the smart contracts for correctness before proceeding with deployment. To test the contract, open the tests folder and examine the Lock.js file created for us. Replace the internals of the file with the following code:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'const { expect } = require("chai");\n\ndescribe("Counter", function() {\nlet Counter;\nlet counter;\nlet owner;\nlet addr1;\n\nbeforeEach(async function() {\n    Counter = await ethers.getContractFactory("Counter");\n    [owner, addr1] = await ethers.getSigners();\n\n    counter = await Counter.deploy();\n});\n\ndescribe("Counter operations", function() {\n    it("Should return initial value of zero", async function() {\n    expect(await counter.number()).to.equal(0);\n    });\n\n    it("Should set number to a new value", async function() {\n    await counter.setNumber(5);\n    expect(await counter.number()).to.equal(5);\n    });\n\n    it("Should increment the number", async function() {\n    await counter.setNumber(5);\n    await counter.increment();\n    expect(await counter.number()).to.equal(6);\n    });\n\n    it("Should decrement the number", async function() {\n    await counter.setNumber(5);\n    await counter.decrement();\n    expect(await counter.number()).to.equal(4);\n    });\n});\n});\n')),(0,r.kt)("p",null,"For consistency, let's also rename ",(0,r.kt)("inlineCode",{parentName:"p"},"Lock.js")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"CounterTest.js")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"To run the test, simply type ",(0,r.kt)("inlineCode",{parentName:"li"},"npx hardhat test"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hardhat-4",src:n(9697).Z,width:"553",height:"214"})),(0,r.kt)("p",null,"Great, looks like everything is working as expected. We\u2019re all set for the deployment!"),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"In order to deploy the contract, we need to set a deployment network for hardhat.\nOpen ",(0,r.kt)("inlineCode",{parentName:"li"},"hardhat.config.js")," file and add the subspace to the list of networks.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'require("@nomicfoundation/hardhat-toolbox");\nmodule.exports = {\nsolidity: "0.8.19",\nnetworks: {\n    subspace: {\n    url: "https://nova-0.gemini-3h.subspace.network/ws",\n    accounts: ["private_key_to_your_account"]\n    }\n}\n};\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Be careful to not commit hardhat.config.js file as it contain your private key. You can use NPM tools like ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},"dotenv")," to securely store your private keys in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file.")),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Open to ",(0,r.kt)("inlineCode",{parentName:"li"},"deploy.js")," file and replace the content with the code.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hardhat-5",src:n(3430).Z,width:"619",height:"258"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'const hre = require("hardhat");\n\nasync function main() {\nconst Contract = await hre.ethers.getContractFactory("Counter");\nconst contract = await Contract.deploy();\n\nconsole.log("Contract deployed to:", contract.target);\n}\n\nmain().catch((error) => {\nconsole.error(error);\nprocess.exitCode = 1;\n});\n')),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"You're all set to deploy your smart contract on Subspace Network!\nIn order to deploy, run ",(0,r.kt)("inlineCode",{parentName:"li"},"npx hardhat run scripts/deploy.js --network subspace"),".")),(0,r.kt)("p",null,"This command will deploy your smart contract on the network we've just specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," file."),(0,r.kt)("p",null,"In case of success deployment, you should see ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract deployed to: transaction hash"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hardhat-6",src:n(2554).Z,width:"633",height:"89"})),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Congratulations"),", you've successfully deployed your smart contract on the Subspace EVM domain!")))}u.isMDXComponent=!0},3515:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Hardhat-1-6fc80cd45ba2e4f90daf14813ef7baca.png"},2269:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Hardhat-3-9bb9556ee93a5528ba838b8ed6058e6f.png"},9697:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Hardhat-4-bfe919118bee2b9e54ecd14bfe330dca.png"},3430:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Hardhat-5-09c4c004cebb80e36ea4b501f34d003f.png"},2554:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Hardhat-6-886cbad16b9325ae4006646535606c05.png"}}]);
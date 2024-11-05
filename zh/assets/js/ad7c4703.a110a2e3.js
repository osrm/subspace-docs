"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[5622],{8047:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=s(4848),i=s(8453);const o={title:"\u5bfc\u8a00",sidebar_position:1,description:"\u5feb\u901f\u542f\u52a8\u4e00\u4e2a\u5206\u9875",slug:"/develop/nova/introduction",keywords:["autonomys network","\u5feb\u901f\u5f00\u59cb"]},r=void 0,a={id:"develop/nova/intro",title:"\u5bfc\u8a00",description:"\u5feb\u901f\u542f\u52a8\u4e00\u4e2a\u5206\u9875",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/nova/intro.mdx",sourceDirName:"develop/nova",slug:"/develop/nova/introduction",permalink:"/zh/develop/nova/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5bfc\u8a00",sidebar_position:1,description:"\u5feb\u901f\u542f\u52a8\u4e00\u4e2a\u5206\u9875",slug:"/develop/nova/introduction",keywords:["autonomys network","\u5feb\u901f\u5f00\u59cb"]},sidebar:"tutorialSidebar",previous:{title:"\u264a Nova EVM",permalink:"/zh/develop/nova"},next:{title:"General Information",permalink:"/zh/develop/nova/general"}},l={},d=[{value:"\u542f\u52a8\u60a8\u6240\u9700\u7684\u552f\u4e00\u5de5\u5177",id:"\u542f\u52a8\u60a8\u6240\u9700\u7684\u552f\u4e00\u5de5\u5177",level:2},{value:"\u8bbe\u7f6eMetaMask \u94b1\u5305 (\u6216\u4efb\u4f55\u5176\u4ed6EVM\u517c\u5bb9\u7684\u94b1\u5305) \u5e76\u5c06\u5176\u8fde\u63a5\u5230\u6211\u4eec\u81ea\u5b9a\u4e49\u7684EVM",id:"\u8bbe\u7f6emetamask-\u94b1\u5305-\u6216\u4efb\u4f55\u5176\u4ed6evm\u517c\u5bb9\u7684\u94b1\u5305-\u5e76\u5c06\u5176\u8fde\u63a5\u5230\u6211\u4eec\u81ea\u5b9a\u4e49\u7684evm",level:3},{value:"\u4f7f\u7528\u6211\u4eec\u7684\u52a8\u7269\u7fa4\u83b7\u53d6\u4f60\u94b1\u5305\u7684\u4ee4\u724c",id:"\u4f7f\u7528\u6211\u4eec\u7684\u52a8\u7269\u7fa4\u83b7\u53d6\u4f60\u94b1\u5305\u7684\u4ee4\u724c",level:3},{value:"\u6d4b\u8bd5\u5e76\u90e8\u7f72\u60a8\u7684\u667a\u80fd\u5408\u540c",id:"\u6d4b\u8bd5\u5e76\u90e8\u7f72\u60a8\u7684\u667a\u80fd\u5408\u540c",level:3},{value:"\u5173\u4e8e\u63d0\u4ea4\u4ea4\u6613\u7684\u91cd\u8981\u6ce8\u610f\u4e8b\u9879",id:"\u5173\u4e8e\u63d0\u4ea4\u4ea4\u6613\u7684\u91cd\u8981\u6ce8\u610f\u4e8b\u9879",level:3},{value:"Gas Estimation Issue",id:"gas-estimation-issue",level:3},{value:"Solutions",id:"solutions",level:4},{value:"Solution examples",id:"solution-examples",level:4},{value:"Have any questions? Feel free to post them on our forum or in our Developer-chat on Discord.",id:"have-any-questions-feel-free-to-post-them-on-our-forum-or-in-our-developer-chat-on-discord",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["Currently, Nova is available exclusively on the ",(0,t.jsx)(n.strong,{children:"Gemini-3h"})," network. It will soon be accessible on the new test network, ",(0,t.jsx)(n.strong,{children:"Taurus"}),"."]}),(0,t.jsxs)(n.p,{children:["Nova's availability on the mainnet is planned for ",(0,t.jsx)(n.strong,{children:"Phase 2 of the mainnet launch"}),". For further details, please refer to our ",(0,t.jsx)(n.a,{href:"https://forum.autonomys.xyz/t/phased-launch-roadmap/4414",children:"Phased Launch Roadmap"})," post on the forum."]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u542f\u52a8\u60a8\u6240\u9700\u7684\u552f\u4e00\u5de5\u5177",children:"\u542f\u52a8\u60a8\u6240\u9700\u7684\u552f\u4e00\u5de5\u5177"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"The Quick Start is designed with the presumption that you are not a novice developer and have some basic understanding or experience. The Quick Start also anticipates that you seek a straightforward initiation into setting up a remote development environment."}),"\n",(0,t.jsx)(n.p,{children:"Autonomys utilizes EVM (Ethereum Virtual Machine) so any tool available for Ethereum development is compatible with Autonomys."}),"\n",(0,t.jsx)(n.h3,{id:"\u8bbe\u7f6emetamask-\u94b1\u5305-\u6216\u4efb\u4f55\u5176\u4ed6evm\u517c\u5bb9\u7684\u94b1\u5305-\u5e76\u5c06\u5176\u8fde\u63a5\u5230\u6211\u4eec\u81ea\u5b9a\u4e49\u7684evm",children:"\u8bbe\u7f6eMetaMask \u94b1\u5305 (\u6216\u4efb\u4f55\u5176\u4ed6EVM\u517c\u5bb9\u7684\u94b1\u5305) \u5e76\u5c06\u5176\u8fde\u63a5\u5230\u6211\u4eec\u81ea\u5b9a\u4e49\u7684EVM"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Network Name: Autonomys EVM\nNew RPC URL: https://nova-0.gemini-3h.subspace.network/ws\nChain ID: 490000\nCurrency Symbol: TSSC\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528\u6211\u4eec\u7684\u52a8\u7269\u7fa4\u83b7\u53d6\u4f60\u94b1\u5305\u7684\u4ee4\u724c",children:"\u4f7f\u7528\u6211\u4eec\u7684\u52a8\u7269\u7fa4\u83b7\u53d6\u4f60\u94b1\u5305\u7684\u4ee4\u724c"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["Follow the instructions ",(0,t.jsx)(n.a,{href:"/develop/nova/faucet",children:"here"})," to use our ",(0,t.jsx)(n.strong,{children:"Faucet"})," to get some TSSC."]}),"\n",(0,t.jsx)(n.h3,{id:"\u6d4b\u8bd5\u5e76\u90e8\u7f72\u60a8\u7684\u667a\u80fd\u5408\u540c",children:"\u6d4b\u8bd5\u5e76\u90e8\u7f72\u60a8\u7684\u667a\u80fd\u5408\u540c"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://remix.ethereum.org/",children:"Remix"})}),", ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://book.getfoundry.sh/",children:"Foundry"})})," or any other tool familiar to you for testing and deploying your smart contracts. Just make sure to use our custom EVM domain and you're all set."]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4e0a\u9762\u7684\u4efb\u4f55\u5185\u5bb9\u542c\u8d77\u6765\u4e0d\u719f\u6089\uff0c\u60a8\u53ef\u4ee5\u968f\u65f6\u8fd4\u56de\u5230\u6211\u4eec\u7684\u5b8c\u6574\u6307\u5357\u3002"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"\u5173\u4e8e\u63d0\u4ea4\u4ea4\u6613\u7684\u91cd\u8981\u6ce8\u610f\u4e8b\u9879",children:"\u5173\u4e8e\u63d0\u4ea4\u4ea4\u6613\u7684\u91cd\u8981\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsx)(n.p,{children:"Please avoid attempting to accelerate a transaction by including a tip alongside the gas fees. The transaction queue operates differently with Autonomys, leading to the possibility of two transactions sharing the same nonce. This could result in dual charges for gas fees - once for the execution and storage in the first transaction, and solely for storage in the second transaction. To prevent this scenario, ensure that you refrain from adding a tip in an attempt to speed the transaction up."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"gas-estimation-issue",children:"Gas Estimation Issue"}),"\n",(0,t.jsxs)(n.p,{children:["When deploying smart contracts to our EVM-compatible domain ",(0,t.jsx)(n.strong,{children:"Nova"}),", you may encounter an error related to gas estimation, typically presenting as:"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'"No manual gas limit set" or "Gas estimation failed"'}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This issue often occurs because development tools like Foundry simulate transactions and use calculated or hardcoded gas estimation instead of querying the RPC (Remote Procedure Call) for it. ",(0,t.jsx)(n.strong,{children:"Nova"})," may require different gas amounts for certain operations compared to other EVM-compatible chains like Ethereum's testnets."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["We have submitted an upstream PR to fix this issue with ",(0,t.jsx)(n.strong,{children:"Foundry"}),". Described below are the workarounds, until the issue is resolved by the ",(0,t.jsx)(n.strong,{children:"Foundry team"}),"."]})}),"\n",(0,t.jsx)(n.h4,{id:"solutions",children:"Solutions"}),"\n",(0,t.jsx)(n.p,{children:"If you encounter this issue, try the following solutions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Skip simulation: Use the ",(0,t.jsx)(n.code,{children:"--skip-simulation"})," flag when deploying with Foundry to bypass built-in simulation and rely on RPC for gas estimation."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set manual gas limit: Specify a higher gas limit manually in your deployment command or UI."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Adjust deployment script: Modify your script to include custom gas settings or implement ",(0,t.jsx)(n.code,{children:"try/catch"})," blocks for handling deployment failures."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use Web3 provider: If using ",(0,t.jsx)(n.strong,{children:"Remix IDE"}),", switch to ",(0,t.jsx)(n.code,{children:"Injected Web3"})," environment to leverage external Web3 providers like MetaMask."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Custom deployment function: Create a deployment function with adjustable gas parameters."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"solution-examples",children:"Solution examples"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Foundry"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Try using ",(0,t.jsx)(n.code,{children:"--skip-simulation"})," flag: ",(0,t.jsx)(n.code,{children:"forge script path/to/your/script.s.sol --rpc-url your_rpc_url --private-key your_private_key --broadcast --skip-simulation"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Try setting the gas limit manually: ",(0,t.jsx)(n.code,{children:"forge script path/to/your/script.s.sol --rpc-url your_rpc_url --private-key your_private_key --broadcast --gas-limit 300000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Adjust the gas limit value as needed. Start with a higher value and gradually lower it to find the optimal limit."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Remix IDE"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Try settiing gas limit manually: In the ",(0,t.jsx)(n.strong,{children:"Deploy & Run Transactions"})," panel, expand the ",(0,t.jsx)(n.strong,{children:"Advanced"})," section.\nSet a higher value in the ",(0,t.jsx)(n.strong,{children:"Gas Limit"})," field. Try starting with ",(0,t.jsx)(n.strong,{children:"300000"})," and adjust as needed."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Try adjusting gas price: In the same ",(0,t.jsx)(n.strong,{children:"Advanced"})," section, you can also adjust the ",(0,t.jsx)(n.strong,{children:"Gas Price"})," if needed."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Try switching to the ",(0,t.jsx)(n.strong,{children:"Injected Web3"})," environment in the ",(0,t.jsx)(n.strong,{children:"Deploy & Run Transactions"})," panel. This will use your browser's Web3 provider (like MetaMask) which might handle gas estimation better for the network."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the above steps don't work, you can create a custom deployment function that includes gas parameters:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"function deployWithCustomGas(uint256 gasLimit, uint256 gasPrice) public returns (address) {\n   return address(new YourContract{gas: gasLimit, gasPrice: gasPrice}());\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Other possible solution"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Modify your deployment script and override the default gas settings:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"vm.txGasPrice(uint256 gasPrice);\nvm.txGasLimit(uint256 gasLimit);\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Implement a try/catch block in your script to handle gas estimation failures:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'try yourContract.deploy{gas: 300000}(constructorArgs) returns (YourContract deployed) {\n   // Deployment successful\n} catch Error(string memory reason) {\n   console.log("Deployment failed:", reason);\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"have-any-questions-feel-free-to-post-them-on-our-forum-or-in-our-developer-chat-on-discord",children:["Have any questions? Feel free to post them on ",(0,t.jsx)(n.a,{href:"https://forum.autonomys.xyz/",children:"our forum"})," or in our ",(0,t.jsx)(n.a,{href:"https://discord.gg/EAw6B48r",children:"Developer-chat on Discord"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u8bbf\u95ee\u89d2\u8272\u63a7\u5236\u7684\u5f00\u53d1\u4eba\u5458\u804a\u5929\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u52a0\u5165\u6211\u4eec\u7684 ",(0,t.jsx)(n.a,{href:"https://discord.gg/vhv5cEZN",children:"Discord"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click on Autonomys Network at the top left corner and choose ",(0,t.jsx)(n.strong,{children:"Linked Roles"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Discord-1",src:s(603).A+"",width:"231",height:"539"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Link your GitHub account to get a developer role and gain access to ",(0,t.jsx)(n.strong,{children:"developer-chat"}),".\n",(0,t.jsx)(n.img,{alt:"Discord-2",src:s(752).A+"",width:"737",height:"206"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},603:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Discord-1-25bd70f76741163d9340dee4581cdb68.png"},752:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Discord-2-f26a783c4324243dec4a1c10235f646f.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
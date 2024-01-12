"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4992],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},600:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={title:"Setting up MetaMask",sidebar_position:4,description:"Guide on setting up MetaMask for development purposes",keywords:["metamask","subspace network"]},s=void 0,i={unversionedId:"develop/nova/setting-up-metamask",id:"version-latest/develop/nova/setting-up-metamask",title:"Setting up MetaMask",description:"Guide on setting up MetaMask for development purposes",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/develop/nova/setting-up-metamask.md",sourceDirName:"develop/nova",slug:"/develop/nova/setting-up-metamask",permalink:"/zh/docs/develop/nova/setting-up-metamask",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/develop/nova/setting-up-metamask.md",tags:[],version:"latest",sidebarPosition:4,frontMatter:{title:"Setting up MetaMask",sidebar_position:4,description:"Guide on setting up MetaMask for development purposes",keywords:["metamask","subspace network"]},sidebar:"tutorialSidebar",previous:{title:"General information on dev tools and Subspace EVM",permalink:"/zh/docs/develop/nova/general-information"},next:{title:"Subspace faucet",permalink:"/zh/docs/develop/nova/faucet"}},l={},p=[{value:"Adding Subspace RPC using MetaMask",id:"adding-subspace-rpc-using-metamask",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"adding-subspace-rpc-using-metamask"},"Adding Subspace RPC using MetaMask"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"You can use any EVM-compatible wallet, this guide will be using ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},(0,o.kt)("strong",{parentName:"a"},"MetaMask"))," wallet."),(0,o.kt)("p",null,"First, let\u2019s set up a MetaMask wallet and then go over connecting it to the Subspace Development Network."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("a",{parentName:"li",href:"https://metamask.io/"},"MetaMask Website")," and download an extension for your browser.\nSelect your preferred language in the top-right corner.\nRead and agree to MetaMask's terms of use.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-1",src:a(6691).Z,width:"350",height:"392"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Click on \u201cCreate a new wallet\u201d.\nRead a note on gathering usage data and either agree to collect your anonymized data, or skip this step. It does not affect the creation of a wallet.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-2",src:a(2091).Z,width:"350",height:"468"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"On the next screen you will be asked to create a password. Remember to always set a secure password that\u2019s difficult to guess. Type your password twice before proceeding to the next step.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-3",src:a(5208).Z,width:"350",height:"346"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"MetaMask automatically assesses the strength of your password.",(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"As a rule of thumb, you should set a strong password, meaning that it includes uppercase letters, lowercase letters, numbers and special characters.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-4",src:a(1358).Z,width:"350",height:"343"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Watch a video to learn more about your Secret Recovery Phrase before proceeding to the next step.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-5",src:a(3665).Z,width:"350",height:"507"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Have a look and write down your 12-word recovery phrase.",(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The wallet with the recovery phrase for this guide will be deleted right after the guide is complete.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-6",src:a(1598).Z,width:"350",height:"464"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Confirm that you\u2019ve written down the recovery phrase by filling in the missing words of your recovery phrase.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-7",src:a(1590).Z,width:"350",height:"332"})),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Now that your wallet is created, let\u2019s connect to the Subspace Core EVM. Click on the Ethereum Mainnet logo and select Add Network.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-8",src:a(3029).Z,width:"350",height:"357"})),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"At the settings, click on \u201cAdd a network manually\u201d")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-9",src:a(4458).Z,width:"1020",height:"650"})),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"To connect to Subspace RPC specify the values below")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Network Name: Subspace EVM\nNew RPC URL: https://nova.gemini-3g.subspace.network/ws\nChain ID: 1002\nCurrency Symbol: TSSC\n")),(0,o.kt)("p",null,"You're all set, ",(0,o.kt)("strong",{parentName:"p"},"you have successfully configured your MetaMask wallet")," and connected it to ",(0,o.kt)("strong",{parentName:"p"},"Subspace Core EVM"),". To deploy your smart contract, you first need to get a small amount of ",(0,o.kt)("strong",{parentName:"p"},"TSSC"),"  tokens into your wallet. Please make sure to refer to the ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/develop/nova/faucet"},"faucet section")," of the guide to learn more about getting test tokens."))}u.isMDXComponent=!0},6691:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MetaMask-1-1bded85eeaf89c0daae434256fd88045.png"},2091:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MetaMask-2-5f7e7f060708ba123fddb26362fdfb50.png"},5208:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MetaMask-3-75874afd8bf6c5d17ee3574ba8dad9aa.png"},1358:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MetaMask-4-e5f5ecae7bf1f748b681d8dfc5721af0.png"},3665:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MetaMask-5-79ee39d84c4ddb91e413dcac10f5fe04.png"},1598:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MetaMask-6-565644d1cd952a85c58125e61d4d8cb0.png"},1590:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MetaMask-7-132a39939fc2424e79b95b82a3b7d82e.png"},3029:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MetaMask-8-8739cf366556bb8646500e0974e1d665.png"},4458:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MetaMask-9-b2ffa9d0e03a49767d7db5b53b9c7710.png"}}]);
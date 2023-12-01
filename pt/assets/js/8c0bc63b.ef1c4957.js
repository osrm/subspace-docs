"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[5851],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=l,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(k,r(r({ref:t},c),{},{components:a})):n.createElement(k,r({ref:t},c))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6974:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const o={title:"SubWallet (Recommended)",sidebar_position:1,description:"How to configure the SubWallet Substrate wallet for the Subspace Network",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},r=void 0,i={unversionedId:"farming-&-staking/wallets/subwallet",id:"version-latest/farming-&-staking/wallets/subwallet",title:"SubWallet (Recommended)",description:"How to configure the SubWallet Substrate wallet for the Subspace Network",source:"@site/versioned_docs/version-latest/farming-&-staking/wallets/subwallet.md",sourceDirName:"farming-&-staking/wallets",slug:"/farming-&-staking/wallets/subwallet",permalink:"/pt/docs/farming-&-staking/wallets/subwallet",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/farming-&-staking/wallets/subwallet.md",tags:[],version:"latest",lastUpdatedBy:"Justin",lastUpdatedAt:1701447134,formattedLastUpdatedAt:"1 de dez. de 2023",sidebarPosition:1,frontMatter:{title:"SubWallet (Recommended)",sidebar_position:1,description:"How to configure the SubWallet Substrate wallet for the Subspace Network",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},sidebar:"tutorialSidebar",previous:{title:"Wallets",permalink:"/pt/docs/category/wallets"},next:{title:"Polkadot.js",permalink:"/pt/docs/farming-&-staking/wallets/polkadot"}},s={},p=[{value:"Create or Import A New Wallet",id:"create-or-import-a-new-wallet",level:2},{value:"Connect wallet to Subspace Gemini 3g and find wallet public address",id:"connect-wallet-to-subspace-gemini-3g-and-find-wallet-public-address",level:2},{value:"Connect to Subspace via RPC",id:"connect-to-subspace-via-rpc",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"How do I backup my wallet?",id:"how-do-i-backup-my-wallet",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,l.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"SubWallet is a 3rd party Substrate/EVM wallet created by the ",(0,l.kt)("a",{parentName:"p",href:"https://subwallet.app"},"Subwallet Team"),"."),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("em",{parentName:"p"},"This guide will be following the browser extension pathway. There is also a mobile application available for ",(0,l.kt)("a",{parentName:"em",href:"https://play.google.com/store/apps/details?id=app.subwallet.mobile&pli=1"},"Android")," and ",(0,l.kt)("a",{parentName:"em",href:"https://testflight.apple.com/join/ZW3pUbWj"},"IOS"),"."))),(0,l.kt)("p",null,"SubWallet is a user-friendly Web3 Multiverse Gateway for the Substrate ecosystem. Our vision is to provide you with the simplest and most secure way to connect to blockchain-based applications. "),(0,l.kt)("p",null,"To learn more about SubWallet visit their ",(0,l.kt)("a",{parentName:"p",href:"https://subwallet.app"},"Website"),"."),(0,l.kt)("h2",{id:"create-or-import-a-new-wallet"},"Create or Import A New Wallet"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Visit the ",(0,l.kt)("a",{parentName:"li",href:"https://subwallet.app/download.html"},"SubWallet website")," and Download your respective version. "),(0,l.kt)("li",{parentName:"ol"},"Once extension is installed, open it."),(0,l.kt)("li",{parentName:"ol"},"The extension will give you up to four options. You will most likely want to select ",(0,l.kt)("inlineCode",{parentName:"li"},"Create a new account"),".")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you would like to Import an ",(0,l.kt)("strong",{parentName:"p"},"Existing")," Wallet, then select ",(0,l.kt)("inlineCode",{parentName:"p"},"Import an account"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"step-3",src:a(7651).Z,width:"401",height:"614"})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter and confirm the password for your account. Make sure to use a strong password. "),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"step-4",src:a(9284).Z,width:"392",height:"606"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Write down your seed phrase in a secure place. You will need it if you ever forget a password, or decide to transfer the account to another PC. "),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"step-5",src:a(7233).Z,width:"397",height:"603"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Congratulations you have fully created your substrate wallet with subwallet."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"step-6",src:a(4693).Z,width:"394",height:"605"})))),(0,l.kt)("h2",{id:"connect-wallet-to-subspace-gemini-3g-and-find-wallet-public-address"},"Connect wallet to Subspace Gemini 3g and find wallet public address"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open SubWallet, click on ",(0,l.kt)("em",{parentName:"p"},"Manage tokens"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"wallet-1",src:a(3791).Z,width:"394",height:"603"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In a search bar, start typing the name of the network, e.g. Subspace Gemini 3f."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"wallet-2",src:a(1014).Z,width:"394",height:"608"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go back to the first screen and you will see tSSC token with your balance.\nTo get your wallet public address, click on the tSSC token."),(0,l.kt)("p",{parentName:"li"},"   ",(0,l.kt)("img",{alt:"wallet-3",src:a(9272).Z,width:"398",height:"606"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"And then click on ",(0,l.kt)("em",{parentName:"p"},"Copy")," sign to copy the public address. "),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"wallet-4",src:a(7103).Z,width:"392",height:"606"})))),(0,l.kt)("h2",{id:"connect-to-subspace-via-rpc"},"Connect to Subspace via RPC"),(0,l.kt)("p",null,"Sometimes you won't see the network you would like to connect to in a list of available networks. In this case you can connect to Subspace Network manually via RPC.\nThis also can be helpful for in-development networks such as the Subspace Network as we have regularly changing RPC endpoints and versions of testnets, and soon various domains. Below you will find a simple guide on how to add these new networks. Additionally we will try and keep an updated list of active RPC endpoints below for development."),(0,l.kt)("admonition",{title:"RPC Endpoints",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Gemini 3d Endpoint: ")," wss://rpc.gemini-3d.subspace.network/ws"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Gemini 3e Endpoint: ")," wss://rpc.gemini-3e.subspace.network/ws"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Gemini 3f Endpoint: ")," wss://rpc.gemini-3g.subspace.network/ws"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Gemini 3g Endpoint: ")," wss://rpc-1.gemini-3g.subspace.network/ws"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open SubWallet, Select the 3 Line menu in the top left of the wallet.\n",(0,l.kt)("img",{alt:"rpc-step-1",src:a(5081).Z,width:"390",height:"597"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Inside the settings menu you will see the option to Manage Networks, click this.\n",(0,l.kt)("img",{alt:"rpc-step-2",src:a(4348).Z,width:"390",height:"601"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Within the Manage Networks menu you will see a + in the top right corner, click this.\n",(0,l.kt)("img",{alt:"rpc-step-3",src:a(6525).Z,width:"389",height:"601"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"This will open the Import Network menu, where you will see a few options"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Provider URL"),(0,l.kt)("li",{parentName:"ul"},"Network Name"),(0,l.kt)("li",{parentName:"ul"},"Symbol"),(0,l.kt)("li",{parentName:"ul"},"Block explorer"),(0,l.kt)("li",{parentName:"ul"},"Crowdloan URL\nThe only option that is required is the Provider URL. You can add an explorer if you would like but it is not required. The current Subspace Explorer is available ",(0,l.kt)("a",{parentName:"li",href:"https://explorer.subspace.network"},"here"),".\nYou can refer to the ",(0,l.kt)("em",{parentName:"li"},"RPC Endpoints")," above for available provider URLs for the Subspace Network.\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Fill in the provider URL, once you click out of this box it will check the URL and add the rest of the information, then click Save. ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"In this example we will be using ",(0,l.kt)("inlineCode",{parentName:"em"},"wss://rpc-1.gemini-3g.subspace.network/ws")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"rpc-step-4",src:a(8010).Z,width:"390",height:"598"})),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"You will then be taken back to the network screen where you can then select your new network that was added.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"rpc-step-5",src:a(7131).Z,width:"388",height:"599"})),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("p",null,"If you face any trouble or would like to learn about other features for SubWallet, please see the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.subwallet.app/"},"Official SubWallet Documentation."),"."),(0,l.kt)("h3",{id:"how-do-i-backup-my-wallet"},"How do I backup my wallet?"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You can backup/export your wallet. Click on your ",(0,l.kt)("em",{parentName:"p"},"Account"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"trouble-1",src:a(9013).Z,width:"393",height:"603"})))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the account you would like to backup and click on the ",(0,l.kt)("em",{parentName:"p"},"edit")," sign."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"trouble-2",src:a(4906).Z,width:"396",height:"604"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select ",(0,l.kt)("em",{parentName:"p"},"Export"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"trouble-3",src:a(7232).Z,width:"395",height:"600"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You will then enter your wallet password and click which preferred export method you would like to use, either ",(0,l.kt)("inlineCode",{parentName:"p"},"Seed phrase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"QR code"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"trouble-4",src:a(6813).Z,width:"393",height:"602"})))))}d.isMDXComponent=!0},7651:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Subwallet-1-012b3581588a1b094e94586ec9d799af.png"},9284:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Subwallet-2-e0be89f3f2f69013c1a597aba56f2e29.png"},7233:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Subwallet-3-8295adbd69f55756b70b1fc6346ae31b.png"},4693:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Subwallet-4-2c073c003cf6793cabf3ecc56f90436c.png"},3791:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Subwallet-5-89a7ffb133280e9c37ccfa6cea5d32ee.png"},1014:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Subwallet-6-861b708e83b0acd0b02bc816ec7abc60.png"},9272:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Subwallet-7-f0e5efa229b6399b1d21b4d8d4e5b68a.png"},7103:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Subwallet-8-f9246c0a8faed16d2c4724dca1e6115c.png"},9013:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Trouble-1-0398518319f47fde28fd74d48b94143c.png"},4906:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Trouble-2-e52ad45173a855839ef193c1525446ce.png"},7232:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Trouble-3-725a70d609be58dbb8278aba56d1b430.png"},6813:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Trouble-4-ad7528e865d96808a936791762d1ef79.png"},5081:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rpc-1-f19db823ba95f87b5b9e5de2530f3e0d.png"},4348:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rpc-2-2b66e51a0c8a5459c88d9ef4ddf3da8b.png"},6525:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rpc-3-0837d16cbb87db79b0bdc3407e51ac11.png"},8010:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rpc-4-58f1f9a2d66a087ce7836b5c11d29cab.png"},7131:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rpc-5-aa05c9a4aec125c7f84375aec0ca5f84.png"}}]);
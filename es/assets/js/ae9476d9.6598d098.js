"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6272],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5974:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={title:"SubWallet (Recomendado)",sidebar_position:1,description:"C\xf3mo configurar el monedero SubWallet de Substrate para la Subspace Network",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},i=void 0,o={unversionedId:"farming-&-staking/wallets/subwallet",id:"version-latest/farming-&-staking/wallets/subwallet",title:"SubWallet (Recomendado)",description:"C\xf3mo configurar el monedero SubWallet de Substrate para la Subspace Network",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-latest/farming-&-staking/wallets/subwallet.md",sourceDirName:"farming-&-staking/wallets",slug:"/farming-&-staking/wallets/subwallet",permalink:"/es/docs/farming-&-staking/wallets/subwallet",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/edit/main/docs/farming-&-staking/wallets/subwallet.md",tags:[],version:"latest",sidebarPosition:1,frontMatter:{title:"SubWallet (Recomendado)",sidebar_position:1,description:"C\xf3mo configurar el monedero SubWallet de Substrate para la Subspace Network",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},sidebar:"tutorialSidebar",previous:{title:"Wallets",permalink:"/es/docs/category/wallets"},next:{title:"Polkadot.js",permalink:"/es/docs/farming-&-staking/wallets/polkadot"}},s={},p=[{value:"Crear o importar una nueva cartera",id:"crear-o-importar-una-nueva-cartera",level:2},{value:"Connect wallet to Subspace Gemini 3h and find wallet public address",id:"connect-wallet-to-subspace-gemini-3h-and-find-wallet-public-address",level:2},{value:"Connect to Subspace via RPC",id:"connect-to-subspace-via-rpc",level:2},{value:"Soluci\xf3n de problemas",id:"soluci\xf3n-de-problemas",level:2},{value:"\xbfC\xf3mo puedo hacer una copia de seguridad de mi cartera?",id:"c\xf3mo-puedo-hacer-una-copia-de-seguridad-de-mi-cartera",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"SubWallet is a 3rd party Substrate/EVM wallet created by the ",(0,r.kt)("a",{parentName:"p",href:"https://subwallet.app"},"Subwallet Team"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"This guide will be following the browser extension pathway. There is also a mobile application available for ",(0,r.kt)("a",{parentName:"em",href:"https://play.google.com/store/apps/details?id=app.subwallet.mobile%5C&pli=1"},"Android")," and ",(0,r.kt)("a",{parentName:"em",href:"https://testflight.apple.com/join/ZW3pUbWj"},"IOS"),"."))),(0,r.kt)("p",null,"SubWallet es una pasarela multiversa Web3 para el ecosistema de Substrate. Nuestra visi\xf3n es brindarle la forma m\xe1s sencilla y segura de conectarse a las aplicaciones basadas en blockchain."),(0,r.kt)("p",null,"To learn more about SubWallet visit their ",(0,r.kt)("a",{parentName:"p",href:"https://subwallet.app"},"Website"),"."),(0,r.kt)("h2",{id:"crear-o-importar-una-nueva-cartera"},"Crear o importar una nueva cartera"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Visit the ",(0,r.kt)("a",{parentName:"li",href:"https://subwallet.app/download.html"},"SubWallet website")," and Download your respective version."),(0,r.kt)("li",{parentName:"ol"},"Once extension is installed, open it."),(0,r.kt)("li",{parentName:"ol"},"La extensi\xf3n le dar\xe1 hasta cuatro opciones. You will most likely want to select ",(0,r.kt)("inlineCode",{parentName:"li"},"Create a new account"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you would like to Import an ",(0,r.kt)("strong",{parentName:"p"},"Existing")," Wallet, then select ",(0,r.kt)("inlineCode",{parentName:"p"},"Import an account"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"step-3",src:a(7651).Z,width:"401",height:"614"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter and confirm the password for your account. Make sure to use a strong password."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"step-4",src:a(9284).Z,width:"392",height:"606"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write down your seed phrase in a secure place. You will need it if you ever forget a password, or decide to transfer the account to another PC."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"step-5",src:a(7233).Z,width:"397",height:"603"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Congratulations you have fully created your Substrate wallet with SubWallet."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"step-6",src:a(4322).Z,width:"394",height:"605"})))),(0,r.kt)("h2",{id:"connect-wallet-to-subspace-gemini-3h-and-find-wallet-public-address"},"Connect wallet to Subspace Gemini 3h and find wallet public address"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open SubWallet, click on ",(0,r.kt)("em",{parentName:"p"},"Manage tokens"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"wallet-1",src:a(3791).Z,width:"394",height:"603"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In a search bar, start typing the name of the network, e.g. Subspace Gemini 3h."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"wallet-2",src:a(1014).Z,width:"392",height:"602"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go back to the first screen and you will see tSSC token with your balance.\nTo get your wallet public address, click on the tSSC token."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"wallet-3",src:a(9272).Z,width:"398",height:"606"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"And then click on ",(0,r.kt)("em",{parentName:"p"},"Copy")," sign to copy the public address."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"wallet-4",src:a(8242).Z,width:"392",height:"606"})))),(0,r.kt)("h2",{id:"connect-to-subspace-via-rpc"},"Connect to Subspace via RPC"),(0,r.kt)("p",null,"Sometimes you won't see the network you would like to connect to in a list of available networks. In this case you can connect to Subspace Network manually via RPC.\nThis also can be helpful for in-development networks such as the Subspace Network as we have regularly changing RPC endpoints and versions of testnets, and soon various domains. A continuaci\xf3n encontrar\xe1s una sencilla gu\xeda sobre c\xf3mo a\xf1adir estas nuevas redes. Adem\xe1s, intentaremos mantener una lista actualizada de los puntos finales RPC activos a continuaci\xf3n para su desarrollo."),(0,r.kt)("admonition",{title:"RPC Endpoints",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Gemini 3d Endpoint:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"wss://rpc.gemini-3d.subspace.network/ws"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Gemini 3e Endpoint:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"wss://rpc.gemini-3e.subspace.network/ws"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Gemini 3f Endpoint:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"wss://rpc-1.gemini-3f.subspace.network/ws"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Gemini 3g Endpoint:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"wss://rpc-1.gemini-3g.subspace.network/ws"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Gemini 3h Endpoint:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"wss://rpc-1.gemini-3h.subspace.network/ws"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open SubWallet, Select the 3 Line menu in the top left of the wallet.\n",(0,r.kt)("img",{alt:"rpc-step-1",src:a(5081).Z,width:"390",height:"597"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside the settings menu you will see the option to Manage Networks, click this.\n",(0,r.kt)("img",{alt:"rpc-step-2",src:a(4348).Z,width:"390",height:"601"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Within the Manage Networks menu you will see a + in the top right corner, click this.\n",(0,r.kt)("img",{alt:"rpc-step-3",src:a(6525).Z,width:"389",height:"601"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This will open the Import Network menu, where you will see a few options"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"URL de proveedor"),(0,r.kt)("li",{parentName:"ul"},"Nombre de la red"),(0,r.kt)("li",{parentName:"ul"},"S\xedmbolo"),(0,r.kt)("li",{parentName:"ul"},"Explorador de bloques"),(0,r.kt)("li",{parentName:"ul"},"Crowdloan URL\nThe only option that is required is the Provider URL. Puedes a\xf1adir un explorador si lo deseas, pero no es necesario. The current Subspace Explorer is available ",(0,r.kt)("a",{parentName:"li",href:"https://explorer.subspace.network"},"here"),".\nYou can refer to the ",(0,r.kt)("em",{parentName:"li"},"RPC Endpoints")," above for available provider URLs for the Subspace Network.")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Rellena la URL del proveedor, una vez que haga clic en esta casilla, marcar\xe1 la URL y agregar\xe1 el resto de la informaci\xf3n, luego haga clic en Guardar.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"In this example we will be using ",(0,r.kt)("inlineCode",{parentName:"em"},"wss://rpc-1.gemini-3g.subspace.network/ws")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rpc-step-4",src:a(8010).Z,width:"390",height:"598"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"You will then be taken back to the network screen where you can then select your new network that was added.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rpc-step-5",src:a(7131).Z,width:"388",height:"599"})),(0,r.kt)("h2",{id:"soluci\xf3n-de-problemas"},"Soluci\xf3n de problemas"),(0,r.kt)("p",null,"If you face any trouble or would like to learn about other features for SubWallet, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.subwallet.app/"},"Official SubWallet Documentation."),"."),(0,r.kt)("h3",{id:"c\xf3mo-puedo-hacer-una-copia-de-seguridad-de-mi-cartera"},"\xbfC\xf3mo puedo hacer una copia de seguridad de mi cartera?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can backup/export your wallet. Click on your ",(0,r.kt)("em",{parentName:"p"},"Account"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"trouble-1",src:a(9013).Z,width:"393",height:"603"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the account you would like to backup and click on the ",(0,r.kt)("em",{parentName:"p"},"edit")," sign."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"trouble-2",src:a(4906).Z,width:"396",height:"604"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("em",{parentName:"p"},"Export"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"trouble-3",src:a(7232).Z,width:"395",height:"600"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will then enter your wallet password and click which preferred export method you would like to use, either ",(0,r.kt)("inlineCode",{parentName:"p"},"Seed phrase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"QR code"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"trouble-4",src:a(6813).Z,width:"393",height:"602"})))))}d.isMDXComponent=!0},7651:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Subwallet-1-012b3581588a1b094e94586ec9d799af.png"},9284:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Subwallet-2-e0be89f3f2f69013c1a597aba56f2e29.png"},7233:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Subwallet-3-8295adbd69f55756b70b1fc6346ae31b.png"},4322:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Subwallet-4-2c073c003cf6793cabf3ecc56f90436c.png"},3791:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Subwallet-5-89a7ffb133280e9c37ccfa6cea5d32ee.png"},1014:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Subwallet-6-e059bfa08d409f83caf225cab27baa26.png"},9272:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Subwallet-7-f0e5efa229b6399b1d21b4d8d4e5b68a.png"},8242:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Subwallet-8-f9246c0a8faed16d2c4724dca1e6115c.png"},9013:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Trouble-1-0398518319f47fde28fd74d48b94143c.png"},4906:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Trouble-2-e52ad45173a855839ef193c1525446ce.png"},7232:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Trouble-3-725a70d609be58dbb8278aba56d1b430.png"},6813:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Trouble-4-ad7528e865d96808a936791762d1ef79.png"},5081:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rpc-1-f19db823ba95f87b5b9e5de2530f3e0d.png"},4348:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rpc-2-2b66e51a0c8a5459c88d9ef4ddf3da8b.png"},6525:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rpc-3-0837d16cbb87db79b0bdc3407e51ac11.png"},8010:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rpc-4-58f1f9a2d66a087ce7836b5c11d29cab.png"},7131:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rpc-5-aa05c9a4aec125c7f84375aec0ca5f84.png"}}]);
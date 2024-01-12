"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6889],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4001:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"Troubleshooting",sidebar_position:4,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},i=void 0,l={unversionedId:"farming-&-staking/farming/pulsar/pulsar-troubleshooting",id:"version-latest/farming-&-staking/farming/pulsar/pulsar-troubleshooting",title:"Troubleshooting",description:"How to run a Subspace Network Farmer with the Substrate CLI",source:"@site/i18n/hi/docusaurus-plugin-content-docs/version-latest/farming-&-staking/farming/pulsar/pulsar-troubleshooting.mdx",sourceDirName:"farming-&-staking/farming/pulsar",slug:"/farming-&-staking/farming/pulsar/pulsar-troubleshooting",permalink:"/hi/docs/farming-&-staking/farming/pulsar/pulsar-troubleshooting",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/edit/main/i18n/hi/docusaurus-plugin-content-docs/current/farming-&-staking/farming/pulsar/pulsar-troubleshooting.mdx",tags:[],version:"latest",sidebarPosition:4,frontMatter:{title:"Troubleshooting",sidebar_position:4,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Tips & Tricks",permalink:"/hi/docs/farming-&-staking/farming/pulsar/pulsar-tips"},next:{title:"Advanced CLI",permalink:"/hi/docs/category/advanced-cli"}},s={},u=[{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"View your Logs",id:"view-your-logs",level:3},{value:"Enable Rust Backtrace",id:"enable-rust-backtrace",level:3},{value:"Common Problems",id:"common-problems",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you are facing issues with your node/farmer you can try a few of the following things below, if you are unable to get your issue resolved please check our ",(0,o.kt)("a",{parentName:"p",href:"https://forums.subspace.network"},"Forums")," to see if your issue may have been solved, if its a new one feel free to post it! You can also join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/subspace-network"},"Discord")," for additional Peer to Peer help."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We have included a few tutorials below that may help you in your support journey, this is not an all inclusive list but we welcome contributions")),(0,o.kt)("h3",{id:"view-your-logs"},"View your Logs"),(0,o.kt)("p",null,"A good place to start if you are facing trouble is by viewing your logs and seeing if there are any errors or insights that might be available. You can find the location for your logs below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\ud83d\uddbc\ufe0f Windows:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%/AppData/Local/pulsar/logs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\ud83c\udf4e macOS:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/Library/Logs/pulsar/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\ud83d\udc27 Ubuntu:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.local/share/pulsar/logs"))),(0,o.kt)("h3",{id:"enable-rust-backtrace"},"Enable Rust Backtrace"),(0,o.kt)("p",null,"When running the Subspace Network Farmer & Node, sometimes you may encounter an error message that includes a line similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Backtrace omitted. Run with RUST_BACKTRACE=1 environment variable to display it.\n")),(0,o.kt)("p",null,"This error message means that Rust (the programming language that Subspace Network Farmer & Node is written in) has encountered a problem and has provided a diagnostic backtrace that can help diagnose the issue. However, by default, the backtrace is not displayed. To see the backtrace, you need to enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE")," environment variable."),(0,o.kt)("p",null,"To enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE")," enter the following into your terminal:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\ud83d\uddbc\ufe0f Windows"),"(PowerShell): ",(0,o.kt)("inlineCode",{parentName:"li"},"$Env:RUST_BACKTRACE=1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\ud83c\udf4e macOS"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"export RUST_BACKTRACE=1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\ud83d\udc27 Ubuntu"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"export RUST_BACKTRACE=1"))),(0,o.kt)("p",null,"Once you have enabled the RUST","_","BACKTRACE simply rerun the application and you will get additional info upon any errors."),(0,o.kt)("h3",{id:"common-problems"},"Common Problems"),(0,o.kt)("p",null,"Looking for solutions to other common issues?"),(0,o.kt)("p",null,"Check out our Common Problems page. This resource covers a range of frequently encountered challenges, offering practical solutions to help you overcome them. Please note that while this page addresses many common issues, it is not an all-inclusive list. For issues not covered, you can visit our forums or Discord for additional support."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[2698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Soluci\xf3n de problemas",sidebar_position:4,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binarios","Docker"]},i=void 0,s={unversionedId:"farming-&-staking/farming/advanced-cli/cli-troubleshooting",id:"version-latest/farming-&-staking/farming/advanced-cli/cli-troubleshooting",title:"Soluci\xf3n de problemas",description:"How to run a Subspace Network Farmer with the Substrate CLI",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-latest/farming-&-staking/farming/advanced-cli/cli-troubleshooting.mdx",sourceDirName:"farming-&-staking/farming/advanced-cli",slug:"/farming-&-staking/farming/advanced-cli/cli-troubleshooting",permalink:"/es/docs/farming-&-staking/farming/advanced-cli/cli-troubleshooting",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/edit/main/i18n/es/docusaurus-plugin-content-docs/current/farming-&-staking/farming/advanced-cli/cli-troubleshooting.mdx",tags:[],version:"latest",sidebarPosition:4,frontMatter:{title:"Soluci\xf3n de problemas",sidebar_position:4,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binarios","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Tips & Tricks",permalink:"/es/docs/farming-&-staking/farming/advanced-cli/cli-tips"},next:{title:"Additional Guides",permalink:"/es/docs/category/additional-guides"}},l={},c=[{value:"Soluci\xf3n de problemas",id:"soluci\xf3n-de-problemas",level:2},{value:"Enable Rust Backtrace",id:"enable-rust-backtrace",level:3},{value:"Common Problems",id:"common-problems",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"soluci\xf3n-de-problemas"},"Soluci\xf3n de problemas"),(0,a.kt)("p",null,"If you are facing issues with your node/farmer you can try a few of the following things below, if you are unable to get your issue resolved please check our ",(0,a.kt)("a",{parentName:"p",href:"https://forums.subspace.network"},"Forums")," to see if your issue may have been solved, if its a new one feel free to post it! You can also join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/subspace-network"},"Discord")," for additional Peer to Peer help."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We have included a few tutorials below that may help you in your support journey, this is not an all inclusive list but we welcome contributions")),(0,a.kt)("h3",{id:"enable-rust-backtrace"},"Enable Rust Backtrace"),(0,a.kt)("p",null,"When running the Subspace Network Farmer & Node, you might encounter an error message indicating the need for a Rust backtrace to diagnose issues:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Backtrace omitted. Run with RUST_BACKTRACE=1 environment variable to display it.\n")),(0,a.kt)("p",null,"This message suggests that Rust, the programming language used in Subspace Network Farmer & Node, has encountered a problem. By default, the backtrace is not displayed. To enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE")," environment variable and view detailed error information, use the following commands based on your operating system:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ud83d\uddbc\ufe0f Windows")," (PowerShell): Enter ",(0,a.kt)("inlineCode",{parentName:"li"},"$Env:RUST_BACKTRACE=1")," in PowerShell and rerun the application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ud83c\udf4e macOS"),": Type ",(0,a.kt)("inlineCode",{parentName:"li"},"export RUST_BACKTRACE=1")," in the terminal and rerun the application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ud83d\udc27 Ubuntu"),": Enter ",(0,a.kt)("inlineCode",{parentName:"li"},"export RUST_BACKTRACE=1")," in the terminal and rerun the application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u2699 Service (Linux)"),": For services, use ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo systemctl edit subspace-node")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo systemctl edit subspace-farmer"),", add ",(0,a.kt)("inlineCode",{parentName:"li"},"[Service]")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Environment=RUST_BACKTRACE=1")," between the warning comments, reload with ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo systemctl daemon-reload"),", and restart services using ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo systemctl restart subspace-{node,farmer}"),".")),(0,a.kt)("p",null,"By enabling ",(0,a.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE"),", you can obtain additional diagnostic information to help resolve any errors encountered during operation."),(0,a.kt)("h3",{id:"common-problems"},"Common Problems"),(0,a.kt)("p",null,"Looking for solutions to other common issues?"),(0,a.kt)("p",null,"Check out our Common Problems page. This resource covers a range of frequently encountered challenges, offering practical solutions to help you overcome them. Please note that while this page addresses many common issues, it is not an all-inclusive list. For issues not covered, you can visit our forums or Discord for additional support."))}d.isMDXComponent=!0}}]);
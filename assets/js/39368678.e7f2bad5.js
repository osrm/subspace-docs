"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[1599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Farming Cluster",sidebar_position:4,description:"How to run a Subspace Network Farmer using the farming cluster",keywords:["Farmer","Farming","CLI","Cluster","Docker"]},i=void 0,s={unversionedId:"farming-&-staking/farming/advanced-cli/cli-farming-cluster",id:"version-latest/farming-&-staking/farming/advanced-cli/cli-farming-cluster",title:"Farming Cluster",description:"How to run a Subspace Network Farmer using the farming cluster",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-latest/farming-&-staking/farming/advanced-cli/cli-farming-cluster.mdx",sourceDirName:"farming-&-staking/farming/advanced-cli",slug:"/farming-&-staking/farming/advanced-cli/cli-farming-cluster",permalink:"/docs/farming-&-staking/farming/advanced-cli/cli-farming-cluster",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/edit/main/docs/farming-&-staking/farming/advanced-cli/cli-farming-cluster.mdx",tags:[],version:"latest",sidebarPosition:4,frontMatter:{title:"Farming Cluster",sidebar_position:4,description:"How to run a Subspace Network Farmer using the farming cluster",keywords:["Farmer","Farming","CLI","Cluster","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Tips & Tricks",permalink:"/docs/farming-&-staking/farming/advanced-cli/cli-tips"},next:{title:"Troubleshooting",permalink:"/docs/farming-&-staking/farming/advanced-cli/cli-troubleshooting"}},l={},c=[{value:"Farming Cluster",id:"farming-cluster",level:2},{value:"Benefits",id:"benefits",level:3},{value:"Core Messaging Technology: NATS.io",id:"core-messaging-technology-natsio",level:3},{value:"Component Configuration",id:"component-configuration",level:3},{value:"Controller",id:"controller",level:3},{value:"Cache",id:"cache",level:3},{value:"Farmer",id:"farmer",level:3},{value:"Plotter",id:"plotter",level:3},{value:"Running multiple components at the same time",id:"running-multiple-components-at-the-same-time",level:3},{value:"Remote Compute Possibilities",id:"remote-compute-possibilities",level:3},{value:"Advanced Options / Redundancy",id:"advanced-options--redundancy",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"farming-cluster"},"Farming Cluster"),(0,a.kt)("p",null,"The farming cluster is designed for larger-scale farmers, addressing various challenges associated with scaling up. Essentially, the cluster consists of four distinct components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Controller")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cache")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Farmer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Plotter"))),(0,a.kt)("h3",{id:"benefits"},"Benefits"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Bandwidth Efficiency"),": Centralized storage of the piece cache conserves bandwidth."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Remote Compute Capability"),": Multiple PCs can contribute their CPU power for plotting (and eventually GPUs), without needing to store the plots locally."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Redundancy"),": Running multiple computers for each process enhances redundancy."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Additional Space"),": By moving the piece sync cache to a central location frees up roughly 1% of the SSD for larger plots.")),(0,a.kt)("h3",{id:"core-messaging-technology-natsio"},"Core Messaging Technology: NATS.io"),(0,a.kt)("p",null,"At the core of this process is a third-party software called ",(0,a.kt)("a",{parentName:"p",href:"https://nats.io/"},"NATS.io"),", which is used for communication between farmer processes. The simplest way to install NATS.io is via Docker."),(0,a.kt)("p",null,"To start NATS, create a configuration file with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"max_payload = 2MB\n")),(0,a.kt)("p",null,"Save this as ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"nats.config"))," and start the NATS server with Docker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run \\\n    --name nats \\\n    --restart unless-stopped \\\n    --publish 4222:4222 \\\n    --volume ./nats.config:/nats.config:ro \\\n    nats -c /nats.config\n")),(0,a.kt)("h3",{id:"component-configuration"},"Component Configuration"),(0,a.kt)("p",null,"Each of the four components requires a few additional parameters. All need the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"cluster"))," specification, a URL to the NATS server, and the specific component being executed."),(0,a.kt)("h3",{id:"controller"},"Controller"),(0,a.kt)("p",null,"The controller should be the first component to run.  It connects to the node, so the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"node-rpc-url"))," must be included."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"subspace-farmer cluster --nats-server nats://<NATS_IP>:4222 \\\n    controller \\\n        --base-path /path/to/controller-dir \\\n        --node-rpc-url ws://<NODE_IP>:<NODE_PORT>\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"<NATS_IP>"))," with your NATS server IP address, and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"<NODE_IP>:<NODE_PORT>"))," with your node\u2019s IP address and port. Specify the working directory with ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"--base-path")),"."),(0,a.kt)("p",null,"The controller logs farm connections, disconnections, and piece cache sync progress. Optional connection-related options include ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"--in-connections")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"--out-connections")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"--pending-in-connections")),", and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"--pending-out-connections")),"."),(0,a.kt)("h3",{id:"cache"},"Cache"),(0,a.kt)("p",null,"Next, run the cache component. Although you can run multiple cache processes to distribute the load, only one is required."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"subspace-farmer cluster --nats-server nats://<NATS_IP>:4222 \\\n    cache \\\n        path=/path/to/cache,size=SIZE\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"<NATS_IP>"))," with your NATS server IP address. Provide the cache file path with ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"path=")),", and specify the cache size. While an SSD is recommended, a hard disk can also be used.  200 GB is a good size to use for cache based on the current state of Gemini 3h."),(0,a.kt)("h3",{id:"farmer"},"Farmer"),(0,a.kt)("p",null,"Run the farmer component on each computer that will farm plots."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"subspace-farmer cluster --nats-server nats://<NATS_IP>:4222 \\\n    farmer \\\n        --reward-address <REWARD_ADDRESS> \\\n        path=/path/to/farm,size=SIZE\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"<NATS_IP>"))," with your NATS server IP address and provide your reward address, farm paths, and sizes. Optional parameters include ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"--sector-encoding-concurrency")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"--farming-thread-pool-size")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"--disable-farm-locking")),", and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"--create")),"."),(0,a.kt)("h3",{id:"plotter"},"Plotter"),(0,a.kt)("p",null,"Finally, run the plotter component. At least one plotter is needed for plotting and replotting farms. It can be on the same computer as the farmer or on a separate machine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"subspace-farmer cluster --nats-server nats://<NATS_IP>:4222 \\\n    plotter\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"<NATS_IP>"))," with your NATS server IP address.  Optional parameters include many farmer options related to concurrency and cores/threads."),(0,a.kt)("h3",{id:"running-multiple-components-at-the-same-time"},"Running multiple components at the same time"),(0,a.kt)("p",null,"It is possible to execute multiple components from one command line by separating them with ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"--"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"subspace-farmer cluster --nats-server nats://<NATS_IP>:4222 \\\n    cache \\\n        path=/path/to/cache,size=SIZE\n    --\n    plotter\n")),(0,a.kt)("h3",{id:"remote-compute-possibilities"},"Remote Compute Possibilities"),(0,a.kt)("p",null,"This setup allows for extensive remote compute capabilities. For instance, if a computer is suitable for farming but not for plotting, you can run the farmer on that computer and the plotter on one or more remote machines. This enables continuous plotting and replotting across multiple farms, ensuring plotters are utilized efficiently until all sectors are plotted and replotted."),(0,a.kt)("h3",{id:"advanced-options--redundancy"},"Advanced Options / Redundancy"),(0,a.kt)("p",null,"It is possible to setup clustering with nats server, but that setup is beyond the scope of this document. If you have more than one nats server, you can specify multiple ones."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"subspace-farmer cluster --nats-server nats://<NATS_IP#1>:4222 --nats-server nats://<NATS_IP#2>:4222\\\n")),(0,a.kt)("p",null,"You can run multiple controller components, but each one needs to have it\u2019s distinct cache group."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"subspace-farmer cluster --nats-server nats://<NATS_IP>:4222 \\\n    controller \\\n        --cache-group group1 \\\n        --base-path /path/to/controller-dir \\\n        --node-rpc-url ws://<NODE_IP>:<NODE_PORT>\n")),(0,a.kt)("p",null,"You need to specify a cache group on the cache component that matches the one specified on the controller component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"subspace-farmer cluster --nats-server nats://<NATS_IP>:4222 \\\n    cache \\\n        --cache-group group1 \\\n        path=/path/to/cache,size=SIZE\n")))}m.isMDXComponent=!0}}]);
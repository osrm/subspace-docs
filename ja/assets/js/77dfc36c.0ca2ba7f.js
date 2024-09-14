"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4807:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"GPU Plotter Trial Release",sidebar_position:4,description:"Tips on GPU Plotter",keywords:["Plotter","Farming","GPU"]},i=void 0,s={unversionedId:"farming-&-staking/farming/additional-guides/gpu-plotter",id:"farming-&-staking/farming/additional-guides/gpu-plotter",title:"GPU Plotter Trial Release",description:"Tips on GPU Plotter",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/gpu-plotter.md",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming-&-staking/farming/additional-guides/gpu-plotter",permalink:"/ja/docs/farming-&-staking/farming/additional-guides/gpu-plotter",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/additional-guides/gpu-plotter.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"GPU Plotter Trial Release",sidebar_position:4,description:"Tips on GPU Plotter",keywords:["Plotter","Farming","GPU"]},sidebar:"tutorialSidebar",previous:{title:"Grafana Dashboard",permalink:"/ja/docs/farming-&-staking/farming/additional-guides/grafana-dashboard"},next:{title:"Common problems",permalink:"/ja/docs/farming-&-staking/farming/common_problems"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Supported Video Cards",id:"supported-video-cards",level:2},{value:"NVIDIA",id:"nvidia",level:3},{value:"AMD (Future Support)",id:"amd-future-support",level:3},{value:"Potentially Supported (Requires Testing)",id:"potentially-supported-requires-testing",level:3},{value:"CPU and GPU Usage",id:"cpu-and-gpu-usage",level:2},{value:"Farming Cluster",id:"farming-cluster",level:2},{value:"Support",id:"support",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The first test builds of the ",(0,a.kt)("strong",{parentName:"p"},"GPU Plotter")," are now available!!!"),(0,a.kt)("admonition",{title:"Download Links",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You must be signed in to GitHub to access and download from these links."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/autonomys/subspace/actions/runs/10865214408"},"GPU Plotter for Linux")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/autonomys/subspace/actions/runs/10849228997"},"GPU Plotter for Windows")))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Autonomys requires a portion of your disk(s) to be reserved for plots on your solid-state drive (SSD). Once created, these plots are farmed using your CPU. This farming process is not CPU-intensive, and most\nmodern consumer CPUs can farm a large amount of disk space. However, the initial creation of these plots (and replotting) is much more CPU-intensive, often making the CPU the biggest bottleneck in creating new plots."),(0,a.kt)("p",null,"With the release of the GPU plotter, you can now use your GPU to create plots, either in addition to or instead of using the CPU. While many newer CPUs can plot a sector in less than 2 minutes, a high-end video card\ncan do it in just 6 seconds. Using a GPU is not required, but it is more energy-efficient and significantly faster than using a CPU alone."),(0,a.kt)("admonition",{title:"Plot Format Compatibility",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"GPU plotting uses the newer ",(0,a.kt)("strong",{parentName:"p"},"v1 plot format"),", applied to any plots created with versions released on or after ",(0,a.kt)("strong",{parentName:"p"},"July 5th"),".\nOlder software versions generated plots in the ",(0,a.kt)("strong",{parentName:"p"},"v0 format"),", which works only with CPU plotting.")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("admonition",{title:"Driver Requirement",type:"important"},(0,a.kt)("p",{parentName:"admonition"},"The GPU plotter requires NVIDIA drivers version ",(0,a.kt)("strong",{parentName:"p"},"550")," or newer.")),(0,a.kt)("p",null,"The GPU Plotter currently supports ",(0,a.kt)("strong",{parentName:"p"},"NVIDIA RTX 20 series")," and newer consumer cards.\nSupport for additional AMD cards will be added in the future."),(0,a.kt)("p",null,"The download package contains both the node and farmer Advanced CLI executables, but you only need the farmer for plotting. You can continue using an official release for your node. This setup supports both standalone farming/plotting and farming cluster. Support for Space Acres will be added in the future."),(0,a.kt)("p",null,"If you encounter the following error message you need to update to supported drivers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Failed to encode sector: Records encoder error:\ncudaGetLastError()@C:\\actions-runner\\_work\\subspace\\subspace\\shared\\subspace-proof-of-space-gpu\\src\\subspace_api.cu:191 failed:\n"the provided PTX was compiled with an unsupported toolchain."\n')),(0,a.kt)("admonition",{title:"GPU Selection Override",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"By default, the plotter uses all available GPUs. You can override this behavior using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--cuda-gpus")," parameter.")),(0,a.kt)("h2",{id:"supported-video-cards"},"Supported Video Cards"),(0,a.kt)("h3",{id:"nvidia"},"NVIDIA"),(0,a.kt)("p",null,"All NVIDIA RTX 20 series cards and newer are supported."),(0,a.kt)("h3",{id:"amd-future-support"},"AMD (Future Support)"),(0,a.kt)("p",null,"While current support is limited to NVIDIA, the following AMD video cards are expected to be supported in the future:\n",(0,a.kt)("a",{parentName:"p",href:"https://rocm.docs.amd.com/projects/install-on-linux/en/latest/reference/system-requirements.html"},"AMD Cards System Requirements"),"."),(0,a.kt)("p",null,"The following professional and consumer cards may be supported (especially ",(0,a.kt)("a",{parentName:"p",href:"https://rocm.docs.amd.com/projects/install-on-windows/en/docs-6.2.0/reference/system-requirements.html"},"on Windows"),", though not yet on Linux):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PRO W7800, W6800, V620"),(0,a.kt)("li",{parentName:"ul"},"7800 XT, 7700 XT, 7600 (but not 7600 XT)"),(0,a.kt)("li",{parentName:"ul"},"6950 XT, 6900 XT, 6800 XT, 6800")),(0,a.kt)("h3",{id:"potentially-supported-requires-testing"},"Potentially Supported (Requires Testing)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"6750 XT, 6700 XT, 6700"),(0,a.kt)("li",{parentName:"ul"},"6650 XT, 6600 XT, 6600")),(0,a.kt)("admonition",{title:"Unsupported GPUs",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"RX 5xxx series cards are not supported at this time.")),(0,a.kt)("h2",{id:"cpu-and-gpu-usage"},"CPU and GPU Usage"),(0,a.kt)("p",null,"By default, the plotter takes advantage of both the ",(0,a.kt)("strong",{parentName:"p"},"CPU")," and ",(0,a.kt)("strong",{parentName:"p"},"GPU"),". However, if you're aiming to maximize GPU performance, you may want to disable CPU plotting, as GPU plotting still requires some CPU resources for managing tasks. To disable CPU usage, use the following parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"--cpu-sector-encoding-concurrency 0\n")),(0,a.kt)("p",null,"Alternatively, if you prefer to disable ",(0,a.kt)("strong",{parentName:"p"},"GPU")," plotting and rely solely on ",(0,a.kt)("strong",{parentName:"p"},"CPU"),", you can turn off CUDA support by setting the value to an empty string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'--cuda-gpus ""\n')),(0,a.kt)("h2",{id:"farming-cluster"},"Farming Cluster"),(0,a.kt)("p",null,"When using a farming cluster please be aware that that when using GPU's - and especially multiple GPU's - you may exceed the bandwidth of your network connection. A fast GPU will exceed the bandwidth that a 1G\nconnection would provide. That doesn't mean it will fail to work, it just means that your video card will be idle while it waits for the data to transfer. Many people with fast or multiple GPU's are using 2.5G\nor 10G connections."),(0,a.kt)("h2",{id:"support"},"Support"),(0,a.kt)("p",null,"Should you have any questions or need further assistance, please don't hesitate to reach out to the team on Discord!"))}c.isMDXComponent=!0}}]);
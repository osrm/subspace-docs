"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9073],{9295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(4848),s=n(8453),i=n(1470),l=n(9365);const o={title:"GPU Plotter",sidebar_position:1,description:"Tips on GPU Plotter",slug:"/farming/guides/gpu-plotter",keywords:["Plotter","\u0627\u0644\u0645\u0632\u0631\u0639\u0629","GPU"]},a=void 0,c={id:"farming-&-staking/farming/additional-guides/gpu-plotter",title:"GPU Plotter",description:"Tips on GPU Plotter",source:"@site/i18n/ar/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/gpu-plotter.mdx",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming/guides/gpu-plotter",permalink:"/ar/farming/guides/gpu-plotter",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/additional-guides/gpu-plotter.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"GPU Plotter",sidebar_position:1,description:"Tips on GPU Plotter",slug:"/farming/guides/gpu-plotter",keywords:["Plotter","\u0627\u0644\u0645\u0632\u0631\u0639\u0629","GPU"]},sidebar:"tutorialSidebar",previous:{title:"Additional Guides",permalink:"/ar/farming/guides"},next:{title:"Port Forwarding & Firewall",permalink:"/ar/farming/guides/port-config"}},d={},u=[{value:"Platform Compatibility",id:"platform-compatibility",level:2},{value:"Supported GPUs",id:"supported-gpus",level:2},{value:"Common Plotting Parameters",id:"common-plotting-parameters",level:2},{value:"Farming Cluster",id:"farming-cluster",level:2},{value:"Known Issues",id:"known-issues",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Autonomys utilizes your drive storage, specifically SSD or NVMe drives, to store plots. After the plotting process is finished, these plots are then farmed using your CPU. Farming is not particularly demanding on the CPU, enabling most modern processors to manage a substantial farm size. However, the plot creation process is highly resource intensive, which makes CPU plotting the main bottleneck."}),"\n",(0,r.jsx)(t.p,{children:"Utilizing GPU plotting allows you to harness the power of compatible GPUs for plot generation and replotting, either in conjunction with or as a substitute for CPU processing. While many modern CPUs can complete the plotting of a sector in less than two minutes, a single high performance GPU can accomplish the same task in under five seconds, greatly improving efficiency and speed."}),"\n",(0,r.jsx)(t.p,{children:"Although GPU plotting is not mandatory, it provides enhanced energy efficiency and speed compared to relying solely on a CPU."}),"\n",(0,r.jsx)(t.admonition,{title:"Plot Format Compatibility",type:"info",children:(0,r.jsx)(t.p,{children:"GPU plotting employs the new v1 plot format, which is applicable to any plots created with versions released on or after July 5th. In contrast, older software versions generated plots in the v0 format, which is only compatible with CPU plotting."})}),"\n",(0,r.jsx)(t.h2,{id:"platform-compatibility",children:"Platform Compatibility"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Platform"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\ud83d\udc27 Linux"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\ud83e\ude9f Windows"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Nvidia"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"AMD"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Intel"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/autonomys/subspace/releases",children:"Advanced CLI"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udee0\ufe0f"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udd2e"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/autonomys/space-acres/releases",children:"Space Acres"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udd1c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udd2e"})]})]})]}),"\n",(0,r.jsxs)("div",{className:"small-print",children:[(0,r.jsxs)(t.p,{children:["\ud83d\udee0\ufe0f Limited AMD Support for ",(0,r.jsx)(t.strong,{children:"Linux only"})," is available in recent test builds. The most recent test builds are linked on the ",(0,r.jsx)(t.a,{href:"https://forum.autonomys.xyz/t/rocm-gpu-support-amd/4440",children:"forum"})]}),(0,r.jsxs)(t.p,{children:["See Discord ",(0,r.jsx)(t.a,{href:"https://discord.com/channels/864285291518361610/1062507270539321485",children:"farmer-chat"})," channel for limited support."]})]}),"\n",(0,r.jsx)(t.h2,{id:"supported-gpus",children:"Supported GPUs"}),"\n",(0,r.jsxs)(i.A,{queryString:"brand",children:[(0,r.jsxs)(l.A,{value:"nvidia",label:"Nvidia",queryString:"nvidia",default:!0,children:[(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Series/Model"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Supported"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RTX 20xx and Newer"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GTX 16 Series"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]}),(0,r.jsx)("div",{className:"small-print",children:(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["Nvidia ",(0,r.jsx)(t.a,{href:"https://developer.nvidia.com/cuda-downloads",children:"drivers"})," version 550 or later are required. Installing the CUDA Toolkit is not required."]})})})]}),(0,r.jsxs)(l.A,{value:"amd",label:"AMD",children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["There are many challenges to overcome regarding AMD ROCm support. There is much more information on this topic on the ",(0,r.jsx)(t.a,{href:"https://forum.autonomys.xyz/t/rocm-gpu-support-amd/4440",children:"forum"}),"."]})}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"You must be using the latest test build for AMD support."})}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Series/Model"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Ubuntu"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Windows"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 7900 XTX"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 7600 XT"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 7600"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 6800"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 6700 XT"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2754"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 6600 XT"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 6600"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 5700 XT"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 5700"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 5600"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AMD BC-250"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]}),(0,r.jsxs)(i.A,{groupId:"OS",children:[(0,r.jsxs)(l.A,{value:"linux",label:"\ud83d\udc27 Ubuntu",default:!0,children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"subspace-farmer-rocm-*"})," binaries provide ROCm support, with corresponding CLI options similar to CUDA and prefixed with ",(0,r.jsx)(t.code,{children:"--rocm"}),"."]}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In order to install necessary libraries go to Ubuntu native installation \u2014 ",(0,r.jsx)(t.a,{href:"https://rocm.docs.amd.com/projects/install-on-linux/en/docs-6.2.2/install/native-install/ubuntu.html",children:"ROCm installation (Linux)"})," and follow these steps for your Ubuntu version:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Package signing key"}),"\n",(0,r.jsx)(t.li,{children:"Register ROCm packages\nYou don't need a custom driver or full ROCm toolchain to use already compiled application, so skip all other steps."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Next install a single package with ROCm runtime:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"sudo apt-get install --no-install-recommends hip-runtime-amd\n"})}),"\n",(0,r.jsx)(t.p,{children:"And register the library so that farmer and other apps can find it:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:'echo "/opt/rocm/lib" | sudo tee /etc/ld.so.conf.d/rocm.conf > /dev/null\nsudo ldconfig\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Then, to allow the user to access GPU for compute purposes, you need to add your user to render group (please never run farmer as root with sudo ","\ud83d\ude4f"," ):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"sudo usermod -a -G render $LOGNAME\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Now you'll need to log out of your user profile and log back in or simply reboot for group changes to take effect and you're ready to go."}),"\n"]}),"\n"]})]}),(0,r.jsx)(l.A,{value:"windows",label:"\ud83e\ude9f Windows",children:(0,r.jsx)(t.p,{children:"AMD GPUs on Windows (including through WSL) are not currently supported. We hope to add support in the future."})}),(0,r.jsxs)(l.A,{value:"docker",label:"\ud83d\udc33 Docker",children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Cross-compilation no longer requires separate Dockerfiles (which is why they are removed), both native and cross-compilation is supported with a single file"})}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Container image is now built as multi-platform, meaning no -aarch64 suffix and no awkwardness related to that"})}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Aarch64 farmer container image is now compiled with CUDA support (while regular executable isn't)"})}),(0,r.jsxs)(t.p,{children:["Container image now ships with a second executable ",(0,r.jsx)(t.code,{children:"/subspace-farmer-rocm"})," (see explanation above as to why second binary is needed).\nHere is how it can be used with Docker Compose, you can use this as an inspiration for other use cases:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"services:\n  famer:\n    image: ghcr.io/autonomys/farmer:TAG\n    # Beginning of ROCm-specific options\n    devices:\n      - /dev/kfd:/dev/kfd\n      # This will make all GPUs accessible, you can also limit this\n      # to individual devices like `/dev/dri/renderD128`\n      - /dev/dri:/dev/dri\n    security_opt:\n      - seccomp:unconfined\n    # `root` user can be replaced with ID of the user on the host system\n    # that is in `render` group, needed to access `/dev/kfd` device\n    user: root\n    entrypoint: /subspace-farmer-rocm\n    # End of ROCm-specific options\n    ...the rest of typical options you'd normally use\n"})})]})]})]}),(0,r.jsx)(l.A,{value:"intel",label:"Intel",children:(0,r.jsxs)(t.p,{children:["Intel Arc GPUs ",(0,r.jsx)(t.em,{children:"may"})," be supported in the future, but specific compatibility details have not been announced yet."]})})]}),"\n",(0,r.jsx)(t.h2,{id:"common-plotting-parameters",children:"Common Plotting Parameters"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Enable CPU Plotting"})}),"\n",(0,r.jsxs)(t.p,{children:["When a compatible GPU is detected, CPU plotting is automatically disabled by default, but can be re-enabled if needed by specifying number of concurrently encoded sectors: ",(0,r.jsx)(t.code,{children:"--cpu-sector-encoding-concurrency <sectors>"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--cpu-sector-encoding-concurrency 2\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Disable GPU Plotting"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Linux"',children:'  --cuda-gpus ""\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-powershell",metastring:'title="Windows"',children:"--cuda-gpus 99\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Specify specific GPUs"})}),"\n",(0,r.jsxs)(t.p,{children:["Specify particular GPUs for plotting rather than using all available GPUs (the default configuration employs all compatible GPUs): ",(0,r.jsx)(t.code,{children:"--cuda-gpus <gpu_ids>"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--cuda-gpus 0,1,3\n"})}),"\n",(0,r.jsx)(t.h2,{id:"farming-cluster",children:"Farming Cluster"}),"\n",(0,r.jsx)(t.p,{children:"When utilizing Farming Cluster, particularly with multiple or fast GPUs, you might encounter limitations due to your network's bandwidth. High performance GPUs can easily surpass the capacity of a 1G connection. While this won't cause the process to fail, it may result in your GPU idling as it waits for data to transfer. To optimize performance in such scenarios, consider upgrading to networking solutions of 2.5G, 10G, or higher."}),"\n",(0,r.jsx)(t.h2,{id:"known-issues",children:"Known Issues"}),"\n",(0,r.jsx)(t.p,{children:"Many times you will not use all of the compute power of your GPU. While this will be addressed in the future, a workaround when running a farming cluster is to run multiple instances of the plotter on the same machine."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(8215);const s={tabItem:"tabItem_Ymn6"};var i=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),s=n(8215),i=n(3104),l=n(6347),o=n(205),a=n(7485),c=n(1682),d=n(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=h(e),[l,a]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,u]=x({queryString:n,groupId:s}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),f=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{f&&a(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(4848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=a.indexOf(t),s=o[n].value;s!==r&&(c(t),l(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>a.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:i}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,j.jsx)(y,{...t,...e}),(0,j.jsx)(b,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(6540);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
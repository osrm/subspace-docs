"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9073],{9295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var r=n(4848),i=n(8453),l=n(1470),s=n(9365);const a={title:"GPU Plotter",sidebar_position:1,description:"Tips on GPU Plotter",slug:"/farming/guides/gpu-plotter",keywords:["Plotter","\u0627\u0644\u0645\u0632\u0631\u0639\u0629","GPU"]},o=void 0,d={id:"farming-&-staking/farming/additional-guides/gpu-plotter",title:"GPU Plotter",description:"Tips on GPU Plotter",source:"@site/i18n/ar/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/gpu-plotter.mdx",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming/guides/gpu-plotter",permalink:"/ar/farming/guides/gpu-plotter",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/additional-guides/gpu-plotter.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"GPU Plotter",sidebar_position:1,description:"Tips on GPU Plotter",slug:"/farming/guides/gpu-plotter",keywords:["Plotter","\u0627\u0644\u0645\u0632\u0631\u0639\u0629","GPU"]},sidebar:"tutorialSidebar",previous:{title:"Additional Guides",permalink:"/ar/farming/guides"},next:{title:"Port Forwarding & Firewall",permalink:"/ar/farming/guides/port-config"}},c={},u=[{value:"Platform Compatibility",id:"platform-compatibility",level:2},{value:"Supported GPUs",id:"supported-gpus",level:2}];function h(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Autonomys utilizes your drive storage, specifically SSD or NVMe drives, to store plots. After the plotting process is finished, these plots are then farmed using your CPU. Farming is not particularly demanding on the CPU, enabling most modern processors to manage a substantial farm size. However, the plot creation process is highly resource intensive, which makes CPU plotting the main bottleneck."}),"\n",(0,r.jsx)(t.p,{children:"Utilizing GPU plotting allows you to harness the power of compatible GPUs for plot generation and replotting, either in conjunction with or as a substitute for CPU processing. While many modern CPUs can complete the plotting of a sector in less than two minutes, a single high performance GPU can accomplish the same task in under five seconds, greatly improving efficiency and speed."}),"\n",(0,r.jsx)(t.p,{children:"Although GPU plotting is not mandatory, it provides enhanced energy efficiency and speed compared to relying solely on a CPU."}),"\n",(0,r.jsx)(t.admonition,{title:"Plot Format Compatibility",type:"info",children:(0,r.jsx)(t.p,{children:"GPU plotting employs the new v1 plot format, which is applicable to any plots created with versions released on or after July 5th. In contrast, older software versions generated plots in the v0 format, which is only compatible with CPU plotting."})}),"\n",(0,r.jsx)(t.h2,{id:"platform-compatibility",children:"Platform Compatibility"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Platform"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\ud83d\udc27 Linux"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\ud83e\ude9f Windows"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Nvidia"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"AMD"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Intel"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Advanced CLI"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udd2e"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Space Acres"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udd1c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udd2e"})]})]})]}),"\n",(0,r.jsxs)("div",{className:"small-print",children:[(0,r.jsxs)(t.p,{children:["\ud83d\udee0\ufe0f Limited AMD support is available in recent test builds. The most recent test builds are linked on the ",(0,r.jsx)(t.a,{href:"https://forum.autonomys.xyz/t/rocm-gpu-support-amd/4440",children:"forum"}),"."]}),(0,r.jsxs)(t.p,{children:["See Discord ",(0,r.jsx)(t.a,{href:"https://discord.com/channels/864285291518361610/1062507270539321485",children:"farmer-chat"})," channel for limited support."]})]}),"\n",(0,r.jsx)(t.h2,{id:"supported-gpus",children:"Supported GPUs"}),"\n",(0,r.jsxs)(l.A,{queryString:"brand",children:[(0,r.jsxs)(s.A,{value:"nvidia",label:"Nvidia",queryString:"nvidia",default:!0,children:[(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Series/Model"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Supported"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RTX 20xx and Newer"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GTX 16 Series"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]}),(0,r.jsx)("div",{className:"small-print",children:(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["Nvidia ",(0,r.jsx)(t.a,{href:"https://developer.nvidia.com/cuda-downloads",children:"drivers"})," version 550 or later are required. Installing the CUDA Toolkit is not required."]})})})]}),(0,r.jsx)(s.A,{value:"amd",label:"AMD",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Series/Model"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Ubuntu"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Windows"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 7900 XTX"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 7600 XT"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 7600"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 6800"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 6700 XT"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2754"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 6600 XT"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 6600"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 5700 XT"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 5700"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RX 5600"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AMD BC-250"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(8215);const i={tabItem:"tabItem_Ymn6"};var l=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),i=n(8215),l=n(3104),s=n(6347),a=n(205),o=n(7485),d=n(1682),c=n(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(i.location.search);t.set(l,e),i.replace({...i.location,search:t.toString()})}),[l,i])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,l=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[d,u]=p({queryString:n,groupId:i}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,l]=(0,c.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:i}),j=(()=>{const e=d??g;return x({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{j&&o(j)}),[j]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=n(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),i=a[n].value;i!==r&&(d(t),s(i))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:u,onClick:c,...l,className:(0,i.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function v(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,f.jsx)(y,{...t,...e}),(0,f.jsx)(b,{...t,...e})]})}function A(e){const t=(0,m.A)();return(0,f.jsx)(v,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const i={},l=r.createContext(i);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[2303],{9478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=n(4848),i=n(8453),a=n(1470),s=n(9365);const o={title:"Getting Started",sidebar_position:1,description:"Farming Getting Started Guide",keywords:["Prerequisites","Farming","Operating Systems","Hardware Requirements","File Systems","Security Considerations","SSD","NVMe","Port Forwarding","Firewall Configuration","System Updates","Node Requirements","Network Safety","Wallet Setup"]},l=void 0,d={id:"farming-&-staking/farming/intro",title:"Getting Started",description:"Farming Getting Started Guide",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/farming-&-staking/farming/intro.mdx",sourceDirName:"farming-&-staking/farming",slug:"/farming-&-staking/farming/intro",permalink:"/it/docs/farming-&-staking/farming/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1,description:"Farming Getting Started Guide",keywords:["Prerequisites","Farming","Operating Systems","Hardware Requirements","File Systems","Security Considerations","SSD","NVMe","Port Forwarding","Firewall Configuration","System Updates","Node Requirements","Network Safety","Wallet Setup"]},sidebar:"tutorialSidebar",previous:{title:"Farming",permalink:"/it/docs/category/farming"},next:{title:"Install",permalink:"/it/docs/farming-&-staking/farming/space-acres/install"}},c={},u=[{value:"Operating System",id:"operating-system",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Reference Hardware",id:"reference-hardware",level:3},{value:"Storage",id:"storage",level:2},{value:"File Systems (Linux)",id:"file-systems-linux",level:2},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Networking",id:"networking",level:2},{value:"Dependencies",id:"dependencies",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"Installation Videos",type:"tip",children:(0,r.jsxs)(t.p,{children:["For those who prefer a visual guide, we have prepared installation videos to assist you. The videos will help you to set up the Space Acres farming application in under 10 minutes. Please follow ",(0,r.jsx)(t.a,{href:"/docs/farming-&-staking/farming/space-acres/install#installation-videos",children:"the installation videos"})," to use SubWallet to create a compatible Substrate account and refer to the detailed guide on downloading and configuring Autonomys' farming application, Space Acres."]})}),"\n",(0,r.jsx)(t.h2,{id:"operating-system",children:"Operating System"}),"\n",(0,r.jsx)("small",{children:(0,r.jsx)(t.table,{children:(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Minimum Supported Version"}),(0,r.jsx)(t.th,{children:"\ud83d\udc27 Ubuntu 22.04"}),(0,r.jsx)(t.th,{children:"\ud83e\ude9f Windows 11"}),(0,r.jsx)(t.th,{children:"\ud83c\udf4e macOS 12 (Monterey)"})]})})})}),"\n",(0,r.jsx)(t.h2,{id:"hardware",children:"Hardware"}),"\n",(0,r.jsx)("a",{id:"min-hardware"}),"\n",(0,r.jsx)("a",{id:"min-node-storage"}),"\n",(0,r.jsx)("a",{id:"farm-storage"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Hardware"}),(0,r.jsx)(t.th,{children:"CPU"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"RAM"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Node Storage"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Farm Storage"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Minimum ",(0,r.jsx)(t.a,{href:"#min-hardware",children:"\xb9"})]}),(0,r.jsx)(t.td,{children:"4 Cores+"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"8GB"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["100GB ",(0,r.jsx)(t.a,{href:"#min-node-storage",children:"\xb2"})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"100GB"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Recommended"}),(0,r.jsx)(t.td,{children:"Intel Core i7-6700 or equivalent"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"16GB+"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"256GB"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["\u267e\ufe0f ",(0,r.jsx)(t.a,{href:"#farm-storage",children:"\xb3"})]})]})]})]}),"\n",(0,r.jsx)("small",{children:"\xb9 Nodes that meet minimum requirements should be able to farm and sync with the network under normal conditions. However, performance may decline during periods of heavy network load, such as when blocks are filled with numerous transactions."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("small",{children:"\xb2 While 100GB is sufficient for running a farming node, a domain node will require more than 100GB of storage."}),(0,r.jsx)("br",{}),(0,r.jsx)("small",{children:"\xb3 Storage contribution impacts block and vote rewards on the Autonomys Network. More plotted sectors will lead to faster and more frequent rewards. You can start with as little as 100 GB, but allocating more will maximize your reward potential."}),(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(t.admonition,{title:"Internet Considerations",type:"warning",children:(0,r.jsx)(t.p,{children:"Operating a node and farmer can be data intensive. It is advisable to have a stable and unlimited internet connection."})}),"\n",(0,r.jsx)(t.h3,{id:"reference-hardware",children:"Reference Hardware"}),"\n",(0,r.jsx)(t.p,{children:"Our benchmarking tests were performed using the Intel Core i7-6700 CPU. We calibrated the transaction weights to ensure that a full block does not contain more transactions than this CPU can handle within the 2-second block execution time limit. This guarantees that nodes with hardware equivalent to or better than the Intel Core i7-6700 can process blocks at full capacity without performance issues."}),"\n",(0,r.jsx)(t.p,{children:"While farmers using hardware below this specification may function effectively under most conditions, they could face challenges during peak network activity. If blocks consistently fill with transactions, nodes with lower specifications might struggle to keep pace, which could impact farming performance and rewards."}),"\n",(0,r.jsxs)(t.p,{children:["You can see detailed machine information used for the ",(0,r.jsx)(t.a,{href:"https://gist.github.com/DaMandal0rian/21a01da49ee820c3e59bce7f8c2d0166",children:"reference hardware"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"storage",children:"Storage"}),"\n",(0,r.jsx)(t.admonition,{title:"Hard Drives Not Supported",type:"caution",children:(0,r.jsx)(t.p,{children:"Hard disk drives are not supported. The use of smart caching, tiered storage, raid, or other acceleration methods will not be effective due to the significant random read IOPS required for the proving process."})}),"\n",(0,r.jsx)(t.p,{children:"SSD storage is required. High end models are not necessary and a mid range SSD from a reputable manufacturer with adequate endurance should be sufficient. Be cautious with lesser known brands as they may face issues with maintaining consistent read performance. You can also use NVMe SSDs but this is not required."}),"\n",(0,r.jsx)(t.h2,{id:"file-systems-linux",children:"File Systems (Linux)"}),"\n",(0,r.jsx)(t.admonition,{title:"File Descriptor Limit",type:"caution",children:(0,r.jsxs)(t.p,{children:["Linux systems may have a default file descriptor limit, which can vary based on distribuition. Exceeding this limit could cause errors. For detailed information, visit our ",(0,r.jsx)(t.a,{href:"/it/docs/farming-&-staking/farming/advanced-cli/cli-tips#changing-number-of-open-files-limit-linux",children:"Tips & Tricks"})," guide."]})}),"\n",(0,r.jsxs)(a.A,{queryString:"file-system",children:[(0,r.jsxs)(s.A,{value:"ext4",label:"\u2611\ufe0f ext4",default:!0,children:[(0,r.jsx)(t.p,{children:"This file system maximizes usable space for the farmer."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Recommended Formatting Command for Drives Dedicated to Subspace Plots:"',children:"sudo mkfs.ext4 -m 0 -T largefile4 /dev/sdX\n"})})]}),(0,r.jsx)(s.A,{value:"xfs",label:"\u274c XFS",children:(0,r.jsx)(t.p,{children:"Resizing a plot when the drive is nearly full (98% or more) will render the plot unfarmable unless sufficient additional space is freed up through other means. Full disk utilization can only be achieved during the plot's initial creation and will yield less usable space compared to ext4."})}),(0,r.jsxs)(s.A,{value:"cow",label:"\u274c CoW",children:[(0,r.jsx)(t.p,{children:"Copy-on-Write file systems (ReFS, BTRFS, ZFS, bcachefs, HAMMER) are not recommended due to increased latency and reduced write speeds associated with managing unnecessary data copies."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Disable CoW on BTRFS:"',children:"sudo chattr +C /path/to/farm\n"})})]}),(0,r.jsx)(s.A,{value:"raid",label:"\u274c RAID",children:(0,r.jsx)(t.p,{children:"The farmer employs checksums for data integrity and can recover from corrupted blocks. Striping provides no benefits and raises the risk of needing to replot multiple drives instead of just one."})}),(0,r.jsx)(s.A,{value:"swap",label:"\u274c SWAP",children:(0,r.jsx)(t.p,{children:"Only necessary if your system has limited RAM."})})]}),"\n",(0,r.jsx)(t.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,r.jsx)(t.admonition,{title:"Safety and Security Guide",type:"info",children:(0,r.jsxs)(t.p,{children:["For detailed information, visit our ",(0,r.jsx)(t.a,{href:"../../learn/security",children:"Safety and Security"})," guide."]})}),"\n",(0,r.jsxs)(t.p,{children:["Ensure your system is regularly updated, configure ",(0,r.jsx)(t.a,{href:"/it/docs/farming-&-staking/farming/additional-guides/port-config#ports-to-forward--firewall-access",children:"port forwarding"}),", set up your ",(0,r.jsx)(t.a,{href:"/it/docs/farming-&-staking/farming/additional-guides/port-config#firewall-configuration",children:"firewall"}),", and follow best practices for network safety. For comprehensive security guidelines, please refer to our ",(0,r.jsx)(t.a,{href:"../../learn/security",children:"Safety and Security"})," guide."]}),"\n",(0,r.jsx)(t.h2,{id:"wallet",children:"Wallet"}),"\n",(0,r.jsx)(t.admonition,{title:"Wallets Guide",type:"info",children:(0,r.jsxs)(t.p,{children:["For detailed information, visit our ",(0,r.jsx)(t.a,{href:"../../category/wallets",children:"Wallets"})," guide."]})}),"\n",(0,r.jsxs)(t.p,{children:["Before you begin, make sure you have a wallet to receive rewards. We recommend using ",(0,r.jsx)(t.a,{href:"https://subwallet.app",children:"SubWallet"}),", but ",(0,r.jsx)(t.a,{href:"https://polkadot.js.org/extension",children:"PolkadotJS"})," is also available. Install one of these wallets as a browser extension and create a new account. Your account address will be required during the setup process."]}),"\n",(0,r.jsx)(t.h2,{id:"networking",children:"Networking"}),"\n",(0,r.jsx)(t.admonition,{title:"Port Forwarding & Firewall Guide",type:"info",children:(0,r.jsxs)(t.p,{children:["For detailed information on network configurations, including port forwarding requirements and firewall settings, please refer to our ",(0,r.jsx)(t.a,{href:"/it/docs/farming-&-staking/farming/additional-guides/port-config",children:"Port Forwarding & Firewall"})," guide."]})}),"\n",(0,r.jsx)(t.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,r.jsx)(t.admonition,{title:"Windows No Output Bug",type:"caution",children:(0,r.jsxs)(t.p,{children:["If you face an error where the node outputs nothing and no error code is given it is likely you just need to install the latest Visual C++ Redistributable package ",(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170",children:"here"})]})}),"\n",(0,r.jsxs)(t.admonition,{type:"caution",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["Linux ",(0,r.jsx)(t.code,{children:"libcomp.so.1"})," error."]}),(0,r.jsxs)(t.p,{children:["If you encounter an error related to ",(0,r.jsx)(t.code,{children:"libgomp.so.1"}),", install the ",(0,r.jsx)(t.code,{children:"libgomp1"})," library with ",(0,r.jsx)(t.code,{children:"sudo apt-get install libgomp1"}),"."]})]}),"\n",(0,r.jsx)(t.admonition,{title:"Linux File Descriptor Limit",type:"caution",children:(0,r.jsxs)(t.p,{children:["Linux has a hard limit of 100k file descriptors. Exceeding this may cause errors. Refer to our guide ",(0,r.jsx)(t.a,{href:"/it/docs/farming-&-staking/farming/advanced-cli/cli-tips#changing-number-of-open-files-limit-linux",children:"here"})]})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(8215);const i={tabItem:"tabItem_Ymn6"};var a=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(6540),i=n(8215),a=n(3104),s=n(6347),o=n(205),l=n(7485),d=n(1682),c=n(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[d,u]=f({queryString:n,groupId:i}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,c.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),x=(()=>{const e=d??p;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==r&&(d(t),s(i))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...a,className:(0,i.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,b.jsx)(y,{...t,...e}),(0,b.jsx)(j,{...t,...e})]})}function v(e){const t=(0,g.A)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(6540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
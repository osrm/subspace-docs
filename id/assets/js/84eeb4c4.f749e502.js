"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[2833],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?o.createElement(b,l(l({ref:t},u),{},{components:r})):o.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(7294),n=r(6010);const a={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var o=r(7462),n=r(7294),a=r(6010),l=r(2466),i=r(6550),s=r(1980),c=r(7392),u=r(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:o,default:n}}=e;return{value:t,label:r,attributes:o,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const o=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,a=d(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[s,c]=b({queryString:r,groupId:o}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,u.Nk)(r);return[o,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:o}),h=(()=>{const e=s??p;return m({value:e,tabValues:a})?e:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,a]),tabValues:a}}var h=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),o=c[r].value;o!==i&&(p(t),s(o))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,a.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:o}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function v(e){const t=f(e);return n.createElement("div",{className:(0,a.Z)("tabs-container",g.tabList)},n.createElement(k,(0,o.Z)({},e,t)),n.createElement(y,(0,o.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return n.createElement(v,(0,o.Z)({key:String(t)},e))}},8662:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));r(4866),r(5162),r(9960),r(1207);const a={title:"Common problems",sidebar_position:6,description:"Common problems and ways to resolve them",keywords:["Error","Problem","Issues"]},l=void 0,i={unversionedId:"protocol/common_problems",id:"version-latest/protocol/common_problems",title:"Common problems",description:"Common problems and ways to resolve them",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-latest/protocol/common_problems.md",sourceDirName:"protocol",slug:"/protocol/common_problems",permalink:"/id/docs/protocol/common_problems",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/id/docusaurus-plugin-content-docs/current/protocol/common_problems.md",tags:[],version:"latest",sidebarPosition:6,frontMatter:{title:"Common problems",sidebar_position:6,description:"Common problems and ways to resolve them",keywords:["Error","Problem","Issues"]},sidebar:"tutorialSidebar",previous:{title:"Safety and Security",permalink:"/id/docs/protocol/security"},next:{title:"Developer documentation",permalink:"/id/docs/category/developer-documentation"}},s={},c=[{value:"Error while dialing dns telemetry",id:"error-while-dialing-dns-telemetry",level:3},{value:"Farmer stuck on plotting, no progress is made in several hours",id:"farmer-stuck-on-plotting-no-progress-is-made-in-several-hours",level:3},{value:"Illegal instruction (core dumped)",id:"illegal-instruction-core-dumped",level:3},{value:"No rewards after multiple days of farming",id:"no-rewards-after-multiple-days-of-farming",level:3},{value:"Recovering missing piece failed",id:"recovering-missing-piece-failed",level:3},{value:"Importing block consensus error",id:"importing-block-consensus-error",level:3},{value:"Unable to author block in slot. No best block header",id:"unable-to-author-block-in-slot-no-best-block-header",level:3},{value:"Fast node synchronization (more than 100+ blocks per second) goes only up to \xb120k blocks, then synchronization speed drops significantly.",id:"fast-node-synchronization-more-than-100-blocks-per-second-goes-only-up-to-20k-blocks-then-synchronization-speed-drops-significantly",level:3},{value:"subspace_farmer::single_disk_plot::piece_receiver: Couldn&#39;t get a piece from DSN.",id:"subspace_farmersingle_disk_plotpiece_receiver-couldnt-get-a-piece-from-dsn",level:3},{value:"Failed to build a farmer: File exists",id:"failed-to-build-a-farmer-file-exists",level:3},{value:"Block import error: Potential long-range attack: block not in finalized chain.",id:"block-import-error-potential-long-range-attack-block-not-in-finalized-chain",level:3},{value:"Still Facing Trouble? Take a look at our forums below",id:"still-facing-trouble-take-a-look-at-our-forums-below",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"While Subspace strives to release bug-free software, users may encounter certain errors. Some of these can be safely ignored, while others require attention."),(0,n.kt)("h1",{id:"common-problems-and-ways-to-resolve-them"},"Common problems and ways to resolve them"),(0,n.kt)("h3",{id:"error-while-dialing-dns-telemetry"},"Error while dialing dns telemetry"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Error while dialing /dns/telemetry.subspace.network/tcp/443/x-parity-wss/%2Fsubmit%2F\nCustom { kind: Other, error: Timeout }\n")),(0,n.kt)("p",null,"This error is related only to the telemetry server. It's something that can happen occasionally, but doesn't affect farming. You can safely ignore it."),(0,n.kt)("h3",{id:"farmer-stuck-on-plotting-no-progress-is-made-in-several-hours"},"Farmer stuck on plotting, no progress is made in several hours"),(0,n.kt)("p",null,"Try restarting your node or farmer. We've noticed that sometimes, when creating larger plots, the process might appear to be stalled, but it automatically continues after some time."),(0,n.kt)("h3",{id:"illegal-instruction-core-dumped"},"Illegal instruction (core dumped)"),(0,n.kt)("p",null,"This error is caused by old CPUs without necessary instruction support (e.g. ADX 4). Can be fixed by compiling software from the source on that machine."),(0,n.kt)("p",null,"While processors without ADX instructions are supported, their performance will be impacted significantly compared to processors that do support ADX instructions."),(0,n.kt)("p",null,"Most modern desktop processors starting with Broadwell on the Intel side and Ryzen (ZEN 1) on the AMD side do support necessary ADX instructions support and shouldn't be affected by the error."),(0,n.kt)("h3",{id:"no-rewards-after-multiple-days-of-farming"},"No rewards after multiple days of farming"),(0,n.kt)("p",null,"Please make sure to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use our latest stable release, as shown on our ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/subspace/pulsar/releases"},"Github releases")),(0,n.kt)("li",{parentName:"ul"},"Verify your farmer is present and on the highest block on our ",(0,n.kt)("a",{parentName:"li",href:"https://telemetry.subspace.network/"},"telemetry server")),(0,n.kt)("li",{parentName:"ul"},"Verify your balance using the ",(0,n.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-0.gemini-3f.subspace.network%2Fws#/explorer"},"Polkadot explorer"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Make sure to select the correct testnet in the dropdown and tabs, e.g. gemini-3f")),(0,n.kt)("h3",{id:"recovering-missing-piece-failed"},"Recovering missing piece failed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ERROR single_disk_plot{disk_farm_index=0}:\nsubspace_farmer_components::segment_reconstruction: Recovering missing piece failed. missing_piece_index=135\n")),(0,n.kt)("p",null,"This is not a crucial error and it can be ignored."),(0,n.kt)("h3",{id:"importing-block-consensus-error"},"Importing block consensus error"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'Error importing block "block_number", consensus error: Import failed: Database\n')),(0,n.kt)("p",null,"Your PC likely ran out of space. Consider freeing up some space by removing unnecessary files, and then try again. Alternatively, you may adjust the plot amount to match the available disk space"),(0,n.kt)("h3",{id:"unable-to-author-block-in-slot-no-best-block-header"},"Unable to author block in slot. No best block header"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Unable to author block in slot. No best block header: Chain lookup failed: Failed to get header for hash\n")),(0,n.kt)("p",null,"Your PC likely ran out of space. Consider freeing up some space by removing unnecessary files, and then try again. Alternatively, you may adjust the plot amount to match the available disk space"),(0,n.kt)("h3",{id:"fast-node-synchronization-more-than-100-blocks-per-second-goes-only-up-to-20k-blocks-then-synchronization-speed-drops-significantly"},"Fast node synchronization (more than 100+ blocks per second) goes only up to \xb120k blocks, then synchronization speed drops significantly."),(0,n.kt)("p",null,"As the database size increases and blocks get bigger (as farmers started to produce votes), it is expected that the sync speed will settle on a smaller number. We have made some performance improvements in Gemini 3e and will do more performance tuning when the protocol is functionally complete."),(0,n.kt)("h3",{id:"subspace_farmersingle_disk_plotpiece_receiver-couldnt-get-a-piece-from-dsn"},"subspace_farmer::single_disk_plot::piece_receiver: Couldn't get a piece from DSN."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"subspace_farmer::single_disk_plot::piece_receiver: Couldn't get a piece from DSN. Retrying... piece_index=57\n")),(0,n.kt)("p",null,"This isn\u2019t a bug but rather a warning, it is something to be expected on a Decentralized Storage Network. There is nothing you need to do as a user with this warning, it's likely it will come up occasionally but as long as there aren\u2019t other more catastrophic errors it can be ignored."),(0,n.kt)("h3",{id:"failed-to-build-a-farmer-file-exists"},"Failed to build a farmer: File exists"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"0: Failed to build a farmer\n1: Single disk plot creation error: I/O error: File exists (os error 17)\n2: I/O error: File exists (os error 17)\n3: File exists (os error 17)\n")),(0,n.kt)("p",null,"The system is detecting a pre-existing installation. If this is the case, you might consider ",(0,n.kt)("a",{parentName:"p",href:"/id/docs/protocol/pulsar#wipe-node--farmer"},"wiping")," the current setup and ",(0,n.kt)("a",{parentName:"p",href:"/id/docs/protocol/pulsar#configuration"},"re-initializing")," the CLI to ensure a clean installation."),(0,n.kt)("h3",{id:"block-import-error-potential-long-range-attack-block-not-in-finalized-chain"},"Block import error: Potential long-range attack: block not in finalized chain."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"WARN sc_service::client::client: Block import error: Potential long-range attack: block not in finalized chain.\n")),(0,n.kt)("p",null,"The node somehow ended up being on a fork, try wiping and starting from scratch."),(0,n.kt)("h3",{id:"still-facing-trouble-take-a-look-at-our-forums-below"},"Still Facing Trouble? Take a look at our forums below"),(0,n.kt)("iframe",{src:"https://forum.subspace.network/search?expanded=false&q=tags%3Afaq%20order%3Alatest",width:"100%",height:"600px",frameborder:"0",scrolling:"auto"}))}d.isMDXComponent=!0},1207:(e,t,r)=>{r.d(t,{Z:()=>o});const o={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}}}]);
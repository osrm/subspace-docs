"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4168],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),i=r(6010),o=r(2466),l=r(6550),s=r(1980),u=r(7392),c=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=m(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,u]=h({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),f=(()=>{const e=s??p;return d({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var f=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==l&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":l===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=b(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return a.createElement(v,(0,n.Z)({key:String(t)},e))}},4336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));r(4866),r(5162),r(9960),r(1207);const i={title:"Timekeeping",sidebar_position:5,description:"Farming on the Subspace Network",keywords:["Timekeeper","Timekeeping","Farming","Hardware"]},o="Timekeeping",l={unversionedId:"farming-&-staking/timekeeping",id:"version-latest/farming-&-staking/timekeeping",title:"Timekeeping",description:"Farming on the Subspace Network",source:"@site/versioned_docs/version-latest/farming-&-staking/timekeeping.md",sourceDirName:"farming-&-staking",slug:"/farming-&-staking/timekeeping",permalink:"/pt/docs/farming-&-staking/timekeeping",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/farming-&-staking/timekeeping.md",tags:[],version:"latest",lastUpdatedBy:"Justin",lastUpdatedAt:1701447134,formattedLastUpdatedAt:"1 de dez. de 2023",sidebarPosition:5,frontMatter:{title:"Timekeeping",sidebar_position:5,description:"Farming on the Subspace Network",keywords:["Timekeeper","Timekeeping","Farming","Hardware"]},sidebar:"tutorialSidebar",previous:{title:"Staking guide",permalink:"/pt/docs/farming-&-staking/staking/"},next:{title:"Develop",permalink:"/pt/docs/category/develop"}},s={},u=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Command Line Parameters",id:"command-line-parameters",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"timekeeping"},"Timekeeping"),(0,a.kt)("p",null,"Timekeeping is an essential component of securing the protocol. Without at least one timekeeper online there would be no block production. While it is possible to run a farmer or operator node with timekeeping activated, the ideal is that a high-spec, dedicated machine is used to mitigate processing loads altering the quality of the work they do."),(0,a.kt)("p",null,"Having a good number of timekeepers distributed geographically is our goal to foster a healthy network. Our hope is that our dedicated community run a number in addition to those being run by the team to ensure resilience and decentralization of the protocol. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"There is no explicit economic incentive to running a timekeeper, however, independent timekeeping contributes to stable block production, which benefits every participant of the network.")),(0,a.kt)("p",null,"You can read more about timekeeping in the ",(0,a.kt)("a",{parentName:"p",href:"https://subnomicon.subspace.network/docs/consensus/pot/#timekeeping"},"Proof-of-Time section of The Subnomicon"),"."),(0,a.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,a.kt)("p",null,"Being a timekeeper has high hardware requirements to ensure that a user with a stronger machine is not able to consistently beat every other timekeeper on the network. All timekeepers are in a race with each other to generate their proofs and we need a grid of equally provisioned F1 cars rather than a mix of classes with varying power."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note that these specs are our starting point and are subject to change as we discover the exact characteristics required to be a good timekeeper.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Hardware"),(0,a.kt)("th",{parentName:"tr",align:null},"Specs"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CPU"),(0,a.kt)("td",{parentName:"tr",align:null},"4 core+ with as high a frequency as possible. An overclocked Intel 14900k is the ideal. Note that only 1 core will be occupied with timekeeping.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RAM"),(0,a.kt)("td",{parentName:"tr",align:null},"8GB+")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Storage"),(0,a.kt)("td",{parentName:"tr",align:null},"100GB SSD")))),(0,a.kt)("h2",{id:"command-line-parameters"},"Command Line Parameters"),(0,a.kt)("p",null,"There are two new CLI options on the node visible with\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--timekeeper"),"\xa0- to become a timekeeper."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--timekeeper-cpu-cores"),"\xa0- to specify which cores timekeeper should use rather than random cores.")))}m.isMDXComponent=!0},1207:(e,t,r)=>{r.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}}}]);
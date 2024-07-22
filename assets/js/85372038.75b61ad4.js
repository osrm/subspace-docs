"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4998],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(7462),n=a(7294),o=a(6010),s=a(2466),i=a(6550),l=a(1980),u=a(7392),d=a(12);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=k({queryString:a,groupId:r}),[c,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),h=(()=>{const e=l??c;return g({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var h=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),r=u[a].value;r!==i&&(c(t),l(r))},g=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:g,onClick:p},s,{className:(0,o.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=m(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},n.createElement(f,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},5663:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));a(4866),a(5162),a(614),a(9960),a(1207);const o={title:"Deregister an Operator",sidebar_position:2,description:"Operators Uninstall guide",keywords:["Operator","Guide"]},s=void 0,i={unversionedId:"farming-&-staking/staking/operators/deregister-operator",id:"version-latest/farming-&-staking/staking/operators/deregister-operator",title:"Deregister an Operator",description:"Operators Uninstall guide",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-latest/farming-&-staking/staking/operators/deregister-operator.mdx",sourceDirName:"farming-&-staking/staking/operators",slug:"/farming-&-staking/staking/operators/deregister-operator",permalink:"/docs/farming-&-staking/staking/operators/deregister-operator",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/edit/main/docs/farming-&-staking/staking/operators/deregister-operator.mdx",tags:[],version:"latest",sidebarPosition:2,frontMatter:{title:"Deregister an Operator",sidebar_position:2,description:"Operators Uninstall guide",keywords:["Operator","Guide"]},sidebar:"tutorialSidebar",previous:{title:"Register an Operator",permalink:"/docs/farming-&-staking/staking/operators/register-operator"},next:{title:"Operator Tips & Tricks",permalink:"/docs/farming-&-staking/staking/operators/tips-operator"}},l={},u=[{value:"Embedded Docs",id:"embedded-docs",level:3},{value:"Build from source",id:"build-from-source",level:3},{value:"Operator deregistration",id:"operator-deregistration",level:3},{value:"Operator deregistration using <strong>Autonomys Staking interface</strong>",id:"operator-deregistration-using-autonomys-staking-interface",level:4},{value:"Unlocking Funds",id:"unlocking-funds",level:3}],d={toc:u},c="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"embedded-docs"},"Embedded Docs"),(0,n.kt)("p",null,"The following command can be used to explore all parameters and subcommands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"target/production/subspace-node --help\n")),(0,n.kt)("h3",{id:"build-from-source"},"Build from source"),(0,n.kt)("p",null,"If you prefer to build from the source rather using existing builds, the domain operator node is embedded within the ",(0,n.kt)("inlineCode",{parentName:"p"},"subspace-node")," binary, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace/blob/main/crates/subspace-node/README.md"},"Subspace node")," for how to build from source."),(0,n.kt)("h3",{id:"operator-deregistration"},"Operator deregistration"),(0,n.kt)("p",null,"To deregister an operator on the domain and have your tokens released:"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Only account who registered an operator can deregister it. Make sure to use the same wallet / account to sign the transaction for deregistration.")),(0,n.kt)("h4",{id:"operator-deregistration-using-autonomys-staking-interface"},"Operator deregistration using ",(0,n.kt)("strong",{parentName:"h4"},"Autonomys Staking interface")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Proceed to the staking tab on ",(0,n.kt)("a",{parentName:"li",href:"https://explorer.subspace.network/gemini-3h/staking"},"Astral")," and connect your wallet.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NStaking-1",src:a(3693).Z,width:"1697",height:"1070"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Select the wallet you would like to connect. Make sure to select the wallet you registered your operator with. Both ",(0,n.kt)("strong",{parentName:"li"},"Subwallet")," and ",(0,n.kt)("strong",{parentName:"li"},"PolkadotJS")," wallets are supported.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NStaking-2",src:a(142).Z,width:"372",height:"220"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Enter your password to give an access to your wallet.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NStaking-3",src:a(646).Z,width:"390",height:"633"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Manage My Operator"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NStaking-10",src:a(153).Z,width:"1715",height:"516"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Actions")," button next to an operator you would like to deregister and select ",(0,n.kt)("inlineCode",{parentName:"li"},"Deregister"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NStaking-11",src:a(525).Z,width:"324",height:"277"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Approve the request in the pop-up window.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NStaking-9",src:a(6252).Z,width:"395",height:"620"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Congratulations, your operator was deregistered.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"It can take up to 10 minutes for the operator to be deregistered, but the funds will stay locked for 14,400 blocks, or 24 hours.")),(0,n.kt)("h3",{id:"unlocking-funds"},"Unlocking Funds"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Once 14,400 blocks have passed after deregistering your operator your funds can now be unlocked.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Follow steps 1 to 4 in ",(0,n.kt)("a",{parentName:"li",href:"#operator-deregistration"},"steps"),' to connect your wallet and manage your operator.  It should now show the status "Deregistered, funds ready to unlock".')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NStaking-12",src:a(4693).Z,width:"1684",height:"135"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Actions")," button next to an operator you would like to unlock funds and select ",(0,n.kt)("inlineCode",{parentName:"li"},"Unlock Operator"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NStaking-13",src:a(5755).Z,width:"255",height:"197"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Approve the request in the pop-up window.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NStaking-9",src:a(6252).Z,width:"395",height:"620"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Congratulations, your operator funds should be unlocked.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"There won't be a visual indication that your funds have been unlocked on this screen.  The Total Stake field will still show the original staked amounts.\nYou should be able to verify the funds are unlocked by clicking the icon in the upper right hand side of the screen next to your wallet address and seeing the correct balance.")))}p.isMDXComponent=!0},1207:(e,t,a)=>{a.d(t,{Z:()=>r});const r={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},3693:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/NStaking-1-3ada281f73b3d558999e05d08e652e20.png"},153:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/NStaking-10-2382fb7080753927285015ae6fc723ec.png"},525:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/NStaking-11-071960a61b6e487290f98562b0002aa3.png"},4693:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/NStaking-12-3fe19ac3b5b1838d895f7d89ba0a0780.png"},5755:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/NStaking-13-53bcd3c5fe53c6b54105072e9077a644.png"},142:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/NStaking-2-8f4b3ae2d7a7cd160765c5356f7348fc.png"},646:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/NStaking-3-ca3a0b86ffb2f19484b74d059021a3ce.png"},6252:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/NStaking-9-21a015fe1afa0b648789ebac66f9553b.png"}}]);
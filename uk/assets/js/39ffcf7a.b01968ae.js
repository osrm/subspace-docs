"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[2971],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(7462),n=a(7294),o=a(6010),i=a(2466),s=a(6550),l=a(1980),u=a(7392),d=a(12);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function k(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=g({queryString:a,groupId:r}),[c,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),h=(()=>{const e=l??c;return k({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!k({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var h=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),r=u[a].value;r!==s&&(c(t),l(r))},k=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:k,onClick:p},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=m(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},n.createElement(f,(0,r.Z)({},e,t)),n.createElement(N,(0,r.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},6932:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));a(4866),a(5162),a(614),a(9960),a(1207);const o={title:"Deregister an Operator",sidebar_position:2,description:"Operators Uninstall guide",keywords:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440","\u0406\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0456\u044f"]},i=void 0,s={unversionedId:"farming-&-staking/staking/operators/deregister-operator",id:"farming-&-staking/staking/operators/deregister-operator",title:"Deregister an Operator",description:"Operators Uninstall guide",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/farming-&-staking/staking/operators/deregister-operator.mdx",sourceDirName:"farming-&-staking/staking/operators",slug:"/farming-&-staking/staking/operators/deregister-operator",permalink:"/uk/docs/pre-release/farming-&-staking/staking/operators/deregister-operator",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/edit/main/i18n/uk/docusaurus-plugin-content-docs/current/farming-&-staking/staking/operators/deregister-operator.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deregister an Operator",sidebar_position:2,description:"Operators Uninstall guide",keywords:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440","\u0406\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0456\u044f"]},sidebar:"tutorialSidebar",previous:{title:"Register an Operator",permalink:"/uk/docs/pre-release/farming-&-staking/staking/operators/register-operator"},next:{title:"Operator Tips & Tricks",permalink:"/uk/docs/pre-release/farming-&-staking/staking/operators/tips-operator"}},l={},u=[{value:"Embedded Docs",id:"embedded-docs",level:3},{value:"Build from source",id:"build-from-source",level:3},{value:"Operator deregistration",id:"operator-deregistration",level:3},{value:"Operator deregistration using <strong>Subspace Staking interface</strong> (recommended)",id:"operator-deregistration-using-subspace-staking-interface-recommended",level:4},{value:"Operator deregistration using <strong>PolkadotJS</strong>",id:"operator-deregistration-using-polkadotjs",level:4},{value:"Operator Stake Withdrawal",id:"operator-stake-withdrawal",level:3}],d={toc:u},c="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"embedded-docs"},"Embedded Docs"),(0,n.kt)("p",null,"The following command can be used to explore all parameters and subcommands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"target/production/subspace-node --help\n")),(0,n.kt)("h3",{id:"build-from-source"},"Build from source"),(0,n.kt)("p",null,"If you prefer to build from the source rather using existing builds, the domain operator node is embedded within the ",(0,n.kt)("inlineCode",{parentName:"p"},"subspace-node")," binary, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace/blob/main/crates/subspace-node/README.md"},"Subspace node")," for how to build from source."),(0,n.kt)("h3",{id:"operator-deregistration"},"Operator deregistration"),(0,n.kt)("p",null,"To deregister an operator on the domain and have your tokens released:"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Only account who registered an operator can deregister it. Make sure to use the same wallet / account to sign the transaction for deregistration.")),(0,n.kt)("h4",{id:"operator-deregistration-using-subspace-staking-interface-recommended"},"Operator deregistration using ",(0,n.kt)("strong",{parentName:"h4"},"Subspace Staking interface")," (recommended)"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Proceed to the ",(0,n.kt)("a",{parentName:"li",href:"https://staking.subspace.tools"},"Subspace Staking portal")," and connect your wallet.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NStaking-1",src:a(3693).Z,width:"1358",height:"898"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Select the wallet you would like to connect. Make sure to select the wallet you registered your operator with. Both ",(0,n.kt)("strong",{parentName:"li"},"Subwallet")," and ",(0,n.kt)("strong",{parentName:"li"},"PolkadotJS")," wallets are supported.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NStaking-2",src:a(142).Z,width:"450",height:"350"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Enter your password to give an access to your wallet.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NStaking-3",src:a(646).Z,width:"390",height:"633"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Manage your stake"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NStaking-9",src:a(6252).Z,width:"1382",height:"904"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Action")," button next to an operator you would like to deregister and select ",(0,n.kt)("inlineCode",{parentName:"li"},"deregister"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NStaking-10",src:a(153).Z,width:"363",height:"176"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Approve the request in the pop-up window.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NStaking-8",src:a(1314).Z,width:"390",height:"626"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Congratulations, your operator was deregistered.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"It can take up to 10 minutes for the operator to be deregistered and disappeared from the page.\nYou can check if the operator was deregistered successfully on the ",(0,n.kt)("a",{parentName:"p",href:"https://subspace.subscan.io/extrinsic"},"Subspace Subscan portal"),".")),(0,n.kt)("h4",{id:"operator-deregistration-using-polkadotjs"},"Operator deregistration using ",(0,n.kt)("strong",{parentName:"h4"},"PolkadotJS")),(0,n.kt)("p",null,"Alternatively, you can use the ",(0,n.kt)("strong",{parentName:"p"},"PolkadotJS")," portal to deregister operator."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Proceed to ",(0,n.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"PolkadotJS")),(0,n.kt)("li",{parentName:"ol"},"Make sure to select the correct network at the top-left corner."),(0,n.kt)("li",{parentName:"ol"},"Select the account you want to use in ",(0,n.kt)("inlineCode",{parentName:"li"},"using the selected account"),"."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("inlineCode",{parentName:"li"},"domains")," under ",(0,n.kt)("inlineCode",{parentName:"li"},"submit the following extrinsic")," and choose ",(0,n.kt)("inlineCode",{parentName:"li"},"deregisterOperator(operatorId)")," in the dropdown.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Staking-14",src:a(8964).Z,width:"1722",height:"391"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Your tokens and tokens of operator ",(0,n.kt)("inlineCode",{parentName:"li"},"Nominators")," will be released after the ",(0,n.kt)("inlineCode",{parentName:"li"},"lockingPeriod"),"."),(0,n.kt)("li",{parentName:"ol"},"To check the locking period you can go to ",(0,n.kt)("inlineCode",{parentName:"li"},"Developer")," -> ",(0,n.kt)("inlineCode",{parentName:"li"},"Chain state")," -> ",(0,n.kt)("inlineCode",{parentName:"li"},"Constants"),"."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("inlineCode",{parentName:"li"},"domains")," under ",(0,n.kt)("inlineCode",{parentName:"li"},"selected contant query")," and choose ",(0,n.kt)("inlineCode",{parentName:"li"},"stakeWithdrawalLockingPeriod"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"+")," to run the query.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Staking-15",src:a(5104).Z,width:"1740",height:"327"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Number 256 above corresponds to the number of the domain blocks, and not the consensus chain blocks.")),(0,n.kt)("h3",{id:"operator-stake-withdrawal"},"Operator Stake Withdrawal"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Operator")," stake withdrawal works similarly to ",(0,n.kt)("strong",{parentName:"p"},"Nominator")," stake withdrawal. Refer to ",(0,n.kt)("a",{parentName:"p",href:"/uk/docs/pre-release/farming-&-staking/staking/#stake-withdrawal-using-polkadotjs"},"this section")," to withdraw your stake."))}p.isMDXComponent=!0},1207:(e,t,a)=>{a.d(t,{Z:()=>r});const r={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},3693:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/NStaking-1-52b2c721c633035f4253f8953eff68bf.png"},153:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/NStaking-10-f193689a3b580665e6dc054d32ec336b.png"},142:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/NStaking-2-a1a2a842aababae871f04661ed4eab24.png"},646:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/NStaking-3-ca3a0b86ffb2f19484b74d059021a3ce.png"},1314:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/NStaking-7-b438b3e26eaefccdf0bc47f2a4793cf7.png"},6252:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/NStaking-9-b49b1cab8a09ef283763798a61a25383.png"},8964:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Staking-14-448399b7e390a9fdb4399899369a83ef.png"},5104:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Staking-15-b609655e36be30a0c4b51c9aeab2bb78.png"}}]);
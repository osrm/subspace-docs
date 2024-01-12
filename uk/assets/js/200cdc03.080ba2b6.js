"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[1318],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(v,l(l({ref:t},i),{},{components:r})):n.createElement(v,l({ref:t},i))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6676:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Local development",sidebar_position:9,description:"Guide on local development Subspace Node and Farmer",keywords:["local development","subspace network"]},l=void 0,p={unversionedId:"develop/nova/local_development",id:"version-latest/develop/nova/local_development",title:"Local development",description:"Guide on local development Subspace Node and Farmer",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-latest/develop/nova/local_development.md",sourceDirName:"develop/nova",slug:"/develop/nova/local_development",permalink:"/uk/docs/develop/nova/local_development",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/edit/main/i18n/uk/docusaurus-plugin-content-docs/current/develop/nova/local_development.md",tags:[],version:"latest",sidebarPosition:9,frontMatter:{title:"Local development",sidebar_position:9,description:"Guide on local development Subspace Node and Farmer",keywords:["local development","subspace network"]},sidebar:"tutorialSidebar",previous:{title:"Hardhat",permalink:"/uk/docs/develop/nova/hardhat_guide"},next:{title:"Subspace block explorer",permalink:"/uk/docs/develop/nova/block_explorer"}},s={},c=[{value:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0430 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0457 \u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0438",id:"\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f-\u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0430-\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0457-\u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0438",level:3}],i={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f-\u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0430-\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0457-\u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0438"},"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0430 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0457 \u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0438"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0412\u0438 \u0437\u0430\u0432\u0436\u0434\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0443 \u043c\u0435\u0440\u0435\u0436\u0443, \u0449\u043e\u0431 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0442\u0438 \u0442\u0430 \u0440\u043e\u0437\u0433\u043e\u0440\u043d\u0443\u0442\u0438 \u0441\u0432\u0456\u0439 \u0441\u043c\u0430\u0440\u0442-\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442!")),(0,o.kt)("p",null,"\u0429\u043e\u0431 \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043f\u043e\u0432\u043d\u0443 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0443 \u043c\u0435\u0440\u0435\u0436\u0443, \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0438\u0439 \u0432\u0443\u0437\u043e\u043b, \u0434\u043e\u043c\u0435\u043d Core-EVM \u0456 \u0444\u0430\u0440\u043c\u0435\u0440."),(0,o.kt)("p",null,"\u0421\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u0439\u0442\u0435 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/subspace/subspace/releases"},"Subspace releases"))," \u0456 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0442\u0435 \u043d\u0430\u0439\u043d\u043e\u0432\u0456\u0448\u0456 \u0441\u0442\u0430\u0431\u0456\u043b\u044c\u043d\u0456 \u0432\u0435\u0440\u0441\u0456\u0457 \u0432\u0443\u0437\u043b\u0430 \u0442\u0430 \u0444\u0430\u0440\u043c\u0435\u0440\u0430."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For each release, there are two versions:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"skylake: \u0434\u043b\u044f \u043d\u043e\u0432\u0456\u0448\u0438\u0445 \u043f\u0440\u043e\u0446\u0435\u0441\u043e\u0440\u0456\u0432 \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437 2015 \u0440\u043e\u043a\u0443 \u0456 \u0434\u0430\u043b\u0456"),(0,o.kt)("li",{parentName:"ol"},"x86-64-v2: \u0434\u043b\u044f \u0441\u0442\u0430\u0440\u0438\u0445 \u043f\u0440\u043e\u0446\u0435\u0441\u043e\u0440\u0456\u0432 \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437 2009 \u0440\u043e\u043a\u0443 \u0442\u0430 \u0434\u0435\u044f\u043a\u0438\u0445 \u0441\u0442\u0430\u0440\u0438\u0445 \u0432\u0456\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u0438\u0445 \u043c\u0430\u0448\u0438\u043d")),(0,o.kt)("p",{parentName:"admonition"},"\u0421\u0442\u0430\u0440\u0456\u0448\u0456 \u043f\u0440\u043e\u0446\u0435\u0441\u043e\u0440\u0438/\u0412\u041c \u0431\u0456\u043b\u044c\u0448\u0435 \u043d\u0435 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u044e\u0442\u044c\u0441\u044f \u043e\u0444\u0456\u0446\u0456\u0439\u043d\u0438\u043c\u0438 \u0432\u0438\u043f\u0443\u0441\u043a\u0430\u043c\u0438, \u0430\u043b\u0435 \u0457\u0445 \u0432\u0441\u0435 \u043e\u0434\u043d\u043e \u043c\u043e\u0436\u043d\u0430 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace/blob/main/docs/development.md"},"\u0441\u043a\u043e\u043c\u043f\u0456\u043b\u044e\u0432\u0430\u0442\u0438 \u0432\u0440\u0443\u0447\u043d\u0443"),", \u044f\u043a\u0449\u043e \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e.")),(0,o.kt)("p",null,"\u041f\u0456\u0441\u043b\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043e\u0431\u043e\u0445 \u0444\u0430\u0439\u043b\u0456\u0432, \u044f\u043a\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u044e\u0442\u044c \u0432\u0430\u0448\u0456\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0456, \u0437\u0430\u043f\u0443\u0441\u0442\u0456\u0442\u044c \u0432\u0443\u0437\u043e\u043b, \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0447\u0438 \u0431\u0430\u0436\u0430\u043d\u0438\u0439 \u0442\u0435\u0440\u043c\u0456\u043d\u0430\u043b. \u042f\u043a\u0449\u043e \u0432\u0438 \u0445\u043e\u0447\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438 \u0434\u043e\u043c\u0435\u043d EVM \u043d\u0430 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0456\u0439 \u043c\u0430\u0448\u0438\u043d\u0456, \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0432\u043a\u0430\u0437\u0430\u0442\u0438:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your local RPC server port"),(0,o.kt)("li",{parentName:"ul"},"Your local web-socket RPC port\nYou can do this with the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./your_subspace_node_path --dev --alice --rpc-port 9444 -- --domain-id 3 --dev --rpc-port 8545\n")),(0,o.kt)("p",null,"This will create a local RPC on port ",(0,o.kt)("strong",{parentName:"p"},"8545"),"."),(0,o.kt)("p",null,"Secondly, you need to start a farmer by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," ./your_subspace_farmer_path farm --reward-address [YOUR REWARD ADDRESS] path=tmp-farm,size=100M\n")),(0,o.kt)("p",null,"You can specify the desired plot size, but 100M should be sufficient."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"And that\u2019s it!")," By starting your ",(0,o.kt)("strong",{parentName:"p"},"local node")," and a ",(0,o.kt)("strong",{parentName:"p"},"farmer"),", you have your ",(0,o.kt)("strong",{parentName:"p"},"local RPC")," ready for testing and deploying your smart contracts! You can easily connect your ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," account to the local development network, as well as use ",(0,o.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix")," or ",(0,o.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/"},"Foundry")," in order to test and deploy smart contracts on a local network!"))}d.isMDXComponent=!0}}]);
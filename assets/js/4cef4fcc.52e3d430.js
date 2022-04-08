"use strict";(self.webpackChunksubspace_docs=self.webpackChunksubspace_docs||[]).push([[418],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1558:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:2,title:"\ud83d\udd16 Command Index"},s=void 0,d={unversionedId:"Getting Started/commands",id:"Getting Started/commands",title:"\ud83d\udd16 Command Index",description:"This may be outdated as commands are adjusted and modified constantly. For more accurate command list always refer to the --help flag of the Farmer or Node",source:"@site/docs/Getting Started/commands.md",sourceDirName:"Getting Started",slug:"/Getting Started/commands",permalink:"/subspace-docs/docs/Getting Started/commands",editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/Getting Started/commands.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\ud83d\udd16 Command Index"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd25 Common Issues",permalink:"/subspace-docs/docs/Getting Started/issues"},next:{title:"\ud83d\udc68\u200d\ud83c\udf3e Getting Started Farming",permalink:"/subspace-docs/docs/Getting Started/farming"}},p={},m=[{value:"Node",id:"node",level:3},{value:"Farmer",id:"farmer",level:3}],u={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This may be outdated as commands are adjusted and modified constantly. For more accurate command list always refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," flag of the Farmer or Node")),(0,i.kt)("h3",{id:"node"},"Node"),(0,i.kt)("p",null,"Our node is a Substrate node, and has the same flags as Substrate. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/getting-started/overview/"},"Official Substrate")," documentation for further reference. "),(0,i.kt)("h3",{id:"farmer"},"Farmer"),(0,i.kt)("p",null,"Structure -> ",(0,i.kt)("inlineCode",{parentName:"p"},"./FARMER_FILE_NAME <COMMAND> <SUBCOMMAND>")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"erase-plot"),": Erase existing plot (doesn't touch identity)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--custom-path <CUSTOM_PATH>"),": Use custom path for data storage instead of platform-specific default."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"farm"),": Start a farmer using previously created plot",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--bootstrap-node <BOOTSTRAP_NODE>"),": Multiaddrs of bootstrap node to connect to on startup, multiple are supported"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--custom-path <CUSTOM_PATH>"),": Custom path for data storage instead of platform-specific default"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--listen-on <LISTEN_ON>"),": Multiaddrs to listen on for subspace network, for instance '/ip4/0.0.0.0/tcp/0', multiple are supported, subspace networking is disabled when non is specified."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--node-rpc-url <NODE_RPC_URL>"),": WebSocket RPC URL of the Subspace node to connect to (default: ws://127.0.0.1:9944)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--reward-address <REWARD_ADDRESS>"),": Address for farming rewards"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-w"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"--ws-server-listen-addr <WS_SERVER_LISTEN_ADDR>"),": Host & Port where built-in WebSocket RPC server should listen for incoming connections (default: 127.0.0.1:9955)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"help"),": Print this message or the help of the given subcommand(s)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"identity"),": Identity management - ",(0,i.kt)("em",{parentName:"li"},"This refers to the farmer identity, ",(0,i.kt)("strong",{parentName:"em"},"not")," the reward address."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"import-from-mnemonic <PHRASE>"),": Import identity from BIP39 mnemonic phrase"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view"),": View identity information",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-a"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"--address"),": Print SS58 address (default if no other option is specified)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-m"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"--mnemonic"),": Print Mnemonic (NOTE: never share this with ANYONE!)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-p"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"--public-key"),": Print public key (hex)"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wipe"),": Wipes plot and identity",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--custom-path <CUSTOM_PATH>"),": Use custom path for data storage instead of platform-specific default.")))))}c.isMDXComponent=!0}}]);
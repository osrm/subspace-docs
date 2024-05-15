"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[939],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1557:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"Ports & Network Information",sidebar_position:2,description:"Comprehensive guide on port forwarding and network information for Subspace Network products.",slug:"networking",keywords:["Farmer","Farming","CLI","Binaries","Port Forwarding","Subspace Desktop","Ports","Networking","Network"]},i=void 0,l={unversionedId:"farming-&-staking/farming/additional-guides/network-info",id:"farming-&-staking/farming/additional-guides/network-info",title:"Ports & Network Information",description:"Comprehensive guide on port forwarding and network information for Subspace Network products.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/network-info.md",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming-&-staking/farming/additional-guides/networking",permalink:"/zh/docs/pre-release/farming-&-staking/farming/additional-guides/networking",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/farming-&-staking/farming/additional-guides/network-info.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Ports & Network Information",sidebar_position:2,description:"Comprehensive guide on port forwarding and network information for Subspace Network products.",slug:"networking",keywords:["Farmer","Farming","CLI","Binaries","Port Forwarding","Subspace Desktop","Ports","Networking","Network"]},sidebar:"tutorialSidebar",previous:{title:"Verified Farmer Discord Role",permalink:"/zh/docs/pre-release/farming-&-staking/farming/additional-guides/verify-farmer"},next:{title:"Grafana Dashboard",permalink:"/zh/docs/pre-release/farming-&-staking/farming/additional-guides/grafana-dashboard"}},s={},u=[{value:"Understanding Port Forwarding",id:"understanding-port-forwarding",level:2},{value:"Required Ports for Subspace Network",id:"required-ports-for-subspace-network",level:2},{value:"Special Note on Port 9944",id:"special-note-on-port-9944",level:3},{value:"How to Port Forward",id:"how-to-port-forward",level:2},{value:"Step 1. <em>Finding Default Gateway Address</em>",id:"step-1-finding-default-gateway-address",level:3},{value:"Step 2. <em>Connecting to your router</em>",id:"step-2-connecting-to-your-router",level:3},{value:"Step 3. <em>Forwarding your ports</em>",id:"step-3-forwarding-your-ports",level:3},{value:"Additional Resources and Verification",id:"additional-resources-and-verification",level:2},{value:"Network Configuration Scenarios",id:"network-configuration-scenarios",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you are using Linux and enabled ",(0,a.kt)("inlineCode",{parentName:"p"},"ufw")," (firewall) ensure that your firewall allows traffic on the necessary ports: ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo ufw allow 30333,30433 comment 'Subspace Node'")," for the node and ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo ufw allow 30533 comment 'Subspace Farmer'")," for the farmer. Adjust the port numbers if you have changed them from the defaults in your startup parameters. Also, if you are connecting remote farmers to a node and your firewall rules do not permit devices in your LAN to communicate freely, you will need to add a rule to your node server's firewall (assuming your LAN IP range is 192.168.1.0/24 in this example):  ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo ufw allow from 192.168.1.0/24 to any port 9944 proto tcp comment 'Remote Farmers RPC'"),".")),(0,a.kt)("p",null,"Configuring the right network settings is crucial for the effective operation of blockchain nodes. This guide provides detailed information about the necessary ports, network configurations, and steps for port forwarding for Subspace Network products, ensuring smooth communication and optimal performance."),(0,a.kt)("h2",{id:"understanding-port-forwarding"},"Understanding Port Forwarding"),(0,a.kt)("p",null,"Forwarding ports on your router will open up a specific lane on your router to allow external traffic to flow in or out. This process is usually automatic for common applications, but for specific needs like ours, it must be done manually. For a foundational understanding of port forwarding, you can read this guide: ",(0,a.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/port-forwarding-on-router-and-why-do-we-need-it/"},"Port Forwarding Overview"),"."),(0,a.kt)("h2",{id:"required-ports-for-subspace-network"},"Required Ports for Subspace Network"),(0,a.kt)("p",null,"For optimal performance of our blockchain node, specific ports need to be configured to handle incoming connections. These ports facilitate various critical functions within our blockchain network"),(0,a.kt)("p",null,"Below is a table summarizing the necessary port configurations for uninterrupted network performance:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Port"),(0,a.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,a.kt)("th",{parentName:"tr",align:null},"Exposure"),(0,a.kt)("th",{parentName:"tr",align:null},"Short Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Used By"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"30333"),(0,a.kt)("td",{parentName:"tr",align:null},"TCP"),(0,a.kt)("td",{parentName:"tr",align:null},"Always public"),(0,a.kt)("td",{parentName:"tr",align:null},"Substrate networking P2P"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"../../../category/space-acres/"},"Space Acres")),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"../../../category/advanced-cli"},"Advanced CLI Node (Consensus)")))),(0,a.kt)("td",{parentName:"tr",align:null},"Connecting to the rest of the network for exchanging blocks, transactions, PoT gossip, etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"30433"),(0,a.kt)("td",{parentName:"tr",align:null},"TCP"),(0,a.kt)("td",{parentName:"tr",align:null},"Always public"),(0,a.kt)("td",{parentName:"tr",align:null},"Subspace networking P2P"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"../../../category/space-acres/"},"Space Acres")),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"../../../category/advanced-cli"},"Advanced CLI Node (Consensus)")))),(0,a.kt)("td",{parentName:"tr",align:null},"Connecting to the rest of the network and retrieving archival history.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"30533"),(0,a.kt)("td",{parentName:"tr",align:null},"TCP"),(0,a.kt)("td",{parentName:"tr",align:null},"Always public"),(0,a.kt)("td",{parentName:"tr",align:null},"Subspace networking P2P"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"../../../category/advanced-cli"},"Advanced CLI Node (Consensus)")))),(0,a.kt)("td",{parentName:"tr",align:null},"Connecting to the rest of the network and retrieving archival history, not required for Space Acres because the node and the farmer share the Subspace networking stack there.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"40333"),(0,a.kt)("td",{parentName:"tr",align:null},"TCP"),(0,a.kt)("td",{parentName:"tr",align:null},"Always public"),(0,a.kt)("td",{parentName:"tr",align:null},"Subspace networking P2P"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"../../../category/operators-and-nominators"},"Advanced CLI Node (Domain)")))),(0,a.kt)("td",{parentName:"tr",align:null},"Connecting to the rest of the domain network for transaction gossipping.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"9944"),(0,a.kt)("td",{parentName:"tr",align:null},"TCP (HTTP/WebSocket)"),(0,a.kt)("td",{parentName:"tr",align:null},"Public: ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"RPC server"))," Private: ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"Internal node-to-farmer connections"))),(0,a.kt)("td",{parentName:"tr",align:null},"Consensus RPC port"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"../../../category/advanced-cli"},"Advanced CLI Node (Consensus)")))),(0,a.kt)("td",{parentName:"tr",align:null},"RPC server: Exposes various details about the blockchain (real-time and historical events, storage, transactions, etc) as well as submitting transactions to the network (balance transfers, staking, etc). ",(0,a.kt)("br",null),(0,a.kt)("br",null)," Farmer connections: The farmer connects in unsafe mode and receives notifications about slot challenges for block/vote production, archival history extension events, querying of various chain details. Nodes that process farmer connections should never be exposed publicly as public exposure of unsafe APIs can be used to not only prevent farmer from working, but even block node sync completely.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"9945"),(0,a.kt)("td",{parentName:"tr",align:null},"TCP (HTTP/WebSocket)"),(0,a.kt)("td",{parentName:"tr",align:null},"Public: ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"RPC server"))),(0,a.kt)("td",{parentName:"tr",align:null},"Domain RPC port"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"../../../category/operators-and-nominators"},"Advanced CLI Node (Domain)")))),(0,a.kt)("td",{parentName:"tr",align:null},"RPC server: Expose various details about blockchain (real-time and historical events, storage, transactions, etc.) as well as submitting transactions to the network (balance transfers, interacting with smart contracts, etc).")))),(0,a.kt)("h3",{id:"special-note-on-port-9944"},"Special Note on Port 9944"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Port 9944 is used for Remote Procedure Calls (RPC) between the node and the farmer. It does not require forwarding if the node and farmer are on the same local network, as they communicate internally.")),(0,a.kt)("h2",{id:"how-to-port-forward"},"How to Port Forward"),(0,a.kt)("p",null,"It is important to note that forwarding ports is going to be different for most routers, but we have included some general instructions, as well as some links for some major brands."),(0,a.kt)("h3",{id:"step-1-finding-default-gateway-address"},"Step 1. ",(0,a.kt)("em",{parentName:"h3"},"Finding Default Gateway Address")),(0,a.kt)("p",null,"First, find your local router IP Address & Computer internal IP address. Instructions for finding the router IP address are provided for Linux, Windows, and OSX."),(0,a.kt)("h3",{id:"step-2-connecting-to-your-router"},"Step 2. ",(0,a.kt)("em",{parentName:"h3"},"Connecting to your router")),(0,a.kt)("p",null,"Input the router IP Address into a web browser to access router settings. Locate the default admin login information, which might be on the router itself, in the user manual, or provided by your ISP."),(0,a.kt)("h3",{id:"step-3-forwarding-your-ports"},"Step 3. ",(0,a.kt)("em",{parentName:"h3"},"Forwarding your ports")),(0,a.kt)("p",null,"The process varies based on your router. Generally, navigate to Advanced Settings > Port Forwarding, and enter the necessary information, such as Computer IP Address, Protocols, Starting, and Ending Port. Ensure to apply changes and possibly reboot your router."),(0,a.kt)("h2",{id:"additional-resources-and-verification"},"Additional Resources and Verification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.lifewire.com/how-to-port-forward-4163829"},"How to Forward Ports on Your Router")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/"},"General Port Forwarding Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://routerslogin.com/all/default-router-list"},"Router IP Address and Passwords List")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.whatismyip.com/port-scanner/"},"Verify Port Forwarding"))),(0,a.kt)("h2",{id:"network-configuration-scenarios"},"Network Configuration Scenarios"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Router Configuration (Desktop):")," Forward the specified TCP ports to the machine running your node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"No Firewall Scenario:")," No additional configuration needed if operating without a firewall."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"With Firewall:")," Ensure TCP ports are open in your firewall settings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Direct Connection:")," No further action if directly connected to the internet.")),(0,a.kt)("p",null,"Proper configuration of these ports ensures reliable and secure communication within the Subspace Network."))}c.isMDXComponent=!0}}]);
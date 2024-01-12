"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Tips & Tricks",sidebar_position:3,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},i=void 0,s={unversionedId:"farming-&-staking/farming/advanced-cli/cli-tips",id:"version-latest/farming-&-staking/farming/advanced-cli/cli-tips",title:"Tips & Tricks",description:"How to run a Subspace Network Farmer with the Substrate CLI",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-latest/farming-&-staking/farming/advanced-cli/cli-tips.mdx",sourceDirName:"farming-&-staking/farming/advanced-cli",slug:"/farming-&-staking/farming/advanced-cli/cli-tips",permalink:"/ru/docs/farming-&-staking/farming/advanced-cli/cli-tips",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/ru/docusaurus-plugin-content-docs/current/farming-&-staking/farming/advanced-cli/cli-tips.mdx",tags:[],version:"latest",sidebarPosition:3,frontMatter:{title:"Tips & Tricks",sidebar_position:3,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/ru/docs/farming-&-staking/farming/advanced-cli/cli-install"},next:{title:"Troubleshooting",permalink:"/ru/docs/farming-&-staking/farming/advanced-cli/cli-troubleshooting"}},l={},p=[{value:"Additional Tips",id:"additional-tips",level:2},{value:"Telemetry &amp; Block Explorer",id:"telemetry--block-explorer",level:3},{value:"Benchmarking Your Farmer",id:"benchmarking-your-farmer",level:3},{value:"Scrubbing Your Farmer",id:"scrubbing-your-farmer",level:3},{value:"Using a Custom Path",id:"using-a-custom-path",level:3},{value:"Switching to a new snapshot from older/different versions of Subspace",id:"switching-to-a-new-snapshot-from-olderdifferent-versions-of-subspace",level:3},{value:"Wipe &amp; Purge",id:"wipe--purge",level:3},{value:"Docker Wipe &amp; Purge",id:"docker-wipe--purge",level:3},{value:"Help",id:"help",level:3},{value:"Timekeepers",id:"timekeepers",level:3},{value:"Node &amp; Farmer Commands Guide",id:"node--farmer-commands-guide",level:3},{value:"Common Command Examples",id:"common-command-examples",level:3},{value:"Utilizing Multiple Disks",id:"utilizing-multiple-disks",level:3},{value:"Optimizing DSN Syncing",id:"optimizing-dsn-syncing",level:3},{value:"Recommended Parameters",id:"recommended-parameters",level:4}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=u("Tabs"),m=u("TabItem"),d={toc:p},h="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"additional-tips"},"Additional Tips"),(0,a.kt)("p",null,"Welcome to the Additional Tips section! Whether you're a seasoned farmer or just starting out with the Subspace Network, these tips and tricks are designed to enhance your experience and efficiency. Here, we delve into practical advice and lesser-known techniques to help you fine-tune your farming setup and navigate common challenges with ease. From configuring your environment to managing background processes, these insights are tailored to ensure your Farmer operates smoothly and effectively. Let's dive in and explore how you can get the most out of your Subspace Network Farmer."),(0,a.kt)("h3",{id:"telemetry--block-explorer"},"Telemetry & Block Explorer"),(0,a.kt)("p",null,"Explore the Subspace Network in depth with our variety of telemetry tools and block explorers. Whether you're monitoring network activity or exploring blockchain data, these resources provide comprehensive insights into the network's performance and transactions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://telemetry.subspace.network/"},"Telemetry Server")),": Get real-time insights into network activity and performance metrics. Ideal for monitoring the overall health and status of the Subspace Network.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://explorer.subspace.network/"},"Official Block Explorer")),": Our primary tool for viewing blocks, transactions, and network activity on the Subspace Network. This explorer offers an intuitive interface and detailed information.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://subspace.subscan.io/"},"Subscan Block Explorer")),": An alternative block explorer providing detailed views of blocks, transactions, and network events. Subscan is known for its user-friendly interface and additional data analytics features.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-1.gemini-3g.subspace.network%2Fws#/accounts"},"Polkadot.js Block Explorer")),": For users familiar with the Polkadot ecosystem, this explorer offers a seamless experience for exploring the Subspace Network using the Polkadot.js interface."))),(0,a.kt)("h3",{id:"benchmarking-your-farmer"},"Benchmarking Your Farmer"),(0,a.kt)("p",null,"Benchmarking helps you test the plotting speed of your farmer against different versions of the Subspace Network."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./subspace-farmer benchmark audit /path/to/your/plot\n")),(0,a.kt)("p",null,"Replace /path/to/your/plot with the actual path to your plot. This will provide you with metrics and insights regarding plotting performance."),(0,a.kt)("h3",{id:"scrubbing-your-farmer"},"Scrubbing Your Farmer"),(0,a.kt)("p",null,"In certain situations, especially when the farmer terminates unexpectedly or encounters an error, it might fail to restart correctly. The scrub command assists in resolving such issues by cleaning or resetting the specified plot."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./subspace-farmer scrub /path/to/your/plot\n")),(0,a.kt)("p",null,"Ensure to replace /path/to/your/plot with your actual plot path. Use this command cautiously as it modifies the plot state to recover from errors."),(0,a.kt)("h3",{id:"using-a-custom-path"},"Using a Custom Path"),(0,a.kt)("p",null,"You can set a custom path for your node & farmer to use if you want to use an external hard drive, or set a custom path from the default. You can set the node and farmer to different directories if you would like."),(0,a.kt)(c,{mdxType:"Tabs"},(0,a.kt)(m,{value:"node",label:"1.\ud83d\udea9 Node",mdxType:"TabItem"},"#### Set Node Custom Path.",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"To set your node to use a custom path all you will need to do is add the `--base-path` parameter.\n\n```bash\n# start node and store data in `NODE_DATA_PATH` instead of default location\n./NODE_FILE_NAME --base-path NODE_DATA_PATH --chain gemini-3g ...`\n```\n")))),(0,a.kt)("h3",{id:"switching-to-a-new-snapshot-from-olderdifferent-versions-of-subspace"},"Switching to a new snapshot from older/different versions of Subspace"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Unless specifically mentioned by the Development team you should ",(0,a.kt)("strong",{parentName:"p"},"NOT")," have to wipe & purge your configuration on new releases.")),(0,a.kt)("p",null,"In general you should be able to download the latest release, and re-start the Node & Farmer with the same commands as you started to prior version with no errors."),(0,a.kt)("p",null,"There are some cases where version updates will cause issue with your Node & Farmer and you may have to wipe & purge your node, typically when errors occur. If you have any issues you can always check our ",(0,a.kt)("a",{parentName:"p",href:"https://forums.subspace.network"},"Forums")," and hop in our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/subspace-network"},"Discord")," Server to ask for help."),(0,a.kt)("h3",{id:"wipe--purge"},"Wipe & Purge"),(0,a.kt)("p",null,"If you were running a node previously, and want to switch to a new network, please perform these steps and then follow the guide again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace `FARMER_FILE_NAME` with the name of the farmer file you downloaded from releases\n./FARMER_FILE_NAME wipe PATH_TO_FARM\n# Replace `NODE_FILE_NAME` with the name of the node file you downloaded from releases\n./NODE_FILE_NAME purge-chain --chain gemini-3g\n")),(0,a.kt)("p",null,"It does not matter if the node/farmer executable is the previous one or from the new snapshot, both will work :)"),(0,a.kt)("p",null,"Now follow installation guide."),(0,a.kt)("h3",{id:"docker-wipe--purge"},"Docker Wipe & Purge"),(0,a.kt)("p",null,"In case of Docker setup run ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose down -v")," (and manually delete custom directories if you have specified them)."),(0,a.kt)("p",null,"Now follow the installation guide."),(0,a.kt)("p",null,"If you are having issues with running a node or farmer for Subspace, feel free to join our Discord or even better you can take a look at our forums and review existing questions or post a new one if needed!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://forum.subspace.network"},"Forum")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/subspace-network"},"Discord"))),(0,a.kt)("h3",{id:"help"},"Help"),(0,a.kt)("p",null,"There are extra commands and parameters you can use on farmer or node, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," after any other command to display additional options."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace `FARMER_FILE_NAME` with the name of the node file you downloaded from releases\n./FARMER_FILE_NAME farm --help\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"timekeepers"},"Timekeepers"),(0,a.kt)("p",null,"Gemini-3g introduces Proof-of-Time and a new, optional role has been added to the node. Timekeepers help run PoT to ensure the security of the network. Timekeeping requires a high-performance core CPU but can be undertaken by any node runner. You can enable timekeeping with the following commands."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--timekeeper"),": To enable timekeeping on the node"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--timekeeper-cpu-cores"),": To specify which cores the Timekeeper will run on.")),(0,a.kt)("p",null,"Read more about ",(0,a.kt)("a",{parentName:"p",href:"../../timekeeping"},"Timekeepers")),(0,a.kt)("h3",{id:"node--farmer-commands-guide"},"Node & Farmer Commands Guide"),(0,a.kt)("p",null,"Both the node and the farmer have a variety of flags and parameters. To see a full list, append the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," flag to either the node or the farmer command."),(0,a.kt)("h3",{id:"common-command-examples"},"Common Command Examples"),(0,a.kt)("admonition",{title:"Farming Changes",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please note that as of ",(0,a.kt)("inlineCode",{parentName:"p"},"Gemini-3g")," farming no longer occurs while plotting. This is to ensure the plotting process occurs in the most efficient manner. You can change this by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--farm-during-initial-plotting")," flag to the farmer.")),(0,a.kt)("p",null,"For both the node and the farmer, here are some frequently used commands:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Display farm information: ",(0,a.kt)("inlineCode",{parentName:"li"},"./FARMER_FILE_NAME info PATH_TO_FARM")),(0,a.kt)("li",{parentName:"ul"},"Scrub the farm for errors: ",(0,a.kt)("inlineCode",{parentName:"li"},"./FARMER_FILE_NAME scrub PATH_TO_FARM")),(0,a.kt)("li",{parentName:"ul"},"Erase all farmer-related data: ",(0,a.kt)("inlineCode",{parentName:"li"},"./FARMER_FILE_NAME wipe PATH_TO_FARM")),(0,a.kt)("li",{parentName:"ul"},"Start the node with a custom data path: ",(0,a.kt)("inlineCode",{parentName:"li"},"./NODE_FILE_NAME --base-path NODE_DATA_PATH --chain gemini-3g")),(0,a.kt)("li",{parentName:"ul"},"Erase all node-related data: ",(0,a.kt)("inlineCode",{parentName:"li"},"./NODE_FILE_NAME purge-chain --base-path NODE_DATA_PATH --chain gemini-3g"))),(0,a.kt)("h3",{id:"utilizing-multiple-disks"},"Utilizing Multiple Disks"),(0,a.kt)("p",null,"To maximize storage capabilities, you can engage multiple disks directly. This is often more efficient than relying on RAID configurations:"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"./FARMER_FILE_NAME farm --reward-address WALLET_ADDRESS \\\n    path=/media/ssd1,size=100GiB \\\n    path=/media/ssd2,size=10T \\\n    path=/media/ssd3,size=10T\n")),(0,a.kt)("h3",{id:"optimizing-dsn-syncing"},"Optimizing DSN Syncing"),(0,a.kt)("admonition",{title:"Parameters to Use with Caution",type:"warning"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"--out-peers\n--in-peers\n--in-peers-light\n--dsn-target-connections\n--dsn-pending-in-connections\n--dsn-in-connections\n"))),(0,a.kt)("h4",{id:"recommended-parameters"},"Recommended Parameters"),(0,a.kt)("p",null,"The default parameters are set with the capabilities of common consumer modem/routers in mind. Adjusting certain parameters could enhance DSN sync performance by increasing parallelism. However, if you decide to increase them significantly, ensure that your modem/router is performant enough to handle the increased traffic."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Node:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--dsn-out-connections\n--dsn-pending-out-connections\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Farmer:"),"\nIncreasing the values of the farmer parameters could increase the plotting speed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--out-connections\n--pending-out-connections\n")))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunksubspace_docs=self.webpackChunksubspace_docs||[]).push([[636],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6312:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Farming with the CLI",sidebar_position:1,description:"How to run a Subspace Network Farmer with the CLI or Docker",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},l="\ud83d\udc68\u200d\ud83c\udf3e Getting Started Farming",c={unversionedId:"farm/farming",id:"version-gemini-1b-2022-june-02/farm/farming",title:"Farming with the CLI",description:"How to run a Subspace Network Farmer with the CLI or Docker",source:"@site/protocol_versioned_docs/version-gemini-1b-2022-june-02/farm/farming.md",sourceDirName:"farm",slug:"/farm/farming",permalink:"/protocol/farm/farming",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/protocol_versioned_docs/version-gemini-1b-2022-june-02/farm/farming.md",tags:[],version:"gemini-1b-2022-june-02",sidebarPosition:1,frontMatter:{title:"Farming with the CLI",sidebar_position:1,description:"How to run a Subspace Network Farmer with the CLI or Docker",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},sidebar:"masterSidebar",previous:{title:"Getting Started",permalink:"/protocol/"},next:{title:"How to Forward Ports",permalink:"/protocol/port-forwarding"}},p={},d=[{value:"Polkadot.js wallet",id:"polkadotjs-wallet",level:2},{value:"Required ports",id:"required-ports",level:2},{value:"\ud83d\uddbc\ufe0f Windows Instructions",id:"\ufe0f-windows-instructions",level:2},{value:"\ud83d\udc27 Linux Instructions",id:"-linux-instructions",level:2},{value:"\ud83c\udf4e macOS Instructions",id:"-macos-instructions",level:2},{value:"\ud83d\udc0b Docker Instructions",id:"-docker-instructions",level:2},{value:"Checking results and interacting with farmnet",id:"checking-results-and-interacting-with-farmnet",level:2},{value:"Invalid Solution",id:"invalid-solution",level:2},{value:"Switching to a new snapshot",id:"switching-to-a-new-snapshot",level:2},{value:"CLI",id:"cli",level:3},{value:"Docker",id:"docker",level:3},{value:"Help",id:"help",level:2},{value:"Advanced Running an archival node",id:"advanced-running-an-archival-node",level:2},{value:"Advanced Build from source (Linux)",id:"advanced-build-from-source-linux",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-getting-started-farming"},"\ud83d\udc68\u200d\ud83c\udf3e Getting Started Farming"),(0,r.kt)("p",null,"This is the documentation/guideline on how to run the farmer. You may also refer to the ",(0,r.kt)("a",{parentName:"p",href:"#help"},"help")," section for various commands."),(0,r.kt)("p",null,"We are regularly releasing stable snapshots. Our CI builds container images and executables for 3 major platforms (Windows, macOS, Linux)."),(0,r.kt)("p",null,"Our snapshots are categorized as the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stable releases (you should always grab the latest one, these are the ones that are tested by our team)")),(0,r.kt)("li",{parentName:"ul"},"Pre-releases (for testing things early, intended for developers)")),(0,r.kt)("p",null,"You need 2 executables, select whichever applies to your operating system"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node Executable - ",(0,r.kt)("inlineCode",{parentName:"li"},"subspace-node-...")),(0,r.kt)("li",{parentName:"ul"},"Farmer Executable - ",(0,r.kt)("inlineCode",{parentName:"li"},"subspace-farmer-..."))),(0,r.kt)("p",null,"You can find these executables in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace/releases"},"Releases")," section of this Repository."),(0,r.kt)("h2",{id:"polkadotjs-wallet"},"Polkadot.js wallet"),(0,r.kt)("p",null,"Before running anything you need to have a wallet where you'll receive testnet coins.\nInstall ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot.js extension")," into your browser and create a new account there.\nThe address of your account will be necessary at the last step."),(0,r.kt)("h2",{id:"required-ports"},"Required ports"),(0,r.kt)("p",null,"Currently, TCP port ",(0,r.kt)("inlineCode",{parentName:"p"},"30333")," needs to be exposed for node to work properly."),(0,r.kt)("p",null,"If you have a server with no firewall, there is nothing to be done, but otherwise make sure to open TCP port ",(0,r.kt)("inlineCode",{parentName:"p"},"30333")," for incoming connections."),(0,r.kt)("p",null,"On the desktop side if you have a router in front of your computer, you'll need to forward TCP port ",(0,r.kt)("inlineCode",{parentName:"p"},"30333")," to the machine on which your node is running (how this is done varied from router to router, but there is always a feature like this, refer to ",(0,r.kt)("a",{parentName:"p",href:"/protocol/next/port-forwarding"},"How to Forward Ports")," for a more in-depth tutorial).\nIf you're connected directly without any router, then again nothing needs to be done in such case."),(0,r.kt)("h2",{id:"\ufe0f-windows-instructions"},"\ud83d\uddbc\ufe0f Windows Instructions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the executables for your operating system from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/subspace/subspace/releases"},"Releases")," tab."),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"Powershell")," (we do not recommend using Command Prompt as it's syntax is slightly different)"),(0,r.kt)("li",{parentName:"ol"},"In the terminal we will change to the Downloads directory using this command ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Downloads")),(0,r.kt)("li",{parentName:"ol"},"We will then start the node using the following command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell"},"# Replace `NODE_FILE_NAME.exe` with the name of the node file you downloaded from releases\n# Replace `INSERT_YOUR_ID` with a nickname you choose\n# Copy all of the lines below, they are all part of the same command\n.\\NODE_FILE_NAME.exe `\n--chain gemini-1 `\n--execution wasm `\n--pruning 1024 `\n--keep-blocks 1024 `\n--validator `\n--name INSERT_YOUR_ID\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"You should see something similar in the terminal:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022-02-03 10:52:23 Subspace\n2022-02-03 10:52:23 \u270c\ufe0f  version 0.1.0-35cf6f5-x86_64-windows\n2022-02-03 10:52:23 \u2764\ufe0f  by Subspace Labs <https://subspace.network>, 2021-2022\n2022-02-03 10:52:23 \ud83d\udccb Chain specification: Subspace Gemini 1\n2022-02-03 10:52:23 \ud83c\udff7  Node name: YOUR_FANCY_NAME\n2022-02-03 10:52:23 \ud83d\udc64 Role: AUTHORITY\n2022-02-03 10:52:23 \ud83d\udcbe Database: RocksDb at C:\\Users\\X\\AppData\\Local\\subspace-node-windows-x86_64-snapshot-2022-jan-05.exe\\data\\chains\\subspace_test\\db\\full\n2022-02-03 10:52:23 \u26d3  Native runtime: subspace-100 (subspace-1.tx1.au1)\n2022-02-03 10:52:23 \ud83d\udd28 Initializing Genesis block/state (state: 0x22a5\u202617ea, header-hash: 0x6ada\u20260d38)\n2022-02-03 10:52:24 \u23f1  Loaded block-time = 1s from block 0x6ada0792ea62bf3501abc87d92e1ce0e78ddefba66f02973de54144d12ed0d38\n2022-02-03 10:52:24 Starting archiving from genesis\n2022-02-03 10:52:24 Archiving already produced blocks 0..=0\n2022-02-03 10:52:24 \ud83c\udff7  Local node identity is: 12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu\n2022-02-03 10:52:24 \ud83e\uddd1\u200d\ud83c\udf3e Starting Subspace Authorship worker\n2022-02-03 10:52:24 \ud83d\udce6 Highest known block at #0\n2022-02-03 10:52:24 \u303d\ufe0f Prometheus exporter started at 127.0.0.1:9615\n2022-02-03 10:52:24 Listening for new connections on 0.0.0.0:9944.\n2022-02-03 10:52:26 \ud83d\udd0d Discovered new external address for our node: /ip4/176.233.17.199/tcp/30333/p2p/12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu\n2022-02-03 10:52:29 \u2699\ufe0f  Syncing, target=#215883 (2 peers), best: #55 (0xafc7\u2026bccf), finalized #0 (0x6ada\u20260d38), \u2b07 850.1kiB/s \u2b06 1.5kiB/s\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"After running this command, Windows may ask you for permissions related to firewall, select ",(0,r.kt)("inlineCode",{parentName:"li"},"allow")," in this case."),(0,r.kt)("li",{parentName:"ol"},"We will then open another terminal, change to the downloads directory, then start the farmer node with the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell"},"# Replace `FARMER_FILE_NAME.exe` with the name of the farmer file you downloaded from releases\n# Replace `WALLET_ADDRESS` below with your account address from Polkadot.js wallet\n# Replace `PLOT_SIZE` with plot size in gigabytes or terabytes, for instance 100G or 2T (but leave at least 10G of disk space for node)\n.\\FARMER_FILE_NAME.exe farm --reward-address WALLET_ADDRESS --plot-size PLOT_SIZE\n")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"You should see something similar in the terminal:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'2022-06-02T00:02:04.552120Z  INFO subspace_farmer::commands::farm: Connecting to node at ws://127.0.0.1:9944\n2022-06-02T00:02:04.557220Z  INFO jsonrpsee_client_transport::ws: Connection established to target: Target { sockaddrs: [], host: "127.0.0.1", host_header: "127.0.0.1:9944", _mode: Plain, path_and_query: "/" }\n2022-06-02T00:02:04.575669Z  INFO subspace_farmer::commands::farm: Opening object mapping\n2022-06-02T00:02:04.617553Z  INFO subspace_farmer::multi_farming: Opening plot\n2022-06-02T00:02:04.645422Z  INFO subspace_farmer::multi_farming: Opening commitments\n2022-06-02T00:02:04.666925Z  INFO subspace_farmer::farming: Subscribing to slot info notifications\n2022-06-02T00:02:04.688218Z  INFO subspace_farmer::archiving: Subscribing to archived segments\n2022-06-02T00:02:04.689129Z  INFO subspace_farmer::commands::farm: WS RPC server listening on 127.0.0.1:9955\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=0\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=1\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=2\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=3\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=4\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=5\n')),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"You are now Farming! Just wait for your node to fully sync, and for your farmer to fully plot.")),(0,r.kt)("h2",{id:"-linux-instructions"},"\ud83d\udc27 Linux Instructions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the executables for your operating system from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/subspace/subspace/releases"},"Releases")," tab."),(0,r.kt)("li",{parentName:"ol"},"Open your favorite terminal, and change to the Downloads directory using ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Downloads")),(0,r.kt)("li",{parentName:"ol"},"Make the farmer & node executable  ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x farmer-name")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +X node-name")),(0,r.kt)("li",{parentName:"ol"},"We will then start the node using the following command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace `NODE_FILE_NAME` with the name of the node file you downloaded from releases\n# Replace `INSERT_YOUR_ID` with a nickname you choose\n# Copy all of the lines below, they are all part of the same command\n./NODE_FILE_NAME \\\n  --chain gemini-1 \\\n  --execution wasm \\\n  --pruning 1024 \\\n  --keep-blocks 1024 \\\n  --validator \\\n  --name INSERT_YOUR_ID\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"You should see something similar in the terminal:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022-02-03 10:52:23 Subspace\n2022-02-03 10:52:23 \u270c\ufe0f  version 0.1.0-35cf6f5-x86_64-ubuntu\n2022-02-03 10:52:23 \u2764\ufe0f  by Subspace Labs <https://subspace.network>, 2021-2022\n2022-02-03 10:52:23 \ud83d\udccb Chain specification: Subspace Gemini 1\n2022-02-03 10:52:23 \ud83c\udff7  Node name: YOUR_FANCY_NAME\n2022-02-03 10:52:23 \ud83d\udc64 Role: AUTHORITY\n2022-02-03 10:52:23 \ud83d\udcbe Database: RocksDb at /home/X/.local/share/subspace-node-x86_64-ubuntu-20.04-snapshot-2022-jan-05/chains/subspace_test/db/full\n2022-02-03 10:52:23 \u26d3  Native runtime: subspace-100 (subspace-1.tx1.au1)\n2022-02-03 10:52:23 \ud83d\udd28 Initializing Genesis block/state (state: 0x22a5\u202617ea, header-hash: 0x6ada\u20260d38)\n2022-02-03 10:52:24 \u23f1  Loaded block-time = 1s from block 0x6ada0792ea62bf3501abc87d92e1ce0e78ddefba66f02973de54144d12ed0d38\n2022-02-03 10:52:24 Starting archiving from genesis\n2022-02-03 10:52:24 Archiving already produced blocks 0..=0\n2022-02-03 10:52:24 \ud83c\udff7  Local node identity is: 12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu\n2022-02-03 10:52:24 \ud83e\uddd1\u200d\ud83c\udf3e Starting Subspace Authorship worker\n2022-02-03 10:52:24 \ud83d\udce6 Highest known block at #0\n2022-02-03 10:52:24 \u303d\ufe0f Prometheus exporter started at 127.0.0.1:9615\n2022-02-03 10:52:24 Listening for new connections on 0.0.0.0:9944.\n2022-02-03 10:52:26 \ud83d\udd0d Discovered new external address for our node: /ip4/176.233.17.199/tcp/30333/p2p/12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu\n2022-02-03 10:52:29 \u2699\ufe0f  Syncing, target=#215883 (2 peers), best: #55 (0xafc7\u2026bccf), finalized #0 (0x6ada\u20260d38), \u2b07 850.1kiB/s \u2b06 1.5kiB/s\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"We will then open another terminal, change to the downloads directory, then start the farmer node with the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace `FARMER_FILE_NAME` with the name of the farmer file you downloaded from releases\n# Replace `WALLET_ADDRESS` below with your account address from Polkadot.js wallet\n# Replace `PLOT_SIZE` with plot size in gigabytes or terabytes, for instance 100G or 2T (but leave at least 10G of disk space for node)\n./FARMER_FILE_NAME farm --reward-address WALLET_ADDRESS --plot-size PLOT_SIZE\n")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"You should see something similar in the terminal:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'2022-06-02T00:02:04.552120Z  INFO subspace_farmer::commands::farm: Connecting to node at ws://127.0.0.1:9944\n2022-06-02T00:02:04.557220Z  INFO jsonrpsee_client_transport::ws: Connection established to target: Target { sockaddrs: [], host: "127.0.0.1", host_header: "127.0.0.1:9944", _mode: Plain, path_and_query: "/" }\n2022-06-02T00:02:04.575669Z  INFO subspace_farmer::commands::farm: Opening object mapping\n2022-06-02T00:02:04.617553Z  INFO subspace_farmer::multi_farming: Opening plot\n2022-06-02T00:02:04.645422Z  INFO subspace_farmer::multi_farming: Opening commitments\n2022-06-02T00:02:04.666925Z  INFO subspace_farmer::farming: Subscribing to slot info notifications\n2022-06-02T00:02:04.688218Z  INFO subspace_farmer::archiving: Subscribing to archived segments\n2022-06-02T00:02:04.689129Z  INFO subspace_farmer::commands::farm: WS RPC server listening on 127.0.0.1:9955\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=0\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=1\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=2\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=3\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=4\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=5\n')),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"You are now Farming! Just wait for your node to fully sync, and for your farmer to fully plot.")),(0,r.kt)("h2",{id:"-macos-instructions"},"\ud83c\udf4e macOS Instructions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the executables for your operating system from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/subspace/subspace/releases"},"Releases")," tab and extract binaries from ZIP archives."),(0,r.kt)("li",{parentName:"ol"},"Open your favorite terminal, and change to the Downloads directory using ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Downloads")),(0,r.kt)("li",{parentName:"ol"},"Make the farmer & node executable  ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x farmer-name")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +X node-name")),(0,r.kt)("li",{parentName:"ol"},"We will then start the node using the following command")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Note, when attempting to run this command you may be prompted:")," Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"cancel")," instead of moving it to trash.\nTo allow execution, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"System Preferences -> Security & Privacy -> General"),", and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"allow"),".\nAfter this, simply repeat the step you prompted for (step 4 or 6). This time, click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Open")," button when prompted.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace `NODE_FILE_NAME` with the name of the node file you downloaded from releases\n# Replace `INSERT_YOUR_ID` with a nickname you choose\n# Copy all of the lines below, they are all part of the same command\n./NODE_FILE_NAME \\\n  --chain gemini-1 \\\n  --execution wasm \\\n  --pruning 1024 \\\n  --keep-blocks 1024 \\\n  --validator \\\n  --name INSERT_YOUR_ID\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"You should see something similar in the terminal:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022-02-03 10:52:23 Subspace\n2022-02-03 10:52:23 \u270c\ufe0f  version 0.1.0-35cf6f5-x86_64-macos\n2022-02-03 10:52:23 \u2764\ufe0f  by Subspace Labs <https://subspace.network>, 2021-2022\n2022-02-03 10:52:23 \ud83d\udccb Chain specification: Subspace Gemini 1\n2022-02-03 10:52:23 \ud83c\udff7  Node name: YOUR_FANCY_NAME\n2022-02-03 10:52:23 \ud83d\udc64 Role: AUTHORITY\n2022-02-03 10:52:23 \ud83d\udcbe Database: RocksDb at /Users/X/Library/Application Support/subspace-node-x86_64-macos-11-snapshot-2022-jan-05/chains/subspace_test/db/full\n2022-02-03 10:52:23 \u26d3  Native runtime: subspace-100 (subspace-1.tx1.au1)\n2022-02-03 10:52:23 \ud83d\udd28 Initializing Genesis block/state (state: 0x22a5\u202617ea, header-hash: 0x6ada\u20260d38)\n2022-02-03 10:52:24 \u23f1  Loaded block-time = 1s from block 0x6ada0792ea62bf3501abc87d92e1ce0e78ddefba66f02973de54144d12ed0d38\n2022-02-03 10:52:24 Starting archiving from genesis\n2022-02-03 10:52:24 Archiving already produced blocks 0..=0\n2022-02-03 10:52:24 \ud83c\udff7  Local node identity is: 12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu\n2022-02-03 10:52:24 \ud83e\uddd1\u200d\ud83c\udf3e Starting Subspace Authorship worker\n2022-02-03 10:52:24 \ud83d\udce6 Highest known block at #0\n2022-02-03 10:52:24 \u303d\ufe0f Prometheus exporter started at 127.0.0.1:9615\n2022-02-03 10:52:24 Listening for new connections on 0.0.0.0:9944.\n2022-02-03 10:52:26 \ud83d\udd0d Discovered new external address for our node: /ip4/176.233.17.199/tcp/30333/p2p/12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu\n2022-02-03 10:52:29 \u2699\ufe0f  Syncing, target=#215883 (2 peers), best: #55 (0xafc7\u2026bccf), finalized #0 (0x6ada\u20260d38), \u2b07 850.1kiB/s \u2b06 1.5kiB/s\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"We will then open another terminal, change to the downloads directory, then start the farmer node with the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace `FARMER_FILE_NAME` with the name of the farmer file you downloaded from releases\n# Replace `WALLET_ADDRESS` below with your account address from Polkadot.js wallet\n# Replace `PLOT_SIZE` with plot size in gigabytes or terabytes, for instance 100G or 2T (but leave at least 10G of disk space for node)\n./FARMER_FILE_NAME farm --reward-address WALLET_ADDRESS --plot-size PLOT_SIZE\n")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"It may prompt again in here. Refer to the note on step 4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should see something similar in the terminal:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'2022-06-02T00:02:04.552120Z  INFO subspace_farmer::commands::farm: Connecting to node at ws://127.0.0.1:9944\n2022-06-02T00:02:04.557220Z  INFO jsonrpsee_client_transport::ws: Connection established to target: Target { sockaddrs: [], host: "127.0.0.1", host_header: "127.0.0.1:9944", _mode: Plain, path_and_query: "/" }\n2022-06-02T00:02:04.575669Z  INFO subspace_farmer::commands::farm: Opening object mapping\n2022-06-02T00:02:04.617553Z  INFO subspace_farmer::multi_farming: Opening plot\n2022-06-02T00:02:04.645422Z  INFO subspace_farmer::multi_farming: Opening commitments\n2022-06-02T00:02:04.666925Z  INFO subspace_farmer::farming: Subscribing to slot info notifications\n2022-06-02T00:02:04.688218Z  INFO subspace_farmer::archiving: Subscribing to archived segments\n2022-06-02T00:02:04.689129Z  INFO subspace_farmer::commands::farm: WS RPC server listening on 127.0.0.1:9955\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=0\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=1\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=2\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=3\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=4\n2022-06-02T00:02:09.492868Z  INFO subspace_farmer::archiving: Plotted segment segment_index=5\n')),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"You are now Farming! Just wait for your node to fully sync, and for your farmer to fully plot.")),(0,r.kt)("h2",{id:"-docker-instructions"},"\ud83d\udc0b Docker Instructions"),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"subspace")," directory and ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," in it with following contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3.7"\nservices:\n  node:\n    # Replace `snapshot-DATE` with latest release (like `snapshot-2022-apr-29`)\n    # For running on Aarch64 add `-aarch64` after `DATE`\n    image: ghcr.io/subspace/node:snapshot-DATE\n    volumes:\n# Instead of specifying volume (which will store data in `/var/lib/docker`), you can\n# alternatively specify path to the directory where files will be stored, just make\n# sure everyone is allowed to write there\n      - node-data:/var/subspace:rw\n#      - /path/to/subspace-node:/var/subspace:rw\n    ports:\n# If port 30333 is already occupied by another Substrate-based node, replace all\n# occurrences of `30333` in this file with another value\n      - "0.0.0.0:30333:30333"\n    restart: unless-stopped\n    command: [\n      "--chain", "gemini-1",\n      "--base-path", "/var/subspace",\n      "--execution", "wasm",\n      "--pruning", "1024",\n      "--keep-blocks", "1024",\n      "--port", "30333",\n      "--rpc-cors", "all",\n      "--rpc-methods", "safe",\n      "--unsafe-ws-external",\n      "--validator",\n# Replace `INSERT_YOUR_ID` with your node ID (will be shown in telemetry)\n      "--name", "INSERT_YOUR_ID"\n    ]\n    healthcheck:\n      timeout: 5s\n# If node setup takes longer then expected, you want to increase `interval` and `retries` number.\n      interval: 30s\n      retries: 5\n\n  farmer:\n    depends_on:\n      node:\n        condition: service_healthy\n    # Replace `snapshot-DATE` with latest release (like `snapshot-2022-apr-29`)\n    # For running on Aarch64 add `-aarch64` after `DATE`\n    image: ghcr.io/subspace/farmer:snapshot-DATE\n# Un-comment following 2 lines to unlock farmer\'s RPC\n#    ports:\n#      - "127.0.0.1:9955:9955"\n# Instead of specifying volume (which will store data in `/var/lib/docker`), you can\n# alternatively specify path to the directory where files will be stored, just make\n# sure everyone is allowed to write there\n    volumes:\n      - farmer-data:/var/subspace:rw\n#      - /path/to/subspace-farmer:/var/subspace:rw\n    restart: unless-stopped\n    command: [\n      "--base-path", "/var/subspace",\n      "farm",\n      "--node-rpc-url", "ws://node:9944",\n      "--ws-server-listen-addr", "0.0.0.0:9955",\n# Replace `WALLET_ADDRESS` with your Polkadot.js wallet address\n      "--reward-address", "WALLET_ADDRESS",\n# Replace `PLOT_SIZE` with plot size in gigabytes or terabytes, for instance 100G or 2T (but leave at least 10G of disk space for node)\n      "--plot-size", "PLOT_SIZE"\n    ]\nvolumes:\n  node-data:\n  farmer-data:\n')),(0,r.kt)("p",null,"After which follow these steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Now edit created file:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"snapshot-DATE")," with the latest release (not pre-release!) snapshot (like ",(0,r.kt)("inlineCode",{parentName:"li"},"snapshot-2022-apr-29"),")"),(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT_YOUR_ID")," with desired name that will be shown in telemetry (doesn't impact anything else)"),(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"WALLET_ADDRESS")," with your wallet address"),(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"PLOT_SIZE")," with plot size in gigabytes or terabytes, for instance 100G or 2T (but leave at least 10G of disk space for node)"),(0,r.kt)("li",{parentName:"ul"},"If you want to store files on a separate disk or customize port, read comments in the file"))),(0,r.kt)("li",{parentName:"ul"},"Ensure ",(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," is installed and running"),(0,r.kt)("li",{parentName:"ul"},"Now go to directory with ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," and type ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose up -d")," to start everything")),(0,r.kt)("p",null,"You can read logs with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose logs --tail=1000 -f"),", for the rest read ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/reference/"},"Docker Compose CLI reference"),"."),(0,r.kt)("h1",{id:"notes"},"\ud83e\udd14Notes"),(0,r.kt)("h2",{id:"checking-results-and-interacting-with-farmnet"},"Checking results and interacting with farmnet"),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ffarm-rpc.subspace.network#/explorer"},"Polkadot.js explorer"),", from there you can interact with the Subspace Farmnet as any Substrate-based blockchain."),(0,r.kt)("h2",{id:"invalid-solution"},"Invalid Solution"),(0,r.kt)("p",null,"If you are getting ",(0,r.kt)("inlineCode",{parentName:"p"},"invalid solution"),' errors (visible on the terminal that Node runs), please follow "Switching to a new snapshot" steps below and start afresh.'),(0,r.kt)("h2",{id:"switching-to-a-new-snapshot"},"Switching to a new snapshot"),(0,r.kt)("h3",{id:"cli"},"CLI"),(0,r.kt)("p",null,"If you were running a node previously, and want to switch to a new snapshot, please perform these steps and then follow the guideline again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Replace `FARMER_FILE_NAME` with the name of the node file you downloaded from releases\n./FARMER_FILE_NAME wipe\n# Replace `NODE_FILE_NAME` with the name of the node file you downloaded from releases\n./NODE_FILE_NAME purge-chain --chain gemini-1\n")),(0,r.kt)("p",null,"Does not matter if the node/farmer executable is the previous one or from the new snapshot, both will work :)\nThe reason we require this is, with every snapshot change, the network might get partitioned, and you may be on a different genesis than the current one.\nIn plain English, these commands are like a ",(0,r.kt)("inlineCode",{parentName:"p"},"reset")," button for snapshot changes."),(0,r.kt)("p",null,"Now follow installation guide."),(0,r.kt)("h3",{id:"docker"},"Docker"),(0,r.kt)("p",null,"In case of Docker setup run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose down -v")," (and manually delete custom directories if you have specified them)."),(0,r.kt)("p",null,"Now follow installation guide."),(0,r.kt)("h2",{id:"help"},"Help"),(0,r.kt)("p",null,"There are extra commands and parameters you can use on farmer or node, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," after any other command to display additional options."),(0,r.kt)("p",null,"Below are some helpful samples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"./FARMER_FILE_NAME --base-path /path/to/data farm ...")," : will store data in ",(0,r.kt)("inlineCode",{parentName:"li"},"/path/to/data")," instead of default location"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"./FARMER_FILE_NAME --base-path /path/to/data wipe")," : erases everything related to farmer if data were stored in ",(0,r.kt)("inlineCode",{parentName:"li"},"/path/to/data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"./NODE_FILE_NAME --base-path /path/to/data --chain gemini-1 ...")," : start node and store data in ",(0,r.kt)("inlineCode",{parentName:"li"},"/path/to/data")," instead of default location"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"./NODE_FILE_NAME purge-chain --base-path /path/to/data --chain gemini-1")," : erases data related to the node if data were stored in ",(0,r.kt)("inlineCode",{parentName:"li"},"/path/to/data"))),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace `FARMER_FILE_NAME` with the name of the node file you downloaded from releases\n./FARMER_FILE_NAME farm --help\n./FARMER_FILE_NAME wipe\n")),(0,r.kt)("h2",{id:"advanced-running-an-archival-node"},"[Advanced]"," Running an archival node"),(0,r.kt)("p",null,"Instructions above will get you full node (doesn't store the history and state of the whole blockchain, only last 1024\nblocks). If you want to opt in to storing the whole history (archival node), remove following parameters (lines) from\nabove instructions before starting your node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--pruning 1024")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--keep-blocks 1024"))),(0,r.kt)("p",null,"And instead add this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--pruning archive"))),(0,r.kt)("p",null,"Archival node is useful if you run an RPC node and want to support querying older blockchain history."),(0,r.kt)("p",null,"NOTE: You can't switch between full and archival node without wiping it, so if you need that, follow steps in\n",(0,r.kt)("a",{parentName:"p",href:"#switching-to-a-new-snapshot"},"Switching to a new snapshot")," section above."),(0,r.kt)("h2",{id:"advanced-build-from-source-linux"},"[Advanced]"," Build from source (Linux)"),(0,r.kt)("p",null,"If you're running unsupported Linux distribution or CPU architecture, you may try to build binaries yourself from source."),(0,r.kt)("p",null,"NOTE: This is primarily targeted at tech-savvy users and not recommended unless you know what you're doing.\nPlease try to find answer to your question online before reaching out to maintainers."),(0,r.kt)("p",null,"You'll have to have ",(0,r.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"Rust toolchain")," installed as well as LLVM and Clang in addition to usual developer tooling (Ubuntu example):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install llvm clang\n")),(0,r.kt)("p",null,"Now clone the source and build snapshot ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshot-2022-apr-29")," (replace occurrences with the snapshot you want to build):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/subspace/subspace.git\ncd subspace\ngit checkout snapshot-2022-apr-29\ncargo build \\\n    --profile production \\\n    --bin subspace-node \\\n    --bin subspace-farmer\n")),(0,r.kt)("p",null,"You'll find two binaries under ",(0,r.kt)("inlineCode",{parentName:"p"},"target/production")," directory once it succeeds, after which refer to instructions above on how to use them."))}m.isMDXComponent=!0}}]);
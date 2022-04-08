"use strict";(self.webpackChunksubspace_docs=self.webpackChunksubspace_docs||[]).push([[661],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3389:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={},l="\ud83d\udc68\u200d\ud83c\udf3e Getting Started Farming",c={unversionedId:"Getting Started/farming",id:"Getting Started/farming",title:"\ud83d\udc68\u200d\ud83c\udf3e Getting Started Farming",description:"This is the documentation/guideline on how to run the farmer. You may also refer to the help section for various commands.",source:"@site/docs/Getting Started/farming.md",sourceDirName:"Getting Started",slug:"/Getting Started/farming",permalink:"/subspace-docs/ko/docs/Getting Started/farming",editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/Getting Started/farming.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd16 Command Index",permalink:"/subspace-docs/ko/docs/Getting Started/commands"},next:{title:"Awesome Subspace",permalink:"/subspace-docs/ko/docs/community-awesome"}},d={},p=[{value:"Polkadot.js wallet",id:"polkadotjs-wallet",level:2},{value:"\ud83d\uddbc\ufe0f Windows Instructions",id:"\ufe0f-windows-instructions",level:2},{value:"\ud83d\udc27 Linux Instructions",id:"-linux-instructions",level:2},{value:"\ud83c\udf4e macOS Instructions",id:"-macos-instructions",level:2},{value:"Checking results and interacting with farmnet",id:"checking-results-and-interacting-with-farmnet",level:2},{value:"Invalid Solution",id:"invalid-solution",level:2},{value:"Switching to a new snapshot",id:"switching-to-a-new-snapshot",level:2},{value:"Help",id:"help",level:2}],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-getting-started-farming"},"\ud83d\udc68\u200d\ud83c\udf3e Getting Started Farming"),(0,r.kt)("p",null,"This is the documentation/guideline on how to run the farmer. You may also refer to the ",(0,r.kt)("a",{parentName:"p",href:"#help"},"help")," section for various commands."),(0,r.kt)("p",null,"We are regularly releasing stable snapshots. Our CI builds container images and executables for 3 major platforms (Windows, macOS, Linux)."),(0,r.kt)("p",null,"Our snapshots are categorized as the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stable releases (you should always grab the latest one, these are the ones that are tested by our team)")),(0,r.kt)("li",{parentName:"ul"},"Pre-releases (for testing things early, intended for developers)")),(0,r.kt)("p",null,"You need 2 executables, select whichever applies to your operating system"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node Executable - ",(0,r.kt)("inlineCode",{parentName:"li"},"subspace-node-...")),(0,r.kt)("li",{parentName:"ul"},"Farmer Executable - ",(0,r.kt)("inlineCode",{parentName:"li"},"subspace-farmer-..."))),(0,r.kt)("p",null,"You can find these executables in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace/releases"},"Releases")," section of this Repository."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"non-incentivized"))," testnet. Meaning there are no rewards in place at this time, and has absolutely no financial benefit to being run at this time.")),(0,r.kt)("h2",{id:"polkadotjs-wallet"},"Polkadot.js wallet"),(0,r.kt)("p",null,"Before running anything you need to have a wallet where you'll receive testnet coins.\nInstall ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot.js extension")," into your browser and create a new account there.\nThe address of your account will be necessary at the last step."),(0,r.kt)("h2",{id:"\ufe0f-windows-instructions"},"\ud83d\uddbc\ufe0f Windows Instructions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the executables for your operating system from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/subspace/subspace/releases"},"Releases")," tab."),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"Powershell")," (we do not recommend using Command Prompt as it's syntax is slightly different)"),(0,r.kt)("li",{parentName:"ol"},"In the terminal we will change to the Downloads directory using this command ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Downloads")),(0,r.kt)("li",{parentName:"ol"},"We will then start the node using the following command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell"},'# Replace `NODE_FILE_NAME.exe` with the name of the node file you downloaded from releases\n# Replace `INSERT_YOUR_ID` with a nickname you choose\n# Copy all of the lines below, they are all part of the same command\n.\\NODE_FILE_NAME.exe `\n--chain testnet `\n--wasm-execution compiled `\n--execution wasm `\n--bootnodes "/dns/farm-rpc.subspace.network/tcp/30333/p2p/12D3KooWPjMZuSYj35ehced2MTJFf95upwpHKgKUrFRfHwohzJXr" `\n--rpc-cors all `\n--rpc-methods unsafe `\n--ws-external `\n--validator `\n--telemetry-url "wss://telemetry.polkadot.io/submit/ 1" `\n--telemetry-url "wss://telemetry.subspace.network/submit 1" `\n--name INSERT_YOUR_ID\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"You should see something similar in the terminal:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022-02-03 10:52:23 Subspace\n2022-02-03 10:52:23 \u270c\ufe0f  version 0.1.0-35cf6f5-x86_64-macos\n2022-02-03 10:52:23 \u2764\ufe0f  by Subspace Labs <https://subspace.network>, 2021-2022\n2022-02-03 10:52:23 \ud83d\udccb Chain specification: Subspace testnet\n2022-02-03 10:52:23 \ud83c\udff7  Node name: YOUR_FANCY_NAME\n2022-02-03 10:52:23 \ud83d\udc64 Role: AUTHORITY\n2022-02-03 10:52:23 \ud83d\udcbe Database: RocksDb at /Users/X/Library/Application Support/subspace-node-x86_64-macos-11-snapshot-2022-jan-05/chains/subspace_test/db/full\n2022-02-03 10:52:23 \u26d3  Native runtime: subspace-100 (subspace-1.tx1.au1)\n2022-02-03 10:52:23 \ud83d\udd28 Initializing Genesis block/state (state: 0x22a5\u202617ea, header-hash: 0x6ada\u20260d38)\n2022-02-03 10:52:24 \u23f1  Loaded block-time = 1s from block 0x6ada0792ea62bf3501abc87d92e1ce0e78ddefba66f02973de54144d12ed0d38\n2022-02-03 10:52:24 Starting archiving from genesis\n2022-02-03 10:52:24 Archiving already produced blocks 0..=0\n2022-02-03 10:52:24 \ud83c\udff7  Local node identity is: 12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu\n2022-02-03 10:52:24 \ud83e\uddd1\u200d\ud83c\udf3e Starting Subspace Authorship worker\n2022-02-03 10:52:24 \ud83d\udce6 Highest known block at #0\n2022-02-03 10:52:24 \u303d\ufe0f Prometheus exporter started at 127.0.0.1:9615\n2022-02-03 10:52:24 Listening for new connections on 0.0.0.0:9944.\n2022-02-03 10:52:26 \ud83d\udd0d Discovered new external address for our node: /ip4/176.233.17.199/tcp/30333/p2p/12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu\n2022-02-03 10:52:29 \u2699\ufe0f  Syncing, target=#215883 (2 peers), best: #55 (0xafc7\u2026bccf), finalized #0 (0x6ada\u20260d38), \u2b07 850.1kiB/s \u2b06 1.5kiB/s\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"After running this command, Windows may ask you for permissions related to firewall, select ",(0,r.kt)("inlineCode",{parentName:"li"},"allow")," in this case."),(0,r.kt)("li",{parentName:"ol"},"We will then open another terminal, change to the downloads directory, then start the farmer node with the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell"},"# Replace `FARMER_FILE_NAME.exe` with the name of the node file you downloaded from releases\n# Replace `WALLET_ADDRESS` below with your account address from Polkadot.js wallet\n.\\FARMER_FILE_NAME.exe farm --reward-address WALLET_ADDRESS\n")),(0,r.kt)("h2",{id:"-linux-instructions"},"\ud83d\udc27 Linux Instructions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the executables for your operating system from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/subspace/subspace/releases"},"Releases")," tab."),(0,r.kt)("li",{parentName:"ol"},"Open your favourite terminal, and change to the Downloads directory using ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Downloads")),(0,r.kt)("li",{parentName:"ol"},"Make the farmer & node executable  ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x farmer-name")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +X node-name")),(0,r.kt)("li",{parentName:"ol"},"We will then start the node using the following command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Replace `NODE_FILE_NAME` with the name of the node file you downloaded from releases\n# Replace `INSERT_YOUR_ID` with a nickname you choose\n# Copy all of the lines below, they are all part of the same command\n./NODE_FILE_NAME \\\n  --chain testnet \\\n  --wasm-execution compiled \\\n  --execution wasm \\\n  --bootnodes "/dns/farm-rpc.subspace.network/tcp/30333/p2p/12D3KooWPjMZuSYj35ehced2MTJFf95upwpHKgKUrFRfHwohzJXr" \\\n  --rpc-cors all \\\n  --rpc-methods unsafe \\\n  --ws-external \\\n  --validator \\\n  --telemetry-url "wss://telemetry.polkadot.io/submit/ 1" \\\n  --telemetry-url "wss://telemetry.subspace.network/submit 1" \\\n  --name INSERT_YOUR_ID\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"You should see something similar in the terminal:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022-02-03 10:52:23 Subspace\n2022-02-03 10:52:23 \u270c\ufe0f  version 0.1.0-35cf6f5-x86_64-macos\n2022-02-03 10:52:23 \u2764\ufe0f  by Subspace Labs <https://subspace.network>, 2021-2022\n2022-02-03 10:52:23 \ud83d\udccb Chain specification: Subspace testnet\n2022-02-03 10:52:23 \ud83c\udff7  Node name: YOUR_FANCY_NAME\n2022-02-03 10:52:23 \ud83d\udc64 Role: AUTHORITY\n2022-02-03 10:52:23 \ud83d\udcbe Database: RocksDb at /Users/X/Library/Application Support/subspace-node-x86_64-macos-11-snapshot-2022-jan-05/chains/subspace_test/db/full\n2022-02-03 10:52:23 \u26d3  Native runtime: subspace-100 (subspace-1.tx1.au1)\n2022-02-03 10:52:23 \ud83d\udd28 Initializing Genesis block/state (state: 0x22a5\u202617ea, header-hash: 0x6ada\u20260d38)\n2022-02-03 10:52:24 \u23f1  Loaded block-time = 1s from block 0x6ada0792ea62bf3501abc87d92e1ce0e78ddefba66f02973de54144d12ed0d38\n2022-02-03 10:52:24 Starting archiving from genesis\n2022-02-03 10:52:24 Archiving already produced blocks 0..=0\n2022-02-03 10:52:24 \ud83c\udff7  Local node identity is: 12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu\n2022-02-03 10:52:24 \ud83e\uddd1\u200d\ud83c\udf3e Starting Subspace Authorship worker\n2022-02-03 10:52:24 \ud83d\udce6 Highest known block at #0\n2022-02-03 10:52:24 \u303d\ufe0f Prometheus exporter started at 127.0.0.1:9615\n2022-02-03 10:52:24 Listening for new connections on 0.0.0.0:9944.\n2022-02-03 10:52:26 \ud83d\udd0d Discovered new external address for our node: /ip4/176.233.17.199/tcp/30333/p2p/12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu\n2022-02-03 10:52:29 \u2699\ufe0f  Syncing, target=#215883 (2 peers), best: #55 (0xafc7\u2026bccf), finalized #0 (0x6ada\u20260d38), \u2b07 850.1kiB/s \u2b06 1.5kiB/s\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"We will then open another terminal, change to the downloads directory, then start the farmer node with the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace `FARMER_FILE_NAME` with the name of the node file you downloaded from releases\n# Replace `WALLET_ADDRESS` below with your account address from Polkadot.js wallet\n./FARMER_FILE_NAME farm --reward-address WALLET_ADDRESS\n")),(0,r.kt)("h2",{id:"-macos-instructions"},"\ud83c\udf4e macOS Instructions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the executables for your operating system from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/subspace/subspace/releases"},"Releases")," tab and extract binaries from ZIP archives."),(0,r.kt)("li",{parentName:"ol"},"Open your favourite terminal, and change to the Downloads directory using ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Downloads")),(0,r.kt)("li",{parentName:"ol"},"Make the farmer & node executable  ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x farmer-name")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +X node-name")),(0,r.kt)("li",{parentName:"ol"},"We will then start the node using the following command")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Note, when attempting to run this command you may be prompted:")," Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"cancel")," instead of moving it to trash.\nTo allow execution, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"System Preferences -> Security & Privacy -> General"),", and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"allow"),".\nAfter this, simply repeat the step you prompted for (step 4 or 6). This time, click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Open")," button when prompted.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Replace `NODE_FILE_NAME` with the name of the node file you downloaded from releases\n# Replace `INSERT_YOUR_ID` with a nickname you choose\n# Copy all of the lines below, they are all part of the same command\n./NODE_FILE_NAME \\\n  --chain testnet \\\n  --wasm-execution compiled \\\n  --execution wasm \\\n  --bootnodes "/dns/farm-rpc.subspace.network/tcp/30333/p2p/12D3KooWPjMZuSYj35ehced2MTJFf95upwpHKgKUrFRfHwohzJXr" \\\n  --rpc-cors all \\\n  --rpc-methods unsafe \\\n  --ws-external \\\n  --validator \\\n  --telemetry-url "wss://telemetry.polkadot.io/submit/ 1" \\\n  --telemetry-url "wss://telemetry.subspace.network/submit 1" \\\n  --name INSERT_YOUR_ID\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"You should see something similar in the terminal:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022-02-03 10:52:23 Subspace\n2022-02-03 10:52:23 \u270c\ufe0f  version 0.1.0-35cf6f5-x86_64-macos\n2022-02-03 10:52:23 \u2764\ufe0f  by Subspace Labs <https://subspace.network>, 2021-2022\n2022-02-03 10:52:23 \ud83d\udccb Chain specification: Subspace testnet\n2022-02-03 10:52:23 \ud83c\udff7  Node name: YOUR_FANCY_NAME\n2022-02-03 10:52:23 \ud83d\udc64 Role: AUTHORITY\n2022-02-03 10:52:23 \ud83d\udcbe Database: RocksDb at /Users/X/Library/Application Support/subspace-node-x86_64-macos-11-snapshot-2022-jan-05/chains/subspace_test/db/full\n2022-02-03 10:52:23 \u26d3  Native runtime: subspace-100 (subspace-1.tx1.au1)\n2022-02-03 10:52:23 \ud83d\udd28 Initializing Genesis block/state (state: 0x22a5\u202617ea, header-hash: 0x6ada\u20260d38)\n2022-02-03 10:52:24 \u23f1  Loaded block-time = 1s from block 0x6ada0792ea62bf3501abc87d92e1ce0e78ddefba66f02973de54144d12ed0d38\n2022-02-03 10:52:24 Starting archiving from genesis\n2022-02-03 10:52:24 Archiving already produced blocks 0..=0\n2022-02-03 10:52:24 \ud83c\udff7  Local node identity is: 12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu\n2022-02-03 10:52:24 \ud83e\uddd1\u200d\ud83c\udf3e Starting Subspace Authorship worker\n2022-02-03 10:52:24 \ud83d\udce6 Highest known block at #0\n2022-02-03 10:52:24 \u303d\ufe0f Prometheus exporter started at 127.0.0.1:9615\n2022-02-03 10:52:24 Listening for new connections on 0.0.0.0:9944.\n2022-02-03 10:52:26 \ud83d\udd0d Discovered new external address for our node: /ip4/176.233.17.199/tcp/30333/p2p/12D3KooWBgKtea7MVvraeNyxdPF935pToq1x9VjR1rDeNH1qecXu\n2022-02-03 10:52:29 \u2699\ufe0f  Syncing, target=#215883 (2 peers), best: #55 (0xafc7\u2026bccf), finalized #0 (0x6ada\u20260d38), \u2b07 850.1kiB/s \u2b06 1.5kiB/s\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"We will then open another terminal, change to the downloads directory, then start the farmer node with the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace `FARMER_FILE_NAME` with the name of the node file you downloaded from releases\n# Replace `WALLET_ADDRESS` below with your account address from Polkadot.js wallet\n./FARMER_FILE_NAME farm --reward-address WALLET_ADDRESS\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"It may prompt again in here. Refer to the note on step 4.")),(0,r.kt)("h1",{id:"notes"},"\ud83e\udd14Notes"),(0,r.kt)("h2",{id:"checking-results-and-interacting-with-farmnet"},"Checking results and interacting with farmnet"),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ffarm-rpc.subspace.network#/explorer"},"Polkadot.js explorer"),", from there you can interact with the Subspace Farmnet as any Substrate-based blockchain."),(0,r.kt)("h2",{id:"invalid-solution"},"Invalid Solution"),(0,r.kt)("p",null,"If you are getting ",(0,r.kt)("inlineCode",{parentName:"p"},"invalid solution"),' errors (visible on the terminal that Node runs), please follow "Switching to a new snapshot" steps below and start afresh.'),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"switching-to-a-new-snapshot"},"Switching to a new snapshot"),(0,r.kt)("p",null,"If you were running a node previously, and want to switch to a new snapshot, please perform these steps and then follow the guideline again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Replace `FARMER_FILE_NAME` with the name of the node file you downloaded from releases\n./FARMER_FILE_NAME wipe\n# Replace `NODE_FILE_NAME` with the name of the node file you downloaded from releases\n./NODE_FILE_NAME purge-chain --chain testnet\n")),(0,r.kt)("p",null,"Does not matter if the node/farmer executable is the previous one or from the new snapshot, both will work :)\nThe reason we require this is, with every snapshot change, the network might get partitioned, and you may be on a different genesis than the current one.\nIn plain English, these commands are like a ",(0,r.kt)("inlineCode",{parentName:"p"},"reset")," button for snapshot changes."),(0,r.kt)("h2",{id:"help"},"Help"),(0,r.kt)("p",null,"There are extra commands and parameters you can use on farmer or node, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," after any other command to display additional options."),(0,r.kt)("p",null,"Below are some helpful farmer commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"farm --reward-address WALLET_ADDRESS")," : starts background plotting and farming together, farmed testnet coins will be sent to ",(0,r.kt)("inlineCode",{parentName:"li"},"WALLET_ADDRESS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"farm")," : starts background plotting and farming together, rewards are sent to auto-generated wallet (see ",(0,r.kt)("inlineCode",{parentName:"li"},"identity")," commands below)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wipe")," : erases the plot and identity (including plot, commitment, object mappings and identity files)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'identity import-from-mnemonic "spell out your seed phrase here"')," : imports your existing identity from your seed phrase (not recommended! use ",(0,r.kt)("inlineCode",{parentName:"li"},"--reward-address")," instead)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"identity view")," : displays SS58 address (this is the same as ",(0,r.kt)("inlineCode",{parentName:"li"},"identity view --address"),") where farmed testnet coins will be sent"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"identity view --mnemonic")," : displays mnemonic phrase of auto-generated wallet (sensitive information, keep this private, not very useful if ",(0,r.kt)("inlineCode",{parentName:"li"},"--reward-address")," was used)")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace `FARMER_FILE_NAME` with the name of the node file you downloaded from releases\n./FARMER_FILE_NAME farm --help\n./FARMER_FILE_NAME wipe\n")))}u.isMDXComponent=!0}}]);
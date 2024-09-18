"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[190],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9931:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={title:"Prerequisites",sidebar_position:1,description:"Prerequisites for Autonomys Farmer",keywords:["Farmer","Farming","CLI","Binaries","Docker","Node","CLI","Substrate","Binaries","Docker","Service"]},o=void 0,l={unversionedId:"farming-&-staking/farming/prerequisites",id:"farming-&-staking/farming/prerequisites",title:"Prerequisites",description:"Prerequisites for Autonomys Farmer",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/farming-&-staking/farming/prerequisites.mdx",sourceDirName:"farming-&-staking/farming",slug:"/farming-&-staking/farming/prerequisites",permalink:"/ja/docs/farming-&-staking/farming/prerequisites",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/prerequisites.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Prerequisites",sidebar_position:1,description:"Prerequisites for Autonomys Farmer",keywords:["Farmer","Farming","CLI","Binaries","Docker","Node","CLI","Substrate","Binaries","Docker","Service"]},sidebar:"tutorialSidebar",previous:{title:"Farming",permalink:"/ja/docs/category/farming"},next:{title:"Space Acres (Recommended)",permalink:"/ja/docs/category/space-acres-recommended"}},s={},m=[{value:"Minimum Hardware Requirements",id:"minimum-hardware-requirements",level:3},{value:"Recommended Requirements",id:"recommended-requirements",level:3},{value:"Reference Hardware Details",id:"reference-hardware-details",level:4},{value:"Security Considerations",id:"security-considerations",level:3},{value:"Crypto Wallet",id:"crypto-wallet",level:3},{value:"Networking Information",id:"networking-information",level:3},{value:"Storage",id:"storage",level:3},{value:"Linux File System Recommendations",id:"linux-file-system-recommendations",level:3}],p={toc:m},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"minimum-hardware-requirements"},"Minimum Hardware Requirements"),(0,r.kt)("admonition",{title:"Farming can be Network Intensive.",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you have a stable network connection. During the plotting phase of farming, it can be network intensive."),(0,r.kt)("p",{parentName:"admonition"},"This may impact your network usage so please check your network connection if you have a hard data limit.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Hardware"),(0,r.kt)("th",{parentName:"tr",align:null},"Specs"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU"),(0,r.kt)("td",{parentName:"tr",align:null},"4 Core+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RAM"),(0,r.kt)("td",{parentName:"tr",align:null},"8GB+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SWAP"),(0,r.kt)("td",{parentName:"tr",align:null},"4GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Storage (node)"),(0,r.kt)("td",{parentName:"tr",align:null},"100GB (SSD)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Storage (farm)"),(0,r.kt)("td",{parentName:"tr",align:null},"*","See Note (SSD)")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The Autonomys Network is based on Proof of Archival Storage, as such your storage contribution will directly correlate to your block and vote rewards. In other words, the more space you contribute, the faster and more frequently you will earn rewards. While you can farm with as little as 100 GB, it is strongly recommended that you allocate as much space as possible to maximize reward potential. For insights on how this choice impacts our network's consensus mechanism and your potential rewards, see ",(0,r.kt)("a",{parentName:"p",href:"https://academy.autonomys.xyz/subspace-protocol/consensus"},"this guide"),".")),(0,r.kt)("p",null,"Nodes meeting these ",(0,r.kt)("strong",{parentName:"p"},"minimum requirements")," should be able to farm and sync with the network under typical conditions. However, ",(0,r.kt)("strong",{parentName:"p"},"performance may degrade if the network experiences heavy load, such as blocks filled with a high number of transactions"),"."),(0,r.kt)("h3",{id:"recommended-requirements"},"Recommended Requirements"),(0,r.kt)("p",null,"To handle increased network demands and maintain optimal performance, we recommend the following hardware specifications:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Hardware"),(0,r.kt)("th",{parentName:"tr",align:null},"Specs"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU"),(0,r.kt)("td",{parentName:"tr",align:null},"Intel Core i7-6700 or equivalent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU"),(0,r.kt)("td",{parentName:"tr",align:null},"4 Core+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RAM"),(0,r.kt)("td",{parentName:"tr",align:null},"16GB+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Storage (node)"),(0,r.kt)("td",{parentName:"tr",align:null},"256GB (SSD)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Network"),(0,r.kt)("td",{parentName:"tr",align:null},"Reliable broadband internet connection with low latency")))),(0,r.kt)("h4",{id:"reference-hardware-details"},"Reference Hardware Details"),(0,r.kt)("p",null,"Our benchmarking tests were conducted using the Intel Core i7-6700 CPU. We have calibrated the transaction weights so that a full block cannot contain more transactions than this CPU can execute within the 2-second block execution time limit. This ensures that nodes running on hardware equivalent to or better than the Intel Core i7-6700 can process blocks at full capacity without performance issues."),(0,r.kt)("p",null,"While farmers with hardware below the referenced hardware ",(0,r.kt)("strong",{parentName:"p"},"may operate successfully under most conditions"),", they ",(0,r.kt)("strong",{parentName:"p"},"might experience difficulties during peak network activity"),". If blocks become consistently full of transactions, nodes with lower specifications may struggle to keep up, ",(0,r.kt)("strong",{parentName:"p"},"potentially affecting farming performance and rewards"),"."),(0,r.kt)("p",null,"For detailed CPU information and benchmarking results, please refer to our ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/DaMandal0rian/21a01da49ee820c3e59bce7f8c2d0166"},"GitHub repository"),"."),(0,r.kt)("h3",{id:"security-considerations"},"Security Considerations"),(0,r.kt)("p",null,"For a secure farming setup, ensure your system is updated, use a secure wallet, configure firewalls properly, and follow network safety protocols. Detailed security practices are available on our ",(0,r.kt)("a",{parentName:"p",href:"../../learn/security"},"Security Best Practices page"),"."),(0,r.kt)("h3",{id:"crypto-wallet"},"Crypto Wallet"),(0,r.kt)("p",null,"Before running anything you need to have a wallet where you'll receive testnet coins. There are currently two wallets we suggest using, SubWallet being the preferred route."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://subwallet.app/"},"SubWallet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/extension/"},"PolkadotJS"))),(0,r.kt)("p",null,"Install one of the two wallets above into your browser and create a new account there.\nThe address of your account will be necessary at the last step."),(0,r.kt)("p",null,"For help refer to our wallets section for ",(0,r.kt)("a",{parentName:"p",href:"../../category/wallets/"},"Subwallet & Polkadot.js Wallet")),(0,r.kt)("h3",{id:"networking-information"},"Networking Information"),(0,r.kt)("p",null,"For comprehensive details on network configurations, port management, firewall settings, and related networking requirements, please consult our dedicated ",(0,r.kt)("a",{parentName:"p",href:"/ja/docs/farming-&-staking/farming/additional-guides/networking"},"Networking Guide"),". This resource provides in-depth information to ensure seamless integration and optimal security of your network connections."),(0,r.kt)("h3",{id:"storage"},"Storage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HDDs are not supported and will never be.")," We don't recommended trying to use smart caching, tiered storage or other ways to accelerate it, you'll be 100% disappointed and just waste your time."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The node will require 100 GiB of good quality SSD"),". Doesn't have to be anything amazing, but something mid-range from a reputable manufacturer with decent endurance is recommended."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The farmer side can work with pretty much any SSD whatsoever that is not fake and not outright broken"),", dedicating high quality high endurance SSD is pointless unless you already have it for reasons unrelated to Autonomys. Software writes to disk in near-perfect for SSD way, effectively doing write leveling if SSD is solely dedicated to farming."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RAID of any kind is pointless and can only harm performance and/or rewards.")," RAID0 will most likely make things slower rather than faster (application benefits from knowing underlying hardware topology). RAID1 or any other redundancy level is 100% pointless too since farms are stateless and can be removed if a disk breaks without losing data on other disks, it'll just make thing slower and reduce the effective capacity that can be used for farming, ",(0,r.kt)("em",{parentName:"p"},"reducing farming rewards for literally no benefit in exchange"),"."),(0,r.kt)("h3",{id:"linux-file-system-recommendations"},"Linux File System Recommendations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ext4"),":  The recommended formatting command for drives dedicated solely to subspace is ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo mkfs.ext4 -m 0 -T largefile4 /path/to/dev"),", as it maximizes usable space and the plot resizing functionality operates flawlessly. Previously recommended striping and chunk size parameters have not demonstrated any appreciable benefit or harm.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"XFS"),":  No longer recommended as attempting to resize the plot (larger or smaller) with the drive nearly full (98%+) will render the plot unfarmable unless sufficient extra space can be freed up by means other than trying to shrink the plot (try deleting piece","_","cache.bin if this happens to you).  Full XFS disk utilization can only be achieved during the plot's initial creation, and will still yield less usable space than the ext4 recommendation above.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CoW Filesystems"),": Avoid using Copy-on-Write (CoW) file systems (like ReFS, BTRFS, ZFS, bcachefs, HAMMER) with Subspace. If using BTRFS, disable CoW using ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo chattr +C path/to/data/dir")," before starting Subspace. This applies only to newly created files. Alternatively, use a non-CoW filesystem like ext4 as recommended above.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RAID"),":  Avoid redundancy setups (RAID1/5/6, RAIDZ) for filesystems with plots. The subspace farmer uses checksums for data integrity and can often recover corrupted blocks. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"scrub")," for maintenance.  RAID0 accomplishes little more than to put more of your plots at risk in case of a drive failure.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SWAP"),": A swap file is necessary only if your system has a low amount of RAM."))),(0,r.kt)("admonition",{title:"System Adjustments",type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"File Descriptor Limit"),": Linux has a hard limit of 100k file descriptors. Exceeding this may cause errors. Substrate has a default limit of 10k. Check and adjust the limit at ",(0,r.kt)("inlineCode",{parentName:"p"},"/proc/sys/fs/file-max"),". Refer to this ",(0,r.kt)("a",{parentName:"p",href:"https://www.tutorialspoint.com/increase-number-of-maximum-open-files-in-linux"},"tutorial")," for changing the limit.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dependencies"),": If you encounter an error related to ",(0,r.kt)("inlineCode",{parentName:"p"},"libgomp.so.1"),", install the ",(0,r.kt)("inlineCode",{parentName:"p"},"libgomp1")," library with ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo apt-get install libgomp1"),".\n:::"))),(0,r.kt)("h3",{parentName:"admonition",id:"dependencies"},"Dependencies")),(0,r.kt)("p",null,"If you face an error where the node outputs nothing and no error code is given it is likely you just need to install the latest Visual C++ Redistributable package ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170"},"here"),"\n:::"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Linux ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"libcomp.so.1")," error."),(0,r.kt)("p",{parentName:"admonition"},"If you encounter an error related to ",(0,r.kt)("inlineCode",{parentName:"p"},"libgomp.so.1"),", install the ",(0,r.kt)("inlineCode",{parentName:"p"},"libgomp1")," library with ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo apt-get install libgomp1"),".")),(0,r.kt)("admonition",{title:"Linux File Descriptor Limit",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Linux has a hard limit of 100k file descriptors. Exceeding this may cause errors. Refer to our guide ",(0,r.kt)("a",{parentName:"p",href:"/ja/docs/farming-&-staking/farming/advanced-cli/cli-tips#changing-number-of-open-files-limit-linux"},"here"))))}u.isMDXComponent=!0}}]);
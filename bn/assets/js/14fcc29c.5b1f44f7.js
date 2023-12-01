"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9321],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),i=a(6010),l=a(2466),s=a(6550),o=a(1980),u=a(7392),p=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=m(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[o,u]=f({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),g=(()=>{const e=o??c;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var g=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==s&&(c(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},l,{className:(0,i.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},2475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>C,frontMatter:()=>y,metadata:()=>w,toc:()=>N});var n=a(7462),r=(a(7294),a(3905)),i=a(9960),l=a(1207);const s={toc:[{value:"Windows Specific Warnings:",id:"windows-specific-warnings",level:3},{value:"Step 1: Download the Pulsar Executable",id:"step-1-download-the-pulsar-executable",level:2},{value:"Step 2: Initialize Pulsar",id:"step-2-initialize-pulsar",level:2},{value:"Step 3. Start Farming with Pulsar",id:"step-3-start-farming-with-pulsar",level:2}]},o="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(o,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"windows-specific-warnings"},"Windows Specific Warnings:"),(0,r.kt)("admonition",{title:"Windows No Output Bug",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you face an error where the node outputs nothing and no error code is given it is likely you just need to install the latest Visual C++ Redistributable package ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170"},"here"))),(0,r.kt)("h2",{id:"step-1-download-the-pulsar-executable"},"Step 1: Download the Pulsar Executable"),(0,r.kt)("hr",null),(0,r.kt)("div",{className:`${l.Z.buttons} ${l.Z.flexContainer}`},(0,r.kt)(i.Z,{className:"button button--secondary",to:"https://github.com/subspace/pulsar/releases/download/v0.7.0-alpha/pulsar-windows-x86_64-v2-v0.7.0-alpha.exe",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"Pulsar Executable"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(Legacy CPU)")),(0,r.kt)(i.Z,{className:"button button--secondary",to:"https://github.com/subspace/pulsar/releases/download/v0.7.0-alpha/pulsar-windows-x86_64-skylake-v0.7.0-alpha.exe",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"Pulsar Executable"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(Skylake+ CPU)"))),(0,r.kt)("h2",{id:"step-2-initialize-pulsar"},"Step 2: Initialize Pulsar"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We will now initialize Pulsar. This is where we will configure Reward Address, Plot Size, Plot Location, etc. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Powershell, type ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Downloads")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Your-File-Location"),")."),(0,r.kt)("li",{parentName:"ol"},"Execute the ",(0,r.kt)("inlineCode",{parentName:"li"},"init")," command as seen below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"./pulsar-windows-x86_64-skylake-v0.7.0-alpha.exe init\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"This will prompt you to setup your Pulsar configurations to begin farming. You should see a similar prompt like so:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Configuration creation process has started...\nDo you have an existing farmer/reward address? [y/n]: y\nEnter your farmer/reward address: REDACTED_ADDRESS\nEnter your node name to be identified on the network (defaults to `username`, press enter to use the default):\nSpecify a path for storing plot files (press enter to use the default: `"/home/username/.local/share/pulsar/farms"`):\nSpecify a path for storing node files (press enter to use the default: `"/home/username/.local/share/pulsar/node"`):\nSpecify a plot size (defaults to `2.0 GB`, press enter to use the default):\nSpecify the chain to farm. Available options are: [Gemini3f, Dev, DevNet].\nDefaults to `Gemini3f`, press enter to use the default:\nConfiguration has been generated at /home/username/.config/pulsar\nReady for lift off! Run the follow command to begin: `"path/to/executable" farm`\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Once complete, the settings will be written to the ",(0,r.kt)("inlineCode",{parentName:"li"},"settings.toml"),". You can find Your ",(0,r.kt)("inlineCode",{parentName:"li"},"settings.toml")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"$FOLDERID_RoamingAppData/pulsar/settings.toml"))),(0,r.kt)("h2",{id:"step-3-start-farming-with-pulsar"},"Step 3. Start Farming with Pulsar"),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Windows Defender Firewall has blocked some features of this app")," warning may appear.\nThis is because the application is trying to access the internet. This is expected as it is how the farmer talks to other farmers on the network, select ",(0,r.kt)("inlineCode",{parentName:"p"},"Allow access")," to continue farming. ")),(0,r.kt)("p",null,"We will now start the farmer with the ",(0,r.kt)("inlineCode",{parentName:"p"},"farm")," command"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run the following command below to start farming with Pulsar. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"./pulsar-windows-x86_64-skylake-v0.7.0-alpha.exe farm\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"You should see the farmer and node start successfully and begin syncing, plotting, and then farming:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Starting node ... (this might take up to couple of minutes)\nNode started successfully!\nStarting farmer ...\nFarmer started successfully!\nInitial plotting for plot: #0 (/home/username/.local/share/pulsar/farms)\n\u2801 [00:00:00] 3% [=>                                      ]\n      (31.00 MiB/953.67 MiB) 157.35 GiB/s, plotting, ETA: 0s\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"That's it! Enjoy and Happy Farming!")))}u.isMDXComponent=!0;const p={toc:[{value:"macOS Specific Warnings:",id:"macos-specific-warnings",level:3},{value:"Step 1: Download the Pulsar Binaries",id:"step-1-download-the-pulsar-binaries",level:2},{value:"Step 2: Initialize Pulsar",id:"step-2-initialize-pulsar",level:2},{value:"Step 3. Start Farming with Pulsar",id:"step-3-start-farming-with-pulsar",level:2}]},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"macos-specific-warnings"},"macOS Specific Warnings:"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Your Mac may not let you open/initialize the file because of unidentified developer restrictions. To resolve this, go to Settings-> Security&Privacy -> General -> Allow")),(0,r.kt)("h2",{id:"step-1-download-the-pulsar-binaries"},"Step 1: Download the Pulsar Binaries"),(0,r.kt)("hr",null),(0,r.kt)("div",{className:`${l.Z.buttons} ${l.Z.flexContainer}`},(0,r.kt)(i.Z,{className:"button button--secondary",to:"https://github.com/subspace/pulsar/releases/download/v0.7.0-alpha/pulsar-macos-x86_64-v0.7.0-alpha.zip",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"Pulsar Binary"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(Intel CPU)")),(0,r.kt)(i.Z,{className:"button button--secondary",to:"https://github.com/subspace/pulsar/releases/download/v0.7.0-alpha/pulsar-macos-aarch64-v0.7.0-alpha.zip",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"Pulsar Binary"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(Apple CPU)"))),(0,r.kt)("h2",{id:"step-2-initialize-pulsar"},"Step 2: Initialize Pulsar"),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Your Mac may not let you open/initialize the file because of unidentified developer restrictions. To resolve this, go to Settings-> Security&Privacy -> General -> Allow")),(0,r.kt)("p",null,"We will now initialize Pulsar. This is where we will configure Reward Address, Plot Size, Plot Location, etc. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Terminal, type ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Downloads")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Your-File-Location"),")."),(0,r.kt)("li",{parentName:"ol"},"Make the binary executable by running:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x [pulsary-binary-filename-here]")))),(0,r.kt)("li",{parentName:"ol"},"Execute the ",(0,r.kt)("inlineCode",{parentName:"li"},"init")," command as seen below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-macos-x86_64-v0.7.0-alpha  init\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"This will prompt you to setup your Pulsar configurations to begin farming. You should see a similar prompt like so:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Configuration creation process has started...\nDo you have an existing farmer/reward address? [y/n]: y\nEnter your farmer/reward address: REDACTED_ADDRESS\nEnter your node name to be identified on the network (defaults to `username`, press enter to use the default):\nSpecify a path for storing plot files (press enter to use the default: `"/home/username/.local/share/pulsar/farms"`):\nSpecify a path for storing node files (press enter to use the default: `"/home/username/.local/share/pulsar/node"`):\nSpecify a plot size (defaults to `2.0 GB`, press enter to use the default):\nSpecify the chain to farm. Available options are: [Gemini3f, Dev, DevNet].\nDefaults to `Gemini3f`, press enter to use the default:\nConfiguration has been generated at /home/username/.config/pulsar\nReady for lift off! Run the follow command to begin: `"path/to/executable" farm`\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Once complete, the settings will be written to the ",(0,r.kt)("inlineCode",{parentName:"li"},"settings.toml"),". You can find Your ",(0,r.kt)("inlineCode",{parentName:"li"},"settings.toml")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/Library/Application Support/pulsar/settings.toml"))),(0,r.kt)("h2",{id:"step-3-start-farming-with-pulsar"},"Step 3. Start Farming with Pulsar"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We will now start the farmer with the ",(0,r.kt)("inlineCode",{parentName:"p"},"farm")," command"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run the following command below to start farming with Pulsar.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-macos-x86_64-v0.7.0-alpha farm\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"You should see the farmer and node start successfully and begin syncing, plotting, and then farming:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Starting node ... (this might take up to couple of minutes)\nNode started successfully!\nStarting farmer ...\nFarmer started successfully!\nInitial plotting for plot: #0 (/home/username/.local/share/pulsar/farms)\n\u2801 [00:00:00] 3% [=>                                      ]\n      (31.00 MiB/953.67 MiB) 157.35 GiB/s, plotting, ETA: 0s\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"That's it! Enjoy and Happy Farming!")))}m.isMDXComponent=!0;const d={toc:[{value:"Linux Specific Warnings:",id:"linux-specific-warnings",level:3},{value:"Step 1: Download the Pulsar Binaries",id:"step-1-download-the-pulsar-binaries",level:2},{value:"Step 2: Initialize Pulsar",id:"step-2-initialize-pulsar",level:2},{value:"Step 3. Start Farming with Pulsar",id:"step-3-start-farming-with-pulsar",level:2}]},f="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"linux-specific-warnings"},"Linux Specific Warnings:"),(0,r.kt)("admonition",{title:"CoW Filesystems Warning",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is advised not to use the Subspace farmer and node on CoW file systems for any OS (ReFS, BTRFS, ZFS, bcachefs, HAMMER and some more)."),(0,r.kt)("p",{parentName:"admonition"},"If BTRFS is used with Subspace, the directory/whole file system must be CoW disabled with the following command prior to starting Subspace, because it only applies to newly created files."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Command to Disable CoW on BTRFS")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"sudo chattr +C path/to/data/dir\n")),(0,r.kt)("p",{parentName:"admonition"},"Alternatively, non-CoW file systems like ext4 or XFS can be used instead.")),(0,r.kt)("admonition",{title:"Redundancy",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Using redundancy (RAID1/5/6, RAIDZ and others) on a filesystem with plot makes no sense, as the farmer uses checksums to verify the integrity of the plot, and is able to recover corrupted blocks if necessary in most cases. See ",(0,r.kt)("inlineCode",{parentName:"p"},"scrub")," command below.")),(0,r.kt)("admonition",{title:"Filesystem chunk size",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Creating a filesystem with a chunk (sunit) size of 32KB can prevent data fragmentation and improve performance, since the farmer operates on ~32KB chunks."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"XFS")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"sudo mkfs.xfs -d su=32k,sw=1 /path/to/dev\n")),(0,r.kt)("p",{parentName:"admonition"},"Then use ",(0,r.kt)("inlineCode",{parentName:"p"},"largeio")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"swalloc")," mount options."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"ext4")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"sudo mkfs.ext4 -E stride=8,stripe-width=8 /path/to/dev\n")),(0,r.kt)("p",{parentName:"admonition"},"You can change these settings for an existing file system:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"sudo tune2fs -E stride=8,stripe-width=8 /path/to/dev\n"))),(0,r.kt)("h2",{id:"step-1-download-the-pulsar-binaries"},"Step 1: Download the Pulsar Binaries"),(0,r.kt)("hr",null),(0,r.kt)("div",{className:`${l.Z.buttons} ${l.Z.flexContainer}`},(0,r.kt)(i.Z,{className:"button button--secondary",to:"https://github.com/subspace/pulsar/releases/download/v0.7.0-alpha/pulsar-ubuntu-x86_64-v2-v0.7.0-alpha",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"Pulsar Binary"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(Legacy CPU)")),(0,r.kt)(i.Z,{className:"button button--secondary",to:"https://github.com/subspace/pulsar/releases/download/v0.7.0-alpha/pulsar-ubuntu-x86_64-skylake-v0.7.0-alpha",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"Pulsar Binary"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(Skylake+ CPU)")),(0,r.kt)(i.Z,{className:"button button--secondary",to:"https://github.com/subspace/pulsar/releases/download/v0.7.0-alpha/pulsar-ubuntu-aarch64-v0.7.0-alpha",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,r.kt)("span",{style:{fontSize:"20px"}},"Pulsar Binary"),(0,r.kt)("span",{style:{fontSize:"14px"}},"(Aarch64/Raspberry Pi)"))),(0,r.kt)("h2",{id:"step-2-initialize-pulsar"},"Step 2: Initialize Pulsar"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We will now initialize Pulsar. This is where we will configure Reward Address, Plot Size, Plot Location, etc. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Terminal, type ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Downloads")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Your-File-Location"),")."),(0,r.kt)("li",{parentName:"ol"},"Make the binary executable by running:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x [pulsary-binary-filename-here]")))),(0,r.kt)("li",{parentName:"ol"},"Execute the ",(0,r.kt)("inlineCode",{parentName:"li"},"init")," command as seen below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-ubuntu-x86_64-skylake-v0.7.0-alpha  init\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"This will prompt you to setup your Pulsar configurations to begin farming. You should see a similar prompt like so:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Configuration creation process has started...\nDo you have an existing farmer/reward address? [y/n]: y\nEnter your farmer/reward address: REDACTED_ADDRESS\nEnter your node name to be identified on the network (defaults to `username`, press enter to use the default):\nSpecify a path for storing plot files (press enter to use the default: `"/home/username/.local/share/pulsar/farms"`):\nSpecify a path for storing node files (press enter to use the default: `"/home/username/.local/share/pulsar/node"`):\nSpecify a plot size (defaults to `2.0 GB`, press enter to use the default):\nSpecify the chain to farm. Available options are: [Gemini3f, Dev, DevNet].\nDefaults to `Gemini3f`, press enter to use the default:\nConfiguration has been generated at /home/username/.config/pulsar\nReady for lift off! Run the follow command to begin: `"path/to/executable" farm`\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Once complete, the settings will be written to the ",(0,r.kt)("inlineCode",{parentName:"li"},"settings.toml"),". You can find Your ",(0,r.kt)("inlineCode",{parentName:"li"},"settings.toml")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.config/pulsar/settings.toml"))),(0,r.kt)("h2",{id:"step-3-start-farming-with-pulsar"},"Step 3. Start Farming with Pulsar"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We will now start the farmer with the ",(0,r.kt)("inlineCode",{parentName:"p"},"farm")," command"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run the following command below to start farming with Pulsar.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-ubuntu-x86_64-skylake-v0.7.0-alpha farm\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"You should see the farmer and node start successfully and begin syncing, plotting, and then farming:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Starting node ... (this might take up to couple of minutes)\nNode started successfully!\nStarting farmer ...\nFarmer started successfully!\nInitial plotting for plot: #0 (/home/username/.local/share/pulsar/farms)\n\u2801 [00:00:00] 3% [=>                                      ]\n      (31.00 MiB/953.67 MiB) 157.35 GiB/s, plotting, ETA: 0s\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"That's it! Enjoy and Happy Farming!")))}h.isMDXComponent=!0;var g=a(4866),k=a(5162);const y={title:"Install",sidebar_position:2,description:"Farming on the Subspace Network",hide_table_of_contents:!0,keywords:["Farmer","Farming","CLI","Binaries","GitHub"]},b=void 0,w={unversionedId:"farming-&-staking/farming/pulsar/pulsar-install",id:"version-latest/farming-&-staking/farming/pulsar/pulsar-install",title:"Install",description:"Farming on the Subspace Network",source:"@site/versioned_docs/version-latest/farming-&-staking/farming/pulsar/pulsar-install.mdx",sourceDirName:"farming-&-staking/farming/pulsar",slug:"/farming-&-staking/farming/pulsar/pulsar-install",permalink:"/bn/docs/farming-&-staking/farming/pulsar/pulsar-install",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/farming-&-staking/farming/pulsar/pulsar-install.mdx",tags:[],version:"latest",lastUpdatedBy:"Justin",lastUpdatedAt:1701388467,formattedLastUpdatedAt:"\u09e9\u09e6 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0, \u09e8\u09e6\u09e8\u09e9",sidebarPosition:2,frontMatter:{title:"Install",sidebar_position:2,description:"Farming on the Subspace Network",hide_table_of_contents:!0,keywords:["Farmer","Farming","CLI","Binaries","GitHub"]},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/bn/docs/farming-&-staking/farming/pulsar/pulsar-prerequisites"},next:{title:"Tips & Tricks",permalink:"/bn/docs/farming-&-staking/farming/pulsar/pulsar-tips"}},v={},N=[],x={toc:N},S="wrapper";function C(e){let{components:t,...a}=e;return(0,r.kt)(S,(0,n.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Pulsar is not available for Gemini-3g as of this time. For the time being please us the ",(0,r.kt)("a",{parentName:"p",href:"../advanced-cli/cli-install"},"Advnaced CLI")," for Farming/Staking/Timekeeping")),(0,r.kt)("admonition",{title:"Get Started with Pulsar",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/subspace/pulsar"},"Pulsar")," (formerly Subspace CLI) is our recommended tool for farming on the Subspace Network. This ALPHA SOFTWARE is constantly evolving, and your feedback is invaluable in this process. To share your insights, please fill out this ",(0,r.kt)("a",{parentName:"p",href:"https://c6gxctjlh68.typeform.com/to/Ks4Y16Fo"},"feedback form"),". For detailed guidance, follow the guide below and check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/subspace/pulsar/blob/main/README.md"},"README on GitHub"),". Should you encounter any issues, feel free to file bug reports on our GitHub."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Prefer a video? Click here for an installation tutorial."),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/h1-CX7lGl2w",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please note that some older processors/VMs are no longer supported by official releases, but can still be compiled manually if needed. Precompiled versions of Pulsar are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/subspace/pulsar/releases"},"hosted on GitHub"),". Find the appropriate binary for your operating system below.")),(0,r.kt)("h1",{id:"get-started-with-pulsar-installation"},"Get Started with Pulsar Installation"),(0,r.kt)(g.Z,{groupId:"OS",mdxType:"Tabs"},(0,r.kt)(k.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,r.kt)(u,{mdxType:"WindowsGuide"})),(0,r.kt)(k.Z,{value:"macos",label:"\ud83c\udf4emacOS",default:!0,mdxType:"TabItem"},(0,r.kt)(m,{mdxType:"MacosGuide"})),(0,r.kt)(k.Z,{value:"linux",label:"\ud83d\udc27Ubuntu",mdxType:"TabItem"},(0,r.kt)(h,{mdxType:"LinuxGuide"}))))}C.isMDXComponent=!0},1207:(e,t,a)=>{a.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}}}]);
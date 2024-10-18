"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[5808],{7209:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var o=r(4848),i=r(8453);const t={title:"Tips & Tricks",sidebar_position:3,description:"How to run an Autonomys Network Farmer with the Substrate CLI",slug:"/farming/advanced-cli/tips",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},s=void 0,a={id:"farming-&-staking/farming/advanced-cli/cli-tips",title:"Tips & Tricks",description:"How to run an Autonomys Network Farmer with the Substrate CLI",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/farming-&-staking/farming/advanced-cli/cli-tips.mdx",sourceDirName:"farming-&-staking/farming/advanced-cli",slug:"/farming/advanced-cli/tips",permalink:"/de/farming/advanced-cli/tips",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/advanced-cli/cli-tips.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Tips & Tricks",sidebar_position:3,description:"How to run an Autonomys Network Farmer with the Substrate CLI",slug:"/farming/advanced-cli/tips",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Farming Cluster",permalink:"/de/farming/advanced-cli/cluster"},next:{title:"Troubleshooting",permalink:"/de/farming/advanced-cli/troubleshooting"}},l={},c=[{value:"Additional Tips",id:"additional-tips",level:2},{value:"Telemetry &amp; Astral Block Explorer",id:"telemetry--astral-block-explorer",level:3},{value:"Snap Sync",id:"snap-sync",level:3},{value:"Plotting concurrency",id:"plotting-concurrency",level:3},{value:"Create Missing Farms",id:"create-missing-farms",level:3},{value:"Record Chunks Reading Mode",id:"record-chunks-reading-mode",level:3},{value:"Benchmarking Your Farmer",id:"benchmarking-your-farmer",level:3},{value:"Scrubbing Your Farmer",id:"scrubbing-your-farmer",level:3},{value:"Specify Exact CPU Cores for Plotting/Replotting",id:"specify-exact-cpu-cores-for-plottingreplotting",level:3},{value:"Switching to a new snapshot from older/different versions of Autonomys",id:"switching-to-a-new-snapshot-from-olderdifferent-versions-of-autonomys",level:3},{value:"Wipe",id:"wipe",level:3},{value:"Docker Wipe",id:"docker-wipe",level:3},{value:"Help",id:"help",level:3},{value:"Timekeepers",id:"timekeepers",level:3},{value:"Node &amp; Farmer Commands Guide",id:"node--farmer-commands-guide",level:3},{value:"Common Command Examples",id:"common-command-examples",level:3},{value:"Utilizing Multiple Disks",id:"utilizing-multiple-disks",level:3},{value:"Optimizing DSN Syncing",id:"optimizing-dsn-syncing",level:3},{value:"Recommended Parameters",id:"recommended-parameters",level:4},{value:"NUMA Support",id:"numa-support",level:3},{value:"Enabling NUMA on Windows/Linux machines",id:"enabling-numa-on-windowslinux-machines",level:4},{value:"Changing number of open files limit (Linux)",id:"changing-number-of-open-files-limit-linux",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"additional-tips",children:"Additional Tips"}),"\n",(0,o.jsx)(n.p,{children:"Welcome to the Additional Tips section! Whether you're a seasoned farmer or just starting out with the Autonomys Network, these tips and tricks are designed to enhance your experience and efficiency. Here, we delve into practical advice and lesser-known techniques to help you fine-tune your farming setup and navigate common challenges with ease. From configuring your environment to managing background processes, these insights are tailored to ensure your Farmer operates smoothly and effectively. Let's dive in and explore how you can get the most out of your Autonomys Network Farmer."}),"\n",(0,o.jsx)(n.h3,{id:"telemetry--astral-block-explorer",children:"Telemetry & Astral Block Explorer"}),"\n",(0,o.jsx)(n.p,{children:"Explore the Autonomys Network in depth with our variety of telemetry tools and block explorers. Whether you're monitoring network activity or exploring blockchain data, these resources provide comprehensive insights into the network's performance and transactions."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://telemetry.subspace.foundation",children:"Telemetry Server"})}),": Get real-time insights into network activity and performance metrics. Ideal for monitoring the overall health and status of the Autonomys Network."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://astral.autonomys.xyz",children:"Astral Block Explorer"})}),": Our primary tool for viewing blocks, transactions, and network activity on the Autonomys Network. This explorer offers an intuitive interface and detailed information."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://subspace.subscan.io",children:"Subscan Block Explorer"})}),": An alternative block explorer providing detailed views of blocks, transactions, and network events. Subscan is known for its user-friendly interface and additional data analytics features."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-0.gemini-3h.subspace.network%2Fws#/explorer",children:"Polkadot.js Block Explorer"})}),": For users familiar with the Polkadot ecosystem, this explorer offers a seamless experience for exploring the Autonomys Network using the Polkadot.js interface."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"snap-sync",children:"Snap Sync"}),"\n",(0,o.jsxs)(n.p,{children:["As of the June 11, 2024 version, a new option called Snap Sync is available for fast syncing. It only works for the initial sync, but allow your node to be fully synced within hours instead of days. The parameter is ",(0,o.jsx)(n.code,{children:"--sync snap"}),". Currently, Snap Sync only works with a farming node, not an operator node."]}),"\n",(0,o.jsx)(n.p,{children:"Snap Sync works by jumping to near the end of the chain, allowing you to sync to the current block more quickly. Once the initial jump is complete, it behaves like a full sync. In fact, if you haven't synced for more than a few days, it might be quicker to remove the node database and use Snap Sync to quickly sync to the most current block."}),"\n",(0,o.jsxs)(n.p,{children:["There are cases where you might not want to use Snap Sync. To perform a full sync you can either omit the sync parameter, or use ",(0,o.jsx)(n.code,{children:"--sync full"}),". This is useful if you want to run an RPC node for public use or indexing. In that case, you would need to run an archival node, not just a pruned node. An archival node requires a full sync."]}),"\n",(0,o.jsx)(n.h3,{id:"plotting-concurrency",children:"Plotting concurrency"}),"\n",(0,o.jsxs)(n.p,{children:["Starting with the February 19th release, plotting performance was improved by increasing internal concurrency.\nDuring plotting, there are both parallel and sequential parts of the table generation. By generating several tables simultaneously, we can overlap the sequential parts with parallel parts, thus improving CPU utilization. While generating tables for all records requires significant RAM, producing tables for only a few records at a time offers an optimal balance between CPU and RAM usage.\nWe added the ",(0,o.jsx)(n.code,{children:"--record-encoding-concurrency"})," option to override the default behavior, which allocates one record for every two cores but does not exceed eight in parallel. According to our internal testing with P-cores, E-cores, and combinations of P+E cores, this setting appears to achieve peak performance.\nIf you prefer to use the previous behavior, or if your RAM usage becomes too high, you can set ",(0,o.jsx)(n.code,{children:"--record-encoding-concurrency"})," to ",(0,o.jsx)(n.code,{children:"1"}),". You may also experiment with setting it to ",(0,o.jsx)(n.code,{children:"2"}),", ",(0,o.jsx)(n.code,{children:"3"}),", etc., which may yield better results depending on your specific CPU/RAM configuration."]}),"\n",(0,o.jsx)(n.h3,{id:"create-missing-farms",children:"Create Missing Farms"}),"\n",(0,o.jsxs)(n.p,{children:["A farmer has the option to specify whether the system should automatically create missing farms upon startup. If you provide a path to a plot that isn't found, the system will generate a new one. However, this may not be desirable if a drive fails to mount properly.\nBy default, this option is set to ",(0,o.jsx)(n.code,{children:"true"}),", but you can override it by adding ",(0,o.jsx)(n.code,{children:"--create false"}),". Setting this flag to ",(0,o.jsx)(n.code,{children:"false"})," after establishing your plots can prevent unintentional file writes to the wrong drive."]}),"\n",(0,o.jsx)(n.h3,{id:"record-chunks-reading-mode",children:"Record Chunks Reading Mode"}),"\n",(0,o.jsxs)(n.p,{children:["Upon startup, each farm will ",(0,o.jsx)(n.a,{href:"#benchmarking-your-farmer",children:"benchmark"})," the performance of every plot to identify the most efficient proving method, yielding either ",(0,o.jsx)(n.code,{children:"ConcurrentChunks"})," or ",(0,o.jsx)(n.code,{children:"WholeSector"})," results. If you already know the optimal method for your setup, you can specify it as an argument for each farm to save time benchmarking.\nFor example, you can include record-chunks-mode= after defining the path and size, assigning the desired value, e.g., ",(0,o.jsx)(n.code,{children:"path=/mnt/subspace1,size=100G,record-chunks-mode=ConcurrentChunks"}),". If you do not provide this parameter, the system will benchmark each disk on startup to identify the most efficient method."]}),"\n",(0,o.jsx)(n.h3,{id:"benchmarking-your-farmer",children:"Benchmarking Your Farmer"}),"\n",(0,o.jsx)(n.p,{children:"Benchmarking helps you test the plotting speed of your farmer against different versions of the Autonomys Network."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"./subspace-farmer benchmark audit /path/to/your/plot\n"})}),"\n",(0,o.jsx)(n.p,{children:"Replace /path/to/your/plot with the actual path to your plot. This will provide you with metrics and insights regarding plotting performance."}),"\n",(0,o.jsxs)(n.p,{children:["At the moment, Autonomys Node supports ",(0,o.jsx)(n.code,{children:"rayon"})," implementation mechanism, that opens files as many times as there are farming threads and, for each thread, uses a dedicated file handle."]}),"\n",(0,o.jsx)(n.p,{children:"To interpret the results: typically, you assess throughput to determine the maximum auditable size across any number of disks. Both CPU and disk performance influence this metric."}),"\n",(0,o.jsxs)(n.p,{children:["To read more about audit benchmarking, ",(0,o.jsx)(n.a,{href:"https://forum.autonomys.xyz/t/audit-benchmark-result-explanation-please/2149",children:"read this forum post"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"There is a second command available, which helps you determine how much time your farmer has after auditing to provide proof."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"./subspace-farmer benchmark prove /path/to/your/plot\n"})}),"\n",(0,o.jsx)(n.p,{children:"Each farmer has ~4 seconds to audit and prove, so depending on how fast auditing is, the remaining time will be used for proving.\nProving performance doesn\u2019t depend on the plot size."}),"\n",(0,o.jsx)(n.p,{children:"If an environment does not have enough time for the proving step, a message such as this is logged by the farmer:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"Proving for solution skipped due to farming time limit slot=6723846 sector_index=46"})}),"\n",(0,o.jsxs)(n.p,{children:["To read more about prove benchmarking, ",(0,o.jsx)(n.a,{href:"https://forum.autonomys.xyz/t/audit-benchmark-result-explanation-please/2150",children:"read this forum post"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"scrubbing-your-farmer",children:"Scrubbing Your Farmer"}),"\n",(0,o.jsx)(n.p,{children:"In certain situations, especially when the farmer terminates unexpectedly or encounters an error, it might fail to restart correctly. The scrub command assists in resolving such issues by cleaning or resetting the specified plot."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"./subspace-farmer scrub /path/to/your/plot\n"})}),"\n",(0,o.jsx)(n.p,{children:"Ensure to replace /path/to/your/plot with your actual plot path. Use this command cautiously as it modifies the plot state to recover from errors."}),"\n",(0,o.jsx)(n.h3,{id:"specify-exact-cpu-cores-for-plottingreplotting",children:"Specify Exact CPU Cores for Plotting/Replotting"}),"\n",(0,o.jsxs)(n.p,{children:["This option will override any custom logic that the ",(0,o.jsx)(n.strong,{children:"subspace farmer"})," might otherwise use.\nYou can specify the plotting CPU cores by adding ",(0,o.jsx)(n.code,{children:"--plotting-cpu-cores"}),", followed by the desired cores parameters. Cores should be listed as comma-separated values, with whitespace used to separate different thread pools or encoding instances.\nFor example, ",(0,o.jsx)(n.code,{children:"--plotting-cpu-cores 0,1 2,3"})," will result in two sectors being encoded simultaneously, each using a pair of CPU cores."]}),"\n",(0,o.jsxs)(n.p,{children:["Similarly, you can customize the replotting CPU cores using ",(0,o.jsx)(n.code,{children:"--replotting-cpu-cores"}),", followed by arguments similar to those used in the ",(0,o.jsx)(n.code,{children:"--plotting-cpu-cores"})," example above."]}),"\n",(0,o.jsxs)(n.p,{children:["Note that setting ",(0,o.jsx)(n.code,{children:"--plotting-cpu-cores"})," requires ",(0,o.jsx)(n.code,{children:"--replotting-cpu-cores"})," to be configured with the same number of CPU core groups. If the ",(0,o.jsx)(n.code,{children:"--replotting-cpu-cores"})," setting is omitted, the node will default to using the same thread pool as for plotting."]}),"\n",(0,o.jsx)(n.h3,{id:"switching-to-a-new-snapshot-from-olderdifferent-versions-of-autonomys",children:"Switching to a new snapshot from older/different versions of Autonomys"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Unless specifically mentioned by the Development team you should ",(0,o.jsx)(n.strong,{children:"NOT"})," have to wipe your configuration on new releases."]})}),"\n",(0,o.jsx)(n.p,{children:"In general you should be able to download the latest release, and re-start the Node & Farmer with the same commands as you started to prior version with no errors."}),"\n",(0,o.jsxs)(n.p,{children:["There are some cases where version updates will cause issue with your Node & Farmer and you may have to wipe your node, typically when errors occur. If you have any issues you can always check our ",(0,o.jsx)(n.a,{href:"https://forum.autonomys.xyz",children:"Forums"})," and hop in our ",(0,o.jsx)(n.a,{href:"https://autonomys.xyz/discord",children:"Discord"})," Server to ask for help."]}),"\n",(0,o.jsx)(n.h3,{id:"wipe",children:"Wipe"}),"\n",(0,o.jsx)(n.p,{children:"If you were running a node previously, and want to switch to a new network, please perform these steps and then follow the guide again:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Replace `FARMER_FILE_NAME` with the name of the farmer file you downloaded from releases\n./FARMER_FILE_NAME wipe PATH_TO_FARM\n# Replace `NODE_FILE_NAME` with the name of the node file you downloaded from releases\n./NODE_FILE_NAME wipe NODE_DATA_PATH\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now follow the installation guide from the beginning."}),"\n",(0,o.jsx)(n.h3,{id:"docker-wipe",children:"Docker Wipe"}),"\n",(0,o.jsxs)(n.p,{children:["In case of Docker setup run ",(0,o.jsx)(n.code,{children:"docker compose down -v"})," (and manually delete custom directories if you have specified them)."]}),"\n",(0,o.jsx)(n.p,{children:"Now follow the installation guide."}),"\n",(0,o.jsx)(n.p,{children:"If you are having issues with running a node or farmer for Autonomys, feel free to join our Discord or even better you can take a look at our forums and review existing questions or post a new one if needed!"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://forum.autonomys.xyz",children:"Forum"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://autonomys.xyz/discord",children:"Discord"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"help",children:"Help"}),"\n",(0,o.jsxs)(n.p,{children:["There are extra commands and parameters you can use on farmer or node, use the ",(0,o.jsx)(n.code,{children:"--help"})," after any other command to display additional options."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Replace `FARMER_FILE_NAME` with the name of the node file you downloaded from releases\n./FARMER_FILE_NAME farm --help\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"timekeepers",children:"Timekeepers"}),"\n",(0,o.jsx)(n.p,{children:"Gemini-3g introduces Proof-of-Time and a new, optional role has been added to the node. Timekeepers help run PoT to ensure the security of the network. Timekeeping requires a high-performance core CPU but can be undertaken by any node runner. You can enable timekeeping with the following commands."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--timekeeper"}),": To enable timekeeping on the node"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--timekeeper-cpu-cores"}),": To specify which cores the Timekeeper will run on."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Read more about ",(0,o.jsx)(n.a,{href:"/farming/timekeeper",children:"Timekeepers"})]}),"\n",(0,o.jsx)(n.h3,{id:"node--farmer-commands-guide",children:"Node & Farmer Commands Guide"}),"\n",(0,o.jsxs)(n.p,{children:["Both the node and the farmer have a variety of flags and parameters. To see a full list, append the ",(0,o.jsx)(n.code,{children:"--help"})," flag to either the node or the farmer command."]}),"\n",(0,o.jsx)(n.h3,{id:"common-command-examples",children:"Common Command Examples"}),"\n",(0,o.jsx)(n.admonition,{title:"Farming Changes",type:"note",children:(0,o.jsxs)(n.p,{children:["Please note that as of ",(0,o.jsx)(n.code,{children:"Gemini-3g"})," farming no longer occurs while plotting. This is to ensure the plotting process occurs in the most efficient manner. You can change this by adding the ",(0,o.jsx)(n.code,{children:"--farm-during-initial-plotting"})," flag to the farmer."]})}),"\n",(0,o.jsx)(n.p,{children:"For both the node and the farmer, here are some frequently used commands:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Display farm information: ",(0,o.jsx)(n.code,{children:"./FARMER_FILE_NAME info PATH_TO_FARM"})]}),"\n",(0,o.jsxs)(n.li,{children:["Scrub the farm for errors: ",(0,o.jsx)(n.code,{children:"./FARMER_FILE_NAME scrub PATH_TO_FARM"})]}),"\n",(0,o.jsxs)(n.li,{children:["Erase all farmer-related data: ",(0,o.jsx)(n.code,{children:"./FARMER_FILE_NAME wipe PATH_TO_FARM"})]}),"\n",(0,o.jsxs)(n.li,{children:["Erase all node-related data: ",(0,o.jsx)(n.code,{children:"./NODE_FILE_NAME wipe NODE_DATA_PATH"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"utilizing-multiple-disks",children:"Utilizing Multiple Disks"}),"\n",(0,o.jsx)(n.p,{children:"To maximize storage capabilities, you can engage multiple disks directly. This is often more efficient than relying on RAID configurations:"}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell-session",children:"./FARMER_FILE_NAME farm --reward-address WALLET_ADDRESS \\\n    path=/media/ssd1,size=100GiB \\\n    path=/media/ssd2,size=10T \\\n    path=/media/ssd3,size=10T\n"})}),"\n",(0,o.jsx)(n.h3,{id:"optimizing-dsn-syncing",children:"Optimizing DSN Syncing"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The DSN can be a nuanced topic, to better understand our Decentralized Storage Network, please refer to ",(0,o.jsx)(n.a,{href:"https://academy.autonomys.xyz/subspace-protocol/network-architecture/distributed-storage-network",children:"this guide"})," from our Academy."]})}),"\n",(0,o.jsx)(n.admonition,{title:"Parameters to Use with Caution",type:"warning",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"--out-peers\n--in-peers\n--dsn-target-connections\n--dsn-pending-in-connections\n--dsn-in-connections\n"})})}),"\n",(0,o.jsx)(n.h4,{id:"recommended-parameters",children:"Recommended Parameters"}),"\n",(0,o.jsxs)(n.p,{children:["The default parameters are set with the capabilities of common consumer modem/routers in mind. Adjusting certain parameters could enhance DSN sync performance by increasing parallelism. However, if you decide to increase them significantly, ensure that your modem/router is performant enough to handle the increased traffic.\n",(0,o.jsx)(n.strong,{children:"Node:"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"--dsn-out-connections\n--dsn-pending-out-connections\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Farmer:"}),"\nIncreasing the values of the farmer parameters could increase the plotting speed."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"--out-connections\n--pending-out-connections\n"})}),"\n",(0,o.jsx)(n.h3,{id:"numa-support",children:"NUMA Support"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"NUMA support will benefit farmers with large, powerful CPUs and lots of RAM available. The required RAM amount depends on the processor and the number of threads.\\"})}),"\n",(0,o.jsx)(n.p,{children:"Previously plotting/replotting thread pools were created for each farm separately even though only a configured number of them can be used at a time (by default just one).\nWith the introduction of NUMA support, the farmer application has a thread pool manager that will create a necessary number of thread pools that will be allocated to currently plotting/replotting farms.\nWhen a thread pool is created, it is assigned to a set of CPU cores and will only be able to use those cores. Pinning doesn\u2019t pin threads to cores 1:1, instead, the OS is free to move threads between cores, but only within CPU cores allocated for the thread pool. This will ensure plotting for a particular sector only happens on a particular CPU/NUMA node."}),"\n",(0,o.jsx)(n.h4,{id:"enabling-numa-on-windowslinux-machines",children:"Enabling NUMA on Windows/Linux machines"}),"\n",(0,o.jsxs)(n.p,{children:["On Linux and Windows, the farmer will detect NUMA systems and create a number of thread pools that correspond to the number of NUMA nodes. This means the default behavior will change for large CPUs and consume more memory as a result, but that can be changed to the previous behavior with CLI options if desired.\nTo use NUMA, you need to enable it via the BIOS of your motherboard for the farmer to know it exists. This option is present in motherboards for ",(0,o.jsx)(n.strong,{children:"Threadripper/Epyc processors"})," but might exist in others too. If you don\u2019t enable it, both OS and farmer will think you have a single UMA processor and will not be able to apply optimizations."]}),"\n",(0,o.jsxs)(n.p,{children:["To read more about NUMA support and the benefits it provides for large CPUs read ",(0,o.jsx)(n.a,{href:"https://forum.autonomys.xyz/t/numa-support-is-coming/2299?u=nazar-pc",children:"this forum post"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"changing-number-of-open-files-limit-linux",children:"Changing number of open files limit (Linux)"}),"\n",(0,o.jsx)(n.p,{children:"Changing the number of open files limit on Linux is sometimes necessary for both system and application performance tuning. Applications that manage file sharing or distribution, including peer-to-peer systems, may require opening numerous connections to different peers simultaneously. A higher open files limit allows these applications to maintain more connections, improving data transfer rates and system efficiency."}),"\n",(0,o.jsxs)(n.p,{children:["This can also help to mitigate the ",(0,o.jsx)(n.code,{children:"Too Many Open Files"})," error."]}),"\n",(0,o.jsxs)(n.p,{children:["You can use the ",(0,o.jsx)(n.code,{children:"ulimit"})," command to change the limit for open files temporarily. For example, setting ",(0,o.jsx)(n.code,{children:"ulimit -n 2048"})," will set the limit to 2048. This change is reverted after logging out or a reboot."]}),"\n",(0,o.jsx)(n.p,{children:"For a permanent change, you have two approaches:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["To modify the kernel parameter ",(0,o.jsx)(n.code,{children:"fs.file-max"}),". You can do this using the ",(0,o.jsx)(n.code,{children:"sysctl"})," command ",(0,o.jsx)(n.code,{children:"sysctl -w fs.file-max=500000"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["To set limits for individual users, you need to edit the ",(0,o.jsx)(n.code,{children:"/etc/security/limits.conf"})," file. You can specify hard and soft limits for the number of open files ",(0,o.jsx)(n.code,{children:"username soft nofile 10000"})," for the soft limit and ",(0,o.jsx)(n.code,{children:"username hard nofile 30000"})," for the hard limit."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var o=r(6540);const i={},t=o.createContext(i);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);
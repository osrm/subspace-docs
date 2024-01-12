"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=a,f=d["".concat(s,".").concat(c)]||d[c]||u[c]||r;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var i=n(7462),a=(n(7294),n(3905));const r={title:"Partitioning and Mounting",sidebar_position:1,description:"essential info to file systems. partitioning, and mounting.",keywords:["Partition","Filesystem","Mount","Boot","MBR","GPT","VFat","BTRFS","XFS","EXT"]},o=void 0,l={unversionedId:"participate/community_resources/file-systems",id:"participate/community_resources/file-systems",title:"Partitioning and Mounting",description:"essential info to file systems. partitioning, and mounting.",source:"@site/i18n/ar/docusaurus-plugin-content-docs/current/participate/community_resources/file-systems.md",sourceDirName:"participate/community_resources",slug:"/participate/community_resources/file-systems",permalink:"/ar/docs/pre-release/participate/community_resources/file-systems",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/edit/main/i18n/ar/docusaurus-plugin-content-docs/current/participate/community_resources/file-systems.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Partitioning and Mounting",sidebar_position:1,description:"essential info to file systems. partitioning, and mounting.",keywords:["Partition","Filesystem","Mount","Boot","MBR","GPT","VFat","BTRFS","XFS","EXT"]},sidebar:"tutorialSidebar",previous:{title:"Community Resources",permalink:"/ar/docs/pre-release/category/community-resources"},next:{title:"Awesome Subspace",permalink:"/ar/docs/pre-release/participate/"}},s={},m=[{value:"Boot Process",id:"boot-process",level:2},{value:"<em>Boot</em> Partition:",id:"boot-partition",level:4},{value:"<em>Tmp</em> Partition:",id:"tmp-partition",level:4},{value:"Checking Disk Conditions",id:"checking-disk-conditions",level:4},{value:"Partitioning",id:"partitioning",level:2},{value:"Resize Partition",id:"resize-partition",level:3},{value:"Creating File Systems",id:"creating-file-systems",level:2},{value:"VFAT",id:"vfat",level:3},{value:"EXT(3,4)",id:"ext34",level:3},{value:"Creating small EXT4 partition for external journal:",id:"creating-small-ext4-partition-for-external-journal",level:4},{value:"Attaching the filesystem to the journal device:",id:"attaching-the-filesystem-to-the-journal-device",level:4},{value:"Resizing journal partition:",id:"resizing-journal-partition",level:4},{value:"XFS File System",id:"xfs-file-system",level:3},{value:"Useful XFS Functions:",id:"useful-xfs-functions",level:4},{value:"Creating External XFS Journal Partition",id:"creating-external-xfs-journal-partition",level:4},{value:"Creating XFS Data Partition (named farmer-0) with Mentioned Journal",id:"creating-xfs-data-partition-named-farmer-0-with-mentioned-journal",level:4},{value:"BTRFS File System",id:"btrfs-file-system",level:3},{value:"Understanding BTRFS:",id:"understanding-btrfs",level:4},{value:"Some Interesting Features:",id:"some-interesting-features",level:4},{value:"DataCoW in BTRFS:",id:"datacow-in-btrfs",level:4},{value:"Formatting farmer-2 partition in BTRFS",id:"formatting-farmer-2-partition-in-btrfs",level:4},{value:"Mounting and Filesystem Configuration",id:"mounting-and-filesystem-configuration",level:2},{value:"Mount Commands",id:"mount-commands",level:3},{value:"Mounting XFS Partitions",id:"mounting-xfs-partitions",level:3},{value:"Mounting XFS data partition (farmer-2) with an external journal (nvme0n1p5)",id:"mounting-xfs-data-partition-farmer-2-with-an-external-journal-nvme0n1p5",level:4},{value:"Mounting BTRFS Partitions",id:"mounting-btrfs-partitions",level:3},{value:"Mounting BTRFS partition without CoW",id:"mounting-btrfs-partition-without-cow",level:4},{value:"Chroot",id:"chroot",level:3},{value:"Fstab",id:"fstab",level:3},{value:"To add a partition to fstab:",id:"to-add-a-partition-to-fstab",level:4},{value:"Addon: Useful Mounting Options",id:"addon-useful-mounting-options",level:2},{value:"For All File Systems",id:"for-all-file-systems",level:3},{value:"For EXT4:",id:"for-ext4",level:3},{value:"For XFS:",id:"for-xfs",level:3},{value:"DataCoW BTRFS",id:"datacow-btrfs",level:3}],p={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Topics Covered in this Guide:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Boot process details for MBR and GPT partitioning schemes."),(0,a.kt)("li",{parentName:"ul"},"Partitioning types: VFAT, EXT4, XFS, BTRFS, and their related journal partition filesystems."),(0,a.kt)("li",{parentName:"ul"},"Partition manipulatinng: Parted, E2fsprogs, Blocks to Gigabytes Calculator, Gdisk, and Sgdisk."),(0,a.kt)("li",{parentName:"ul"},"Creating file systems: VFAT, EXT4, XFS, and BTRFS, along with their specific details and commands."),(0,a.kt)("li",{parentName:"ul"},"Mounting various partitions with specific options."),(0,a.kt)("li",{parentName:"ul"},"Details on chroot and fstab configurations.")),(0,a.kt)("h2",{id:"boot-process"},"Boot Process"),(0,a.kt)("h4",{id:"boot-partition"},(0,a.kt)("em",{parentName:"h4"},"Boot")," Partition:"),(0,a.kt)("p",null,"BIOS (Basic Input/Output System) and UEFI (Unified Extensible Firmware Interface) control a computer's booting process."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"MBR (Master Boot Record) Scheme:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The primary partition table in MBR starts in the first sector (0th sector) of the storage device."),(0,a.kt)("li",{parentName:"ul"},"The sector comprises partition table and boot code. Boot code is executed by BIOS, locating and loading the OS's boot loader from the active partition."),(0,a.kt)("li",{parentName:"ul"},"Recommended codes: 0x07 for NTFS, 0x83 for Linux, 0x0B for FAT32. Sizes usually range from 100 to 200 MiB."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"GPT (GUID Partition Table) Scheme:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The main partition table starts in sector 1. Sector 0 is for the Protective MBR (PMBR) to maintain legacy compatibility."),(0,a.kt)("li",{parentName:"ul"},"GPT relies on EFI firmware and an EFI System Partition (ESP) containing EFI boot loaders, firmware executables, etc."),(0,a.kt)("li",{parentName:"ul"},"ESP is formatted with FAT32 and typically sized between 100 and 500 MiB, sometimes up to 1 GB.")))),(0,a.kt)("h4",{id:"tmp-partition"},(0,a.kt)("em",{parentName:"h4"},"Tmp")," Partition:"),(0,a.kt)("p",null,"The tmp partition stores temporary files, preventing them from filling other partitions and causing instability. Its size depends on expected usage and server capacity."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"checking-disk-conditions"},"Checking Disk Conditions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"apt-get -y install nvme-cli\nnvme list       \nnvme --smart-log /dev/ng0n1\nnvme --smart-log /dev/ng1n1\n")),(0,a.kt)("h2",{id:"partitioning"},"Partitioning"),(0,a.kt)("p",null,"Popular Utilities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://www.gnu.org/software/parted/"},"Parted"),":")," Resizes partitions but not the file systems within them. Alignment issues might occur with GPT partitions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"http://e2fsprogs.sourceforge.net/"},"E2fsprogs"),":")," Designed for ext2 and ext3 file systems."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://www.unitconverters.net/data-storage/block-to-gigabyte.htm"},"Blocks to Gigabytes Calculator"),":")," Aids in converting storage units."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://www.rodsbooks.com/gdisk/"},"Gdisk")," and ",(0,a.kt)("a",{parentName:"strong",href:"https://www.rodsbooks.com/gdisk/sgdisk.html"},"Sgdisk"),":")," Primarily for GPT partitions. Useful for reordering, alignment, and labeling tasks but not for resizing partitions.")),(0,a.kt)("p",null,"Example command with ",(0,a.kt)("inlineCode",{parentName:"p"},"sgdisk"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"sgdisk -z /dev/nvme1n1 -n 1::+512M -t 1:EF00 -c 1:boot -v /dev/nvme1n1 --align-end -n 2::-4076M -t 2:8300 -c 2:main -v /dev/nvme1n1 -n 3::+2038M -t 3:8300 -c 3:j1 -v /dev/nvme1n1 -n 4::+2038M -t 4:8300 -c 4:j2 -v /dev/nvme1n1 -p /dev/nvme1n1\n")),(0,a.kt)("p",null,"Explanation of options: ",(0,a.kt)("inlineCode",{parentName:"p"},"-v")," checks for errors, ",(0,a.kt)("inlineCode",{parentName:"p"},"-c")," changes partition names, ",(0,a.kt)("inlineCode",{parentName:"p"},"-t")," sets partition types, ",(0,a.kt)("inlineCode",{parentName:"p"},"-p")," prints device info, ",(0,a.kt)("inlineCode",{parentName:"p"},"-z")," wipes tables and partitions, ",(0,a.kt)("inlineCode",{parentName:"p"},"--align-end")," aligns partitions."),(0,a.kt)("h3",{id:"resize-partition"},"Resize Partition"),(0,a.kt)("p",null,"When resizing partitions, ensure the file system size matches the partition size by reducing the former, resizing the partition, and adjusting the fs accordingly without explicitly specifying the size in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resize2fs")," tool. When resizing with ",(0,a.kt)("inlineCode",{parentName:"p"},"Parted"),", ensure copying the old partition's GUID, deleting it, creating a new one matching starting sectors, and setting the old GUID to the new one."),(0,a.kt)("p",null,"Tools:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://www.unitconverters.net/data-storage/block-to-gigabyte.htm"},"Calculator"),":")," blocks to gigabytes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://www.linode.com/docs/guides/using-e2fsck-to-fix-ext-disk-issues/"},"E2fsck"),":")," (",(0,a.kt)("inlineCode",{parentName:"li"},"e2fsck -f device"),") - mandatory pre-resizing check for errors, even on an empty partition.")),(0,a.kt)("h2",{id:"creating-file-systems"},"Creating File Systems"),(0,a.kt)("h3",{id:"vfat"},"VFAT"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'mkfs.vfat -c -n "boot" -F 32 -v /dev/nvme1n1p1  # c-check, n-label, F-FAT size, v-verbose\n')),(0,a.kt)("h3",{id:"ext34"},"EXT(3,4)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'mkfs.ext4 -L "farmer-0" /dev/nvme0n1p1  # -L - label\n')),(0,a.kt)("h4",{id:"creating-small-ext4-partition-for-external-journal"},"Creating small EXT4 partition for external journal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'mke2fs -L "j0" -O journal_dev /dev/nvme1n1p3\n')),(0,a.kt)("h4",{id:"attaching-the-filesystem-to-the-journal-device"},"Attaching the filesystem to the journal device:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tune2fs -J device=/dev/nvme1n1p3 /dev/nvme0n1p1\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://linux.die.net/man/5/ext4"},"Detailed EXT4 manual")),(0,a.kt)("h4",{id:"resizing-journal-partition"},"Resizing journal partition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tune2fs -J size=256M /dev/device\n")),(0,a.kt)("p",null,"Useful options: ",(0,a.kt)("inlineCode",{parentName:"p"},"-t")," for filesystem type, ",(0,a.kt)("inlineCode",{parentName:"p"},"-c")," for error checking, ",(0,a.kt)("inlineCode",{parentName:"p"},"-b")," for block size, ",(0,a.kt)("inlineCode",{parentName:"p"},"-v")," for verbosity."),(0,a.kt)("p",null,"To check/verify/repair the external journal partition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"e2fsck -j /dev/nvme1n1p3 /dev/nvme1n1p2  # Requires unmounting partition\n")),(0,a.kt)("p",null,"Switching the journal on an EXT4 partition from external to internal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"umount /dev/sdXY        # unmount\ntune2fs -j /dev/sdXY    # create inner journal\ne2fsck -f /dev/sdXY     # check file system\nmount /dev/sdXY /mount/point  \n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://linux.die.net/man/8/e2fsck"},"Detailed e2fsck manual")),(0,a.kt)("hr",null),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"xfs-file-system"},"XFS File System"),(0,a.kt)("p",null,"XFS offers various parameters adjustable through ",(0,a.kt)("inlineCode",{parentName:"p"},"xfs_admin"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Modify mount options for behavior change."),(0,a.kt)("li",{parentName:"ul"},"Additional performance tuning options: ",(0,a.kt)("inlineCode",{parentName:"li"},"delaylog"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"allocsize"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"inode64"),"."),(0,a.kt)("li",{parentName:"ul"},"For data partition on HDD, external log on fast disks enhances read/write speed significantly, depending on disk types and workload."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"-l logdev=device")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"mkfs.xfs")," when creating XFS with a separate partition for external logging.")),(0,a.kt)("h4",{id:"useful-xfs-functions"},"Useful XFS Functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-l")," log_section_options: Specifies log section location, size, and other parameters."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nobarrier"),": Disables write barriers for specific devices with non-volatile, battery-backed write caches or write-caching disabled.")),(0,a.kt)("p",null,"Metadata Update Process:\nFile systems employ transactions to bundle metadata updates, ensuring data consistency during power failures. However, challenges arise with storage devices with extra caches, leading to potential data inconsistency. Write barriers ensure data integrity, particularly during power loss, by flushing storage write caches before and after I/O."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-sunit=values"),": Specifies alignment for log writes, leading to performance improvements in certain configurations like software RAID5."),(0,a.kt)("h4",{id:"creating-external-xfs-journal-partition"},"Creating External XFS Journal Partition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"mkfs.xfs -L j0 /dev/nvme1n1p4\n")),(0,a.kt)("h4",{id:"creating-xfs-data-partition-named-farmer-0-with-mentioned-journal"},"Creating XFS Data Partition (named farmer-0) with Mentioned Journal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"mkfs.xfs -L farmer-0 -l logdev=/dev/nvme1n1p4 /dev/nvme0n1p1\n\nmkfs.xfs -L farmer  /dev/nvme2n1p1      # without logdev\n")),(0,a.kt)("p",null,"Manuals:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.man7.org/linux/man-pages//man8/mkfs.xfs.8.html"},"mkfs.xfs.8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://linux.die.net/man/5/xfs"},"xfs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://linux.die.net/man/3/xfsctl"},"xfsctl")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://linux.die.net/man/8/mkfs.xfs"},"mkfs.xfs"))),(0,a.kt)("h3",{id:"btrfs-file-system"},"BTRFS File System"),(0,a.kt)("h4",{id:"understanding-btrfs"},"Understanding BTRFS:"),(0,a.kt)("p",null,"Btrfs, although not a direct replacement for Ext4, is considered a promising technology by some maintainers due to its scalability and reliability advantages."),(0,a.kt)("h4",{id:"some-interesting-features"},"Some Interesting Features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unlike other file systems supporting external journals like XFS and ext4, Btrfs doesn't offer support for external journaling. Its journaling is integrated into the COW mechanism."),(0,a.kt)("li",{parentName:"ul"},"Multiple devices specified during Btrfs creation span across those devices."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"commit=0")," can be used to disable the automatic commit mechanism for potential performance boosts but at the risk of data loss during system crashes or power failures.")),(0,a.kt)("h4",{id:"datacow-in-btrfs"},"DataCoW in BTRFS:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nodatacow")," in Btrfs controls copy-on-write behavior for newly created files. Enabling this option slightly improves performance by directly overwriting data, similar to ext file systems. However, note that enabling ",(0,a.kt)("inlineCode",{parentName:"p"},"nodatacow")," turns off checksumming, potentially compromising data integrity."),(0,a.kt)("h4",{id:"formatting-farmer-2-partition-in-btrfs"},"Formatting farmer-2 partition in BTRFS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"mkfs.btrfs -L far2 /dev/nvme2n1p1\n")),(0,a.kt)("p",null,"Manuals:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.man7.org/linux/man-pages/man8/btrfs.8.html"},"Manual btrfs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.man7.org/linux/man-pages/man8/btrfs-device.8.html"},"BTRFS device")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.man7.org/linux/man-pages/man8/btrfs-filesystem.8.html"},"BTRFS filesystem"))),(0,a.kt)("p",null,"For more information, Wikipedia provides a comprehensive overview of ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Btrfs"},"Btrfs"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"mounting-and-filesystem-configuration"},"Mounting and Filesystem Configuration"),(0,a.kt)("h3",{id:"mount-commands"},"Mount Commands"),(0,a.kt)("p",null,"Mounting commands provide options to manage filesystems and devices effectively:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mount -a"),": Mounts all filesystems mentioned in ",(0,a.kt)("inlineCode",{parentName:"li"},"fstab"),", except those flagged with ",(0,a.kt)("inlineCode",{parentName:"li"},"-noauto"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mount farmer-1"),": Mounts what's specified in ",(0,a.kt)("inlineCode",{parentName:"li"},"fstab")," using only device or mount point."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mount /dev/nvme0n1p1 /farmer-1"),": Mounts without reading ",(0,a.kt)("inlineCode",{parentName:"li"},"fstab")," by specifying both device and mount point.")),(0,a.kt)("h3",{id:"mounting-xfs-partitions"},"Mounting XFS Partitions"),(0,a.kt)("h4",{id:"mounting-xfs-data-partition-farmer-2-with-an-external-journal-nvme0n1p5"},"Mounting XFS data partition (farmer-2) with an external journal (nvme0n1p5)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"mkdir /mnt/farmer-2\nmount -t xfs -o defaults,logdev=/dev/nvme0n1p5,swalloc,largeio /dev/nvme2n1p1 /mnt/farmer-2\n\n# Without logdev\nmount -t xfs -o defaults,swalloc,largeio /dev/nvme2n1p1 /mnt/farmer\n")),(0,a.kt)("h3",{id:"mounting-btrfs-partitions"},"Mounting BTRFS Partitions"),(0,a.kt)("h4",{id:"mounting-btrfs-partition-without-cow"},"Mounting BTRFS partition without CoW"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"mkdir /mnt/j2\nmount -t btrfs -o nodatacow,nobarrier,commit=0 /dev/nvme2n1p1 /mnt/far2\n")),(0,a.kt)("h3",{id:"chroot"},"Chroot"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"chroot")," command allows executing commands in a different root directory environment:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"chroot /mnt/new-root-directory")," to switch to a temporary mounted filesystem containing another system (and root account).")),(0,a.kt)("h3",{id:"fstab"},"Fstab"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/fstab")," file contains information about mount points and options for the system's filesystems:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Six columns describe each filesystem entry: device path/UUID, mount point, filesystem type, mounting options, automatic backup options, and boot-check priority.")),(0,a.kt)("h4",{id:"to-add-a-partition-to-fstab"},"To add a partition to fstab:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use commands like ",(0,a.kt)("inlineCode",{parentName:"li"},"fdisk -l")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"blkid")," to gather partition information."),(0,a.kt)("li",{parentName:"ul"},"Edit ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/fstab")," as root, including the new partition's UUID and necessary options.")),(0,a.kt)("p",null,"Here's an example of fstab lines, detailing mount points, filesystem types, UUIDs, and options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"# Example of fstab lines for various partitions\nUUID=E35A-641E /boot vfat defaults 0 2 # EFI system boot partition\n/dev/mapper/cpanel--backups-tmp /tmp xfs loop,nosuid,noexec,nodev,rw 0 0\nUUID=2de0e328-2bcd-4823-bfa5-3606f6fe9f92 /mnt ext4 defaults 0 1 # Root partition\n# More entries for XFS and BTRFS partitions with specific options...\n")),(0,a.kt)("p",null,"After editing fstab, regenerate mount units using ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl daemon-reload"),", and verify the configuration with ",(0,a.kt)("inlineCode",{parentName:"p"},"mount -a"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"addon-useful-mounting-options"},"Addon: Useful Mounting Options"),(0,a.kt)("h3",{id:"for-all-file-systems"},"For All File Systems"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"async"),": Perform all I/O to the filesystem asynchronously."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"atime"),": Control the inode access time by kernel defaults, avoiding the use of the ",(0,a.kt)("inlineCode",{parentName:"li"},"noatime")," feature. Refer to strictatime and relatime mount options for details."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"noatime"),": Prevent updating inode access times on this filesystem for faster access, particularly on news spools to speed up news servers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaults"),": Utilize default options: rw, suid, dev, exec, auto, nouser, async, and relatime."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"diratime"),": Update directory inode access times on this filesystem (default behavior)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nodiratime"),": Avoid updating directory inode access times on this filesystem."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dirsync"),": Perform all directory updates within the filesystem synchronously, affecting specific system calls."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exec"),": Permit the execution of binaries."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"noexec"),": Disallow direct execution of any binaries on the mounted filesystem."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mount -o remount,rw /dev/foo /dir"),": Replace all old mount options after this call; arbitrary entries from fstab are disregarded, except for the loop= option maintained by the mount command."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rw"),": Mount the filesystem as read-write."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ro"),": Mount the filesystem as read-only.")),(0,a.kt)("h3",{id:"for-ext4"},"For EXT4:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_batch_time=usec"),": Determines the maximum time ext4 should wait for additional filesystem operations to batch together with a synchronous write operation. This optimization, capped by ",(0,a.kt)("inlineCode",{parentName:"li"},"max_batch_time")," (default 15000us or 15ms), can significantly enhance throughput. It can be disabled by setting ",(0,a.kt)("inlineCode",{parentName:"li"},"max_batch_time")," to 0."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"journal_ioprio=prio"),": Specifies the I/O priority (0 to 7) for I/O operations submitted by kjournald2 during a commit operation. Default is 3, slightly higher than the default I/O priority.")),(0,a.kt)("h3",{id:"for-xfs"},"For XFS:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"logbufs=value"),": Sets the number of in-memory log buffers, with valid numbers ranging from 2-8 inclusive. Increasing buffer numbers may enhance performance on specific workloads at the expense of additional memory usage."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"logdev=device and rtdev=device"),": Utilizes an external log (metadata journal) and/or real-time device. An XFS filesystem typically comprises data, log, and optional real-time sections."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"osyncisosync"),": Implements true ",(0,a.kt)("inlineCode",{parentName:"li"},"O_SYNC")," writes, enhancing performance without compromising data safety. Critical timestamp updates from ",(0,a.kt)("inlineCode",{parentName:"li"},"O_SYNC")," writes are preserved in case of system crashes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"swalloc"),": Rounds data allocations to stripe width boundaries when extending the file size."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"largeio|nolargeio"),": Specifies optimal I/O behavior, reported in ",(0,a.kt)("inlineCode",{parentName:"li"},"st_blksize")," by ",(0,a.kt)("inlineCode",{parentName:"li"},"stat"),".")),(0,a.kt)("p",null,"For creating an XFS file system with a specific block size using the ",(0,a.kt)("inlineCode",{parentName:"p"},"mkfs.xfs")," command:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Check Available Block Sizes"),": Use ",(0,a.kt)("inlineCode",{parentName:"li"},"xfs_info /dev/<device>")," to view supported block sizes."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Unmount the Device"),": Unmount the device using ",(0,a.kt)("inlineCode",{parentName:"li"},"umount /dev/<device>"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Create the XFS File System"),": Execute ",(0,a.kt)("inlineCode",{parentName:"li"},"mkfs.xfs -b size=4096 /dev/<device>")," to create an XFS file system with a block size of 4096 bytes."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Mount the XFS File System"),": Mount it using ",(0,a.kt)("inlineCode",{parentName:"li"},"mount /dev/<device> /mnt/xfs"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Creating a new file system erases existing data. Backup crucial data before proceeding."),(0,a.kt)("p",null,"Consider XFS for workloads involving numerous random reads, as it excels in handling large files and high-throughput workloads with concurrent read operations. Factors such as hardware configuration, disk I/O subsystem, and caching mechanisms can further optimize XFS performance."),(0,a.kt)("h3",{id:"datacow-btrfs"},"DataCoW BTRFS"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"nodatacow")," option in Btrfs controls copy-on-write behavior for newly created files, offering a performance boost by directly overwriting data. However, enabling ",(0,a.kt)("inlineCode",{parentName:"p"},"nodatacow")," compromises data integrity by turning off checksumming. Use commands like ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo chattr +C")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo chattr -R +C")," to turn off COW for files or directories. Remember, ",(0,a.kt)("inlineCode",{parentName:"p"},"nodatacow")," only affects newly created files."),(0,a.kt)("p",null,"Btrfs is a modern file system offering advanced features like snapshotting, checksumming, and compression. Disabling CoW might affect functionalities like snapshotting and data deduplication. Ext4 or XFS can be alternative choices if CoW needs to be entirely disabled for specific use cases."),(0,a.kt)("p",null,"Performance comparisons between Btrfs without CoW and XFS on NVMe SSDs depend on the workload and system configuration. While Btrfs without CoW might offer better write performance, XFS is renowned for its performance in handling large files and high-throughput workloads."),(0,a.kt)("p",null,"For further information on Btrfs, refer to these resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://btrfs.wiki.kernel.org/"},"BTRFS Wiki Kernel.org")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/title/btrfs"},"Arch Linux BTRFS Wiki")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/html/latest/filesystems/btrfs.html"},"The Btrfs Filesystem: Theory and Practice")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gms.tf/btrfs-requires-noatime.html"},"Btrfs Requires Noatime"))))}u.isMDXComponent=!0}}]);
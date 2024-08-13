"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6932],{3905:(e,a,r)=>{r.d(a,{Zo:()=>c,kt:()=>b});var n=r(7294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,n,o=function(e,a){if(null==e)return{};var r,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var a=n.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},c=function(e){var a=u(e.components);return n.createElement(i.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var r=e.components,o=e.mdxType,t=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||t;return r?n.createElement(b,l(l({ref:a},c),{},{components:r})):n.createElement(b,l({ref:a},c))}));function b(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var t=r.length,l=new Array(t);l[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<t;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,a,r)=>{r.d(a,{Z:()=>l});var n=r(7294),o=r(6010);const t={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(t.tabItem,l),hidden:r},a)}},4866:(e,a,r)=>{r.d(a,{Z:()=>q});var n=r(7462),o=r(7294),t=r(6010),l=r(2466),s=r(6550),i=r(1980),u=r(7392),c=r(12);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:r,attributes:n,default:o}}=e;return{value:a,label:r,attributes:n,default:o}}))}function p(e){const{values:a,children:r}=e;return(0,o.useMemo)((()=>{const e=a??d(r);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function m(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:r}=e;const n=(0,s.k6)(),t=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,i._X)(t),(0,o.useCallback)((e=>{if(!t)return;const a=new URLSearchParams(n.location.search);a.set(t,e),n.replace({...n.location,search:a.toString()})}),[t,n])]}function f(e){const{defaultValue:a,queryString:r=!1,groupId:n}=e,t=p(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:t}))),[i,u]=b({queryString:r,groupId:n}),[d,f]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,t]=(0,c.Nk)(r);return[n,(0,o.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:n}),g=(()=>{const e=i??d;return m({value:e,tabValues:t})?e:null})();(0,o.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,t]),tabValues:t}}var g=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:a,block:r,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const a=e.currentTarget,r=c.indexOf(a),n=u[r].value;n!==s&&(d(a),i(n))},m=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;a=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;a=c[r]??c[c.length-1];break}}a?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},a)},u.map((e=>{let{value:a,label:r,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,key:a,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,t.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":s===a})}),r??a)})))}function y(e){let{lazy:a,children:r,selectedValue:n}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=t.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function k(e){const a=f(e);return o.createElement("div",{className:(0,t.Z)("tabs-container",v.tabList)},o.createElement(h,(0,n.Z)({},e,a)),o.createElement(y,(0,n.Z)({},e,a)))}function q(e){const a=(0,g.Z)();return o.createElement(k,(0,n.Z)({key:String(a)},e))}},5117:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));r(4866),r(5162),r(9960),r(1207);const t={title:"Problemas habituales",sidebar_position:6,description:"Problemas comunes y formas de resolverlos",keywords:["Error","Problemas","Incidencias"]},l=void 0,s={unversionedId:"farming-&-staking/farming/common_problems",id:"farming-&-staking/farming/common_problems",title:"Problemas habituales",description:"Problemas comunes y formas de resolverlos",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/farming-&-staking/farming/common_problems.md",sourceDirName:"farming-&-staking/farming",slug:"/farming-&-staking/farming/common_problems",permalink:"/es/docs/farming-&-staking/farming/common_problems",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/common_problems.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Problemas habituales",sidebar_position:6,description:"Problemas comunes y formas de resolverlos",keywords:["Error","Problemas","Incidencias"]},sidebar:"tutorialSidebar",previous:{title:"Grafana Dashboard",permalink:"/es/docs/farming-&-staking/farming/additional-guides/grafana-dashboard"},next:{title:"Operators and Nominators",permalink:"/es/docs/category/operators-and-nominators"}},i={},u=[{value:"Error al marcar la telemetr\xeda del dns",id:"error-al-marcar-la-telemetr\xeda-del-dns",level:3},{value:"Farmer atascado en el trazado, no avanza en varias horas",id:"farmer-atascado-en-el-trazado-no-avanza-en-varias-horas",level:3},{value:"Instrucci\xf3n ilegal (core dumped)",id:"instrucci\xf3n-ilegal-core-dumped",level:3},{value:"No hay recompensas tras varios d\xedas de farming",id:"no-hay-recompensas-tras-varios-d\xedas-de-farming",level:3},{value:"Fallo en la recuperaci\xf3n de la pieza perdida",id:"fallo-en-la-recuperaci\xf3n-de-la-pieza-perdida",level:3},{value:"Error al importar el consenso de bloques",id:"error-al-importar-el-consenso-de-bloques",level:3},{value:"No se puede crear el bloque en la ranura. No hay mejor cabecera de bloque",id:"no-se-puede-crear-el-bloque-en-la-ranura-no-hay-mejor-cabecera-de-bloque",level:3},{value:"La sincronizaci\xf3n r\xe1pida de nodos (m\xe1s de 100 bloques por segundo) s\xf3lo llega hasta \xb120.000 bloques, despu\xe9s la velocidad de sincronizaci\xf3n disminuye considerablemente.",id:"la-sincronizaci\xf3n-r\xe1pida-de-nodos-m\xe1s-de-100-bloques-por-segundo-s\xf3lo-llega-hasta-20000-bloques-despu\xe9s-la-velocidad-de-sincronizaci\xf3n-disminuye-considerablemente",level:3},{value:"subspace_farmer::single_disk_plot::piece_receiver: Couldn&#39;t get a piece from DSN.",id:"subspace_farmersingle_disk_plotpiece_receiver-couldnt-get-a-piece-from-dsn",level:3},{value:"Error de importaci\xf3n de bloque: Ataque potencial de largo alcance: bloque no en cadena finalizada.",id:"error-de-importaci\xf3n-de-bloque-ataque-potencial-de-largo-alcance-bloque-no-en-cadena-finalizada",level:3},{value:"Still Facing Trouble? Take a look at our forums below",id:"still-facing-trouble-take-a-look-at-our-forums-below",level:3}],c={toc:u},d="wrapper";function p(e){let{components:a,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"While Autonomys strives to release bug-free software, users may encounter certain errors. Algunos de ellos pueden ignorarse sin peligro, mientras que otros requieren atenci\xf3n."),(0,o.kt)("h1",{id:"problemas-comunes-y-formas-de-resolverlos"},"Problemas comunes y formas de resolverlos"),(0,o.kt)("h3",{id:"error-al-marcar-la-telemetr\xeda-del-dns"},"Error al marcar la telemetr\xeda del dns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Error al marcar /dns/telemetry.subspace.network/tcp/443/x-parity-wss/%2Fsubmit%2F\nPersonalizado { kind: Otro, error: Timeout }\n")),(0,o.kt)("p",null,"Este error est\xe1 relacionado s\xf3lo con el servidor de telemetr\xeda. Es algo que puede ocurrir ocasionalmente, pero que no afecta al farming. Puedes ignorarlo sin problemas."),(0,o.kt)("h3",{id:"farmer-atascado-en-el-trazado-no-avanza-en-varias-horas"},"Farmer atascado en el trazado, no avanza en varias horas"),(0,o.kt)("p",null,"Prueba a reiniciar tu nodo o farmer. Hemos observado que a veces, al crear parcelas m\xe1s grandes, puede parecer que el proceso se detiene, pero contin\xfaa autom\xe1ticamente al cabo de un tiempo."),(0,o.kt)("h3",{id:"instrucci\xf3n-ilegal-core-dumped"},"Instrucci\xf3n ilegal (core dumped)"),(0,o.kt)("p",null,"Este error est\xe1 causado por CPUs antiguas sin el soporte de instrucciones necesario (por ejemplo, ADX 4). Puede solucionarse compilando el software desde el c\xf3digo fuente en esa m\xe1quina."),(0,o.kt)("p",null,"Aunque los procesadores sin instrucciones ADX son compatibles, su rendimiento se ver\xe1 afectado significativamente en comparaci\xf3n con los procesadores que s\xed admiten instrucciones ADX."),(0,o.kt)("p",null,"La mayor\xeda de los procesadores de sobremesa modernos a partir de Broadwell por parte de Intel y Ryzen (ZEN 1) por parte de AMD s\xed soportan las instrucciones ADX necesarias y no deber\xedan verse afectados por el error."),(0,o.kt)("h3",{id:"no-hay-recompensas-tras-varios-d\xedas-de-farming"},"No hay recompensas tras varios d\xedas de farming"),(0,o.kt)("p",null,"Por favor, aseg\xfarese de que:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use our latest stable release, as shown on our ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/autonomys/space-acres/releases"},"Github releases")),(0,o.kt)("li",{parentName:"ul"},"Verify your farmer is present and on the highest block on our ",(0,o.kt)("a",{parentName:"li",href:"https://telemetry.subspace.network/"},"telemetry server")),(0,o.kt)("li",{parentName:"ul"},"Verify your balance using the ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-0.gemini-3h.subspace.network%2Fws#/explorer"},"Polkadot explorer"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to select the correct testnet in the dropdown and tabs, e.g. gemini-3h")),(0,o.kt)("h3",{id:"fallo-en-la-recuperaci\xf3n-de-la-pieza-perdida"},"Fallo en la recuperaci\xf3n de la pieza perdida"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ERROR single_disk_plot{disk_farm_index=0}:\nsubspace_farmer_components::segment_reconstruction: Recovering missing piece failed. missing_piece_index=135\n")),(0,o.kt)("p",null,"No se trata de un error crucial y puede ignorarse."),(0,o.kt)("h3",{id:"error-al-importar-el-consenso-de-bloques"},"Error al importar el consenso de bloques"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Error al importar el bloque "n\xfamero_bloque", error de consenso: Error de importaci\xf3n: Base de datos\n')),(0,o.kt)("p",null,"Es probable que tu PC se haya quedado sin espacio. Considere la posibilidad de liberar espacio eliminando archivos innecesarios y vuelva a intentarlo. Alternativamente, puede ajustar la cantidad de parcela para que coincida con el espacio disponible en disco"),(0,o.kt)("h3",{id:"no-se-puede-crear-el-bloque-en-la-ranura-no-hay-mejor-cabecera-de-bloque"},"No se puede crear el bloque en la ranura. No hay mejor cabecera de bloque"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Unable to author block in slot. No best block header: Chain lookup failed: Failed to get header for hash\n")),(0,o.kt)("p",null,"Es probable que tu PC se haya quedado sin espacio. Considere la posibilidad de liberar espacio eliminando archivos innecesarios y vuelva a intentarlo. Alternativamente, puede ajustar la cantidad de parcela para que coincida con el espacio disponible en disco"),(0,o.kt)("h3",{id:"la-sincronizaci\xf3n-r\xe1pida-de-nodos-m\xe1s-de-100-bloques-por-segundo-s\xf3lo-llega-hasta-20000-bloques-despu\xe9s-la-velocidad-de-sincronizaci\xf3n-disminuye-considerablemente"},"La sincronizaci\xf3n r\xe1pida de nodos (m\xe1s de 100 bloques por segundo) s\xf3lo llega hasta \xb120.000 bloques, despu\xe9s la velocidad de sincronizaci\xf3n disminuye considerablemente."),(0,o.kt)("p",null,"A medida que aumente el tama\xf1o de la base de datos y los bloques se hagan m\xe1s grandes (ya que los agricultores empezaron a producir votos), se espera que la velocidad de sincronizaci\xf3n se establezca en un n\xfamero menor. We have made some performance improvements in Gemini 3e and will do more performance tuning when the protocol is functionally complete."),(0,o.kt)("h3",{id:"subspace_farmersingle_disk_plotpiece_receiver-couldnt-get-a-piece-from-dsn"},"subspace_farmer::single_disk_plot::piece_receiver: Couldn't get a piece from DSN."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"subspace_farmer::single_disk_plot::piece_receiver: Couldn't get a piece from DSN. Retrying... piece_index=57\n")),(0,o.kt)("p",null,"Esto no es un error sino m\xe1s bien una advertencia, es algo de esperar en una Red de Almacenamiento Descentralizada. No hay nada que tengas que hacer como usuario con este aviso, es probable que aparezca de vez en cuando pero mientras no haya otros errores m\xe1s catastr\xf3ficos se puede ignorar."),(0,o.kt)("h3",{id:"error-de-importaci\xf3n-de-bloque-ataque-potencial-de-largo-alcance-bloque-no-en-cadena-finalizada"},"Error de importaci\xf3n de bloque: Ataque potencial de largo alcance: bloque no en cadena finalizada."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WARN sc_service::client::client: Error de importaci\xf3n del bloque: ataque de largo alcance Potential: bloque que no est\xe1 en cadena finalizada.\n")),(0,o.kt)("p",null,"El nodo de alguna manera termin\xf3 siendo en un tenedor, trate de limpiar y empezar de cero."),(0,o.kt)("h3",{id:"still-facing-trouble-take-a-look-at-our-forums-below"},"Still Facing Trouble? Take a look at our forums below"),(0,o.kt)("iframe",{src:"https://forum.autonomys.xyz/search?expanded=false&q=tags%3Afaq%20order%3Alatest",width:"100%",height:"600px",frameborder:"0",scrolling:"auto"}))}p.isMDXComponent=!0},1207:(e,a,r)=>{r.d(a,{Z:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}}}]);
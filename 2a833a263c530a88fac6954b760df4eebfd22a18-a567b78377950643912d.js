"use strict";(self.webpackChunkskeleton_pip=self.webpackChunkskeleton_pip||[]).push([[235],{5587:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(7294);const o=i.createContext({}),a=!0;function s(e){let{baseColor:n,highlightColor:t,width:i,height:o,borderRadius:s,circle:l,direction:r,duration:d,enableAnimation:c=a}=e;const u={};return"rtl"===r&&(u["--animation-direction"]="reverse"),"number"==typeof d&&(u["--animation-duration"]=`${d}s`),c||(u["--pseudo-element-display"]="none"),"string"!=typeof i&&"number"!=typeof i||(u.width=i),"string"!=typeof o&&"number"!=typeof o||(u.height=o),"string"!=typeof s&&"number"!=typeof s||(u.borderRadius=s),l&&(u.borderRadius="50%"),void 0!==n&&(u["--base-color"]=n),void 0!==t&&(u["--highlight-color"]=t),u}function l(e){let{count:n=1,wrapper:t,className:l,containerClassName:r,containerTestId:d,circle:c=!1,style:u,...p}=e;var g,h,m;const j=i.useContext(o),x={...p};for(const[i,o]of Object.entries(p))void 0===o&&delete x[i];const v={...j,...x,circle:c},b={...u,...s(v)};let f="react-loading-skeleton";l&&(f+=` ${l}`);const O=null!==(g=v.inline)&&void 0!==g&&g,y=[],z=Math.ceil(n);for(let o=0;o<z;o++){let e=b;if(z>n&&o===z-1){const t=null!==(h=e.width)&&void 0!==h?h:"100%",i=n%1,o="number"==typeof t?t*i:`calc(${t} * ${i})`;e={...e,width:o}}const t=i.createElement("span",{className:f,style:e,key:o},"‌");O?y.push(t):y.push(i.createElement(i.Fragment,{key:o},t,i.createElement("br",null)))}return i.createElement("span",{className:r,"data-testid":d,"aria-live":"polite","aria-busy":null!==(m=v.enableAnimation)&&void 0!==m?m:a},t?y.map(((e,n)=>i.createElement(t,{key:n},e))):y)}},8883:function(e,n,t){t.d(n,{o:function(){return s}});var i=t(7294),o=t(686),a=t(7177);const s=e=>{const n=i.useContext(a.Z);return{getOne:t=>(0,o.useQuery)(["organizations",t],(()=>null==n?void 0:n.Organization.getOne(t)),{initialData:()=>{var n;return null===(n=e.getQueryData("organizations"))||void 0===n?void 0:n.find((e=>e.id===t))},onError:e=>{throw new Error(e.message)},enabled:!!t}),getAll:e=>(0,o.useQuery)(["organizations",e],(()=>null==n?void 0:n.Organization.getAll(e)),{onError:e=>{throw new Error(e.message)}}),getCount:e=>(0,o.useQuery)(["organizations_count",e],(()=>null==n?void 0:n.Organization.getCount(e)),{onError:e=>{throw new Error(e.message)},refetchOnWindowFocus:!1,refetchOnReconnect:!1,retry:!1,staleTime:6e5}),filtersGetAll:()=>(0,o.useQuery)(["organizations"],(()=>null==n?void 0:n.Organization.filtersGetAll()),{onError:e=>{throw new Error(e.message)}})}}},8122:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var i=t(7294),o=t(1973),a=t(5983),s=t(5019),l=t(686),r=t(5587),d=t(2840),c=t(4799),u=t(1800),p=t(8883),g=t(8177),h=t(5893);const m=()=>{const[e,n]=i.useContext(a.oh),t=i.useRef(null),{register:o,watch:s,reset:l,formState:{errors:r}}=(0,g.cI)();i.useEffect((()=>{l({name:e.organizationSearch})}),[e]);const d=s("name");return i.useEffect((()=>{t.current&&clearTimeout(t.current),t.current=setTimeout((()=>n({...e,organizationCurrentPage:1,organizationSearch:void 0===d?"":d})),500)}),[d]),(0,h.jsx)("form",{onSubmit:e=>{e.preventDefault()},children:(0,h.jsxs)(u.Wi,{children:[(0,h.jsx)(u.lX,{htmlFor:"OrganizationSearchFormInput",children:"Zoek op naam"}),(0,h.jsx)(u.fE,{id:"OrganizationSearchFormInput",...o("name",{required:!0}),invalid:r.name})]})})};var j=t(3417);const x=e=>{let{organizations:n}=e;return(0,h.jsx)("div",{className:"CardsOrganizationDisplayTemplate-module--componentsGrid--7b0b0",children:n.map((e=>{var n,t,i,o,a,s;return(0,h.jsx)(h.Fragment,{children:e._self.schema.ref.includes("organisation.schema.json")&&(0,h.jsx)(j.$,{title:{label:e.name,href:`/organizations/${e.id}`},description:e.description,website:e.website,logo:e.logo,components:{owned:null!==(n=null===(t=e.owns)||void 0===t?void 0:t.length.toString())&&void 0!==n?n:"0",supported:null!==(i=null===(o=e.supports)||void 0===o?void 0:o.length.toString())&&void 0!==i?i:"0",used:null!==(a=null===(s=e.uses)||void 0===s?void 0:s.length.toString())&&void 0!==a?a:"0"},gitHub:e.github,gitLab:e.gitlab,type:e.type})})}))})};var v=t(1700),b=t.n(v),f="TableOrganizationDisplayTemplate-module--tagWidth--6bf88",O=t(1082),y=t(6505),z=t(7882),T=t(7606),w=t(3168),C=t(7920),N=t(7898),D=t(5067),I=t(192);const k=e=>{let{organizations:n,hideTableHead:t}=e;const{t:a}=(0,s.$)(),{screenSize:l}=i.useContext(I.h);return(0,h.jsx)(o.y6,{touchScreen:"tablet"===l||"mobile"===l,children:(0,h.jsxs)(u.iA,{children:[!t&&(0,h.jsx)(u.xD,{children:(0,h.jsxs)(u.SC,{children:[(0,h.jsx)(u.xs,{children:a("Name")}),(0,h.jsx)(u.xs,{children:a("Sources")}),(0,h.jsxs)(u.xs,{"data-tooltip-id":D.TOOLTIP_ID,"data-tooltip-content":a("Owned, supported and used components"),className:"TableOrganizationDisplayTemplate-module--componentsHeader--1d681",children:[a("Components"),(0,h.jsx)(T.G,{icon:w.sqG})]}),(0,h.jsx)(u.xs,{children:a("Website")}),(0,h.jsx)(u.xs,{children:a("GitHub/Gitlab")}),(0,h.jsx)(u.xD,{})]})}),(0,h.jsxs)(u.RM,{children:[n.length>0&&n.map((e=>{var n,t,i,o,s,l,r,d,c,p,g,m,j;return(0,h.jsxs)(u.SC,{className:"TableOrganizationDisplayTemplate-module--tableRow--32465",onClick:()=>{var n;return(0,O.c4)(`/${(0,z.J)(null===(n=e._self)||void 0===n?void 0:n.schema.ref)}/${e.id}`)},children:[(0,h.jsx)(u.pj,{children:(0,h.jsx)("span",{className:"TableOrganizationDisplayTemplate-module--name--223d3",children:e.name})}),(0,h.jsx)(u.pj,{children:(0,h.jsx)(u.Ou,{"data-tooltip-id":D.TOOLTIP_ID,"data-tooltip-content":a("Sources"),className:f,children:b()(null!==(n=e._self)&&void 0!==n&&n.synchronizations?null!==(t=e._self)&&void 0!==t&&null!==(i=t.synchronizations)&&void 0!==i&&i.length?null===(o=e._self)||void 0===o||null===(s=o.synchronizations)||void 0===s||null===(l=s.at(-1))||void 0===l?void 0:l.source.name:"Onbekend":"N.V.T.")})}),(0,h.jsx)(u.pj,{children:(0,h.jsxs)("div",{className:"TableOrganizationDisplayTemplate-module--tags--97025",children:[(0,h.jsxs)(u.Ou,{"data-tooltip-id":D.TOOLTIP_ID,"data-tooltip-content":"Aantal eigen componenten",className:f,children:[(0,h.jsx)(T.G,{icon:w.Ans}),null!==(r=null===(d=e.owns)||void 0===d?void 0:d.length.toString())&&void 0!==r?r:"0"]}),(0,h.jsxs)(u.Ou,{"data-tooltip-id":D.TOOLTIP_ID,"data-tooltip-content":"Aantal ondersteunde componenten",className:f,children:[(0,h.jsx)(T.G,{icon:w.gNZ}),null!==(c=null===(p=e.supported)||void 0===p?void 0:p.length.toString())&&void 0!==c?c:"0"]}),(0,h.jsxs)(u.Ou,{"data-tooltip-id":D.TOOLTIP_ID,"data-tooltip-content":"Aantal gebruikte componenten",className:f,children:[(0,h.jsx)(T.G,{icon:w.jHE}),null!==(g=null===(m=e.used)||void 0===m?void 0:m.length.toString())&&void 0!==g?g:"0"]})]})}),(0,h.jsx)(u.pj,{children:(0,h.jsxs)(u.Ou,{"data-tooltip-id":D.TOOLTIP_ID,"data-tooltip-content":null!==(j=e.website)&&void 0!==j?j:a("Website"),className:f,onClick:()=>open(e.website),children:[e.website&&(0,h.jsx)(T.G,{icon:w.g4A}),b()(e.website?a("Website"):a("Not found"))]})}),(0,h.jsxs)(u.pj,{children:[e.github&&(0,h.jsxs)(u.Ou,{"data-tooltip-id":D.TOOLTIP_ID,"data-tooltip-content":"GitHub",className:f,onClick:()=>open(e.github),children:[(0,h.jsx)(C.c,{}),a("GitHub")]}),e.gitlab&&(0,h.jsxs)(u.Ou,{"data-tooltip-id":D.TOOLTIP_ID,"data-tooltip-content":"GitLab",className:f,onClick:()=>open(e.gitlab),children:[(0,h.jsx)(N.W,{}),a("GitLab")]}),!e.github&&!e.gitlab&&(0,h.jsx)(u.Ou,{"data-tooltip-id":D.TOOLTIP_ID,"data-tooltip-content":a("Repository"),className:f,children:a("Not found")})]}),(0,h.jsx)(u.pj,{children:(0,h.jsxs)(u.rU,{onClick:()=>{var n,t;return(0,O.c4)(`/${(0,z.J)(null===(n=e._self)||void 0===n||null===(t=n.schema)||void 0===t?void 0:t.ref)}/${e.id}`)},className:"TableOrganizationDisplayTemplate-module--detailsLink--7e96e",children:[(0,h.jsx)(u.JO,{children:(0,h.jsx)(y.Z,{})}),a("Details")]})})]},e.id)})),!n.length&&(0,h.jsxs)(u.SC,{children:[(0,h.jsx)(u.pj,{children:a("Geen resultaten gevonden")}),(0,h.jsx)(u.pj,{}),(0,h.jsx)(u.pj,{}),(0,h.jsx)(u.pj,{}),(0,h.jsx)(u.pj,{}),(0,h.jsx)(u.pj,{}),(0,h.jsx)(u.pj,{}),(0,h.jsx)(u.pj,{})]})]})]})})},S=e=>{let{organizations:n,type:t}=e;switch(t){case"table":return(0,h.jsx)(k,{organizations:n});case"cards":return(0,h.jsx)(x,{organizations:n})}},L=()=>{var e,n,t,g,j;const[x,v]=i.useContext(a.oh),{t:b}=(0,s.$)(),f=new l.QueryClient,O=(0,p.o)(f).getAll({...x,organizationsResultDisplayLayout:"cards"});return(0,h.jsxs)(o.W2,{layoutClassName:"OrganizationsTemplate-module--container--ad6b9",children:[(0,h.jsxs)("div",{className:"OrganizationsTemplate-module--header--5b5ac",children:[(0,h.jsx)("div",{children:(0,h.jsx)(u.X6,{level:2,className:"OrganizationsTemplate-module--title--e0b49",children:"Organizations"})}),(0,h.jsx)(c.Z,{resultsDisplayType:"organizationsResultDisplayLayout"})]}),(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:"OrganizationsTemplate-module--results--f7087",children:[(0,h.jsx)(m,{}),0===(null===(e=O.data)||void 0===e||null===(n=e.results)||void 0===n?void 0:n.length)&&!O.isLoading&&(0,h.jsx)("span",{children:b("No organizations found")}),(null===(t=O.data)||void 0===t?void 0:t.results)&&(null===(g=O.data)||void 0===g||null===(j=g.results)||void 0===j?void 0:j.length)>0&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(S,{organizations:O.data.results,type:x.organizationsResultDisplayLayout}),O.data.results.length&&(0,h.jsx)(d.R,{pages:O.data.pages,currentPage:O.data.page,setPage:e=>v({...x,organizationCurrentPage:e}),pageRangeDisplayed:2,containerClassName:"OrganizationsTemplate-module--paginationContainer--1809a"})]}),O.isLoading&&(0,h.jsx)(r.Z,{height:"200px"})]})})]})};var _=()=>(0,h.jsx)(L,{})},7882:function(e,n,t){t.d(n,{J:function(){return i}});const i=e=>e.includes("organisation.schema.json")?"organizations":e.includes("component.schema.json")?"components":e.includes("application.schema.json")?"applications":e.includes("contacts.schema.json")?"contacts":e.includes("componentlegalentity.schema.json")?"componentlegalentities":void 0}}]);
//# sourceMappingURL=2a833a263c530a88fac6954b760df4eebfd22a18-a567b78377950643912d.js.map
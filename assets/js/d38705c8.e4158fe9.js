"use strict";(self.webpackChunkagbero_docs=self.webpackChunkagbero_docs||[]).push([[959],{9332:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"driver/trip-management","title":"Trip Management","description":"This section outlines the process for accessing trip-related data for drivers within the Agbero ride-booking platform. While most trip operations are handled via the Agbero Driver App, developers can retrieve a driver\'s trip history through the provided API.","source":"@site/docs/driver/trip-management.md","sourceDirName":"driver","slug":"/driver/trip-management","permalink":"/agbero-docs/driver/trip-management","draft":false,"unlisted":false,"editUrl":"https://github.com/Ninvana-Tech/agbero-docs/docs/driver/trip-management.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Driver Management","permalink":"/agbero-docs/category/driver-management"},"next":{"title":"User Management","permalink":"/agbero-docs/driver/user-management"}}');var i=t(4848),s=t(8453);const o={sidebar_position:3},a="Trip Management",d={},h=[{value:"Authentication",id:"authentication",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Get Driver Trip History",id:"get-driver-trip-history",level:3},{value:"Request Headers:",id:"request-headers",level:4},{value:"Query Parameters:",id:"query-parameters",level:4},{value:"Responses:",id:"responses",level:4}];function c(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"trip-management",children:"Trip Management"})}),"\n",(0,i.jsxs)(r.p,{children:["This section outlines the process for accessing trip-related data for drivers within the Agbero ride-booking platform. While most trip operations are handled via the ",(0,i.jsx)(r.strong,{children:"Agbero Driver App"}),", developers can retrieve a driver's trip history through the provided API."]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsx)(r.p,{children:"To access the trip history API, an API token is required. The supported authentication scheme includes:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Bearer Authentication"}),": Use the token in the ",(0,i.jsx)(r.code,{children:"Authorization"})," header for protected endpoints."]}),"\n"]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.admonition,{title:"Note",type:"info",children:(0,i.jsxs)(r.p,{children:["Trip management, such as accepting rides, starting trips, and completing trips, is handled exclusively through the ",(0,i.jsx)(r.strong,{children:"Agbero Driver App"}),", available on the Play Store. Developers integrating the API do not need to implement these functionalities. However, you can still retrieve trip history for reporting or analytics purposes through the API."]})}),"\n",(0,i.jsx)(r.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,i.jsx)(r.h3,{id:"get-driver-trip-history",children:"Get Driver Trip History"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"GET"})," ",(0,i.jsx)(r.code,{children:"/api/v1/driver/trips"})]}),"\n",(0,i.jsx)(r.p,{children:"Retrieve the trip history for a driver."}),"\n",(0,i.jsx)(r.h4,{id:"request-headers",children:"Request Headers:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-json",children:'{\n  "Authorization": "Bearer {access_token}"\n}\n'})}),"\n",(0,i.jsx)(r.h4,{id:"query-parameters",children:"Query Parameters:"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Parameter"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"page"})}),(0,i.jsx)(r.td,{children:"Number"}),(0,i.jsx)(r.td,{children:"(Optional) The page number for pagination."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"limit"})}),(0,i.jsx)(r.td,{children:"Number"}),(0,i.jsx)(r.td,{children:"(Optional) The number of results per page."})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"responses",children:"Responses:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"200 OK"}),": Returns the driver's trip history.","\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-json",children:'{\n  "trips": [\n    {\n      "tripId": "67112e9c1fe929c1491c9f16",\n      "startLocation": "123 Main St",\n      "endLocation": "456 Elm St",\n      "fare": 1500,\n      "status": "completed",\n      "date": "2024-11-18T14:30:00Z"\n    },\n    ...\n  ],\n  "pagination": {\n    "page": 1,\n    "limit": 10,\n    "total": 45\n  }\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"401 Unauthorized"}),": Invalid or missing access token."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"400 Bad Request"}),": Invalid query parameters."]}),"\n"]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.p,{children:"For further assistance, please contact our support team."})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var n=t(6540);const i={},s=n.createContext(i);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);
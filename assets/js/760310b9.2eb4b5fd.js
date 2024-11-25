"use strict";(self.webpackChunkagbero_docs=self.webpackChunkagbero_docs||[]).push([[623],{4678:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"driver/user-management","title":"User Management","description":"This section outlines the API and process for driver authentication and management within the Agbero ride-booking platform. Drivers can register, log in, reset passwords, and manage their profiles through these endpoints.","source":"@site/docs/driver/user-management.md","sourceDirName":"driver","slug":"/driver/user-management","permalink":"/agbero-docs/driver/user-management","draft":false,"unlisted":false,"editUrl":"https://github.com/Ninvana-Tech/agbero-docs/docs/driver/user-management.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Trip Management","permalink":"/agbero-docs/driver/trip-management"}}');var i=r(4848),s=r(8453);const o={sidebar_position:3},a="User Management",d={},c=[{value:"Authentication",id:"authentication",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Driver Signup",id:"driver-signup",level:3},{value:"Request Body:",id:"request-body",level:4}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"user-management",children:"User Management"})}),"\n",(0,i.jsx)(n.p,{children:"This section outlines the API and process for driver authentication and management within the Agbero ride-booking platform. Drivers can register, log in, reset passwords, and manage their profiles through these endpoints."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsx)(n.p,{children:"To access the driver APIs, an API token is required. The supported authentication schemes include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bearer Authentication"}),": Use the token in the ",(0,i.jsx)(n.code,{children:"Authorization"})," header for protected endpoints."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"info",children:(0,i.jsx)(n.p,{children:"Driver accounts are primarily managed via the Agbero Driver App, available on the Play Store. This simplifies onboarding and management for developers. However, you can still perform operations like account creation, updates, and management through the provided API endpoints if required."})}),"\n",(0,i.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,i.jsx)(n.h3,{id:"driver-signup",children:"Driver Signup"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"POST"})," ",(0,i.jsx)(n.code,{children:"/api/v1/driver/signup"})]}),"\n",(0,i.jsx)(n.p,{children:"Registers a new driver to the platform under the specified merchant."}),"\n",(0,i.jsx)(n.h4,{id:"request-body",children:"Request Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "merchant_id": "12345abcd",\n  "name": "John Doe",\n  "email": "driver@example.com",\n  "password": "secure-password",\n  "license_number": "L12345678",\n  "vehicle_details": {\n    "model": "Toyota Camry",\n    "plate_number": "ABC-1234"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"For further assistance, please contact our support team."})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(6540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
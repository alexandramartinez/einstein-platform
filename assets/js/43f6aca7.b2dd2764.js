"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[9296],{5378:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(74848),s=t(28453);const i={slug:"ibm",authors:["tatedorman"],tags:["ibm","llm-open-connector"],date:new Date("2024-10-18T00:00:00.000Z")},r="LLM Open Connector + watsonx",l={permalink:"/einstein-platform/ibm",source:"@site/cookbook/llm-open-connector-ibm.md",title:"LLM Open Connector + watsonx",description:"Learn how to implement Salesforce's LLM Open Connector with the IBM watsonx platform.",date:"2024-10-18T00:00:00.000Z",tags:[{inline:!1,label:"ibm",permalink:"/einstein-platform/tags/ibm"},{inline:!1,label:"llm-open-connector",permalink:"/einstein-platform/tags/llm-open-connector"}],readingTime:3.175,hasTruncateMarker:!0,authors:[{name:"Tate",title:"Technical Writer @ Salesforce",url:"https://github.com/tatedorman",page:{permalink:"/einstein-platform/authors/tatedorman"},socials:{github:"https://github.com/tatedorman"},imageURL:"https://github.com/tatedorman.png",key:"tatedorman"}],frontMatter:{slug:"ibm",authors:["tatedorman"],tags:["ibm","llm-open-connector"],date:"2024-10-18T00:00:00.000Z"},unlisted:!1,prevItem:{title:"LLM Open Connector + SambaNova",permalink:"/einstein-platform/sambanova"}},a={authorsImageUrls:[void 0]},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1. Create Your watsonx Instance",id:"step-1-create-your-watsonx-instance",level:2},{value:"Step 2. Verify Your Open Connector Implementation (Optional)",id:"step-2-verify-your-open-connector-implementation-optional",level:2},{value:"Step 3. Create a BYOLLM Connection to the watsonx Model in Einstein Studio",id:"step-3-create-a-byollm-connection-to-the-watsonx-model-in-einstein-studio",level:2},{value:"Step 4. Create a Configured Model",id:"step-4-create-a-configured-model",level:2},{value:"See Also",id:"see-also",level:2}];function d(e){const n={a:"a",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Learn how to implement Salesforce's ",(0,o.jsx)(n.a,{href:"/docs/apis/llm-open-connector/",children:"LLM Open Connector"})," with the IBM watsonx platform."]}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A Salesforce org with Einstein Generative AI and Data Cloud enabled."}),"\n",(0,o.jsx)(n.li,{children:"A Salesforce Einstein Studio Environment."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-1-create-your-watsonx-instance",children:"Step 1. Create Your watsonx Instance"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Create an account."})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If you don\u2019t already have one, ",(0,o.jsx)(n.a,{href:"https://dataplatform.cloud.ibm.com/registration/stepone?context=wx",children:"create a watsonx trial account"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"If you have an existing, non-trial watsonx account, you\u2019ll need to follow these additional steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["In IBM Cloud, ",(0,o.jsx)(n.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/console/wdp_admin_cos.html?context=wx&audience=wdp",children:"set up IBM Cloud Object Storage for use with IBM watsonx"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/getting-started/set-up-ws.html?context=wx&audience=wdp",children:"Set up the Watson Studio and Watson Machine Learning"})," services."]}),"\n",(0,o.jsxs)(n.li,{children:["Create a new project from the ",(0,o.jsx)(n.a,{href:"https://dataplatform.cloud.ibm.com/projects/?context=wx",children:"IBM watsonx console"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Find your Project ID value."})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["In your sandbox, click on the ",(0,o.jsx)(n.strong,{children:"Manage"})," tab and copy your Project ID value."]}),"\n",(0,o.jsx)(n.li,{children:"Store the project-id value. You\u2019ll need this value along with an API key and a region-id in step three."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Create an IBM Cloud API Key."})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["In the IBM Cloud console, go to ",(0,o.jsx)(n.strong,{children:"Manage"})," > ",(0,o.jsx)(n.strong,{children:"Access (IAM)"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["In the sidebar, select ",(0,o.jsx)(n.strong,{children:"API Keys"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Enter a name and description for your API key."}),"\n",(0,o.jsxs)(n.li,{children:["Then, click ",(0,o.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Store your API key in a safe location."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Get the region value for the watsonx instance."})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"From the watsonx home page, check the region in the header bar."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"IBM region id value",src:t(31534).A+"",width:"460",height:"312"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Store the region-id value."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-2-verify-your-open-connector-implementation-optional",children:"Step 2. Verify Your Open Connector Implementation (Optional)"}),"\n",(0,o.jsx)(n.p,{children:"IBM automatically provides a working implementation of the Open Connector for watsonx that you can use to test this workflow. If you want to create your own implementation for production use cases, follow these steps. Otherwise, skip to step three."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Create your own connector implementation for watsonx. For directions and code, see ",(0,o.jsx)(n.a,{href:"https://ibm.biz/eebl-salesforce-watsonx-apic-connector-code",children:"IBM's watsonx connector repo"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-3-create-a-byollm-connection-to-the-watsonx-model-in-einstein-studio",children:"Step 3. Create a BYOLLM Connection to the watsonx Model in Einstein Studio"}),"\n",(0,o.jsx)(n.p,{children:"Before you connect your Open Connector implementation to Einstein Studio, you\u2019ll need three pieces of information from Step 1: project-id, API key, and region-id."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Log into your Salesforce org as an admin user and open Einstein Studio."}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Model Library"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Add Foundation Model"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Add a Foundation Model",src:t(82037).A+"",width:"2402",height:"304"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["In Model Builder, click ",(0,o.jsx)(n.strong,{children:"Connect to your LLM"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Connect to your LLM",src:t(45505).A+"",width:"1776",height:"1478"})}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Enter the details of your watsonx instance.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Name: IBM Granite (or your own preferred name)"}),"\n",(0,o.jsxs)(n.li,{children:["URL:  if you are using the connector hosted by IBM, get the URL from ",(0,o.jsx)(n.a,{href:"https://ibm.biz/eebl-salesforce-watsonx-apic-connector-code",children:"IBM's watsonx connector repo"}),". Otherwise, use the URL from the connector instance that you have created from the code and documentation in ",(0,o.jsx)(n.a,{href:"https://ibm.biz/eebl-salesforce-watsonx-apic-connector-code",children:"the watsonx repo"}),". When filling out the URL value, be sure to use the project-id and region-id that you copied from step 1."]}),"\n",(0,o.jsx)(n.li,{children:"Authentication: Key Based"}),"\n",(0,o.jsx)(n.li,{children:"Auth Header: X-IBM-API-KEY"}),"\n",(0,o.jsx)(n.li,{children:"Key: [your IBM API key]"}),"\n",(0,o.jsx)(n.li,{children:"Model Name/ID:  ibm/granite-13b-chat-v2 (Or the specific model ID you want to connect to, refer to watsonx model IDs from your IBM watsonx console.)"}),"\n",(0,o.jsx)(n.li,{children:"Token Limit: 8,192 (Or the specified model's maximum context length. Refer to the watsonx model IDs from you IBM watsonx console.)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Example IBM Granite connection",src:t(24277).A+"",width:"2350",height:"1384"})}),"\n",(0,o.jsxs)(n.ol,{start:"7",children:["\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Connect"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Name and Connect"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-4-create-a-configured-model",children:"Step 4. Create a Configured Model"}),"\n",(0,o.jsx)(n.p,{children:"Before you can use your connected LLM, you need to create a configured model."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["In the Model Library in Einstein Studio, select ",(0,o.jsx)(n.strong,{children:"Configure Foundation Model"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Select ",(0,o.jsx)(n.strong,{children:"Create Model"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Choose your connected LLM from the \u201cFoundation Model\u201d dropdown."}),"\n",(0,o.jsx)(n.li,{children:"Configure the model parameters."}),"\n",(0,o.jsx)(n.li,{children:"Test the model performance in the model playground."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can now use your LLM wherever you can use Einstein Studio generative models. For instance, you can build prompt templates using ",(0,o.jsx)(n.a,{href:"https://www.google.com/url?q=https://help.salesforce.com/s/articleView?id%3Dsf.prompt_builder_about.htm&sa=D&source=docs&ust=1729008016102516&usg=AOvVaw29nKsztGMWSoa59DEIFXZJ",children:"Prompt Builder"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"see-also",children:"See Also"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsxs)(n.a,{href:"https://ibm.biz/eebl-salesforce-watsonx-apic-connector-code",children:[(0,o.jsx)(n.em,{children:"External:"})," IBM watsonx Repo"]})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsxs)(n.a,{href:"https://dsce.ibm.com/wizard/watsonx/results/watsonx-use-watsonx-ai-models-from-salesforce#",children:[(0,o.jsx)(n.em,{children:"Interactive Demo:"})," Use watsonx AI models from Salesforce"]})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsxs)(n.a,{href:"https://help.salesforce.com/s/articleView?id=sf.c360_a_ai_foundation_models_create.htm&type=5",children:[(0,o.jsx)(n.em,{children:"Salesforce Help:"})," Add a Foundation Model"]})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},24277:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/ibm-granite-connection-a564f3aa6202dc1dfe88855ac53a6c0c.png"},45505:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/ibm-model-builder-492fa909aeb06bc34857d32bbe1edc80.png"},82037:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/ibm-model-library-a9a45f9ecaf52c556a5a6cf306babd50.png"},31534:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/ibm-region-id-6b80d5fa2f1395bb5e57dfc4822b0ea9.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var o=t(96540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);
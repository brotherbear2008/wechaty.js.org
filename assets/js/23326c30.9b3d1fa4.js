"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[1375],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return y}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(a),y=r,d=h["".concat(i,".").concat(y)]||h[y]||l[y]||o;return a?n.createElement(d,p(p({ref:t},u),{},{components:a})):n.createElement(d,p({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var s=2;s<o;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},68023:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),p=["components"],c={title:"Architecture"},i=void 0,s={unversionedId:"explanations/architecture",id:"explanations/architecture",isDocsHomePage:!1,title:"Architecture",description:"Puppet Structure",source:"@site/docs/explanations/architecture.md",sourceDirName:"explanations",slug:"/explanations/architecture",permalink:"/docs/explanations/architecture",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/explanations/architecture.md",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1631298410,formattedLastUpdatedAt:"9/10/2021",frontMatter:{title:"Architecture"},sidebar:"docs",previous:{title:"Concepts",permalink:"/docs/explanations/concepts"},next:{title:"Alternatives",permalink:"/docs/explanations/alternatives"}},u=[],l={toc:u};function h(e){var t=e.components,c=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Puppet Structure",src:a(59736).Z})),(0,o.kt)("p",null,"When building a chatbot, the choice of architecture model used is informed primarily by the core purpose of the project. In the Wechaty ecosystem, there are several interrelated and interdependent components that constitute a chatbot. Highlighted below are some of these key components. It is important to understand them and how they fit together to take full advantage of the features offered by the Wechaty ecosystem."),(0,o.kt)("p",null,"The following diagram shows out that we can reuse almost everything in TypeScript, and what we need to do is only the block located at the top right of the diagram: ",(0,o.kt)("inlineCode",{parentName:"p"},"Wechaty (Polyglot)"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ascii"},"  +--------------------------+ +--------------------------+\n  |                          | |                          |\n  |   Wechaty (TypeScript)   | |    Wechaty(Polyglot)     |\n  |                          | |  Python, Go, Rust, etc.  |\n  +--------------------------+ +--------------------------+\n\n  +-------------------------------------------------------+\n  |                 Wechaty Puppet Service                |\n  |                                                       |\n  |                (wechaty-puppet-service)               |\n  +-------------------------------------------------------+\n\n+---------------------  wechaty_grpc  ----------------------+\n\n  +-------------------------------------------------------+\n  |                   Wechaty Puppet                      |\n  |                                                       |\n  |                   (wechaty-puppet)                    |\n  +-------------------------------------------------------+\n\n  +--------------------------+ +--------------------------+\n  |      Pad Protocol        | |      Web Protocol        |\n  |                          | |                          |\n  | wechaty-puppet-padlocal  | |  (wechaty-puppet-wechat) |\n  +--------------------------+ +--------------------------+\n  +--------------------------+ +--------------------------+\n  |     Friday Protocol      | |       Mac Protocol       |\n  |                          | |                          |\n  |  (wechaty-puppet-frida)  | |   (wechaty-puppet-mac)   |\n  +--------------------------+ +--------------------------+\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Chart made by ",(0,o.kt)("a",{parentName:"p",href:"http://asciiflow.com/"},"AsciiFlow"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Instant Messaging platforms")),(0,o.kt)("p",{parentName:"li"},"With Wechaty, you can build chatbots for Instant Messaging systems such as Wechat and Whatsapp among others. They constitute the front-end interface your clients will interact with. One prominent advantage Wechaty has over other SDKs is that you write code once and use the same code for all Instant Messaging platforms. Your source code should work for different IM service tokens without making any changes to the codebase. What is required is just switching the service token and environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"WECHATY_PUPPET"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Wechaty Puppet")),(0,o.kt)("p",{parentName:"li"},"Wechaty Puppet is a standard for maintaining compatibility between Instant Messaging(IM) systems. Wechaty Puppet defines the universal Instant Messaging interface for compatibility between Wechaty API and variants of IM systems.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Wechaty Puppet Providers")),(0,o.kt)("p",{parentName:"li"},"Wechaty puppet provider refers to RPA module used for connecting Wechaty API to the corresponding Instant Messaging platform bot account. Each supported Instant Messaging system has its own Puppet provider. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-providers/"},"Puppet Providers")," section for a complete list of puppet providers."),(0,o.kt)("p",{parentName:"li"},"For example, the Wechaty Puppet Provider for WeChat is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-wechat"},"wechaty-puppet-wechat"),", that for Whatsapp is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-whatsapp"},"wechaty-puppet-whatsapp"),", and for Lark is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-lark"},"wechaty-puppet-lark"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Wechaty Puppet Service")),(0,o.kt)("p",{parentName:"li"},"Wechaty Puppet Service is gRPC for Wechaty Puppet Provider. For example, we can cloudify the Wechaty Puppet Provider wechaty-puppet-padlocal to a Wechaty Puppet Service by running our Wechaty Puppet Service Token Gateway.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Wechaty gRPC")),(0,o.kt)("p",{parentName:"li"},"Initially, Wechaty was built using TypeScript. Support for other languages such as Python, Go, Java, PHP, .NET, and Scala was later introduced in 2020 so that chatbot makers can build chatbots in their preferred language. This version of Wechaty which offers multi-language support is referred to as ",(0,o.kt)("strong",{parentName:"p"},"Wechaty polyglot"),". The introduction of Wechaty polyglot however came with its challenges because all Wechaty puppet providers were built using TypeScript and delivered via npm. Translating all of them to the languages supported by Wechaty polyglot was a monumental challenge. To solve this problem, Wechaty gRPC was created. The goal of Wechaty RPC is to ",(0,o.kt)("em",{parentName:"p"},"cloudify")," Wechaty Puppet Providers. It ensures we can use the Wechaty Puppet Providers remotely via network and Polyglot Wechaty can use the Wechaty Puppet API from the TypeScript ecosystem."))))}h.isMDXComponent=!0},59736:function(e,t,a){t.Z=a.p+"assets/images/architecture-ef4e78c0bf9d9b359328f3de8751ebb1.png"}}]);
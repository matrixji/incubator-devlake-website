"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1763],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=r,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return n?o.createElement(d,a(a({ref:t},c),{},{components:n})):o.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},588:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:2,title:"Contributing to Issues"},u="Contributing to Issues",l={unversionedId:"make-contribution/fix-or-create-issues",id:"make-contribution/fix-or-create-issues",title:"Contributing to Issues",description:"@Klesh",source:"@site/community/make-contribution/fix-or-create-issues.md",sourceDirName:"make-contribution",slug:"/make-contribution/fix-or-create-issues",permalink:"/community/make-contribution/fix-or-create-issues",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Contributing to Issues"},sidebar:"communitySidebar",previous:{title:"Blog Submission",permalink:"/community/make-contribution/BlogSubmission"},next:{title:"Development Workflow",permalink:"/community/make-contribution/development-workflow"}},c={},p=[],f={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing-to-issues"},"Contributing to Issues"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"@Klesh")),(0,i.kt)("p",null,"Last week(2022-05-12), we had 2 designated Good First Issues listed out for everyone\nin a First Come, First Served manner, which was fun, and they were taken almost instantly...\nbut not so fun for those who were interested and failed to get one."),(0,i.kt)("p",null,"So, we decided, no more competition, you can pick whatever\nyou like from our github issue pages, or even create your own one if no more left!\nWe are community after all!"),(0,i.kt)("p",null,"Now, how do we proceed? It's simple! Go to our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22"},"issues page"),", and then click here. all our Good First Issue are listed out here.\n",(0,i.kt)("img",{alt:"good first issue",src:n(6198).Z,width:"1320",height:"266"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Firstly, go for existing issues if any, find one that you like,\nyou can claim it by sending comment like "I\'ll take it",\nyou can choose to write a Plan of Attack to show your understanding of the problem and\nwhat steps would you take to solve the problem, and then start working on PR for the issue. ')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Secondly, what if no more GFI left? yes, that is the most import part.\nCreate your own issues! Now, by looking into our code base,\nyou can definitely find many problem, like documentation, unit-test, even typo.\nFile issues for things you don't feel right, and we will verify if it is valid,\nand then you can work on it. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Finally, you may ask, why do I go through all these troubles to write code for you?\nNo, you don't code for us, you code for everyone in the community, you code for yourself,\nfor your skills, to learn how to cooperate with others. And for those who made significant contribution,",(0,i.kt)("br",{parentName:"p"}),"\n","we offer you, a seat of Apache Committer, or even PPMC."))),(0,i.kt)("p",null,"That's all, feel free to ask any questions. And Happy Coding!"))}m.isMDXComponent=!0},6198:function(e,t,n){t.Z=n.p+"assets/images/issue_page_screenshot-4aa3f48811d5bc6aa1a36ce71727344c.png"}}]);
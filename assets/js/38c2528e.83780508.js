"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2983],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),l=s(r),d=o,f=l["".concat(c,".").concat(d)]||l[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},5199:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],u={sidebar_position:2,title:"Commit Count by Author",description:"DevLake Live Demo\n"},c="Commit Count by Author",s={unversionedId:"Dashboards/CommitCountByAuthor",id:"Dashboards/CommitCountByAuthor",title:"Commit Count by Author",description:"DevLake Live Demo\n",source:"@site/docs/08-Dashboards/CommitCountByAuthor.md",sourceDirName:"08-Dashboards",slug:"/Dashboards/CommitCountByAuthor",permalink:"/docs/Dashboards/CommitCountByAuthor",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/08-Dashboards/CommitCountByAuthor.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Commit Count by Author",description:"DevLake Live Demo\n"},sidebar:"docsSidebar",previous:{title:"GitHub Basic Metrics",permalink:"/docs/Dashboards/GitHubBasic"},next:{title:"Weekly Bug Retro",permalink:"/docs/Dashboards/WeeklyBugRetro"}},m={},p=[],l={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"commit-count-by-author"},"Commit Count by Author"),(0,i.kt)("iframe",{src:"https://grafana-lake.demo.devlake.io/d/F0iYknc7z/demo-commit-count-by-author?orgId=1&from=1634911190615&to=1650635990615",width:"100%",height:"820px"}))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[77466],{22719:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=i(87462),n=(i(67294),i(3905));i(61839);const s={title:"Incident Count per 1k Lines of Code",description:"Incident Count per 1k Lines of Code\n",sidebar_position:13},r=void 0,a={unversionedId:"Metrics/IncidentCountPer1kLinesOfCode",id:"version-v0.13/Metrics/IncidentCountPer1kLinesOfCode",title:"Incident Count per 1k Lines of Code",description:"Incident Count per 1k Lines of Code\n",source:"@site/versioned_docs/version-v0.13/Metrics/IncidentCountPer1kLinesOfCode.md",sourceDirName:"Metrics",slug:"/Metrics/IncidentCountPer1kLinesOfCode",permalink:"/docs/v0.13/Metrics/IncidentCountPer1kLinesOfCode",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/Metrics/IncidentCountPer1kLinesOfCode.md",tags:[],version:"v0.13",sidebarPosition:13,frontMatter:{title:"Incident Count per 1k Lines of Code",description:"Incident Count per 1k Lines of Code\n",sidebar_position:13},sidebar:"docsSidebar",previous:{title:"PR Merge Rate",permalink:"/docs/v0.13/Metrics/MergeRate"},next:{title:"Commit Author Count",permalink:"/docs/v0.13/Metrics/CommitAuthorCount"}},d={},l=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],c={toc:l};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,n.kt)("p",null,"Amount of incidents per 1,000 lines of code."),(0,n.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Defect drill-down analysis to inform the development of design and code review strategies and to improve the internal QA process"),(0,n.kt)("li",{parentName:"ol"},"Assist teams to locate projects/modules with higher defect severity and density, and clean up technical debts"),(0,n.kt)("li",{parentName:"ol"},"Analyze critical points, identify good/to-be-improved practices that affect defect count or defect rate, to reduce the amount of future defects")),(0,n.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,n.kt)("p",null,"The number of incidents divided by total accumulated lines of code (additions + deletions) in the given data range."),(0,n.kt)("b",null,"Data Sources Required"),(0,n.kt)("p",null,"This metric relies on "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"issues collected from Jira, GitHub or TAPD."),(0,n.kt)("li",{parentName:"ul"},"commits collected from GitHub, GitLab or BitBucket.")),(0,n.kt)("b",null,"Transformation Rules Required"),(0,n.kt)("p",null,"This metric relies on"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"Issue type mapping" in Jira, GitHub or TAPD\'s transformation rules page to let DevLake know what type(s) of issues can be regarded as incidents.'),(0,n.kt)("li",{parentName:"ul"},'"PR-Issue Mapping" in GitHub, GitLab\'s transformation rules page to let DevLake know the bugs are fixed by which PR/MRs.')),(0,n.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the project or team dimension, observe the statistics on the total number of defects, the distribution of the number of defects in each severity level/type/owner, the cumulative trend of defects, and the change trend of the defect rate in thousands of lines, etc."),(0,n.kt)("li",{parentName:"ol"},"From version cycle dimension, observe the statistics on the cumulative trend of the number of defects/defect rate, which can be used to determine whether the growth rate of defects is slowing down, showing a flat convergence trend, and is an important reference for judging the stability of software version quality"),(0,n.kt)("li",{parentName:"ol"},"From the time dimension, analyze the trend of the number of test defects, defect rate to locate the key items/key points"),(0,n.kt)("li",{parentName:"ol"},"Evaluate whether the software quality and test plan are reasonable by referring to CMMI standard values")))}u.isMDXComponent=!0}}]);
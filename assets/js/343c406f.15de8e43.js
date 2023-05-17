"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[40095],{49323:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var s=i(87462),o=(i(67294),i(3905));i(61839);const n={title:"Code Quality Test",description:"Code Quality Test\n",sidebar_position:31},a=void 0,r={unversionedId:"Metrics/CQTest",id:"version-v0.16/Metrics/CQTest",title:"Code Quality Test",description:"Code Quality Test\n",source:"@site/versioned_docs/version-v0.16/Metrics/CQTest.md",sourceDirName:"Metrics",slug:"/Metrics/CQTest",permalink:"/docs/v0.16/Metrics/CQTest",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.16/Metrics/CQTest.md",tags:[],version:"v0.16",sidebarPosition:31,frontMatter:{title:"Code Quality Test",description:"Code Quality Test\n",sidebar_position:31},sidebar:"docsSidebar",previous:{title:"Code Quality Issue Count",permalink:"/docs/v0.16/Metrics/CQIssueCount"},next:{title:"Code Quality Maintainability-Debt",permalink:"/docs/v0.16/Metrics/CQMaintainability-Debt"}},c={},l=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2}],d={toc:l};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,s.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,o.kt)("p",null,"This metric is the number of unit tests that have been executed against the code. This metric is collected from SonarQube, check ",(0,o.kt)("a",{parentName:"p",href:"https://docs.sonarqube.org/latest/user-guide/metric-definitions/#tests"},"this doc")," for detailed definition."),(0,o.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,o.kt)("p",null,"Test is an indicator used to indicate the test coverage of the code. This means that SonarQube checks that your code contains enough test cases to cover the various paths and branches in your code. This metric can help you understand the extent of your code test coverage, thereby determining your code quality and stability."),(0,o.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livedemo/DataSources/SonarQube"},"SonarQube"))),(0,o.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,o.kt)("p",null,"This SQL query retrieves the test coverage percentage for the lines to cover in a project from the cq_file_metrics table in SonarQube. The query calculates the percentage by subtracting the number of uncovered lines from the total number of lines to cover, then dividing the result by the total number of lines to cover, and multiplying by 100. The result is rounded to one decimal point and displayed as a percentage. Additionally, the query also includes a message that shows the total number of lines to cover in thousands."),(0,o.kt)("b",null,"Data Sources Required"),(0,o.kt)("p",null,"This metric relies on file_metrics collected from SonarQube."),(0,o.kt)("b",null,"Data Transformation Required"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("b",null,"SQL Queries"),(0,o.kt)("p",null,"The following SQL shows how to find unit tests that have been executed against the code in specific projects, eg. 'project1' and 'project2'."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT\n  CONCAT(ROUND((sum(lines_to_cover) - sum(uncovered_lines)) / sum(lines_to_cover) * 100, 1), '% ', 'Coverage on ', ROUND(sum(lines_to_cover) / 1000, 0),'k Lines to cover')\nFROM cq_file_metrics\nWHERE\n  project_key in ('project1', 'project2')\n")))}u.isMDXComponent=!0}}]);
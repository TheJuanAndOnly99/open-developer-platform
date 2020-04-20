(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(1),o=a(11),i=(a(0),a(185)),r={id:"project-documentation",title:"Project Documentation"},s={id:"development-infrastructure/project-documentation",title:"Project Documentation",description:"FINOS collaboration services include several ways to write, collaborate and publish project documentation.",source:"@site/../docs/development-infrastructure/project-documentation.md",permalink:"/docs/development-infrastructure/project-documentation",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/project-documentation.md",sidebar:"mainSidebar",previous:{title:"Whitesource",permalink:"/docs/development-infrastructure/code-validation/whitesource"},next:{title:"Continuous Delivery",permalink:"/docs/development-infrastructure/continuous-delivery"}},c=[{value:"Docusaurus",id:"docusaurus",children:[{value:"Docusaurus Build Action",id:"docusaurus-build-action",children:[]},{value:"Docusaurus 2 (alpha)",id:"docusaurus-2-alpha",children:[]},{value:"Get Started in 5 Minutes",id:"get-started-in-5-minutes",children:[]},{value:"Directory Structure",id:"directory-structure",children:[]},{value:"Editing Content",id:"editing-content",children:[]},{value:"Managing the navigation bar",id:"managing-the-navigation-bar",children:[]}]},{value:"Other solutions",id:"other-solutions",children:[]}],u={rightToc:c};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"FINOS collaboration services include several ways to write, collaborate and publish project documentation."),Object(i.a)("p",null,"After experimenting with few tools, services and technologies, we have chosen ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#using-docusaurus"}),"Docusaurus")," (and GitHub Pages) to be the best choice."),Object(i.a)("h2",{id:"docusaurus"},"Docusaurus"),Object(i.a)("p",null,"Docusaurus is a static website generator written in React and available open source under the Apache 2.0 license. A similar technology is Jekyll, which provides a tighter integration with GitHub Pages, but lacks of development support (as in Ruby) and tools for local development."),Object(i.a)("p",null,"Given the significant amount of FINOS projects that adopted this framework, it became our go-to solution to build project documentation websites; if you're getting started, you may want to use the ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/finos/project-blueprint"}),"FINOS project blueprint")," repository template, which already provides a built-in Docusaurus website; there is also a ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#docusaurus-build-action"}),"Docusaurus Build action for GitHub.com")," available and documented below."),Object(i.a)("p",null,"This page walks through the use of docusaurus on a local environment; full documentation can be found on ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://docusaurus.io/"}),"docusaurus website"),"."),Object(i.a)("h3",{id:"docusaurus-build-action"},"Docusaurus Build Action"),Object(i.a)("p",null,"FINOS have developed a GitHub Action to automatically build the Docusaurus websites and publish them into GitHub Pages; the action works on upstream repositories (ie ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/finos/open-developer-platform"}),"https://github.com/finos/open-developer-platform"),") as well as forked ones (ie ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/maoo/open-developer-platform"}),"https://github.com/maoo/open-developer-platform"),"), providing a simple way to stage the web version of a change to a Docusaurus website."),Object(i.a)("p",null,"The action also intercepts Pull Requests and adds a comment with the link to the website (preview) of the PR submitter; this way issue reviewers can easily and visually see the changes."),Object(i.a)("h4",{id:"enabling-the-action"},"Enabling the action"),Object(i.a)("p",null,"If you're forking a repository with the Docusaurus build action, you need to:"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Create a new branch called ",Object(i.a)("inlineCode",{parentName:"li"},"gh-pages"),", if it doesn't already exist. Check ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository"}),"the GitHub guide")," if you don't know how to create a branch."),Object(i.a)("li",{parentName:"ol"},"Access the ",Object(i.a)("inlineCode",{parentName:"li"},"Actions")," tab of your GitHub (forked) repository (on ",Object(i.a)("inlineCode",{parentName:"li"},"https://github.com/<your username>/<repository name>/actions"),") and click on the ",Object(i.a)("inlineCode",{parentName:"li"},"Enable GitHub Actions")," button.")),Object(i.a)("p",null,"At this point, any change on your ",Object(i.a)("inlineCode",{parentName:"p"},"master")," branch (within the ",Object(i.a)("inlineCode",{parentName:"p"},"docs/")," or ",Object(i.a)("inlineCode",{parentName:"p"},"website/")," folders) will be published on ",Object(i.a)("inlineCode",{parentName:"p"},"https://<github username>.github.io/<repository name>"),". Go ahead and make a change to any ",Object(i.a)("inlineCode",{parentName:"p"},"docs/*.md")," file and see if they get published on the website."),Object(i.a)("h4",{id:"known-issue"},"Known issue"),Object(i.a)("p",null,"If you don't create a ",Object(i.a)("inlineCode",{parentName:"p"},"gh-pages")," branch prior to the first action run, Docusaurus will, but for some reason, it doesn\u2019t correctly update the HTTP(s) endpoint, and as a result the website returns a ",Object(i.a)("inlineCode",{parentName:"p"},"404")," error."),Object(i.a)("p",null,"To fix it, follow these steps:"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Visit ",Object(i.a)("inlineCode",{parentName:"li"},"https://github.com/<org/user name>/<repository name>/settings")),Object(i.a)("li",{parentName:"ol"},"Find the ",Object(i.a)("inlineCode",{parentName:"li"},"GitHub Pages")," section"),Object(i.a)("li",{parentName:"ol"},"Select the ",Object(i.a)("inlineCode",{parentName:"li"},"master")," branch from the ",Object(i.a)("inlineCode",{parentName:"li"},"Source")," dropdown"),Object(i.a)("li",{parentName:"ol"},"Scroll down again to the ",Object(i.a)("inlineCode",{parentName:"li"},"GitHub Pages")," section"),Object(i.a)("li",{parentName:"ol"},"At the top it should say\xa0Your site is published at ",Object(i.a)("inlineCode",{parentName:"li"},"https://<org/user name>.github.io/<repository name>")),Object(i.a)("li",{parentName:"ol"},"Select the gh-pages branch from the ",Object(i.a)("inlineCode",{parentName:"li"},"Source")," dropdown")),Object(i.a)("p",null,"It may take 20 to 40 minutes to enable the URL, until then you may get a 404 error."),Object(i.a)("p",null,"The action can be ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/finos/open-developer-platform/blob/master/.github/workflows/docusaurus.yml"}),"copied from the ODP GitHub repository")),Object(i.a)("p",null,"In order to use the action, simply copy the ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/finos/open-developer-platform/blob/master/.github/workflows/docusaurus.yml"}),Object(i.a)("inlineCode",{parentName:"a"},"Raw")," file content")," into a file called ",Object(i.a)("inlineCode",{parentName:"p"},".github/workflows/docusaurus.yml")," , then push the changes; the action should automatically run and deploy the HTML files into the ",Object(i.a)("inlineCode",{parentName:"p"},"gh-pages")," branch."),Object(i.a)("h3",{id:"docusaurus-2-alpha"},"Docusaurus 2 (alpha)"),Object(i.a)("p",null,"This document refers to Docusaurus 1.x version."),Object(i.a)("p",null,"The new version of docusaurus is currently (March 2020) in alpha, and brings lots of improvements; for those starting to use Docusaurus now, it is strongly suggested to start using this version. This version is built with Docusaurus 2."),Object(i.a)("h3",{id:"get-started-in-5-minutes"},"Get Started in 5 Minutes"),Object(i.a)("p",null,"Regardless of the language, eco-system or platform you're using, run the following commands."),Object(i.a)("p",null,"Check if NodeJS and NPM command-line tools are installed:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"npm -v\nnode -v\n")),Object(i.a)("p",null,"Create a Docusaurus project and start the website locally:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"npm i -g docusaurus-init docusaurus\nmkdir docusaurus-test\ncd docusaurus-test\ndocusaurus-init\nmv docs-examples-from-docusaurus docs\nmv website/blog-examples-from-docusaurus website/blog\ncd website\ndocusaurus-start\n")),Object(i.a)("h3",{id:"directory-structure"},"Directory Structure"),Object(i.a)("p",null,"Your project file structure should look something like this:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"/project_root\n  docs/\n    doc-1.md\n    doc-2.md\n    doc-3.md\n  website/\n    blog/\n      2016-3-11-oldest-post.md\n      2017-10-24-newest-post.md\n    core/\n    node_modules/\n    pages/\n    static/\n      css/\n      img/\n    package.json\n    sidebar.json\n    siteConfig.js\n")),Object(i.a)("p",null,"In Docusaurus 2, the ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/installation#project-structure"}),"project structure have slightly changed"),". "),Object(i.a)("h3",{id:"editing-content"},"Editing Content"),Object(i.a)("p",null,"Website pages are represented by MarkDown files in the the ",Object(i.a)("inlineCode",{parentName:"p"},"docs/")," folder (in Docusaurus 2, also MarkDown React files are supported); the page ",Object(i.a)("inlineCode",{parentName:"p"},"id")," maps to the URL slug of the page; the title renders out as ",Object(i.a)("inlineCode",{parentName:"p"},"<h1>"),"."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"---\nid: page-needs-edit\ntitle: This Doc Needs To Be Edited\n---\n\nThis is the page content!\n")),Object(i.a)("h3",{id:"managing-the-navigation-bar"},"Managing the navigation bar"),Object(i.a)("p",null,"Add links to docs, custom pages or external links by editing the ",Object(i.a)("inlineCode",{parentName:"p"},"headerLinks")," field of ",Object(i.a)("inlineCode",{parentName:"p"},"website/siteConfig.js"),":"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"{\n  headerLinks: [\n    ...\n    /* you can add docs */\n    { doc: 'my-examples', label: 'Examples' },\n    /* you can add custom pages */\n    { page: 'help', label: 'Help' },\n    /* you can add external links */\n    { href: 'https://github.com/facebook/Docusaurus', label: 'GitHub' },\n    ...\n  ],\n  ...\n}\n")),Object(i.a)("p",null,"For more information, checkout the ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://docusaurus.io/docs/en/navigation"}),"docusaurus navigation docs"),"."),Object(i.a)("p",null,"In Docusaurus 2, ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/sidebar"}),"navigation have been greatly improved"),"."),Object(i.a)("h2",{id:"other-solutions"},"Other solutions"),Object(i.a)("p",null,"Before Docusaurus, FINOS Community have experimented few other solutions, which are worth mentioning for historical reasons:"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://help.github.com/en/github/building-a-strong-community/about-wikis"}),"GitHub Wiki")," provides a great integration with code, as it's hosted as a git endpoint; however, Pull Requests are not available, therefore the collaboration mechanism can only be extended to the project team, which is a big limitation. Also, installing a local development environment ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://gist.github.com/suewonjp/7493de784f4a88c63d1810031609ee35"}),"is not trivial")," Its biggest advantage is the possibility to preview the changes via the GitHub web UI"),Object(i.a)("li",{parentName:"ol"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://jekyllrb.com/"}),"Jekyll"),", the page generator engine used by GitHub Pages, which also supports templating; the downside of Jekyll is that the installation of a local development environment (Ruby) is hard."),Object(i.a)("li",{parentName:"ol"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://gohugo.io/"}),"GoHugo"),", a generic static page generator written in Go, with a strong community and eco-system")))}l.isMDXComponent=!0},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(a),b=n,h=d["".concat(r,".").concat(b)]||d[b]||p[b]||i;return a?o.a.createElement(h,s({ref:t},u,{components:a})):o.a.createElement(h,s({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var u=2;u<i;u++)r[u]=a[u];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
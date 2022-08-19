(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{124:function(e,t,a){},125:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var s=a(28),i=a(2),n=a(1),c=a(0),r=Object(n.createContext)(),o=function(e){var t=e.children,a=Object(n.useState)("light"),s=Object(i.a)(a,2),o=s[0],l=s[1];Object(n.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");l(e.matches?"dark":"light"),e.addEventListener("change",(function(e){l(e.matches?"dark":"light")}))}),[]);return Object(c.jsx)(r.Provider,{value:[{themeName:o,toggleTheme:function(){var e="dark"===o?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l=a(42),p=a.n(l),d=(a(58),a(59)),m=(a(124),"https://en.wikipedia.org/wiki/Moose"),h="Moose.",x="Mustafa",u="SENG",j="UNSW",b="Welcome stalker, I'm a 4th year Software Engineering (Honours) student at UNSW.",k="I have a passion for cybersecurity, DLT and UI/UX design. I try to wear many hats - from product dev to ROP chains, I enjoy exploring tech.",_="An avid Formula 1 and soccer fan, I also enjoy DJing and am always on the hunt for good music.",f="https://docs.google.com/document/d/1kbaiNI74ac5-u2omLnGnqJXTHKfibbcD/edit?usp=sharing&ouid=105455229737504325088&rtpof=true&sd=true",g={linkedin:"https://www.linkedin.com/in/mustafadohad/",github:"https://github.com/Afats"},y=[{name:"Virchu",description:"COVID-19 data and charity website. Features an interactive 3D choropleth globe.",description1:"The Optiver SENG3011 Prize Runner Up project, 2021.",stack:["MERN stack","Postman","Swagger"],sourceCode:"https://github.com/Afats/virchu"},{name:"Dawg",description:"Dawg: a generic Directed Weighted Graph library. Ghraph-foo galore.",description1:"Leverages modern C++20, using a custom iterator.",stack:["C++","Catch2"],sourceCode:"https://github.com/Afats/dawg"},{name:"Fat Fox Fuzzer",description:"Mutation-based fuzzer that takes an input and mutates it to fuzz programs.",description1:"Variety of mutation strats used. Next step: coverage-based mutation prioritisation.",stack:["Python","Pwnlib","GDB"],sourceCode:"https://github.com/Afats/gloria-romanus"},{name:"Gloria Romanus",description:"A backend implementation spin-off of the popular strategy game Civilisation.",description1:"Sports battle resolvers, multiple factions, resources, etc.",stack:["Java","OOP","Design Patterns"],sourceCode:"https://github.com/Afats/gloria-romanus"},{name:"1970s Chat Room",description:"A terminal-based application layer chat room & P2P messaging.",description1:"Multi-user support, blocking, timeouts, offline messaging, etc.",stack:["Python","Multithreading"],sourceCode:"https://github.com/Afats/p2p-messaging"},{name:"Word Ladder",description:'Program that quickly finds the shortest "word ladder" between 2 words.',description1:"Implemented leveraging BFS, DFS and C++20.",stack:["C++","Catch2"],sourceCode:"https://github.com/Afats/word-ladder"},{name:"Squid Regression",description:"A study in predictive powers of different linear models.",description1:"Dataset for study is based on squid rostral (beak) lengths.",stack:["R","Linear Regression","Cross Validation"],sourceCode:"https://github.com/Afats/squid-regression"},{name:"Generative Art",description:"Inspired by BAYC and the 'Generative Art' movement.",description1:"An Ethereum based NFT project. Built for Web3.",stack:["Solidity","OpenZeppelin","Truffle Suite"],sourceCode:"https://github.com/Afats/generative-art"},{name:"On The Way",description:"A prototype for NSW Transport, built with UI/UX design principles.",description1:"Product development and user requirements.",stack:["Figma","React Expo","UI/UX Design"],sourceCode:"https://github.com/Afats/on-the-way"},{name:"MooseGit",description:"An implementation of a Git-like version control system.",description1:"Classic git-like commands including git init, add, commit, etc.",stack:["Shell programming","Git","SHA-1"],sourceCode:"https://github.com/Afats/moose-git"},{name:"MIPS Emulator",description:"A MIPS emulator written in C.",description1:"MIPS opcodes and semantics stuff.",stack:["C","Assembly"],sourceCode:"https://github.com/Afats/mips-emulator"},{name:"Haskell Foo",description:"Functional programming exercises in Haskell.",description1:"Should haskell be taught to new programmers?",stack:["Haskell"],sourceCode:"https://github.com/Afats/haskell-foo"},{name:"Algo Technic",description:"Algorithms and programming techniques.",description1:"Binary search, dynamic programming, greedy method, etc.",stack:["Algorithms"],sourceCode:"https://github.com/Afats/algos-docs"},{name:"Handbook Scraper",description:'Rudimentary web scraper. Scrapes data in a "humane" way.',description1:"For the 2022 UNSW handbook, which is a pain to scrape.",stack:["Pyhton","Selenium"],sourceCode:"https://github.com/Afats/handbook-scraper"},{name:"Shell Compiler",description:"A Perl program that takes in shell scripts and outputs Perl.",description1:"Complex scripts may set your laptop on fire.",stack:["Perl","Shell"],sourceCode:"https://github.com/Afats/shell-compiler"},{name:"Dafny Duck",description:"Program verification exercises in Dafny.",description1:"Dafny is a language for expressing verification problems.",stack:["Dafny"],sourceCode:"https://github.com/Afats/dafny-duck"},{name:"NFT Marketplace",description:"An ongoing NFT marketplace concept design.",description1:"Features a Tinder-like swipe interface to swipe between listed items.",stack:["Figma","UI/UX Design"],sourceCode:"https://github.com/Afats/nft-marketplace"},{name:"UniTree",description:"A lo-fi revamped design of UNSW's Moodle site.",description1:"Why? Because the current one sucks.",stack:["Figma","UI/UX Design"],sourceCode:"https://github.com/Afats/moodle-ui"}],O=y.slice(0,6),v=null,N=history.state||{},w=N.reloadCount||0;1===performance.navigation.type?(N.reloadCount=++w,history.replaceState(N,null,document.URL)):w&&(delete N.reloadCount,w=0,history.replaceState(N,null,document.URL)),w%2==1&&(!function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[a],e[a]=s}}(y),v=y.slice(0,6));var S=v;var A="Refresh the page to view a random set of my projects below!",E="Favourite projects shown below. Alternatively, have a look at all of them ",C="Refresh the page to view my favourite projects below!",D="Random projects shown below. Alternatively, have a look at all of them ",G=["C++","C","Java","x86 Assembly","Python","Solidity","R","Web Dev","Figma, Maze, XD","Haskell, Dafny","SQL","Perl, Bash Scripting","Photoshop, Lightroom","Binary Ninja, Ghidra","Burp Suite","Splunk"],L="mmdohad2000@gmail.com",B=a(62),P=a.n(B),F=a(60),T=a.n(F),M=a(64),I=a.n(M),V=a(63),R=a.n(V),U=(a(125),function(){var e=Object(n.useContext)(r),t=Object(i.a)(e,1)[0],a=t.themeName,s=t.toggleTheme,o=Object(n.useState)(!1),l=Object(i.a)(o,2),p=l[0],d=l[1],m=function(){return d(!p)};return Object(c.jsxs)("nav",{className:"center nav",children:[Object(c.jsxs)("ul",{style:{display:p?"flex":null},className:"nav__list",children:[O.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#projects",onClick:m,className:"link link--nav",children:"Projects"})}):null,L?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#contact",onClick:m,className:"link link--nav",children:"Contact"})}):null]}),Object(c.jsx)("button",{type:"button",onClick:s,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===a?Object(c.jsx)(T.a,{}):Object(c.jsx)(P.a,{})}),Object(c.jsx)("button",{type:"button",onClick:m,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:p?Object(c.jsx)(R.a,{}):Object(c.jsx)(I.a,{})})]})}),W=(a(129),function(){var e=m,t=h;return Object(c.jsxs)("header",{className:"header center",children:[Object(c.jsx)("h3",{children:e?Object(c.jsx)("a",{href:e,target:"_blank",className:"link",children:Object(c.jsx)("span",{className:"header-cascade-gradient",children:t})}):t}),Object(c.jsx)(U,{})]})}),z=a(19),H=a.n(z),J=a(29),q=a.n(J),X=(a(57),a(130),a(131),a(132),a(133),function(){var e=x,t=u,a=j,s=b,i=k,n=_,r=f,o=g;return Object(c.jsxs)("div",{className:"about center",children:[e&&Object(c.jsx)("span",{className:"rev",children:Object(c.jsxs)("h1",{className:"cent__align",children:["Hi, I am ",Object(c.jsx)("span",{className:"about__name",children:Object(c.jsxs)("span",{className:"sol-cascade-gradient",children:[e,"."]})})]})}),Object(c.jsx)("span",{className:"rev",children:t&&Object(c.jsxs)("h2",{className:"about__role",children:[Object(c.jsx)("span",{className:"sol-blue",children:t})," @ ",Object(c.jsx)("span",{className:"uni-yellow",children:a})]})}),Object(c.jsx)("span",{className:"rev2_1",children:Object(c.jsx)("p",{className:"about__intro",children:s})}),Object(c.jsx)("span",{className:"rev2",children:Object(c.jsx)("p",{className:"about__desc",children:i})}),Object(c.jsx)("span",{className:"rev3",children:Object(c.jsx)("p",{className:"about__desc",children:n})}),Object(c.jsx)("div",{className:"about__contact center",children:r&&Object(c.jsx)("a",{href:r,target:"_blank",children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})})}),Object(c.jsx)("span",{className:"space_top"}),Object(c.jsx)("div",{className:"about__contact center",children:o&&Object(c.jsxs)(c.Fragment,{children:[o.github&&Object(c.jsx)("a",{href:o.github,"aria-label":"github",className:"link link--icon",target:"_blank",children:Object(c.jsx)(H.a,{className:"large_ghub"})}),Object(c.jsx)("span",{className:"space"}),o.linkedin&&Object(c.jsx)("a",{href:o.linkedin,"aria-label":"linkedin",className:"link link--icon",target:"_blank",children:Object(c.jsx)(q.a,{className:"large_linkedin"})})]})})]})}),Y=a(13),K=a.n(Y),Q=(a(135),function(e){var t=e.project;return Object(c.jsxs)("a",{className:"project",href:t.sourceCode,children:[Object(c.jsx)("h3",{children:t.name}),Object(c.jsx)("p",{className:"project__description",children:t.description}),Object(c.jsx)("p",{className:"project__description",children:t.description1}),t.stack&&Object(c.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(c.jsx)("li",{className:"project__stack-item",children:e},K()())}))}),t.sourceCode&&Object(c.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link cent",target:"_blank",children:Object(c.jsx)(H.a,{})})]})}),Z=(a(136),function(){if(null==S){var e=A,t=E;return Object(c.jsxs)("section",{id:"projects",className:"section projects",children:[Object(c.jsx)("h2",{className:"section__title",children:Object(c.jsx)("span",{className:"electric__blue",children:"Projects"})}),Object(c.jsx)("p",{className:"projects__intro",children:Object(c.jsx)("b",{children:e})}),Object(c.jsxs)("p",{className:"projects__plug",children:[t,Object(c.jsx)("a",{className:"link",href:"https://github.com/Afats?tab=repositories",children:"here"}),"."]}),Object(c.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(c.jsx)(Q,{project:e},K()())}))})]})}var a=C,s=D;return Object(c.jsxs)("section",{id:"projects",className:"section projects",children:[Object(c.jsx)("h2",{className:"section__title",children:Object(c.jsx)("span",{className:"electric__blue",children:"Projects"})}),Object(c.jsx)("p",{className:"projects__intro",children:Object(c.jsx)("b",{children:a})}),Object(c.jsxs)("p",{className:"projects__plug",children:[s,Object(c.jsx)("a",{className:"link",href:"https://github.com/Afats?tab=repositories",children:"here"}),"."]}),Object(c.jsx)("div",{className:"projects__grid",children:S.map((function(e){return Object(c.jsx)(Q,{project:e},K()())}))})]})}),$=(a(137),function(){return G.length?Object(c.jsxs)("section",{id:"skills",className:"section skills",children:[Object(c.jsx)("h2",{className:"section__title",children:Object(c.jsx)("span",{className:"electric__blue",children:"Skills"})}),Object(c.jsx)("ul",{className:"skills__list",children:G.map((function(e){return Object(c.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},K()())}))})]}):null}),ee=(a(138),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){var e=function(){return window.pageYOffset<200?s(!0):s(!1)};return window.addEventListener("mousemove",e)||window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)||window.removeEventListener("mousemove",e)}}),[]),a?Object(c.jsx)("div",{className:"scroll-down",children:Object(c.jsxs)("svg",{class:"arrows",children:[Object(c.jsx)("path",{className:"a1",d:"M0 0 L30 32 L60 0"}),Object(c.jsx)("path",{className:"a2",d:"M0 20 L30 52 L60 20"}),Object(c.jsx)("path",{className:"a3",d:"M0 40 L30 72 L60 40"})]})}):null}),te=a(65),ae=a.n(te),se=(a(139),a(43)),ie=a.n(se);ie()("a[href='#top']").click((function(){return ie()("html, body").animate({scrollTop:0},"slow"),!1}));var ne=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){var e=function(){return window.pageYOffset>1200?s(!0):s(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),a?Object(c.jsx)("div",{className:"scroll-top",children:Object(c.jsx)("a",{href:"#top",children:Object(c.jsx)(ae.a,{fontSize:"large"})})}):null},ce=(a(140),function(){var e=g;return L?Object(c.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(c.jsx)("a",{href:"mailto:".concat(L),target:"_blank",children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Send me an email"})}),Object(c.jsx)("div",{className:"about__contact center",children:e&&Object(c.jsxs)(c.Fragment,{children:[e.github&&Object(c.jsx)("a",{href:e.github,"aria-label":"github",className:"link link--icon",target:"_blank",children:Object(c.jsx)(H.a,{className:"small_ghub"})}),Object(c.jsx)("span",{className:"space2"}),e.linkedin&&Object(c.jsx)("a",{href:e.linkedin,"aria-label":"linkedin",className:"link link--icon",target:"_blank",children:Object(c.jsx)(q.a,{className:"small_linkedin"})})]})})]}):null}),re=(a(141),function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsx)("a",{href:"https://afats.github.io",className:"link footer__link",children:"Created By Mustafa Dohadwalla."})})}),oe={loop:!0,autoplay:!0,animationData:d,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};function le(){var e=window;return{w:e.innerWidth,h:e.innerHeight}}var pe=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=(t[0],t[1]),s=Object(n.useState)(void 0),r=Object(i.a)(s,2),o=(r[0],r[1]),l=Object(n.useState)(void 0),d=Object(i.a)(l,2),m=d[0],h=d[1],x=function(){var e=Object(n.useState)(le()),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){function e(){s(le())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}(),u=x.h,j=x.w;return Object(n.useEffect)((function(){setTimeout((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){console.log(e),a(e),o(!0),setTimeout((function(){h(!0)}),500)}))}),2e3)}),[]),Object(c.jsx)(c.Fragment,{children:m?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(W,{}),Object(c.jsx)(X,{}),Object(c.jsx)(Z,{}),Object(c.jsx)($,{}),Object(c.jsx)(ce,{}),Object(c.jsx)(ee,{}),Object(c.jsx)(ne,{}),Object(c.jsx)(re,{})]}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(p.a,{options:oe,height:u,width:j})})})},de=(a(142),function(){var e=Object(n.useContext)(r),t=Object(i.a)(e,1)[0].themeName;return Object(c.jsx)("div",{id:"top",className:"".concat(t," app"),children:Object(c.jsx)(pe,{})})});a(143);Object(s.render)(Object(c.jsx)(o,{children:Object(c.jsx)(de,{})}),document.getElementById("root"))},57:function(e,t,a){},58:function(e){e.exports=JSON.parse('{"v":"4.10.1","fr":60,"ip":0,"op":120,"w":800,"h":800,"nm":"loading_animation","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 5","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":23,"s":[20],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":34,"s":[100],"e":[20]},{"t":69}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0,0],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0_1_0p333_0","0_1_0p333_0"],"t":23,"s":[400,400],"e":[440,440]},{"i":{"x":[0.009,0.009],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p009_1_0p333_0","0p009_1_0p333_0"],"t":34,"s":[440,440],"e":[400,400]},{"t":59}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":4,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":23,"s":[5],"e":[10]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":34,"s":[10],"e":[5]},{"t":59}],"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0,0.627,1,0.5,0.496,0.314,1,1,0.992,0,1],"ix":8}},"s":{"a":0,"k":[0,0],"ix":4},"e":{"a":0,"k":[100,0],"ix":5},"t":1,"lc":1,"lj":1,"ml":4,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 4","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":16,"s":[20],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":27,"s":[100],"e":[20]},{"t":62}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0"],"t":16,"s":[320,320],"e":[360,360]},{"i":{"x":[0.025,0.025],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p025_1_0p333_0","0p025_1_0p333_0"],"t":27,"s":[360,360],"e":[320,320]},{"t":52}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":16,"s":[5],"e":[10]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":27,"s":[10],"e":[5]},{"t":52}],"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0,0.627,1,0.5,0.496,0.314,1,1,0.992,0,1],"ix":8}},"s":{"a":0,"k":[0,0],"ix":4},"e":{"a":0,"k":[100,0],"ix":5},"t":1,"lc":1,"lj":1,"ml":4,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":9,"s":[20],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":20,"s":[100],"e":[20]},{"t":55}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0"],"t":9,"s":[240,240],"e":[280,280]},{"i":{"x":[0.051,0.051],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p051_1_0p333_0","0p051_1_0p333_0"],"t":20,"s":[280,280],"e":[240,240]},{"t":45}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":9,"s":[5],"e":[10]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":20,"s":[10],"e":[5]},{"t":45}],"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0,0.627,1,0.5,0.496,0.314,1,1,0.992,0,1],"ix":8}},"s":{"a":0,"k":[0,0],"ix":4},"e":{"a":0,"k":[100,0],"ix":5},"t":1,"lc":1,"lj":1,"ml":4,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":2,"s":[20],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":13,"s":[100],"e":[20]},{"t":48}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0"],"t":2,"s":[160,160],"e":[200,200]},{"i":{"x":[0.034,0.034],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p034_1_0p333_0","0p034_1_0p333_0"],"t":13,"s":[200,200],"e":[160,160]},{"t":38}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":2,"s":[5],"e":[10]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":13,"s":[10],"e":[5]},{"t":38}],"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0,0.627,1,0.5,0.496,0.314,1,1,0.992,0,1],"ix":8}},"s":{"a":0,"k":[0,0],"ix":4},"e":{"a":0,"k":[100,0],"ix":5},"t":1,"lc":1,"lj":1,"ml":4,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":0,"s":[20],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":11,"s":[100],"e":[20]},{"t":46}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0"],"t":0,"s":[80,80],"e":[120,120]},{"i":{"x":[0,0],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0_1_0p333_0","0_1_0p333_0"],"t":11,"s":[120,120],"e":[80,80]},{"t":36}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[5],"e":[10]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":11,"s":[10],"e":[5]},{"t":35}],"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0,0.627,1,0.5,0.496,0.314,1,1,0.992,0,1],"ix":8}},"s":{"a":0,"k":[0,0],"ix":4},"e":{"a":0,"k":[100,0],"ix":5},"t":1,"lc":1,"lj":1,"ml":4,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false}],"ip":0,"op":120,"st":0,"bm":0}]}')},59:function(e){e.exports=JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE ","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":600,"w":1500,"h":1500,"nm":"IMG_BLOB_YELLOW_RED","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"BLOB_LOTTIE","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[750,750,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[269,4],[93.871,-85.636],[-16.347,-159.838],[-203,-34],[-103.643,15.504],[-48.876,82.961],[46.603,161.487]],"o":[[-98.149,-1.459],[-136.669,124.68],[18,176],[90.398,15.14],[133.034,-19.9],[76,-129],[-43,-149]],"v":[[57,-588],[-244.844,-442.918],[-468,26],[-152,503],[181.966,439.9],[526,239],[461,-191]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":118,"s":[{"i":[[271.492,-15.658],[98.401,-59.051],[3.641,-167.527],[-216.133,-56.342],[-103.643,15.504],[-48.876,82.961],[63.261,154.637]],"o":[[-86.581,4.994],[-145.009,87.02],[-2.785,175.629],[139.867,37.658],[133.034,-19.901],[76,-129],[-60.208,-146.05]],"v":[[44.508,-556.342],[-238.991,-431.02],[-507.492,-50.275],[-197.867,524.342],[175.083,484.151],[478.433,248.242],[488.533,-194.933]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":240,"s":[{"i":[[295.001,-13],[105.691,0],[24.306,-175.475],[-192.148,-73.785],[-103.643,15.504],[-48.876,82.961],[80.484,147.554]],"o":[[-108.178,4.767],[-178.309,0],[-24.274,175.245],[125,48],[133.034,-19.901],[76,-129],[-78,-143]],"v":[[55.999,-487],[-249.691,-412.626],[-589,-121],[-168,522],[167.966,529.9],[474,270],[517,-199]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":360,"s":[{"i":[[227.665,-9.145],[110.186,-53.152],[10.624,-169.353],[-195.785,-60.449],[-103.643,15.504],[-48.876,82.961],[69.127,152.224]],"o":[[-105.589,4.241],[-127.199,61.359],[-10.104,175.499],[113.402,36.986],[133.034,-19.901],[76,-129],[-66.268,-145.011]],"v":[[56.335,-520.855],[-286.186,-376.848],[-564.441,-21.726],[-162.637,515.632],[160.659,537.733],[505.43,251.609],[476.229,-186.318]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":480,"s":[{"i":[[195.33,-9.291],[99.341,-87.839],[-2.975,-164.555],[-199.423,-47.113],[-101.402,37.594],[-48.876,82.961],[57.771,156.894]],"o":[[-101.833,3.103],[-146.659,76.161],[4.066,175.752],[101.803,25.971],[126.125,-46.761],[76,-129],[-76.55,-141.321]],"v":[[56.67,-544.709],[-253.341,-370.161],[-531.815,50.337],[-143.274,487.263],[171.402,442.406],[493.802,221.251],[432.55,-162.679]],"c":true}]},{"t":599,"s":[{"i":[[269,4],[93.871,-85.636],[-16.347,-159.838],[-203,-34],[-103.643,15.504],[-48.876,82.961],[46.603,161.487]],"o":[[-98.149,-1.459],[-136.669,124.68],[18,176],[90.398,15.14],[133.034,-19.9],[76,-129],[-43,-149]],"v":[[57,-588],[-244.844,-442.918],[-468,26],[-152,503],[181.966,439.9],[526,239],[461,-191]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0.004,0,1,0.6392156862745098,0.501,0.011764705882352941,0.8823529411764706,1,0.998,0.8627450980392157,0.12156862745098039,1],"ix":9}},"s":{"a":0,"k":[-247.109,-374.219],"ix":5},"e":{"a":0,"k":[455.609,340.812],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":610,"st":0,"bm":0}],"markers":[]}')}},[[145,1,2]]]);
//# sourceMappingURL=main.d7135a43.chunk.js.map
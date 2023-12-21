"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[60382],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),d=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=d(n),k=a,c=u["".concat(s,".").concat(k)]||u[k]||p[k]||o;return n?r.createElement(c,i(i({ref:e},m),{},{components:n})):r.createElement(c,i({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24101:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={id:"index",title:"Extensions",slug:"extensions.html",sidebar_label:"Introduction"},i=void 0,l={unversionedId:"extensions/index",id:"version-5.7/extensions/index",title:"Extensions",description:"Kotest integrates with many other libraries and frameworks. Some are provided by the Kotest team, and others are",source:"@site/versioned_docs/version-5.7/extensions/index.md",sourceDirName:"extensions",slug:"/extensions/extensions.html",permalink:"/docs/5.7/extensions/extensions.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.7/extensions/index.md",tags:[],version:"5.7",frontMatter:{id:"index",title:"Extensions",slug:"extensions.html",sidebar_label:"Introduction"},sidebar:"extensions",next:{title:"Spring",permalink:"/docs/5.7/extensions/spring.html"}},s={},d=[{value:"Kotest Team Extensions",id:"kotest-team-extensions",level:3},{value:"Third Party Extensions",id:"third-party-extensions",level:3}],m={toc:d};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Kotest integrates with many other libraries and frameworks. Some are provided by the Kotest team, and others are\nmaintained and hosted by third parties."),(0,a.kt)("h3",{id:"kotest-team-extensions"},"Kotest Team Extensions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Project"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/5.7/extensions/allure.html"},"Allure")),(0,a.kt)("td",{parentName:"tr",align:null},"Provides output for the allure framework")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/5.7/extensions/html_reporter.html"},"HTML Reporter")),(0,a.kt)("td",{parentName:"tr",align:null},"Generates HTML reports of test results based on ",(0,a.kt)("a",{parentName:"td",href:"/docs/5.7/extensions/junit_xml.html"},"JUnit XML"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/5.7/extensions/instant.html"},"Instant")),(0,a.kt)("td",{parentName:"tr",align:null},"Override the 'now' context in java.time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/5.7/extensions/junit_xml.html"},"JUnit XML")),(0,a.kt)("td",{parentName:"tr",align:null},"Provides output in the JUnit XML format for integration with reporting tools")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/5.7/extensions/ktor.html"},"Ktor")),(0,a.kt)("td",{parentName:"tr",align:null},"Provides matchers for Ktor endpoints")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/5.7/extensions/koin.html"},"Koin")),(0,a.kt)("td",{parentName:"tr",align:null},"Kotlin DI framework")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/5.7/extensions/mockserver.html"},"Mockserver")),(0,a.kt)("td",{parentName:"tr",align:null},"Integrate mockserver HTTP servers with the test lifecycle")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/5.7/extensions/spring.html"},"Spring")),(0,a.kt)("td",{parentName:"tr",align:null},"Adds support for spring beans in tests and spring test annotations")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/5.7/extensions/system_extensions.html"},"System")),(0,a.kt)("td",{parentName:"tr",align:null},"Provides utilities for integrating with System.* functions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/5.7/extensions/test_containers.html"},"Testcontainers")),(0,a.kt)("td",{parentName:"tr",align:null},"Run docker images as part of a test lifecycle")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/5.7/extensions/wiremock.html"},"Wiremock")),(0,a.kt)("td",{parentName:"tr",align:null},"Provides a mock HTTP server. Project homepage ",(0,a.kt)("a",{parentName:"td",href:"http://wiremock.org/"},"here"),".")))),(0,a.kt)("h3",{id:"third-party-extensions"},"Third Party Extensions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Project"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/LeoColman/kotest-android"},"Android")),(0,a.kt)("td",{parentName:"tr",align:null},"Toolbox for working with Kotest and Android")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://fluentlenium.io/docs/test-runners/#kotest"},"Fluentlenium")),(0,a.kt)("td",{parentName:"tr",align:null},"FluentLenium integration with Kotest")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/LeoColman/kotest-extensions-h2"},"H2 Database Extension")),(0,a.kt)("td",{parentName:"tr",align:null},"H2 Database integration with Kotest")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.http4k.org/guide/reference/kotest/"},"Http4k")),(0,a.kt)("td",{parentName:"tr",align:null},"Functional toolkit for Kotlin HTTP applications")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/LeoColman/kotest-kotless"},"Kotless")),(0,a.kt)("td",{parentName:"tr",align:null},"Utilties for kotless and kotest")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/appmattus/kotlinfixture/blob/main/fixture-kotest/README.adoc"},"KotlinFixture")),(0,a.kt)("td",{parentName:"tr",align:null},"generate well-defined, but essentially random, input")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/jsalinaspolo/logcapture"},"LogCapture")),(0,a.kt)("td",{parentName:"tr",align:null},"LogCapture is a testing library for asserting logging messages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/micronaut-projects/micronaut-test"},"Micronaut")),(0,a.kt)("td",{parentName:"tr",align:null},"JVM-based, full-stack framework for building modular, easily testable microservice")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/MrBergin/result4k-kotest-matchers"},"Result4s")),(0,a.kt)("td",{parentName:"tr",align:null},"Result4s matchers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.sniffy.io/docs/latest/#_integration_with_kotest"},"Sniffy")),(0,a.kt)("td",{parentName:"tr",align:null},"Network connectivity testing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/jGleitz/testfiles"},"TestFiles")),(0,a.kt)("td",{parentName:"tr",align:null},"Creates organized files and directories for testing")))))}p.isMDXComponent=!0}}]);
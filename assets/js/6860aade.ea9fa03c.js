"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8894],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return l},withMDXComponents:function(){return s}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){return function(n){var t=l(n.components);return r.createElement(e,a({},n,{components:t}))}},l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(t),m=o,v=s["".concat(i,".").concat(m)]||s[m]||u[m]||a;return t?r.createElement(v,d(d({ref:n},c),{},{components:t})):r.createElement(v,d({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=v;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},4246:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],d={id:"overview",title:"Developer Guide Overview"},p=void 0,c={unversionedId:"development/overview",id:"version-1.2/development/overview",title:"Developer Guide Overview",description:"This guide assumes you have checked-out the repository.",source:"@site/versioned_docs/version-1.2/development/overview.md",sourceDirName:"development",slug:"/development/overview",permalink:"/docs/1.2/development/overview",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.2/development/overview.md",tags:[],version:"1.2",lastUpdatedBy:"Jasha Sommer-Simpson",lastUpdatedAt:1705620947,formattedLastUpdatedAt:"1/18/2024",frontMatter:{id:"overview",title:"Developer Guide Overview"},sidebar:"docs",previous:{title:"Re-run",permalink:"/docs/1.2/experimental/rerun"},next:{title:"Testing",permalink:"/docs/1.2/development/testing"}},s=[{value:"Environment setup",id:"environment-setup",children:[],level:2}],l={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"This guide assumes you have checked-out the ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra"},"repository"),".\nIt is recommended that you install Hydra in a virtual environment like ",(0,a.mdx)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/"},"conda")," or ",(0,a.mdx)("a",{parentName:"p",href:"https://virtualenv.pypa.io/en/latest/"},"virtualenv"),"."),(0,a.mdx)("h2",{id:"environment-setup"},"Environment setup"),(0,a.mdx)("p",null,"Install ",(0,a.mdx)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda")," and create an empty Conda environment with:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"conda create -n hydra38 python=3.8 -qy\n")),(0,a.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"The core Hydra framework supports Python 3.6 or newer. You may need to create additional environments for different Python versions if CI detect issues on a supported version of Python."))),(0,a.mdx)("p",null,"Activate the environment:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"conda activate hydra38\n")),(0,a.mdx)("p",null,"From the source tree, install Hydra in development mode with the following commands:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"# install development dependencies\npip install -r requirements/dev.txt\n# install Hydra in development (editable) mode\npip install -e .\n")))}m.isMDXComponent=!0}}]);
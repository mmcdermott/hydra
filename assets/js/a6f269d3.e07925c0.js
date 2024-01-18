"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9577],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return p},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return s},withMDXComponents:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){return function(n){var t=s(n.components);return r.createElement(e,o({},n,{components:t}))}},s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,c(c({ref:n},p),{},{components:t})):r.createElement(g,c({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},89666:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={id:"config_path_changes",title:"Config path changes",hide_title:!0},l=void 0,p={unversionedId:"upgrades/0.11_to_1.0/config_path_changes",id:"version-1.2/upgrades/0.11_to_1.0/config_path_changes",title:"Config path changes",description:"Config path changes",source:"@site/versioned_docs/version-1.2/upgrades/0.11_to_1.0/config_path_changes.md",sourceDirName:"upgrades/0.11_to_1.0",slug:"/upgrades/0.11_to_1.0/config_path_changes",permalink:"/docs/1.2/upgrades/0.11_to_1.0/config_path_changes",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.2/upgrades/0.11_to_1.0/config_path_changes.md",tags:[],version:"1.2",lastUpdatedBy:"Jasha Sommer-Simpson",lastUpdatedAt:1705620947,formattedLastUpdatedAt:"1/18/2024",frontMatter:{id:"config_path_changes",title:"Config path changes",hide_title:!0},sidebar:"docs",previous:{title:"Automatic schema-matching",permalink:"/docs/1.2/upgrades/1.0_to_1.1/automatic_schema_matching"},next:{title:"Adding an @package directive",permalink:"/docs/1.2/upgrades/0.11_to_1.0/adding_a_package_directive"}},d=[{value:"Config path changes",id:"config-path-changes",children:[],level:2},{value:"Migration examples",id:"migration-examples",children:[],level:2}],s={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"config-path-changes"},"Config path changes"),(0,o.mdx)("p",null,"Hydra 1.0 adds a new ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_name")," parameter to ",(0,o.mdx)("inlineCode",{parentName:"p"},"@hydra.main()")," and changes the meaning of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_path"),".\nPreviously, ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_path")," encapsulated two things:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Search path relative to the declaring python file."),(0,o.mdx)("li",{parentName:"ul"},"Optional config file (.yaml) to load.")),(0,o.mdx)("p",null,"Having both of those things in the same parameter does not work well if you consider configs that are not files\nsuch as Structured Configs. In addition, it prevents overriding just the ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_name")," or just the ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_path")),(0,o.mdx)("p",null,"A second change is that the ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_name")," no longer requires a file extension. For configs files the ",(0,o.mdx)("inlineCode",{parentName:"p"},".yaml")," extension\nwill be added automatically when the file is loaded."),(0,o.mdx)("p",null,"This change is backward compatible, but support for the old style is deprecated and will be removed in the next major Hydra version."),(0,o.mdx)("h2",{id:"migration-examples"},"Migration examples"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 0.11"',title:'"Hydra','0.11"':!0},'@hydra.main(config_path="config.yaml")\n')),(0,o.mdx)("p",null,"Becomes: "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 1.0"',title:'"Hydra','1.0"':!0},'@hydra.main(config_name="config")\n')),(0,o.mdx)("p",null,"And"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 0.11"',title:'"Hydra','0.11"':!0},'@hydra.main(config_path="conf/config.yaml")\n')),(0,o.mdx)("p",null,"Becomes:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 1.0"',title:'"Hydra','1.0"':!0},'@hydra.main(config_path="conf", config_name="config")\n')))}m.isMDXComponent=!0}}]);
import{c as b}from"./chunks/FwbRange.vue_vue_type_style_index_0_scoped_fadec9c5_lang.66ff4c69.js";import{g as u,d as h,$ as f,o as r,c as E,k as l,r as i,n as d,l as a,e as w,b as _,w as s,I as C,H as n,a as t,Q as F}from"./chunks/framework.3f630664.js";const B="inline-flex items-center space-x-1 md:space-x-3",v={default:"flex",solid:"flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"};function A(o){const p=u(()=>b(B)),e=u(()=>b(v[o.solid.value?"solid":"defauilt"]));return{breadcrumbClasses:p,breadcrumbWrapperClasses:e}}const g=h({__name:"FwbBreadcrumb",props:{solid:{type:Boolean,default:!1}},setup(o){const p=o,{breadcrumbClasses:e,breadcrumbWrapperClasses:m}=A(f(p));return(y,q)=>(r(),E("nav",{class:d(a(m)),"aria-label":"Breadcrumb"},[l("ol",{class:d(a(e))},[i(y.$slots,"default")],2)],2))}}),D="ml-1 inline-flex items-center text-sm font-medium dark:text-gray-400",k="text-gray-700 hover:text-gray-900 dark:hover:text-white",x="text-gray-500";function I(o){return{breadcrumbItemClasses:u(()=>b(D,o.href.value?k:x))}}const $={class:"inline-flex items-center"},P={key:0,class:"w-6 h-6 text-gray-400 mr-1",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},T=l("path",{"clip-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","fill-rule":"evenodd"},null,-1),j=[T],H={key:0,class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},V=l("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"},null,-1),S=[V],c=h({__name:"FwbBreadcrumbItem",props:{href:{type:String,default:null},home:{type:Boolean,default:!1}},setup(o){const p=o,e=u(()=>p.href?"a":"span"),{breadcrumbItemClasses:m}=I(f(p));return(y,q)=>(r(),E("li",$,[i(y.$slots,"arrow-icon",{},()=>[o.home?w("",!0):(r(),E("svg",P,j))]),(r(),_(C(e.value),{class:d(a(m)),href:o.href},{default:s(()=>[i(y.$slots,"home-icon",{},()=>[o.home?(r(),E("svg",H,S)):w("",!0)]),i(y.$slots,"default")]),_:3},8,["class","href"]))]))}}),M={class:"vp-raw"},N={__name:"FwbBreadcrumbExample",setup(o){return(p,e)=>(r(),E("div",M,[n(a(g),null,{default:s(()=>[n(a(c),{home:"",href:"#"},{default:s(()=>[t(" Home ")]),_:1}),n(a(c),{href:"#"},{default:s(()=>[t(" Projects ")]),_:1}),n(a(c),null,{default:s(()=>[t(" Flowbite ")]),_:1})]),_:1})]))}},z={class:"vp-raw"},R={__name:"FwbBreadcrumbExampleSolid",setup(o){return(p,e)=>(r(),E("div",z,[n(a(g),{solid:""},{default:s(()=>[n(a(c),{home:"",href:"#"},{default:s(()=>[t(" Home ")]),_:1}),n(a(c),{href:"#"},{default:s(()=>[t(" Projects ")]),_:1}),n(a(c),null,{default:s(()=>[t(" Flowbite ")]),_:1})]),_:1})]))}},L={class:"vp-raw"},W=l("svg",{class:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[l("path",{d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"})],-1),O=l("svg",{class:"w-4 h-4 text-gray-400 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[l("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"})],-1),J=l("svg",{class:"w-4 h-4 text-gray-400 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[l("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"})],-1),Q={__name:"FwbBreadcrumbExampleCustomIcons",setup(o){return(p,e)=>(r(),E("div",L,[n(a(g),null,{default:s(()=>[n(a(c),{home:"",href:"#"},{"home-icon":s(()=>[W]),default:s(()=>[t(" Home ")]),_:1}),n(a(c),{href:"#"},{"arrow-icon":s(()=>[O]),default:s(()=>[t(" Projects ")]),_:1}),n(a(c),null,{"arrow-icon":s(()=>[J]),default:s(()=>[t(" Flowbite ")]),_:1})]),_:1})]))}},G=l("h1",{id:"vue-breadcrumb-flowbite",tabindex:"-1"},[t("Vue Breadcrumb - Flowbite "),l("a",{class:"header-anchor",href:"#vue-breadcrumb-flowbite","aria-label":'Permalink to "Vue Breadcrumb - Flowbite"'},"​")],-1),K=l("p",null,"The breadcrumb component is an important part of any website or application that can be used to show the current location of a page in a hierarchical structure of pages.",-1),U=l("p",null,"Flowbite includes two styles of breadcrumb elements, one that has a transparent background and a few more that come with a background in different colors.",-1),X=l("h2",{id:"default-breadcrumb",tabindex:"-1"},[t("Default breadcrumb "),l("a",{class:"header-anchor",href:"#default-breadcrumb","aria-label":'Permalink to "Default breadcrumb"'},"​")],-1),Y=F("",2),Z=F("",2),ss=F("",1),os=JSON.parse('{"title":"Vue Breadcrumb - Flowbite","description":"","frontmatter":{},"headers":[],"relativePath":"components/breadcrumb.md","filePath":"components/breadcrumb.md"}'),as={name:"components/breadcrumb.md"},ps=Object.assign(as,{setup(o){return(p,e)=>(r(),E("div",null,[G,K,U,X,n(N),Y,n(R),Z,n(Q),ss]))}});export{os as __pageData,ps as default};

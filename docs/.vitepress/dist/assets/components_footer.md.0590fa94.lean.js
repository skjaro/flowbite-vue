import{t as q,_ as h}from"./chunks/FwbRange.vue_vue_type_style_index_0_scoped_fadec9c5_lang.66ff4c69.js";import{d as w,Z as b,o as c,c as F,r as v,L as m,l as s,k as l,n as A,t as x,b as k,w as a,I as _,C as T,a3 as M,H as n,a as o,Q as d}from"./chunks/framework.3f630664.js";const C=w({inheritAttrs:!1,__name:"FwbFooter",props:{sticky:{type:Boolean,default:!1},footerType:{default:"default"}},setup(r){const t=r,e=b(),E=q(t.footerType==="sitemap"&&"bg-gray-800",t.footerType==="socialmedia"&&"p-4 bg-white sm:p-6 dark:bg-gray-800",t.footerType==="logo"&&"p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800",t.footerType==="default"&&"p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800",t.sticky&&"absolute bottom-0 left-0 z-20 w-full border-t border-gray-200 dark:border-gray-600",e.class);return(f,y)=>(c(),F("footer",m(f.$attrs,{class:s(E)}),[v(f.$slots,"default")],16))}}),P=["href"],L=["alt","src"],D=w({inheritAttrs:!1,__name:"FwbFooterBrand",props:{href:{default:""},src:{default:""},alt:{default:""},name:{default:""},imageClass:{default:""},nameClass:{default:""},aClass:{default:""}},setup(r){const t=b(),e=r,E=q("mb-6 md:mb-0",t.class),f=q("flex items-center",e.aClass),y=q("h-8 mr-3",e.imageClass),B=q("self-center text-2xl font-semibold whitespace-nowrap dark:text-white",e.nameClass);return(g,Z)=>(c(),F("div",m({class:s(E)},g.$attrs),[l("a",{class:A(s(f)),href:g.href},[l("img",{alt:g.alt,class:A(s(y)),src:g.src},null,10,L),l("span",{class:A(s(B))},x(g.name),3)],10,P)],16))}}),S={class:"sr-only"},i=w({inheritAttrs:!1,__name:"FwbFooterIcon",props:{href:{default:""},ariaLabel:{default:""},srText:{default:""}},setup(r){const t=b(),E=r.href?"a":"span",f=q("text-gray-500 hover:text-gray-900 dark:hover:text-white",t.class);return(y,B)=>(c(),k(_(s(E)),m({"aria-label":y.ariaLabel,class:s(f),href:y.href},y.$attrs),{default:a(()=>[v(y.$slots,"default"),l("span",S,x(y.srText),1)]),_:3},16,["aria-label","class","href"]))}}),p=w({inheritAttrs:!1,__name:"FwbFooterLink",props:{href:{default:""},aClass:{default:""},component:{default:"a"}},setup(r){const t=b(),e=r,E=e.component==="a"?"a":T(e.component),f=e.component==="router-link"?"to":"href",y=q("hover:underline",e.aClass),B=q("mr-4 md:mr-6 last:mr-0",t.class);return(g,Z)=>(c(),F("li",m(g.$attrs,{class:s(B)}),[(c(),k(_(s(E)),M({[s(f)||""]:g.href,class:s(y)}),{default:a(()=>[v(g.$slots,"default")]),_:3},16,["class"]))],16))}}),u=w({inheritAttrs:!1,__name:"FwbFooterLinkGroup",setup(r){const t=b(),e=q("flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0",t.class);return(E,f)=>(c(),F("ul",m(E.$attrs,{class:s(e)}),[v(E.$slots,"default")],16))}}),$={class:"vp-raw"},V={__name:"FwbFooterExample",setup(r){return(t,e)=>(c(),F("div",$,[n(s(C),null,{default:a(()=>[n(s(h),{by:"Flowbite™","copyright-message":"All Rights Reserved.",href:"https://flowbite.com/"}),n(s(u),null,{default:a(()=>[n(s(p),{href:"#"},{default:a(()=>[o(" About ")]),_:1}),n(s(p),{href:"#"},{default:a(()=>[o(" Privacy Policy ")]),_:1}),n(s(p),{href:"#"},{default:a(()=>[o(" Licensing ")]),_:1}),n(s(p),{href:"#"},{default:a(()=>[o(" Contact ")]),_:1})]),_:1})]),_:1})]))}},R={class:"vp-raw"},j={class:"grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4"},H=l("h2",{class:"mb-6 text-sm font-semibold text-gray-400 uppercase"}," Company ",-1),G=l("h2",{class:"mb-6 text-sm font-semibold uppercase text-gray-400"}," Download ",-1),I=l("h2",{class:"mb-6 text-sm font-semibold uppercase text-gray-400"}," Legal ",-1),N=l("h2",{class:"mb-6 text-sm font-semibold uppercase text-gray-400"}," Download ",-1),O={class:"py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between"},U={class:"flex mt-4 space-x-6 sm:justify-center md:mt-0"},z=l("svg",{"aria-hidden":"true",class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 8 19",xmlns:"http://www.w3.org/2000/svg"},[l("path",{"clip-rule":"evenodd",d:"M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z","fill-rule":"evenodd"})],-1),W=l("svg",{"aria-hidden":"true",class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 21 16",xmlns:"http://www.w3.org/2000/svg"},[l("path",{d:"M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"})],-1),J=l("svg",{"aria-hidden":"true",class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 17",xmlns:"http://www.w3.org/2000/svg"},[l("path",{"clip-rule":"evenodd",d:"M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z","fill-rule":"evenodd"})],-1),Q=l("svg",{"aria-hidden":"true",class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[l("path",{"clip-rule":"evenodd",d:"M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z","fill-rule":"evenodd"})],-1),K=l("svg",{"aria-hidden":"true",class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[l("path",{"clip-rule":"evenodd",d:"M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z","fill-rule":"evenodd"})],-1),X={__name:"FwbFooterExampleSitemapLinks",setup(r){return(t,e)=>(c(),F("div",R,[n(s(C),{"footer-type":"sitemap"},{default:a(()=>[l("div",j,[l("div",null,[H,n(s(u),{class:"text-gray-300 flex flex-col items-start"},{default:a(()=>[n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" About ")]),_:1}),n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" Careers ")]),_:1}),n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" Brand Center ")]),_:1}),n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" Blog ")]),_:1})]),_:1})]),l("div",null,[G,n(s(u),{class:"text-gray-300 flex flex-col items-start"},{default:a(()=>[n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" Discord Server ")]),_:1}),n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" Twitter ")]),_:1}),n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" Facebook ")]),_:1}),n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" Contact Us ")]),_:1})]),_:1})]),l("div",null,[I,n(s(u),{class:"text-gray-300 flex flex-col items-start"},{default:a(()=>[n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" Privacy Policy ")]),_:1}),n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" Licensing ")]),_:1}),n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" Terms & Conditions ")]),_:1})]),_:1})]),l("div",null,[N,n(s(u),{class:"text-gray-300 flex flex-col items-start"},{default:a(()=>[n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" iOS ")]),_:1}),n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" Android ")]),_:1}),n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" Windows ")]),_:1}),n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" MacOS ")]),_:1})]),_:1})])]),l("div",O,[n(s(h),{by:"Flowbite™",class:"text-sm text-gray-300 sm:text-center",href:"/"}),l("div",U,[n(s(i),{href:"/","sr-text":"Facebook page"},{default:a(()=>[z]),_:1}),n(s(i),{href:"/","sr-text":"Discord community"},{default:a(()=>[W]),_:1}),n(s(i),{href:"/","sr-text":"Twitter page"},{default:a(()=>[J]),_:1}),n(s(i),{href:"/","sr-text":"GitHub account"},{default:a(()=>[Q]),_:1}),n(s(i),{href:"/","sr-text":"Dribbble account"},{default:a(()=>[K]),_:1})])])]),_:1})]))}},Y={class:"vp-raw w-full"},ss={class:"md:flex md:justify-between"},ns={class:"grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"},as=l("h2",{class:"mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"}," Resources ",-1),ls=l("h2",{class:"mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"}," Follow us ",-1),os=l("h2",{class:"mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"}," Legal ",-1),ps=l("hr",{class:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"},null,-1),ts={class:"sm:flex sm:items-center sm:justify-between"},es={class:"flex mt-4 space-x-6 sm:justify-center sm:mt-0"},rs=l("svg",{"aria-hidden":"true",class:"w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white",fill:"currentColor",viewBox:"0 0 24 24"},[l("path",{"clip-rule":"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z","fill-rule":"evenodd"})],-1),cs=l("svg",{"aria-hidden":"true",class:"w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white",fill:"currentColor",viewBox:"0 0 21 16",xmlns:"http://www.w3.org/2000/svg"},[l("path",{d:"M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"})],-1),Es=l("svg",{"aria-hidden":"true",class:"w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white",fill:"currentColor",viewBox:"0 0 20 17",xmlns:"http://www.w3.org/2000/svg"},[l("path",{"clip-rule":"evenodd",d:"M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z","fill-rule":"evenodd"})],-1),ys=l("svg",{"aria-hidden":"true",class:"w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[l("path",{"clip-rule":"evenodd",d:"M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z","fill-rule":"evenodd"})],-1),is=l("svg",{"aria-hidden":"true",class:"w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[l("path",{"clip-rule":"evenodd",d:"M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z","fill-rule":"evenodd"})],-1),us={__name:"FwbFooterExampleSocialMediaIcons",setup(r){return(t,e)=>(c(),F("div",Y,[n(s(C),{"footer-type":"socialmedia"},{default:a(()=>[l("div",ss,[n(s(D),{alt:"Flowbite Logo",href:"https://flowbite.com",name:"Flowbite",src:"https://flowbite.com/docs/images/logo.svg"}),l("div",ns,[l("div",null,[as,n(s(u),{class:"flex flex-col items-start"},{default:a(()=>[n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" Flowbite ")]),_:1}),n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" Tailwind CSS ")]),_:1})]),_:1})]),l("div",null,[ls,n(s(u),{class:"flex flex-col items-start"},{default:a(()=>[n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" GitHub ")]),_:1}),n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" Discord ")]),_:1})]),_:1})]),l("div",null,[os,n(s(u),{class:"flex flex-col items-start"},{default:a(()=>[n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" Privacy Policy ")]),_:1}),n(s(p),{class:"mb-4",href:"/"},{default:a(()=>[o(" Terms & Conditions ")]),_:1})]),_:1})])])]),ps,l("div",ts,[n(s(h),{by:"Flowbite™",href:"/"}),l("div",es,[n(s(i),{href:"/"},{default:a(()=>[rs]),_:1}),n(s(i),{href:"/"},{default:a(()=>[cs]),_:1}),n(s(i),{href:"/"},{default:a(()=>[Es]),_:1}),n(s(i),{href:"/"},{default:a(()=>[ys]),_:1}),n(s(i),{href:"/"},{default:a(()=>[is]),_:1})])])]),_:1})]))}},Fs={class:"vp-raw relative"},fs={class:"overflow-scroll bg-white dark:bg-gray-900",style:{height:"200px"}},gs=l("div",{class:"px-20 py-5",style:{height:"800px"}},[l("p",{class:"mb-5"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. "),l("p",null,"Perferendis, ducimus laboriosam veritatis dolorem culpa fugiat eum voluptate fugit, enim eaque aspernatur optio saepe doloremque hic voluptates est dignissimos ex quae?")],-1),qs={__name:"FwbFooterExampleSticky",setup(r){return(t,e)=>(c(),F("div",Fs,[l("div",fs,[gs,n(s(C),{class:"rounded-none",sticky:""},{default:a(()=>[n(s(h),{by:"Flowbite™","copyright-message":"All Rights Reserved.",href:"https://flowbite.com/"}),n(s(u),null,{default:a(()=>[n(s(p),{href:"#"},{default:a(()=>[o(" About ")]),_:1}),n(s(p),{href:"#"},{default:a(()=>[o(" Privacy Policy ")]),_:1}),n(s(p),{href:"#"},{default:a(()=>[o(" Licensing ")]),_:1}),n(s(p),{href:"#"},{default:a(()=>[o(" Contact ")]),_:1})]),_:1})]),_:1})])]))}},ds={class:"vp-raw"},hs={class:"w-full max-w-screen-xl mx-auto p-4 md:py-8"},ws={class:"sm:flex sm:items-center sm:justify-between"},bs=l("hr",{class:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"},null,-1),ms={__name:"FwbFooterExampleWithLogo",setup(r){return(t,e)=>(c(),F("div",ds,[n(s(C),{"footer-type":"logo"},{default:a(()=>[l("div",hs,[l("div",ws,[n(s(D),{alt:"Flowbite Logo",href:"https://flowbite.com",name:"Flowbite",src:"https://flowbite.com/docs/images/logo.svg"}),n(s(u),{class:"flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"},{default:a(()=>[n(s(p),{href:"/"},{default:a(()=>[o(" About ")]),_:1}),n(s(p),{href:"/"},{default:a(()=>[o(" Privacy Policy ")]),_:1}),n(s(p),{href:"/"},{default:a(()=>[o(" Licensing ")]),_:1}),n(s(p),{href:"/"},{default:a(()=>[o(" Contact ")]),_:1})]),_:1})]),bs,n(s(h),{by:"Flowbite™",href:"/"})])]),_:1})]))}},Cs=d("",5),Bs=d("",3),vs=d("",3),As=d("",3),xs=d("",3),ks=d("",1),Ts=JSON.parse('{"title":"Vue Footer - Flowbite","description":"","frontmatter":{},"headers":[],"relativePath":"components/footer.md","filePath":"components/footer.md"}'),_s={name:"components/footer.md"},Ms=Object.assign(_s,{setup(r){return(t,e)=>(c(),F("div",null,[Cs,n(V),Bs,n(ms),vs,n(us),As,n(X),xs,n(qs),ks]))}});export{Ts as __pageData,Ms as default};

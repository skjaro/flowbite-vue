import{d as C,l,o,c as i,r as y,e as A,F as k,a0 as $,ah as L,M as v,g as d,a2 as _,k as b,t as D,n as T,U as u,Y as J,D as K,a3 as R,ac as M,b as P}from"./framework.3f630664.js";import{f as q}from"./flatten.a0535777.js";import{t as z}from"./FwbRange.vue_vue_type_style_index_0_scoped_fadec9c5_lang.66ff4c69.js";import{s as g}from"./simplifyTailwindClasses.275301d3.js";import{u as W}from"./useFlowbiteThemable.013ea29e.js";const E="flowbite-tab-activate-func-injection",B="flowbite-tab-active-name-injection",N="flowbite-tab-style-injection",S="flowbite-tab-visibility-directive-injection",U={key:0},G={key:1},ie=C({__FLOWBITE_TAB__:!0,__name:"FwbTab",props:{name:{type:String,required:!0},title:{type:String,default:""},disabled:{type:Boolean,default:!1}},setup(e){const t=v(B,""),r=v(S,"if");return(a,s)=>l(r)==="if"?(o(),i(k,{key:0},[l(t)===e.name?(o(),i("div",U,[y(a.$slots,"default")])):A("",!0)],64)):l(r)==="show"?$((o(),i("div",G,[y(a.$slots,"default")],512)),[[L,l(t)===e.name]]):A("",!0)}});function H(e){const t=d(()=>z("flex flex-wrap font-medium text-center text-gray-500 dark:text-gray-400 text-sm",e.variant==="underline"&&"-mb-px",e.variant==="default"&&"border-b border-gray-200 dark:border-gray-700"));return{divClasses:d(()=>e.variant==="underline"?"border-b border-gray-200 dark:border-gray-700 font-medium text-center text-gray-500 dark:text-gray-400 text-sm":""),ulClasses:t}}const Q={default:"cursor-pointer inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300",active:"cursor-pointer inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500",disabled:"inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500"},X={default:"cursor-pointer inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",active:"cursor-pointer inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500",disabled:"inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500"},Z={default:"cursor-pointer inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",active:"cursor-pointer inline-block py-3 px-4 text-white bg-blue-600 rounded-lg active",disabled:"inline-block py-3 px-4 text-gray-400 cursor-not-allowed dark:text-gray-500"};function ee(e){const t=W();return{tabClasses:d(()=>{const a=t.isActive.value,s=e.active.value?"active":e.disabled.value?"disabled":"default";return e.variant==="default"?g(Q[s],(a&&s)==="active"?t.textClasses.value:""):e.variant==="underline"?g(X[s],(a&&s)==="active"?[t.borderClasses.value,t.textClasses.value]:""):e.variant==="pills"?g(Z[s],(a&&s)==="active"?[t.backgroundClasses.value,"text-white"]:""):""})}}const te=C({__name:"FwbTabPane",props:{name:{type:String,required:!0},title:{type:String,default:""},disabled:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},setup(e){const t=e,r=v(N);r||console.warn("you can't use Tab outside of Tabs component. No tab style injection found");const a=v(E);a||console.warn("you can't use Tab outside of Tabs component. No tab activate injection found");const s=()=>{if(!t.disabled){if(!a)return console.warn("no onActivate");a(t.name)}},{tabClasses:f}=ee({active:_(t,"active"),disabled:_(t,"disabled"),variant:r});return(V,p)=>(o(),i("li",null,[b("div",{class:T(l(f)),onClick:s},D(e.title),3)]))}}),de=C({inheritAttrs:!1,__name:"FwbTabs",props:{variant:{default:"default"},modelValue:{default:""},directive:{default:"if"}},emits:["update:modelValue","click:pane"],setup(e,{emit:t}){const r=e,a=t,{ulClasses:s,divClasses:f}=H(r);u(N,r.variant);const p=J().default,F=d(()=>p?q(p()).filter(n=>n.type.__FLOWBITE_TAB__):[]),m=d({get:()=>r.modelValue,set:n=>a("update:modelValue",n)});u(B,m),u(S,_(r,"directive"));const j=n=>{m.value=n},Y=()=>{a("click:pane")};return u(E,j),(n,ae)=>(o(),i(k,null,[b("div",{class:T(l(f))},[b("ul",{class:T(l(s))},[(o(!0),i(k,null,K(F.value,(c,O)=>{var x,h,w,I;return o(),P(te,{key:O,active:m.value===((x=c.props)==null?void 0:x.name),disabled:(h=c.props)==null?void 0:h.disabled,name:(w=c.props)==null?void 0:w.name,title:(I=c.props)==null?void 0:I.title,onClick:Y},null,8,["active","disabled","name","title"])}),128))],2)],2),b("div",R(M(n.$attrs)),[y(n.$slots,"default")],16)],64))}});export{de as _,ie as a};

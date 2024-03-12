import"./chunks/FwbRange.vue_vue_type_style_index_0_scoped_fadec9c5_lang.66ff4c69.js";import{g as _,d as h,$ as f,o as i,c as u,k as m,t as g,n as v,l as p,a0 as q,a5 as C,_ as w,h as E,H as n,Q as d}from"./chunks/framework.3f630664.js";import{s as B}from"./chunks/simplifyTailwindClasses.275301d3.js";const A="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",D="block mb-2 text-sm font-medium text-gray-900 dark:text-white",V={lg:"h-3 range-lg",md:"h-2 range-md",sm:"h-1 range-sm"};function T(o){const s=_(()=>B(A,V[o.size.value])),l=_(()=>D);return{rangeClasses:s,labelClasses:l}}const x={class:"flex flex-col"},S=["step","min","max","disabled"],k=h({__name:"FwbRange",props:{disabled:{type:Boolean,default:!1},label:{default:"Range slider"},max:{default:100},min:{default:0},modelValue:{default:50},size:{default:"md"},steps:{default:1}},emits:["update:modelValue"],setup(o,{emit:s}){const l=o,a=s,e=_({get(){return l.modelValue},set(c){a("update:modelValue",c)}}),{rangeClasses:t,labelClasses:r}=T(f(l));return(c,b)=>(i(),u("label",x,[m("span",{class:v(p(r))},g(c.label),3),q(m("input",{"onUpdate:modelValue":b[0]||(b[0]=F=>e.value=F),step:c.steps,min:c.min,max:c.max,disabled:c.disabled,type:"range",class:v(p(t))},null,10,S),[[C,e.value]])]))}}),y=w(k,[["__scopeId","data-v-fadec9c5"]]),z={class:"vp-raw"},P={__name:"FwbRangeExample",setup(o){const s=E(10);return(l,a)=>(i(),u("div",z,[n(p(y),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=e=>s.value=e),modelModifiers:{number:!0}},null,8,["modelValue"]),m("pre",null,"Selected value: "+g(s.value),1)]))}},R={class:"vp-raw"},M={__name:"FwbRangeExampleDisabled",setup(o){const s=E(10);return(l,a)=>(i(),u("div",R,[n(p(y),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=e=>s.value=e),modelModifiers:{number:!0},disabled:"",label:"Disabled range"},null,8,["modelValue"])]))}},I={class:"vp-raw"},$={__name:"FwbRangeExampleMinMax",setup(o){const s=E(10);return(l,a)=>(i(),u("div",I,[n(p(y),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=e=>s.value=e),modelModifiers:{number:!0},max:15,min:5,label:"Min-max range"},null,8,["modelValue"]),m("pre",null,"Selected value: "+g(s.value),1)]))}},N={class:"vp-raw grid gap-3"},U={__name:"FwbRangeExampleSize",setup(o){const s=E(10),l=E(10),a=E(10);return(e,t)=>(i(),u("div",N,[n(p(y),{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=r=>s.value=r),modelModifiers:{number:!0},label:"Small range",size:"sm"},null,8,["modelValue"]),n(p(y),{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=r=>l.value=r),modelModifiers:{number:!0},label:"Medium range",size:"md"},null,8,["modelValue"]),n(p(y),{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=r=>a.value=r),modelModifiers:{number:!0},label:"Large range",size:"lg"},null,8,["modelValue"])]))}},L={class:"vp-raw"},O={__name:"FwbRangeExampleSteps",setup(o){const s=E(10);return(l,a)=>(i(),u("div",L,[n(p(y),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=e=>s.value=e),modelModifiers:{number:!0},steps:5,label:"Steps range"},null,8,["modelValue"]),m("pre",null,"Selected value: "+g(s.value),1)]))}},G=d('<h1 id="vue-toggle-range-flowbite" tabindex="-1">Vue Toggle Range - Flowbite <a class="header-anchor" href="#vue-toggle-range-flowbite" aria-label="Permalink to &quot;Vue Toggle Range - Flowbite&quot;">​</a></h1><h4 id="get-started-with-the-range-component-to-receive-a-number-from-the-user-anywhere-from-1-to-100-by-sliding-form-control-horizontally-based-on-multiple-options" tabindex="-1">Get started with the range component to receive a number from the user anywhere from 1 to 100 by sliding form control horizontally based on multiple options <a class="header-anchor" href="#get-started-with-the-range-component-to-receive-a-number-from-the-user-anywhere-from-1-to-100-by-sliding-form-control-horizontally-based-on-multiple-options" aria-label="Permalink to &quot;Get started with the range component to receive a number from the user anywhere from 1 to 100 by sliding form control horizontally based on multiple options&quot;">​</a></h4><hr><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Original reference: <a href="https://flowbite.com/docs/forms/range/" target="_blank" rel="noreferrer">https://flowbite.com/docs/forms/range/</a></p></div><h2 id="default" tabindex="-1">Default <a class="header-anchor" href="#default" aria-label="Permalink to &quot;Default&quot;">​</a></h2>',5),j=d(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">fwb-range</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;value&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">pre</span><span style="color:#E1E4E8;">&gt;Current value: {{ value }}&lt;/</span><span style="color:#85E89D;">pre</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { FwbRange } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;flowbite-vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">fwb-range</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;value&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">pre</span><span style="color:#24292E;">&gt;Current value: {{ value }}&lt;/</span><span style="color:#22863A;">pre</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { FwbRange } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;flowbite-vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="disabled-state" tabindex="-1">Disabled state <a class="header-anchor" href="#disabled-state" aria-label="Permalink to &quot;Disabled state&quot;">​</a></h2>`,2),H=d(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">fwb-range</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;value&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Disabled range&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">fwb-range</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;value&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Disabled range&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="min-and-max" tabindex="-1">Min and Max <a class="header-anchor" href="#min-and-max" aria-label="Permalink to &quot;Min and Max&quot;">​</a></h2>`,2),J=d(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">fwb-range</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;value&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:max</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;15&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:min</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;5&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Min-max range&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">fwb-range</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;value&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:max</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;15&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:min</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;5&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Min-max range&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="steps" tabindex="-1">Steps <a class="header-anchor" href="#steps" aria-label="Permalink to &quot;Steps&quot;">​</a></h2>`,2),Q=d(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">fwb-range</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;value&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:steps</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;5&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Steps range&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">fwb-range</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;value&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:steps</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;5&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Steps range&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="sizes" tabindex="-1">Sizes <a class="header-anchor" href="#sizes" aria-label="Permalink to &quot;Sizes&quot;">​</a></h2>`,2),K=d(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">fwb-range</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;value1&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Small range&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sm&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">fwb-range</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;value2&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Medium range&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;md&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">fwb-range</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;value3&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Large range&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lg&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">fwb-range</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;value1&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Small range&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sm&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">fwb-range</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;value2&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Medium range&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;md&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">fwb-range</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;value3&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Large range&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lg&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,1),ss=JSON.parse('{"title":"Vue Toggle Range - Flowbite","description":"","frontmatter":{},"headers":[],"relativePath":"components/range.md","filePath":"components/range.md"}'),W={name:"components/range.md"},as=Object.assign(W,{setup(o){return(s,l)=>(i(),u("div",null,[G,n(P),j,n(M),H,n($),J,n(O),Q,n(U),K]))}});export{ss as __pageData,as as default};

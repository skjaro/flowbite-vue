import{c as w}from"./chunks/FwbRange.vue_vue_type_style_index_0_scoped_fadec9c5_lang.66ff4c69.js";import{g,d as f,$ as v,o as s,c as a,F as y,D as d,n as _,l as o,r as b,k as n,t as C,e as x,H as l,w as m,a as F,Q as E}from"./chunks/framework.3f630664.js";const q={sm:"w-5 h-5",md:"w-7 h-7",lg:"w-10 h-10"};function A(t){return{sizeClasses:g(()=>w(q[t.size.value]??""))}}const D={class:"flex items-center"},k=n("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},null,-1),B=[k],T=n("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},null,-1),R=[T],z=n("span",{class:"w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"},null,-1),S=["href"],r=f({__name:"FwbRating",props:{rating:{default:3},reviewLink:{default:""},reviewText:{default:""},scale:{default:5},size:{default:"md"}},setup(t){const p=t,e=g(()=>Math.floor(p.rating)),h=g(()=>p.scale-e.value),{sizeClasses:u}=A(v(p));return(c,Z)=>(s(),a("div",D,[(s(!0),a(y,null,d(e.value,i=>(s(),a("svg",{key:i,class:_([o(u),"text-yellow-400"]),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},B,2))),128)),(s(!0),a(y,null,d(h.value,i=>(s(),a("svg",{key:i,class:_([o(u),"text-gray-300 dark:text-gray-500"]),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},R,2))),128)),b(c.$slots,"besideText"),c.reviewText&&c.reviewLink?(s(),a(y,{key:0},[z,n("a",{href:c.reviewLink,class:"text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"},C(c.reviewText),9,S)],64)):x("",!0)]))}}),$={class:"vp-raw"},V={__name:"FwbRatingExample",setup(t){return(p,e)=>(s(),a("div",$,[l(o(r),{rating:4})]))}},P={class:"vp-raw"},N=n("p",{class:"ml-2 text-sm font-medium text-gray-500 dark:text-gray-400"}," 4.75 out of 5 ",-1),I={__name:"FwbRatingExampleWithText",setup(t){return(p,e)=>(s(),a("div",P,[l(o(r),{rating:4.75},{besideText:m(()=>[N]),_:1})]))}},L={class:"vp-raw"},M=n("p",{class:"ml-2 text-sm font-bold text-gray-900 dark:text-white"}," 4.95 ",-1),O={__name:"FwbRatingExampleCount",setup(t){return(p,e)=>(s(),a("div",L,[l(o(r),{rating:1,scale:1,"review-link":"#","review-text":"73 reviews"},{besideText:m(()=>[M]),_:1})]))}},j={class:"vp-raw grid gap-2"},H={__name:"FwbRatingExampleStarSizes",setup(t){return(p,e)=>(s(),a("div",j,[l(o(r),{rating:4,size:"sm"}),l(o(r),{rating:4,size:"md"}),l(o(r),{rating:4,size:"lg"})]))}},J=n("h1",{id:"vue-rating-flowbite",tabindex:"-1"},[F("Vue Rating - Flowbite "),n("a",{class:"header-anchor",href:"#vue-rating-flowbite","aria-label":'Permalink to "Vue Rating - Flowbite"'},"​")],-1),Q=n("h2",{id:"default-rating",tabindex:"-1"},[F("Default rating "),n("a",{class:"header-anchor",href:"#default-rating","aria-label":'Permalink to "Default rating"'},"​")],-1),U=n("p",null,"Use this simple example of a star rating component for showing review results.",-1),W=E(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">fwb-rating</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:rating</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;4&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { FwbRating } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;flowbite-vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">fwb-rating</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:rating</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;4&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { FwbRating } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;flowbite-vue&#39;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="rating-with-text" tabindex="-1">Rating with text <a class="header-anchor" href="#rating-with-text" aria-label="Permalink to &quot;Rating with text&quot;">​</a></h2><p>If you also want to show a text near the stars you can use this example as a reference.</p>`,3),G=E(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">fwb-rating</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:rating</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;4.75&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">besideText</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ml-2 text-sm font-medium text-gray-500 dark:text-gray-400&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        4.75 out of 5</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">fwb-rating</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { FwbRating } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;flowbite-vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">fwb-rating</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:rating</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;4.75&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">besideText</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ml-2 text-sm font-medium text-gray-500 dark:text-gray-400&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        4.75 out of 5</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">fwb-rating</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { FwbRating } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;flowbite-vue&#39;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="rating-count" tabindex="-1">Rating count <a class="header-anchor" href="#rating-count" aria-label="Permalink to &quot;Rating count&quot;">​</a></h2><p>Aggregate more results by using this example to show the amount of reviews and the average score.</p>`,3),K=E(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">fwb-rating</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:rating</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:scale</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">review-link</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">review-text</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;73 reviews&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">besideText</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ml-2 text-sm font-bold text-gray-900 dark:text-white&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        4.95</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">fwb-rating</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { FwbRating } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;flowbite-vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">fwb-rating</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:rating</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:scale</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">review-link</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">review-text</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;73 reviews&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">besideText</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ml-2 text-sm font-bold text-gray-900 dark:text-white&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        4.95</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">fwb-rating</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { FwbRating } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;flowbite-vue&#39;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="star-sizes" tabindex="-1">Star sizes <a class="header-anchor" href="#star-sizes" aria-label="Permalink to &quot;Star sizes&quot;">​</a></h2><p>Check out the different sizing options for the star review component from small, medium, and large.</p>`,3),X=E(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">fwb-rating</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sm&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:rating</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;4&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">fwb-rating</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;md&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:rating</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;4&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">fwb-rating</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lg&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:rating</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;4&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { FwbRating } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;flowbite-vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">fwb-rating</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sm&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:rating</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;4&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">fwb-rating</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;md&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:rating</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;4&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">fwb-rating</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lg&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:rating</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;4&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { FwbRating } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;flowbite-vue&#39;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,1),ns=JSON.parse('{"title":"Vue Rating - Flowbite","description":"","frontmatter":{},"headers":[],"relativePath":"components/rating.md","filePath":"components/rating.md"}'),Y={name:"components/rating.md"},ls=Object.assign(Y,{setup(t){return(p,e)=>(s(),a("div",null,[J,Q,U,l(V),W,l(I),G,l(O),K,l(H),X]))}});export{ns as __pageData,ls as default};

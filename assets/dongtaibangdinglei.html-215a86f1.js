import{_ as n,p as e,q as t,s,R as o,t as p,Y as r,n as l}from"./framework-aa5c4115.js";const c={},i=r(`<h2 id="动态绑定类-v-bind" tabindex="-1"><a class="header-anchor" href="#动态绑定类-v-bind" aria-hidden="true">#</a> 动态绑定类（v-bind）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Class 与 Style 绑定<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>  <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 在Vue2中，静态属性和动态属性同时使用时，不确定最终哪个起作用。
         <span class="token literal-property property">在Vue3中，这是可以确定的，当动态属性使用</span> <span class="token operator">:</span>title 方式绑定时，谁在前面谁起作用；当动态属性使用 v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&#39;object&#39;</span>方式绑定时，谁在后面谁起作用。 <span class="token operator">--</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 这种写法，同时绑定静态和动态属性时，谁在前面谁生效！   <span class="token operator">--</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&#39;red&#39;</span> <span class="token operator">:</span>id<span class="token operator">=</span><span class="token string">&#39;(&quot;blue&quot;)&#39;</span><span class="token operator">&gt;</span>不负当下<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token operator">:</span>title<span class="token operator">=</span><span class="token string">&#39;(&quot;hello&quot;)&#39;</span> title<span class="token operator">=</span><span class="token string">&#39;world&#39;</span><span class="token operator">&gt;</span>不畏未来<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>hr<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 这种写法，同时绑定静态和动态属性时，谁在后面谁生效！ <span class="token operator">--</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&#39;red&#39;</span> v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&#39;{id:&quot;blue&quot;}&#39;</span><span class="token operator">&gt;</span>不负当下<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&#39;{title:&quot;hello&quot;}&#39;</span> title<span class="token operator">=</span><span class="token string">&#39;world&#39;</span><span class="token operator">&gt;</span>不畏未来<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span> 
 

  
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="官网更详细" tabindex="-1"><a class="header-anchor" href="#官网更详细" aria-hidden="true">#</a> 官网更详细</h2>`,3),d={href:"https://cn.vuejs.org/guide/essentials/class-and-style.html",target:"_blank",rel:"noopener noreferrer"};function k(v,u){const a=l("ExternalLinkIcon");return e(),t("div",null,[i,s("p",null,[s("a",d,[o("官网"),p(a)])])])}const m=n(c,[["render",k],["__file","dongtaibangdinglei.html.vue"]]);export{m as default};

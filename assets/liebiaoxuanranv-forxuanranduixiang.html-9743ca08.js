import{_ as a,p as n,q as s,Y as e}from"./framework-aa5c4115.js";const t={},o=e(`<h2 id="列表渲染-v-for-渲染对象" tabindex="-1"><a class="header-anchor" href="#列表渲染-v-for-渲染对象" aria-hidden="true">#</a> 列表渲染 v-for 渲染对象</h2><h3 id="_1-直接渲染" tabindex="-1"><a class="header-anchor" href="#_1-直接渲染" aria-hidden="true">#</a> 1. 直接渲染</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;item in obj&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 打印：张三 <span class="token number">18</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>输出：<code>张三</code> <code>18</code></li></ul><h3 id="_2-v-for-可以有三个参数-value-key-index" tabindex="-1"><a class="header-anchor" href="#_2-v-for-可以有三个参数-value-key-index" aria-hidden="true">#</a> 2. v-for 可以有三个参数，value key index</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(value, key, index) in obj&quot;</span><span class="token operator">&gt;</span>
  <span class="token punctuation">{</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">-</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> key <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">-</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> index <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>输出：<code>张三 - name - 0</code> <code>18 - age - 1</code></li></ul><h3 id="_3-v-for-可以直接接受一个整数值" tabindex="-1"><a class="header-anchor" href="#_3-v-for-可以直接接受一个整数值" aria-hidden="true">#</a> 3. v-for 可以直接接受一个整数值</h3><ul><li>在这种用例中，会将该模板基于 1...n 的取值范围重复多次</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;n in 10&quot;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> n <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>注意此处 <code>n</code> 的初值是从 <code>1</code> 开始而非 <code>0</code> ， 输出：<code>12345678910</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&#39;18&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[o];function c(r,l){return n(),s("div",null,p)}const u=a(t,[["render",c],["__file","liebiaoxuanranv-forxuanranduixiang.html.vue"]]);export{u as default};
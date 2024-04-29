import{_ as a,p as e,q as o,Y as t,s,R as n}from"./framework-aa5c4115.js";const p={},l=t(`<h2 id="v-if" tabindex="-1"><a class="header-anchor" href="#v-if" aria-hidden="true">#</a> v-if</h2><ul><li>v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染。</li><li>v-if可以在<code>template</code> 标签上使用</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>条件渲染v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1 v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;demo&quot;</span><span class="token operator">&gt;</span>demo为<span class="token boolean">true</span>时我被渲染<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;disable&quot;</span><span class="token operator">&gt;</span>改变demo的值<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span> 

  
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// v-if</span>
<span class="token keyword">const</span> demo <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">disable</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// vue3需要使用.value来获取值，如果是vue2 就是用this</span>
    demo<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>demo<span class="token punctuation">.</span>value
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-else" tabindex="-1"><a class="header-anchor" href="#v-else" aria-hidden="true">#</a> v-else</h2><ul><li>一个 <code>v-else</code> 元素必须跟在一个<code>v-if</code>或者 <code>v-else-if</code> 元素后面，否则它将不会被识别。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>条件渲染v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;disable&quot;</span><span class="token operator">&gt;</span>改变demo的值<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1 v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;demo&quot;</span><span class="token operator">&gt;</span>demo为<span class="token boolean">true</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1 v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">&gt;</span>demo为<span class="token boolean">false</span>😢<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span> 
 
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> demo <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">disable</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// vue3需要使用.value来获取值，如果是vue2 就是用this</span>
    demo<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>demo<span class="token punctuation">.</span>value
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-else-if" tabindex="-1"><a class="header-anchor" href="#v-else-if" aria-hidden="true">#</a> v-else-if</h2><ul><li>顾名思义，<code>v-else-if</code> 提供的是相应于<code> v-if</code> 的<code>else if </code>区块。它可以连续多次重复使用</li><li>和 <code>v-else</code> 类似，一个使用 <code>v-else-if</code> 的元素必须紧跟在一个<code>v-if</code>或一个 <code>v-else-if </code>元素后面。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>条件渲染v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;disable&quot;</span><span class="token operator">&gt;</span>type的值改变为<span class="token constant">B</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;disableOther&quot;</span><span class="token operator">&gt;</span>type的值改变为其他<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;type === &#39;A&#39;&quot;</span><span class="token operator">&gt;</span>
  <span class="token constant">A</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;type === &#39;B&#39;&quot;</span><span class="token operator">&gt;</span>
  <span class="token constant">B</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;type === &#39;C&#39;&quot;</span><span class="token operator">&gt;</span>
  <span class="token constant">C</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">&gt;</span>
  Not <span class="token constant">A</span><span class="token operator">/</span><span class="token constant">B</span><span class="token operator">/</span><span class="token constant">C</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span> 

  
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">disable</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// vue3需要使用.value来获取值，如果是vue2 就是用this</span>
    type<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;B&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">disableOther</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// vue3需要使用.value来获取值，如果是vue2 就是用this</span>
    type<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-show" tabindex="-1"><a class="header-anchor" href="#v-show" aria-hidden="true">#</a> v-show</h2><p>另一个可以用来按条件显示一个元素的指令是 <code>v-show</code>。其用法基本和 <code>v-if</code>一样：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>h1 v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">&quot;ok&quot;</span><span class="token operator">&gt;</span>Hello<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>区别:</strong></p><ol><li><code>v-show</code> 并不会销毁 DOM 元素,也就是说<code>v-show</code> 仅切换了该元素上名为 <code>display</code> 的 CSS 属性。</li><li><code>v-if</code> 会销毁DOM元素。</li><li><code>v-show</code> 不支持在 <code>&lt;template&gt;</code> 元素上使用，也不能和 <code>v-else</code> 搭配使用。</li></ol><h2 id="v-if-和-v-show-的区别" tabindex="-1"><a class="header-anchor" href="#v-if-和-v-show-的区别" aria-hidden="true">#</a> <code>v-if</code> 和 <code>v-show</code> 的区别</h2><p><code>v-if</code> 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。 <code>v-if</code> 也是<strong>惰性</strong>的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。 相比之下，<code>v-show</code> 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS <code>display</code> 属性会被切换。 总的来说，<code>v-if</code> 有更高的切换开销，而 <code>v-show</code> 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 <code>v-show</code> 较好；如果在运行时绑定条件很少改变，则 <code>v-if</code> 会更合适。</p><h2 id="v-if-和-v-for" tabindex="-1"><a class="header-anchor" href="#v-if-和-v-for" aria-hidden="true">#</a> <code>v-if</code> 和 <code>v-for</code></h2>`,17),c=s("div",{class:"custom-container warning"},[s("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[s("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("circle",{cx:"12",cy:"12",r:"9"}),s("path",{d:"M12 8v4"}),s("path",{d:"M12 16h.01"})])]),s("p",{class:"custom-container-title"},"WARNING"),s("p",null,[n("同时使用 "),s("code",null,"v-if"),n(" 和 "),s("code",null,"v-for"),n(" 是"),s("strong",null,"不推荐的"),n("，因为这样二者的优先级不明显。 当 "),s("code",null,"v-if"),n(" 和 "),s("code",null,"v-for"),n(" 同时存在于一个元素上的时候，"),s("code",null,"v-if"),n(" 会首先被执行。")])],-1),r=[l,c];function i(d,k){return e(),o("div",null,r)}const v=a(p,[["render",i],["__file","tiaojianxuanran.html.vue"]]);export{v as default};
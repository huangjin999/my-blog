import{_ as n,p as s,q as a,Y as t}from"./framework-aa5c4115.js";const e="/my-blog/images/json数据匹配树形菜单下拉选择框.png",p={},o=t('<h2 id="json数据匹配树形菜单" tabindex="-1"><a class="header-anchor" href="#json数据匹配树形菜单" aria-hidden="true">#</a> json数据匹配树形菜单</h2><p><img src="'+e+`" alt="json数据匹配树形菜单下拉选择框"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token function">handleTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">let</span> threeArr <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;TreeData&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//得到的字符串</span>
      <span class="token keyword">let</span> threeItem <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>threeArr<span class="token punctuation">)</span><span class="token comment">//得到的json数据</span>

      <span class="token comment">// 过滤 树形控件 的数据</span>
      <span class="token keyword">const</span> transformedDataTree <span class="token operator">=</span> threeItem<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token function">transformItemTree</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 将过滤的数据赋值给下拉框</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>TreeData <span class="token operator">=</span> transformedDataTree<span class="token punctuation">;</span>
     
      <span class="token comment">// 封装函数（树形控件）：将 response.data 转换为 树形控件 数据结构</span>
      <span class="token keyword">function</span> <span class="token function">transformItemTree</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> item<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> item<span class="token punctuation">.</span>text<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
          <span class="token comment">//判断是否有子菜单</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          node<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">child</span> <span class="token operator">=&gt;</span> <span class="token function">transformItemTree</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> node<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json数据匹配下拉选择框" tabindex="-1"><a class="header-anchor" href="#json数据匹配下拉选择框" aria-hidden="true">#</a> json数据匹配下拉选择框</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token function">handleTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">let</span> threeArr <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;TreeData&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//得到的字符串</span>
      <span class="token keyword">let</span> threeItem <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>threeArr<span class="token punctuation">)</span><span class="token comment">//得到的json数据</span>

      <span class="token comment">// 将得到的json数据，利用封装的函数过滤下拉框的数据</span>
      <span class="token keyword">const</span> transformedData <span class="token operator">=</span> threeItem<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token function">transformItem</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 将过滤的数据赋值给下拉框</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>siteOptions <span class="token operator">=</span> transformedData<span class="token punctuation">;</span>

      <span class="token comment">// 封装函数（下拉框）：将 response.data 转换为 下拉框 数据结构</span>
      <span class="token keyword">function</span> <span class="token function">transformItem</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> item<span class="token punctuation">.</span>text<span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> item<span class="token punctuation">.</span>text<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
          <span class="token comment">//判断是否有子菜单</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          node<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">child</span> <span class="token operator">=&gt;</span> <span class="token function">transformItem</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> node<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
     
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如果抽离调用的时候需要用call绑定this-页面使用则不需要绑定" tabindex="-1"><a class="header-anchor" href="#如果抽离调用的时候需要用call绑定this-页面使用则不需要绑定" aria-hidden="true">#</a> 如果抽离调用的时候需要用call绑定this，页面使用则不需要绑定</h3>`,6),c=[o];function i(l,u){return s(),a("div",null,c)}const k=n(p,[["render",i],["__file","jsonshujupipeishuxingcaidan.html.vue"]]);export{k as default};

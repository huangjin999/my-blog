import{_ as n,p as s,q as a,Y as t}from"./framework-aa5c4115.js";const p={},e=t(`<h1 id="vuex中获取this-使用this-message" tabindex="-1"><a class="header-anchor" href="#vuex中获取this-使用this-message" aria-hidden="true">#</a> vuex中获取this，使用this.$message</h1><ul><li>在vuex仓库中是不能使用<code>this.$message</code>的，会提示你未定义。</li><li>其实很简单，<strong>一行代码解决：</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token literal-property property">_this</span><span class="token operator">:</span> <span class="token keyword">this</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>我们在调用的时候使用以下方法即可：</li></ul><h3 id="例如登录案例" tabindex="-1"><a class="header-anchor" href="#例如登录案例" aria-hidden="true">#</a> 例如登录案例：</h3><ol><li>页面调用仓库</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;user/login&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> 
        UserName<span class="token punctuation">,</span>
        Password<span class="token punctuation">,</span>
        CheckPic<span class="token punctuation">,</span>
        <span class="token literal-property property">_this</span><span class="token operator">:</span> <span class="token keyword">this</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>被调用的<code>vuex</code>中的代码</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> UserName<span class="token punctuation">,</span> Password<span class="token punctuation">,</span> CheckPic<span class="token punctuation">,</span>_this <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">login</span><span class="token punctuation">(</span>UserName<span class="token punctuation">,</span> Password<span class="token punctuation">,</span> CheckPic<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token string">&quot;200&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _this<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;登录成功,欢迎xxx&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        _this<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;账号或密码错误&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
       <span class="token punctuation">}</span>
   
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","vuexzhonghuoquthis.html.vue"]]);export{r as default};
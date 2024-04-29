import{_ as e,p as a,q as n,Y as s}from"./framework-aa5c4115.js";const r={},i=s(`<h2 id="npm换源" tabindex="-1"><a class="header-anchor" href="#npm换源" aria-hidden="true">#</a> npm换源</h2><ul><li><code>npm</code>官方的源是访问比较慢，或者<code>404</code></li><li>改一下 <code>npm</code> 的 <code>registry</code> 配置，换成国内的镜像源</li></ul><h3 id="_1-黑窗口先用命令看看源指向哪里" tabindex="-1"><a class="header-anchor" href="#_1-黑窗口先用命令看看源指向哪里" aria-hidden="true">#</a> 1.黑窗口先用命令看看源指向哪里：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm config <span class="token keyword">get</span> registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>默认是指向 <code>https://registry.npmjs.org/</code>，也就是<code>npm</code>的官方源</li></ul><h3 id="_2-修改为国内源" tabindex="-1"><a class="header-anchor" href="#_2-修改为国内源" aria-hidden="true">#</a> 2.修改为国内源</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm config <span class="token keyword">set</span> registry<span class="token operator">=</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>registry<span class="token punctuation">.</span>npmmirror<span class="token punctuation">.</span>com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-这样项目中再使用npm-i就不会有错误了" tabindex="-1"><a class="header-anchor" href="#_3-这样项目中再使用npm-i就不会有错误了" aria-hidden="true">#</a> 3.这样项目中再使用<code>npm i</code>就不会有错误了</h3>`,8),c=[i];function d(t,o){return a(),n("div",null,c)}const l=e(r,[["render",d],["__file","npmhuanyuan.html.vue"]]);export{l as default};
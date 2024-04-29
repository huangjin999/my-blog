import{_ as n,p as s,q as a,Y as t}from"./framework-aa5c4115.js";const p={},e=t(`<h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2><p>闭包是一片不会被销毁的EC。它对EC中的数据有保护和保存的作用。 （闭包就是能够读取其他函数内部变量的函数）</p><p>保护：防止像全局变量那样被污染，数据在函数内部，外界访问不了。 保存：可以像全局变量那样，延长变量的生命周期。</p><p>应用场景：</p><ul><li>模块封装，在各模块规范（ES6）出现之前，都是用这样的方式防止变量污染全局</li><li>数据私有化</li><li>封装一些工具函数</li><li>在循环中创建闭包，防止取到意外的值。</li><li>防抖 、节流 、⽴即执⾏函数 、组合函数等等</li></ul><p>闭包使用不当可能会导致内存泄露</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code> 闭包的作用
        1.延长了变量的生命周期
        2.扩大了变量的作用范围
        3.保护了变量
        缺点：
        1.会导致内存泄漏
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简单实现闭包" tabindex="-1"><a class="header-anchor" href="#简单实现闭包" aria-hidden="true">#</a> 简单实现闭包</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">200</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">;</span><span class="token comment">//局部变量</span>
        <span class="token keyword">function</span> <span class="token function">gn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这里输出的a是fn中的局部变量a</span>
            <span class="token comment">// 也就是说 gn函数中的语句 引用了fn中的局部变量</span>
        <span class="token punctuation">}</span>
        <span class="token function">gn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> gn<span class="token punctuation">;</span><span class="token comment">//将函数gn返回</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> r<span class="token operator">=</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//在这里的时候就已经形成了闭包</span>
    <span class="token comment">// 这里的r接收的是函数gn的地址</span>
    <span class="token function">r</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用了函数 调用了gn </span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>再来一个</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">function</span> <span class="token function">x</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">y</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token function">y</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","index _02.html.vue"]]);export{r as default};

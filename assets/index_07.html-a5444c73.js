import{_ as n,p as s,q as a,Y as e}from"./framework-aa5c4115.js";const p={},t=e(`<h3 id="创建了一个person对象-然后将person对象重新赋值" tabindex="-1"><a class="header-anchor" href="#创建了一个person对象-然后将person对象重新赋值" aria-hidden="true">#</a> 创建了一个person对象，然后将person对象重新赋值：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;垃圾回收机制&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">,</span> person<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 垃圾回收机制 18</span>

person <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 1, 2, 3 ] 此时就可以理解  name和age为垃圾 浏览器会在合适的时机进行回收</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>原本堆内存给person对象开辟了一个空间来存放，栈内存中存放了该引用的地址，但是在下一步中，person对象成为了一个数组，</li><li>也就是说引用地址从原来的对象变成了数组，原来的引用关系就没有了，那么这时原来的对象在堆内存中就会成为一个垃圾。</li><li>产生的垃圾如果很多，而且一直不清理，堆积起来，就会影响系统的性能，甚至可能造成系统崩溃。</li></ul><h3 id="常见的浏览器垃圾回收算法" tabindex="-1"><a class="header-anchor" href="#常见的浏览器垃圾回收算法" aria-hidden="true">#</a> 常见的浏览器垃圾回收算法</h3><h4 id="引用计数" tabindex="-1"><a class="header-anchor" href="#引用计数" aria-hidden="true">#</a> 引用计数</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  obj1<span class="token punctuation">.</span>a <span class="token operator">=</span> obj2
  obj2<span class="token punctuation">.</span>a <span class="token operator">=</span> obj1<span class="token punctuation">;</span>
<span class="token comment">//   死循环</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>IE采用的引用计数算法, 定义“内存不再使用”的标准很简单，就是看一个对象是否有指向它的引用。</li><li>如果没有任何变量指向它了，说明该对象已经不再需要了。</li><li>但它却存在一个致命的问题：循环引用。</li><li>如果两个对象相互引用，尽管他们已不再使用，垃圾回收器不会进行回收，导致内存泄露。</li></ul><h4 id="标记清除法" tabindex="-1"><a class="header-anchor" href="#标记清除法" aria-hidden="true">#</a> 标记清除法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">110</span> <span class="token punctuation">}</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>
  b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>现代的浏览器已经不再使用引用计数算法了。</p></li><li><p>现代浏览器通用的大多是基于标记清除算法的某些改进算法，总体思想都是一致的。</p></li><li><p>标记清除法: 标记清除算法将“不再使用的对象”定义为“无法达到的对象”。 简单来说，就是从根部（在JS中就是全局对象）出发定时扫描内存中的对象。 凡是能从根部到达的对象，都是还需要使用的。那些无法由根部出发触及到的对象被标记为不再使用，稍后进行回收。</p></li><li><p>从这个概念可以看出，无法触及的对象包含了没有引用的对象这个概念（没有任何引用的对象也是无法触及的对象）</p></li></ul>`,10),o=[t];function l(c,i){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","index_07.html.vue"]]);export{u as default};

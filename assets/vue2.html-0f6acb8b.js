import{_ as n,p as s,q as a,Y as t}from"./framework-aa5c4115.js";const p={},e=t(`<h2 id="vue2特点" tabindex="-1"><a class="header-anchor" href="#vue2特点" aria-hidden="true">#</a> <strong>Vue2特点：</strong></h2><ul><li>MVVM框架</li><li>响应式（声明式）</li><li>组件化（支持自定义组件）</li><li>丰富的指令（DOM功能的抽象）</li><li>基于选项的（template、data、computed、watch、methods）</li><li>Vue文档集中（最好的教程）</li><li>Vue生态丰富且简单</li><li>渐近式的（可大可小的项目都能做）</li></ul><p><strong>Vue开发思想：</strong></p><p>当我们需要在交互事件中改变视图时，先在data选项中声明一个合适的变量，再在交互事件中改变这个声明式变量即可，视图自动更新，这是一种间接的操作。</p><p><strong>参考代码：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 指令的底层都是DOM操作  DOM操作抽象 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>counter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{color:aa}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是一个h2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>变色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 指令后面跟的基本上都是值，都是表达式 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是一个h2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>切换<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// Dom操作是直接操作DOM</span>
        <span class="token comment">// Vue、React：间接操作DOM</span>
        <span class="token comment">// Vue是一个构造器   new一个构造器就可以得到一个对象</span>
        <span class="token comment">// 在V3中就没法有这个构造器</span>
        <span class="token comment">// vm叫根组件  V3中App.vue组件叫根组件</span>
        <span class="token comment">// vm代理了data中的所有数据</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// 把Vue组件（自带响应式系统）挂载到直接DOM上</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token comment">// 给模板提供响应式数据，数据变了，模板会自动刷新</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">aa</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    vm<span class="token punctuation">.</span>counter<span class="token operator">++</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>aa <span class="token operator">=</span> <span class="token string">&quot;blue&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>show
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>el</strong></p><ul><li>把vue组件（响应式系统）挂载到真实DOM</li></ul><p><strong>data</strong></p><ul><li>是专门用于定义声明式变量的，这些声明式变量有什么特点？当声明式变量变化时，它所对应的视图节点自动更新。这就是所谓的响应式。</li></ul><p><strong>methods</strong></p><ul><li>是专门用于定义函数方法的地方</li></ul><p><strong>数据响应式：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">function</span> <span class="token function">upadteView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;要更新视图了~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token function">observer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 深度递归遍历</span>

        <span class="token comment">// v2中响应式靠definedProperty</span>
        <span class="token comment">// defineProperty  定义属性</span>
        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token comment">// 当获取属性时，就会走get</span>
            <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;get...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 收集依赖</span>
                <span class="token keyword">return</span> value
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 当设置属性时，会走set</span>
            <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// newValue也可能是一个对象，也需要深度递归遍历</span>
                <span class="token function">observer</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>

                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;set...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
                <span class="token function">upadteView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">||</span> target <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> target<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">defineReactive</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
        <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&quot;bj&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    data<span class="token punctuation">.</span>info <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">110</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">observer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// console.log(data.name);</span>
    <span class="token comment">// console.log(data.age);</span>
    <span class="token comment">// data.name = &quot;ok&quot;</span>
    <span class="token comment">// console.log(data.name);</span>

    data<span class="token punctuation">.</span>info<span class="token punctuation">.</span>address <span class="token operator">=</span> <span class="token string">&quot;sh&quot;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-指令" tabindex="-1"><a class="header-anchor" href="#二-指令" aria-hidden="true">#</a> 二，指令</h2><p>是否可以实现todoList案例是考察指令运用的是否灵活，地址：todolist.cn</p><p><strong>指令分类：</strong></p><ul><li>文本相关的指令</li><li>属性绑定相关的指令</li><li>事件绑定相关的指令</li><li>表单相关的指令</li><li>列表渲染相关的指令</li><li>条件渲染相关的指令</li><li>其它指令</li><li>自定义指令</li></ul><p><strong>什么是指令？</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>就是vue内置的一套“模板（都是以v-），用于在视图节点上动态绑定变量（表达式）的。指令实际上是DOM功能的抽象，所以指令实际上也是DOM操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>文本类指令</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-  {{}}文本插值、v-text、v-once、v-cloak、v-html
-  {{}} 用于绑定节点的文本，它和v-text功能是一样的。区别是{{}}这种绑定值的方式会出现“{{}}一闪而过”的效果，建议使用v-cloak来解决。
-  v-text 用于绑定节点的文件，在大多数时候，它和 {{}} 可以相互替换。
-  v-once 用于指定节点的动态内容只绑定一次。当前节点中所对应的变量发生变化，视图不更新。一般情况下，v-once只能和{{}}一起用。
-  v-once 和 v-cloak 都是不需要接收表达式来做为“值”
-  v-html 用于绑定动态的html节点，相当于DOM中的 innerHTML。这个指令默认已经做了“防注入攻击XSS”的处理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>动态属性指令 v-bind</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- v-bind 用于动态绑定节点的属性（比如title、value、class、style等）
- v-bind 用得非常多，所以经常简写成 :    &amp;lt;div :id=&#39;变量&#39;&gt;&amp;lt;/div&gt;
- 动态class语法（一）：&amp;lt;div :class=&#39;\`\${变量1} \${变量2} \`&#39;&gt;&amp;lt;/div&gt;
- 动态class语法（二）：&amp;lt;div :class=&#39;[表达式1, 表达式2, ...]&#39;&gt;&amp;lt;/div&gt;
- 动态class语法（三）：&amp;lt;div :class=&#39;{ 类名1: 布尔值1, 类名2: 布尔值2, ... }&#39;&gt;&amp;lt;/div&gt;
- 动态style语法（一）：&amp;lt;div :style=&#39;\`color:red;fontSize:20px\`&#39;&gt;&amp;lt;/div&gt;
- 动态style语法（二）：&amp;lt;div :style=&#39;[{css键值对}, {css键值对}, ...]&#39;&gt;&amp;lt;/div&gt;
- 动态style语法（三）：&amp;lt;div :style=&#39;{css键值对}&#39;&gt;&amp;lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">[v-cloak]</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ------------- 文本相关的指令 --&gt;</span>
        <span class="token comment">&lt;!-- &lt;h2 v-cloak&gt;{{name}}&lt;/h2&gt;
        &lt;h2 v-text=&quot;name&quot;&gt;&lt;/h2&gt;
        &lt;h2 v-text=&quot;&#39;年龄：&#39;+age&quot;&gt;&lt;/h2&gt;
        &lt;h2 v-text=&quot;\`年龄：\${age}\`&quot;&gt;&lt;/h2&gt;
        &lt;h2&gt;{{&#39;年龄：&#39;+age}}&lt;/h2&gt;
        &lt;div v-text=&quot;msg&quot;&gt;&lt;/div&gt;
        &lt;div v-html=&quot;msg&quot;&gt;&lt;/div&gt; --&gt;</span>

        <span class="token comment">&lt;!-- ------------- 动态绑定相关的指令 --&gt;</span>
        <span class="token comment">&lt;!-- &lt;h2 v-bind:title=&quot;a1&quot;&gt;我是一个h2&lt;/h2&gt;
        &lt;h2 :title=&quot;a1&quot;&gt;我是一个h2&lt;/h2&gt;
        &lt;h2 v-bind=&quot;{title:a1,class:a2}&quot;&gt;&lt;/h2&gt;
        &lt;h2 v-bind:title=&quot;a1&quot;&gt;我是一个h2&lt;/h2&gt; --&gt;</span>

        <span class="token comment">&lt;!-- ------------- 动态绑定相关的指令 --&gt;</span>
        <span class="token comment">&lt;!-- &lt;h1 :class=&quot;a3&quot;&gt;动态绑定样式&lt;/h1&gt;
        &lt;h1 :class=&quot;\`\${a3} \${a4}\`&quot;&gt;动态绑定样式&lt;/h1&gt;
        &lt;h1 :class=&quot;[a3,a4]&quot;&gt;动态绑定样式&lt;/h1&gt;
        &lt;h1 :class=&quot;[a3,(2&gt;1?&#39;f1&#39;:&#39;f2&#39;)]&quot;&gt;动态绑定样式&lt;/h1&gt;
        &lt;h1 :class=&quot;{box:true}&quot;&gt;动态绑定样式&lt;/h1&gt;
        &lt;h1 :class=&quot;{f1:Math.random()&gt;0.5}&quot;&gt;动态绑定样式&lt;/h1&gt;
        &lt;h1 :class=&quot;{f1:110}&quot;&gt;动态绑定样式&lt;/h1&gt; --&gt;</span>

        <span class="token comment">&lt;!-- ------------- 动态绑定相关的指令 --&gt;</span>
        <span class="token comment">&lt;!-- &lt;h1 style=&quot;color:red&quot;&gt;动态绑定行内样式&lt;/h1&gt;
        &lt;h1 :style=&quot;\`color: yellowgreen; font-size: \${a6};\`&quot;&gt;22动态绑定行内样式&lt;/h1&gt;
        &lt;h1 :style=&quot;{color:a5,fontSize:a6}&quot;&gt;动态绑定行内样式&lt;/h1&gt;
        &lt;h1 :style=&quot;[{color:&#39;gold&#39;},{fontSize:a7+&#39;px&#39;},{textDecoration:&#39;line-through&#39;}]&quot;&gt;动态绑定行内样式&lt;/h1&gt;
        &lt;h1 :style=&quot;{[a8]:a5,border:&#39;1px solid blue&#39;}&quot;&gt;动态绑定行内样式&lt;/h1&gt; --&gt;</span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// setTimeout(() =&gt; {</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;a href=&quot;http://www.baidu.com&quot;&gt;百度一下&lt;/a&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
                    <span class="token literal-property property">a1</span><span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">a2</span><span class="token operator">:</span> <span class="token string">&#39;bad&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">a3</span><span class="token operator">:</span> <span class="token string">&quot;a33&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">a4</span><span class="token operator">:</span> <span class="token string">&quot;a44&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">a5</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">a6</span><span class="token operator">:</span> <span class="token string">&quot;38px&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">a7</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">a8</span><span class="token operator">:</span> <span class="token string">&quot;color&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// }, 2000)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>事件绑定 v-on</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* v-on 用于给视图节点绑定各种JS事件，比如click、mouseenter、blur、keyup等
* v-on 用得非常多, 所以简写成 @  基本语法: &amp;lt;div @事件名. 事件修饰符=&#39;事件处理器&#39;&gt;&amp;lt;/div&gt;
* v-on 上可以使用事件修饰符:   .stop阻止冒泡   .prevent阻止默认事件  .enter绑定键盘Enter键盘....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考代码：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.outer</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.inner</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ------------- 事件相关的指令 --&gt;</span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- 事件相关的修饰符  stop --&gt;</span>
        <span class="token comment">&lt;!-- prevent once --&gt;</span>
        <span class="token comment">&lt;!-- 事件修饰符可以连用 --&gt;</span>
        <span class="token comment">&lt;!-- 事件对象，事件传参 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>outer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>outerClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inner<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click.stop.once</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>innerClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gn(1,2)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>kn(1,2,$event)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token comment">// handle(){</span>
                    <span class="token comment">//     console.log(&quot;handle...&quot;);</span>
                    <span class="token comment">// }</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;handle...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">outerClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;outerClick...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">innerClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;innerClick...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;e:&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">gn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">kn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 和原生DOM中的事件对象是类似的</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>表单绑定 v-model</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* v-model 用于表单取值(表单双向绑定), 比如input/select/textarea等
* 基本语法:  &amp;lt;input type=&quot;text&quot; v-model. 表单修饰符=&#39;变量&#39;/&gt;
* 三个修饰符:  .trim自动去除文本首尾空格  .number隐式类型转换变成Number类型  .lazy用于性能, 当表单失焦时再进行双向绑定
* v-model 还有更深的理解, 在组件化中进一步去理解
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考代码：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- 姓名：&lt;input type=&quot;text&quot; v-model=&quot;name&quot; @keyup.enter=&quot;submit&quot;&gt; --&gt;</span>

            <span class="token comment">&lt;!-- 姓名：&lt;input type=&quot;text&quot; :value=&quot;name&quot; @input=&quot;fn&quot; @keyup.enter=&quot;submit&quot;&gt; --&gt;</span>

            <span class="token comment">&lt;!-- 姓名：&lt;input type=&quot;text&quot; :value=&quot;name&quot; @input=&quot;name=$event.target.value&quot; @keyup.enter=&quot;submit&quot;&gt; --&gt;</span>

            <span class="token comment">&lt;!-- v-model都有哪些修饰符？答：number trim lazy --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model.trim</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@keyup.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model.number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@keyup.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{age}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model.lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@keyup.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model.lazy.trim</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@keyup.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

            <span class="token comment">&lt;!-- v-model也可以写在组件上，在v2中和v3中是完全不一样的 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">submit</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// console.log(this.name);</span>
                    <span class="token comment">// console.log(e.target.value);</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>列表渲染 v-for</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* v-for 用于渲染列表、对象、Number变量等等
* 当 v-for 渲染列表时, 语法是这样的  &amp;lt;div v-for=&#39;(item, index) in array&#39;&gt;&amp;lt;/div&gt;
* 当 v-for 渲染对象时, 语法是这样的  &amp;lt;div v-for=&#39;(value, key, index) in obj&#39;&gt;&amp;lt;/div&gt;
* 当 v-for 渲染Number变量时, 语法是这样的  &amp;lt;div v-for=&#39;(num, index) in 5&#39;&gt;&amp;lt;/div&gt;
* 注意: v-for在循环渲染时要求加key, 为什么呢? 在响应式原理时再解释
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- key：明天说 --&gt;</span>
        <span class="token comment">&lt;!-- v-for循环一个数组 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item,index) in todolist<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{background:(item.done?&#39;red&#39;:&#39;transparent&#39;)}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fn(item,index)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.done<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{item.text}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>x<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- v-for循环一个对象 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(value,key,index) in user<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{index}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{key}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{value}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- v-for循环一个数字 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(num,index) in 5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{index}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">todolist</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;学习vue1&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;学习vue2&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;学习vue3&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ml&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">scrore</span><span class="token operator">:</span> <span class="token number">10</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>todolist<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>done <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>todolist<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>done<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>条件渲染 v-show / v-if / v-else-if / v-else</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* v-show 用于显示或隐藏视图节点, 背后使用的 display: 原本的显示模式 / display:none 来实现的
* v-if / v-else-if / v-else 用于显示或隐藏视图节点, 背后是真正地移除或插入视图节点
* v-if 因为是节点插入或移除, 比较耗费性能; v-show只是通过样式来实现显示与隐藏, 性能开销更小.
* v-if, 不建议和 v-for 一起使用; 如果一定要在同一个节点上使用v-if和v-for, v-for优先级更好
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- v-show是通过display:none和display:block控制元素显示与隐藏？ --&gt;</span>
        <span class="token comment">&lt;!-- 答：错  它是通过控制dislay:none和display：原本的显示模式--&gt;</span>
        <span class="token comment">&lt;!-- &lt;h2 v-show=&quot;isShow&quot;&gt;我是一个孤独的h2&lt;/h2&gt; --&gt;</span>
        <span class="token comment">&lt;!-- &lt;span v-show=&quot;isShow&quot;&gt;我是一个孤独的span&lt;/span&gt; --&gt;</span>

        <span class="token comment">&lt;!-- v-if 控制元素的创建或销毁--&gt;</span>
        <span class="token comment">&lt;!-- &lt;h2 v-if=&quot;isShow&quot;&gt;我是一个孤独的h2&lt;/h2&gt; --&gt;</span>

        <span class="token comment">&lt;!-- 在vue2中, v-if不要和v-for连用,为什么? --&gt;</span>
        <span class="token comment">&lt;!-- v-for的优先级更高  先创建一片DOM元素  如果说v-if的条件是false,还会重新销毁 --&gt;</span>
        <span class="token comment">&lt;!-- 在v3中,v-if的优先级更高,可以连用 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row === 1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是第一行<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row === 2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是第二行<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row === 3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是第三行<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>我是第四行<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">row</span><span class="token operator">:</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>其它指令</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* v-pre  用于调试，可以阻止vue编译器对指令的编译，生产工作中很少使用。
* v-slot 在讲组件化时再讲，用于指定具名插槽。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>自定义指令</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 在vue开发中，除了可以使用这些内置指令外，我们还可以使用Vue.directive() 或 directives选项来自定义指令。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>面试题</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 常用的vue指令有哪些？你怎么理解指令？
* v-if 和 v-show 有什么区别？
* 文本插值有“{{}}一闪而过”问题，怎么处理？
* v-for 可以循环哪些数据类型？v-for列表渲染时为什么加key？
* v-model 有哪些修饰符？
* vue 中怎么阻止冒泡？怎么阻止默认事件？怎么监听键盘enter键？
* 工作中你封装过自定义指令吗？举一些例子
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="三-计算属性" tabindex="-1"><a class="header-anchor" href="#三-计算属性" aria-hidden="true">#</a> 三，计算属性</h2><p><strong>计算属性（非常有用）：computed选项</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 语法：在computed选项中，定义计算属性方法，在方法体使用声明式变量进行若干计算。
* 使用：在视图模板中把计算属性直接当作变量直接使用，在vue逻辑代码使用this访问计算属性，默认只有get功能。
* 作用1：当指令的表达式比较复杂时，我们建议使用计算属性来优化，提升视图模板中代码的可阅读性、可维护性。
* 作用2：用于缓存一个复杂的运算，避免组件更新时产生没有必要的性能损耗。计算属性本质上是一个函数，Vue会分析函数体中使用到了哪些声明式变量，有且仅有这些声明式变量发生变化时，计算属性才会重新执行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>如何让计算属性同时支持get/set功能呢？</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 计算属性默认是一个函数，表示get功能。为了支持set，要把计算属性写对象结构 {get, set}。
* 计算属性能不能绑定的v-model上？可以。（v-model具有set功能，计算属性可以拆成get/set写法）
* 在Vue中，计算属性能计算哪些性质的变量？除了可以计算data、vuex数据、$route等，还可以计算一切__ob__的数据。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考代码：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{\`总价$:\${(num*price).toFixed(2)}\`}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`总价$:\${(num*price).toFixed(2)}\`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btnClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>修改<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{total3}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        firstName: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>firstname<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        lastname: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lastname<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 全名: &lt;input type=&quot;text&quot; disabled :value=&quot;firstname+lastname&quot;&gt; --&gt;</span>
        <span class="token comment">&lt;!-- 全名: &lt;input type=&quot;text&quot; :value=&quot;fullname&quot; @input=&quot;fn&quot;&gt; --&gt;</span>

        <span class="token comment">&lt;!-- v-model后面可以跟一个计算属性 --&gt;</span>
        <span class="token comment">&lt;!-- 为什么v-model后面可以跟一个计算属性? --&gt;</span>
        <span class="token comment">&lt;!-- 答: 原因是计算属性有setter --&gt;</span>
        全名: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model.lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullname<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- 计算属性中不能写异步代码 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 通过vm也可以得到计算属性</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">firstname</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">lastname</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// 一般情况下,计算属性都是和data相关的</span>
                <span class="token comment">// 表示getter</span>
                <span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>price<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span> <span class="token string">&#39;总价:$&#39;</span> <span class="token operator">+</span> t
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">// 计算属性也可以和data没有任何关系</span>
                <span class="token function">total2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token string">&quot;666&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">total3</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;get...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> val<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">// 只要firstname和lastname变了,计算属性会重新计算</span>
                <span class="token literal-property property">fullname</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstname <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastname
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// console.log(val);</span>
                        <span class="token keyword">let</span> arr <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">this</span><span class="token punctuation">.</span>firstname <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                        <span class="token keyword">this</span><span class="token punctuation">.</span>lastname <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">btnClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// this.total = 110</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>total3 <span class="token operator">=</span> <span class="token number">110</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// console.log(e.target.value);</span>
                    <span class="token keyword">let</span> arr <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span>
                    <span class="token comment">// console.log(arr);</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>firstname <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>lastname <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 计算属性有什么作用？（两大作用）
* 计算属性能不能绑定在v-model上？（可以）
* 怎么理解计算属性的缓存功能？（有且仅有被关联的声明式变量变化时，计算属性才会重新计算）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-侦听器" tabindex="-1"><a class="header-anchor" href="#四-侦听器" aria-hidden="true">#</a> 四，侦听器</h2><p><strong>侦听器（监听器） watch选项</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*  作用：用于监听一个变量的变化，然后去做另一件事儿。
*  特点：当侦听器监听引用数据类型时，默认只能监听引用数据类型的第一层。为什么要这样？监听深度越深，Vue在背后要做的事儿越多，这是一种性能损耗，所以一般不要对一个引用类型的变量进行深度监听。
* 如何监听引用数据类型的每一层（深度监听）？侦听器语法这样写  info: { deep: true, handler() {} }为了避免deep:true深度监听导致性能损耗，我们推荐这种写 &#39;info.child.age&#39; () {}
* 在Vue中，侦听器能够监听哪些性质的变量变化呢？能够监听data、计算属性、vuex数据、$route等，凡是那些带有__ob__变量都能被监听到。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考代码：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 
        问:侦听器可以侦听什么?
        答: data  计算属性  vuex数据  $route
           只要这个数据有__ob__都可以被侦听器

        作用: 监听到变化,然后去一些事件
        特点: 默认情况下,只能侦听第一层,想深度侦听,deep:true
     --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{info.child.age}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info.child.age++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ml&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;wc&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 在watch中可以写异步代码</span>
            <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">num</span><span class="token punctuation">(</span><span class="token parameter">newNum<span class="token punctuation">,</span> oldNum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newNum<span class="token punctuation">,</span> oldNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">// info(newInfo, oldInfo) {</span>
                <span class="token comment">//     console.log(newInfo, oldInfo);</span>
                <span class="token comment">// }</span>
                <span class="token comment">// 一般情况下我们不会深度侦听,侦听的层级越深,vue背后做的事情越多,也是一种性能消耗</span>
                <span class="token comment">// info: {</span>
                <span class="token comment">//     deep: true,</span>
                <span class="token comment">//     handler(newInfo, oldInfo) {</span>
                <span class="token comment">//         console.log(newInfo.child.age, oldInfo.child.age);</span>
                <span class="token comment">//     }</span>
                <span class="token comment">// }</span>
                <span class="token string">&quot;info.child.age&quot;</span><span class="token punctuation">(</span>newAge<span class="token punctuation">,</span> oldAge<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newAge<span class="token punctuation">,</span> oldAge<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{obj.a}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>obj.a++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">obj</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">111</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">obj1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 深度侦听时,如何获取旧值</span>
            <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">obj1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 什么是侦听器？有什么用？
* 侦听器能不能监听数组/对象的变化？（可以，但默认不监听深层）deep:true
* 侦听器为什么默认不支持深度监听？（性能优化）
* 如何监听一个对象中的某个属性变化？（deep:true, 推荐 &#39;obj.key&#39;这种监听写法）
* 侦听器能监听哪些变量变化？（data、computed、vuex、$route等）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-响应式原理" tabindex="-1"><a class="header-anchor" href="#五-响应式原理" aria-hidden="true">#</a> 五，响应式原理</h2><p><strong>几个重要概念</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 响应式reactive（当你get/set一个变量时，你可以“捕获”这个操作行为；就好比叫你一声，你会答应一样）
* 劫持（使用Object.defineProperty对data选项进行遍历并添加getter/setter钩子）
* touch（当指令第一次与声明式变量绑定时，第一次触发声明式变量的get钩子）
* 依赖收集（当第一次touch时，把当前声明式变量的更新方法watcher添加到dep依赖数组中）
* Watcher（与声明式变量对应的dom更新方法）
* re-render（当声明式变量被set时，Vue通知Watcher更新DOM，即重新渲染）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题：说一下Vue的响应式原理？</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 当vue组件被创建时，在生命周期的第一阶段，Vue使用Object.defineProperty()对data选项进行遍历劫持并添加get/set钩子；在生命周期第二阶段，指令第一次与声明式变量touch时，发生依赖收集，再调用当前组件的watcher第一次更新DOM，DOM视图就显示出来了。当声明式变量发生变化时，vue再次通知Watcher更新视图，这就是响应式（原理）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参考代码：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- &lt;script&gt;
    // obj不具备响应式
    let obj = {
        a: 1,
        b: 2,
        c: 3
    };
    console.log(obj.a);
&lt;/script&gt; --&gt;</span>

<span class="token comment">&lt;!-- ------------------------- --&gt;</span>


<span class="token comment">&lt;!-- &lt;script&gt;
    // obj具备响应式
    let obj = {};
    let a = 1;
    let b = 2;

    Object.defineProperty(obj, &#39;a&#39;, {
        get() {
            console.log(&quot;有人访问a了~&quot;);
            return a;
        },
        set(val) {
            console.log(&quot;有人修改a了~&quot;);
            a = val;
        }
    })
    Object.defineProperty(obj, &#39;b&#39;, {
        get() {
            console.log(&quot;有人访问b了~&quot;);
            return b;
        },
        set(val) {
            console.log(&quot;有人修改b了~&quot;);
            b = val;
        }
    })
&lt;/script&gt; --&gt;</span>


<span class="token comment">&lt;!-- ------------------------- --&gt;</span>


<span class="token comment">&lt;!-- &lt;script&gt;
    let data = {
        name: &quot;ml&quot;,
        age: 18
    }
    let app = {}; // vue实例 

    Object.keys(data).forEach(k =&gt; {
        Object.defineProperty(app, k, {
            get() {
                console.log(\`getter \${k}\`);
                return data[k]
            },
            set(val) {
                console.log(\`setter \${k}\`);
                data[k] = val;
            }
        })
    })
&lt;/script&gt; --&gt;</span>

<span class="token comment">&lt;!-- ------------------------- --&gt;</span>

<span class="token comment">&lt;!-- 
    touch: 当指令第1次与声明式变量绑定时,第一次就会触发getter
    依赖收集: 当第1次touch时, 会把当前声明式变量的的更新方法(watcher) 添加到dep依赖数组中
    watcher: 与声明式变量相应的DOM更新方法
    re-render: 当声明式变量变化时,走setter,通过Watcher更新DOM说白了，就是重新渲染


    问：说一下，vue的响应式原理？
    答：当Vue组件被创建时，在生命周期的第1个阶段，Vue使用Object.defineProperty()
        对data中的数据进行深度递归遍历劫持，添加get和set钩子。在生命周期的第二个阶段，
        指令第一次与声明式变量touch时，开始进行依赖收集，就是收集Watcher，Watcher就
        是一个更新函数。然后进行第次的页面初始化（首次渲染），当数据发生变化时，Vue再次
        通过Wathcer更新视图，这就是Vue的响应式原理。
 --&gt;</span>
shuru: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ipt<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
shuchu: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ml&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// vue实例 </span>

    <span class="token comment">// 给app上添加响应式数据</span>
    <span class="token comment">// vue实例化生命周期的第1阶段(劫持,添加get和set)</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">k</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">getter </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>k<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> data<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">setter </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>k<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                data<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
                <span class="token function">Watcher</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 派发更新,通过界面更新</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 专门用来收集依赖</span>
    <span class="token keyword">let</span> dep <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// 这数组中放watcher</span>
        <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 第二阶段 挂载阶段</span>
    <span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// document.getElementById(&quot;ipt&quot;).value = app.name;  // getter</span>
        <span class="token comment">// document.getElementById(&quot;ipt&quot;).addEventListener(&#39;input&#39;, e =&gt; {</span>
        <span class="token comment">//     app.name = e.target.value; // setter</span>
        <span class="token comment">// })</span>

        <span class="token comment">// ()=&gt;{} 更新界面的函数  watcher</span>
        dep<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;ipt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token operator">=</span> app<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;ipt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            app<span class="token punctuation">.</span>name <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// setter</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// v-text=&quot;name&quot;</span>
        dep<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;h2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> app<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// v-text=&quot;num&quot;</span>
        dep<span class="token punctuation">[</span><span class="token string">&#39;num&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;h1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> app<span class="token punctuation">.</span>num<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// v-on:click=</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;btn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            app<span class="token punctuation">.</span>num<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 改变了num 走setter</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">// 第一次更新DOM</span>
        Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">k</span> <span class="token operator">=&gt;</span> <span class="token function">Watcher</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">Watcher</span><span class="token punctuation">(</span><span class="token parameter">k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dep<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六-组件和v-model" tabindex="-1"><a class="header-anchor" href="#六-组件和v-model" aria-hidden="true">#</a> 六，组件和v-model</h2><p><strong>怎么理解组件化？</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 组件是HTML的扩展，使用粒度较小的HTML元素封装成粒度更大的标签（Vue组件）。
* 自定义组件技术，是MVVM框架中最重要的技术之一，可以实现快速开发、代码复用、提升可维护性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如何自定义组件</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 一个组件，你可以理解成是由一组选项构成的。在封装自定义组件时，你可以使用大多数的Vue选项属性，比如data、template、methods等。
* 组件封装后，必须要注册（局部注册，或，全局注册）才能在Vue的地盘中使用。注册自定义组件时，组件名称名称必须由多个单词用中划线连接。
* 对一个组件来讲，最重要的选项是 template选项，用于指定组件的视图结构，在视图结构中你可以使用任意指令。
* 对一个组件来讲，你可以使用 props选项，用于接收父组件传递过来的自定义属性，在组件内部用this访问它们。
* 对一个组件来讲，你可以使用 this.$emit(&#39;自定义事件&#39;, &#39;数据&#39;)触发父组件给的自定义事件，并回传数据给父组件。
* 注意：关于语法细节问题，老师讲过，或者你在官方文档见过，你可以用。不要随意“创造”语法。
* 当子组件定义声明式变量，也使用的是data选项，需要注意的是这里的 data(){return { num: 1 }}，因为组件会被复用，为了保证data的独立性。只有 new Vue({})根组件中的data: {}。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如何进行组件注册？</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 全局注册：Vue.component(&#39;xx-yy&#39;, &#39;原材料选项&#39;)   全局注册的组件，一次注册，在任何其它组件中都可以使用。
* 局部注册：components: { &#39;xx-yy&#39;: &#39;原材料选项&#39; }  局部注册的组件，只能在当前组件作用域中使用。
* 需要注意的是，注册组件时，组件名称名称必须由多个单词用中划线连接。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关于组件间关系与通信</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 约定：在MVVM框架，当我们谈论“组件”这个概念时，通常指是自定义组件。当在A组件的视图结构中使用到了B组件，这就形成了组件关系（父子组件），那么A就是B组件的父组件，B就是A的子组件。当组件足够多时，组件间关系就会形成“组件树”。
* 通信：在Vue中，所谓“通信”就是组件之间的数据交互。父组件向子组件通信，使用自定义属性，在子组件使用props接收；子组件向父组件通信，使用自定义事件，在子组件中使用 this.$emit(&#39;自定义事件&#39;, &#39;数据&#39;) 回传数据。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>组件化的三大技术</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 自定义属性  &amp;lt;ml-score :num=&#39;num&#39; count=&#39;1&#39;&gt;&amp;lt;/ml-score&gt;
* 自定义事件  &amp;lt;ml-score @change=&#39;&#39; @click=&#39;&#39;&gt;&amp;lt;/ml-score&gt;
* 自定义插槽  &amp;lt;ml-score&gt;&amp;lt;div #default&gt;&amp;lt;/div&gt; &amp;lt;/ml-score&gt;
* 组件封装：使用自定义属性、自定义事件、自定义插槽这三大技术实现组件化。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 什么是组件化？你怎么理解组件化？
* 你工作中有没有封装比较好的组件？
* 父子组件之间如何通信？（父传子、子传父）
* 什么是插槽？什么是具名插槽？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考代码：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 
    组件：UI的复用，也可以有逻辑
    hook：逻辑的复用。

    组件的三个核心：
        1）自定义属性  &lt;ml-table :a=&quot;1&quot; id=&quot;box&quot;&gt;&lt;/ml-table&gt;
        2）自定义事件  &lt;ml-table @click=&quot;fn&quot; @ml=&quot;gn&quot;&gt;&lt;/ml-table&gt;
        3）自定义插槽  &lt;ml-table&gt;&lt;div&gt;我是一个div&lt;/div&gt;&lt;/ml-table&gt;

    组件通信：
        1）组件与组件之间进行数据交互
        2）父子通信  兄弟通信  祖先与后代
        3）props  
          自定义事件  
           ref  
          事件总线  
          集中状态管理  
          v-model
          provide inject
          $root
          $attrs
          $linsers
          $parent
          $children
          .sync
          slot
--&gt;</span>

<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.rate</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.rate&gt;span</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;./imgs/score.png&quot;</span><span class="token punctuation">)</span></span> center center / 16px 16px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.rate&gt;span.on</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;./imgs/score-on.png&quot;</span><span class="token punctuation">)</span></span> center center / 16px 16px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-rate</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num=$event<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>配送速度：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-rate</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-rate</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num2=$event<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>服务态度：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-rate</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>x-template<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;rate&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;default&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;i in 5&quot;</span> <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;{on:value&gt;=i}&quot;</span> @click<span class="token operator">=</span><span class="token string">&quot;$emit(&#39;input&#39;,i)&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

        <span class="token keyword">let</span> rate <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;#rate&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">num2</span><span class="token operator">:</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&#39;ml-rate&#39;</span><span class="token operator">:</span> rate
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.rate</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.rate&gt;span</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;./imgs/score.png&quot;</span><span class="token punctuation">)</span></span> center center / 16px 16px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.rate&gt;span.on</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;./imgs/score-on.png&quot;</span><span class="token punctuation">)</span></span> center center / 16px 16px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- &lt;ml-rate :value=&quot;num&quot; @xxx=&quot;gn&quot;&gt;&lt;/ml-rate&gt; --&gt;</span>
        <span class="token comment">&lt;!-- &lt;ml-rate :value=&quot;num&quot; @xxx=&quot;num = $event&quot;&gt;&lt;/ml-rate&gt; --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-rate</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num = $event<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>配送速度：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-rate</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-rate</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num1 = $event<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>服务质量：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-rate</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-rate</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num2 = $event<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>用户体验：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-rate</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- 组件可以复用：UI复用 --&gt;</span>
        <span class="token comment">&lt;!-- 为什么组件中的data必须是一个函数？ --&gt;</span>
        <span class="token comment">&lt;!-- 答：组件是可以复用的，如果是一个对象的，多个组件实例的data是指向同一个堆空间，数据相互影响？ --&gt;</span>

        <span class="token comment">&lt;!-- vm中的data可以是一个对象？ --&gt;</span>
        <span class="token comment">&lt;!-- 答：它不需要复用 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- &lt;template id=&quot;rate&quot;&gt;&lt;/template&gt; --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rate<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>x-template<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&#39;rate&#39;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&#39;i in 5&#39;</span> <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&#39;{on:value&gt;=i}&#39;</span> @click<span class="token operator">=</span><span class="token string">&quot;fn(i)&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&#39;i in 5&#39;</span> <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&#39;{on:value&gt;=i}&#39;</span> @click<span class="token operator">=</span><span class="token string">&quot;$emit(&#39;xxx&#39;,i)&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&#39;i in 5&#39;</span> <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&#39;{on:value&gt;=i}&#39;</span> @click<span class="token operator">=</span><span class="token string">&quot;$emit(&#39;input&#39;,i)&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

        <span class="token keyword">let</span> rate <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;#rate&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// console.log(i);</span>
                    <span class="token comment">// this.$emit(&quot;xxx&quot;, i)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;ml-rate&quot;</span><span class="token operator">:</span> rate
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">num1</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">num2</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">gn</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// console.log(i);</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">=</span> i<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.rate</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.rate&gt;span</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;./imgs/score.png&quot;</span><span class="token punctuation">)</span></span> center center / 16px 16px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.rate&gt;span.on</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;./imgs/score-on.png&quot;</span><span class="token punctuation">)</span></span> center center / 16px 16px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- v2中v-model等价与：  :value + @input --&gt;</span>
        <span class="token comment">&lt;!-- &lt;ml-rate :value=&quot;num&quot; @input=&quot;num = $event&quot;&gt;配送速度：&lt;/ml-rate&gt;
        &lt;ml-rate :value=&quot;num1&quot; @input=&quot;num1 = $event&quot;&gt;服务质量：&lt;/ml-rate&gt;
        &lt;ml-rate :value=&quot;num2&quot; @input=&quot;num2 = $event&quot;&gt;用户体验：&lt;/ml-rate&gt; --&gt;</span>

        <span class="token comment">&lt;!-- number叫v-model的修饰符 --&gt;</span>
        <span class="token comment">&lt;!-- &lt;ml-rate v-model.number=&quot;num&quot;&gt;配送速度：&lt;/ml-rate&gt;
        &lt;ml-rate v-model.number=&quot;num1&quot;&gt;服务质量：&lt;/ml-rate&gt;
        &lt;ml-rate v-model.number=&quot;num2&quot;&gt;用户体验：&lt;/ml-rate&gt; --&gt;</span>

        <span class="token comment">&lt;!-- v-model写在h5标签上 --&gt;</span>
        <span class="token comment">&lt;!-- &lt;input type=&quot;text&quot; v-model=&quot;name&quot;&gt;
        &lt;input type=&quot;text&quot; :value=&quot;name&quot; @input=&quot;name=$event.target.value&quot;&gt; --&gt;</span>

        <span class="token comment">&lt;!-- radio:  收集radio时，也是需要手动指定value，收集的也是value  --&gt;</span>
        <span class="token comment">&lt;!-- &lt;input type=&quot;radio&quot; :value=&quot;0&quot; :checked=&quot;gender===&#39;0&#39;&quot; @change=&quot;gender=$event.target.value&quot; /&gt; 男
        &lt;input type=&quot;radio&quot; :value=&quot;1&quot; :checked=&quot;gender===&#39;1&#39;&quot; @change=&quot;gender=$event.target.value&quot; /&gt; 女 --&gt;</span>
        <span class="token comment">&lt;!-- v-model: :checked +  @change --&gt;</span>
        <span class="token comment">&lt;!-- &lt;input type=&quot;radio&quot; value=&quot;0&quot; v-model=&quot;gender&quot; /&gt; 男
        &lt;input type=&quot;radio&quot; value=&quot;1&quot; v-model=&quot;gender&quot; /&gt; 女 --&gt;</span>

        <span class="token comment">&lt;!-- checkbox:  --&gt;</span>
        <span class="token comment">&lt;!-- &lt;input type=&quot;checkbox&quot; value=&quot;001&quot; v-model=&quot;hobbiey&quot; /&gt; 001
        &lt;input type=&quot;checkbox&quot; value=&quot;002&quot; v-model=&quot;hobbiey&quot; /&gt; 002
        &lt;input type=&quot;checkbox&quot; value=&quot;003&quot; v-model=&quot;hobbiey&quot; /&gt; 003 --&gt;</span>

        <span class="token comment">&lt;!-- select 下拉菜单 --&gt;</span>
        <span class="token comment">&lt;!-- v-model写在select上等价与xxx --&gt;</span>
        <span class="token comment">&lt;!-- &lt;select v-model=&quot;level&quot;&gt;
            &lt;option value=&quot;001&quot;&gt;AAA&lt;/option&gt;
            &lt;option value=&quot;002&quot;&gt;BBB&lt;/option&gt;
            &lt;option value=&quot;003&quot;&gt;CCC&lt;/option&gt;
        &lt;/select&gt; --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">:selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>level<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>level=$event.target.value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>001<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>AAA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>002<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>BBB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>003<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>CCC<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rate<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>x-template<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&#39;rate&#39;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&#39;i in 5&#39;</span> <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&#39;{on:value&gt;=i}&#39;</span> @click<span class="token operator">=</span><span class="token string">&quot;$emit(&#39;input&#39;,i)&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

        <span class="token keyword">let</span> rate <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;#rate&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;ml-rate&quot;</span><span class="token operator">:</span> rate
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">num1</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">num2</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">hobbiey</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;001&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">&quot;001&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>封装一个弹窗组件，如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.layer</span> <span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .6<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.modal</span> <span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 520px<span class="token punctuation">;</span>
            <span class="token property">margin-left</span><span class="token punctuation">:</span> -260px<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">header</span> <span class="token punctuation">{</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0 20px<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
            <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #eee<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">header&gt;.title</span> <span class="token punctuation">{</span>
            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">header&gt;.close</span> <span class="token punctuation">{</span>
            <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
            <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">main</span> <span class="token punctuation">{</span>
            <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">footer</span> <span class="token punctuation">{</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #eee<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">footer&gt;span</span> <span class="token punctuation">{</span>
            <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 28px<span class="token punctuation">;</span>
            <span class="token property">margin-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
            <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0 20px<span class="token punctuation">;</span>
            <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">footer&gt;span.primary</span> <span class="token punctuation">{</span>
            <span class="token property">border-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show=true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>弹出model<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-modal</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>编辑商品<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onSubmit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClose<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>商品名称：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-modal</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modal<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>x-template<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;layer&quot;</span> v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&#39;show&#39;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;modal&quot;</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>header<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&#39;title&#39;</span> v<span class="token operator">-</span>text<span class="token operator">=</span><span class="token string">&#39;title&#39;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&#39;close&#39;</span> @click<span class="token operator">=</span><span class="token string">&quot;$emit(&#39;close&#39;)&quot;</span><span class="token operator">&gt;</span><span class="token constant">X</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>main<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>我是主要内容区域<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> @click<span class="token operator">=</span><span class="token string">&quot;$emit(&#39;submit&#39;)&quot;</span><span class="token operator">&gt;</span>确定<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>span  @click<span class="token operator">=</span><span class="token string">&quot;$emit(&#39;close&#39;)&quot;</span><span class="token operator">&gt;</span>取消<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>footer<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ml-modal&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;#modal&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;默认标题&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">onClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">onSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 获取新的数据，发送ajax请求</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七-问题1" tabindex="-1"><a class="header-anchor" href="#七-问题1" aria-hidden="true">#</a> 七 问题1</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 常用的vue指令有哪些？你怎么理解指令？
* v-if 和 v-show 有什么区别？
* 文本插值有“{{}}一闪而过”问题，怎么处理？
* v-for 可以循环哪些数据类型？v-for列表渲染时为什么加key？
* v-model 有哪些修饰符？
* vue 中怎么阻止冒泡？怎么阻止默认事件？怎么监听键盘enter键？
* 工作中你封装过自定义指令吗？举一些例子
* 计算属性有什么作用？（两大作用）
* 计算属性能不能绑定在v-model上？（可以）
* 怎么理解计算属性的缓存功能？（有且仅有被关联的声明式变量变化时，计算属性才会重新计算）
* 说一下Vue的响应式原理？
* 什么是组件化？你怎么理解组件化？
* 你工作中有没有封装比较好的组件？(选做)
* 父子组件之间如何通信？（父传子、子传父）
* 什么是插槽？什么是具名插槽？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>答案</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>常用的vue指令有哪些？你怎么理解指令？
从分类的角度去解决：
	1）文本绑定类
	2）属性绑定类
	3）事件绑定类
	4）表单绑定类
	5）列表渲染类
	6）条件渲染类
	7）其他指令和自定义指令
	
指令本质上是对dom的操作，vue封装这些指令就是为了我们更为合理符合规范的操作dom，避免DOM滥操作。我们也可以自定义指令，自定义指令也是对DOM操作的封装，我之前工作中封装过一些自定义指令，如：xxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>v-if 和 v-show 有什么区别？

v-if是创建和销毁，比较耗费性能；v-show类似于display: 原本的显示模式 和display:none。
v-show不支持template。
如果看过源码，可以从源码角度去分析。v-if最终编译成了什么，v-show最终编译成了什么...

参考另一个答案：
手段：v-if是通过控制dom节点的存在与否来控制元素的显隐；v-show是通过设置DOM元素的display样式，block为显示，none为隐藏；

编译过程：v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单的基于css切换；

编译条件：v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译（编译被缓存？编译被缓存后，然后再切换的时候进行局部卸载); v-show是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且DOM元素保留；

性能消耗：v-if有更高的切换消耗；v-show有更高的初始渲染消耗；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>计算属性有什么作用？（两大作用）

可以研究一下，计算属性的实现原理。找资料，找视频，回答：我之前看过vue的源码，它的计算属性是xxxx实现的。

* 作用1：当指令的表达式比较复杂时，我们建议使用计算属性来优化，提升视图模板中代码的可阅读性、可维护性。
* 作用2：用于缓存一个复杂的运算，避免组件更新时产生没有必要的性能损耗。计算属性本质上是一个函数，Vue会分析函数体中使用到了哪些声明式变量，有且仅有这些声明式变量发生变化时，计算属性才会重新执行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>计算属性能不能绑定在v-model上？（可以）

计算属性可以有setter，所以可以使用在v-model上面。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>说一下Vue的响应式原理？

当vue组件被创建时，在生命周期的第一阶段，Vue使用Object.defineProperty()对data选项进行遍历劫持并添加get/set钩子；在生命周期第二阶段，指令第一次与声明式变量touch时，发生依赖收集，再调用当前组件的watcher第一次更新DOM，DOM视图就显示出来了。当声明式变量发生变化时，vue再次通知Watcher更新视图，这就是响应式（原理）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>什么是组件化？你怎么理解组件化？

现在主流的开发框，都是基于组件化的，组件的作用就是为了实现UI和逻辑的复用，在vue组件中，提供了很多的选项，如data,computed,watch,method,components,filter... 可以方便我们实现业务逻辑，组件化的好处就是可以复用UI和逻辑，在业务开发中，一般都会合理的划分组件，在vue中组件化的核心就是自定义属性，自定义事件，自定义插槽。
组件与组件通信常见的有8种方案，比如：... 展开讲   如果看过源码，可以从源码角度分析组件的实现过程。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>你工作中有没有封装比较好的组件？

面试之前，需要封装几个组件，真实开发中，不会自己封装，都是用第三方封装好的，或公司自己的组件库。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八-生命周期" tabindex="-1"><a class="header-anchor" href="#八-生命周期" aria-hidden="true">#</a> 八，生命周期</h2><p><strong>生命周期（组件从“生”到“死”的全过程）</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 创建阶段：beforeCreate、created
* 挂载阶段：beforeMount、mounted
* 更新阶段：beforeUpdate、updated
* 销毁阶段：beforeDestroy、destroyed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>与动态组件有关的两个特殊的钩</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* activated(激活)、deactivated(休眠)
* 与组件异常捕获有关的一个钩子：errorCaptured
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>什么MVVM框架？</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* MVVM流程 : M数据层 -&gt; VM虚拟DOM层 -&gt; V视图层
* 网页本质 = M数据层 + V视图结构
* M+V是怎么组装的？（ MVC  MVP  MVVM）
* M+V在哪儿组装？（前后端分离、前后端不分离、SSR服务端渲染）
* 进一步理解（阮一峰博客）：https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* Vue常用的生命周期有哪些？
* 在创建/挂载/更新/销毁阶段，Vue在背后分别做了些什么事儿？
* 响应式原理，发生在Vue哪些生命周期阶段？
* 虚拟DOM，在哪些阶段生成的？
* 哪些生命周期钩子可以执行多次？哪些执行一次？
* 什么虚拟DOM？（是一个很大的JSON数据，用于描述视图模板的，保存在内存中）
* 虚拟DOM存在的价值点在哪里？（更新，把DOM更新粒度降到最低，规避人为DOM滥操作）
* 什么diff运算？（在更新阶段，patch对新旧虚拟DOM进行对比，找出脏节点，提交更新）
* 谈一谈你对 MVVM、MVC、MVP的理解？
* 还有很多与生命周期有关的面试题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考代码：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 
        1）说一下，vue的生命周期？（8个  +  2个  + 1个）
        2）在创建 挂载 更新 销毁阶段，vue背后做了什么？
        3）响应式原理，发生在哪个阶段？
        4）虚拟DOM在哪个阶段生成？
        5）vue的生命周期哪些可以调用多次，哪些只能调用一次？
        6）什么是虚拟ODM？ js对象
        7）虚拟DOM有什么价值？ 真实DOM是一个庞大的对象，直接操作真实DOM，性能低，虚拟DOM比较小，
           新旧虚拟DOM对比可以更快地找到差异，更新差异，并且可以避免人为操作DOM泛滥。配置指令，就
           可以让我们更加规范的操作DOM。
        8）什么是diff算法 ？ 发生更新阶段，两个虚拟DOM树进行对象，找到差异，提交更新。
        9）总之，针对生命周期，有很多面试...

     --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token comment">// 1）声明methods中的方法和声明生命周期钩子函数</span>
            <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 基本上没有</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;beforeCreate.....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 2）注入一些数据，初始化响应式系统</span>
            <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;created.....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 调接口   获取路由参数</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 3）通过el $meount template找模块</span>
            <span class="token comment">//   会把模块变成render函数  调用render函数创建虚拟DOM</span>
            <span class="token comment">//    虚拟DOM转化成真实DOM，进行挂载</span>
            <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;beforeMount.....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 4）开始挂载</span>
            <span class="token comment">//    调接口  开定时器   DOM操作   建立websocket连接  实例化echarts实例</span>
            <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;mounted.....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 数据变化 beforeUpdate  </span>
            <span class="token function">beforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;beforeUpdate.....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 基本上用不到</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 要生成新的虚拟DOM，新的虚拟DOM和老的虚拟DOM进行对比</span>
            <span class="token comment">// 会执行patch运算，diff算法，找到两个虚拟DOM的最小差异，找到后，进行异步更新</span>
            <span class="token comment">// key: 可以让我们尽快找到差异</span>
            <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;updated.....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 不常用，不代表没有</span>
                <span class="token comment">// 有点类似于watch侦听器  还有点类似$nextTick();</span>
                <span class="token comment">// 不要是这里更新数据，会导致死循环</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 什么时候会调用beforeDestroy？</span>
            <span class="token comment">// 1）手动调用$destory()</span>
            <span class="token comment">// 2）路由切换   keep-alive  动态路由</span>
            <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;beforeDestroy.....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 清空定时器  解除事件绑定  清除缓存...</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 移除当前组件的watcher，DOM就无法再更新</span>
            <span class="token comment">// 移除所有子组件</span>
            <span class="token comment">// 移除事件监听器</span>
            <span class="token function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;destroyed.....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九-动态组件" tabindex="-1"><a class="header-anchor" href="#九-动态组件" aria-hidden="true">#</a> 九，动态组件</h2><p><strong>keep-alive 动态组件</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 作用：被&amp;lt;keep-alive&gt;所包裹的组件不会“销毁”，你可以理解成是对组件的一种缓存。
* 被动态组件包裹过的组件多了两个生命周期钩子：activated(激活)、deactivated(休眠)
* 注意这两组钩子的区别和使用场景：activated(执行多次) - mounted(执行一次) 、 deactivated(执行多次) - beforeDestroy(执行一次)
* &amp;lt;keep-alive :include=&#39;[&quot;ml-home&quot;]&#39; /&gt;  包含在include数组中的组件不会“死”
* &amp;lt;keep-alive :exclude=&#39;[&quot;ml-home&quot;]&#39; /&gt;  不包含在exclude数组中的组件不会“死”

*&amp;lt;component -is=&#39;组件名&#39;&gt;

* 作用：有种v-if的感觉，根据指定条件渲染目标组件，它的is属性等于哪个组件，就显示哪个组件。
* 场景：它经常配合keep-alive一起使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 在Vue中实现条件渲染渲染有哪些办法？v-if / v-show / component is
* 什么是动态组件？keep-alive include exclude 还有两个新的生命周期钩子
* mounted和activated有什么区别？deactivated和beforeDestroy有什么区别？（执行次数、使用场景）
* Vue有哪些内置组件？（插槽、动态组件、过渡动画、component）
* 哪些场景下你会用到动态组件？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考代码</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.tabbar</span> <span class="token punctuation">{</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
            <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.tabbar&gt;span</span> <span class="token punctuation">{</span>
            <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.tabbar&gt;span.on</span> <span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- &lt;ml-home&gt;&lt;/ml-home&gt;
        &lt;ml-about&gt;&lt;/ml-about&gt;
        &lt;ml-user&gt;&lt;/ml-user&gt; --&gt;</span>

        <span class="token comment">&lt;!-- &lt;component :is=&quot;comp&quot;&gt;&lt;/component&gt; --&gt;</span>

        <span class="token comment">&lt;!-- keep-alive可以缓存组件 --&gt;</span>
        <span class="token comment">&lt;!-- &lt;keep-alive :include=&quot;[&#39;ml-home&#39;]&quot;&gt; --&gt;</span>
        <span class="token comment">&lt;!-- &lt;keep-alive :include=&quot;[&#39;ml-home&#39;,&#39;ml-about&#39;]&quot;&gt; --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span> <span class="token attr-name">:exclude</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;ml-home&#39;]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>comp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- &lt;ml-tabbar @input=&quot;comp = $event&quot; :value=&quot;comp&quot;&gt;&lt;/ml-tabbar&gt; --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-tabbar</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>comp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-tabbar</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">let</span> Home <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                &lt;div&gt;
                    &lt;h1&gt;首页&lt;/h1&gt;   
                    &lt;input type=&quot;text&quot; v-model=&quot;a&quot;&gt;&lt;/input&gt; 
                &lt;/div&gt;
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;home挂载完毕了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;home销毁&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">activated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;home组件激活了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">deactivated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;home组睡眠了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> About <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                &lt;div&gt;
                    &lt;h1&gt;关于&lt;/h1&gt;   
                    &lt;input type=&quot;text&quot; v-model=&quot;a&quot;&gt;&lt;/input&gt; 
                &lt;/div&gt;
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;about挂载完毕了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;about销毁&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">activated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;about组件激活了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">deactivated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;about组睡眠了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                &lt;div&gt;
                    &lt;h1&gt;我的&lt;/h1&gt;   
                    &lt;input type=&quot;text&quot; v-model=&quot;a&quot;&gt;&lt;/input&gt; 
                &lt;/div&gt;
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;user挂载完毕了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;user销毁&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">activated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;user组件激活了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">deactivated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;user组睡眠了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ml-tabbar&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                &lt;div class=&quot;tabbar&quot;&gt;
                    &lt;span v-for=&quot;item in list&quot; :class=&#39;{on:item.tab == value}&#39; @click=&#39;$emit(&quot;input&quot;,item.tab)&#39;&gt;{{item.label}}&lt;/span&gt;
                &lt;/div&gt;
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token string">&#39;ml-home&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;首页&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token string">&#39;ml-about&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;关于&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token string">&#39;ml-user&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;我的&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;ml-home&quot;</span><span class="token operator">:</span> Home<span class="token punctuation">,</span>
                <span class="token string-property property">&quot;ml-about&quot;</span><span class="token operator">:</span> About<span class="token punctuation">,</span>
                <span class="token string-property property">&quot;ml-user&quot;</span><span class="token operator">:</span> User<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">comp</span><span class="token operator">:</span> <span class="token string">&quot;ml-home&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十-过渡动画" tabindex="-1"><a class="header-anchor" href="#十-过渡动画" aria-hidden="true">#</a> 十，过渡动画</h2><p><strong>过渡动画 transition</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 作用：是Vue内置的一种动画方式，可以很方便地为元素显示隐藏或组件切换添加动画。
* 工作中使用动画，本质是一种用户体验的优化。
* 用法：把过渡动画抽象成两个过程（Enter进入动画、Leave离开动画）
* 如何自定义进入动画？.ml-enter / .ml-enter-active / .ml-enter-to  （动画名就叫做&#39;ml&#39;）
* 如何自定义离开动画？.ml-leave / .ml-leave-active / .ml-leave-to  （动画名就叫做&#39;ml&#39;）
* 注意：Vue过渡动画的终点是不会保留的，也就是说当动画结束后元素的样式决定于class/style样式。咱们定义动画时，特别注意.ml-enter-to和.ml-leave这两个类名，最好能够配合UI样式去定义。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>使用第三方css动画（animate.css）</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 官网：https://animate.style/
* 用法：安装或引入第三方css动画库，使用enter-active-class指定进入动画，使用enter-active-class指定离开动画。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>对多个元素执行动画时</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 要给每个元素都加上唯一的key（key值不能重复），否则动画不生效。
* &amp;lt;transition mode&gt; 使用mode指定多个元素显示与隐藏的先后顺序，通常mode=&#39;out-in&#39;离开动画先执行，进入动画后执行。

*&amp;lt;transition-group&gt;
* 作用：一般用于给列表添加分组动画，参见Vue官网。工作中一般很少自己写列表动画。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* Vue中怎么做动画？（内置组件&amp;lt;transition&gt;）
* 说一下Vue动画怎么实现？（使用那6个钩子编写自定义动画、使用animate.css第三方动画）
* transition对多个元素执行动画时有什么要注意的？(加key、使用mode)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考代码：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.ml-enter</span> <span class="token punctuation">{</span>
            <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.ml-enter-active</span> <span class="token punctuation">{</span>
            <span class="token property">transition</span><span class="token punctuation">:</span> all ease 2s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.ml-enter-to</span> <span class="token punctuation">{</span>
            <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.ml-leave</span> <span class="token punctuation">{</span>
            <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.ml-leave-active</span> <span class="token punctuation">{</span>
            <span class="token property">transition</span><span class="token punctuation">:</span> all ease 2s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.ml-leave-to</span> <span class="token punctuation">{</span>
            <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShow=!isShow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>显示或隐藏<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- &lt;transition name=&quot;ml&quot;&gt;
            &lt;h2 v-if=&quot;isShow&quot;&gt;{{name}}&lt;/h2&gt;
        &lt;/transition&gt; --&gt;</span>


        <span class="token comment">&lt;!-- 在v2中，多个节点，需要加Key, v3中不需要 --&gt;</span>
        <span class="token comment">&lt;!-- &lt;transition name=&quot;ml&quot;&gt;
            &lt;h2 v-if=&quot;isShow&quot; key=&quot;a&quot;&gt;{{name}}&lt;/h2&gt;
            &lt;h2 v-else key=&quot;b&quot;&gt;666&lt;/h2&gt;
        &lt;/transition&gt; --&gt;</span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">enter-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>animate__animated animate__bounce<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">leave-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>animate__animated animate__backOutDown<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>out-in<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShow<span class="token punctuation">&quot;</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-else</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>666<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十一-混入" tabindex="-1"><a class="header-anchor" href="#十一-混入" aria-hidden="true">#</a> 十一，混入</h2><p><strong>混入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 作用：我们都知道vue组件是由若干选项组成的，混入用于向组件中混入可复用的选项。
* 全局混入：使用 Vue.mixin({选项})进行全局混入，所有组件都拥有了这些被混入的选项。
* 局部混入：使用mixins:[{}, {}]选项进行局部混入，只有当前组件才有这些被混入的选项。
* 当一个组件同时有全局混入、局部混入、自有选项时，它们的优先级满足：自有选项 &gt; 局部混入 &gt; 全局混入。
* 结论：无论是全局混入、还是局部混入，都解决的是选项的复用问题。
* 注意：工作中尽量不要使用全局混入，偶尔会用到局部混入。
* 混入缺点：当混入用得多了，选项“来历不明”，代码不易维护。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 什么是混入？有什么用？（Vue.mixin()全局混入   mixins:[]局部混入）（对选项进行复用）
* 你用混入解决过什么问题？（注入埋点方法、Echarts图表封装）
* 全局混入（data、methods、生命周期钩子）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考代码：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{a}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{b}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>调用fn<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-home</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-home</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 混入导致数据方法来源不明</span>
        <span class="token comment">// 全局混入</span>
        Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// 表示给所有的组件都混入data选项</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;fn...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;混入的created..&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        

        <span class="token keyword">let</span> kk <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">110</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">120</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token function">gg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;gg...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> gg <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">m</span><span class="token operator">:</span> <span class="token number">110</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">120</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token function">gg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;gg...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

        <span class="token comment">// 全局注册组件</span>
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ml-home&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                &lt;div&gt;首页--{{a}}--{{b}} --{{x}} ---{{y}}&lt;/div&gt;
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token comment">// 局部混入</span>
            <span class="token literal-property property">mixins</span><span class="token operator">:</span><span class="token punctuation">[</span>kk<span class="token punctuation">,</span>gg<span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">11</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">22</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;home的created..&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;vm的created..&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十二-过滤器" tabindex="-1"><a class="header-anchor" href="#十二-过滤器" aria-hidden="true">#</a> 十二，过滤器</h2><p><strong>过滤器</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>作用：用于数据处理的。
全局过滤器：使用 Vue.filter(&#39;名称&#39;, val=&gt;{return newVal}) 定义，在任何组件中都可以直接使用。
局部过滤器：使用 filters: {} 定义，只能在当前组件中使用。

注意1：过滤器只能用在 {{}} 和 v-bind 中，不支持其它指令。
注意2：过滤器还可以链式调用，像这样 {{ num | f1 | f2 }}，过滤器是有顺序的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>什么过滤器？你在工作中用它解决什么问题？（数据统一处理）
使用过滤器有什么要注意的？（只能在{{}}或者v-bind中使用）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考代码：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 过滤器只能用在两个地方 --&gt;</span>
    <span class="token comment">&lt;!-- 1）{{}}  v-bind中 只能在这两个方用 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{price | rmb}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{date | dataFormat}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 全局过滤器</span>
        Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">&quot;rmb&quot;</span><span class="token punctuation">,</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;￥&quot;</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">188.1</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&quot;20220908&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;dataFormat&quot;</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token string">&quot;2022-09-08&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token string">&quot;timeFormat&quot;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十三-问题2" tabindex="-1"><a class="header-anchor" href="#十三-问题2" aria-hidden="true">#</a> 十三 问题2</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 你工作中有没有封装比较好的组件？

* 在创建/挂载/更新/销毁阶段，Vue在背后分别做了些什么事儿？
* 响应式原理，发生在Vue哪些生命周期阶段？
* 虚拟DOM，在哪些阶段生成的？
* 什么虚拟DOM？（是一个很大的JSON数据，用于描述视图模板的，保存在内存中）
* 虚拟DOM存在的价值点在哪里？（更新，把DOM更新粒度降到最低，规避人为DOM滥操作）
* 哪些场景下你会用到动态组件？
* 混入有什么优势，有什么缺点？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十四-自定义指令" tabindex="-1"><a class="header-anchor" href="#十四-自定义指令" aria-hidden="true">#</a> 十四，自定义指令</h2><p><strong>自定义指令：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>什么指令？指令本质上就是DOM功能的一种抽象封装。
什么是自定义指令？当你在项目中有一些常用的DOM功能要复用时，建议封装成指令，这就是自定义指令。

全局指令：使用 Vue.directive(&#39;指令名&#39;, fn/{})定义全局指令，在任何组件中都能使用。
局部指令：使用 directives: {} 定义局部指令，只能在当前组件中使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>常用指令有哪些？你怎么理解指令？你工作是否自已封装过指令？
举一个你封装自定义指令的例子（权限指令、拖拽指令）
推荐8个常用指令（项目经验）：
https://zhuanlan.zhihu.com/p/337659611
https://juejin.cn/post/6906028995133833230

复用真的好吗？（对新手不太友好，复用太多，改bug，一个出问题，其它地方也会出问题，容易造成项目瘫痪。）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考代码：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>red&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- &lt;div v-color=&quot;&#39;blue&#39;&quot;&gt;我是一个孤独的DIV&lt;/div&gt; --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 可以自定义全局指令，也可以自定义局部指令</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 一个指令有两种写法</span>
            <span class="token comment">// 指令的底层都是操作DOM</span>
            <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// &quot;color&quot;: function (el, binding, vnode) {</span>
                <span class="token comment">//     console.log(&quot;el:&quot;, el);</span>
                <span class="token comment">//     console.log(&quot;binding:&quot;, binding);</span>
                <span class="token comment">//     // vnode中有一个上下文，在封装自定义指令时，会使用到上下文</span>
                <span class="token comment">//     console.log(&quot;vnode:&quot;, vnode);</span>
                <span class="token comment">//     el.style.color = binding.value;</span>
                <span class="token comment">// },</span>


                <span class="token comment">// 在对象中放生命周期函数</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// console.log(&quot;el:&quot;, el);</span>
                        <span class="token comment">// console.log(&quot;binding:&quot;, binding);</span>
                        <span class="token comment">// console.log(&quot;vnode:&quot;, vnode);</span>

                        el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> binding<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;upadte....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;el:&quot;</span><span class="token punctuation">,</span> el<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;binding:&quot;</span><span class="token punctuation">,</span> binding<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;vnode:&quot;</span><span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>旺财<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 可以自定义全局指令，也可以自定义局部指令</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">vc</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 一个指令有两种写法</span>
            <span class="token comment">// 指令的底层都是操作DOM</span>
            <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// 等价与bind + update两个钩子函数</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;el:&quot;</span><span class="token punctuation">,</span> el<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;binding:&quot;</span><span class="token punctuation">,</span> binding<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">// vnode中有一个上下文，在封装自定义指令时，会使用到上下文</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;vnode:&quot;</span><span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> binding<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>


                <span class="token comment">// 在对象中放生命周期函数</span>
                <span class="token comment">// &quot;color&quot;: {</span>
                <span class="token comment">//     bind(el, binding, vnode) {</span>
                <span class="token comment">//         console.log(&quot;bind...&quot;);</span>
                <span class="token comment">//         // console.log(&quot;el:&quot;, el);</span>
                <span class="token comment">//         // console.log(&quot;binding:&quot;, binding);</span>
                <span class="token comment">//         // console.log(&quot;vnode:&quot;, vnode);</span>
                <span class="token comment">//         el.style.color = binding.value;</span>
                <span class="token comment">//     },</span>
                <span class="token comment">//     update(el, binding, vnode) {</span>
                <span class="token comment">//         console.log(&quot;upadte....&quot;);</span>
                <span class="token comment">//         // console.log(&quot;el:&quot;, el);</span>
                <span class="token comment">//         // console.log(&quot;binding:&quot;, binding);</span>
                <span class="token comment">//         // console.log(&quot;vnode:&quot;, vnode);</span>
                <span class="token comment">//         el.style.color = binding.value;</span>
                <span class="token comment">//     },</span>
                <span class="token comment">// }</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>旺财<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- &lt;input type=&quot;text&quot; v-mlmodel.lazy=&quot;name&quot;&gt; --&gt;</span>
        <span class="token comment">&lt;!-- &lt;input type=&quot;text&quot; v-mlmodel.trim=&quot;name&quot;&gt; --&gt;</span>
        <span class="token comment">&lt;!-- &lt;input type=&quot;text&quot; v-mlmodel.upper=&quot;name&quot;&gt; --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-mlmodel.number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&quot;mlmodel&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;el:&quot;</span><span class="token punctuation">,</span> el<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;binding:&quot;</span><span class="token punctuation">,</span> binding<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;vnode:&quot;</span><span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">let</span> <span class="token punctuation">{</span> expression<span class="token punctuation">,</span> modifiers <span class="token punctuation">}</span> <span class="token operator">=</span> binding<span class="token punctuation">;</span>
                <span class="token keyword">let</span> <span class="token punctuation">{</span> context <span class="token punctuation">}</span> <span class="token operator">=</span> vnode<span class="token punctuation">;</span>
                <span class="token keyword">let</span> <span class="token punctuation">{</span> lazy<span class="token punctuation">,</span> trim<span class="token punctuation">,</span> upper<span class="token punctuation">,</span> number <span class="token punctuation">}</span> <span class="token operator">=</span> modifiers<span class="token punctuation">;</span>
                <span class="token comment">// console.log(lazy);</span>

                el<span class="token punctuation">.</span>value <span class="token operator">=</span> context<span class="token punctuation">[</span>expression<span class="token punctuation">]</span><span class="token punctuation">;</span>

                <span class="token comment">// el.addEventListener(lazy?&#39;change&#39;:&#39;input&#39;, function (e) {</span>
                el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>lazy <span class="token operator">?</span> <span class="token string">&#39;blur&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> val <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>trim<span class="token punctuation">)</span> val <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>upper<span class="token punctuation">)</span> val <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>number<span class="token punctuation">)</span> val <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>

                    <span class="token comment">// console.log(val);</span>
                    context<span class="token punctuation">[</span>expression<span class="token punctuation">]</span> <span class="token operator">=</span> val
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>旺财<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- &lt;input type=&quot;text&quot; v-mlmodel.lazy=&quot;name&quot;&gt; --&gt;</span>
        <span class="token comment">&lt;!-- &lt;input type=&quot;text&quot; v-mlmodel.trim=&quot;name&quot;&gt; --&gt;</span>
        <span class="token comment">&lt;!-- &lt;input type=&quot;text&quot; v-mlmodel.upper=&quot;name&quot;&gt; --&gt;</span>
        <span class="token comment">&lt;!-- &lt;input type=&quot;text&quot; v-mlmodel.number=&quot;name&quot;&gt; --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-mlmodel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&quot;mlmodel&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;el:&quot;</span><span class="token punctuation">,</span> el<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;binding:&quot;</span><span class="token punctuation">,</span> binding<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;vnode:&quot;</span><span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">let</span> <span class="token punctuation">{</span> expression<span class="token punctuation">,</span> modifiers<span class="token punctuation">,</span>value <span class="token punctuation">}</span> <span class="token operator">=</span> binding<span class="token punctuation">;</span>
                <span class="token keyword">let</span> <span class="token punctuation">{</span> context <span class="token punctuation">}</span> <span class="token operator">=</span> vnode<span class="token punctuation">;</span>
                <span class="token keyword">let</span> <span class="token punctuation">{</span> lazy<span class="token punctuation">,</span> trim<span class="token punctuation">,</span> upper<span class="token punctuation">,</span> number <span class="token punctuation">}</span> <span class="token operator">=</span> modifiers<span class="token punctuation">;</span>
                <span class="token comment">// console.log(lazy);</span>

                el<span class="token punctuation">.</span>value <span class="token operator">=</span> context<span class="token punctuation">[</span>expression<span class="token punctuation">]</span><span class="token punctuation">;</span>

                <span class="token comment">// el.addEventListener(lazy?&#39;change&#39;:&#39;input&#39;, function (e) {</span>
                el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>lazy <span class="token operator">?</span> <span class="token string">&#39;blur&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> val <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>trim<span class="token punctuation">)</span> val <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>upper<span class="token punctuation">)</span> val <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>number<span class="token punctuation">)</span> val <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>

                    <span class="token comment">// console.log(val);</span>
                    context<span class="token punctuation">[</span>expression<span class="token punctuation">]</span> <span class="token operator">=</span> val
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十五-插件" tabindex="-1"><a class="header-anchor" href="#十五-插件" aria-hidden="true">#</a> 十五，插件</h2><p><strong>插件封装：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在Vue生态中，除了Vue本身，其它所有与Vue相关的第三方包，都是插件，都得以插件的方式进行集成。
作用：是一种更加高级的代码复用技术，可以以插件的方式为我们提供可复用的组件、混入、指令、过滤器、原型链API。
经验：以公司真实项目、优秀开源项目，你只要发现里面有好用的组件或指令，插件，都收集到你的代码库中，以后可以复用。

浏览器和vue相关的包：https://awesomejs.dev/for/vue/pkg/286379879029539329/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如何封装Vue插件？(两种写法)：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第一种写法： const Plugin = { install (Vue) { } }
第二种写法： const Plugin = function (Vue) {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>你有封装过Vue插件？怎么封装的？封装过什么？（有，老项目中封装的好用东西，以插件的方式搬到新项目中去）
请问 Vue.use() 有什么用？讲一讲它背后做了什么？（调用插件函数或install方法，并传入Vue实参）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考代码：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>red&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{name}} --- {{a}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{price | rmb}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 插件：代码的复用技术  更加高级</span>
        <span class="token comment">//   可以在插件中封装可复用的组件，指令，过滤器，原型链，混入...</span>
        <span class="token comment">//    之前学习过的复用技术，都可以在插件中体现</span>

        <span class="token comment">// vue中如何封装插件，两种写法</span>
        <span class="token comment">//    1）const MyPlugin = { install(Vue){ } }</span>
        <span class="token comment">//       Vue.use(Myplugin)</span>
        <span class="token comment">//    2）const Myplugin = function(Vue){ }</span>

        <span class="token keyword">let</span> MlPlugin <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">666</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ml-button&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                        &lt;div&gt;我是一个小button&lt;/div&gt;
                    </span><span class="token template-punctuation string">\`</span></span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">&quot;rmb&quot;</span><span class="token punctuation">,</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token string">&quot;￥&quot;</span> <span class="token operator">+</span> val<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> binding<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$ml</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;ml...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        
        <span class="token keyword">let</span> <span class="token function-variable function">MlPlugin2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>eat <span class="token operator">=</span> <span class="token number">123456789</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MlPlugin<span class="token punctuation">)</span><span class="token punctuation">;</span>
        Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MlPlugin2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">100</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$ml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>eat<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十六-两个的api" tabindex="-1"><a class="header-anchor" href="#十六-两个的api" aria-hidden="true">#</a> 十六，两个的API</h2><p><strong>Vue.nextTick() / this.$nextTick()</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set操作，代码确实是同步的，但是set行为是异步的；set操作修改声明变量，触发re-render生成新的虚拟DOM，进一步执行diff运算，找到脏节点集合，交给Vue背后的更新队列去执行循环更新。

什么是nextTick？在更新队列中每一个更新任务都是一个更新单元，nextTick表示下一个更新单元（更新周期）。

作用：这么描述一个场景，我们set操作data（更新DOM），你希望访问这个DOM的最新状态时，使用this.$nextTick(handler)。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>this.$forceUpdate()</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>事实：Vue响应式是有缺陷的，什么缺陷？在复杂的Vue应用中，如果声明式变量是引用数据类型，当你set操作这些复杂的引用数据类型时，视图不更新。解决方案，set操作完成后，立即调用 this.$forceUpdate()强调更新（强制re-render）有时候，this.$forceUpdate()也无法解决上述问题，对set操作的变量进行一行深复制。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>面试题</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>谈一谈你对 Vue.nextTick() 的理解？有什么用？（在nextTick访问最新的DOM）
nextTick() 和 updated() 的区别 （前者只是表示一个更新单元已完成，后者是生命周期钩子表示整个页面更新完成）
Vue响应式有没有缺陷呢？有什么缺陷？遇到这种问题你会怎么办？
什么是深拷贝？什么是浅拷贝？有哪些深拷贝的方法？让你手写一个深拷贝方法，你会怎么写？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考代码：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>num<span class="token punctuation">&#39;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>h1<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>add<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- &lt;h1 v-text=&quot;info.user.child[0].age&quot;&gt;&lt;/h1&gt; --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info.user.child[0]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>改变<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token comment">// info: {</span>
                    <span class="token comment">//     user: {</span>
                    <span class="token comment">//         child: [</span>
                    <span class="token comment">//             {</span>
                    <span class="token comment">//                 name: &quot;ml&quot;, age: 18</span>
                    <span class="token comment">//             }</span>
                    <span class="token comment">//         ]</span>
                    <span class="token comment">//     }</span>
                    <span class="token comment">// }</span>
                    <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                <span class="token number">18</span>
                            <span class="token punctuation">]</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;&lt;a id=&quot;a&quot; href=&quot;&quot;&gt;我是一个孤独的DIV&lt;/a&gt;&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> res<span class="token punctuation">;</span>

                    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 数据变了，要刷新模块，这个刷新过程是异步</span>
                    <span class="token comment">// 操作数据是同步的，后面的刷新模板是异步的</span>
                    <span class="token comment">// 数据变了，产生新的虚拟DOM，新旧的虚拟DOM需要进行DIFF算法，找到差异，差异也叫脏节点</span>
                    <span class="token comment">// 找到脏节点，交给vue的更新队列，去异步更新节点</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token operator">++</span>

                    <span class="token comment">// nextTick  next是下一个的意思    Tick是记录</span>
                    <span class="token comment">// 每一次更新，都很多的更新任务，每一个更新任务，就是一个更新单元，nextTick表示下一个更新单元</span>
                    <span class="token comment">// const res = document.getElementById(&#39;h1&#39;).innerText</span>
                    <span class="token comment">// console.log(res)</span>

                    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                        <span class="token comment">// 作用：当改变数据了，模板要更新，在nextTick可以获取DOM的最新状态</span>
                        <span class="token comment">// updated类似，也是等模板更新完毕后，才会执行</span>
                        <span class="token comment">// 问：updated和nextTick有什么区别？</span>
                        <span class="token comment">// 答：updated表示整个模板渲染完毕后才会执行，是指整个页面。</span>
                        <span class="token comment">//    nextTick指在下一个更新单元后执行</span>
                        <span class="token keyword">const</span> res <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// this.info.user.child[0].age++</span>

                    <span class="token comment">// 如果数组中放的是基本数据类型</span>
                    <span class="token comment">// 通过索引操作数据，并不是响应式的</span>
                    <span class="token comment">// 通过length操作也不是响应式</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>info<span class="token punctuation">.</span>user<span class="token punctuation">.</span>child<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">++</span>

                    <span class="token comment">// 你感觉vue的响应式系统，有什么缺陷？</span>
                    <span class="token comment">// 1）如果组件嵌套的非常深，数据结构也非常深，可以会导致响应式失效。</span>
                    <span class="token comment">// 失效了，如何解决？</span>
                    <span class="token comment">//   A）$forceUpdate()   有可能不起作用</span>
                    <span class="token comment">//   B）需要对数据实现深copy</span>
                    <span class="token comment">//       this.info.user.child[0].age++</span>
                    <span class="token comment">//       this.info = JSON.parse(JSON.stringfy(this.info))</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 强制更新</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十七-组件通信" tabindex="-1"><a class="header-anchor" href="#十七-组件通信" aria-hidden="true">#</a> 十七，组件通信</h2><p><strong>组件通信：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1)父子组件通信：父传子使用自定义属性（props），子传父使用自定义事件（$emit()）。

2)状态提升：当兄弟组件之间需要共享数据时，我们通常的做法是把这个数据定义它们的共同的父组件中，再通过自定义属性实现数据共享。

3)provide/inject：这是在组件树中，自上而下的一种数据通信方案，也就是说只能父级组件中向后代组件传递。需要注意的是，当provide提供动态数据（声明式变量）时，动态数据发生变化，后代组件们不会自动更新。这是为什么呢？你自己从生命周期流程的角度去思考。

4)ref通信：ref是Vue内置的一个属性，每一个HTML元素或组件都有这个属性；ref作用在HTML元素上得到DOM实例，ref作用在组件上得到组件实例。使用ref访问组件实例，进一步可以访问组件中的数据和方法。（说明：ref是一种快速的DOM的访问方式，当然ref也可作用在组件上得到组件实例。这些ref得到的DOM实例或组件实例，使用this.$refs来访问它们。ref尽量少用，除非某些难搞的需求。）

5)插槽通信：借助&amp;lt;slot&gt;组件实现从子组件向父组件传递数据，借助this.$slots访问父组件中的插槽实例。(在自定义组件中使用this.$slots访问父组件给的插槽实例；在父组件插槽中使用#default=&#39;scoped&#39;访问子组件&amp;lt;slot&gt;回传的数据。这种通信在组件库中、工作中，非常常见！)

6)$parent/$children：借助$parent/$children可以实现，在任一组件中访问组件树中的其它任意组件实例，可以做到在组件中随意穿梭。($parent表示的是当前组件的父组件实例，$children表示的是当前组件的子组件们。)

7)$attrs/$listeners：借助$attrs可访问父组件传递过来的自定义属性（除了class和style外），借助$listenrs可以访问父组件给的自定义事件。在某些场景下，$attrs/$listeners可以替代props/$emit()这种通用的通信方案。

8)事件总线：借助于Vue内置的事件系统（$on/$emit/$off/$once）实现“订阅-发布”式的通信，这种通信方式是一种与组件层级无关的“一对多”的通信。（工作中很少用，一些特殊的Vue项目才用得到事件总线。）

9)Vuex通信：这是Vue架构中终极的通信方案，也是Vue架构中用的最多的一种通信方案。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue中有哪些常用的通信方案？（父子、ref、provide、slot、$parent、事件总线、Vuex）
父子组件之间怎么通信？（父传子、子传父）
provide/inject有什么特点？（只能自上而下、没有响应式）
$attrs能不能接收class和style？（不能）
谈一谈你对事件总线的理解（“订阅-发布”模式）的理解？
谈一谈以上九种通信方案之间的区别？或者任意两种通信方案之间的区别？（语法区别、使用场景的区别）
有没有读过vue源码？经常加班，没时间读，今年打算读一下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考代码：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-a</span> <span class="token attr-name">:couter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>couter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-a</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-b</span> <span class="token attr-name">:couter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>couter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-b</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ml-a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                &lt;div&gt;
                    &lt;div&gt;我是ml-a组件 -- {{couter}}&lt;/div&gt;
                &lt;/div&gt;
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">couter</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ml-b&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                &lt;div&gt;
                    &lt;div&gt;我是ml-b组件 -- {{couter}}&lt;/div&gt;
                &lt;/div&gt;
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">couter</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">couter</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-a</span> <span class="token attr-name">:couter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>couter<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@add</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>couter+=$event<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-a</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-b</span> <span class="token attr-name">:couter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>couter<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@add</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>couter+=$event<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-b</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ml-a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                &lt;div&gt;
                    &lt;div&gt;我是ml-a组件 -- {{couter}}&lt;/div&gt;
                    &lt;button @click=&quot;$emit(&#39;add&#39;,1)&quot;&gt;+1&lt;/button&gt;
                &lt;/div&gt;
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">couter</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ml-b&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                &lt;div&gt;
                    &lt;div&gt;我是ml-b组件 -- {{couter}}&lt;/div&gt;
                    &lt;button @click=&quot;$emit(&#39;add&#39;,1)&quot;&gt;+1&lt;/button&gt;
                &lt;/div&gt;
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">couter</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">couter</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-a</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ml-a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                &lt;div&gt;
                    &lt;div&gt;我是ml-a组件 -- {{msg}}&lt;/div&gt;
                    &lt;span v-for=&quot;i in list&quot;&gt;{{i}}&lt;/span&gt;
                    &lt;div&gt;{{num}}&lt;/div&gt;
                &lt;/div&gt;
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;num&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// provide + inject是自上而下的通信方案</span>
        <span class="token comment">// 提供数据变了，后代不会自动刷新，提供的数据并不是响应式的，为什么？</span>
        <span class="token comment">// 答：从生命周期角度分析，注入数据发生在第个阶段</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;a,b,c,d&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">110</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-a</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mla<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-a</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>访问a组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ml-a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                &lt;div&gt;
                    &lt;div&gt;我是ml-a组件&lt;/div&gt;
                &lt;/div&gt;
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;fn...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>mla<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>mla<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>mla<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-a</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>我是插入的内容 -- {{a}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#aa</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>我是插入的内容2 -- {{b}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#bb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scoped<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>我是插入的内容3 -- {{scoped.car}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#cc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{car}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>我是插入的内容3 -- {{car}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ml-a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                &lt;div&gt;
                    &lt;div&gt;我是ml-a组件&lt;/div&gt;
                    &lt;slot name=&quot;default&quot;&gt;
                        &lt;div&gt;我是默认值&lt;/div&gt;
                    &lt;/slot&gt;
                    &lt;slot name=&#39;aa&#39;&gt;
                        &lt;div&gt;我是默认值&lt;/div&gt;
                    &lt;/slot&gt;
                      &lt;slot name=&#39;bb&#39; :car=&#39;car&#39;&gt;
                        &lt;div&gt;我是默认值&lt;/div&gt;
                    &lt;/slot&gt;
                     &lt;/slot&gt;
                      &lt;slot name=&#39;cc&#39; :car=&#39;car&#39;&gt;
                        &lt;div&gt;我是默认值&lt;/div&gt;
                    &lt;/slot&gt;
                &lt;/div&gt;
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">car</span><span class="token operator">:</span> <span class="token string">&quot;benchi&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-a</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-a</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>获取子组件中的数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ml-a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                &lt;div&gt;
                    &lt;div&gt;我是ml-a组件&lt;/div&gt;
                &lt;/div&gt;
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$parent<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.page span</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0 10px<span class="token punctuation">;</span>
            <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.page span.on</span> <span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-a</span> <span class="token attr-name">:page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chagePage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 在有些情况下，$attrs和$listeners比较props和$emit更好用</span>
        <span class="token comment">// $attrs可以接收父传递过来的自定义属性</span>
        <span class="token comment">// $listeners可以接收父传递过来的自定义事件</span>
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ml-a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                &lt;div class=&quot;page&quot;&gt;
                    &lt;div&gt;我是ml-a组件&lt;/div&gt;
                    &lt;span @click=&#39;$listeners.change(i)&#39; :class=&quot;{on:$attrs.page === i}&quot; v-for=&quot;i in pageArr&quot; v-text=&quot;i&quot;&gt;&lt;/span&gt;
                &lt;/div&gt;
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;$attrs:&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$attrs<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;$listeners:&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$listeners<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">pageArr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$attrs<span class="token punctuation">.</span>page<span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
                    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                        <span class="token comment">// return [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;,&quot;e&quot;]</span>
                        <span class="token keyword">return</span> <span class="token punctuation">[</span>p<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span>p<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>p<span class="token punctuation">,</span>p<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>p<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>

                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">chagePage</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>page <span class="token operator">=</span> val <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 
        事件总线：
            1) let bus = new Vue();  事件总线
                 bus.$on(&quot;eat&quot;,callback)  订阅  监听
                 bus.$emit(&quot;eat&quot;,&#39;hello&#39;)  发布  可以传递数据
                 bus.$off(&quot;eat&quot;)  取消订阅  取消监听
                 bus.$once(&quot;eat&quot;)  只监听一次，或只订阅一次
     --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-wc</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-wc</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ml-xq</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ml-xq</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">let</span> bus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span> <span class="token comment">// 事件总线</span>

        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ml-wc&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                &lt;div&gt;
                    &lt;h2&gt;wc在线&lt;/h2&gt;
                    &lt;input type=&quot;text&quot; v-model=&quot;msg&quot; @keyup.enter=&quot;send&quot; /&gt;
                    &lt;button @click=&quot;send&quot;&gt;发送&lt;/button&gt;
                    &lt;div v-html=&quot;content&quot;&gt;&lt;/div&gt;
                &lt;/div&gt;
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&quot;wc&quot;</span><span class="token punctuation">,</span> <span class="token parameter">msg</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;wc收集到数据:&#39;</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>content <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div class=&#39;row&#39;&gt;xq说：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>msg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;xq&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ml-xq&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                &lt;div&gt;
                    &lt;h2&gt;xq在线&lt;/h2&gt;
                    &lt;input type=&quot;text&quot; v-model=&quot;msg&quot; @keyup.enter=&quot;send&quot; /&gt;
                    &lt;button @click=&quot;send&quot;&gt;发送&lt;/button&gt;
                    &lt;div v-html=&quot;content&quot;&gt;&lt;/div&gt;
                &lt;/div&gt;
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&quot;xq&quot;</span><span class="token punctuation">,</span> <span class="token parameter">msg</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;xq收集到数据:&#39;</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>content <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div class=&#39;row&#39;&gt;wc说：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>msg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;wc&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十八-问题3" tabindex="-1"><a class="header-anchor" href="#十八-问题3" aria-hidden="true">#</a> 十八 问题3</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>常用指令有哪些？你怎么理解指令？你工作是否自已封装过指令？

举一个你封装自定义指令的例子（权限指令、拖拽指令）

复用真的好吗？（对新手不太友好，复用太多，改bug，一个出问题，其它地方也会出问题，容易造成项目瘫痪。）

你有封装过Vue插件？怎么封装的？封装过什么？（有，老项目中封装的好用东西，以插件的方式搬到新项目中去）

请问 Vue.use() 有什么用？讲一讲它背后做了什么？（调用插件函数或install方法，并传入Vue实参）

谈一谈你对 Vue.nextTick() 的理解？有什么用？（在nextTick访问最新的DOM）

nextTick() 和 updated() 的区别 （前者只是表示一个更新单元已完成，后者是生命周期钩子表示整个页面更新完成）

Vue响应式有没有缺陷呢？有什么缺陷？遇到这种问题你会怎么办？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>vue总结</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1）十几个指令（内置指令）
2）底层原理（响应式，生命周期，两个API）
3）组件化（props,computed,watch,template,data,methods,组件注册...）
4）五个内置组件(slot,transition,component,keep-alive)
5）逻辑复用技术(自定义组件，混入，过滤器，自定义指令，原型链，插件)
6）组件通信方案（9种）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十九-脚手架" tabindex="-1"><a class="header-anchor" href="#十九-脚手架" aria-hidden="true">#</a> 十九，脚手架</h2><p><strong>创建项目：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install cnpm -g --registry=https://registry.npmmirror.com

【使用npm安装@vue/cli】
cnpm install @vue/cli -g  全局安装（一次安装，以后都能用）
vue -V  （验证@vue/cli是否安装成功）

创建项目：
vue create myapp
cd myapp
npm run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>目录分析：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- README.md 记录整个项目的命令行、启动方式、业务需求与细节、特殊bug说明。。
- vue.config.js 是基于webpack(5)二次封装的配置文件，比如改端口、做代码、上线打包优化等。
- package.json 是npm包管理器的配套文件，用于记录整个项目的基本信息（版本号、项目名称、当前项目所需要的第三方依赖包...）注意：这个文件相当重要，现在的你不要随便动它。
- jsconfig.json 这是TypeScript的配置文件（最新的TS配置文件推荐使用 tsconfig.json）
- babel.config.js 这是Babel编译器的配置文件（在脚手架中可以用比较新的语法，Babel用于把比较新的语法编译成浏览器能够普遍兼容的ES5语法）
- .gitigore 当你 git add / git commit / git push时，要忽略哪些文件或目录。
- node_modules目录，当前项目所依赖的所有第三方包（如果你的项目没有这个目录，或者出现了丢包情况，都建议把node_modules目录删掉，执行\`cnpm install\`重新安装node_modules包。）
- public目录，是当前项目的本地的静态资源目录（就是本地服务器）
- src目录，是你的业务代码目录（源码目录）
- .vue文件（单文件组件，由视图模块、Vue组件选项、样式这三个部分组成）为了支持单文件组件的高亮，大家安装vetur插件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>你做vue项目用的是哪个版本的脚手架？（v4/v5）怎么创建项目？（vue ui / vue create）
使用脚手架有什么好处？（有ESlint代码检测、有热更新、有单文件组织、背后还有webpack功能丰富）
什么是单文件组织？浏览器是怎么解析.vue代码？(vue-loader)
在脚手架中，如何做代理？你有打包过vue项目？有没有做过vue项目部署？（vue.config.js配置）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二十-路由" tabindex="-1"><a class="header-anchor" href="#二十-路由" aria-hidden="true">#</a> 二十，路由</h2><p><strong>单页和多页：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>单页面应用程序（SPA）：通过路由系统把组件串联起来的并且只有一个根index.html页面的程序，叫做单页面应用程序。在SPA中，页面的切换，本质上就是组件的显示与隐藏，背后是路由系统在起作用。
多页面应用程序（MPA）：整个应用程序中，有多个.html页面。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如何在脚手架环境中集成Vue路由系统？（vue(2) + vue-router(3)）</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第一步：安装路由v3版本，注册路由
cnpm i vue-router@3.5.4 -S 
@用于指定版本、-S表示安装成功后把这个包记录在package.json的“dependencies”中。
新建src/router.js文件，注册路由Vue.use(VueRouter)

第二步：创建路由实例、定义路由规则，并在main.js挂载路由系统
export default new VueRouter({mode, routes:[]})
在main.js挂载路由 new Vue({ router })

第三步：在合适的位置放置一个视图容器和菜单
在App.vue的视图中放置一个 &amp;lt;router-view&gt;显示url匹配成功的组件。
在App.vue的视图中使用 &amp;lt;router-link&gt;制作菜单，点击跳转url。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>盘点路由知识点:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>两种路由模式：hash路由、history路由。
- hash路由：有#，背后是监听onhashchange事件实现的，hash路由部署上线不会出现404；
- history路由：没有#，背后是基于history api实现的，history路由部署上线会出现404问题。
  
两个全局组件：&amp;lt;router-view name&gt;视图容器、&amp;lt;router-link to tag active-class&gt;用于设计菜单导航的。
- &amp;lt;router-link&gt;：to属性用于指定跳转的目标；tag用于指定最终渲染成什么标签，默认渲染成a标签；
- active-class/exact-active-class用于指定菜单的高亮样式。
- &amp;lt;router-view&gt;：name属性用于指定命令视图（给router-view加个名字，默认叫default）。

两个内置API：$route表示路由信息，$router用于路由跳转的。
- $route路由信息: this.$route.fullPath/query/params/meta。（watch可以监听$route的变化）
- $router路由实例：this.$router.push()向前跳转/replace()向前跳转/back()返回上一次。

两种路由跳转：声明式跳转、编程式跳转。
- 所谓的声明式路由跳转，就是使用 &amp;lt;router-link&gt;做跳转，一般用于菜单设计。
- 所谓的编程式路由跳转，就是使用 $router 做跳转，一般用在事件中。

两种命名：命名视图、命名路由。
- 所谓的命名视图，意思是给&amp;lt;router-view&gt;加一个name属性。
- 所谓的命名路由，意思是给{path,component}路由规则取一个名字。

两种路由传参：query传参、动态路由传参。
- query传参：在跳转路由的url后面用?a=1&amp;amp;b=2&amp;amp;c=3这种方式传参，在另一个组件中使用this.$route.query接收。
- 动态路由传参：像这样 \`{path: &#39;/good/:id&#39;, component }\`定义路由规则，在这条动态路由规则对应的组件中使用this.$route.params接收，或者开启props:true后使用 props选项来接收。

两个优化：路由懒加载、重定向与别名
- 路由懒加载：当一个SPA应用程序中的页面足够多，我们需要根据路由系统进行按需加载组件（而不是一次性加载所有组件），该怎么实现呢？使用路由懒加载（背后原理是Webpack代码分割技术、Vue异步组件）。路由懒加载，是一种性能优化方案。
- 重定向与别名：当用户访问一个未定义的路由时，给一个重定向（跳转到另一个已定义的路由上），这是一种用户体验的优化。重定向规则，一般要放在路由规则的最后面。什么是别名？别名是path的简写，可以用于路由访问；什么时候需要用到别名？当path比较复杂时，需要给它设计一个别名。

两个难点：嵌套视图（嵌套路由）、导航守卫（路由元信息）。
- 嵌套视图（嵌套路由）：当我们设计类似知乎官网那样的一级菜单、二级菜单时，就要用到嵌套视图。所谓“嵌套视图”，从组件树的角度来讲，&amp;lt;router-view&gt;所显示的组件的内部还有&amp;lt;router-view&gt;；从路由规则的角度来讲，{path,component,children}带有children这个属性；从产品设计的角度来讲，一级菜单对应的页面中还有二级菜单。
- 导般守卫：在router实例对象上有三个重要的全局钩子（beforeEach、beforeResolve、afterEach），每次url发生变化时，都会触发这三个钩子按顺序执行。那么以后我可以在这些钩子编写验证逻辑，如果验证通过就放你过去，你就可以正常访问你想访问的页面；如果验证失败，就阻止你访问目标页面，这就实现“守卫”的效用了。在路由中，使用导航守卫和路由元信息，可以做鉴权、还可以做权限设计。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- 说一下history和hash路由有什么区别？
- 什么是命名视图、命名路由、别名？（&amp;lt;router-view name&gt;、{path,component,name,alias}）
- 说一下路由怎么传参？什么是动态路由？（两种传参。所谓动态路由，就是定义路由规则时path字段串中有冒号）
- 什么是路由懒加载？它背后的原理是什么？（Webpack代码分割、使用动态导入语法的Vue异步组件）
- 什么是路由守卫（导航守卫）？你项目的鉴权怎么做的？你这个管理系统的权限怎么设计的？
- 在Vue中做组件的显示与隐藏，有哪些方案？（v-show/v-if、&amp;lt;component&gt;、路由或嵌套路由）
- 在Vue中，怎么监听路由的变化？（watch监听$route）
- 什么是单页面应用程序（SPA）？你怎么理解单页面应用程序？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二十一-vuex" tabindex="-1"><a class="header-anchor" href="#二十一-vuex" aria-hidden="true">#</a> 二十一，Vuex</h2><p><strong>版本问题：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在Vue2技术栈中：Vue(2) + VueRouter(3) + Vuex(3)
在Vue3技术栈中：Vue(3) + VueRouter(3) + Vuex(4) / Pinia(2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关于vuex:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>状态管理：状态在应用程序中表示数据，状态管理就是数据管理。
两个作用：组件之间的数据共享；做数据缓存。
特别注意：在应用程序中，要正确地选择通信方案，数据流管理要合理。
怎么学习Vuex？一个流程图（要求会画会说会写）、五个概念、四个map方法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>集成Vuex:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第一步：安装vuex指定版本，并注册Vue.use(Vuex) / cnpm i vuex@3.6.2 -S
第二步：创建store实例{五个概念}并抛出，在main.js挂载store
第三步：在组件中使用this.$store/四个map方法来使用store或走数据流程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>五个概念：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>创建store时要用的五个概念（state/getters/mutations/actions/modules）
- state: {} 用于定义可被组件共享数据，是具有响应式的；在组件中使用this.$store.state来访问它们。
- getters: {fn} 用于计算state，相当于Vue的计算属性，当state发生变化时getters方法自动自动重新计算；在组件中使用this.$store.getters来访问它们。
- mutations: {fn} 专门用于修改state的，所以mutations方法是这样fn(state,payload)定义的；mutations方法在actions中或组件中使用，使用$store.commit(&#39;mutations方法&#39;,payload)
- actions: {fn} 专门用于调接口的，所以actions方法是这样fn(store,payload)定义的；在组件中使用this.$store.dispatch(&#39;actions方法&#39;, payload)。
- modules: {子store} 是一个Vuex架构层面的概念，用于拆分子store。大家在拆分子store务必在子store中使用namespaced:true开启命名空间。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>四个map:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mapState/mapGetters，必须写在computed计算属性中，用于访问state/getters数据。映射进来后，就可以用this来访问这些数据了。
mapActions/mapMutations 必须写在methods选项中，用于访问mutations/actions方法。映射进来后，可以用this调用这些方法。
它们的语法是相同的：map*(&#39;命名空间&#39;, [&#39;k1&#39;, &#39;k2&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>几个原则：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>原则1：只要使用Vuex一定要拆分store，拆分store后在根store上不要再使用state/mutations/actions。
原则2：在子store务必开启命名空间namespaced:true。
原则3：在组件中尽可能不要使用$store，建议使用四个map*方法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>简述Vuex的作用和意义?（基于Flux思想的状态管理工具，用于组件间数据通信、用于数据缓存）
简述Vuex的工作流程?（actions -&gt; mutations -&gt; state -&gt; 组件）
什么是单向数据流？（state -&gt; view -&gt; action）
说一下状态管理的五个概念分别代表什么？说一下mutations和actions的区别？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>仓库中的代码：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/store/index.js</span>

<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token comment">// 在真实开发中，需要对axios进行二次封装</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">addNum</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            state<span class="token punctuation">.</span>num <span class="token operator">+=</span> payload
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">changeList</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            state<span class="token punctuation">.</span>list <span class="token operator">=</span> payload<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">asyncAddNum</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&quot;addNum&quot;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">getList</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;https://cnodejs.org/api/v1/topics&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">params</span><span class="token operator">:</span> params
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// console.log(&quot;res:&quot;, res);</span>
                <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&quot;changeList&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">doubleNum</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span>num <span class="token operator">*</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用仓库：</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>HomePage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- home中的二级路由出口 --&gt;</span>
        <span class="token comment">&lt;!-- &lt;router-link to=&quot;/home/a&quot; exact-active-class=&quot;on&quot;&gt;A&lt;/router-link&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;
        &lt;router-link to=&quot;/home/b&quot; exact-active-class=&quot;on&quot;&gt;B&lt;/router-link&gt;
        &lt;router-view&gt;&lt;/router-view&gt; --&gt;</span>

        <span class="token comment">&lt;!-- --------------- 学习使用vuex --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>使用仓库中的数据：{{ $store.state.num }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>使用仓库中的计算属性：{{ $store.getters.doubleNum }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>同步+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>asyncAdd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>异步+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in $store.state.list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nextpage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>下一页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;HomePage&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token string">&quot;job&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&quot;getList&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">,</span>
            <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tab<span class="token punctuation">,</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>limit<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&quot;addNum&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">asyncAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&quot;asyncAddNum&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">nextpage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&quot;getList&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">,</span>
                <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tab<span class="token punctuation">,</span>
                <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>limit<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用四个map方法：</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>HomePage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- home中的二级路由出口 --&gt;</span>
        <span class="token comment">&lt;!-- &lt;router-link to=&quot;/home/a&quot; exact-active-class=&quot;on&quot;&gt;A&lt;/router-link&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;
        &lt;router-link to=&quot;/home/b&quot; exact-active-class=&quot;on&quot;&gt;B&lt;/router-link&gt;
        &lt;router-view&gt;&lt;/router-view&gt; --&gt;</span>

        <span class="token comment">&lt;!-- --------------- 学习使用vuex --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>使用仓库中的数据：{{ num }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>使用仓库中的计算属性：{{ doubleNum }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addNum(1)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>同步+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>asyncAddNum(1)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>异步+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nextpage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>下一页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapState<span class="token punctuation">,</span> mapMutations<span class="token punctuation">,</span> mapActions<span class="token punctuation">,</span> mapGetters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;HomePage&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token string">&quot;job&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;num&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;doubleNum&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&quot;getList&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">,</span>
            <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tab<span class="token punctuation">,</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>limit<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;addNum&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;changeList&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;asyncAddNum&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;getList&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">nextpage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">,</span>
                <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tab<span class="token punctuation">,</span>
                <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>limit<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>modules的使用：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/store/index.js</span>

<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token comment">// 在真实开发中，需要对axios进行二次封装</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> a <span class="token keyword">from</span> <span class="token string">&quot;./modules/a.js&quot;</span>
<span class="token keyword">import</span> b <span class="token keyword">from</span> <span class="token string">&quot;./modules/b.js&quot;</span>

<span class="token comment">// 如果创建了n个模块，通常在入口，不会写刚才讲的四个概念</span>
<span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        a<span class="token punctuation">,</span>
        b<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>

<span class="token comment">// src/store/modules/a.js</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">addNum</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            state<span class="token punctuation">.</span>num <span class="token operator">+=</span> payload
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">changeList</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            state<span class="token punctuation">.</span>list <span class="token operator">=</span> payload<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">asyncAddNum</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&quot;addNum&quot;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">getList</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;https://cnodejs.org/api/v1/topics&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">params</span><span class="token operator">:</span> params
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// console.log(&quot;res:&quot;, res);</span>
                <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&quot;changeList&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">doubleNum</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span>num <span class="token operator">*</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// // src/store/modules/b.js</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;malu&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用仓库：</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>HomePage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- home中的二级路由出口 --&gt;</span>
        <span class="token comment">&lt;!-- &lt;router-link to=&quot;/home/a&quot; exact-active-class=&quot;on&quot;&gt;A&lt;/router-link&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;
        &lt;router-link to=&quot;/home/b&quot; exact-active-class=&quot;on&quot;&gt;B&lt;/router-link&gt;
        &lt;router-view&gt;&lt;/router-view&gt; --&gt;</span>

        <span class="token comment">&lt;!-- --------------- 学习使用vuex --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>使用仓库中的数据：{{ $store.state.a.num }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>使用仓库中的计算属性：{{ $store.getters.doubleNum }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>同步+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>asyncAdd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>异步+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in $store.state.a.list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nextpage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>下一页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;HomePage&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token string">&quot;job&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&quot;getList&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">,</span>
            <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tab<span class="token punctuation">,</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>limit<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&quot;addNum&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">asyncAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&quot;asyncAddNum&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">nextpage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&quot;getList&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">,</span>
                <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tab<span class="token punctuation">,</span>
                <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>limit<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目中，都会给不同的模块开启命名空间，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启命名空间</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;malu&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>貌似开启命名空间没有解决实际问题，要使用命名空间，需要配置mapxx。</p><p><strong>使用mapxx方法：</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>HomePage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- home中的二级路由出口 --&gt;</span>
        <span class="token comment">&lt;!-- &lt;router-link to=&quot;/home/a&quot; exact-active-class=&quot;on&quot;&gt;A&lt;/router-link&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;
        &lt;router-link to=&quot;/home/b&quot; exact-active-class=&quot;on&quot;&gt;B&lt;/router-link&gt;
        &lt;router-view&gt;&lt;/router-view&gt; --&gt;</span>

        <span class="token comment">&lt;!-- --------------- 学习使用vuex --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>使用b 子store中的msg: {{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>使用仓库中的数据：{{ num }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>使用仓库中的计算属性：{{ doubleNum }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addNum(1)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>同步+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>asyncAddNum(1)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>异步+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nextpage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>下一页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapState<span class="token punctuation">,</span> mapMutations<span class="token punctuation">,</span> mapActions<span class="token punctuation">,</span> mapGetters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;HomePage&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token string">&quot;job&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;num&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;doubleNum&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&quot;a/getList&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">,</span>
            <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tab<span class="token punctuation">,</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>limit<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">// this.getList({</span>
        <span class="token comment">//     page: this.page,</span>
        <span class="token comment">//     tab: this.tab,</span>
        <span class="token comment">//     limit: this.limit,</span>
        <span class="token comment">// })</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;addNum&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;asyncAddNum&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;getList&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">nextpage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">,</span>
                <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tab<span class="token punctuation">,</span>
                <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>limit<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二十二" tabindex="-1"><a class="header-anchor" href="#二十二" aria-hidden="true">#</a> 二十二</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- Vue中有哪些常用的通信方案？（父子、ref、provide、slot、$parent、事件总线、Vuex）
- 谈一谈你对事件总线的理解（“订阅-发布”模式）的理解？
- 谈一谈以上九种通信方案之间的区别？或者任意两种通信方案之间的区别？（语法区别、使用场景的区别）

- 你做vue项目用的是哪个版本的脚手架？（v4/v5）怎么创建项目？（vue ui / vue create）
- 使用脚手架有什么好处？（有ESlint代码检测、有热更新、有单文件组织、背后还有webpack功能丰富）
- 什么是单文件组织？浏览器是怎么解析.vue代码？(vue-loader)

- 说一下history和hash路由有什么区别？
- 什么是命名视图、命名路由、别名？（&amp;lt;router-view name&gt;、{path,component,name,alias}）
- 说一下路由怎么传参？什么是动态路由？（两种传参。所谓动态路由，就是定义路由规则时path字段串中有冒号）
- 什么是路由守卫（导航守卫）？你项目的鉴权怎么做的？你这个管理系统的权限怎么设计的？
- 在Vue中做组件的显示与隐藏，有哪些方案？（v-show/v-if、&amp;lt;component&gt;、路由或嵌套路由）
- 在Vue中，怎么监听路由的变化？（watch监听$route）
- 什么是单页面应用程序（SPA）？你怎么理解单页面应用程序？

- 简述Vuex的作用和意义?（基于Flux思想的状态管理工具，用于组件间数据通信、用于数据缓存）
- 简述Vuex的工作流程?（actions -&gt; mutations -&gt; state -&gt; 组件）
- 什么是单向数据流？（state -&gt; view -&gt; action）
- 说一下状态管理的五个概念分别代表什么？说一下mutations和actions的区别？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,238),o=[e];function l(c,i){return s(),a("div",null,o)}const k=n(p,[["render",l],["__file","vue2.html.vue"]]);export{k as default};

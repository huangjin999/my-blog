import{_ as p,p as t,q as e,s as n,R as s,t as o,Y as c,n as l}from"./framework-aa5c4115.js";const i={},r=n("h2",{id:"从0到1完成一个svg-icon组件的实现",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#从0到1完成一个svg-icon组件的实现","aria-hidden":"true"},"#"),s(" 从0到1完成一个"),n("code",null,"svg-icon"),s("组件的实现")],-1),u={id:"_1-首先需要在npm官网下载插件svg-sprite-loader",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#_1-首先需要在npm官网下载插件svg-sprite-loader","aria-hidden":"true"},"#",-1),k={href:"https://www.npmjs.com/package/svg-sprite-loader?activeTab=readme",target:"_blank",rel:"noopener noreferrer"},v=c(`<ul><li><p>在<code>src</code>路径下的<code>commponents</code>文件夹下新建一个<code>svgIcon</code>文件夹用来创建<code>svg-icon</code>组件。</p></li><li><p>路径：<code>src\\components\\SvgIcon\\index.vue</code></p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>svg <span class="token operator">:</span>style<span class="token operator">=</span>&quot;<span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> width <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> height <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token string">&quot;  :class=&quot;</span>svgClass<span class="token string">&quot; aria-hidden=&quot;</span><span class="token boolean">true</span><span class="token string">&quot; v-on=&quot;</span>$listeners&quot;<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>use <span class="token operator">:</span>xlink<span class="token operator">:</span>href<span class="token operator">=</span><span class="token string">&quot;iconName&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;SvgIcon&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">//svg宽度</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>Number<span class="token punctuation">,</span> String<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">//svg高度</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>Number<span class="token punctuation">,</span> String<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   
    <span class="token function">iconName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">#icon-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>iconClass<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">svgClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>className<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;svg-icon &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>className
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;svg-icon&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">styleExternalIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">mask</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>iconClass<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) no-repeat 50% 50%</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;-webkit-mask&#39;</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>iconClass<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) no-repeat 50% 50%</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>svg<span class="token operator">-</span>icon <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 1em<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 1em<span class="token punctuation">;</span>
  vertical<span class="token operator">-</span>align<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">.</span>15em<span class="token punctuation">;</span>
  <span class="token literal-property property">fill</span><span class="token operator">:</span> currentColor<span class="token punctuation">;</span>
  <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>svg<span class="token operator">-</span>external<span class="token operator">-</span>icon <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> currentColor<span class="token punctuation">;</span>
  mask<span class="token operator">-</span>size<span class="token operator">:</span> cover<span class="token operator">!</span>important<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>也就是说，现在<code>svg</code>相当于一个组件，并且允许接收一些参数来修改对应的样式。</li></ul><h3 id="_2-存储收集svg" tabindex="-1"><a class="header-anchor" href="#_2-存储收集svg" aria-hidden="true">#</a> 2.存储收集svg</h3><ol><li><p>在<code>src</code>子路径下新建一个名为的<code>icons</code>文件夹用来存放项目所需要的<code>svg</code>文件。</p></li><li><p>之后在<code>icons</code>文件夹下创建<code>index.js</code>文件中收集获取所有的<code>svg</code>文件，代码如下。</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> SvgIcon <span class="token keyword">from</span> <span class="token string">&#39;@/components/SvgIcon&#39;</span><span class="token comment">// svg component</span>

<span class="token comment">// register globally</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;svg-icon&#39;</span><span class="token punctuation">,</span> SvgIcon<span class="token punctuation">)</span>

<span class="token keyword">const</span> req <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;./svg&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.svg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">requireAll</span> <span class="token operator">=</span> <span class="token parameter">requireContext</span> <span class="token operator">=&gt;</span> requireContext<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>requireContext<span class="token punctuation">)</span>
<span class="token function">requireAll</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>最后在<code>icons</code>文件夹下创建<code>svg</code>文件夹来存放所有<code>svg</code>文件。</p><p>例如：这个<code>svg</code>文件夹下有一个名字是<code>100.svg</code>的文件，<code>src\\icons\\svg\\100.svg</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>svg xmlns<span class="token operator">=</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span> width<span class="token operator">=</span><span class="token string">&quot;16&quot;</span> height<span class="token operator">=</span><span class="token string">&quot;16&quot;</span> fill<span class="token operator">=</span><span class="token string">&quot;currentColor&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;qi-100&quot;</span> viewBox<span class="token operator">=</span><span class="token string">&quot;0 0 16 16&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>path d<span class="token operator">=</span><span class="token string">&quot;M7.655 2.357a.5.5 0 0 0 .854-.353v-1.5a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 .146.353Zm-4.08 1.861c.06.026.126.039.191.039l.001-.001a.5.5 0 0 0 .355-.855l-1.064-1.06a.5.5 0 0 0-.707.708l1.062 1.06a.498.498 0 0 0 .162.11ZM.503 8.496h1.5a.5.5 0 1 0 0-1h-1.5a.5.5 0 0 0 0 1Zm1.914 5.221a.501.501 0 0 0 .631-.063l1.063-1.06a.5.5 0 0 0-.708-.707l-1.062 1.06a.5.5 0 0 0 .076.77Zm5.225 2.14a.5.5 0 0 0 .854-.354v-1.5a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 .146.354Zm5.467-2.084a.5.5 0 0 0 .544-.816l-1.06-1.06a.498.498 0 0 0-.832.152.5.5 0 0 0 .126.555l1.06 1.06a.496.496 0 0 0 .162.109Zm.893-5.263h1.5a.5.5 0 1 0 0-1h-1.5a.5.5 0 0 0 0 1Zm-2.031-4.327a.5.5 0 0 0 .633-.063l1.06-1.06a.5.5 0 1 0-.708-.708l-1.06 1.06a.5.5 0 0 0 .075.77Zm-6.466.075a4.5 4.5 0 1 1 5 7.484 4.5 4.5 0 0 1-5-7.484Zm4.445.832a3.5 3.5 0 1 0-3.89 5.82 3.5 3.5 0 0 0 3.89-5.82Z&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_3-解析svg文件" tabindex="-1"><a class="header-anchor" href="#_3-解析svg文件" aria-hidden="true">#</a> 3.解析svg文件</h3><ol><li><code>在vue.config.js</code>文件中进行相关的<code>webpack</code>配置来完成解析加载，具体代码如下：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">chainWebpack</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 

<span class="token comment">// 设置 svg-sprite-loader   封装的svg图表</span>
    config<span class="token punctuation">.</span>module
      <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&#39;svg&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span>exclude<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/icons&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token comment">// .exclude.add(resolve(&#39;src/iconsDiy&#39;))</span>
      <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    config<span class="token punctuation">.</span>module
      <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&#39;icons&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.svg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span>include<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/icons&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token comment">// .include.add(resolve(&#39;src/iconsDiy&#39;))</span>
      <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;svg-sprite-loader&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">&#39;svg-sprite-loader&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">symbolId</span><span class="token operator">:</span> <span class="token string">&#39;icon-[name]&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整的还需要引入路径，当然，一般情况项目中已经配置了，需要视情况而定，完整版的代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> dir<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    
    <span class="token function">chainWebpack</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 

<span class="token comment">// 设置 svg-sprite-loader   封装的svg图表</span>
    config<span class="token punctuation">.</span>module
      <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&#39;svg&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span>exclude<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/icons&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token comment">// .exclude.add(resolve(&#39;src/iconsDiy&#39;))</span>
      <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    config<span class="token punctuation">.</span>module
      <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&#39;icons&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.svg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span>include<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/icons&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token comment">// .include.add(resolve(&#39;src/iconsDiy&#39;))</span>
      <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;svg-sprite-loader&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">&#39;svg-sprite-loader&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">symbolId</span><span class="token operator">:</span> <span class="token string">&#39;icon-[name]&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-使用-现在已经封装好svg图标-接下来就需要引入使用" tabindex="-1"><a class="header-anchor" href="#_4-使用-现在已经封装好svg图标-接下来就需要引入使用" aria-hidden="true">#</a> 4.使用 : 现在已经封装好svg图标，接下来就需要引入使用</h2><p>1.首先需要在<code>main.js</code>引入处理好的<code>svg</code>文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;./icons/index&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在就可以在项目的任何地方使用<code>svg-icon</code>组件完成svg文件的渲染</p><ol start="2"><li>页面使用</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>        <span class="token operator">&lt;</span>svg<span class="token operator">-</span>icon icon<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;100&quot;</span>  <span class="token operator">/</span><span class="token operator">&gt;</span>         
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以传递宽高，比如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>        <span class="token operator">&lt;</span>svg<span class="token operator">-</span>icon icon<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;100&quot;</span> width<span class="token operator">=</span><span class="token string">&quot;64&quot;</span> height<span class="token operator">=</span><span class="token string">&quot;64&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>这个<code>icon-class=&#39;&#39;</code>的值就是svg图标的名字，不传递的话就无法渲染</li></ol><p>例如：这个svg名字就是<code>100.svg</code>，那么就需要传递<code>icon-class=&#39;100&#39;</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>svg xmlns<span class="token operator">=</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span> width<span class="token operator">=</span><span class="token string">&quot;16&quot;</span> height<span class="token operator">=</span><span class="token string">&quot;16&quot;</span> fill<span class="token operator">=</span><span class="token string">&quot;currentColor&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;qi-100&quot;</span> viewBox<span class="token operator">=</span><span class="token string">&quot;0 0 16 16&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>path d<span class="token operator">=</span><span class="token string">&quot;M7.655 2.357a.5.5 0 0 0 .854-.353v-1.5a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 .146.353Zm-4.08 1.861c.06.026.126.039.191.039l.001-.001a.5.5 0 0 0 .355-.855l-1.064-1.06a.5.5 0 0 0-.707.708l1.062 1.06a.498.498 0 0 0 .162.11ZM.503 8.496h1.5a.5.5 0 1 0 0-1h-1.5a.5.5 0 0 0 0 1Zm1.914 5.221a.501.501 0 0 0 .631-.063l1.063-1.06a.5.5 0 0 0-.708-.707l-1.062 1.06a.5.5 0 0 0 .076.77Zm5.225 2.14a.5.5 0 0 0 .854-.354v-1.5a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 .146.354Zm5.467-2.084a.5.5 0 0 0 .544-.816l-1.06-1.06a.498.498 0 0 0-.832.152.5.5 0 0 0 .126.555l1.06 1.06a.496.496 0 0 0 .162.109Zm.893-5.263h1.5a.5.5 0 1 0 0-1h-1.5a.5.5 0 0 0 0 1Zm-2.031-4.327a.5.5 0 0 0 .633-.063l1.06-1.06a.5.5 0 1 0-.708-.708l-1.06 1.06a.5.5 0 0 0 .075.77Zm-6.466.075a4.5 4.5 0 1 1 5 7.484 4.5 4.5 0 0 1-5-7.484Zm4.445.832a3.5 3.5 0 1 0-3.89 5.82 3.5 3.5 0 0 0 3.89-5.82Z&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function m(g,b){const a=l("ExternalLinkIcon");return t(),e("div",null,[r,n("h3",u,[d,s(" 1.首先需要在npm官网下载插件"),n("a",k,[s("svg-sprite-loader"),o(a)])]),v])}const y=p(i,[["render",m],["__file","fengzhuangsvgshiliangtubiao.html.vue"]]);export{y as default};
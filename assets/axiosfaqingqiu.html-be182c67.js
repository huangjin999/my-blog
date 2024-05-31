import{_ as t,p as o,q as e,s as n,R as s,t as c,Y as a,n as l}from"./framework-aa5c4115.js";const i={},u=a(`<h2 id="_1-get请求-params传参" tabindex="-1"><a class="header-anchor" href="#_1-get请求-params传参" aria-hidden="true">#</a> 1.get请求 , params传参</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> 			<span class="token keyword">const</span> sClientId <span class="token operator">=</span> <span class="token string">&#39;你的参数&#39;</span>
            <span class="token keyword">const</span> cmd <span class="token operator">=</span> <span class="token string">&#39;你的参数&#39;</span>
            <span class="token keyword">const</span> para1 <span class="token operator">=</span> <span class="token string">&#39;你的参数&#39;</span>
            <span class="token keyword">const</span> para2 <span class="token operator">=</span> <span class="token string">&#39;你的参数&#39;</span>
            <span class="token keyword">const</span> para3 <span class="token operator">=</span> <span class="token string">&#39;你的参数&#39;</span>

            axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/你的url&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                
                <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">sClientId</span><span class="token operator">:</span> sClientId<span class="token punctuation">,</span>
                    <span class="token literal-property property">cmd</span><span class="token operator">:</span> cmd<span class="token punctuation">,</span>
                    <span class="token literal-property property">para1</span><span class="token operator">:</span> para1<span class="token punctuation">,</span>
                    <span class="token literal-property property">para2</span><span class="token operator">:</span> para2<span class="token punctuation">,</span>
                    <span class="token literal-property property">para3</span><span class="token operator">:</span> para3<span class="token punctuation">,</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token operator">...</span>log你的res<span class="token punctuation">.</span>data
                               
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 请求失败时的处理</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// 请求已发出，但服务器响应的状态码不在 200 范围内</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Error&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>地址拼接传参：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">/</span>你的url<span class="token operator">?</span>sClientId<span class="token operator">=</span>你的参数<span class="token operator">&amp;</span>cmd<span class="token operator">=</span>你的参数<span class="token operator">&amp;</span>para1<span class="token operator">=</span>你的参数<span class="token operator">&amp;</span>para2<span class="token operator">=</span>你的参数<span class="token operator">...</span>  不好玩，用params

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-post传参-json数据" tabindex="-1"><a class="header-anchor" href="#_2-post传参-json数据" aria-hidden="true">#</a> 2.post传参---JSON数据</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>			<span class="token keyword">const</span> sClientId <span class="token operator">=</span> <span class="token string">&#39;你的参数&#39;</span>
            <span class="token keyword">const</span> cmd <span class="token operator">=</span> <span class="token string">&#39;你的参数&#39;</span>
            <span class="token keyword">const</span> para1 <span class="token operator">=</span> <span class="token string">&#39;你的参数&#39;</span>
            <span class="token keyword">const</span> para2 <span class="token operator">=</span> <span class="token string">&#39;你的参数&#39;</span>
            <span class="token keyword">const</span> para3 <span class="token operator">=</span> <span class="token string">&#39;你的参数&#39;</span>

            axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/你的url&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">sClientId</span><span class="token operator">:</span> sClientId<span class="token punctuation">,</span>
                    <span class="token literal-property property">cmd</span><span class="token operator">:</span> cmd<span class="token punctuation">,</span>
                    <span class="token literal-property property">para1</span><span class="token operator">:</span> para1<span class="token punctuation">,</span>
                    <span class="token literal-property property">para2</span><span class="token operator">:</span> para2<span class="token punctuation">,</span>
                    <span class="token literal-property property">para3</span><span class="token operator">:</span> para3<span class="token punctuation">,</span>
                

            <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token operator">...</span>log你的res<span class="token punctuation">.</span>data
                               
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 请求失败时的处理</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// 请求已发出，但服务器响应的状态码不在 200 范围内</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Error&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-post传参-字符串" tabindex="-1"><a class="header-anchor" href="#_2-1-post传参-字符串" aria-hidden="true">#</a> 2.1 post传参---字符串</h3>`,7),r={href:"https://www.npmjs.com/package/qs",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>			<span class="token keyword">const</span> sClientId <span class="token operator">=</span> <span class="token string">&#39;你的参数&#39;</span>
            <span class="token keyword">const</span> cmd <span class="token operator">=</span> <span class="token string">&#39;你的参数&#39;</span>
            <span class="token keyword">const</span> para1 <span class="token operator">=</span> <span class="token string">&#39;你的参数&#39;</span>
            <span class="token keyword">const</span> para2 <span class="token operator">=</span> <span class="token string">&#39;你的参数&#39;</span>
            <span class="token keyword">const</span> para3 <span class="token operator">=</span> <span class="token string">&#39;你的参数&#39;</span>

            axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/你的url&#39;</span><span class="token punctuation">,</span>qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      			   <span class="token literal-property property">sClientId</span><span class="token operator">:</span> sClientId<span class="token punctuation">,</span>
      			   <span class="token literal-property property">cmd</span><span class="token operator">:</span> cmd<span class="token punctuation">,</span>
      			   <span class="token literal-property property">para1</span><span class="token operator">:</span> para1<span class="token punctuation">,</span>
     			   <span class="token literal-property property">para2</span><span class="token operator">:</span> para2<span class="token punctuation">,</span>
     			   <span class="token literal-property property">para3</span><span class="token operator">:</span> para3<span class="token punctuation">,</span>
     			 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token operator">...</span>log你的res<span class="token punctuation">.</span>data
                               
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 请求失败时的处理</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// 请求已发出，但服务器响应的状态码不在 200 范围内</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Error&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装一下" tabindex="-1"><a class="header-anchor" href="#封装一下" aria-hidden="true">#</a> 封装一下</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> qs <span class="token keyword">from</span> <span class="token string">&quot;qs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MessageBox<span class="token punctuation">,</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;element-ui&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&quot;@/store&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getToken <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./auth&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_API</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">500000</span><span class="token punctuation">,</span> <span class="token comment">// 个别请求时间过长</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

service<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>post<span class="token punctuation">[</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span>
  <span class="token string">&quot;application/x-www-form-urlencoded&quot;</span><span class="token punctuation">;</span>
service<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>get<span class="token punctuation">[</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span>
  <span class="token string">&quot;application/x-www-form-urlencoded&quot;</span><span class="token punctuation">;</span>

service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将token传过去</span>
    <span class="token comment">// const tokenStr = getToken();</span>
    <span class="token comment">// const utf8Bytes = new TextEncoder().encode(tokenStr);</span>
    <span class="token comment">// const token = btoa(String.fromCharCode(...utf8Bytes));</span>

    <span class="token comment">// if (token) {</span>
    <span class="token comment">//   config.headers[&quot;Authorization&quot;] = token;</span>
    <span class="token comment">// }</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>data <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 如果标识为json传递则转为json</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>useJson<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果不为json传递则转为字符串</span>
        config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;application/x-www-form-urlencoded&quot;</span><span class="token punctuation">;</span>
        config<span class="token punctuation">.</span>data <span class="token operator">=</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// get请求query</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>params <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">!==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> response<span class="token punctuation">.</span>statusText <span class="token operator">||</span> <span class="token string">&quot;Error&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>statusText <span class="token operator">||</span> <span class="token string">&quot;Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 直接返回字符串</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> service<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function d(v,m){const p=l("ExternalLinkIcon");return o(),e("div",null,[u,n("ol",null,[n("li",null,[s("使用npm的qs包解决，"),n("a",r,[s("下载"),c(p)])])]),k])}const g=t(i,[["render",d],["__file","axiosfaqingqiu.html.vue"]]);export{g as default};
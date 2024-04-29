import{_ as n,p as s,q as a,Y as p}from"./framework-aa5c4115.js";const t={},o=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>view @tap<span class="token operator">=</span><span class="token string">&quot;handleNumberKeyboardTap&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>uni<span class="token operator">-</span>popup ref<span class="token operator">=</span><span class="token string">&quot;popup&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;bottom&quot;</span> <span class="token operator">:</span>mask<span class="token operator">-</span>click<span class="token operator">=</span><span class="token string">&quot;false&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;keyboard&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;keyboard-top-button&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>view @tap<span class="token punctuation">.</span>stop<span class="token operator">=</span><span class="token string">&quot;handleCancelTap&quot;</span><span class="token operator">&gt;</span>取消<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;keyboard-top-button-title&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> title <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>view @tap<span class="token punctuation">.</span>stop<span class="token operator">=</span><span class="token string">&quot;handleConfirmTap&quot;</span><span class="token operator">&gt;</span>完成<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;keyboard-show-box&quot;</span><span class="token operator">&gt;</span>
          <span class="token punctuation">{</span><span class="token punctuation">{</span> showNumber <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;keyboard-main-button&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;keyboard-main-button-left&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>view 
              <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;keyboard-button&quot;</span>
              hover<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;button-hover&quot;</span>
              v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(item, index) in [1,2,3,4,5,6,7,8,9]&quot;</span> 
              <span class="token operator">:</span>data<span class="token operator">-</span>key<span class="token operator">=</span><span class="token string">&quot;item&quot;</span>
              <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;index&quot;</span>
              @tap<span class="token punctuation">.</span>stop<span class="token operator">=</span><span class="token string">&quot;handleButtonClick&quot;</span>
            <span class="token operator">&gt;</span>
              <span class="token punctuation">{</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>view 
              <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;keyboard-button&quot;</span>
              hover<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;button-hover&quot;</span>
              data<span class="token operator">-</span>key<span class="token operator">=</span><span class="token string">&quot;00&quot;</span>
              @tap<span class="token punctuation">.</span>stop<span class="token operator">=</span><span class="token string">&quot;handleButtonClick&quot;</span>
            <span class="token operator">&gt;</span><span class="token number">00</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>view 
              <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;keyboard-button&quot;</span>
              hover<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;button-hover&quot;</span>
              <span class="token operator">:</span>data<span class="token operator">-</span>key<span class="token operator">=</span><span class="token string">&quot;0&quot;</span>
              @tap<span class="token punctuation">.</span>stop<span class="token operator">=</span><span class="token string">&quot;handleButtonClick&quot;</span>
            <span class="token operator">&gt;</span><span class="token number">0</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>view 
              <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;[&#39;keyboard-button&#39;, isInteger &amp;&amp; &#39;integer&#39;]&quot;</span>
              hover<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;button-hover&quot;</span>
              data<span class="token operator">-</span>key<span class="token operator">=</span><span class="token string">&quot;.&quot;</span>
              @tap<span class="token punctuation">.</span>stop<span class="token operator">=</span><span class="token string">&quot;handleButtonClick&quot;</span>
            <span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;keyboard-main-button-right&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>view 
              <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;keyboard-button-right&quot;</span>
              hover<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;button-hover&quot;</span>
              data<span class="token operator">-</span>key<span class="token operator">=</span><span class="token string">&quot;删除&quot;</span>
              @tap<span class="token punctuation">.</span>stop<span class="token operator">=</span><span class="token string">&quot;handleButtonClick&quot;</span>
            <span class="token operator">&gt;</span>删除<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>view 
              <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;keyboard-button-right&quot;</span>
              hover<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;button-hover&quot;</span>
              data<span class="token operator">-</span>key<span class="token operator">=</span><span class="token string">&quot;-&quot;</span>
              @tap<span class="token punctuation">.</span>stop<span class="token operator">=</span><span class="token string">&quot;handleButtonClick&quot;</span>
            <span class="token operator">&gt;</span><span class="token operator">-</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>uni<span class="token operator">-</span>popup<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token string">&#39;change&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">number</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isInteger</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">showNumber</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>number
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">show</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>popup<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>popup<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">number</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>showNumber <span class="token operator">=</span> val
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handleNumberKeyboardTap</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>disabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>showNumber <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>number
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;open&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">handleButtonClick</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>showNumber
      <span class="token keyword">let</span> inputValue <span class="token operator">=</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>key
      <span class="token keyword">if</span> <span class="token punctuation">(</span>inputValue <span class="token operator">===</span> <span class="token string">&#39;.&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isInteger<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>inputValue <span class="token operator">===</span> <span class="token string">&#39;删除&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        num <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> num<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        num <span class="token operator">=</span> num <span class="token operator">+</span> inputValue
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>showNumber <span class="token operator">=</span> num
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">handleTopClick</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">handleConfirmTap</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>showNumber<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$toast<span class="token punctuation">.</span><span class="token function">showCommonToast</span><span class="token punctuation">(</span><span class="token string">&#39;请输入格式正确的数字&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>showNumber <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>showNumber<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">handleCancelTap</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>

<span class="token punctuation">.</span>keyboard <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> $cyber<span class="token operator">-</span>border<span class="token operator">-</span>color<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 18px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>top<span class="token operator">:</span> 1px solid $cyber<span class="token operator">-</span>border<span class="token operator">-</span>color<span class="token punctuation">;</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token operator">-</span>apple<span class="token operator">-</span>system<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">323233</span><span class="token punctuation">;</span>
  <span class="token punctuation">.</span>keyboard<span class="token operator">-</span>top<span class="token operator">-</span>button <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 45px<span class="token punctuation">;</span>
    line<span class="token operator">-</span>height<span class="token operator">:</span> 45px<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> $cyber<span class="token operator">-</span>color<span class="token operator">-</span>primary<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    view <span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">15</span><span class="token operator">%</span><span class="token punctuation">;</span>
      <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span> 20px<span class="token punctuation">;</span>
      text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">&amp;</span><span class="token operator">-</span>title <span class="token punctuation">{</span>
      <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
      text<span class="token operator">-</span>overflow<span class="token operator">:</span> ellipsis<span class="token punctuation">;</span>
      <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
      white<span class="token operator">-</span>space<span class="token operator">:</span> nowrap<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span>keyboard<span class="token operator">-</span>show<span class="token operator">-</span>box <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 50px<span class="token punctuation">;</span>
    line<span class="token operator">-</span>height<span class="token operator">:</span> 50px<span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    letter<span class="token operator">-</span>spacing<span class="token operator">:</span> 1px<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    border<span class="token operator">-</span>top<span class="token operator">:</span> 1px solid $cyber<span class="token operator">-</span>border<span class="token operator">-</span>color<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span>keyboard<span class="token operator">-</span>main<span class="token operator">-</span>button <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span> 10px 10px 10px<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token operator">&amp;</span><span class="token operator">-</span>left <span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">82</span><span class="token operator">%</span><span class="token punctuation">;</span>
      <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
      flex<span class="token operator">-</span>wrap<span class="token operator">:</span> wrap<span class="token punctuation">;</span>
      justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>around<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">&amp;</span><span class="token operator">-</span>right <span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">18</span><span class="token operator">%</span><span class="token punctuation">;</span>
      <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
      flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
      <span class="token punctuation">.</span>keyboard<span class="token operator">-</span>button<span class="token operator">-</span>right <span class="token punctuation">{</span>
        <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
        vertical<span class="token operator">-</span>align<span class="token operator">:</span> middle<span class="token punctuation">;</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">666</span><span class="token punctuation">;</span>
        background<span class="token operator">-</span>color<span class="token operator">:</span> #fff<span class="token punctuation">;</span>
        margin<span class="token operator">-</span>top<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
        box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> 5px 5px <span class="token number">0</span> #ccc<span class="token punctuation">;</span>
        font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">;</span>
        border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
        line<span class="token operator">-</span>height<span class="token operator">:</span> 100px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>keyboard<span class="token operator">-</span>button <span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">30</span><span class="token operator">%</span><span class="token punctuation">;</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">666</span><span class="token punctuation">;</span>
      background<span class="token operator">-</span>color<span class="token operator">:</span> #fff<span class="token punctuation">;</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> 50px<span class="token punctuation">;</span>
      line<span class="token operator">-</span>height<span class="token operator">:</span> 50px<span class="token punctuation">;</span>
      border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
      margin<span class="token operator">-</span>top<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
      box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> 5px 5px <span class="token number">0</span> #ccc<span class="token punctuation">;</span>
      font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>integer <span class="token punctuation">{</span>
      <span class="token literal-property property">visibility</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>button<span class="token operator">-</span>hover <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> $cyber<span class="token operator">-</span>border<span class="token operator">-</span>color <span class="token operator">!</span>important<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>\`</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),e=[o];function l(c,r){return s(),a("div",null,e)}const u=n(t,[["render",l],["__file","index_03.html.vue"]]);export{u as default};

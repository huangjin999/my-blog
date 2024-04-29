import{_ as s,a as n}from"./bug_admin02-2a9485bb.js";import{_ as a,p as e,q as t,Y as o}from"./framework-aa5c4115.js";const p={},c=o('<hr><h3 id="vue项目打包上传git之后样式丢失问题" tabindex="-1"><a class="header-anchor" href="#vue项目打包上传git之后样式丢失问题" aria-hidden="true">#</a> vue项目打包上传git之后样式丢失问题？</h3><p><strong>解决：</strong> 在打包时配置base地址 base:&quot;/仓库名称/&quot;</p><hr><h3 id="vue3-antd-弹窗关闭后页面无法点击-f12审查元素后发现弹窗的z-index为1000-导致弹窗关闭后页面无法点击。" tabindex="-1"><a class="header-anchor" href="#vue3-antd-弹窗关闭后页面无法点击-f12审查元素后发现弹窗的z-index为1000-导致弹窗关闭后页面无法点击。" aria-hidden="true">#</a> vue3 antd 弹窗关闭后页面无法点击 , F12审查元素后发现弹窗的z-index为1000,导致弹窗关闭后页面无法点击。</h3><p><img src="'+s+'" alt="如图"></p><p><strong>解决</strong> <img src="'+n+`" alt="如图"></p><h3 id="_431解决" tabindex="-1"><a class="header-anchor" href="#_431解决" aria-hidden="true">#</a> 431解决</h3><ul><li><p>今天写一个提交参数的时候用get请求，但是报错431，也就是传递的参数过长，搜了一下说谷歌支持8000左右字节，而火狐支持6w左右，但是用火狐之后还是报错431，</p></li><li><p>最后在<code>node_modules中找到.bin文件夹下的vue-cli-service.cmd文件 </code>设置<code>&quot;--max-http-header-size=1000000&quot;</code>解决</p></li><li><p>路径：<code>node_modules\\.bin\\vue-cli-service.cmd</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">-</span> @<span class="token constant">ECHO</span> off
  <span class="token constant">GOTO</span> <span class="token literal-property property">start</span>
  <span class="token operator">:</span>find_dp0
  <span class="token constant">SET</span> dp0<span class="token operator">=</span><span class="token operator">%</span><span class="token operator">~</span>dp0
  <span class="token constant">EXIT</span> <span class="token operator">/</span>b
  <span class="token operator">:</span>start
  <span class="token constant">SETLOCAL</span>
  <span class="token constant">CALL</span> <span class="token operator">:</span>find_dp0

<span class="token constant">IF</span> <span class="token constant">EXIST</span> <span class="token string">&quot;%dp0%\\node.exe&quot;</span> <span class="token punctuation">(</span>
  <span class="token constant">SET</span> <span class="token string">&quot;_prog=%dp0%\\node.exe&quot;</span>
<span class="token punctuation">)</span> <span class="token constant">ELSE</span> <span class="token punctuation">(</span>
  <span class="token constant">SET</span> <span class="token string">&quot;_prog=node&quot;</span>
  <span class="token constant">SET</span> <span class="token constant">PATHEXT</span><span class="token operator">=</span><span class="token operator">%</span><span class="token constant">PATHEXT</span><span class="token operator">:</span><span class="token punctuation">;</span><span class="token punctuation">.</span><span class="token constant">JS</span><span class="token punctuation">;</span><span class="token operator">=</span><span class="token punctuation">;</span><span class="token operator">%</span>
<span class="token punctuation">)</span>

endLocal <span class="token operator">&amp;</span> goto #_undefined_# <span class="token number">2</span><span class="token operator">&gt;</span><span class="token constant">NUL</span> <span class="token operator">||</span> title <span class="token operator">%</span><span class="token constant">COMSPEC</span><span class="token operator">%</span> <span class="token operator">&amp;</span> <span class="token string">&quot;%_prog%&quot;</span> <span class="token string">&quot;--max-http-header-size=1000000&quot;</span>  <span class="token string">&quot;%dp0%\\..\\@vue\\cli-service\\bin\\vue-cli-service.js&quot;</span> <span class="token operator">%</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,9),i=[c];function r(l,d){return e(),t("div",null,i)}const v=a(p,[["render",r],["__file","index.html.vue"]]);export{v as default};

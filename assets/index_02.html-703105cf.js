import{_ as n,p as s,q as a,Y as p}from"./framework-aa5c4115.js";const e="/my-blog/images/ry/1694674944953.png",t="/my-blog/images/ry/1694675010531.png",o="/my-blog/images/ry/1694675648026.png",c="/my-blog/images/ry/1694675370286.png",i="/my-blog/images/ry/1694676479408.png",l="/my-blog/images/ry/1694676535015.png",r={},u=p('<h3 id="集成前端" tabindex="-1"><a class="header-anchor" href="#集成前端" aria-hidden="true">#</a> 集成前端</h3><ol><li><p>复制粘贴到自己项目因为需要进行二开，所以需要将代码集成到我自己的项目去</p></li><li><p>项目vue版本要是2,如果是3就集成不进去，我自己的项目是若依的，很多步骤根据自己项目的实际情况来</p></li></ol><h3 id="_1-先将data-room-ui下的example和packages目录-复制粘贴到自己项目-如图" tabindex="-1"><a class="header-anchor" href="#_1-先将data-room-ui下的example和packages目录-复制粘贴到自己项目-如图" aria-hidden="true">#</a> 1.先将data-room-ui下的example和packages目录 复制粘贴到自己项目，如图：</h3><p><img src="'+e+'" alt="1694674944953"></p><h3 id="_2-配置vue-config-js中的别名和svg路径" tabindex="-1"><a class="header-anchor" href="#_2-配置vue-config-js中的别名和svg路径" aria-hidden="true">#</a> 2. 配置vue.config.js中的别名和svg路径</h3><ol><li>配置这段代码的意思就是你在项目中需要访问resolve后面路径的时候可以简写为‘data-room-ui’，如图：</li></ol><p><img src="'+t+'" alt="1694675010531"></p><ol start="2"><li>这段代码也是main.js文件里面的</li></ol><p><img src="'+o+'" alt="1694675648026"></p><h3 id="_3-将大屏的package-json中需要的包-放到自己项目中去-需要进行对比不要重复-之后执行-npm-i" tabindex="-1"><a class="header-anchor" href="#_3-将大屏的package-json中需要的包-放到自己项目中去-需要进行对比不要重复-之后执行-npm-i" aria-hidden="true">#</a> 3. 将大屏的package.json中需要的包，放到自己项目中去，需要进行对比不要重复，之后执行 npm i</h3><p><img src="'+c+`" alt="1694675370286"></p><h3 id="_4-修改复制到自己项目中example目录下的main-js文件" tabindex="-1"><a class="header-anchor" href="#_4-修改复制到自己项目中example目录下的main-js文件" aria-hidden="true">#</a> 4. 修改复制到自己项目中example目录下的main.js文件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;babel-polyfill&#39;</span>
<span class="token keyword">import</span> promise <span class="token keyword">from</span> <span class="token string">&#39;es6-promise&#39;</span>

<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">// import ElementUI from &#39;element-ui&#39; // 1. 项目已经初始化elementui，这个大屏作为子组件不需要再进行初始化</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getToken <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/auth&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// import App from &#39;./App&#39; // 2. 项目已经初始化，这个大屏作为子组件不需要再进行初始化</span>
<span class="token comment">// import store from &#39;./store&#39; // 3. 项目已经初始化，这个大屏作为子组件不需要再进行初始化</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;@/router/index.js&#39;</span>  <span class="token comment">//4. 修改为自己项目中的路由地址</span>
<span class="token comment">// import &#39;element-ui/lib/theme-chalk/index.css&#39;  // 5. 项目已经初始化，这个大屏作为子组件不需要再进行初始化</span>
<span class="token comment">// import &#39;@/assets/styles/index.scss&#39;  // 6. 修改为自己的样式地址</span>
<span class="token keyword">import</span> <span class="token string">&#39;data-room-ui/assets/style/common/index.scss&#39;</span> <span class="token comment">// 这是步骤6中地样式地址。data-room-ui就是在main.js中设置的</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> $dataRoomAxios <span class="token keyword">from</span> <span class="token string">&#39;data-room-ui/js/utils/http.js&#39;</span>

<span class="token comment">// 7. 以下为路径的修改</span>
<span class="token comment">// import { registerConfig } from &#39;@gcpaas/data-room-ui&#39;</span>
<span class="token keyword">import</span>  registerConfig  <span class="token keyword">from</span> <span class="token string">&#39;@/components/bigScreenDesign/packages/js/utils/registerConfig.js&#39;</span>
<span class="token comment">// import remoteComponents from &#39;@/remoteComponents/exports.js&#39;</span>
<span class="token keyword">import</span> remoteComponents <span class="token keyword">from</span> <span class="token string">&#39;@/components/bigScreenDesign/example/remoteComponents/exports.js&#39;</span>
<span class="token comment">// import customDatasetComponents from &#39;@/customDatasetComponents/exports.js&#39;</span>
<span class="token keyword">import</span> customDatasetComponents <span class="token keyword">from</span> <span class="token string">&#39;@/components/bigScreenDesign/example/customDatasetComponents/exports.js&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Column <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@antv/g2plot&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// import * as $axios from &#39;./http.js&#39;</span>
<span class="token comment">// //将调整过的axios实例赋值给Vue实例的原型属性，供大屏设计器内部的接口方法使用</span>
<span class="token comment">// Vue.prototype.$dataRoomAxios = $axios</span>
<span class="token comment">// import customPlots from &#39;@/customPlots/exports&#39;</span>
<span class="token comment">// Vue.use(ElementUI, { size: &#39;mini&#39; })</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>Column <span class="token operator">=</span> Column

<span class="token comment">// 8. 初始化</span>
window<span class="token punctuation">.</span><span class="token constant">ENV</span> <span class="token operator">=</span> <span class="token string">&#39;development&#39;</span>
<span class="token keyword">var</span> developmentConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">baseUrl</span><span class="token operator">:</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_API</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

window<span class="token punctuation">.</span><span class="token constant">CONFIG</span><span class="token operator">=</span>developmentConfig<span class="token punctuation">;</span>

<span class="token function">registerConfig</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">routers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 大屏设计路由</span>
      <span class="token literal-property property">designUrl</span><span class="token operator">:</span> <span class="token string">&#39;/bigscreen/design&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 预览路由</span>
      <span class="token literal-property property">previewUrl</span><span class="token operator">:</span> <span class="token string">&#39;/bigscreen/preview&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 页面管理路由（带头部跳转路由）</span>
      <span class="token literal-property property">pageManagementUrl</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 页面列表路由</span>
      <span class="token literal-property property">pageListUrl</span><span class="token operator">:</span> <span class="token string">&#39;/big-screen-list&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 模版列表</span>
      <span class="token literal-property property">templateListUrl</span><span class="token operator">:</span> <span class="token string">&#39;/big-screen-template&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 数据源管理</span>
      <span class="token literal-property property">dataSourceUrl</span><span class="token operator">:</span> <span class="token string">&#39;/big-screen-dataSource&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 数据集管理</span>
      <span class="token literal-property property">dataSetUrl</span><span class="token operator">:</span> <span class="token string">&#39;/big-screen-dataSet&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 资源管理</span>
      <span class="token literal-property property">sourceUrl</span><span class="token operator">:</span> <span class="token string">&#39;/big-screen-source&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 组件库</span>
      <span class="token literal-property property">componentUrl</span><span class="token operator">:</span> <span class="token string">&#39;/big-screen-components&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">httpConfigs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">baseURL</span><span class="token operator">:</span> window<span class="token punctuation">.</span><span class="token constant">CONFIG</span><span class="token operator">?.</span>baseUrl<span class="token punctuation">,</span>
          <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;Authorization&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Bearer &#39;</span> <span class="token operator">+</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token literal-property property">starter</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;大屏设计&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// logo: &#39;http://127.0.0.1:8081//bigScreenServer/static/1660890612740747265.png&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">customTheme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;--bs-background-1&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#151a26&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 整体背景色</span>
      <span class="token string-property property">&#39;--bs-background-2&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#232832&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 布局背景色</span>
      <span class="token string-property property">&#39;--bs-el-background-1&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#151A26&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 组件背景色，输入框...</span>
      <span class="token string-property property">&#39;--bs-el-background-2&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#35393F&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 组件背景色，按钮、分页、加载...</span>
      <span class="token string-property property">&#39;--bs-el-background-3&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#303640&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 组件背景色，表格头部、下拉框hover...</span>
      <span class="token string-property property">&#39;--bs-el-title&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 标题字体颜色</span>
      <span class="token string-property property">&#39;--bs-el-text&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 一般字体颜色</span>
      <span class="token string-property property">&#39;--bs-el-color-primary&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#409EFF&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 样式主题色</span>
      <span class="token string-property property">&#39;--bs-el-color-primary-active&#39;</span><span class="token operator">:</span> <span class="token string">&#39;64, 158, 255&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 主要激活 =&gt; rgba(64, 158, 255, 1) = #409EFF</span>
      <span class="token string-property property">&#39;--bs-el-border&#39;</span><span class="token operator">:</span> <span class="token string">&#39;transparent&#39;</span> <span class="token comment">// 边框颜色</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// datasetAuth: [&#39;unAdd&#39;, &#39;unEdit&#39;, &#39;unDelete&#39;], // 数据集按钮权限 新增 编辑 删除</span>
    <span class="token comment">// datasetTypeList: [&#39;original&#39;, &#39;custom&#39;, &#39;http&#39;],</span>
    <span class="token comment">// customPlots: [],</span>
    <span class="token comment">// 远程组件列表</span>
    remoteComponents<span class="token punctuation">,</span>
    customDatasetComponents
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  router
<span class="token punctuation">)</span>

promise<span class="token punctuation">.</span><span class="token function">polyfill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 9.</span>
<span class="token comment">// 自定义指令</span>
<span class="token comment">// Vue.use(ElementUI, { size: &#39;mini&#39; })</span>
<span class="token comment">// Vue.config.productionTip = false</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$dataRoomAxios <span class="token operator">=</span> $dataRoomAxios
<span class="token comment">// 兼容ie下双向绑定事件</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">inputChange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
<span class="token punctuation">}</span>
<span class="token comment">// 10.</span>
<span class="token comment">/* eslint-disable no-new */</span>
<span class="token comment">// new Vue({</span>
<span class="token comment">//   el: &#39;#app&#39;,</span>
<span class="token comment">//   router,</span>
<span class="token comment">//   store,</span>
<span class="token comment">//   render: (h) =&gt; h(App)</span>
<span class="token comment">// })</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-在自己项目的main-js中引入-example目录下的main-js文件-如图" tabindex="-1"><a class="header-anchor" href="#_5-在自己项目的main-js中引入-example目录下的main-js文件-如图" aria-hidden="true">#</a> 5. 在自己项目的main.js中引入 example目录下的main.js文件，如图</h3><p><img src="`+i+'" alt="1694676479408"></p><h3 id="第六步-将大屏的vuex集成到自己项目的vuex" tabindex="-1"><a class="header-anchor" href="#第六步-将大屏的vuex集成到自己项目的vuex" aria-hidden="true">#</a> 第六步：将大屏的vuex集成到自己项目的vuex</h3><p><img src="'+l+`" alt="1694676535015"></p><h3 id="_6-配置axios-根据自己项目实际情况来-这个是若依原版" tabindex="-1"><a class="header-anchor" href="#_6-配置axios-根据自己项目实际情况来-这个是若依原版" aria-hidden="true">#</a> 6. 配置axios(根据自己项目实际情况来，这个是若依原版)</h3><ol><li>配置baseURL(packages/js/utils/http.js)</li><li>修改一下get post download 请求，就是注释掉拼写的url路径</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> qs <span class="token keyword">from</span> <span class="token string">&#39;qs&#39;</span>
<span class="token comment">// import _ from &#39;lodash&#39;</span>
<span class="token keyword">import</span> merge <span class="token keyword">from</span> <span class="token string">&#39;lodash/merge&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getToken <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/auth&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 统一进行异常输出
 * 如果异常只是弹框显示即可，可使用该实例
 */</span>
<span class="token comment">// 1. 根据项目设置</span>
<span class="token keyword">const</span> httpConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_API</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">,</span>
  <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token string-property property">&#39;Authorization&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Bearer &#39;</span> <span class="token operator">+</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> httpCustom <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>httpConfig<span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 *对于出现异常时还需要做其他操作，可使用该实例
 */</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>httpConfig<span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 封装的异常对象
 * <span class="token keyword">@param</span> <span class="token parameter">message</span>
 * <span class="token keyword">@param</span> <span class="token parameter">code</span>
 * <span class="token keyword">@constructor</span>
 *
 */</span>
<span class="token keyword">function</span> <span class="token function">EipException</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> message
  <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 请求拦截
 */</span>
http<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>config<span class="token punctuation">,</span>
      <span class="token comment">// 2. 注释掉</span>
    <span class="token comment">// ...merge(httpConfig, window.BS_CONFIG?.httpConfigs)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 自定义请求拦截
 */</span>
httpCustom<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> config
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 响应拦截
 */</span>
http<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> response<span class="token punctuation">.</span>data
  <span class="token comment">// 异常拦截</span>
  <span class="token comment">// eslint-disable-next-line no-empty</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>res <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>res <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span>code <span class="token operator">!==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// return Promise.reject(response.data.msg)</span>
    <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">EipException</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">,</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>message <span class="token operator">&amp;&amp;</span> error<span class="token punctuation">.</span>message <span class="token operator">===</span> <span class="token string">&#39;Network Error&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> error<span class="token punctuation">.</span>message<span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token comment">// eslint-disable-next-line no-empty</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
  <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;服务异常&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 响应拦截
 */</span>
httpCustom<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> response<span class="token punctuation">.</span>data
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>message <span class="token operator">&amp;&amp;</span> error<span class="token punctuation">.</span>message <span class="token operator">===</span> <span class="token string">&#39;Network Error&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token comment">// eslint-disable-next-line no-empty</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
  <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;服务异常&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * get请求
 * <span class="token keyword">@param</span> <span class="token parameter">url</span>
 * <span class="token keyword">@param</span> <span class="token parameter">params</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Promise<span class="token punctuation">&lt;</span>any<span class="token punctuation">&gt;</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">get</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> customHandlerException <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 3. 注释掉</span>
  <span class="token comment">// if (!url.startsWith(&#39;http&#39;)) {</span>
  <span class="token comment">//   url = window.BS_CONFIG?.httpConfigs?.baseURL + url</span>
  <span class="token comment">// }</span>
  <span class="token comment">// 如果是ie浏览器要添加个时间戳，解决浏览器缓存问题</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>window<span class="token punctuation">.</span>ActiveXObject <span class="token operator">||</span> <span class="token string">&#39;ActiveXObject&#39;</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    params<span class="token punctuation">.</span>_t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> axiosInstance <span class="token operator">=</span> customHandlerException <span class="token operator">?</span> httpCustom <span class="token operator">:</span> http
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    axiosInstance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> params<span class="token punctuation">,</span>
      <span class="token function-variable function">paramsSerializer</span><span class="token operator">:</span> <span class="token parameter">params</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">indices</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>customHandlerException<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Post 请求
 * <span class="token keyword">@param</span> <span class="token parameter">url</span>
 * <span class="token keyword">@param</span> <span class="token parameter">params</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Promise<span class="token punctuation">&lt;</span>any<span class="token punctuation">&gt;</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">post</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> customHandlerException <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 4. 注释掉</span>
  <span class="token comment">// if (!url.startsWith(&#39;http&#39;)) {</span>
  <span class="token comment">//   url = window.BS_CONFIG?.httpConfigs?.baseURL + url</span>
  <span class="token comment">// }</span>
  <span class="token keyword">const</span> axiosInstance <span class="token operator">=</span> customHandlerException <span class="token operator">?</span> httpCustom <span class="token operator">:</span> http
  data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    axiosInstance<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>customHandlerException<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * download 请求
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Promise<span class="token punctuation">&lt;</span>any<span class="token punctuation">&gt;</span><span class="token punctuation">}</span></span>
 */</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">download</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> body <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 5. 注释掉</span>
  <span class="token comment">// if (!url.startsWith(&#39;http&#39;)) {</span>
  <span class="token comment">//   url = window.BS_CONFIG?.httpConfigs?.baseURL + url</span>
  <span class="token comment">// }</span>
  <span class="token comment">// 如果是ie浏览器要添加个时间戳，解决浏览器缓存问题</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>window<span class="token punctuation">.</span>ActiveXObject <span class="token operator">||</span> <span class="token string">&#39;ActiveXObject&#39;</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    params<span class="token punctuation">.</span>_t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> headers<span class="token punctuation">,</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> params<span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> body<span class="token punctuation">,</span>
      <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&#39;arraybuffer&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// IE10,11采用自带下载文件流方法</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>window<span class="token punctuation">.</span>ActiveXObject <span class="token operator">||</span> <span class="token string">&#39;ActiveXObject&#39;</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>navigator <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>msSaveOrOpenBlob<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span><span class="token function">msSaveOrOpenBlob</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>res<span class="token punctuation">.</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>filename<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> fileUrl <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>res<span class="token punctuation">.</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token comment">// 创建超链接</span>
      <span class="token keyword">const</span> fileLink <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
      fileLink<span class="token punctuation">.</span>href <span class="token operator">=</span> fileUrl
      <span class="token comment">// 设置下载文件名</span>
      <span class="token keyword">let</span> responseFileName <span class="token operator">=</span> res<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>filename
      <span class="token comment">// 解决中文乱码</span>
      responseFileName <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">decodeURI</span><span class="token punctuation">(</span>responseFileName<span class="token punctuation">)</span>
      fileLink<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;download&#39;</span><span class="token punctuation">,</span> responseFileName<span class="token punctuation">)</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>fileLink<span class="token punctuation">)</span>
      <span class="token comment">// 模拟人工点击下载超链接</span>
      fileLink<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token comment">// 释放资源</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>fileLink<span class="token punctuation">)</span>
      window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>fileUrl<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> status <span class="token operator">=</span> e<span class="token operator">?.</span>response<span class="token operator">?.</span>status
      <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> <span class="token number">404</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;文件不存在或已被删除&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;服务异常&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;服务异常&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最后-访问路由-big-screen-list-就可以看到界面了" tabindex="-1"><a class="header-anchor" href="#最后-访问路由-big-screen-list-就可以看到界面了" aria-hidden="true">#</a> 最后：访问路由: /big-screen-list 就可以看到界面了</h3>`,21),k=[u];function d(m,v){return s(),a("div",null,k)}const y=n(r,[["render",d],["__file","index_02.html.vue"]]);export{y as default};

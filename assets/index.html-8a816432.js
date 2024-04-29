import{_ as t,p as o,q as i,s as n,R as s,t as p,Y as a,n as c}from"./framework-aa5c4115.js";const l={},r=a(`<h2 id="vue-element-admin" tabindex="-1"><a class="header-anchor" href="#vue-element-admin" aria-hidden="true">#</a> vue-element-admin</h2><ul><li>首次克隆需要做以下操作</li></ul><h4 id="插件更名" tabindex="-1"><a class="header-anchor" href="#插件更名" aria-hidden="true">#</a> 插件更名</h4><ul><li>首先将package.json中的tui-editor那一行修改为&quot;@toast-ui/editor&quot;: &quot;^3.1.3&quot;,</li></ul><hr><h4 id="文件更名" tabindex="-1"><a class="header-anchor" href="#文件更名" aria-hidden="true">#</a> 文件更名</h4><ul><li><p>进入\\src\\components\\MarkdownEditor\\index.vue文件，将他的所有import删除换成下面四行</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">import</span> <span class="token string">&#39;codemirror/lib/codemirror.css&#39;</span>
 <span class="token keyword">import</span> <span class="token string">&#39;@toast-ui/editor/dist/toastui-editor.css&#39;</span>
 <span class="token keyword">import</span> Editor <span class="token keyword">from</span> <span class="token string">&#39;@toast-ui/editor&#39;</span>
 <span class="token keyword">import</span> defaultOptions <span class="token keyword">from</span> <span class="token string">&#39;./default-options&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="方法更名" tabindex="-1"><a class="header-anchor" href="#方法更名" aria-hidden="true">#</a> 方法更名</h4><ul><li>把该页面（还是第二步中的文件）的getValue和setValue分别换成getMarkdown和setMarkdown</li><li>把页面中的所有tui-editor全部替换为@toast-ui/editor</li></ul><hr><h4 id="重新安装" tabindex="-1"><a class="header-anchor" href="#重新安装" aria-hidden="true">#</a> 重新安装</h4><ul><li>重新执行npm install安装依赖就解决了。</li></ul>`,12),u={href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank",rel:"noopener noreferrer"},d=a(`<h4 id="修改相关样式的方法" tabindex="-1"><a class="header-anchor" href="#修改相关样式的方法" aria-hidden="true">#</a> 修改相关样式的方法</h4><h5 id="_1-修改右侧设置按钮" tabindex="-1"><a class="header-anchor" href="#_1-修改右侧设置按钮" aria-hidden="true">#</a> 1.修改右侧设置按钮</h5><ol><li>源代码：src\\layout\\components\\Settings\\index.vue</li><li>引用代码文件：src\\components\\RightPanel\\index.vue</li><li>引用代码文件：src\\layout\\index.vue</li></ol><h5 id="_2-修改导航栏文字" tabindex="-1"><a class="header-anchor" href="#_2-修改导航栏文字" aria-hidden="true">#</a> 2.修改导航栏文字</h5><ol><li>源代码：src\\components\\Hamburger\\index.vue</li><li>引用代码文件：src\\layout\\components\\Navbar.vue</li></ol><h2 id="_2-修改相关样式的方法" tabindex="-1"><a class="header-anchor" href="#_2-修改相关样式的方法" aria-hidden="true">#</a> 2.修改相关样式的方法</h2><h3 id="_1-修改右侧设置按钮-1" tabindex="-1"><a class="header-anchor" href="#_1-修改右侧设置按钮-1" aria-hidden="true">#</a> 1. 修改右侧设置按钮</h3><ol><li>源代码：src\\layout\\components\\Settings\\index.vue</li><li>引用代码文件：src\\components\\RightPanel\\index.vue</li><li>引用代码文件：src\\layout\\index.vue</li></ol><h3 id="_2-修改导航栏文字-1" tabindex="-1"><a class="header-anchor" href="#_2-修改导航栏文字-1" aria-hidden="true">#</a> 2. 修改导航栏文字</h3><ol><li>源代码：src\\components\\Hamburger\\index.vue</li><li>引用代码文件：src\\layout\\components\\Navbar.vue</li></ol><h3 id="_3-左侧菜单栏的logo和标题" tabindex="-1"><a class="header-anchor" href="#_3-左侧菜单栏的logo和标题" aria-hidden="true">#</a> 3. 左侧菜单栏的logo和标题</h3><ol><li>源代码：src\\layout\\components\\Sidebar\\Logo.vue</li></ol><h3 id="_4-设置按钮以及菜单相关属性设置" tabindex="-1"><a class="header-anchor" href="#_4-设置按钮以及菜单相关属性设置" aria-hidden="true">#</a> 4. 设置按钮以及菜单相关属性设置</h3><ol><li>src\\settings.js</li></ol><h3 id="_5-关闭代码检查" tabindex="-1"><a class="header-anchor" href="#_5-关闭代码检查" aria-hidden="true">#</a> 5. 关闭代码检查</h3><ol><li>settings.json</li><li>关闭eslint ：.eslintignore</li></ol><h3 id="_6-导航标签右键设置" tabindex="-1"><a class="header-anchor" href="#_6-导航标签右键设置" aria-hidden="true">#</a> 6. 导航标签右键设置</h3><ol><li>源代码：src\\layout\\components\\TagsView\\index.vue</li></ol><h3 id="_7-跳过登录注册" tabindex="-1"><a class="header-anchor" href="#_7-跳过登录注册" aria-hidden="true">#</a> 7. 跳过登录注册</h3><ol><li>src\\permission.js</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>
<span class="token keyword">import</span> NProgress <span class="token keyword">from</span> <span class="token string">&#39;nprogress&#39;</span> <span class="token comment">// progress bar</span>
<span class="token keyword">import</span> <span class="token string">&#39;nprogress/nprogress.css&#39;</span> <span class="token comment">// progress bar style</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getToken <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/auth&#39;</span> <span class="token comment">// get token from cookie</span>
<span class="token keyword">import</span> getPageTitle <span class="token keyword">from</span> <span class="token string">&#39;@/utils/get-page-title&#39;</span>

NProgress<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">showSpinner</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// NProgress Configuration</span>

<span class="token keyword">const</span> whiteList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/auth-redirect&#39;</span><span class="token punctuation">]</span> <span class="token comment">// no redirect whitelist</span>

router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// start progress bar</span>
  NProgress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// set page title</span>
  document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token function">getPageTitle</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title<span class="token punctuation">)</span>

  <span class="token comment">// determine whether the user has logged in</span>
  <span class="token comment">// const hasToken = getToken()</span>

  <span class="token comment">// if (hasToken) {</span>
  <span class="token comment">//   if (to.path === &#39;/login&#39;) {</span>
  <span class="token comment">//     // if is logged in, redirect to the home page</span>
  <span class="token comment">//     next({ path: &#39;/&#39; })</span>
  <span class="token comment">//     NProgress.done()</span>
  <span class="token comment">//   } else {</span>
  <span class="token comment">//     // determine whether the user has obtained his permission roles through getInfo</span>
  <span class="token comment">//     const hasRoles = store.getters.roles &amp;&amp; store.getters.roles.length &gt; 0</span>
  <span class="token comment">//     if (hasRoles) {</span>
  <span class="token comment">//       next()</span>
  <span class="token comment">//     } else {</span>
  <span class="token comment">//       try {</span>
  <span class="token comment">//         // get user info</span>
  <span class="token comment">//         // note: roles must be a object array! such as: [&#39;admin&#39;] or ,[&#39;developer&#39;,&#39;editor&#39;]</span>
  <span class="token comment">//         const { roles } = await store.dispatch(&#39;user/getInfo&#39;)</span>

  <span class="token comment">//         // generate accessible routes map based on roles</span>
  <span class="token comment">//         const accessRoutes = await store.dispatch(&#39;permission/generateRoutes&#39;, roles)</span>

  <span class="token comment">//         // dynamically add accessible routes</span>
  <span class="token comment">//         router.addRoutes(accessRoutes)</span>

  <span class="token comment">//         // hack method to ensure that addRoutes is complete</span>
  <span class="token comment">//         // set the replace: true, so the navigation will not leave a history record</span>
  <span class="token comment">//         next({ ...to, replace: true })</span>
  <span class="token comment">//       } catch (error) {</span>
  <span class="token comment">//         // remove token and go to login page to re-login</span>
  <span class="token comment">//         await store.dispatch(&#39;user/resetToken&#39;)</span>
  <span class="token comment">//         Message.error(error || &#39;Has Error&#39;)</span>
  <span class="token comment">//         next(\`/login?redirect=\${to.path}\`)</span>
  <span class="token comment">//         NProgress.done()</span>
  <span class="token comment">//       }</span>
  <span class="token comment">//     }</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// } else {</span>
  <span class="token comment">//   /* has no token*/</span>

  <span class="token comment">//   if (whiteList.indexOf(to.path) !== -1) {</span>
  <span class="token comment">//     // in the free login whitelist, go directly</span>
  <span class="token comment">//     next()</span>
  <span class="token comment">//   } else {</span>
  <span class="token comment">//     // other pages that do not have permission to access are redirected to the login page.</span>
  <span class="token comment">//     next(\`/login?redirect=\${to.path}\`)</span>
  <span class="token comment">//     NProgress.done()</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// }</span>
  <span class="token keyword">const</span> hasToken <span class="token operator">=</span> <span class="token string">&#39;admin-token&#39;</span>
  <span class="token keyword">const</span> role <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>hasToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> accessRoutes <span class="token operator">=</span> <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;permission/generateRoutes&#39;</span><span class="token punctuation">,</span> role<span class="token punctuation">)</span>
    <span class="token comment">// dynamically add accessible routes</span>
    router<span class="token punctuation">.</span><span class="token function">addRoutes</span><span class="token punctuation">(</span>accessRoutes<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// finish progress bar</span>
  NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>不跳过登录</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// import router from &#39;./router&#39;</span>
<span class="token comment">// import store from &#39;./store&#39;</span>
<span class="token comment">// import { Message } from &#39;element-ui&#39;</span>
<span class="token comment">// import NProgress from &#39;nprogress&#39; // progress bar</span>
<span class="token comment">// import &#39;nprogress/nprogress.css&#39; // progress bar style</span>
<span class="token comment">// import { getToken } from &#39;@/utils/auth&#39; // get token from cookie</span>
<span class="token comment">// import getPageTitle from &#39;@/utils/get-page-title&#39;</span>

<span class="token comment">// NProgress.configure({ showSpinner: false }) // NProgress Configuration</span>

<span class="token comment">// const whiteList = [&#39;/login&#39;, &#39;/auth-redirect&#39;] // no redirect whitelist</span>

<span class="token comment">// router.beforeEach(async(to, from, next) =&gt; {</span>
<span class="token comment">//   // start progress bar</span>
<span class="token comment">//   NProgress.start()</span>

<span class="token comment">//   // set page title</span>
<span class="token comment">//   document.title = getPageTitle(to.meta.title)</span>

<span class="token comment">//   // determine whether the user has logged in</span>
<span class="token comment">//   const hasToken = getToken()</span>

<span class="token comment">//   if (hasToken) {</span>
<span class="token comment">//     if (to.path === &#39;/login&#39;) {</span>
<span class="token comment">//       // if is logged in, redirect to the home page</span>
<span class="token comment">//       next({ path: &#39;/&#39; })</span>
<span class="token comment">//       NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939</span>
<span class="token comment">//     } else {</span>
<span class="token comment">//       // determine whether the user has obtained his permission roles through getInfo</span>
<span class="token comment">//       const hasRoles = store.getters.roles &amp;&amp; store.getters.roles.length &gt; 0</span>
<span class="token comment">//       if (hasRoles) {</span>
<span class="token comment">//         next()</span>
<span class="token comment">//       } else {</span>
<span class="token comment">//         try {</span>
<span class="token comment">//           // get user info</span>
<span class="token comment">//           // note: roles must be a object array! such as: [&#39;admin&#39;] or ,[&#39;developer&#39;,&#39;editor&#39;]</span>
<span class="token comment">//           const { roles } = await store.dispatch(&#39;user/getInfo&#39;)</span>

<span class="token comment">//           // generate accessible routes map based on roles</span>
<span class="token comment">//           const accessRoutes = await store.dispatch(&#39;permission/generateRoutes&#39;, roles)</span>

<span class="token comment">//           // dynamically add accessible routes</span>
<span class="token comment">//           router.addRoutes(accessRoutes)</span>

<span class="token comment">//           // hack method to ensure that addRoutes is complete</span>
<span class="token comment">//           // set the replace: true, so the navigation will not leave a history record</span>
<span class="token comment">//           next({ ...to, replace: true })</span>
<span class="token comment">//         } catch (error) {</span>
<span class="token comment">//           // remove token and go to login page to re-login</span>
<span class="token comment">//           await store.dispatch(&#39;user/resetToken&#39;)</span>
<span class="token comment">//           Message.error(error || &#39;Has Error&#39;)</span>
<span class="token comment">//           next(\`/login?redirect=\${to.path}\`)</span>
<span class="token comment">//           NProgress.done()</span>
<span class="token comment">//         }</span>
<span class="token comment">//       }</span>
<span class="token comment">//     }</span>
<span class="token comment">//   } else {</span>
<span class="token comment">//     /* has no token*/</span>

<span class="token comment">//     if (whiteList.indexOf(to.path) !== -1) {</span>
<span class="token comment">//       // in the free login whitelist, go directly</span>
<span class="token comment">//       next()</span>
<span class="token comment">//     } else {</span>
<span class="token comment">//       // other pages that do not have permission to access are redirected to the login page.</span>
<span class="token comment">//       next(\`/login?redirect=\${to.path}\`)</span>
<span class="token comment">//       NProgress.done()</span>
<span class="token comment">//     }</span>
<span class="token comment">//   }</span>
<span class="token comment">// })</span>

<span class="token comment">// router.afterEach(() =&gt; {</span>
<span class="token comment">//   // finish progress bar</span>
<span class="token comment">//   NProgress.done()</span>
<span class="token comment">// })</span>

<span class="token comment">// 导入路由</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
<span class="token comment">// 导入状态管理</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token comment">// 导入 Message 组件（来自 element-ui 库）</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>
<span class="token comment">// 导入 NProgress 组件用于显示进度条</span>
<span class="token keyword">import</span> NProgress <span class="token keyword">from</span> <span class="token string">&#39;nprogress&#39;</span>
<span class="token comment">// 导入进度条样式</span>
<span class="token keyword">import</span> <span class="token string">&#39;nprogress/nprogress.css&#39;</span>
<span class="token comment">// 导入从 cookie 获取令牌的方法</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getToken <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/auth&#39;</span>
<span class="token comment">// 导入获取页面标题的方法</span>
<span class="token keyword">import</span> getPageTitle <span class="token keyword">from</span> <span class="token string">&#39;@/utils/get-page-title&#39;</span>

<span class="token comment">// 配置 NProgress 进度条显示选项</span>
NProgress<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">showSpinner</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 不需要重定向的白名单路径列表</span>
<span class="token keyword">const</span> whiteList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/auth-redirect&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// 路由导航守卫：在每次路由切换前执行</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 开始显示进度条</span>
  NProgress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 设置页面标题</span>
  document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token function">getPageTitle</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title<span class="token punctuation">)</span>

  <span class="token comment">// 判断用户是否已登录（是否存在令牌）</span>
  <span class="token keyword">const</span> hasToken <span class="token operator">=</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>hasToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果已登录，重定向到首页</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 判断用户是否已获取权限角色（roles）</span>
      <span class="token keyword">const</span> hasRoles <span class="token operator">=</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>roles <span class="token operator">&amp;&amp;</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>roles<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>hasRoles<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token comment">// 获取用户信息</span>
          <span class="token comment">// 注意：roles 必须是一个对象数组，例如：[&#39;admin&#39;] 或 [&#39;developer&#39;, &#39;editor&#39;]</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> roles <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;user/getInfo&#39;</span><span class="token punctuation">)</span>

          <span class="token comment">// 基于角色生成可访问的路由映射</span>
          <span class="token keyword">const</span> accessRoutes <span class="token operator">=</span> <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;permission/generateRoutes&#39;</span><span class="token punctuation">,</span> roles<span class="token punctuation">)</span>

          <span class="token comment">// 动态添加可访问的路由</span>
          router<span class="token punctuation">.</span><span class="token function">addRoutes</span><span class="token punctuation">(</span>accessRoutes<span class="token punctuation">)</span>

          <span class="token comment">// 使用 hack 方法确保 addRoutes 执行完成</span>
          <span class="token comment">// 设置 replace: true，这样导航将不会保留历史记录</span>
          <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>to<span class="token punctuation">,</span> <span class="token literal-property property">replace</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 移除令牌并前往登录页面重新登录</span>
          <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;user/resetToken&#39;</span><span class="token punctuation">)</span>
          Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error <span class="token operator">||</span> <span class="token string">&#39;发生错误&#39;</span><span class="token punctuation">)</span>
          <span class="token function">next</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/login?redirect=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>to<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
          NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 没有令牌 */</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>whiteList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 在自由登录白名单中，直接前往</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 被禁止访问的其他页面将被重定向到登录页面</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/login?redirect=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>to<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 路由后置钩子：在每次路由切换后执行</span>
router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 完成进度条显示</span>
  NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function m(k,v){const e=c("ExternalLinkIcon");return o(),i("div",null,[r,n("p",null,[s("开源地址："),n("a",u,[s("花裤衩"),p(e)])]),d])}const h=t(l,[["render",m],["__file","index.html.vue"]]);export{h as default};

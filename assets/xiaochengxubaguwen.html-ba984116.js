import{_ as e,p as n,q as i,Y as a}from"./framework-aa5c4115.js";const d={},s=a(`<h2 id="小程序八股文" tabindex="-1"><a class="header-anchor" href="#小程序八股文" aria-hidden="true">#</a> 小程序八股文</h2><h3 id="_1-说说你对小程序双线程模型架构的理解" tabindex="-1"><a class="header-anchor" href="#_1-说说你对小程序双线程模型架构的理解" aria-hidden="true">#</a> 1. 说说你对⼩程序双线程模型架构的理解?</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⼩程序的宿主环境是：微信客户端
    宿主环境可以执⾏⼩程序的各种⽂件

当⼩程序运⾏在 WebView 环境下时，会有什么问题呢？
    JS 逻辑、DOM 树创建、CSS 解析、样式计算、Layout、Paint (Composite) 都发⽣在同⼀线程中
    在 WebView 上执⾏过多的 JS 逻辑可能阻塞渲染，导致界⾯卡顿

⼩程序考虑到性能与安全的问题，采⽤了「双线程模型」的架构
    WXML模块和WXSS样式运⾏于 渲染层，渲染层使⽤WebView线程渲染
        当⼀个程序有多个⻚⾯时，会使⽤多个WebView的线程
    JS脚本（app.js/home.js等）运⾏于 逻辑层，逻辑层使⽤ JsCore 运⾏ JS脚本
        这两个线程都会经由微信客户端（Native）进⾏中转并交互
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-什么是rpx-如何使用rpx进行屏幕适配" tabindex="-1"><a class="header-anchor" href="#_2-什么是rpx-如何使用rpx进行屏幕适配" aria-hidden="true">#</a> 2. 什么是rpx？如何使⽤rpx进⾏屏幕适配？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>什么是rpx：
    rpx的全称是 responsive pixel ，可以根据屏幕宽度进⾏⾃适应。

使⽤rpx进⾏的屏幕适配：
    1）开发微信⼩程序时设计师可以⽤ iPhone6 作为视觉稿的标准，规定屏幕宽为750rpx。
    2）在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素。
    3）即 1rpx = 0.5px = 1物理像素。
    4）因此如果想定义⼀个100px宽度的view 则需要设置width为 200rpx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-wx-if和hidden属性有什么区别-开发中如何选择" tabindex="-1"><a class="header-anchor" href="#_3-wx-if和hidden属性有什么区别-开发中如何选择" aria-hidden="true">#</a> 3. wx:if和hidden属性有什么区别？开发中如何选择？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wx:if和hidden的区别 :
    1)wx:if 需要根据条件判断组件是否渲染，条件为true，对应的组件才会渲染出来；条件为false时，对应组件不仅不会渲染，也不会出现在虚拟DOM中。
    2)hidden属性本质是通过添加hidden这个属性来控制组件的隐藏或显示，即使条件为true，对应组件也会渲染，只不过不会显示在⻚⾯中。

开发中选择:
    1)如果操作很频繁 则使⽤hidden
    2)如果不频繁 则使⽤ wx:if
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-wx-for为什么需要绑定key-绑定key的方式有哪些" tabindex="-1"><a class="header-anchor" href="#_4-wx-for为什么需要绑定key-绑定key的方式有哪些" aria-hidden="true">#</a> 4. wx:for为什么需要绑定key？绑定key的⽅式有哪些？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>为什么要绑定key:
    1)当我们希望处理同⼀层的VNode 进⾏插⼊、删除、新增节点时，可以更好的进⾏节点的复⽤，就需要key属性来判断。

绑定key的⽅式有哪些:
    1)字符串: 表示 for循环array中item的某个属性(property) 该property是列表中的唯⼀的字符串或数字
    2)保留关键字 *this 表示item本身 此时item本身是唯⼀的字符串或数字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-wxs的作用是什么-如何使用" tabindex="-1"><a class="header-anchor" href="#_5-wxs的作用是什么-如何使用" aria-hidden="true">#</a> 5. WXS的作⽤是什么？如何使⽤？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>WXS作⽤:
    1)⼩程序的⼀套脚本语⾔与 JavaScript 是不同的语⾔，有⾃⼰的语法，并不和 JavaScript ⼀致。
    2)为了在wxml中调⽤函数来处理对应的数据

如何使⽤:
    1)⽅式⼀：写在 wxs标签中
    2)⽅式⼆：写在 .wxs结尾的⽂件中 以cjs的⽅式导出，以cjs的⽅式在wxml⽂件中引⼊使⽤
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-小程序中的事件如何传递参数" tabindex="-1"><a class="header-anchor" href="#_6-小程序中的事件如何传递参数" aria-hidden="true">#</a> 6. ⼩程序中的事件如何传递参数？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⼩程序中事件常⽤传递参数的⽅式是通过 data- 属性来实现。
可以在逻辑代码中通过 el.currentTarget.dataset.属性名称 获取
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-target和currenttarget的区别" tabindex="-1"><a class="header-anchor" href="#_7-target和currenttarget的区别" aria-hidden="true">#</a> 7. target和currentTarget的区别？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>target：指触发事件的元素
currentTarget：指的是处理事件的元素，两者作⽤在同⼀个元素上⽆差别。
⼩程序中常⽤currentTarget
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-⻚面和组件之间如何进行数据传递" tabindex="-1"><a class="header-anchor" href="#_8-⻚面和组件之间如何进行数据传递" aria-hidden="true">#</a> 8. ⻚⾯和组件之间如何进⾏数据传递？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⻚⾯传递给组件：
    1)向组件传递数据可以通过 properties 属性，⽀持String、Number、Boolean、Object、Array、null等类型
    2)向组件传递样式可以通过定义externalClasses属性来实现

组件传递给⻚⾯：
    1)组件向外传递事件可以在组件内部通过this.triggerEvent将事件派发，⻚⾯可以通过bind绑定
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-小程序中组件的插槽如何使用-如何给插槽传递默认值" tabindex="-1"><a class="header-anchor" href="#_9-小程序中组件的插槽如何使用-如何给插槽传递默认值" aria-hidden="true">#</a> 9. ⼩程序中组件的插槽如何使⽤？如何给插槽传递默认值？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⼩程序中使⽤插槽 :
    1）在组件中想要使⽤插槽的地⽅通过 预留位置（也⽀持具名插槽）。
    2）在组件外部可以在预留插槽中插⼊⽂字、图⽚或者是进度条。

给插槽传递默认值 :
    1）⼩程序中不⽀持给插槽设置默认值，如果⾮要设置，可以通过兄弟选择器来实现 :
    2）给需要传递的默认值元素上添加⼀个类，设置 display : none，默认不显示
    3）之后在有预留插槽位置的元素设置伪类 :empty ，当⾥⾯没有内容时，再通过兄弟选择器找到默认值元素上的类，将display改为block。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-⻚面跳转过程中如何进行数据传递" tabindex="-1"><a class="header-anchor" href="#_10-⻚面跳转过程中如何进行数据传递" aria-hidden="true">#</a> 10. ⻚⾯跳转过程中如何进⾏数据传递？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⼩程序中实现⻚⾯跳转有两种⽅式 :
    1）⽅式⼀ ：通过navigator组件，有利于SEO的优化。
    2）⽅式⼆ : 通过wx的API进⾏⻚⾯跳转
    wx.navigateTo() ：保留当前⻚⾯，跳转到应⽤内的某个⻚⾯
    wx.navigateBack() ：关闭当前⻚⾯，返回上⼀⻚⾯或者多级⻚⾯

⻚⾯跳转数据的传递 :
    1)⽐如⾸⻚传递数据⾄详情⻚ (使⽤URL中的query字段)  url : &quot;/pages/classify/index?name=wzl&amp;amp;age=22&quot;
    2)⽐如详情⻚传递数据⾄⾸⻚(在详情⻚内部拿到⾸⻚实例，并修改数据) ：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> pages <span class="token operator">=</span> <span class="token function">getCurrentPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//获取实例⽅法</span>
<span class="token keyword">const</span> prevPage <span class="token operator">=</span> pages<span class="token punctuation">[</span>pages<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">//具体实例</span>
prevPage<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">&quot;my name is wzl&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//修改数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-说说小程序的登录流程" tabindex="-1"><a class="header-anchor" href="#_11-说说小程序的登录流程" aria-hidden="true">#</a> 11. 说说⼩程序的登录流程？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.通过wx.login()获取code。
2.将这个code发送给后端，后端会返回⼀个token，这个token将作为你身份的唯⼀标识。
3.将token通过wx.setStorageSync()保存在本地存储。
4.⽤户下次进⼊⻚⾯时，会先通过wx.getStorageSync() ⽅法判断token是否有值，如果有值，则可以请求其它数据，如果没有值，则进⾏登录操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-小程序-wxss-与css的区别" tabindex="-1"><a class="header-anchor" href="#_12-小程序-wxss-与css的区别" aria-hidden="true">#</a> 12. ⼩程序 WXSS 与CSS的区别？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1)WXSS (WeiXin Style Sheets)是⼀套样式语⾔，⽤于描述 WXML 的组件样式。
2)WXSS ⽤来决定 WXML 的组件应该怎么显示。
3)为了适应⼴⼤的前端开发者，WXSS 具有 CSS ⼤部分特性。同时为了更适合开发微信⼩程序，WXSS 对CSS 进⾏了扩充以及修改。

与 CSS 相⽐，WXSS 扩展的特性有：
1)尺⼨单位 rpx（responsive pixel）
2)样式导⼊， @import 语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-小程序⻚面的生命周期函数" tabindex="-1"><a class="header-anchor" href="#_13-小程序⻚面的生命周期函数" aria-hidden="true">#</a> 13. ⼩程序⻚⾯的⽣命周期函数？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>onLoad : 
    ⻚⾯加载时触发。⼀个⻚⾯只会调⽤⼀次，可以在 onLoad 的参数中获取打开当前⻚⾯路径中的参数 

onShow : 
    ⻚⾯显示 / 切⼊前台时触发调⽤。 
    
onReady : 
    ⻚⾯初次渲染完成时触发,⼀个⻚⾯只会调⽤⼀次。 

onHide : 
    ⻚⾯隐藏 / 切⼊后台时触发，如 navigateTo 或底部tab 切换到其他⻚⾯，⼩程序切⼊后台等 

onUnload : 
    ⻚⾯卸载时触发。如 redirectTo 或 navigateBack 到其他⻚⾯时.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-小程序有哪些传递数据的方法" tabindex="-1"><a class="header-anchor" href="#_14-小程序有哪些传递数据的方法" aria-hidden="true">#</a> 14. ⼩程序有哪些传递数据的⽅法？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使⽤全局变量:
    1)在 app.js 中的 this.globalData = { } 中放⼊要存储的数据。
    2)在组件.js 中， 头部 引⼊ const app = getApp(); 获取到全局变量app。
    3)直接使⽤ app.globalData.key 来进⾏赋值和获取值。

使⽤路由:
    1)wx.navigateTo 和 wx.redirectTo 时，可以通过在 url 后 拼接变量。
    2)然后在 ⽬标⻚⾯ 通过在 onLoad 周期中，通过参数来获取传递过来的值。

使⽤本地缓存Storage
⻚⾯和组件之间数据的传递
使⽤第三⽅的事件总线库
使⽤ Mobx来管理⼩程序跨⻚⾯传递数据。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-微信小程序的优劣势" tabindex="-1"><a class="header-anchor" href="#_15-微信小程序的优劣势" aria-hidden="true">#</a> 15. 微信⼩程序的优劣势</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1)即⽤即⾛，不⽤安装，省流量，省安装时间，不占⽤桌⾯
2)依托微信流量，天⽣推⼴传播优势
3)开发成本⽐ App 低 缺点
4)⽤户留存，即⽤即⾛是优势，也存在⼀些问题
5)⼊⼝相对传统 App 要深很多
6)限制较多,⻚⾯⼤⼩不能超过2M。不能打开超过10个层级的⻚⾯
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-bindtap和catchtap的区别是什么" tabindex="-1"><a class="header-anchor" href="#_16-bindtap和catchtap的区别是什么" aria-hidden="true">#</a> 16. bindtap和catchtap的区别是什么?</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>相同点：
    都是⽤来监听⽤户的点击事件。

不同点：
    主要是bindtap是不会阻⽌冒泡事件的，catchtap是阻值冒泡。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-什么是小程序云开发" tabindex="-1"><a class="header-anchor" href="#_17-什么是小程序云开发" aria-hidden="true">#</a> 17. 什么是⼩程序云开发？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1)微信云开发是微信团队联合腾讯云推出的专业的⼩程序开发服务。
2)开发者可以使⽤云开发快速开发⼩程序、⼩游戏、公众号⽹⻚等，并且原⽣打通微信开放能⼒。
3)开发者⽆需搭建服务器，可免鉴权直接使⽤平台提供的 API 进⾏业务开发。
4)⼩程序云开的三⼤核⼼:1)云数据库  2)云存储  3)云函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-小程序云的优势有哪些" tabindex="-1"><a class="header-anchor" href="#_18-小程序云的优势有哪些" aria-hidden="true">#</a> 18. ⼩程序云的优势有哪些？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⽆需搭建服务器，可快速构建⼩程序、公众号
    1)⽆需搭建服务器，只需使⽤平台提供的各项能⼒，即可快速开发业务。

免登录、免鉴权调⽤微信开放服务
    1)⽆需管理证书、签名、秘钥，直接调⽤微信 API 。复⽤微信私有协议及链路，保证业务安全性。

统⼀开发多端应⽤
    1)⽀持环境共享，⼀个后端环境可开发多个⼩程序、公众号、⽹⻚等，便捷复⽤业务代码与数据。

按量计费，成本更低
    1)⽀持按量计费模式，后端资源根据业务流量⾃动扩容，先使⽤后付费，⽆需⽀付闲置成本。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_19-小程序云开发有哪些核心概念" tabindex="-1"><a class="header-anchor" href="#_19-小程序云开发有哪些核心概念" aria-hidden="true">#</a> 19. ⼩程序云开发有哪些核⼼概念？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>数据库:
    1)云开发提供了⼀个 JSON 数据库，顾名思义，数据库中的每条记录都是⼀个 JSON 格式的对象。⼀个数据库可以有多个集合（相当于关系型数据中的表），集合可看做⼀个 JSON 数组，数组中的每个对象就是⼀条记录，记录的格式是 JSON 对象。

存储管理:
    1)云开发提供了⼀块存储空间，提供了上传⽂件到云端、带权限管理的云端下载能⼒，开发者可以在⼩程序端和云函数端通过 API 使⽤云存储功能。
    2)在⼩程序端可以分别调⽤ wx.cloud.uploadFile 和 wx.cloud.downloadFile 完成上传和下载云⽂件操作。

云函数:
    1)云函数是⼀段运⾏在云端的代码，⽆需管理服务器，在开发⼯具内编写、⼀键上传部署即可运⾏后端代码。
    2)⼩程序内提供了专⻔⽤于云函数调⽤的 API。开发者可以在云函数内使⽤ wx-server-sdk 提供的getWXContext ⽅法获取到每次调⽤的上下⽂（ appid、 openid 等），⽆需维护复杂的鉴权机制，即可获取天然可信任的⽤户登录态（ openid）。

云调⽤:
    1)云调⽤是云开发提供的基于云函数使⽤⼩程序开放接⼝的能⼒，⽀持在云函数调⽤服务端开放接⼝，如发送模板消息、获取⼩程序码等操作都可以在云函数中完成

资源环境:
    1)⼀个环境对应⼀整套独⽴的云开发资源，包括数据库、存储空间、云函数等资源。各个环境是相互独⽴的，⽤户开通云开发后即创建了⼀个环境，默认可拥有最多两个环境。在实际开发中，建议每⼀个正式环境都搭配⼀个测试环境，所有功能先在测试环境测试完毕后再上到正式环境。以初始可创建的两个环境为例，建议⼀个创建为 test 测试环境，⼀个创建为 release 正式环境。

HTTP API:
    云开发资源也可以通过 HTTP 接⼝访问，即在⼩程序外访问，接⼝⻅HTTP API ⽂档。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_20-小程序云和传统开发的区别" tabindex="-1"><a class="header-anchor" href="#_20-小程序云和传统开发的区别" aria-hidden="true">#</a> 20. ⼩程序云和传统开发的区别？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>⼩程序云开发：
    ⾼效开发
        只需编写核⼼逻辑代码，内建⼩程序⽤户鉴权，⽆需关注后端配置与部署，专注于业务开发。
    节约成本
        按请求数和资源的运⾏收费，极⼤节约时间和成本，提供⼀定量免费额度使⽤。
    官⽅⽣态
        原⽣集成微信SDK，内置在⼩程序IDE，云相关API开箱即⽤，⼀站式操作。
    稳定可靠
        底层资源由腾讯云提供专业⽀持，满⾜不同业务场景和需求，具备快速拓展能⼒，确保服务稳定，数据安全。

传统的开发：
    开发效率低
        过多的⾮业务逻辑需要处理，导致开发效率难以提升。
    资源投⼊⾼
        ⽆论是物理机托管，还是云主机维护，都需要较多的⼈⼒物⼒投⼊。
    产品上线慢
        前后端联调、资源存储、部署等操作繁杂，上线流程耗时⻓。
    ⽇常运维难
        需时刻关注环境运⾏状况，管理相关资源，运维难度⼤。

传统的开发模式需要有专⻔的后端提供接⼝，对于接⼝的维护成本是⽐较⾼的，除了购买相应的云服务器以外还要安装数据库，存储数据，还要存储资源，还要做很多的其他内容，⽐如负载均衡，⾼并发，备份容灾，安全服务，弹性伸缩等等，对于前端⼯程师来说是⼀个⾮常庞⼤的系统，最重要的还需要使⽤后端语⾔，⽐如java、python、nodejs等，学习成本很⾼。但是云开发，我们前端程序员只需要调⽤相应的SDK即可，除此之外还需要学习那三⼤核⼼，但是与传统的开发模式相⽐，学习成本低了很多很多，⽽且还不⽤考虑负载均衡，备份容灾等问题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_21-云开发如何初始化-默认初始化做了什么" tabindex="-1"><a class="header-anchor" href="#_21-云开发如何初始化-默认初始化做了什么" aria-hidden="true">#</a> 21. 云开发如何初始化？默认初始化做了什么？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在⼩程序端使⽤云能⼒前，需先调⽤ wx.cloud.init ⽅法完成云能⼒初始化
env 参数：
    1)决定接下来⼩程序发起的云开发调⽤（wx.cloud.xxx）会默认请求到哪个云环境的资源
    2)此处请填⼊环境 ID, 环境 ID 可打开云控制台查看
    3)如不填则使⽤默认环境（第⼀个创建的环境）
traceUser：是否将⽤户的访问记录放到⽤户管理中，在控制台中可⻅，默认值为false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_22-什么是查询指令-查询指令有什么作用" tabindex="-1"><a class="header-anchor" href="#_22-什么是查询指令-查询指令有什么作用" aria-hidden="true">#</a> 22. 什么是查询指令？查询指令有什么作⽤？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>假如我们要查询年龄⼤于3的待办事项，全等是⽆法⽤上的，只能⽤查询指令

查询指令均均暴露在db.command 对象上
    eq：等于
    neq：不等于
    lt：⼩于
    lte：⼩于等于
    gt：⼤于
    gte：⼤于等于
    in：字段值在给定的数组内nin：字段值不在给定的数组内
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46),l=[s];function r(v,c){return n(),i("div",null,l)}const u=e(d,[["render",r],["__file","xiaochengxubaguwen.html.vue"]]);export{u as default};

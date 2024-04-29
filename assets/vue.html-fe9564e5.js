import{_ as n,p as d,q as a,s as e,R as s,H as l,Y as i}from"./framework-aa5c4115.js";const r={},v=i(`<h3 id="_1-你怎么理解指令-工作中你封装过自定义指令吗-举一些例子" tabindex="-1"><a class="header-anchor" href="#_1-你怎么理解指令-工作中你封装过自定义指令吗-举一些例子" aria-hidden="true">#</a> 1. 你怎么理解指令？工作中你封装过自定义指令吗？举一些例子</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>指令本质上是对dom的操作，vue封装这些指令就是为了我们更为合理符合规范的操作dom，避免DOM滥操作。我们也可以自定义指令，自定义指令也是对DOM操作的封装，我之前工作中封装过一些自定义指令，如：xxxx推荐8个常用指令（项目经验）：
https://zhuanlan.zhihu.com/p/337659611 ：
https://juejin.cn/post/6906028995133833230：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-计算属性能不能绑定在v-model上" tabindex="-1"><a class="header-anchor" href="#_2-计算属性能不能绑定在v-model上" aria-hidden="true">#</a> 2. 计算属性能不能绑定在v-model上？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>计算属性可以有setter，所以可以使用在v-model上面。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-侦听器能监听哪些变量变化" tabindex="-1"><a class="header-anchor" href="#_3-侦听器能监听哪些变量变化" aria-hidden="true">#</a> 3. 侦听器能监听哪些变量变化？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>能够监听data、计算属性、vuex数据、$route等，凡是那些带有__ob__变量都能被监听到。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-说一下vue的响应式原理-你是如何理解mvvm的" tabindex="-1"><a class="header-anchor" href="#_4-说一下vue的响应式原理-你是如何理解mvvm的" aria-hidden="true">#</a> 4. 说一下Vue的响应式原理？(你是如何理解MVVM的)</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>回答版本一：
	当vue组件被创建时，在生命周期的第一阶段，Vue使用Object.defineProperty()对data选项进行遍历劫持并添加get/set钩子；在生命周期第二阶段，指令第一次与声明式变量touch时，发生依赖收集，再调用当前组件的watcher第一次更新DOM，DOM视图就显示出来了。当声明式变量发生变化时，vue再次通知Watcher更新视图，这就是响应式（原理）
	
回答版本二：
	当new Vue时，Vue源码中有一个Observer，会对data中所有的数据进行劫持，把data中的数据处理成响应式，每处理一个响应式数据，都有一个Dep与之对应。同时编译模板，编译模板时会找到小胡子语法和指令，处理小胡子语法和指令时，会创建出一个个的Watcher，这些Watcher会存储到对应的Dep中，这个过程叫依赖收集，同时调用对应的Updater，完成对应的页面的初始化。当数据发生变化时，在Observer的setter中会监听到，数据变化，就通知Dep中的Watcher更新视图，每个Watcher都绑定了更新视图的回调函数。
	
Vue官⽅其实有说明，Vue虽然并没有完全遵守MVVM的模型，但是整个设计是受到它的启发的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-你工作中有没有封装比较好的组件" tabindex="-1"><a class="header-anchor" href="#_5-你工作中有没有封装比较好的组件" aria-hidden="true">#</a> 5. 你工作中有没有封装比较好的组件？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>面试之前，需要封装几个组件，真实开发中，不会自己封装，都是用第三方封装好的，或公司自己的组件库。

尝试封装过模态框组件，表单组件，表格组件，面试之前，需要找对应的代码看一看。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-说一下vue的生命周期-展开说-不仅仅是那几个钩子" tabindex="-1"><a class="header-anchor" href="#_6-说一下vue的生命周期-展开说-不仅仅是那几个钩子" aria-hidden="true">#</a> 6. 说一下Vue的生命周期（展开说，不仅仅是那几个钩子）？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Vue的生命周期指的是组件从“生”到“死”的全过程，一共分四个阶段，不同阶段有不同的钩子函数：
* 创建阶段：beforeCreate、created
* 挂载阶段：beforeMount、mounted
* 更新阶段：beforeUpdate、updated
* 销毁阶段：beforeDestroy、destroyed
* 与动态组件有关的两个特殊的钩：activated(激活)、deactivated(休眠)
* 与组件异常捕获有关的一个钩子：errorCaptured

在beforeCreate之前会声明methods中的方法和声明生命周期钩子函数，这个钩子函数我们用的并不多

在created之前会注入一些数据，初始化响应式系统，我们通常在这个钩子函数中调接口，获取路由参数等

在beforeMount之前会通过el $meount template找模板，会把模块变成render函数  调用render函数创建虚拟DOM，虚拟DOM转化成真实DOM，进行挂载，通常这个钩子函数我们也用不到

在mounted时，已表示真实DOM已挂载完毕，我们在这个钩子中通常调接口，开定时器，DOM操作，建立websocket连接  实例化echarts实例等。

当数据变化时，会触发beforeUpdate钩子，这个钩子通常也用不到。

在updated之前，要生成新的虚拟DOM，新的虚拟DOM和老的虚拟DOM进行对比，会执行patch运算，diff算法，找到两个虚拟DOM的最小差异，找到后，进行异步更新，key的目的就是最快找到最小差异，这个钩子也不常用，但是有点类似于watch侦听器或类似于$nextTick()，我们不能在这个钩子中更新数据，会导致死循环。

当我们手动调用$destory()或路由切换时，会调用beforeDestroy这个钩子函数，我们可以在这个钩子函数中清空定时器，解除事件绑定，清除缓存...

当组件销毁时，就会移除当前组件的watcher，DOM就无法再更新，移除所有子组件，移除事件监听器，响应式系统就会失效，组件就死亡了，这个钩子函数我们用的也不多。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-虚拟dom存在的价值点在哪里" tabindex="-1"><a class="header-anchor" href="#_7-虚拟dom存在的价值点在哪里" aria-hidden="true">#</a> 7. 虚拟DOM存在的价值点在哪里？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>把DOM更新粒度降到最低，规避人为DOM滥操作，提升性能。配合DIFF算法，可以让页面性能有质的提升。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-vue有哪些内置组件-vue中实现条件渲染渲染有哪些办法" tabindex="-1"><a class="header-anchor" href="#_8-vue有哪些内置组件-vue中实现条件渲染渲染有哪些办法" aria-hidden="true">#</a> 8. Vue有哪些内置组件？Vue中实现条件渲染渲染有哪些办法？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>五个内置组件(slot,transition,component,keep-alive)

条件渲染: v-if v-show 动态组件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-你有封装过vue插件-怎么封装的-封装过什么" tabindex="-1"><a class="header-anchor" href="#_9-你有封装过vue插件-怎么封装的-封装过什么" aria-hidden="true">#</a> 9. 你有封装过Vue插件？怎么封装的？封装过什么？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>在Vue生态中，除了Vue本身，其它所有与Vue相关的第三方包，都是插件，都得以插件的方式进行集成。
作用：是一种更加高级的代码复用技术，可以以插件的方式为我们提供可复用的组件、混入、指令、过滤器、原型链API。

两种写法：
第一种写法： const Plugin = { install (Vue) { } }
第二种写法： const Plugin = function (Vue) {}

在项目中我之前二次封装axios，把它封装成一个插件，参考：
https://juejin.cn/post/6844903599764406280

封装右键菜单插件：
https://juejin.cn/post/6906788973981466637
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-谈一谈你对-vue-nexttick-的理解-有什么用" tabindex="-1"><a class="header-anchor" href="#_10-谈一谈你对-vue-nexttick-的理解-有什么用" aria-hidden="true">#</a> 10. 谈一谈你对 Vue.nextTick() 的理解？有什么用？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>数据变化，进行set操作，代码确实是同步的，但是set行为是异步的；set操作修改声明变量，触发re-render生成新的虚拟DOM，进一步执行diff运算，找到脏节点集合，交给Vue背后的更新队列去执行循环更新。在更新队列中每一个更新任务都是一个更新单元，nextTick表示下一个更新单元（更新周期）。

我们set操作data（更新DOM），你希望访问这个DOM的最新状态时，使用this.$nextTick(handler)。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-谈一谈vue中组件通信" tabindex="-1"><a class="header-anchor" href="#_11-谈一谈vue中组件通信" aria-hidden="true">#</a> 11. 谈一谈Vue中组件通信？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>1)父子组件通信：父传子使用自定义属性（props），子传父使用自定义事件（$emit()）。

2)状态提升：当兄弟组件之间需要共享数据时，我们通常的做法是把这个数据定义它们的共同的父组件中，再通过自定义属性实现数据共享。

3)provide/inject：这是在组件树中，自上而下的一种数据通信方案，也就是说只能父级组件中向后代组件传递。需要注意的是，当provide提供动态数据（声明式变量）时，动态数据发生变化，后代组件们不会自动更新。这是为什么呢？你自己从生命周期流程的角度去思考。

4)ref通信：ref是Vue内置的一个属性，每一个HTML元素或组件都有这个属性；ref作用在HTML元素上得到DOM实例，ref作用在组件上得到组件实例。使用ref访问组件实例，进一步可以访问组件中的数据和方法。（说明：ref是一种快速的DOM的访问方式，当然ref也可作用在组件上得到组件实例。这些ref得到的DOM实例或组件实例，使用this.$refs来访问它们。ref尽量少用，除非某些难搞的需求。）

5)插槽通信：借助&amp;lt;slot&gt;组件实现从子组件向父组件传递数据，借助this.$slots访问父组件中的插槽实例。(在自定义组件中使用this.$slots访问父组件给的插槽实例；在父组件插槽中使用#default=&#39;scoped&#39;访问子组件&amp;lt;slot&gt;回传的数据。这种通信在组件库中、工作中，非常常见！)

6)$parent/$children：借助$parent/$children可以实现，在任一组件中访问组件树中的其它任意组件实例，可以做到在组件中随意穿梭。($parent表示的是当前组件的父组件实例，$children表示的是当前组件的子组件们。)

7)$attrs/$listeners：借助$attrs可访问父组件传递过来的自定义属性（除了class和style外），借助$listenrs可以访问父组件给的自定义事件。在某些场景下，$attrs/$listeners可以替代props/$emit()这种通用的通信方案。

8)事件总线：借助于Vue内置的事件系统（$on/$emit/$off/$once）实现“订阅-发布”式的通信，这种通信方式是一种与组件层级无关的“一对多”的通信。（工作中很少用，一些特殊的Vue项目才用得到事件总线。）

9)Vuex通信：这是Vue架构中终极的通信方案，也是Vue架构中用的最多的一种通信方案。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-vue中逻辑复用技巧有哪些" tabindex="-1"><a class="header-anchor" href="#_12-vue中逻辑复用技巧有哪些" aria-hidden="true">#</a> 12. Vue中逻辑复用技巧有哪些？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>组件：复用UI+逻辑
混入
自定义指令
渲染函数&amp;JSX
插件
过滤器
V3中的自定义hook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-你项目的鉴权怎么做的-你这个管理系统的权限怎么设计的" tabindex="-1"><a class="header-anchor" href="#_13-你项目的鉴权怎么做的-你这个管理系统的权限怎么设计的" aria-hidden="true">#</a> 13. 你项目的鉴权怎么做的？你这个管理系统的权限怎么设计的？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>我们之前的公司中小公司，做的项目，大概有30个左右的模块，所以权限这一块，就前端去处理的。我们处理的流程大致是这样的：前端登录换取token，在导航守卫中，实现权限设计，首先判断有没有token，没有token，直接跳到登录页面。有token会进一步判断vuex中有没有用户信息。如果没有用户信息，拿着token，调用接口获取用户信息，用户信息中保存了最重要的字段，就是角色，有了角色后，通过算法生成当前用户可访问的动态路由规则（算法大至是使用后端返回的角色和路由元信息中的角色进行对比，得到可以访问的动态路由规则），有了动态访问的路由规则，再通过addRoutes方法，把得到的动态访问的路由规则添加到路由系统。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_14-简述vuex的工作流程" tabindex="-1"><a class="header-anchor" href="#_14-简述vuex的工作流程" aria-hidden="true">#</a> 14. 简述Vuex的工作流程？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>背官方的图

5大概念，4个map，3个原则。

5大概念：
创建store时要用的五个概念（state/getters/mutations/actions/modules）
- state: {} 用于定义可被组件共享数据，是具有响应式的；在组件中使用this.$store.state来访问它们。
- getters: {fn} 用于计算state，相当于Vue的计算属性，当state发生变化时getters方法自动自动重新计算；在组件中使用this.$store.getters来访问它们。
- mutations: {fn} 专门用于修改state的，所以mutations方法是这样fn(state,payload)定义的；mutations方法在actions中或组件中使用，使用$store.commit(&#39;mutations方法&#39;,payload)
- actions: {fn} 专门用于调接口的，所以actions方法是这样fn(store,payload)定义的；在组件中使用this.$store.dispatch(&#39;actions方法&#39;, payload)。
- modules: {子store} 是一个Vuex架构层面的概念，用于拆分子store。大家在拆分子store务必在子store中使用namespaced:true开启命名空间。

4个map:
mapState/mapGetters，必须写在computed计算属性中，用于访问state/getters数据。映射进来后，就可以用this来访问这些数据了。
mapActions/mapMutations 必须写在methods选项中，用于访问mutations/actions方法。映射进来后，可以用this调用这些方法。
它们的语法是相同的：map*(&#39;命名空间&#39;, [&#39;k1&#39;, &#39;k2&#39;])

3个原则：
原则1：只要使用Vuex一定要拆分store，拆分store后在根store上不要再使用state/mutations/actions。
原则2：在子store务必开启命名空间namespaced:true。
原则3：在组件中尽可能不要使用$store，建议使用四个map*方法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-说说你对-spa-单⻚面的理解-它的优缺点分别是什么" tabindex="-1"><a class="header-anchor" href="#_15-说说你对-spa-单⻚面的理解-它的优缺点分别是什么" aria-hidden="true">#</a> 15. 说说你对 SPA 单⻚⾯的理解，它的优缺点分别是什么？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>SPA（ single-page application ）仅在 Web ⻚⾯初始化时加载相应的 HTML、JavaScript 和 CSS。⼀旦
⻚⾯加载完成，SPA 不会因为⽤户的操作⽽进⾏⻚⾯的重新加载或跳转；取⽽代之的是利⽤路由机制实现 HTML 内容的变换，UI 与⽤户的交互，避免⻚⾯的重新加载。

优点：
1)⽤户体验好、快，内容的改变不需要重新加载整个⻚⾯，避免了不必要的跳转和重复渲染；
2)基于上⾯⼀点，SPA 相对对服务器压⼒⼩；
3)前后端职责分离，架构清晰，前端进⾏交互逻辑，后端负责数据处理；

缺点：
1)初次加载耗时多：为实现单⻚ Web 应⽤功能及显示效果，需要在加载⻚⾯的时候将 JavaScript、CSS 统⼀加载，部分⻚⾯按需加载；
2)前进后退路由管理：由于单⻚应⽤在⼀个⻚⾯中显示所有的内容，所以不能使⽤浏览器的前进后退功能，所有的⻚⾯切换需要⾃⼰建⽴堆栈管理；
3)SEO 难度较⼤：由于所有的内容都在⼀个⻚⾯中动态替换显示，所以在 SEO 上其有着天然的弱势。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-v-show-与-v-if-有什么区别" tabindex="-1"><a class="header-anchor" href="#_16-v-show-与-v-if-有什么区别" aria-hidden="true">#</a> 16.v-show 与 v-if 有什么区别？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>⽤法上的区别：
1)v-show是不⽀持template；
2)v-show不可以和v-else⼀起使⽤；

本质的区别：
1)v-show元素⽆论是否需要显示到浏览器上，它的DOM实际都是有存在的，只是通过CSS的display属性来进⾏切换；
2)v-if当条件为false时，其对应的原⽣压根不会被渲染到DOM中；

开发中如何进⾏选择呢？
1)如果我们的原⽣需要在显示和隐藏之间频繁的切换，那么使⽤v-show；
2)如果不会频繁的发⽣切换，那么使⽤v-if；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-数组中的哪些方法会触发视图的更新" tabindex="-1"><a class="header-anchor" href="#_17-数组中的哪些方法会触发视图的更新" aria-hidden="true">#</a> 17. 数组中的哪些⽅法会触发视图的更新？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Vue 将被侦听的数组的变更⽅法进⾏了包裹，所以它们也将会触发视图更新，这些被包裹过的⽅法包括：
1)push()
2)pop()
3)shift()
4)unshift()
5)splice()
6)sort()
7)reverse()

上⾯的⽅法会直接修改原来的数组，所以它们会触发视图更新。但是某些⽅法不会替换原来的数组，⽽是会⽣成新的数组，⽐如 ﬁlter()、concat() 和 slice()，使⽤这些⽅法将不会触发视图更新。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-vue中v-for的key-有什么作用" tabindex="-1"><a class="header-anchor" href="#_18-vue中v-for的key-有什么作用" aria-hidden="true">#</a> 18. Vue中v-for的key 有什么作⽤？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>在使⽤v-for进⾏列表渲染时，我们通常会给元素或者组件绑定⼀个key属性。这个key属性有什么作⽤呢？
1)key属性主要⽤在Vue的虚拟DOM算法，在新旧nodes对⽐时辨识VNodes。
2)如果不使⽤key，Vue会使⽤⼀种最⼤限度减少动态元素并且尽可能的尝试就地修改/复⽤相同类型元素的算法
3)使⽤key时，它会基于key的变化重新排列元素顺序，并且会移除/销毁key不存在的元素。

key 是 VNode 的唯⼀标记，通过这个 key， diﬀ 操作可以更准确、更快速的达到复⽤节点，更新视图的⽬的。复⽤节点就需要通过移动元素的位置来达到更新的⽬的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_19-computed和method有什么区别" tabindex="-1"><a class="header-anchor" href="#_19-computed和method有什么区别" aria-hidden="true">#</a> 19.computed和method有什么区别？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>计算属性和⽅法：
1)都可以通过this来访问
2)都可以对⼀些数据进⾏处理和计算
3)对于包含响应式数据计算的逻辑，应该使⽤计算属性，因为计算属性是有缓存。

computed和method的区别
1)computed底层会缓存, 性能更⾼
2)计算属性会基于它们的依赖关系进⾏缓存;
3)在数据不发⽣变化时，计算属性是不需要重新计算的
4)但是如果依赖的数据发⽣变化，在使⽤时，计算属性依然会重新进⾏计算
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_20-什么是双向绑定-v-model的本质是什么" tabindex="-1"><a class="header-anchor" href="#_20-什么是双向绑定-v-model的本质是什么" aria-hidden="true">#</a> 20. 什么是双向绑定？v-model的本质是什么？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>双向绑定:
1)即当数据发⽣变化的时候，视图也就发⽣变化，当视图发⽣变化的时候，数据也会跟着同步变化
2)v-model 是语法糖，它负责监听⽤户在表单元素中的输⼊事件来更新数据

表单元素使⽤v-model的本质：
1)v-bind绑定value属性的值
2)v-on绑定input事件监听到函数,函数会获取最新的值赋值到绑定的属性中
&lt;input type=&quot;text&quot; :value=&quot;message&quot; @input=&quot;message = $event.target.value&quot; /&gt;

组件使⽤v-model的本质：
1)将其 value attribute 绑定到⼀个名叫 modelValue 的 prop 上；
2)在其 input 事件被触发时，将新的值通过⾃定义的 update:modelValue 事件抛出(发出)；
&lt;Counter v-model=&quot;appCounter&quot;/&gt;  &lt;!-- 相当于--&gt;
&lt;Counter v-bind:modelValue=&quot;appCounter&quot; @update:modelValue=&quot;appCounter=$event&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_21-data选项为什么是一个函数而不是对象" tabindex="-1"><a class="header-anchor" href="#_21-data选项为什么是一个函数而不是对象" aria-hidden="true">#</a> 21.data选项为什么是⼀个函数⽽不是对象？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>JavaScript中的对象是引⽤类型的数据，当多个实例引⽤同⼀个对象时，只要⼀个实例对这个对象进⾏操作，其他实例中的数据也会发⽣变化。

⽽在Vue中，我们更多的是想要复⽤组件，那就需要每个组件都有⾃⼰的数据，这样组件之间才不会相互⼲扰。
所以组件的数据不能写成对象的形式，⽽是要写成函数的形式。数据以函数返回值的形式定义。

这样当我们每次复⽤组件的时候，就会返回⼀个新的data，也就是说每个组件都有⾃⼰的私有数据空间，它们各⾃维护⾃⼰的数据，不会⼲扰其他组件的正常运⾏。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_22-vue-data-中某一个属性的值发生改变后-视图会立即同步执行、重新渲染吗" tabindex="-1"><a class="header-anchor" href="#_22-vue-data-中某一个属性的值发生改变后-视图会立即同步执行、重新渲染吗" aria-hidden="true">#</a> 22. Vue data 中某⼀个属性的值发⽣改变后，视图会⽴即同步执⾏、重新渲染吗？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>不会⽴即同步执⾏重新渲染。

Vue 实现响应式并不是数据发⽣变化之后 DOM ⽴即变化，⽽是按⼀定的策略进⾏ DOM 的更新。

Vue 在更新 DOM 时是异步执⾏的。只要侦听到数据变化， Vue 将开启⼀个队列，并缓冲在同⼀事件循环中发⽣的所有数据变更。

如果同⼀个watcher被多次触发，只会被推⼊到队列中⼀次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是⾮常重要的。

然后，在下⼀个的事件循环”tick”中，Vue 刷新队列并执⾏实际（已去重的）⼯作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_23-在-vue-js开发环境下调用api接口-如何避免跨域" tabindex="-1"><a class="header-anchor" href="#_23-在-vue-js开发环境下调用api接口-如何避免跨域" aria-hidden="true">#</a> 23. 在 Vue. js开发环境下调⽤API接⼝，如何避免跨域</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>1)在vue.conﬁg.js中的devServer选项中的proxy中配置反向代理
2)在vite.conﬁg.js中的server选项中的proxy中配置反向代理
3)直接后端开发⼈员配置cors
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_24-v-if和v-for一起使用的弊端及解决办法" tabindex="-1"><a class="header-anchor" href="#_24-v-if和v-for一起使用的弊端及解决办法" aria-hidden="true">#</a> 24.v-if和v-for⼀起使⽤的弊端及解决办法</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Vue.js 中使⽤最多的两个指令就是 v-if 和 v-for ，因此开发者们可能会想要同时使⽤它们。虽然不建议这样做，但有时确实是必须的，于是我们想提供有关其⼯作⽅式的指南。

2.x 版本中在⼀个元素上同时使⽤ v-if 和 v-for 时， v-for 会优先作⽤。
3.x 版本中 v-if 总是优先于 v-for ⽣效。

由于语法上存在歧义，建议避免在同⼀元素上同时使⽤两者。⽐起在模板层⾯管理相关逻辑，更好的办法是通过创建计算属性筛选出列表，并以此创建可⻅元素，⽐如：
1)在v-for的外层或内层包裹⼀个元素（template）来使⽤v-if
2)⽤computed处理筛选出列表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_25-谈谈你对-keep-alive-的了解" tabindex="-1"><a class="header-anchor" href="#_25-谈谈你对-keep-alive-的了解" aria-hidden="true">#</a> 25. 谈谈你对 keep-alive 的了解？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>keep-alive 是 Vue 内置的⼀个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：
1)⼀般结合路由和动态组件⼀起使⽤，⽤于缓存组件。
2)提供 include 和 exclude 属性，两者都⽀持字符串或正则表达式。include 表示只有名称匹配的组件会被缓存。exclude 表示任何名称匹配的组件都不会被缓存。其中 exclude 的优先级⽐ include ⾼。
3)对应两个钩⼦函数 activated 和 deactivated 。当组件被激活时，触发钩⼦函数 activated。当组件被移除时，触发钩⼦函数 deactivated。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_26-什么是侦听器-有什么用" tabindex="-1"><a class="header-anchor" href="#_26-什么是侦听器-有什么用" aria-hidden="true">#</a> 26. 什么是侦听器？有什么用？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>作用：用于监听一个变量的变化，然后去做另一件事儿。

特点：当侦听器监听引用数据类型时，默认只能监听引用数据类型的第一层。为什么要这样？监听深度越深，Vue在背后要做的事儿越多，这是一种性能损耗，所以一般不要对一个引用类型的变量进行深度监听。

如何监听引用数据类型的每一层（深度监听）？侦听器语法这样写  info: { deep: true, handler() {} }为了避免deep:true深度监听导致性能损耗，我们推荐这种写 &#39;info.child.age&#39; () {}

在Vue中，侦听器能够监听哪些性质的变量变化呢？能够监听data、计算属性、vuex数据、$route等，凡是那些带有__ob__变量都能被监听到。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_27-侦听器能不能监听数组-对象的变化" tabindex="-1"><a class="header-anchor" href="#_27-侦听器能不能监听数组-对象的变化" aria-hidden="true">#</a> 27. 侦听器能不能监听数组/对象的变化？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>可以，但默认为了性能考虑，不监听深层,如果需要深层侦听，需要配置deep:true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_28-如何监听一个对象中的某个属性变化" tabindex="-1"><a class="header-anchor" href="#_28-如何监听一个对象中的某个属性变化" aria-hidden="true">#</a> 28. 如何监听一个对象中的某个属性变化？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>deep:true, 推荐 &#39;obj.key&#39; 这种监听写法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_29-侦听器为什么默认不支持深度监听" tabindex="-1"><a class="header-anchor" href="#_29-侦听器为什么默认不支持深度监听" aria-hidden="true">#</a> 29. 侦听器为什么默认不支持深度监听？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>性能优化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_30-什么是组件化-你怎么理解组件化" tabindex="-1"><a class="header-anchor" href="#_30-什么是组件化-你怎么理解组件化" aria-hidden="true">#</a> 30. 什么是组件化？你怎么理解组件化？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>现在主流的开发框，都是基于组件化的，组件的作用就是为了实现UI和逻辑的复用，在vue组件中，提供了很多的选项，如data,computed,watch,method,components,filter... 可以方便我们实现业务逻辑，组件化的好处就是可以复用UI和逻辑，在业务开发中，一般都会合理的划分组件，在vue中组件化的核心就是自定义属性，自定义事件，自定义插槽。
组件与组件通信常见的有8种方案，比如：... 展开讲   如果看过源码，可以从源码角度分析组件的实现过程。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_31-你工作中有没有封装比较好的组件" tabindex="-1"><a class="header-anchor" href="#_31-你工作中有没有封装比较好的组件" aria-hidden="true">#</a> 31. 你工作中有没有封装比较好的组件？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>面试之前，需要封装几个组件，真实开发中，不会自己封装，都是用第三方封装好的，或公司自己的组件库。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_32-说说vue插槽的作用和平时开发中的应用" tabindex="-1"><a class="header-anchor" href="#_32-说说vue插槽的作用和平时开发中的应用" aria-hidden="true">#</a> 32. 说说Vue插槽的作⽤和平时开发中的应⽤？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>插槽的作⽤:
1）⽀持在⽗组件⾃定义⼦组件中的个内容
2）让⼦组件更具有通⽤性，不必限定死某个内容

插槽平时开发中的应⽤:
1）在封装组件时，如果组件中的某个内容是动态的或不确定的，就可以使⽤插槽来代替了。
2）在使⽤第三⽅库时，往往会通过使⽤插槽类⾃定义第三⽅组件中的某些内容。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_33-父子组件的生命周期顺序" tabindex="-1"><a class="header-anchor" href="#_33-父子组件的生命周期顺序" aria-hidden="true">#</a> 33.⽗⼦组件的⽣命周期顺序</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>加载渲染过程： ⽗beforeCreate -&gt; ⽗created -&gt; ⽗beforeMount -&gt; ⼦beforeCreate -&gt; ⼦created -&gt; ⼦beforeMount -&gt;⼦mounted -&gt; ⽗mounted

⼦组件更新过程：⽗beforeUpdate -&gt; ⼦beforeUpdate -&gt; ⼦updated -&gt; ⽗updated

⽗组件更新过程：⽗beforeUpdate -&gt; ⽗updated

销毁过程：⽗beforeDestroy -&gt; ⼦beforeDestroy -&gt; ⼦destroyed -&gt; ⽗destroyed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_34-什么是composition-api-和-options-api" tabindex="-1"><a class="header-anchor" href="#_34-什么是composition-api-和-options-api" aria-hidden="true">#</a> 34. 什么是Composition API 和 Options API？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Composition API 是⼀组 API，允许我们使⽤导⼊的函数⽽不是声明选项来编写 Vue 组件。它是⼀个涵盖以下 API 的总称：Reactivity API、Lifecycle Hooks、Dependency Injection等等

使⽤Composition API编写组件时可以根据逻辑功能来组织代码。⽐如可以把⼀个功能所⽤到的API 放在⼀起，这样可以让代码⾼内聚和低耦合，进⽽提⾼了代码的逻辑的复⽤性。

在 Vue 3 中，它也主要与script setup语法⼀起使⽤。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Options API是指在对应的属性中编写对应的功能模块, ⽐如data定义数据、methods中定义⽅法、computed中定
义计算属性、watch中监听属性改变，也包括⽣命周期钩⼦

弊端: 当我们实现某⼀个功能时，这个功能对应的代码逻辑会被拆分到各个属性中,当组件变得复杂，导致对应属性的列表也会增⻓，这可能会导致组件难以阅读和理解
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_35-composition-api和之options-api有什么区别" tabindex="-1"><a class="header-anchor" href="#_35-composition-api和之options-api有什么区别" aria-hidden="true">#</a> 35. Composition API和之Options API有什么区别?</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>1）在逻辑组织和逻辑复⽤⽅⾯，Composition API是优于Options API。
2）Composition API⼏乎是函数，会有更好的类型推断，对于TS的⽀持更友好。
3）Composition API对 tree-shaking 友好，代码也更容易压缩。
4）Composition API中⻅不到this的使⽤，减少了this指向不明的情况。
5）Composition API⽤起来稍微复杂⼀点，⽽Options API就⾮常简单、易于使⽤。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_36-说说vue3中setup函数的作用" tabindex="-1"><a class="header-anchor" href="#_36-说说vue3中setup函数的作用" aria-hidden="true">#</a> 36. 说说Vue3中setup函数的作⽤？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>在Vue3中， setup() 函数充当了组件编写Composition API 的⼊⼝点。setup函数参数主要有两个参数：
1）第⼀个参数：props , ⽗组件传递过来的属性会被放到props对象中
2）第⼆个参数：context, 它⾥⾯包含三个属性：attrs：所有的⾮prop的attribute；slots：⽗组件传递过来的插槽；emit：当我们组件内部需要发出事件时会⽤到emit（因为我们不能访问this，所以不可以通过 this.$emit发出事件）

可以在setup中可以定义响应式数据、⽅法、计算属性、侦听器等等。
可以通过setup的返回值来替代data选项，让数据可以直接在template中使⽤。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_37-ref和reactive有什么区别-开发中如何选择" tabindex="-1"><a class="header-anchor" href="#_37-ref和reactive有什么区别-开发中如何选择" aria-hidden="true">#</a> 37.ref和reactive有什么区别？开发中如何选择？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>ref和reactive都是响应式的API，都可以⽤来定义响应式的数据。
ref可以包裹任意数据类型，reactive只能包裹复杂数据类型，⽐如对象、数组。

ref返回⼀个ref对象，在script中取值需要通过value属性，但是在模板中使⽤会进⾏解包不需要调⽤value。
reactive包裹的是复杂数据类型，直接取⾥⾯的属性即可。

ref⼏乎可以应⽤在任何场景，⽽且包含reactive适合的场景
reactive的应⽤场景⽐较受限，第⼀：值⽐较固定，第⼆：值与值之间是有联系的。
开发中尽量选择ref
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_38-composition-api常⻅的几个函数与用法" tabindex="-1"><a class="header-anchor" href="#_38-composition-api常⻅的几个函数与用法" aria-hidden="true">#</a> 38. Composition API常⻅的⼏个函数与⽤法？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>ref：包裹任意类型的值，将包裹的值加⼊响应式

reactive：包裹复杂类型的值，将包裹的值加⼊响应式

computed：把⼀些复杂逻辑⽤computed进⾏包裹，如同Options API中的计算属性⼀样，computed会⾃动收集相关依赖，当依赖发⽣变化时，会⾃动进⾏更新

⽣命周期：Vue3中想要在beforeCreate和created中做的事，直接在setup中做即可，Vue3的其他的⽣命周期函数都要在前⾯加⼀个on，然后需要在vue中主动引⼊

watch：
1）watch可以监听单个数据源，也可以监听多个数据源
2）watch是懒执⾏，第⼀次是不会执⾏的，除⾮你为其提供第三个参数中的immediate属性为true
3）watch只有等到监听的数据源发⽣了变化后，才会执⾏第⼆个参数（回调）
4）watch可以获取监听数据源的前后变化的值
5）侦听多个数据源的时候，第⼀个参数是数组类型

watchEﬀect：
1）watchEﬀect会⾃动收集依赖，收集的依赖是第⼀个参数，也就是回调函数中有哪些东⻄是加⼊响应式的
2）如果这个值加⼊了响应式就会被收集起来，当被收集的值发⽣了变化，就会重新执⾏这个回调函数
3）watchEﬀect第⼀次执⾏是在DOM挂载前执⾏的，所以如果你想在第⼀次执⾏时拿到DOM元素
4）需要传⼊第⼆个参数，第⼆个参数是⼀个对象，让其ﬂush属性的值为post即可

toRefs：
1）对reactive进⾏解构后就失去了响应式的效果，因为reactive返回的是⼀个Proxy对象
2）对Proxy对象进⾏解构，拿到的是纯净的值，所以没有了响应式的效果
3）如果想要对reactive进⾏解构，需要对其包裹⼀个toRefs
4）这么做相当于为reactive中的每⼀个值包裹了⼀个ref
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_39-vue3中的watch和watcheffect有什么区别" tabindex="-1"><a class="header-anchor" href="#_39-vue3中的watch和watcheffect有什么区别" aria-hidden="true">#</a> 39. Vue3中的watch和watchEﬀect有什么区别？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>watch和watchEﬀect都⽤⽤来侦听响应式数据的变化，watch可以侦听指定的源，默认第⼀次不会执⾏，watchEﬀect虽不能指定侦听的源，但是会⾃动收集依赖，并默认会先执⾏⼀次。

watch：
1）watch可以监听单个数据源，也可以监听多个数据源
2）watch是懒执⾏，第⼀次是不会执⾏的，除⾮你为其提供第三个参数中的immediate属性为true
3) watch只有等到监听的数据源发⽣了变化后，才会执⾏第⼆个参数（回调）
4) watch可以获取监听数据源的前后变化的值
5) 侦听多个数据源的时候，第⼀个参数是数组类型

watchEﬀect:
1)watchEﬀect会⾃动收集依赖，收集的依赖是第⼀个参数，也就是回调函数中有哪些东⻄是加⼊响应式的
2)如果这个值加⼊了响应式就会被收集起来，当被收集的值发⽣了变化，就会重新执⾏这个回调函数
3)watchEﬀect第⼀次执⾏是在DOM挂载前执⾏的，所以如果你想在第⼀次执⾏时拿到DOM元素
4)需要传⼊第⼆个参数，第⼆个参数是⼀个对象，让其ﬂush属性的值为post即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_40-说说vue3中script-setup语法糖常⻅用法" tabindex="-1"><a class="header-anchor" href="#_40-说说vue3中script-setup语法糖常⻅用法" aria-hidden="true">#</a> 40. 说说Vue3中script setup语法糖常⻅⽤法？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>script setup 是在单⽂件组件中使⽤ Composition API 的编译时语法糖，相⽐与之前的setup函数写法，它具有更多的优势：
1）更少的样板内容，更简洁的代码。
2）能够使⽤纯 TypeScript 声明 props 和抛出事件。
3）更好的运⾏时性能 (其模板会被编译成与其同⼀作⽤域的渲染函数，没有任何的中间代理)。
4）更好的 IDE 类型推断性能 (减少语⾔服务器从代码中抽离类型的⼯作)。

script setup：
1）当使⽤ script setup 的时候，任何在 script setup 声明的顶层绑定都能在模板中直接使⽤
2）声明的顶层绑定：包括变量，函数声明，以及 import 引⼊的内容
3）响应式数据需要通过ref、reactive来创建
4）在script setup中导⼊的组件可以直接使⽤

deﬁneProps：
1）在script setup语法糖中必须使⽤ deﬁneProps API来声明props，它具备完整的类型推断并且在&lt;script setup&gt; 中是直接可⽤的（不需要额外导⼊）。

deﬁneEmits：
1）在script setup语法糖中必须使⽤ deﬁneEmits API来声明 emits，它具备完整的类型推断并且在&lt;script setup&gt; 中是直接可⽤的（不需要额外导⼊）。

deﬁneExpose：
1）获取组件的实例可以通过ref来获取，接着组件挂载完成后可通过value拿到组件实例。
2）当拿到组件实例后，默认是不可以访问这个实例中的⽅法和属性，因为默认没暴露任何⽅法和属性。
3）因此在Vue3组件中可以⽤deﬁneExpose API来暴露⽅法和属性给外部访问。
4）deﬁneExpose 也是不需要导⼊，直接使⽤即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_41-vue-router路由的两种模式" tabindex="-1"><a class="header-anchor" href="#_41-vue-router路由的两种模式" aria-hidden="true">#</a> 41.vue-router路由的两种模式</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>vue-router中默认使⽤的是hash模式：
1）hash模式，带#。如：http://localhost:8080/#/page。改变hash，浏览器本身不会有任何请求服务器动作。
2）history模式，不带#， 如：&lt;http://localhost:8080/page ，路径没有#。基于HTML5的pushState、replaceState实现。

hash:
1)有 # 号
2)能够兼容到IE8
3)实际的url之前使⽤哈希字符，这部分url不会发送到服务器，不需要在服务器层⾯上进⾏任何处理
4)刷新不会存在 404 问题
5)不需要服务器任何配置

history:
1)没有 # 号
2)只能兼容到IE10
3)每访问⼀个⻚⾯都需要服务器进⾏路由匹配⽣成html ⽂件再发送响应给浏览器，消耗服务器⼤量资源
4)浏览器直接访问嵌套路由时，会报 404 问题。
5)需要在服务器配置⼀个回调路由
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_42-在创建-挂载-更新-销毁阶段-vue在背后分别做了些什么事儿" tabindex="-1"><a class="header-anchor" href="#_42-在创建-挂载-更新-销毁阶段-vue在背后分别做了些什么事儿" aria-hidden="true">#</a> 42. 在创建/挂载/更新/销毁阶段，Vue在背后分别做了些什么事儿？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Vue的生命周期指的是组件从“生”到“死”的全过程，一共分四个阶段，不同阶段有不同的钩子函数：
* 创建阶段：beforeCreate、created
* 挂载阶段：beforeMount、mounted
* 更新阶段：beforeUpdate、updated
* 销毁阶段：beforeDestroy、destroyed
* 与动态组件有关的两个特殊的钩：activated(激活)、deactivated(休眠)
* 与组件异常捕获有关的一个钩子：errorCaptured

在beforeCreate之前会声明methods中的方法和声明生命周期钩子函数，这个钩子函数我们用的并不多

在created之前会注入一些数据，初始化响应式系统，我们通常在这个钩子函数中调接口，获取路由参数等

在beforeMount之前会通过el $meount template找模板，会把模块变成render函数  调用render函数创建虚拟DOM，虚拟DOM转化成真实DOM，进行挂载，通常这个钩子函数我们也用不到

在mounted时，已表示真实DOM已挂载完毕，我们在这个钩子中通常调接口，开定时器，DOM操作，建立websocket连接  实例化echarts实例等。

当数据变化时，会触发beforeUpdate钩子，这个钩子通常也用不到。

在updated之前，要生成新的虚拟DOM，新的虚拟DOM和老的虚拟DOM进行对比，会执行patch运算，diff算法，找到两个虚拟DOM的最小差异，找到后，进行异步更新，key的目的就是最快找到最小差异，这个钩子也不常用，但是有点类似于watch侦听器或类似于$nextTick()，我们不能在这个钩子中更新数据，会导致死循环。

当我们手动调用$destory()或路由切换时，会调用beforeDestroy这个钩子函数，我们可以在这个钩子函数中清空定时器，解除事件绑定，清除缓存...

当组件销毁时，就会移除当前组件的watcher，DOM就无法再更新，移除所有子组件，移除事件监听器，响应式系统就会失效，组件就死亡了，这个钩子函数我们用的也不多。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_43-响应式原理-发生在vue哪些生命周期阶段" tabindex="-1"><a class="header-anchor" href="#_43-响应式原理-发生在vue哪些生命周期阶段" aria-hidden="true">#</a> 43. 响应式原理，发生在Vue哪些生命周期阶段？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>在created之前会注入一些数据，初始化响应式系统，我们通常在这个钩子函数中调接口，获取路由参数等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_44-虚拟dom-在哪些阶段生成的" tabindex="-1"><a class="header-anchor" href="#_44-虚拟dom-在哪些阶段生成的" aria-hidden="true">#</a> 44.虚拟DOM，在哪些阶段生成的？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>在beforeMount之前会通过el $meount template找模板，会把模块变成render函数  调用render函数创建虚拟DOM，虚拟DOM转化成真实DOM，进行挂载，通常这个钩子函数我们也用不到

在updated之前，要生成新的虚拟DOM，新的虚拟DOM和老的虚拟DOM进行对比，会执行patch运算，diff算法，找到两个虚拟DOM的最小差异，找到后，进行异步更新，key的目的就是最快找到最小差异，这个钩子也不常用，但是有点类似于watch侦听器或类似于$nextTick()，我们不能在这个钩子中更新数据，会导致死循环。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_45-哪些生命周期钩子可以执行多次-哪些执行一次" tabindex="-1"><a class="header-anchor" href="#_45-哪些生命周期钩子可以执行多次-哪些执行一次" aria-hidden="true">#</a> 45. 哪些生命周期钩子可以执行多次？哪些执行一次？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>更新阶段：beforeUpdate、updated 
与动态组件有关的两个特殊的钩：activated(激活)、deactivated(休眠)

上面四个钩子函数执行多次。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_46-什么虚拟dom" tabindex="-1"><a class="header-anchor" href="#_46-什么虚拟dom" aria-hidden="true">#</a> 46. 什么虚拟DOM？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>是一个很大的JSON数据，用于描述视图模板的，保存在内存中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_47-谈一谈你对-mvvm、mvc、mvp的理解" tabindex="-1"><a class="header-anchor" href="#_47-谈一谈你对-mvvm、mvc、mvp的理解" aria-hidden="true">#</a> 47. 谈一谈你对 MVVM、MVC、MVP的理解？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>* MVVM流程 : M数据层 -&gt; VM虚拟DOM层 -&gt; V视图层
* 网页本质 = M数据层 + V视图结构
* M+V是怎么组装的？（ MVC  MVP  MVVM）
* M+V在哪儿组装？（前后端分离、前后端不分离、SSR服务端渲染）
* 进一步理解（阮一峰博客）：https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_48-mounted和activated有什么区别-deactivated和beforedestroy有什么区别-执行次数、使用场景" tabindex="-1"><a class="header-anchor" href="#_48-mounted和activated有什么区别-deactivated和beforedestroy有什么区别-执行次数、使用场景" aria-hidden="true">#</a> 48.mounted和activated有什么区别？deactivated和beforeDestroy有什么区别？（执行次数、使用场景）</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>这两组钩子的区别和使用场景：activated(执行多次) - mounted(执行一次) 、 deactivated(执行多次) - beforeDestroy(执行一次)

动态组件的作用：
1）有种v-if的感觉，根据指定条件渲染目标组件，它的is属性等于哪个组件，就显示哪个组件。
2）场景：它经常配合keep-alive一起使用。
3）activated(激活)、deactivated(休眠)

普通组件的挂载与销毁：
1）mounted挂载
2）beforeDestroy将要销毁
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_49-vue有哪些内置组件" tabindex="-1"><a class="header-anchor" href="#_49-vue有哪些内置组件" aria-hidden="true">#</a> 49. Vue有哪些内置组件？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>插槽、动态组件、过渡动画、component
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_50-哪些场景下你会用到动态组件" tabindex="-1"><a class="header-anchor" href="#_50-哪些场景下你会用到动态组件" aria-hidden="true">#</a> 50. 哪些场景下你会用到动态组件？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>动态组件也是为了实现条件渲染，在需要使用条件渲染地方，根据不同的组件，渲染不到组件，都可以使用动态组件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_51-在vue中实现条件渲染渲染有哪些办法" tabindex="-1"><a class="header-anchor" href="#_51-在vue中实现条件渲染渲染有哪些办法" aria-hidden="true">#</a> 51. 在Vue中实现条件渲染渲染有哪些办法？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>v-if / v-show / component is
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_52-路由跳转时如何传递数据" tabindex="-1"><a class="header-anchor" href="#_52-路由跳转时如何传递数据" aria-hidden="true">#</a> 52. 路由跳转时如何传递数据？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>动态路由：
1）path: /user/:id
2）获取动态路由的值的⽅式如下：
3）在template中，直接通过 $route.params获取值
4）在created中，通过 this.$route.params获取值
5）在setup中，使⽤ vue-router库提供的⼀个hook useRoute（该Hook会返回⼀个Route对象，对象中保存着当前路由相关的值）

query参数:
1）通过query的⽅式来传递参数
2）在界⾯中通过 $route.query 来获取参数
3）在created中，通过 this.$route.query获取值
4）在setup，使⽤ vue-router库提供的⼀个hook useRoute 来获取
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_53-计算属性有什么作用-两大作用" tabindex="-1"><a class="header-anchor" href="#_53-计算属性有什么作用-两大作用" aria-hidden="true">#</a> 53. 计算属性有什么作用？（两大作用）</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>计算属性有什么作用？（两大作用）

可以研究一下，计算属性的实现原理。找资料，找视频，回答：我之前看过vue的源码，它的计算属性是xxxx实现的。

* 作用1：当指令的表达式比较复杂时，我们建议使用计算属性来优化，提升视图模板中代码的可阅读性、可维护性。
* 作用2：用于缓存一个复杂的运算，避免组件更新时产生没有必要的性能损耗。计算属性本质上是一个函数，Vue会分析函数体中使用到了哪些声明式变量，有且仅有这些声明式变量发生变化时，计算属性才会重新执行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_54-什么是路由守卫-路由守卫有什么作用" tabindex="-1"><a class="header-anchor" href="#_54-什么是路由守卫-路由守卫有什么作用" aria-hidden="true">#</a> 54. 什么是路由守卫？路由守卫有什么作⽤？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>vue-router 提供的路由(导航)守卫主要⽤来通过跳转或取消的⽅式守卫导航。有很多种⽅式植⼊路由导航中：全局的，单个路由独享的，或者组件级的。

全局导航钩⼦：
1）router.beforeEach(to,from,next)
2）router.afterEach(to,from)
3）...

组件内的钩⼦:
1）beforeRouteEnter (to, from, next)
2）beforeRouteUpdate (to, from, next)
3）beforeRouteLeave (to, from, next)
4）...

单独路由独享组件:
1)beforeEnter: (to, from, next)
2)afterEach(to,from)
3)...

路由守卫有什么作⽤：
1)可以在进⼊路由之前进⾏某些判断，⽐如，检查token是否存在来判断⽤户是否已经登录。
2)可以在路由守卫中进⾏⻚⾯的权限判断，⽐如，判断某个⽤户是否拥有该⻚⾯的权限。
3)也可以⽤来记录⻚⾯的某些信息，⽐如，记录⻚⾯的滚动信息等等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_55-route和router的区别" tabindex="-1"><a class="header-anchor" href="#_55-route和router的区别" aria-hidden="true">#</a> 55.route和router的区别</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>route是路由信息对象，在Vue3中通过 useRoute 来获取。
1)包括了path，params，hash，query，fullPath，matched，name等路由信息参数。

router是路由实例”对象，在Vue3中通过 useRouter 来获取。
1)包括了路由跳转⽅法、钩⼦函数等，⽐如：push、go、back、addRouter、beforeEnter等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_56-vue-中怎么阻止冒泡-怎么阻止默认事件-怎么监听键盘enter键" tabindex="-1"><a class="header-anchor" href="#_56-vue-中怎么阻止冒泡-怎么阻止默认事件-怎么监听键盘enter键" aria-hidden="true">#</a> 56.vue 中怎么阻止冒泡？怎么阻止默认事件？怎么监听键盘enter键？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>阻止冒泡和默认事件：
1）通过事件对象
2）事件事件修饰符

监听键盘enter键：
1）通过事件对象
2）通过按键修改符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_57-什么是状态管理-什么是单项数据流" tabindex="-1"><a class="header-anchor" href="#_57-什么是状态管理-什么是单项数据流" aria-hidden="true">#</a> 57. 什么是状态管理？什么是单项数据流？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>在开发中，应⽤程序是需要处理各种各样的数据，这些数据需要保存在应⽤程序中的某⼀个位置，对于这些数据的管理就称之为是 状态管理。以前我们是如何管理应⽤程序的状态？
1）在Vue开发中，我们使⽤组件化的开发⽅式。⽽在组件中我们定义的data或在setup中返回的数据，这些数据我们称之为状态（State）。
2）在模块template中我们可以使⽤这些数据，模块最终会被渲染成DOM，我们称之为View。
3）在模块中我们会产⽣⼀些⾏为事件，处理这些⾏为事件时，有可能会修改State，这些⾏为事件我们称之为Actions。

其实Vue组件内部的数据是以单向数据流的形式来管理数据的。例如，组件的数据定义在State中，接着在View层使⽤State中的数据，然后View层会产⽣⼀些事件Actions，⽽这些Actions可能会修改State的数据，这就是⼀个单项数据流的概念。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_58-什么是vuex-你使用过-vuex-吗" tabindex="-1"><a class="header-anchor" href="#_58-什么是vuex-你使用过-vuex-吗" aria-hidden="true">#</a> 58. 什么是Vuex？你使⽤过 Vuex 吗？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>vuex 是⼀个专为 Vue.js 应⽤程序开发的状态管理模式。每⼀个 Vuex 应⽤的核⼼就是 store（仓库）。“store” 基本上就是⼀个容器，它包含着你的应⽤中⼤部分的状态 ( state )。
1）Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发⽣变化，那么相应的组件也会相应地得到⾼效更新。
2)改变 store 中的状态的唯⼀途径就是显式地提交 (commit) mutation。这样使得我们可以⽅便地跟踪每⼀个状态的变化。

Vuex包括⼀下⼏个核⼼模块：
1)State：定义了应⽤状态的数据结构，可以在这⾥设置默认的初始状态。
2)Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到计算属性。
3)Mutation：是唯⼀更改 store 中状态的⽅法，且必须是同步函数。
4)Action：⽤于提交 mutation，⽽不是直接变更状态，可以包含任意异步操作。
5)Module：允许将单⼀的 Store 拆分为多个 store 且同时保存在单⼀的状态树中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_59-v-model-有哪些修饰符" tabindex="-1"><a class="header-anchor" href="#_59-v-model-有哪些修饰符" aria-hidden="true">#</a> 59.v-model 有哪些修饰符？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>trim
lazy
number
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_60-vue中怎么做动画" tabindex="-1"><a class="header-anchor" href="#_60-vue中怎么做动画" aria-hidden="true">#</a> 60. Vue中怎么做动画？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>内置组件transition，使用那6个类名编写自定义动画、使用animate.css第三方动画
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_61-说一下vue动画怎么实现" tabindex="-1"><a class="header-anchor" href="#_61-说一下vue动画怎么实现" aria-hidden="true">#</a> 61. 说一下Vue动画怎么实现？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>用法：把过渡动画抽象成两个过程（Enter进入动画、Leave离开动画）
如何自定义进入动画？.ml-enter / .ml-enter-active / .ml-enter-to  （动画名就叫做&#39;ml&#39;）
如何自定义离开动画？.ml-leave / .ml-leave-active / .ml-leave-to  （动画名就叫做&#39;ml&#39;）

注意：Vue过渡动画的终点是不会保留的，也就是说当动画结束后元素的样式决定于class/style样式。咱们定义动画时，特别注意.ml-enter-to和.ml-leave这两个类名，最好能够配合UI样式去定义。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_62-transition对多个元素执行动画时有什么要注意的" tabindex="-1"><a class="header-anchor" href="#_62-transition对多个元素执行动画时有什么要注意的" aria-hidden="true">#</a> 62.transition对多个元素执行动画时有什么要注意的？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>加key、使用mode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_63-怎么理解计算属性的缓存功能" tabindex="-1"><a class="header-anchor" href="#_63-怎么理解计算属性的缓存功能" aria-hidden="true">#</a> 63. 怎么理解计算属性的缓存功能？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>有且仅有被关联的声明式变量变化时，计算属性才会重新计算
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_64-在哪些场景中会使用到vuex" tabindex="-1"><a class="header-anchor" href="#_64-在哪些场景中会使用到vuex" aria-hidden="true">#</a> 64. 在哪些场景中会使⽤到Vuex？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>对于简单的项⽬，是可以不⽤使⽤ Vuex，但是对于⽐较复杂，组件⽐较多的⼤项⽬就需要使⽤Vuex了。

哪些场景中可以使用vuex：
1）可⽤于记录收藏、购物⻋、应⽤配置信息、⽤户信息等场景中。
2）可⽤于记录系统的登录状态、⽤户权限、部⻔信息、系统配置信息等场景中。
3）可⽤于记录城市列表数据、全局枚举、当前坐标等场景中。
4）⻚⾯中的组件件嵌套太深了，导致⼀层层传递数据变的⾮常麻烦了，也可以将⻚⾯数据存到Vuex中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_65-什么是混入-有什么用-vue-mixin-全局混入-mixins-局部混入-对选项进行复用" tabindex="-1"><a class="header-anchor" href="#_65-什么是混入-有什么用-vue-mixin-全局混入-mixins-局部混入-对选项进行复用" aria-hidden="true">#</a> 65. 什么是混入？有什么用？（Vue.mixin()全局混入 mixins:[]局部混入）（对选项进行复用）</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>作用：我们都知道vue组件是由若干选项组成的，混入用于向组件中混入可复用的选项。
Vue.mixin()全局混入   mixins:[]局部混入

混入是对选项进行复用的一种复用技巧。无论是全局混入、还是局部混入，都解决的是选项的复用问题。

当一个组件同时有全局混入、局部混入、自有选项时，它们的优先级满足：自有选项 &gt; 局部混入 &gt; 全局混入。
注意：工作中尽量不要使用全局混入，偶尔会用到局部混入。当混入用得多了，选项“来历不明”，代码不易维护。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_66-你用混入解决过什么问题" tabindex="-1"><a class="header-anchor" href="#_66-你用混入解决过什么问题" aria-hidden="true">#</a> 66. 你用混入解决过什么问题？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>注入埋点方法、Echarts图表封装
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_67-什么过滤器-你在工作中用它解决什么问题" tabindex="-1"><a class="header-anchor" href="#_67-什么过滤器-你在工作中用它解决什么问题" aria-hidden="true">#</a> 67. 什么过滤器？你在工作中用它解决什么问题？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>也是数据格式化的一种方案，在工作中通过对数据统一处理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_68-使用过滤器有什么要注意的" tabindex="-1"><a class="header-anchor" href="#_68-使用过滤器有什么要注意的" aria-hidden="true">#</a> 68. 使用过滤器有什么要注意的？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>只能在{{}}或者v-bind中使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_69-什么是pinia-pinia-和-vuex有什么区别" tabindex="-1"><a class="header-anchor" href="#_69-什么是pinia-pinia-和-vuex有什么区别" aria-hidden="true">#</a> 69. 什么是Pinia？Pinia 和 Vuex有什么区别？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Pinia 是 Vue 的存储库，它允许您跨组件/⻚⾯共享状态。
Pinia适⽤于Vue2和Vue3，并不需要使⽤ Composition API。
Pinia的处理安装之后，它的API也同样适⽤于SSR的应⽤程序。

Pinia⼏个核⼼概念：

state
1）state是⼀个选项，这个选项的值需要是⼀个函数，函数返回⼀个对象，对象中存储数据
2）在组件中拿到当前的store直接使⽤即可，store.xxx

getters
1）getters也是⼀个选项，这个选项的值是⼀个对象，对象中存储着⼀个个函数，每个函数可以有⼀个参数state，通过state可以获取到当前store的state
2）除此之外每个函数还可以拿到⼀个this，这个this就是当前的整个store实例
3）通过这个this，可以想⽤谁就⽤谁
4）在组件中使⽤也是拿到store直接store.xxx即可

actions
1）在actions中，主要存放⼀个个函数，每个函数最主要的⼯作发送异步请求，获取到数据后直接修改state
2）每个action函数并不像getter函数⼀样，第⼀个参数是state，它可以没有参数
3）需要通过this拿到state然后再修改state中的值
4）在组件中拿到store后直接调⽤即可，store.xxx()
5）如果你在此时传递参数，那么就可以在action中拿到参数

没有模块modules的概念。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_70-请问-vue-use-有什么用-讲一讲它背后做了什么" tabindex="-1"><a class="header-anchor" href="#_70-请问-vue-use-有什么用-讲一讲它背后做了什么" aria-hidden="true">#</a> 70. 请问 Vue.use() 有什么用？讲一讲它背后做了什么？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>注册插件时，必须使用Vue.use这个API。

调用插件函数或install方法，并传入Vue实参

在Vue生态中，除了Vue本身，其它所有与Vue相关的第三方包，都是插件，都得以插件的方式进行集成。
作用：是一种更加高级的代码复用技术，可以以插件的方式为我们提供可复用的组件、混入、指令、过滤器、原型链API。
经验：以公司真实项目、优秀开源项目，你只要发现里面有好用的组件或指令，插件，都收集到你的代码库中，以后可以复用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_71-谈一谈你对-vue-nexttick-的理解-有什么用-在nexttick访问最新的dom" tabindex="-1"><a class="header-anchor" href="#_71-谈一谈你对-vue-nexttick-的理解-有什么用-在nexttick访问最新的dom" aria-hidden="true">#</a> 71. 谈一谈你对 Vue.nextTick() 的理解？有什么用？（在nextTick访问最新的DOM）</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>set操作，代码确实是同步的，但是set行为是异步的；set操作修改声明变量，触发re-render生成新的虚拟DOM，进一步执行diff运算，找到脏节点集合，交给Vue背后的更新队列去执行循环更新。nextTick是在更新队列中每一个更新任务都是一个更新单元，nextTick表示下一个更新单元（更新周期）。

作用：这么描述一个场景，我们set操作data（更新DOM），你希望访问这个DOM的最新状态时，使用this.$nextTick(handler)。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_72-nexttick-和-updated-的区别" tabindex="-1"><a class="header-anchor" href="#_72-nexttick-和-updated-的区别" aria-hidden="true">#</a> 72.nextTick() 和 updated() 的区别</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>前者只是表示一个更新单元已完成，后者是生命周期钩子表示整个页面更新完成
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_73-vue响应式有没有缺陷呢-有什么缺陷-遇到这种问题你会怎么办" tabindex="-1"><a class="header-anchor" href="#_73-vue响应式有没有缺陷呢-有什么缺陷-遇到这种问题你会怎么办" aria-hidden="true">#</a> 73. Vue响应式有没有缺陷呢？有什么缺陷？遇到这种问题你会怎么办？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>复杂的Vue应用中，如果声明式变量是引用数据类型，当你set操作这些复杂的引用数据类型时，视图不更新。解决方案，set操作完成后，立即调用 this.$forceUpdate()强调更新（强制re-render）有时候，this.$forceUpdate()也无法解决上述问题，对set操作的变量进行一行深复制。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_74-provide-inject有什么特点" tabindex="-1"><a class="header-anchor" href="#_74-provide-inject有什么特点" aria-hidden="true">#</a> 74.provide/inject有什么特点？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>只能自上而下、没有响应式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_75-谈一谈你对事件总线的理解-订阅-发布-模式-的理解" tabindex="-1"><a class="header-anchor" href="#_75-谈一谈你对事件总线的理解-订阅-发布-模式-的理解" aria-hidden="true">#</a> 75. 谈一谈你对事件总线的理解（“订阅-发布”模式）的理解？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>订阅发布模式和观察者模式在前端使用的非常频繁。

订阅发布模式分发布者和订阅，如前端事件或自定义事件就是所谓的订阅发布。订阅者订阅好，等待发布者发布，两者之间没有必然联系。vue中组件通信中的事件总线就是基于订阅发布的。

观察者模式分观察者和被观察者，也是基于订阅发布的，观察者和被观察者之间是有关系的，在被观察者内部是保存着观察者。vue中收集依赖和派发更新就用到了观察者模式，vue中的每一个状态都对应一个Dep类，用来收集依赖，所谓的依赖就是观察者（订阅者）Watcher。一上来vue在解析渲染时, 会进行依赖收集, 会将渲染 watcher、计算属性 watcher、侦听器 watcher, 都收集到对应的dep中, 将来Object.defineProperty 监听到数据变化, 就根据依赖关系, 派发更新
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_76-读vue源码" tabindex="-1"><a class="header-anchor" href="#_76-读vue源码" aria-hidden="true">#</a> 76.读vue源码</h3><h3 id="_77-什么是虚拟dom-什么是diff算法" tabindex="-1"><a class="header-anchor" href="#_77-什么是虚拟dom-什么是diff算法" aria-hidden="true">#</a> 77. 什么是虚拟DOM？什么是diﬀ算法？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Virtual DOM 本质上是 JavaScript 对象，是真实 DOM 的描述，⽤⼀个 JS 对象来描述⼀个 DOM 节点。Virtual DOM 可以看做⼀棵模拟 DOM 树的 JavaScript 树，其主要是通过 VNode 实现⼀个⽆状态的组件，当组件状态发⽣更新时，然后触发 Virtual DOM 数据的变化，然后通过 Virtual DOM 和真实 DOM的⽐对，再对真实 DOM 更新。可以简单认为 Virtual DOM 是真实 DOM 的缓存。

虚拟 DOM 的优点:
1)跨平台与分层设计(主要原因)：虚拟 DOM 本质上是 JavaScript 对象，⽽真实 DOM 与平台强相关，相⽐之下虚拟 DOM 带来了分层设计、跨平台以及 SSR 等特性。⾄于 Virtual DOM ⽐原⽣ DOM 谁的性能好，需要 “控制变量法” 才能⽐较。这是为什么要设计虚拟 DOM 的主要原因。虚拟 DOM 抽象了原本的渲染过程，实现了跨平台的能⼒，⽽不仅仅局限于浏览器的DOM，可以是安卓和 iOS 的原⽣组件，也可以是⼩程序，也可以是各种 GUI。
2)以最⼩的代价更新变化的视图。整棵 DOM 树实现代价太⾼，能否只更新变化的部分的视图。虚拟 DOM 能通过 patch 准确地转换为真实 DOM，并且⽅便进⾏ diﬀ。
3)保证性能下限(次要原因)：框架的虚拟 DOM 需要适配任何上层 API 可能产⽣的操作(分层设计)，它的⼀些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是⽐起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM ⾄少可以保证在你不需要⼿动优化的情况下，依然可以提供还不错的性能，即保证性能的下限。
4)⽆需⼿动操作 DOM：操作 DOM 慢，js 运⾏效率⾼。我们可以将 DOM 对⽐(diﬀ 操作)放在JS 层，提⾼效率。我们不再需要⼿动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的⽅式更新视图，极⼤提⾼我们的开发效率。
5)组件的⾼度抽象化：Vue.2x 引⼊ VirtualDOM 把渲染过程抽象化，从⽽使得组件的抽象能⼒也得到提升，并且可以适配 DOM 以外的渲染⽬标。不再依赖 HTML 解析器进⾏模版解析，可以进⾏更多的 AOT ⼯作提⾼运⾏时效率：通过模版 AOT 编译，Vue 的运⾏时体积可以进⼀步压缩，运⾏时效率可以进⼀步提升。Virtual DOM 的优势不在于单次的操作，⽽是在⼤量、频繁的数据更新下，能够对视图进⾏合理、⾼效的更新。为了实现⾼效的 DOM 操作，⼀套⾼效的虚拟 DOM diﬀ 算法显得很有必要.

虚拟 DOM 的缺点：
1）⽆法进⾏极致优化： 虽然虚拟 DOM + 合理的优化，⾜以应对绝⼤部分应⽤的性能需求，但在⼀些性能要求极⾼的应⽤中虚拟 DOM ⽆法进⾏针对性的极致优化。
2）虽然 Vue 能够保证触发更新的组件最⼩化，但在单个组件内部依然需要遍历该组件的整个Virtual DOM 树。
3）在⼀些组件整个模版内只有少量动态节点的情况下，这些遍历都是性能的浪费。
4）传统 Virtual DOM 的性能跟模版⼤⼩正相关，跟动态节点的数量⽆关。

什么是diﬀ算法：
diﬀ 算法是⼀种通过同层的树节点进⾏⽐较的⾼效算法。diﬀ 整体策略为：深度优先，同层⽐较。

新旧两个 VNode 节点的左右头尾两侧均有⼀个变量标识，在遍历过程中这⼏个变量都会向中间靠拢。当 oldStartIdx &lt;= oldEndIdx 或者 newStartIdx &lt;= newEndIdx 时结束循环。在遍历中，如果存在 key，并且满⾜ sameVnode，会将该 DOM 节点进⾏复⽤(只通过移动节点顺序)，否则则会创建⼀个新的 DOM 节点。

oldStartVnode、oldEndVnode 与 newStartVnode、newEndVnode 两两⽐较共有四种⽐较⽅法：
1）当新旧⼦树的两个开始节点或新旧⼦树的两个结束节点相同时，当新旧 VNode 节点的 start 或者 end 满⾜ sameVnode 时，也就是 sameVnode(oldStartVnode,newStartVnode) 或者 sameVnode(oldEndVnode, newEndVnode) 表示为 true，直接将该VNode 节点进⾏ patchVnode 即可（保留）。
2）当旧⼦树的开始节点与新⼦树的结束节点相同时，当 oldStartVnode 与 newEndVnode 满⾜ sameVnode，即 sameVnode(oldStartVnode,newEndVnode)。这时候说明 oldStartVnode 已经跑到了 oldEndVnode 后⾯去了，进⾏patchVnode 的同时还需要将真实 DOM 节点移动到 oldEndVnode 的后⾯。
3）当旧⼦树的结束节点与新⼦树的开始节点相同时，如果 oldEndVnode 与 newStartVnode 满⾜ sameVnode，即 sameVnode(oldEndVnode,newStartVnode)。这说明 oldEndVnode 跑到了 oldStartVnode 的前⾯，进⾏ patchVnode 的同时真实的 DOM 节点移动到了 oldStartVnode 的前⾯。
4）当旧⼦树中没有新⼦树中的节点，会将新节点插⼊到 oldStartVnode 前
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_78-vue2-和-vue3-响应性原理" tabindex="-1"><a class="header-anchor" href="#_78-vue2-和-vue3-响应性原理" aria-hidden="true">#</a> 78. Vue2 和 Vue3 响应性原理</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Vue.js 2.0 采⽤数据劫持并结合了发布者-订阅者模式，通过 Object.deﬁneProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
官⽹的描述：https://cn.vuejs.org/v2/guide/reactivity.html

Vue.js 3.0放弃了Object.deﬁneProperty API，⽽使⽤了更快的Proxy API。Proxy 是在 ES6 中引⼊，它允许你拦截对该对象的任何交互，也可以避免 Vue 早期版本中存在的⼀些响应性问题。
官⽹描述：https://v3.cn.vuejs.org/guide/reactivity.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_79-nexttick-方法的实现原理" tabindex="-1"><a class="header-anchor" href="#_79-nexttick-方法的实现原理" aria-hidden="true">#</a> 79.nextTick ⽅法的实现原理</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>当调⽤nexttick函数时，nexttick内部会将回调函数使⽤Promise来包裹，⽬的是将该回调函数加⼊到微任务队列中。

在队列中的任务都是先进先出的，所以当执⾏完主程序的代码之后就会执⾏微任务队列中nexttick的回调函数，那这个过程就称为⼀次tick。

所以nexttick的回调函数将会推迟到下⼀个 DOM 更新周期之后执⾏。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_80-proxy-与-object-defineproperty-优劣对比" tabindex="-1"><a class="header-anchor" href="#_80-proxy-与-object-defineproperty-优劣对比" aria-hidden="true">#</a> 80. Proxy 与 Object.deﬁneProperty 优劣对⽐</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Proxy 的优势如下:
1）Object.deﬁneProperty 只能劫持对象的属性，⽽ Proxy 是直接代理对象。
2）由于 Object.deﬁneProperty 只能对属性进⾏劫持，需要遍历对象的每个属性，如果属性值也是对象，则需要深度遍历。⽽ Proxy 直接代理对象，不需要遍历操作。
3）Object.deﬁneProperty 对新增属性需要⼿动进⾏ Observe。
4）由于 Object.deﬁneProperty 劫持的是对象的属性，所以新增属性时，需要重新遍历对象，对其新增属性再使⽤ Object.deﬁneProperty 进⾏劫持。
5）也正是因为这个原因，使⽤ Vue 给 data 中的数组或对象新增属性时，需要使⽤ vm.$set 才能保证新增的属性也是响应式的。
6）Proxy⽀持 13 种拦截操作，这是 deﬁneProperty 所不具有的。
7）Proxy 作为新标准，从⻓远来看，JS 引擎会继续优化 Proxy，但 getter 和 setter 基本不会再有针对性优化。

Proxy 的劣势如下:
1）Proxy 兼容性差
2）Proxy 对于 IE 浏览器来说简直是灾难。 并且⽬前并没有⼀个完整⽀持 Proxy 所有拦截⽅法的
3）Polyﬁll ⽅案，有⼀个 Google 编写的 proxy-polyﬁll 也只⽀持了 get、set、apply、construct 四种拦截，可以⽀持到 IE9+ 和 Safari 6+。

Object.deﬁneProperty 的优势如下：
1）兼容性好，⽀持 IE9

最后总结：
1）Object.deﬁneProperty 并⾮不能监控数组下标的变化，Vue2.x 中⽆法通过数组索引来实现响应式数据的⾃动更新是 Vue 本身的设计导致的，不是 deﬁneProperty 的锅。
2）Object.deﬁneProperty 和 Proxy 本质差别是，deﬁneProperty 只能对属性进⾏劫持，所以出现了需要递归遍历，新增属性需要⼿动 Observe 的问题。
3）Proxy 作为新标准，浏览器⼚商势必会对其进⾏持续优化，但它的兼容性也是块硬伤，并且⽬前还没有完整的 polyﬁll⽅案。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_81-使用过-vue-ssr-吗-说说-ssr" tabindex="-1"><a class="header-anchor" href="#_81-使用过-vue-ssr-吗-说说-ssr" aria-hidden="true">#</a> 81. 使⽤过 Vue SSR 吗？说说 SSR？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Vue.js 是构建客户端应⽤程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进⾏⽣成DOM 和操作 DOM。然⽽，也可以将同⼀个组件渲染为服务端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记&quot;激活&quot;为客户端上完全可交互的应⽤程序。即：SSR⼤致的意思就是vue在客户端将标签渲染成的整个 html ⽚段的⼯作在服务端完成，服务端形成的html ⽚段直接返回给客户端这个过程就叫做服务端渲染。

服务端渲染的优点：
1）更好的 SEO： 因为 SPA ⻚⾯的内容是通过 Ajax 获取，⽽搜索引擎爬取⼯具并不会等待 Ajax 异步完成后再抓取⻚⾯内容，所以在 SPA 中是抓取不到⻚⾯通过 Ajax 获取到的内容；⽽ SSR 是直接由服务端返回已经渲染好的⻚⾯（数据已经包含在⻚⾯中），所以搜索引擎爬取⼯具可以抓取渲染好的⻚⾯；
2）更快的内容到达时间（⾸屏加载更快）： SPA 会等待所有 Vue 编译后的 js ⽂件都下载完成后，才开始进⾏⻚⾯的渲染，⽂件下载等需要⼀定的时间等，所以⾸屏渲染需要⼀定的时间；SSR 直接由服务端渲染好⻚⾯直接返回显示，⽆需等待下载 js ⽂件及再去渲染等，所以 SSR 有更快的内容到达时间；

服务端渲染的缺点：
1）更多的开发条件限制： 例如服务端渲染只⽀持 beforCreate 和 created 两个钩⼦函数，这会导致⼀些外部扩展库需要特殊处理，才能在服务端渲染应⽤程序中运⾏；并且与可以部署在任何静态⽂件服务器上的完全静态单⻚⾯应⽤程序 SPA 不同，服务端渲染应⽤程序，需要处于 Node.jsserver 运⾏环境；
2）更多的服务器负载：在 Node.js 中渲染完整的应⽤程序，显然会⽐仅仅提供静态⽂件的 server 更加⼤量占⽤CPU 资源 (CPU-intensive - CPU 密集)，因此如果你预料在⾼流量环境 ( high traﬃc )下使⽤，请准备相应的服务器负载，并明智地采⽤缓存策略。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_82-你有对-vue-项目进行哪些优化" tabindex="-1"><a class="header-anchor" href="#_82-你有对-vue-项目进行哪些优化" aria-hidden="true">#</a> 82. 你有对 Vue 项⽬进⾏哪些优化？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>代码层⾯的优化：
1）v-if 和 v-show 区分使⽤场景
2）computed 和 watch 区分使⽤场景
3）v-for 遍历必须为 item 添加 key，且避免同时使⽤ v-if
4）⻓列表性能优化
5）事件的销毁
6）图⽚资源懒加载
7）路由懒加载
8）第三⽅插件的按需引⼊
9）优化⽆限列表性能
10）服务端渲染 SSR or 预渲染

打包层⾯的优化：
1）Webpack 对图⽚进⾏压缩
2）减少 ES6 转为 ES5 的冗余代码
3）提取公共代码
4）模板预编译
5）提取组件的 CSS
6）优化 SourceMap
7）构建结果输出分析
8）Vue 项⽬的编译优化

其它的优化：
1）开启 gzip 压缩
2）浏览器缓存
3）CDN 的使⽤
4）使⽤ Chrome Performance 查找性能瓶颈
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_83-如何实现vue首屏加载优化的" tabindex="-1"><a class="header-anchor" href="#_83-如何实现vue首屏加载优化的" aria-hidden="true">#</a> 83. 如何实现Vue⾸屏加载优化的</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>1）把不常改变的库放到index.html中，并接⼊CDN提速
2）Vue路由的懒加载，Vue组件尽量不要全局引⼊
3）使⽤轻量级的⼯具库
4）减少⾸⻚的资源请求数，减少资源的⼤⼩
5）避免使⽤⼤图，图⽚使⽤懒加载
6）等等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_84-vue3-0-里为什么要用-proxy-api替代-defineproperty-api" tabindex="-1"><a class="header-anchor" href="#_84-vue3-0-里为什么要用-proxy-api替代-defineproperty-api" aria-hidden="true">#</a> 84-vue3-0-里为什么要用-proxy-api替代-defineproperty-api)</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>deﬁneProperty API 的局限性最⼤原因是它只能针对对象的属性做监听。Vue2.x中的响应式实现正是基于Object.deﬁneProperty来实现，对 data 中的属性做了遍历 + 递归，为每个属性设置了 getter、setter。这也就是为什么 Vue 只能对 data 中预定义过的属性做出响应的原因。

Proxy API监听是针对⼀个对象的，那么对这个对象的所有操作会进⼊监听操作， 这就完全可以代理所有属性，将带来很⼤的性能提升和更优的代码。Proxy 可以理解成，在⽬标对象之前架设⼀层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了⼀种机制，可以对外界的访问进⾏过滤和改写。

Proxy响应式是惰性的。在 Vue.js 2.x 中，对于⼀个深层属性嵌套的对象，要劫持它内部深层次的变化，就需要递归遍历这个对象，执⾏ Object.deﬁneProperty 把每⼀层对象数据都变成响应式的，这⽆疑会有很⼤的性能消耗。在 Vue.js 3.0 中，使⽤ Proxy API 并不能监听到对象内部深层次的属性变化，因此它的处理⽅式是在 getter 中去递归响应式，这样的好处是真正访问到的内部属性才会变成响应式，简单的可以说是按需实现响应式，减少性能消耗。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_85-vue和react有什么不同-使用场景分别是什么" tabindex="-1"><a class="header-anchor" href="#_85-vue和react有什么不同-使用场景分别是什么" aria-hidden="true">#</a> 85. Vue和React有什么不同？使⽤场景分别是什么？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>react整体是函数式的思想，把组件设计成纯组件，状态和逻辑通过参数传入，所以在react中，是单向数据流；

vue的思想是响应式的，也就是基于是数据可变的，通过对每一个属性建立Watcher来监听，当属性变化的时候，响应式的更新对应的虚拟dom。


react整体上是函数式的思想，组件使用jsx语法，all in js，将html与css全都融入javaScript，jsx语法相对来说更加灵活，我一开始刚转过来也不是很适应，感觉写react应用感觉就像是在写javaScript。当组件调用setState或props变化的时候，组件内部render会重新渲染，子组件也会随之重新渲染，可以通过shouldComponentUpdate或者PureComponent可以避免不必要的重新渲染（个人感觉这一点上不如vue做的好）。

vue的整体思想仍然是拥抱经典的html(结构)+css(表现)+js(行为)的形式，vue鼓励开发者使用template模板，并提供指令供开发者使用(v-if、v-show、v-for等等)，因此在开发vue应用的时候会有一种在写经典web应用（结构、表现、行为分离）的感觉。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_86-vue2-和-vue3的区别" tabindex="-1"><a class="header-anchor" href="#_86-vue2-和-vue3的区别" aria-hidden="true">#</a> 86.vue2 和 vue3的区别？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>vue3是一种新的开发方式，官方建议使用组合式API进行开发，官方提供了大量的组合API，如果有重复的逻辑，可以封装成hook进行复用。

在性能方面，重写了虚拟DOM，跳过了静态节点，只处理动态节点，update性能提高了1.3~2倍，SSR速度提高了2~3倍。

Vue3更好地支持TS。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_87-订阅发布模式和观察者模式的区别" tabindex="-1"><a class="header-anchor" href="#_87-订阅发布模式和观察者模式的区别" aria-hidden="true">#</a> 87. 订阅发布模式和观察者模式的区别？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>订阅发布模式和观察者模式在前端使用的非常频繁。

订阅发布模式分发布者和订阅，如前端事件或自定义事件就是所谓的订阅发布。订阅者订阅好，等待发布者发布，两者之间没有必然联系。
vue中组件通信中的事件总线就是基于订阅发布的。

观察者模式分观察者和被观察者，也是基于订阅发布的，观察者和被观察者之间是有关系的，在被观察者内部是保存着观察者。vue中收集依赖和派发更新就用到了观察者模式，vue中的每一个状态都对应一个Dep类，用来收集依赖，所谓的依赖就是观察者（订阅者）Watcher。一上来vue在解析渲染时, 会进行依赖收集, 会将渲染 watcher、计算属性 watcher、侦听器 watcher, 都收集到对应的dep中, 将来Object.defineProperty 监听到数据变化, 就根据依赖关系, 派发更新
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_88-vue-router的实现原理" tabindex="-1"><a class="header-anchor" href="#_88-vue-router的实现原理" aria-hidden="true">#</a> 88.vue-router的实现原理</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>vue-router通过hash和history inerface两种方式实现前端路由，更新视图但不重新请求页面是前端路由原理的核心之一

完成上面的核心，有两种实现方式

hash模式
1. 改变hash并不会引起页面重载
2. HTTP请求不包括#,所以使用hash不会影响到其它功能
3. 改变#会改变浏览器的访问历史
4. 可以通过onhashChange监听hash值的变化。后来出了一个onpopState事件，也可以代替onhashchange使用

history模式
1. 它是浏览器记录栈提供的接口，通过back),forward()go()我们可以读取浏览器历史记录栈的信息，进行各种跳转操作。
2. 从HTMLS开始，Historyinterface有进一步修炼: pushState(), replaceState()这下不仅是读取了，还可以对浏览器历史记录栈进行修改:
3. vue-router默认会采用hash默认，如果浏览器支持history新特性，则采用history模式，否则采用hash模式，如果不在浏览器环境则使用abstract(node环境)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_89-vuex-为什么要分模块并且加命名空间" tabindex="-1"><a class="header-anchor" href="#_89-vuex-为什么要分模块并且加命名空间" aria-hidden="true">#</a> 89. Vuex 为什么要分模块并且加命名空间？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>模块:
    由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块。

命名空间：
    默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_90-谈谈你对-keep-alive-的了解" tabindex="-1"><a class="header-anchor" href="#_90-谈谈你对-keep-alive-的了解" aria-hidden="true">#</a> 90. 谈谈你对 keep-alive 的了解？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：
    1）一般结合路由和动态组件一起使用，用于缓存组件；
    2）提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；
    3）对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_91-说说你vue项目开发中碰到的问题-原因及解决办法" tabindex="-1"><a class="header-anchor" href="#_91-说说你vue项目开发中碰到的问题-原因及解决办法" aria-hidden="true">#</a> 91. 说说你vue项目开发中碰到的问题, 原因及解决办法</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>1). 创建Swiper/BScroll对象后, 轮播/滑动没有效果?
    原因: 创建对象太早, 得在数据显示后创建
    解决: watch + $nextTick() 或 callback + $nextTick()

2). 初始显示异常
    情况1: Cannot read property &#39;xxx&#39; of undefined&quot;
    原因: 初始值是空对象, 内部没有数据, 而模块中直接显示3层表达式
    解决: 使用v-if指令
    
    情况2: Cannot read property &#39;avatar&#39; of null&quot;
    原因: 初始值是null, 而模块中直接显示2层表达式
    解决: 初始值为{}

3). 问题: 更新状态数据, 对应的界面不变化
    原因: 一般方法给一个已有绑定的对象中添加一个新的属性, 这个属性没有数据绑定
    解决: 
        Vue.set(obj, &#39;xxx&#39;, value)才有数据绑定
        this.$set(obj, &#39;xxx&#39;, value)才有数据绑定

4). 问题: 点击添加购物项, 会1次添加多个
    原因: 创建了多个BScroll对象来管理同一个DOM元素
    解决: 只创建一个BScroll对象 
    扩展: 单例对象: 
        创建前, 先判断是否已经存在, 只有不存在才创建
        创建后, 保存创建的对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_92-区别-route和-router" tabindex="-1"><a class="header-anchor" href="#_92-区别-route和-router" aria-hidden="true">#</a> 92. 区别$route和$router</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>$route是“路由信息对象”: 包括path，params，hash，query，meta等路由信息参数。
$router是“路由实例”对象: 包括了路由的跳转方法，注册全局导航守卫的方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_93-在react或vue中在子组件能不能修改props数据-追问-vue子组件修改props的数据会不会影响父组件的状态值" tabindex="-1"><a class="header-anchor" href="#_93-在react或vue中在子组件能不能修改props数据-追问-vue子组件修改props的数据会不会影响父组件的状态值" aria-hidden="true">#</a> 93. 在React或Vue中在子组件能不能修改props数据，追问：Vue子组件修改props的数据会不会影响父组件的状态值？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>问题描述
1. 父组件通过标签属性的形式向子组件传递数据
2. 传递的数据类型： 基本数据类型，引用数据类型

答案
1. React不能修改，修改会报错
2. Vue中可以修改，会有警告 

追问：
1.如果传递的基本数据类型，不会影响
2.如果传递的引用数据类型，会影响
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_94-vue单页面应用中刷新页面-vuex数据丢失-如何解决" tabindex="-1"><a class="header-anchor" href="#_94-vue单页面应用中刷新页面-vuex数据丢失-如何解决" aria-hidden="true">#</a> 94. Vue单页面应用中刷新页面，Vuex数据丢失，如何解决？</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Vuex特点
1.Vuex数据保存在运行内存中，vue实例初始化的时候为其分配内存
2.当刷新页面的时候重新初始化Vue实例，所以重新为Vuex分配内存导致之前保存的数据丢失

如何解决
1.Vuex的数据都是每次组件加载时候动态请求获取数据保存
a)优点： 保证数据不会丢失
b)缺点: 性能差，因为网络问题可能有网络延迟

2.将Vuex中的数据每次同步更新保存到sessionStorage中
a)优点: 每次页面刷新后从sessionStorage中获取保存的数据，不会丢失
b)缺点: state中的数据是动态的，就需要一直要同步到sessionStorage中，性能差

3.在页面刷新之前获取Vuex的数据，将数据保存在sessionStorage中，页面加载后从sessionStorage中获取
a)优点: 减少动态更新sessionStorage的次数，性能好
b)重点: 给window绑定beforeupload事件监听
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_95-项目中你是如何封装axios的" tabindex="-1"><a class="header-anchor" href="#_95-项目中你是如何封装axios的" aria-hidden="true">#</a> 95. 项目中你是如何封装axios的</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>简单的封装：
    实现请求拦截：
        在发送请求的时候可能需要携带一些信息在请求头上，比如 token 等
    实现响应拦截
        axios 请求的返回结果里面包含了很多东西，我们的业务层面通常只需要后端返回的数据即可
    常见错误信息处理
        在响应拦截器中封装，常见的错误信息处理
    请求头设置
        在请求拦截器中，设置一些请求头
    api 集中式管理

复杂的封装：
    取消重复请求（https://juejin.cn/post/6955610207036801031）：
        原生的话，调用abort方法来取消请求
        axios的话，调用axios中的CancelToken来取消请求

        当请求参数和请求url一样的，就认为请求是一样的，根据url和参数生成一个唯一的key,为
        每个请求都创建一个专属的CancelToken，把key和cancel函数存储在Map中，使用Map可以判断
        是否有重复的请求，出现请求请求时，就可以使用cancel函数取消前面发生的请求。

        在请求拦截器中做取消重复请求。

    请求失败自动重试
        https://juejin.cn/post/6968487137670856711

    请求接口数据缓存
        https://juejin.cn/post/6968487137670856711
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,190),t={id:"_96-文本插值有-一闪而过-问题-怎么处理",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_96-文本插值有-一闪而过-问题-怎么处理","aria-hidden":"true"},"#",-1),c=i(`<div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>1)使用v-text
2)使用v-cloak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_97-你是如何理解vue的" tabindex="-1"><a class="header-anchor" href="#_97-你是如何理解vue的" aria-hidden="true">#</a> 97. 你是如何理解Vue的</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1）十几个指令（内置指令）
2）底层原理（响应式，生命周期，两个API）
3）组件化（props,computed,watch,template,data,methods,组件注册...）
4）五个内置组件(slot,transition,component,keep-alive)
5）逻辑复用技术(自定义组件，混入，过滤器，自定义指令，原型链，插件)
6）组件通信方案（9种）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_98-pinia和vuex有什么区别" tabindex="-1"><a class="header-anchor" href="#_98-pinia和vuex有什么区别" aria-hidden="true">#</a> 98，Pinia和Vuex有什么区别？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Pinia没有Vuex中的mutations选项，因为mutations的出现解决的问题是让devtools进⾏状态追踪,但是随着技术的发展，Pinia已经解决的这个没有mutation依然可以跟踪状态的问题。

Pinia可以在任意组件中拿到store然后直接修改state中的任意值

Pinia不再需要Vuex中的modules这样的嵌套结构，取⽽代之的是可以创建⼀个个store

使⽤上的区别：
1）在Vuex中使⽤某个state时，需要$store.state.xxx。在Pinia中直接拿到store之后store.xxx即可
2）在Vuex中使⽤某个getter函数时，需要$store.getters.xxx。在Pinia中拿到store后，store.xxx即可
3）在Vuex中进⾏异步请求需要派发action函数。在Pinia中拿到store后，直接调⽤action函数即可
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function m(b,o){return d(),a("div",null,[v,e("h3",t,[u,s(" 96. 文本插值有“"+l()+"一闪而过”问题，怎么处理？",1)]),c])}const x=n(r,[["render",m],["__file","vue.html.vue"]]);export{x as default};

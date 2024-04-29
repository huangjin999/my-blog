import{_ as e,p as t,q as r,Y as o}from"./framework-aa5c4115.js";const n="/my-blog/images/MVVM.png",s={},a=o('<h2 id="mvvm" tabindex="-1"><a class="header-anchor" href="#mvvm" aria-hidden="true">#</a> MVVM</h2><p><strong>M：数据层 VM层 V：视图层</strong></p><ul><li>当vue组件被创建时，在生命周期的第一阶段，Vue使用Object.defineProperty()对data选项进行遍历劫持并添加get/set钩子；</li><li>在生命周期第二阶段，指令第一次与声明式变量touch时，发生依赖收集，再调用当前组件的watcher第一次更新DOM，DOM视图就显示出来了。</li><li>当声明式变量发生变化时，vue再次通知Watcher更新视图，这就是响应式（原理）</li></ul><p><strong>M+V可以组装：</strong></p><p>MVC MVP MVVM</p><p><strong>M+V在哪里组装：</strong></p><p>前后端分离，前后端不分离，SSR服务器渲染</p><p><strong>后端组装：</strong></p><p>MVC： Controller 控制器</p><p><img src="'+n+'" alt="如图"></p>',10),c=[a];function i(p,l){return t(),r("div",null,c)}const d=e(s,[["render",i],["__file","index_04.html.vue"]]);export{d as default};

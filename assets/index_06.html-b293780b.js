import{_ as a,p as e,q as i,Y as l}from"./framework-aa5c4115.js";const h={},d=l('<h3 id="计算属性和方法" tabindex="-1"><a class="header-anchor" href="#计算属性和方法" aria-hidden="true">#</a> 计算属性和⽅法：</h3><ol><li>都可以通过this来访问</li><li>都可以对⼀些数据进⾏处理和计算</li><li>对于包含响应式数据计算的逻辑，应该使⽤计算属性，因为计算属性是有缓存。</li></ol><h3 id="computed和method的区别" tabindex="-1"><a class="header-anchor" href="#computed和method的区别" aria-hidden="true">#</a> computed和method的区别</h3><ol><li>computed底层会缓存, 性能更⾼</li><li>计算属性会基于它们的依赖关系进⾏缓存</li><li>在数据不发⽣变化时，计算属性是不需要重新计算的</li><li>但是如果依赖的数据发⽣变化，在使⽤时，计算属性依然会重新进⾏计算</li></ol><h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h3><ul><li>它更多的是起到 “观察” 的作⽤，类似于对数据进行变化的监听并执行回调。</li><li>主要⽤于观察 props 或 本组件data的值，当这些值发生变化时，执⾏处理操作</li><li>不一定要返回某个值</li></ul><h4 id="建议" tabindex="-1"><a class="header-anchor" href="#建议" aria-hidden="true">#</a> 建议</h4><ul><li>当目的是进⾏数值计算，且依赖于其他数据，那么推荐使用 computed</li><li>当需要在某个数据发生变化的, 同时做⼀些稍复杂的逻辑操作，那么推荐使⽤ watch</li></ul><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4><h5 id="computed" tabindex="-1"><a class="header-anchor" href="#computed" aria-hidden="true">#</a> computed：</h5><ul><li>支持缓存</li><li>不支持异步，尽量不要做这件事</li><li>一个数据受多个数据影响</li></ul><h5 id="watch-1" tabindex="-1"><a class="header-anchor" href="#watch-1" aria-hidden="true">#</a> watch：</h5><ul><li>不支持缓存</li><li>支持异步</li><li>一个数据影响多个数据</li></ul>',13),t=[d];function r(c,o){return e(),i("div",null,t)}const s=a(h,[["render",r],["__file","index_06.html.vue"]]);export{s as default};
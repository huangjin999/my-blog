import{_ as i,b as l,p as e,q as r,w as t,I as n,J as s,H as f,s as v}from"./framework-aa5c4115.js";const u=v("h1",null,"列表渲染v-for-v-if",-1),c={key:0},m={__name:"列表渲染v-for和v-if",setup(d){const a=l({name:"张三",age:"18",done:!0});return(_,p)=>(e(),r(n,null,[u,t(" 同时使用 v-if 和 v-for 是不推荐的，因为这样二者的优先级不明显。 "),t(" 当它们同时存在于一个节点上时，v-if 比 v-for 的优先级更高。这意味着 v-if 的条件将无法访问到 v-for 作用域内定义的变量别名： "),t(`\r
 这会抛出一个错误，因为属性 todo 此时\r
 没有在该实例上定义\r
`),_.todo.done?t("v-if",!0):(e(!0),r(n,{key:0},s(a,o=>(e(),r("li",null,f(o.name),1))),256)),t(" 在外新包装一层 <template> 再在其上使用 v-for 可以解决这个问题 (这也更加明显易读)： "),(e(!0),r(n,null,s(a,o=>(e(),r(n,null,[o.done?t("v-if",!0):(e(),r("li",c,f(o.name),1))],64))),256))],64))}},k=i(m,[["__file","列表渲染v-for和v-if.vue"]]);export{k as default};

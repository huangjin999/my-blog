import{_ as l,b as u,p as t,q as r,w as s,I as a,J as _,H as o,s as c}from"./framework-aa5c4115.js";const i=c("h1",null,"通过 key 管理状态",-1),m={__name:"通过 key 管理状态",setup(k){const n=u([{name:"张三",age:"18",id:0},{name:"王五",age:"19",id:1}]);return(d,y)=>(t(),r(a,null,[i,s(` 为了给 Vue 一个提示，以便它可以跟踪每个节点的标识(v-bind)，从而重用和重新排序现有的元素，\r
        所有需要为每个元素对应的块提供一个唯一的 key attribute：\r
        根据经验，最好不要用索引,来绑定唯一的key就是为了提高性能\r
        key 绑定的值期望是一个基础类型的值，例如字符串或 number 类型。不要用对象作为 v-for 的 key。\r
 `),(t(!0),r(a,null,_(n,e=>(t(),r("div",{key:e.id},o(e.name),1))),128)),s(" 当使用 <template v-for> 时，key 应该被放置在这个 <template> 容器上： "),(t(!0),r(a,null,_(n,e=>(t(),r("div",{key:e.id},o(e.name),1))),128))],64))}},f=l(m,[["__file","通过 key 管理状态.vue"]]);export{f as default};

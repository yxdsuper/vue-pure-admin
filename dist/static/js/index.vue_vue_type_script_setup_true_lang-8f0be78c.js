import{useColumns as u}from"./columns-9cd4f7f6.js";const l={class:"flex"},c={class:"w-[700px]"},V=Vue.defineComponent({__name:"index",setup(r){const{columns:o,dataList:e}=u();return(s,a)=>{const t=Vue.resolveComponent("el-scrollbar"),n=Vue.resolveComponent("pure-table");return Vue.openBlock(),Vue.createElementBlock("div",l,[Vue.createVNode(t,{height:"700px"},{default:Vue.withCtx(()=>[Vue.createElementVNode("code",null,[Vue.createElementVNode("pre",c," "+Vue.toDisplayString(Vue.unref(e)),1)])]),_:1}),Vue.createVNode(n,{"row-key":"id",data:Vue.unref(e),columns:Vue.unref(o)},null,8,["data","columns"])])}}});export{V as _};
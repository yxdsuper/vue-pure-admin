import{s as v,a as x}from"./vue-virtual-scroller.esm.js";import{d as y,r as d,G as g,c as _,g as w,n as z,h as l,i as I,j as o,w as m,u as p,aj as V,t as C,_ as b}from"./index.js";const j={class:"dynamic-scroller-demo"},k={class:"flex-ac mb-4 shadow-2xl"},B={class:"text-center"},N=y({__name:"horizontal",setup(S){const n=d([]),a=d("");for(let e=0;e<800;e++)n.value.push({id:e});const u=g(()=>{if(!a.value)return n.value;const e=a.value;return n.value.filter(s=>s.id==e)});return(e,s)=>{const h=_("el-input"),f=_("IconifyIconOnline");return w(),z("div",j,[l("div",k,[I(" 水平模式 horizontal "),o(h,{class:"mr-2 !w-[1/1.5]",clearable:"",modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=t=>a.value=t),placeholder:"Filter...",style:{width:"300px"}},null,8,["modelValue"])]),o(p(x),{items:u.value,"min-item-size":54,direction:"horizontal",class:"scroller"},{default:m(({item:t,index:i,active:c})=>{var r;return[o(p(v),{item:t,active:c,"size-dependencies":[t.id],"data-index":i,"data-active":c,title:`Click to change message ${i}`,style:V({width:`${Math.max(130,Math.round(((r=t.id)==null?void 0:r.length)/20*20))}px`}),class:"message"},{default:m(()=>[l("div",null,[o(f,{icon:"openmoji:beaming-face-with-smiling-eyes",width:"40"}),l("p",B,C(t.id),1)])]),_:2},1032,["item","active","size-dependencies","data-index","data-active","title","style"])]}),_:1},8,["items"])])}}});const O=b(N,[["__scopeId","data-v-c066a931"]]);export{O as default};
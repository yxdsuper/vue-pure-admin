import{u as n}from"./app.js";import{d as o,ab as i,G as l,r as p,az as m,X as u,g as h,n as f,aB as d}from"./index.js";const b=o({__name:"Pie",setup(k){const{isDark:t}=i(),r=l(()=>t.value?"dark":"light"),e=p(null),{setOptions:s,resize:c}=m(e,{theme:r});return s({tooltip:{trigger:"item"},legend:{icon:"circle",right:!0},series:[{name:"Github信息",type:"pie",top:"20%",radius:"80%",center:["40%","50%"],color:["#e6a23c","#f56c6c","#53a7ff"],data:[{value:400,name:"watchers"},{value:1600,name:"forks"},{value:7200,name:"star"}]}]},{name:"click",callback:a=>{}},{type:"zrender",name:"click",callback:a=>{}}),u(()=>n().getSidebarStatus,()=>{d(600).then(()=>c())}),(a,_)=>(h(),f("div",{ref_key:"pieChartRef",ref:e,style:{width:"100%",height:"35vh"}},null,512))}});export{b as _};
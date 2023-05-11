import{m as b}from"./message-9ae1daa3.js";import{b as V}from"./system-13d4d7cb.js";import"./index-c61a73ff.js";function W(){const i=Vue.reactive({username:"",mobile:"",status:""}),r=Vue.ref([]),n=Vue.ref(!0),a=Vue.ref({}),o=Vue.reactive({total:0,pageSize:10,currentPage:1,background:!0}),s=[{label:"序号",type:"index",width:70,fixed:"left"},{label:"用户编号",prop:"id",minWidth:130},{label:"用户名称",prop:"username",minWidth:130},{label:"用户昵称",prop:"nickname",minWidth:130},{label:"性别",prop:"sex",minWidth:90,cellRenderer:({row:e,props:t})=>Vue.createVNode(Vue.resolveComponent("el-tag"),{size:t.size,type:e.sex===1?"danger":"",effect:"plain"},{default:()=>[e.sex===1?"女":"男"]})},{label:"部门",prop:"dept",minWidth:90,formatter:({dept:e})=>e.name},{label:"手机号码",prop:"mobile",minWidth:90},{label:"状态",prop:"status",minWidth:90,cellRenderer:e=>{var t;return Vue.createVNode(Vue.resolveComponent("el-switch"),{size:e.props.size==="small"?"small":"default",loading:(t=a.value[e.index])==null?void 0:t.loading,modelValue:e.row.status,"onUpdate:modelValue":v=>e.row.status=v,"active-value":1,"inactive-value":0,"active-text":"已开启","inactive-text":"已关闭","inline-prompt":!0,onChange:()=>c(e)},null)}},{label:"创建时间",minWidth:90,prop:"createTime",formatter:({createTime:e})=>dayjs(e).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:180,slot:"operation"}],u=Vue.computed(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]);function c({row:e,index:t}){ElementPlus.ElMessageBox.confirm(`确认要<strong>${e.status===0?"停用":"启用"}</strong><strong style='color:var(--el-color-primary)'>${e.username}</strong>用户吗?`,"系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{a.value[t]=Object.assign({},a.value[t],{loading:!0}),setTimeout(()=>{a.value[t]=Object.assign({},a.value[t],{loading:!1}),b("已成功修改用户状态",{type:"success"})},300)}).catch(()=>{e.status===0?e.status=1:e.status=0})}function d(e){}function m(e){}function p(e){}function g(e){}function h(e){}async function l(){n.value=!0;const{data:e}=await V();r.value=e.list,o.total=e.total,setTimeout(()=>{n.value=!1},500)}const f=e=>{e&&(e.resetFields(),l())};return Vue.onMounted(()=>{l()}),{form:i,loading:n,columns:s,dataList:r,pagination:o,buttonClass:u,onSearch:l,resetForm:f,handleUpdate:d,handleDelete:m,handleSizeChange:p,handleCurrentChange:g,handleSelectionChange:h}}export{W as useUser};

webpackJsonp([83],{"By7+":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("mvHQ"),a=i.n(s),n=i("Au9i"),o=(i.n(n),i("y3MK")),c=i.n(o);e.default={name:"load",data:function(){return{click_state:!0,is_setBtn:!1,getBtn:"获取",time:60,yzm:"666666",tel:"",yqm:"",confirm_psw:"",clause:"1"}},methods:{reg_fn:function(){var t=this;return this.yzm?this.tel?void this.$store.dispatch("forgetPassword",{data:"data="+a()({mobile:this.tel,editcode:this.yzm,newpassword:this.psw}),fn:function(e,i){switch(e){case 200:var s=Object(n.Toast)("修改成功");setTimeout(function(){s.close(),t.$router.go(-1)},2e3);break;case-1:Object(n.Toast)(i);break;default:Object(n.Toast)("请求出错")}}}):(Object(n.Toast)("请输入新的手机号"),!1):(Object(n.Toast)("请输入验证码"),!1)},getCode:function(){var t=this;return""==this.tel?(Object(n.Toast)("请输入手机号码"),!1):/^1[3578]\d{9}$/.test(this.tel)?void(this.click_state&&(this.click_state=!1,this.$store.dispatch("verificationCode",{data:"data="+a()({mobile:this.tel,type:"MODIFYPWD"}),fn:function(e,i){switch(e){case 200:t.countDown(i.limit_time),Object(n.Toast)("验证码获取成功");break;case-1:Object(n.Toast)(i),t.click_state=!0;break;default:Object(n.Toast)("请求出错"),t.click_state=!0}}}))):(Object(n.Toast)("您输入的手机号码有误"),!1)},zeroFill:function(t){return t<10?"0"+t:t},countDown:function(t){var e=this;setTimeout(function(){--t<1?(t=60,e.getBtn="重新获取",e.is_setBtn=!1,e.click_state=!0):(e.is_setBtn=!0,e.getBtn=e.zeroFill(t)+"S 后可重新获取",e.countDown(t))},1e3)},target_handle:function(t){return t.stopPropagation(),t.preventDefault(),!1}},components:{Toast:n.Toast,Checklist:n.Checklist,rHeader:c.a}}},RlrC:function(t,e){},V0HP:function(t,e,i){var s=i("VU/8")(i("By7+"),i("izP/"),function(t){i("RlrC")},"data-v-52583c9c",null);t.exports=s.exports},"izP/":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"h100p bg-f0",attrs:{id:"load"}},[i("r-header",{attrs:{is_r:!0,title:"更改手机号"}}),t._v(" "),i("div",{staticClass:"mui-content"},[i("form",{staticClass:"mui-input-group",attrs:{id:"regist-form"}},[i("div",{staticClass:"mui-input-row"},[i("label",{attrs:{for:"account"}},[t._v("新的手机号")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],staticClass:"mui-input-clear mui-input",attrs:{id:"account",type:"text",placeholder:"请输入手机号"},domProps:{value:t.tel},on:{input:function(e){e.target.composing||(t.tel=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"mui-input-row"},[i("label",{attrs:{for:"yzm"}},[t._v("验证码")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.yzm,expression:"yzm"}],staticClass:"mui-input-clear mui-input password",attrs:{id:"yzm",type:"text",placeholder:"请输入验证码"},domProps:{value:t.yzm},on:{input:function(e){e.target.composing||(t.yzm=e.target.value)}}}),t._v(" "),i("input",{staticClass:"get-msg mui-btn mui-btn-warning mui-btn-outlined",class:{getCode:t.is_setBtn},attrs:{type:"button",value:t.getBtn},on:{click:function(e){t.getCode()}}})])]),t._v(" "),i("div",{staticClass:"mui-content-padded"},[i("button",{staticClass:"mui-btn mui-btn-block mui-button",attrs:{id:"login"},on:{click:function(e){t.reg_fn()}}},[t._v("确认修改")])])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=83.a7010d138ae65869bb4d.js.map
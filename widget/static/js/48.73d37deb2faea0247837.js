webpackJsonp([48],{"3IT4":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("mvHQ"),a=s.n(i),n=s("Au9i"),o=(s.n(n),s("pDNl")),r=s.n(o),c=s("rHil"),u=s.n(c),l=s("ABCa"),d=s.n(l);e.default={name:"load",data:function(){return{users:localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):"",tel:"",psw:"",title:"登录",screenHeight:"",newHeight:0}},components:{Toast:n.Toast,XInput:r.a,Group:u.a,XHeader:d.a},methods:{signIn:function(){var t=this;return""==this.tel?(Object(n.Toast)("请输入手机号码"),!1):/^1[3456789]\d{9}$/.test(this.tel)?this.psw?void this.$store.dispatch("signIn",{data:"data="+a()({mobile:this.tel,password:this.psw}),fn:function(e,s){switch(e){case 200:Object(n.Toast)("登录成功");if(!("my/set".indexOf(t.$route.query.redirect)>-1)){t.$router.push(t.$route.query.redirect||"/");break}t.$router.push("/my");case-1:Object(n.Toast)(s);break;default:Object(n.Toast)("请求出错")}}}):(Object(n.Toast)("请输入密码"),!1):(Object(n.Toast)("您输入的手机号码有误"),!1)},back:function(){this.$router.push("/index")}},mounted:function(){},computed:{},directives:{focus:{inserted:function(t){t.focus()}}},watch:{}}},Jpk9:function(t,e){},U0DT:function(t,e,s){var i=s("VU/8")(s("3IT4"),s("WQDV"),function(t){s("gGUw"),s("Jpk9")},"data-v-2f6cd81c",null);t.exports=i.exports},WQDV:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-f0",attrs:{id:"load"}},[s("x-header",{staticClass:"mui-bar mui-bar-nav",attrs:{"left-options":{preventGoBack:!0,backText:""}},on:{"on-click-back":t.back}},[t._v("登录")]),t._v(" "),s("div",{staticClass:"mui-content fixed-load"},[t._m(0),t._v(" "),s("form",{staticClass:"mui-input-group",attrs:{id:"login-form"}},[s("group",[s("x-input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{placeholder:"请输入账号",id:"account",type:"number",max:13,"is-type":"china-mobile"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}}),t._v(" "),s("x-input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{id:"password",name:"username",type:"password",placeholder:"请输入密码"},model:{value:t.psw,callback:function(e){t.psw=e},expression:"psw"}})],1)],1),t._v(" "),s("div",{staticClass:"mui-content-padded"},[s("button",{staticClass:"mui-btn mui-btn-block mui-button",attrs:{id:"login"},on:{click:function(e){t.signIn()}}},[t._v("登录")]),t._v(" "),s("div",{staticClass:"link-area"},[s("router-link",{staticClass:"fl",attrs:{to:"/my/login/regist",id:"reg"}},[t._v("注册账号")]),t._v(" "),s("router-link",{staticClass:"mui-pull-right",attrs:{to:"/my/login/forgetPassword",id:"forgetPassword"}},[t._v("忘记密码")])],1)])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"mui-table-view"},[s("li",{staticClass:"mui-table-view-cell mui-media"},[s("i",{staticClass:"mui-media-object mui-pull-right iconfont icon-touxiang"}),t._v(" "),s("div",{staticClass:"mui-media-body"},[t._v("\n                        hello,\n                        "),s("p",{staticClass:"mui-ellipsis"},[t._v("欢迎登录")])])])])}]}},gGUw:function(t,e){}});
//# sourceMappingURL=48.73d37deb2faea0247837.js.map
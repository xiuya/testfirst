webpackJsonp([9],{"354J":function(t,e,a){var n=a("VU/8")(a("3RVQ"),a("r3Lk"),function(t){a("bysm"),a("Vt5L")},"data-v-417fb8ee",null);t.exports=n.exports},"3RVQ":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mvHQ"),i=a.n(n),l=a("ABCa"),s=a.n(l),o=a("hp79"),r=a.n(o),u=a("aTeQ"),c=a.n(u),d=a("rHil"),p=a.n(d);e.default={name:"set",components:{XHeader:s.a,InlineXSwitch:r.a,XSwitch:c.a,Group:p.a},data:function(){return{users:localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):"",switcherchoice:!0,mobile:"",border:"",edit:!1,versionNumber:0,value:!1}},mounted:function(){var t=this;window.plus,localStorage.setItem("update","true");var e=setInterval(function(){"true"==localStorage.getItem("update")&&(clearInterval(e),t.updateapp(0))},500)},filters:{regMobile:function(t){return t?(t.length>7&&(e=t.substr(0,3)+"****"+t.substr(7)),e):"";var e}},methods:{handleChange:function(t){},defalute:function(t){t.preventDefault(),t.stopPropagation()},signout:function(){this.$store.dispatch("signOut"),this.$router.push("/my/login")},focusnick:function(){this.edit=!0,this.border="border"},blurnick:function(){this.edit=!1,this.border=""},updateapp:function(t){var e=this,a="",n=(navigator.userAgent.toLowerCase(),Boolean(navigator.userAgent.match(/android/gi))),l=Boolean(navigator.userAgent.match(/iphone|ipod/gi));Boolean(navigator.userAgent.match(/ipad/gi)),Boolean(navigator.userAgent.match(/MicroMessenger/gi));l?a=1:n&&(a=0),this.$axios.post("api/api/config","data="+i()({apptype:a})).then(function(a){if(1==a.code){var n=a.result.appVersion;n>e.versionNumber?mui.confirm(a.result.content,"版本更新",["取消","立即更新"],function(t){1==t.index&&("Android"==plus.os.name?(e.downWgt(a.result.appUrl),e.versionNumber=n):a.result.appUrl.indexOf("wgt")>-1?(e.downWgt(a.result.appUrl),e.versionNumber=n):plus.runtime.openURL("itms-apps://"+a.result.app_store_url))}):1==t&&(mui.toast("已是最新版本~"),localStorage.removeItem("update"))}else mui.toast("检测更新失败！")})},clear_emory:function(){var t=this;mui.confirm("清理缓存会清理所有缓存数据，您确定要清理吗？","",["确认","取消"],function(e){0==e.index&&(t.$store.dispatch("signOut",{}),localStorage.clear(),plus.storage.clear(),plus.cache.clear(function(){mui.toast("清理成功"),setTimeout(function(){t.$router.push("/index")},500)}))})},downWgt:function(t){var e=this,a=plus.downloader.createDownload(t,{filename:"_doc/update/"});a.addEventListener("statechanged",function(t,n){if(a)switch(t.state){case 0:e.download.isdownloading=!0,e.download.downstate="即将开始";break;case 2:e.download.downstate="已连接到服务器";break;case 3:e.download.downstate="正在下载",e.download.currentsize=(t.downloadedSize/1024/1024).toFixed(1)+"MB",e.download.totalsize=(t.totalSize/1024/1024).toFixed(1)+"MB",e.download.progress=Math.round(t.downloadedSize/t.totalSize*100)+"%";break;case 4:e.download.downstate="下载完成",e.download.isdownloading=!1,e.installWgt(t.filename)}}),a.start()},installWgt:function(t){plus.nativeUI.showWaiting("正在安装..."),plus.runtime.install(t,{},function(){plus.nativeUI.closeWaiting(),plus.nativeUI.alert("更新完成！",function(){plus.runtime.restart()}),localStorage.removeItem("update")},function(t){plus.nativeUI.closeWaiting(),plus.nativeUI.alert("安装失败["+t.code+"]："+t.message)})}}}},NsPU:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"inline-x-switch weui-switch",attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.currentValue)?t._i(t.currentValue,null)>-1:t.currentValue},on:{change:function(e){var a=t.currentValue,n=e.target,i=!!n.checked;if(Array.isArray(a)){var l=t._i(a,null);n.checked?l<0&&(t.currentValue=a.concat([null])):l>-1&&(t.currentValue=a.slice(0,l).concat(a.slice(l+1)))}else t.currentValue=i}}})},staticRenderFns:[]}},Vt5L:function(t,e){},aTeQ:function(t,e,a){var n=a("VU/8")(a("zoSc"),a("p6mH"),function(t){a("ntbr")},null,null);t.exports=n.exports},bysm:function(t,e){},hp79:function(t,e,a){var n=a("VU/8")(a("r5FV"),a("NsPU"),function(t){a("wGyv")},null,null);t.exports=n.exports},ntbr:function(t,e){},p6mH:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vux-x-switch weui-cell weui-cell_switch"},[a("div",{staticClass:"weui-cell__bd"},[a("label",{staticClass:"weui-label",class:t.labelClass,style:t.labelStyle,domProps:{innerHTML:t._s(t.title)}}),t._v(" "),t.inlineDesc?a("inline-desc",[t._v(t._s(t.inlineDesc))]):t._e()],1),t._v(" "),a("div",{staticClass:"weui-cell__ft"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-switch",attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.currentValue)?t._i(t.currentValue,null)>-1:t.currentValue},on:{change:function(e){var a=t.currentValue,n=e.target,i=!!n.checked;if(Array.isArray(a)){var l=t._i(a,null);n.checked?l<0&&(t.currentValue=a.concat([null])):l>-1&&(t.currentValue=a.slice(0,l).concat(a.slice(l+1)))}else t.currentValue=i}}}),t._v(" "),t.preventDefault?a("div",{staticClass:"vux-x-switch-overlay",on:{click:t.onClick}}):t._e()])])},staticRenderFns:[]}},r3Lk:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h100p bg-f0",attrs:{id:"set"}},[a("x-header",{attrs:{"left-options":{backText:""}}},[t._v("设置")]),t._v(" "),a("div",{staticClass:"mui-content content fixed-content"},[a("ul",{staticClass:"mui-table-view"},[a("group",[a("x-switch",{attrs:{title:"消息推送"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),a("li",{staticClass:"mui-table-view-cell",on:{click:t.clear_emory}},[t._v("\n\t\t\t\t\t\t清除缓存\n\t\t\t\t\t\t"),a("i",{staticClass:"iconfont icon-youjiantou mui-pull-right"}),t._v(" "),a("span",{staticClass:"mui-pull-right"})])],1),t._v(" "),a("ul",{staticClass:"mui-table-view"},[a("li",{staticClass:"mui-table-view-cell",on:{click:function(e){t.updateapp(0)}}},[t._v("\n\t\t\t\t检测更新\n\t\t\t\t"),a("i",{staticClass:"iconfont icon-youjiantou mui-pull-right"}),t._v(" "),a("span",{staticClass:"mui-pull-right"},[t._v("V1.0.1")])])]),t._v(" "),a("ul",{staticClass:"mui-table-view"},[a("li",{staticClass:"mui-table-view-cell"},[t._v("\n\t\t\t\t最近登录记录\n\t\t\t\t"),a("span",{staticClass:"mui-pull-right"},[t._v(t._s(t.moment.unix(t.users.last_login_time||0).format("YYYY-MM-DD hh:mm:ss")))])]),t._v(" "),a("li",{staticClass:"mui-table-view-cell"},[a("router-link",{attrs:{to:{path:"/my/login/forgetPassword",query:{psw:"修改密码"}}}},[t._v("\n\t\t\t\t\t修改密码\n\t\t\t\t\t"),a("i",{staticClass:"iconfont icon-youjiantou mui-pull-right"})])],1)]),t._v(" "),a("ul",{staticClass:"mui-table-view"},[a("li",{staticClass:"mui-table-view-cell about"},[a("router-link",{attrs:{to:"/my/aboutus"}},[t._v("\n\t\t\t\t\t关于"),a("i",{staticClass:"iconfont icon-youjiantou mui-pull-right"})])],1)]),t._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.users,expression:"users"}],staticClass:"mui-table-view outlogin"},[a("li",{staticClass:"mui-table-view-cell outload",on:{click:function(e){t.signout()}}},[t._v("退出登录")])])])],1)},staticRenderFns:[]}},r5FV:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"x-switch",methods:{toBoolean:function(t){return this.valueMap?1===this.valueMap.indexOf(t):t},toRaw:function(t){return this.valueMap?this.valueMap[t?1:0]:t}},props:{disabled:Boolean,value:{type:[Boolean,String,Number],default:!1},valueMap:{type:Array,default:function(){return[!1,!0]}}},data:function(){return{currentValue:this.toBoolean(this.value)}},watch:{currentValue:function(t){var e=this.toRaw(t);this.$emit("input",e),this.$emit("on-change",e)},value:function(t){this.currentValue=this.toBoolean(t)}}}},wGyv:function(t,e){},zoSc:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("kbG3"),i=a.n(n),l=a("wmxo");e.default={name:"x-switch",components:{InlineDesc:i.a},computed:{labelStyle:function(){var t=/<\/?[^>]*>/.test(this.title),e=Math.min(t?5:this.title.length+1,14)+"em";return Object(l.a)({display:"block",width:this.$parent.labelWidth||e,textAlign:this.$parent.labelAlign})},labelClass:function(){return{"vux-cell-justify":this.$parent&&"justify"===this.$parent.labelAlign}}},methods:{onClick:function(){this.$emit("on-click",!this.currentValue,this.currentValue)},toBoolean:function(t){return this.valueMap?1===this.valueMap.indexOf(t):t},toRaw:function(t){return this.valueMap?this.valueMap[t?1:0]:t}},props:{title:{type:String,required:!0},disabled:Boolean,value:{type:[Boolean,String,Number],default:!1},inlineDesc:[String,Boolean,Number],preventDefault:Boolean,valueMap:{type:Array,default:function(){return[!1,!0]}}},data:function(){return{currentValue:this.toBoolean(this.value)}},watch:{currentValue:function(t){var e=this.toRaw(t);this.$emit("input",e),this.$emit("on-change",e)},value:function(t){this.currentValue=this.toBoolean(t)}}}}});
//# sourceMappingURL=9.41ec6732130132d70447.js.map
webpackJsonp([43],{"91oM":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("mvHQ"),e=i.n(a),n=i("y3MK"),o=i.n(n),c=i("Au9i"),d=(i.n(c),i("NXWw")),r=i("62KO"),l=i.n(r);s.default={name:"my-post-detail",data:function(){return{users:localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):"",defaultImg:'this.src="'+i("QKcC")+'"',title:"详情",is_r:!0,msgdata:"",textmodel:"",readonly:!0,id:"",touserid:"",leftonoff:!1,dianzan:!0,show5:!1}},components:{ConfirmPlugin:d.a,Confirm:l.a,iHeader:o.a},created:function(){},mounted:function(){this.getlist()},methods:{onConfirm5:function(t){this.buttonAddTodo()},onShow5:function(){},onConfirm:function(t){t&&alert(t)},onCancel:function(){console.log("on cancel")},getlist:function(){var t=this;this.$axios.post("/api/Post/post_detail","data="+e()({session_id:this.users.session_id,userId:this.users.userId,post_id:this.$route.query.id})).then(function(s){200==s.code&&(t.msgdata=s.data)}).catch(function(t){throw t})},buttonAddTodo:function(t,s){var i=this;return this.show5=!0,this.textmodel?this.touserid?void this.$axios.post("/api/Post/do_comment","data="+e()({session_id:this.users.session_id,userId:this.users.userId,post_id:this.id,content:this.textmodel,pid:this.touserid})).then(function(t){200==t.code?(i.getlist(),i.textmodel="",Object(c.Toast)(t.msg),i.touserid=""):Object(c.Toast)(t.msg)}).catch(function(t){throw t}):(this.$axios.post("/api/Post/do_comment","data="+e()({session_id:this.users.session_id,userId:this.users.userId,post_id:this.id,content:this.textmodel})).then(function(t){200==t.code?(i.getlist(),i.textmodel="",Object(c.Toast)(t.msg)):Object(c.Toast)(t.msg)}).catch(function(t){throw t}),!1):(Object(c.Toast)("请输入内容"),!1)},buttonTodo:function(t,s,i){var a=this;return this.id=t,s&&(this.touserid=s),this.leftonoff=!1,1==i?(c.MessageBox.confirm("确定删除该评论?").then(function(t){a.$axios.post("/api/Post/del_my_comment","data="+e()({session_id:a.users.session_id,userId:a.users.userId,id:a.touserid})).then(function(t){200==t.code?(Object(c.Toast)(t.msg),a.touserid="",a.getlist()):Object(c.Toast)(t.msg)}).catch(function(t){throw t})}),!1):(this.show5=!0,!1)},leftid:function(){var t=localStorage.getItem("dianzan");"true"==t?this.dianzan=!0:"false"==t&&(this.dianzan=!1),this.leftonoff=!this.leftonoff},zan:function(t,s){var i=this;this.$axios.post("/api/Post/do_likenum","data="+e()({session_id:this.users.session_id,userId:this.users.userId,post_id:t})).then(function(t){200==t.code?(i.leftonoff=!1,1==i.dianzan?(i.dianzan=!1,localStorage.setItem("dianzan",!1)):0==i.dianzan&&(i.dianzan=!1,localStorage.setItem("dianzan",!0)),i.getlist()):Object(c.Toast)(t.msg)}).catch(function(t){throw t})}},watch:{},directives:{focus:function(t,s){s.value&&t.focus()}}}},Tim3:function(t,s,i){var a=i("VU/8")(i("91oM"),i("qiwD"),function(t){i("wfga"),i("rDY+")},"data-v-5f2642f2",null);t.exports=a.exports},qiwD:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrap bg-f0",attrs:{id:"my-post-detail"}},[i("i-header",{attrs:{title:t.title,is_r:t.is_r}}),t._v(" "),i("div",{staticClass:"mui-table-view",attrs:{id:"my-post-content"}},[i("section",{staticClass:"li bg-f0 clearfix postli"},[i("div",{staticClass:"right-con "},[i("i",{staticClass:"lazy-c bg-f5 img-wrap-left"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.msgdata&&t.imgUrl+t.msgdata.detail.head_img,expression:"msgdata && (imgUrl+msgdata.detail.head_img)"}],attrs:{alt:"",onerror:t.defaultImg}})]),t._v(" "),i("div",{staticClass:"clearfix"},[t.msgdata.detail.nickname?i("a",{attrs:{href:"javascript:void(0);"}},[t._v(t._s(t.msgdata.detail.nickname))]):t._e(),t._v(" "),null==t.msgdata.detail.nickname?i("a",{attrs:{href:"javascript:void(0);"}},[t._v("匿名用户")]):t._e(),t._v(" "),i("div",{staticClass:"main-content-one",on:{click:function(s){t.show5=!0}}},[t._v(t._s(t.msgdata&&t.msgdata.detail.content))])]),t._v(" "),i("ul",{staticClass:"main-content-two clearfix"},t._l(t.msgdata.detail.images,function(s,a){return i("li",{key:a,staticClass:"lazy-c bg-f5 cont-two-li"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.msgdata.detail.images&&t.imgUrl+s,expression:"msgdata.detail.images && imgUrl+item"}],attrs:{alt:"","data-preview-src":"","data-preview-group":"1"}})])})),t._v(" "),i("div",{staticClass:"main-content-last clearfix"},[i("span",{staticClass:"fl time-updata"},[t._v("\n                                        "+t._s(t.moment.unix(t.msgdata&&t.msgdata.detail.addtime).format("ll HH:mm "))+"\n                                    ")]),t._v(" "),i("span",{staticClass:" right-content"},[i("div",{staticClass:"left-comment ",class:t.leftonoff?"":"left-commenthide"},[t.dianzan?i("span",[i("i",{staticClass:"iconfont icon-dianzanb",on:{click:function(s){t.zan(t.msgdata.detail.id)}}}),t._v("赞")]):t._e(),t._v(" "),t.dianzan?t._e():i("span",{on:{click:function(s){t.zan(t.msgdata.detail.id)}}},[i("i",{staticClass:"iconfont icon-dianzanb"}),t._v("取消")]),t._v(" "),i("span",{on:{click:function(s){t.buttonTodo(t.msgdata.detail.id)}}},[i("i",{staticClass:"iconfont icon-pinglun1"}),t._v("评论")])]),t._v(" "),i("div",{staticClass:"right-comment ",on:{click:function(s){t.leftid()}}},[i("i",{staticClass:"iconfont icon-ttpodicon"})])])])]),t._v(" "),i("div",{staticClass:"main-content-add"},[i("ul",{staticClass:"main-content-add-con"},[i("div",{staticClass:"dianzan"},[i("i",{staticClass:"iconfont icon-dianzanb"}),t._v("已有"+t._s(t.msgdata&&t.msgdata.detail.click_num)+"人点赞")]),t._v(" "),t._l(t.msgdata&&t.msgdata.comment,function(s,a){return i("li",{key:a.id,staticClass:"content-com",on:{click:function(i){t.buttonTodo(t.msgdata.detail.id,s.id,s.is_my_comment)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgUrl+s.head_img,expression:"imgUrl+item.head_img"}],staticClass:"common-img",attrs:{alt:"",onerror:t.defaultImg}}),t._v(" "),i("div",{staticClass:"content-inner clearfix"},[i("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(s.nickname))]),t._v(" "),s.nickname?t._e():i("a",{attrs:{href:"javascript:void(0);"}},[t._v("匿名用户")]),t._v(" "),i("span",{staticClass:"fr createtime"},[t._v(t._s(t.moment.unix(s.create_time).format("LL  H:mm ")))])]),t._v(" "),i("div",{staticClass:"inner-wrap"},[s.to_user?i("span",[t._v("回复"),i("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(s.to_user))]),t._v(":")]):t._e(),t._v(t._s(s.content)+"\n                                        ")])])})],2)])])]),t._v(" "),i("confirm",{ref:"confirm5",on:{"on-cancel":t.onCancel,"on-confirm":t.onConfirm5,"on-show":t.onShow5},model:{value:t.show5,callback:function(s){t.show5=s},expression:"show5"}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textmodel,expression:"textmodel"}],attrs:{name:"",id:"",cols:"16",rows:"5"},domProps:{value:t.textmodel},on:{input:function(s){s.target.composing||(t.textmodel=s.target.value)}}})])],1)},staticRenderFns:[]}},"rDY+":function(t,s){},wfga:function(t,s){}});
//# sourceMappingURL=43.418969882baf8f43ac65.js.map
webpackJsonp([21],{"3qrQ":function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"post"}},[i("x-header",{staticClass:"fixed-top",attrs:{title:"发帖","left-options":{backText:""}}},[i("a",{attrs:{slot:"right"},on:{click:t.post_handle},slot:"right"},[i("i",{staticClass:"iconfont icon-add-more",staticStyle:{top:"23px",position:"relative"}})])]),t._v(" "),i("div",{staticClass:"post-main content ",style:{"-webkit-overflow-scrolling":t.scrollMode}},[i("div",{staticClass:"nav tab-header  c-ter bg-fff "},[i("div",{staticClass:"tab-header-item",class:"kh"==t.tabType?"tab-header-on":"",on:{click:function(s){t.tab_handle("kh")}}},[t._v("客户")]),t._v(" "),i("div",{staticClass:"tab-header-item",class:"jl"==t.tabType?"tab-header-on":"",on:{click:function(s){t.tab_handle("jl")}}},[t._v("经理")])]),t._v(" "),i("mt-tab-container",{staticClass:"bg-dh",attrs:{swipeable:!0},model:{value:t.tabType,callback:function(s){t.tabType=s},expression:"tabType"}},[i("mt-tab-container-item",{attrs:{id:"kh"}},[i("div",{staticStyle:{height:"100%",overflow:"scroll"}},[i("mt-loadmore",{ref:"khLoadmore",attrs:{"top-method":t.khLoadTop,"bottom-method":t.khLoadBottom,"bottom-all-loaded":t.allLoaded,"auto-fill":!1,topPullText:"↓下拉刷新",topLoadingText:"刷新中 ...",topDropText:"↑释放更新"}},[i("ul",{staticClass:"tab-item"},t._l(t.data,function(s,a){return i("li",{key:a,staticClass:"bg-fff"},[i("div",{staticClass:"tab-item-content"},[i("router-link",{staticClass:"itemwrap",attrs:{to:{path:"/post/post-detail",query:{id:s.id}},tag:"div"}},[i("h4",{staticClass:"tab-item-title one-1"},[i("span",{staticClass:"c-ff6800"},[t._v(t._s(s.product_type))]),t._v(t._s(s.title)+"\n                                    "),i("i",{staticClass:"iconfont icon-youjiantou"})])]),t._v(" "),i("div",{staticClass:"tab-item-msg flex"},[i("div",{staticClass:"tab-item-sq"},[i("p",{staticClass:"c-ff6800 fs-22"},[t._v(t._s(s.apply_money))]),t._v(" "),i("span",{staticClass:"fs-14 c-888"},[t._v("申请金额")])]),t._v(" "),i("div",{staticClass:"tab-item-sq"},[i("p",{staticClass:"c-ff6800 fs-22"},[t._v(t._s(s.loan_limit))]),t._v(" "),i("span",{staticClass:"fs-14 c-888"},[t._v("借款期限")])]),t._v(" "),i("div",{staticClass:"tab-item-btn r-ter"},[i("button",{directives:[{name:"show",rawName:"v-show",value:0!=s.bid_num&&0==s.is_buy,expression:"i.bid_num!=0&&i.is_buy==0"}],staticClass:"btn-bg1 c-fff fs-16",on:{click:function(i){t.getordernow(s.grab_icon,s.id,a)}}},[t._v("抢单")]),t._v(" "),i("button",{directives:[{name:"show",rawName:"v-show",value:0!=s.bid_num&&1==s.is_buy,expression:"i.bid_num!=0&&i.is_buy==1"}],staticClass:"btn-bg1 c-fff fs-16 finishorder"},[t._v("已抢单")]),t._v(" "),i("button",{directives:[{name:"show",rawName:"v-show",value:0==s.bid_num,expression:"i.bid_num==0"}],staticClass:"btn-bg1 c-fff fs-16 finishorder"},[t._v("已抢完")]),t._v(" "),i("p",{staticClass:"c-666 fs-12"},[t._v("可抢次数："),i("span",{staticClass:"c-ff6800"},[t._v(t._s(s.bid_num))]),t._v("次")])])])],1)])}))])],1)]),t._v(" "),i("mt-tab-container-item",{attrs:{id:"jl"}},[i("div",{staticStyle:{height:"100%",overflow:"scroll"}},[i("mt-loadmore",{ref:"jlLoadmore",attrs:{"top-method":t.jlLoadTop,"bottom-method":t.jlLoadBottom,"bottom-all-loaded":t.allLoaded,"auto-fill":!1,topDistance:0}},[i("ul",{staticClass:"tab-item"},t._l(t.datajl,function(s,a){return i("li",{key:a,staticClass:"bg-fff"},[i("div",{staticClass:"tab-item-content"},[i("router-link",{staticClass:"itemwrap",attrs:{to:{path:"/post/post-detail",query:{id:s.id}},tag:"div"}},[i("h4",{staticClass:"tab-item-title one-1"},[i("span",{staticClass:"c-ff6800"},[t._v(t._s(s.product_type))]),t._v(t._s(s.title)+"\n                                    "),i("i",{staticClass:"iconfont icon-youjiantou mui-pull-right"})])]),t._v(" "),i("div",{staticClass:"tab-item-msg flex"},[i("div",{staticClass:"tab-item-sq"},[i("p",{staticClass:"c-ff6800 fs-22"},[t._v(t._s(s.apply_money))]),t._v(" "),i("span",{staticClass:"fs-14 c-888"},[t._v("申请金额")])]),t._v(" "),i("div",{staticClass:"tab-item-sq"},[i("p",{staticClass:"c-ff6800 fs-22"},[t._v(t._s(s.loan_limit))]),t._v(" "),i("span",{staticClass:"fs-14 c-888"},[t._v("申请日期")])]),t._v(" "),i("div",{staticClass:"tab-item-btn r-ter"},[i("button",{directives:[{name:"show",rawName:"v-show",value:0!=s.bid_num&&0==s.is_buy,expression:"i.bid_num!=0&&i.is_buy==0"}],staticClass:"btn-bg1 c-fff fs-16",on:{click:function(i){t.getordernow(s.grab_icon,s.id)}}},[t._v("立即抢单")]),t._v(" "),i("button",{directives:[{name:"show",rawName:"v-show",value:0!=s.bid_num&&1==s.is_buy,expression:"i.bid_num!=0&&i.is_buy==1"}],staticClass:"btn-bg1 c-fff fs-16 finishorder"},[t._v("已抢单")]),t._v(" "),i("button",{directives:[{name:"show",rawName:"v-show",value:0==s.bid_num,expression:"i.bid_num==0"}],staticClass:"btn-bg1 c-fff fs-16 finishorder"},[t._v("已抢完")]),t._v(" "),i("p",{staticClass:"c-666 fs-12"},[t._v("可抢次数："),i("span",{staticClass:"c-ff6800"},[t._v(t._s(s.bid_num))]),t._v("次")])])])],1)])}))])],1)])],1)],1),t._v(" "),i("mt-popup",{attrs:{modal:"true",position:"top"},model:{value:t.popupVisible,callback:function(s){t.popupVisible=s},expression:"popupVisible"}},[t._v(t._s(t.reloadState))])],1)},staticRenderFns:[]}},"5p4/":function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"header clearfix",attrs:{id:"header-p"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.is_r,expression:"is_r"}],staticClass:"left-fanhui"},[i("a",{staticClass:"back",attrs:{href:"javascript:void(0);"},on:{click:function(s){t.back()}}},[i("span",{staticClass:"iconfont icon-fanhui"})])]),t._v(" "),i("div",{staticClass:"header-entry"},[i("div",{staticClass:"fl header-title"},[t._v(t._s(t.title))]),t._v(" "),i("span",{staticClass:"iconfont icon",class:t.cls_icon,on:{click:t.icon_handle}})])])},staticRenderFns:[]}},U6mT:function(t,s,i){var a=i("VU/8")(i("Ws+p"),i("3qrQ"),function(t){i("piGQ"),i("k6HH")},"data-v-004dc1c8",null);t.exports=a.exports},"Ws+p":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Dd8w"),e=i.n(a),o=i("mvHQ"),n=i.n(o),l=i("pEYh"),r=i.n(l),c=i("Au9i"),d=(i.n(c),i("ABCa")),u=i.n(d);s.default={name:"post",components:{pHeader:r.a,Lazyload:c.Lazyload,TabContainer:c.TabContainer,TabContainerItem:c.TabContainerItem,LoadMore:c.LoadMore,Popup:c.Popup,XHeader:u.a},data:function(){return{users:localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):"",reloadState:"",tabType:"kh",popupVisible:!1,data:[],datajl:[],topStatus:"",bottomStatus:"",allLoaded:!1,scrollMode:"auto",bottomText:"",loading:!1,jlLoading:!1,totalpage:1,page:1,firstvisited:!1}},methods:{post_handle:function(){if("kh"==this.tabType){if("1"==this.users.is_manager)return Object(c.Toast)("请选择经理后发帖"),!1;this.$router.push("/post/post-content")}else if("jl"==this.tabType){if("1"!=this.users.is_manager)return Object(c.Toast)("请选择客户后发帖"),!1;this.$router.push("/post/post-content-manager")}},tab_handle:function(t){return this.tabType=t,"kh"==t?(this.firstvisited,this.getkhlist(),!1):"jl"==t?(this.firstvisited,this.getjllist(),!1):void 0},handleTopChange:function(t){console.log(t),this.topStatus=t},handleBottomChange:function(t){this.bottomStatus=t},khLoadTop:function(){this.page=1,this.getkhlist()},khLoadBottom:function(){this.page++,this.getkhlist()},jlLoadTop:function(){this.page=1,this.getjllist()},jlLoadBottom:function(){this.page++,this.getjllist()},getordernow:function(t,s,i){var a=this,e="<div class='alert-cost'>本次需要花费<br/>"+(Number(t)||0)+"金币</div>";c.MessageBox.confirm(e).then(function(t){a.$axios.post("/api/Loan_post/grab_loan_post","data="+n()({session_id:a.users.session_id,userId:a.users.userId,id:s})).then(function(t){200==t.code?(Object(c.Toast)("抢单成功"),console.log(i),a.data[i].is_buy=1,--a.data[i].bid_num,a.datajl[i].is_buy=1,--a.datajl[i].bid_num):Object(c.Toast)(t.msg)})})},getkhlist:function(){var t=this;this.$axios.post("/api/Loan_post/loan_post_list","data="+n()({session_id:this.users.session_id,userId:this.users.userId,type:"MEMBER",page:this.page})).then(function(s){200==s.code?t.$nextTick(function(){var t=this;this.data=e()({},this.data,s.data.list);var i=s.data.list.length;if($(".mint-loadmore-content").css("transform","translate3d(0,0,0)"),i<=s.data.pageSize&&($(".mint-loadmore-bottom").text("暂无更多数据"),this.allLoaded=!0),this.page>1)setTimeout(function(){t.popupVisible=!0,t.reloadState="加载成功",t.$refs.khLoadmore.onBottomLoaded()},1e3),setTimeout(function(){t.popupVisible=!1},2e3);else{if(1==this.firstvisited)return this.firstvisited=!1,!1;setTimeout(function(){t.popupVisible=!0,t.reloadState="刷新成功",t.$refs.khLoadmore.onTopLoaded()},1e3),setTimeout(function(){t.popupVisible=!1},2e3)}}):401==s.code&&t.$router.push("/my/login")})},getjllist:function(){var t=this;this.$axios.post("/api/Loan_post/loan_post_list","data="+n()({session_id:this.users.session_id,userId:this.users.userId,type:"LENDERS",page:this.page})).then(function(s){200==s.code&&t.$nextTick(function(){this.datajl=e()({},this.datajl,s.data.list);var t=this;if(s.data.list.length<=s.data.pageSize&&($(".mint-loadmore-bottom").text("暂无更多数据"),this.$refs.khLoadmore.onBottomLoaded(),this.allLoaded=!0),this.page>1)setTimeout(function(){t.popupVisible=!0,t.reloadState="加载成功",t.$refs.jlLoadmore.onBottomLoaded()},1e3),setTimeout(function(){t.popupVisible=!1},2e3);else{if(1==this.firstvisited)return this.firstvisited=!1,!1;setTimeout(function(){t.popupVisible=!0,t.reloadState="刷新成功",t.$refs.jlLoadmore.onTopLoaded()},1e3),setTimeout(function(){t.popupVisible=!1},2e3)}})})}},mounted:function(){this.firstvisited=!0,this.getkhlist()}}},k6HH:function(t,s){},or6V:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"header-p",data:function(){return{back:function(){this.$router.back()}}},created:function(){},methods:{icon_handle:function(){}},props:["title","cls_icon","is_r"]}},pEYh:function(t,s,i){var a=i("VU/8")(i("or6V"),i("5p4/"),function(t){i("yH+7")},"data-v-3c801dc9",null);t.exports=a.exports},piGQ:function(t,s){},"yH+7":function(t,s){}});
//# sourceMappingURL=21.8015002744514b45a298.js.map
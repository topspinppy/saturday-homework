webpackJsonp([1],{"1Zpq":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("img",{attrs:{src:"https://www.inboxsdk.com/images/logos/giphy.png",width:"200px"}}),t._v(" "),a("p",{staticClass:"title is-4"},[t._v("Giphy Search gif")]),t._v(" "),a("center",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input primary outline",staticStyle:{width:"50%"},attrs:{type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),a("button",{staticClass:"button is-danger is-outlined",on:{click:function(e){t.Search()}}},[t._v("Search")])]),t._v(" "),a("div",{staticClass:"hero-body"},[t.loading?a("p",{staticClass:"title is-4"},[t._v("กำลังโหลดอยู่ ใจเย็นๆนะจ๊ะ......")]):t._e(),t._v(" "),t._l(t.gifs,function(t){return a("div",[a("img",{staticClass:"box list",attrs:{src:t.images.fixed_height.url,alt:""}})])})],2)],1)},s=[],n={render:i,staticRenderFns:s};e.a=n},"1qrH":function(t,e,a){"use strict";e.a={data:function(){return{loading:!0,query:"Hello",gifs:[]}},created:function(){var t=this;fetch("http://api.giphy.com/v1/gifs/search?q=hello&api_key=259P1wkSOIVS3bOLvH4Ve8t38Pt4uTN5").then(function(t){return t.json()}).then(function(e){t.gifs=e.data,t.loading=!1})},methods:{Search:function(){var t=this;this.gifs=[],this.loading=!0,fetch("http://api.giphy.com/v1/gifs/search?q="+this.query+"&api_key=259P1wkSOIVS3bOLvH4Ve8t38Pt4uTN5").then(function(t){return t.json()}).then(function(e){t.gifs=e.data,t.loading=!1})}}}},"6pg6":function(t,e){},Cy9A:function(t,e){},F3QI:function(t,e){},Fs8J:function(t,e,a){"use strict";e.a={name:"Home",data:function(){return{}}}},G6OR:function(t,e,a){"use strict";function i(t){a("sas3")}var s=a("1qrH"),n=a("1Zpq"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,"data-v-43e013a5",null);e.a=c.exports},JauL:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("section",{staticClass:"section"},[a("router-view")],1)])},s=[],n={render:i,staticRenderFns:s};e.a=n},M93x:function(t,e,a){"use strict";function i(t){a("F3QI")}var s=a("xJD8"),n=a("JauL"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);e.a=c.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s=a("M93x"),n=a("YaEn"),r=a("MMSg"),o=a.n(r),c=a("doPI");a.n(c);i.a.use(o.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:n.a,template:"<App/>",components:{App:s.a}})},Oz5H:function(t,e,a){"use strict";var i=a("mtWM"),s=a.n(i),n=a("YzIw");e.a={data:function(){return{q:"",isLoading:!0,players:[]}},components:{PulseLoader:n.a},created:function(){this.getData()},computed:{isPlayersNotFound:function(){return""!==this.q&&0===this.filterPlayers.length},filterPlayers:function(){var t=new RegExp(this.q.toLowerCase(),"g");return this.players.filter(function(e){return t.test(e.name.toLowerCase())||t.test(e.jerseyNumber)}).sort(function(t,e){return t.jerseyNumber-e.jerseyNumber})}},methods:{getData:function(){var t=this;s.a.get("//api.football-data.org/v1/teams/66/players",{headers:{"X-Auth-Token":"be99f135fe2d4c8b8dc2300d921becd6","X-Response-Control":"minified"}}).then(function(e){t.isLoading=!1,t.players=e.data.players}).catch(function(e){t.isLoading=!1,t.showErrorMsg(e.message)})},showErrorMsg:function(t){this.$toast.open({duration:12e5,message:""+t,position:"is-bottom",type:"is-danger"})}}}},UzTB:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),t._v(" "),t.players.length>0?a("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],staticClass:"input-search",attrs:{placeholder:"Search players"},domProps:{value:t.q},on:{input:function(e){e.target.composing||(t.q=e.target.value)}}}):t._e(),t._v(" "),t.isPlayersNotFound?a("div",{staticClass:"has-text-centered"},[a("h1",{staticClass:"title is-1"},[t._v("☹️")])]):t._e(),t._v(" "),a("div",{staticClass:"columns is-multiline"},t._l(t.filterPlayers,function(e){return a("div",{key:e.id,staticClass:"column is-2"},[a("a",{attrs:{href:"//en.wikipedia.org/wiki/"+e.name,target:"_blank"}},[a("div",{staticClass:"player"},[a("div",{staticClass:"player-name"},[t._v("\n            "+t._s(e.name)+"\n          ")]),t._v(" "),a("div",{staticClass:"player-jersey-number"},[t._v("\n            "+t._s(e.jerseyNumber)+"\n          ")])])])])})),t._v(" "),t.isLoading?a("div",{staticClass:"has-text-centered"},[a("br"),a("br"),a("br"),a("br"),t._v(" "),a("pulse-loader",{attrs:{loading:!0,color:"#F00"}})],1):t._e()])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-narrow"},[a("img",{attrs:{src:"//upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg",alt:"",width:"100px"}})]),t._v(" "),a("div",{staticClass:"column is-narrow"},[a("h1",{staticClass:"title is-1"},[t._v("Manchester United")]),t._v(" "),a("h2",{staticClass:"subtitle is-3"},[t._v("2017/18 Squad Numbers")])])])}],n={render:i,staticRenderFns:s};e.a=n},WDgY:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"v-spinner"},[a("div",{staticClass:"v-pulse v-pulse1",style:[t.spinnerStyle,t.spinnerDelay1]}),a("div",{staticClass:"v-pulse v-pulse2",style:[t.spinnerStyle,t.spinnerDelay2]}),a("div",{staticClass:"v-pulse v-pulse3",style:[t.spinnerStyle,t.spinnerDelay3]})])},s=[],n={render:i,staticRenderFns:s};e.a=n},YaEn:function(t,e,a){"use strict";var i=a("7+uW"),s=a("/ocq"),n=a("lO7g"),r=a("w/SC"),o=a("G6OR");i.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Home",component:n.a},{path:"/nati",name:"Nati",component:r.a},{path:"/Rachata",name:"Rachata",component:o.a}]})},YzIw:function(t,e,a){"use strict";function i(t){a("kKpL")}var s=a("i/iG"),n=a("WDgY"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);e.a=c.exports},doPI:function(t,e){},"i/iG":function(t,e,a){"use strict";e.a={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}}},jdPd:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-1"},[t._v("👩‍💻 👨‍💻 Saturday Homeworks.")]),t._v(" "),a("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=saturday-js&repo=saturday-homework&type=fork&count=true&size=large",frameborder:"0",scrolling:"0",width:"158px",height:"30px"}}),t._v(" "),a("br"),a("br"),t._v(" "),a("table",{staticClass:"table is-striped is-hoverable is-fullwidth"},[t._m(0),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("6066260000312")]),t._v(" "),a("td",[t._v("เนติ นามวงศ์")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/nati"}},[t._v("Manchester United 2017/18 Squad Numbers.")])],1)]),t._v(" "),a("tr",[a("td",[t._v("5806021622051")]),t._v(" "),a("td",[t._v("รชต ทองภักดี")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/Rachata"}},[t._v("Giphy Search")])],1)])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("รหัสนักศึกษา")]),t._v(" "),a("th",[t._v("ชื่อ-นามสกุล")]),t._v(" "),a("th",[t._v("การบ้าน")])])])}],n={render:i,staticRenderFns:s};e.a=n},kKpL:function(t,e){},lO7g:function(t,e,a){"use strict";function i(t){a("6pg6")}var s=a("Fs8J"),n=a("jdPd"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,"data-v-52c28a04",null);e.a=c.exports},sas3:function(t,e){},"w/SC":function(t,e,a){"use strict";function i(t){a("Cy9A")}var s=a("Oz5H"),n=a("UzTB"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,"data-v-2cc6b7e6",null);e.a=c.exports},xJD8:function(t,e,a){"use strict";e.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.dccad90117d69f59267d.js.map
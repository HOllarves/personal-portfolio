webpackJsonp([1],[,,,,,,,,,function(t,e,i){i(64);var n=i(0)(i(25),i(83),null,null);t.exports=n.exports},function(t,e,i){i(71);var n=i(0)(i(27),i(90),"data-v-9f0d67ae",null);t.exports=n.exports},function(t,e,i){i(67);var n=i(0)(i(30),i(86),"data-v-4e350285",null);t.exports=n.exports},,,,function(t,e,i){"use strict";var n=i(1),s=i(93),o=i(80),a=i.n(o);n.a.use(s.a),e.a=new s.a({routes:[{path:"/",component:a.a}]})},function(t,e,i){i(66);var n=i(0)(i(23),i(85),null,null);t.exports=n.exports},function(t,e,i){i(72);var n=i(0)(i(24),i(91),null,null);t.exports=n.exports},function(t,e,i){i(68);var n=i(0)(i(29),i(87),"data-v-5316cb7c",null);t.exports=n.exports},function(t,e,i){i(70);var n=i(0)(i(31),i(89),"data-v-7d5a00c9",null);t.exports=n.exports},function(t,e,i){i(69);var n=i(0)(i(32),i(88),null,null);t.exports=n.exports},,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{sources:{type:Array,required:!0},img:{type:String}},data:function(){return{videoRatio:null}},ready:function(){var t=this;this.setImageUrl(),this.setContainerHeight(),this.videoCanPlay()&&(this.$els.video.oncanplay=function(){t.videoRatio=t.$els.video.videoWidth/t.$els.video.videoHeight,console.log(t.videoRatio),t.setVideoSize(),t.$els.video.style.visibility="visible"}),window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.setContainerHeight(),this.videoCanPlay()&&this.setVideoSize()},videoCanPlay:function(){return!!this.$els.video.canPlayType},setImageUrl:function(){this.img&&(this.$el.style.backgroundImage="url("+this.img+")")},setContainerHeight:function(){this.$el.style.height=window.innerHeight+"px"},setVideoSize:function(){var t,e;this.$el.offsetWidth/this.$el.offsetHeight>this.videoRatio?t=this.$el.offsetWidth:e=this.$el.offsetHeight,this.$els.video.style.width=t?t+"px":"auto",this.$els.video.style.height=e?e+"px":"auto"},getMediaType:function(t){return"video/"+t.split(".").pop()}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"About"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(10),s=i.n(n),o=i(11),a=i.n(o),r=i(9),l=i.n(r);e.default={name:"home",components:{Intro:s.a,Portfolio:a.a,About:l.a}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Intro",data:function(){return{intro:"Hi... My name is Henry Ollarves... I'm a web developer",welcome:"Welcome..."}},methods:{goPortfolio:function(){this.$scrollTo(document.getElementById("portfolio"),1e3)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"JobCard",props:["job"]}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=i(92);n.a.use(s.a),e.default={name:"Masonry",props:["portfolioData"]}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=i(81),o=i.n(s);n.a.component("app-job-card",o.a),e.default={name:"Portfolio",data:function(){return{jobs:[{title:"EAD",image:"static/images/eq-logo.jpg",description:"Where it all started... My first steps into programming and also a place where I made great friends",image_description:"Equilibrio Agencia Digital's logo"},{title:"ActiveMill",image:"static/images/active-mill-logo.png",description:"Miami based software development",image_description:"Activemill's logo"},{title:"Social Doors",image:"static/images/social-doors-logo.png",description:"One of the best startups in Buenos Aires, Argentina",image_description:"Social Doors' logo"},{title:"Binary Mango",image:"static/images/binary-logo.png",description:"Pushing my limits as a programmer, every challenge is new",image_description:"Binary Mango's logo"}],showPortfolio:!1}},methods:{togglePortfolio:function(){this.showPortfolio=!0}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"SideBar",data:function(){return{opened:!1,options:{onDone:this.closeSideBar,onCancel:this.closeSideBar}}},methods:{openSideBar:function(){this.opened=!0},closeSideBar:function(){this.opened=!1},goIntro:function(){this.$scrollTo(document.getElementById("intro"),800,this.options,document.documentElement)},goPortfolio:function(){this.$scrollTo(document.getElementById("portfolio"),800,this.options,document.documentElement)},goAbout:function(){this.$scrollTo(document.getElementById("about"),800,this.options,document.documentElement)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(95);i.n(n);e.default={name:"Terminal",data:function(){return{terminalCount:0,startTerminal:!0,secondLine:!1,thirdLine:!1,fourthLine:!1,fifthLine:!1,description:"Hi! My name is Henry Ollarves. I'm a 25 year old venezuelan currently living in the amazing city of Barcelona, Spain. I dived into programming about 5 years ago. Since then, I haven't been able to stop for a second. I'm a creative person, as a programmer and as a musician. Liberal Studies graduated, I pretty much can't stop studying and finding new things that motivate me to be better everyday. Always up for the next challenge, I can't quite say no to a proposal, specially if it's tough and even more if we're the  first to try it. Team worker, collaborator, and most importantly a friend. Hope you like my website :)"}},methods:{terminalHandler:function(){0==this.terminalCount&&(this.secondLine=!0),1==this.terminalCount&&(this.thirdLine=!0),2==this.terminalCount&&(this.fourthLine=!0),3==this.terminalCount&&(this.fifthLine=!0),this.terminalCount+=1}},components:{VueTyper:n.VueTyper}}},,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=i(17),o=i.n(s),a=i(15),r=i(10),l=i.n(r),c=i(19),d=i.n(c),u=i(11),v=i.n(u),p=i(9),f=i.n(p),m=i(18),_=i.n(m),h=i(20),g=i.n(h),y=i(22),C=i.n(y),b=i(16),x=i.n(b),w=i(21),P=i.n(w);n.a.config.productionTip=!1,n.a.component("app-sidenav",d.a),n.a.component("app-masonry",_.a),n.a.component("app-portfolio",v.a),n.a.component("app-intro",l.a),n.a.component("app-about",f.a),n.a.component("app-terminal",g.a),n.a.component("video-bg",x.a),n.a.use(C.a),n.a.use(P.a),new n.a({el:"#app",router:a.a,template:"<App/>",components:{App:o.a,SideNav:d.a,Masonry:_.a,Portfolio:v.a,Intro:l.a,About:f.a,VideoBg:x.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,function(t,e,i){t.exports=i.p+"static/img/about-profile-placeholder.94c9ab7.jpg"},function(t,e,i){var n=i(0)(i(33),null,null,null);t.exports=n.exports},function(t,e,i){i(65);var n=i(0)(i(26),i(84),"data-v-314b9e32",null);t.exports=n.exports},function(t,e,i){i(63);var n=i(0)(i(28),i(82),"data-v-0fb2ac6a",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"job-card"},[i("div",{staticClass:"button-background"},[i("div",{staticClass:"title"},[t._v("\n            "+t._s(t.job.title)+"\n        ")])]),t._v(" "),i("div",{staticClass:"button-background"},[i("div",{staticClass:"description"},[i("p",[t._v(t._s(t.job.description))])])])])},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"about"}},[i("div",{staticClass:"about-container col-xs-12"},[t._m(0),t._v(" "),i("div",{staticClass:"about-text-container col-xs-12"},[i("app-terminal")],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile-container col-xs-12"},[n("div",{staticClass:"col-xs-2 profile-image-container"},[n("img",{staticClass:"img-responsive",attrs:{src:i(78),alt:"Profile placeholder"}})]),t._v(" "),n("div",{staticClass:"col-xs-4 col-xs-offset-6"},[n("h1",{staticClass:"profile-title"},[t._v("Henry Ollarves")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12 intro-container"},[i("app-intro")],1),t._v(" "),i("div",{staticClass:"col-xs-12 portfolio-container"},[i("hr",{staticClass:"neon-lights"}),t._v(" "),i("hr",{staticClass:"neon-lights"}),t._v(" "),i("app-portfolio")],1),t._v(" "),i("div",{staticClass:"col-xs-12 about-container"},[i("hr",{staticClass:"neon-lights"}),t._v(" "),i("hr",{staticClass:"neon-lights"}),t._v(" "),i("app-about")],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"VideoBg"},[i("video",{directives:[{name:"el",rawName:"v-el:video",arg:"video"}],attrs:{autoplay:"",loop:"",muted:""}},t._l(t.sources,function(e){return i("source",{attrs:{src:e,type:t.getMediaType(e)}})})),t._v(" "),i("div",{staticClass:"VideoBg__content"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"portfolio"}},[i("div",{staticClass:"portfolio-bg"},[i("div",{staticClass:"p5-background col-xs-12"},[i("iframe",{staticClass:"p5js-embedd",attrs:{src:"/static/p5/index.html",frameborder:"0",allowfullscreen:""}})],1),t._v(" "),i("div",{staticClass:"p5-content col-xs-8"},[t.showPortfolio?t._e():i("div",{staticClass:"title",on:{click:t.togglePortfolio}},[i("h1",[t._v("Portfolio")]),t._v(" "),i("span",{staticClass:"disclaimer"},[t._v("Whatch out... Seekers will be lurking around")])]),t._v(" "),t.showPortfolio?i("div",{staticClass:"job-container"},[i("h1",[t._v("Portfolio")]),t._v(" "),t._l(t.jobs,function(t){return i("div",[i("div",{staticClass:"col-xs-4"},[i("app-job-card",{attrs:{job:t}})],1)])}),t._v(" "),i("span",{staticClass:"its-ok"},[t._v("It's ok... they can't see you here. Click outside the box to confuse them :)")])],2):t._e()])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"masonry",rawName:"v-masonry"}],attrs:{"transition-duration":"0.3s","item-selector":".item"}},t._l(t.portfolioData,function(e,n){return i("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],staticClass:"item"},[i("div",{staticClass:"well",style:{backgroundImage:"url("+e.image+")"}},[t._v("\n            "+t._s(e.title)+"\n        ")])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"terminal-container"},[t.startTerminal?i("div",{staticClass:"col-xs-12 terminal-line"},[t._m(0),t._v(" "),i("div",{staticClass:"col-xs-11"},[i("vue-typer",{staticStyle:{color:"#fff"},attrs:{text:".....Starting console....","type-delay":70,repeat:0},on:{completed:t.terminalHandler}})],1)]):t._e(),t._v(" "),t.secondLine?i("div",{staticClass:"col-xs-12 terminal-line"},[t._m(1),t._v(" "),i("div",{staticClass:"col-xs-11"},[i("vue-typer",{staticStyle:{color:"#fff"},attrs:{text:"ache = new Programmer('Henry Ollarves')","type-delay":70,repeat:0},on:{completed:t.terminalHandler}})],1)]):t._e(),t._v(" "),t.thirdLine?i("div",{staticClass:"col-xs-12 terminal-line"},[t._m(2),t._v(" "),i("div",{staticClass:"col-xs-11"},[i("vue-typer",{staticStyle:{color:"#fff"},attrs:{text:"new Programmer instanciated ---> ache","type-delay":70,repeat:0},on:{completed:t.terminalHandler}})],1)]):t._e(),t._v(" "),t.fourthLine?i("div",{staticClass:"col-xs-12 terminal-line"},[t._m(3),t._v(" "),i("div",{staticClass:"col-xs-11"},[i("vue-typer",{staticStyle:{color:"#fff"},attrs:{text:"ache.about()","type-delay":70,repeat:0},on:{completed:t.terminalHandler}})],1)]):t._e(),t._v(" "),t.fifthLine?i("div",{staticClass:"col-xs-12 terminal-line"},[t._m(4),t._v(" "),i("div",{staticClass:"col-xs-11"},[i("vue-typer",{staticStyle:{color:"#fff"},attrs:{text:t.description,"type-delay":70,repeat:0},on:{completed:t.terminalHandler}})],1)]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-xs-1 terminal-start"},[i("span",[t._v("H.0 >")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-xs-1 terminal-start"},[i("span",[t._v("H.0 >")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-xs-1 terminal-start"},[i("span",[t._v("--->")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-xs-1 terminal-start"},[i("span",[t._v("H.0 >")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-xs-1 terminal-start"},[i("span",[t._v("--->")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"testRef",staticClass:"sidebar-nav"},[i("div",{class:{"side-menu":!t.opened,"side-menu side-menu-opened":t.opened},attrs:{role:"navigation"},on:{mouseover:t.openSideBar,mouseleave:t.closeSideBar}},[i("div",{staticClass:"ninja",attrs:{id:"ninja"}}),t._v(" "),i("div",{staticClass:"menu-content"},[i("ul",{staticClass:"nav navbar-nav"},[i("li",[i("div",{staticClass:"menu-item first-logo",on:{click:t.goIntro}},[i("span",{staticClass:"first-item"},[t._v(" Home ")])])]),t._v(" "),i("li",[i("div",{staticClass:"menu-item",on:{click:t.goPortfolio}},[i("span",{staticClass:"second-item"},[t._v("Portfolio")])])]),t._v(" "),i("li",[i("div",{staticClass:"menu-item",on:{click:t.goAbout}},[i("span",{staticClass:"third-item"},[t._v(" About ")])])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("div",{staticClass:"menu-item"},[i("span",{staticClass:"fourth-item"},[t._v(" Contact me ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("div",{staticClass:"menu-item"},[i("span",{staticClass:"fifth-item"},[t._v("Blog")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"intro"}},[i("div",{staticClass:"intro-container"},[i("h1",{attrs:{id:"intro-shuffle"}},[t._v(" "+t._s(t.intro))]),t._v(" "),i("h1",{staticClass:"welcome fade-in"},[t._v(" "+t._s(t.welcome))]),t._v(" "),i("div",{staticClass:"intro-footer fade-in-20"},[i("h2",[t._v("Come!"),i("span",{staticClass:"arrow-down",on:{click:t.goPortfolio}},[t._v("↓ ")])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("app-sidenav"),t._v(" "),i("router-view")],1)},staticRenderFns:[]}}],[34]);
//# sourceMappingURL=app.5263e4406ac9f17bc50c.js.map
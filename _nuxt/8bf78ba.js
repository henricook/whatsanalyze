(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{126:function(t,e,o){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(o(380),o(90)),l=o(103),c=o.n(l),d=o(433),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"78b6e16b",null);e.a=component.exports;c()(component,{VApp:d.a})},243:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{selectedLocale:this.$i18n.locale,availableLocales:[{code:"en",name:"English",flag:"🇬🇧",iso:"en-GB"},{code:"de",name:"Deutsch",flag:"🇩🇪",iso:"de-DE"}]}},watch:{selectedLocale:function(t){this.$router.push(this.switchLocalePath(t))}}},r=o(90),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedLocale,expression:"selectedLocale"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedLocale=e.target.multiple?o:o[0]}}},t._l(t.availableLocales,(function(e){return o("option",{key:e.code,domProps:{value:e.code}},[t._v("\n    "+t._s(e.flag)+"\n  ")])})),0)}),[],!1,null,null,null);e.default=component.exports},249:function(t,e,o){"use strict";(function(t){var e=o(12),n=o(320);e.a.use(n.a,{config:{id:"G-XYC2EWGZZ3",enabled:void 0===t.env.NUXT_ENV_LOCAL}})}).call(this,o(264))},250:function(t,e,o){"use strict";var n=o(323),r=o(326),l=o(324);o(12).a.prototype.$am4core=function(){return{am4core:n,am4themes_animated:r.a,am4plugins_wordCloud:l}}},297:function(t,e,o){var content=o(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(76).default)("10423b46",content,!0,{sourceMap:!1})},299:function(t,e,o){var content=o(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(76).default)("e2a5fafa",content,!0,{sourceMap:!1})},305:function(t,e,o){var content=o(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(76).default)("7f775a94",content,!0,{sourceMap:!1})},325:function(t,e,o){"use strict";var n=o(90),r=o(103),l=o.n(r),c=o(433),d=o(435),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("GlobalHeader"),t._v(" "),o("v-main",{staticStyle:{"overflow-x":"hidden"}},[o("nuxt")],1),t._v(" "),o("GlobalFooter")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{GlobalHeader:o(350).default,GlobalFooter:o(351).default}),l()(component,{VApp:c.a,VMain:d.a})},347:function(t,e,o){t.exports=o.p+"img/whatsanalyze-logo-black.2e06b93.png"},350:function(t,e,o){"use strict";o.r(e);var n={components:{LanguageSwitcher:o(243).default},name:"GlobalHeader"},r=(o(388),o(90)),l=o(103),c=o.n(l),d=o(241),v=o(209),f=o(436),h=o(434),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav pl-xs-8 pl-0 py-0 py-md-8 additional-height"},[n("v-container",{staticClass:"pl-md-16"},[n("v-card",{attrs:{flat:"",tile:"",color:"#21a68d"}},[n("v-card-actions",[n("nuxt-link",{attrs:{to:"/"}},[n("h1",{staticStyle:{color:"black","font-size":"2em"}},[n("img",{staticClass:"pr-3",staticStyle:{"vertical-align":"sub"},attrs:{src:o(347),height:"40px",alt:"WhatsAnalyze Logo"}}),t._v("\n            WhatsAnalyze\n          ")])]),t._v(" "),n("v-spacer"),t._v(" "),n("LanguageSwitcher")],1)],1)],1)],1)}),[],!1,null,"27c78d80",null);e.default=component.exports;c()(component,{LanguageSwitcher:o(243).default}),c()(component,{VCard:d.a,VCardActions:v.a,VContainer:f.a,VSpacer:h.a})},351:function(t,e,o){"use strict";o.r(e);var n={name:"GlobalFooter",data:function(){return{posts:[{name:"switch-from-whatsapp-to-signal",text:"pageNameSignal"},{name:"how-to-export-your-whatsapp-chat",text:"pageNameExport"}]}}},r=(o(413),o(90)),l=o(103),c=o.n(l),d=o(436),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"foot py-7 additional-height"},[t._l(t.posts,(function(e){return n("h3",{key:e.to,staticClass:"my-3"},[n("nuxt-link",{attrs:{to:e.name}},[t._v("\n      "+t._s(t.$t(e.text))+"\n    ")])],1)})),t._v(" "),n("hr",{attrs:{width:"70%",color:"white"}}),t._v(" "),n("div",{staticClass:"my-5"},[t._v(t._s(t.$t("love")))]),t._v(" "),n("a",{staticClass:"black--text",attrs:{target:"_blank",href:"https://github.com/SpiritFour/whatsanalyze"}},[n("img",{staticStyle:{"vertical-align":"sub"},attrs:{height:"22",alt:"github logo",src:o(411)}}),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.$t("openSource"))}})]),t._v(" "),n("br"),t._v(" "),n("v-container",[n("h3",[n("img",{staticStyle:{"vertical-align":"sub"},attrs:{src:o(412),height:"32px",alt:"whatsanalyze logo"}}),t._v("\n      WhatsAnalyze\n    ")]),t._v(" "),n("h3",{staticClass:"mt-5",staticStyle:{height:"70px"}},[t._v("\n      © "+t._s((new Date).getFullYear())+" -\n      "),n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" -\n      "),n("nuxt-link",{attrs:{to:"/impressum"}},[t._v("Impressum")])],1)])],2)}),[],!1,null,"704d12ec",null);e.default=component.exports;c()(component,{VContainer:d.a})},361:function(t,e,o){o(362),t.exports=o(363)},380:function(t,e,o){"use strict";o(297)},381:function(t,e,o){var n=o(75)(!1);n.push([t.i,"h1[data-v-78b6e16b]{font-size:20px}",""]),t.exports=n},388:function(t,e,o){"use strict";o(299)},389:function(t,e,o){var n=o(75)(!1);n.push([t.i,".top-color[data-v-27c78d80]{background-color:#21a68d}.only-visible-to-html2canvas[data-v-27c78d80]{display:none}.cta[data-v-27c78d80]{background:#f2f2f2}.link[data-v-27c78d80]{border:none;font-family:arial,sans-serif;color:#069;text-decoration:underline;cursor:pointer}hr[data-v-27c78d80]{margin:1em auto;border-top:none}a[data-v-27c78d80]:link{text-decoration:none}a[data-v-27c78d80]:link,a[data-v-27c78d80]:visited{color:#f2f2f2!important}a[data-v-27c78d80]:hover{color:#11538c!important}.small-h1 h1[data-v-27c78d80]{font-size:2em!important}.small-h2 h2[data-v-27c78d80]{font-size:1.3em!important}.nav[data-v-27c78d80]{width:100%;background:#21a68d}h1[data-v-27c78d80]{font-size:3em}h2[data-v-27c78d80]{font-size:2em;font-weight:400}",""]),t.exports=n},411:function(t,e,o){t.exports=o.p+"img/GitHub-Mark-Light-32px.266ca63.png"},412:function(t,e,o){t.exports=o.p+"img/whatsanalyze-logo-white.50f36f8.png"},413:function(t,e,o){"use strict";o(305)},414:function(t,e,o){var n=o(75)(!1);n.push([t.i,".top-color[data-v-704d12ec]{background-color:#21a68d}.only-visible-to-html2canvas[data-v-704d12ec]{display:none}.cta[data-v-704d12ec]{background:#f2f2f2}.link[data-v-704d12ec]{border:none;font-family:arial,sans-serif;color:#069;text-decoration:underline;cursor:pointer}hr[data-v-704d12ec]{margin:1em auto;border-top:none}a[data-v-704d12ec]:link{text-decoration:none}a[data-v-704d12ec]:link,a[data-v-704d12ec]:visited{color:#f2f2f2!important}a[data-v-704d12ec]:hover{color:#11538c!important}.foot[data-v-704d12ec]{padding:1em;width:100%;background:#21a68d;color:#f2f2f2;text-align:center}",""]),t.exports=n}},[[361,47,11,48]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{104:function(t,o,n){"use strict";var e={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(336),n(77)),l=n(85),c=n.n(l),d=n(377),component=Object(r.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"78b6e16b",null);o.a=component.exports;c()(component,{VApp:d.a})},215:function(t,o,n){"use strict";(function(t){var o=n(14),e=n(281);o.a.use(e.a,{config:{id:"G-XYC2EWGZZ3",enabled:void 0===t.env.NUXT_ENV_LOCAL}})}).call(this,n(227))},216:function(t,o,n){"use strict";var e=n(284),r=n(287),l=n(285);n(14).a.prototype.$am4core=function(){return{am4core:e,am4themes_animated:r.a,am4plugins_wordCloud:l}}},257:function(t,o,n){var content=n(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("10423b46",content,!0,{sourceMap:!1})},259:function(t,o,n){var content=n(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("9aa27dda",content,!0,{sourceMap:!1})},264:function(t,o,n){var content=n(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("51f0b0b7",content,!0,{sourceMap:!1})},286:function(t,o,n){"use strict";var e=n(77),r=n(85),l=n.n(r),c=n(377),d=n(378),component=Object(e.a)({},(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("v-app",[n("GlobalHeader"),t._v(" "),n("v-main",{staticStyle:{"overflow-x":"hidden"}},[n("nuxt")],1),t._v(" "),n("GlobalFooter")],1)}),[],!1,null,null,null);o.a=component.exports;l()(component,{GlobalHeader:n(306).default,GlobalFooter:n(307).default}),l()(component,{VApp:c.a,VMain:d.a})},303:function(t,o,n){t.exports=n.p+"img/whatsanalyze-logo-black.2e06b93.png"},306:function(t,o,n){"use strict";n.r(o);var e={name:"GlobalHeader"},r=(n(344),n(77)),l=n(85),c=n.n(l),d=n(379),component=Object(r.a)(e,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"nav pl-xs-8 pl-0 py-0 py-md-8 additional-height"},[e("v-container",[e("nuxt-link",{attrs:{to:"/"}},[e("h1",{staticClass:"pl-md-16",staticStyle:{color:"black","font-size":"2em"}},[e("img",{staticClass:"pr-3",staticStyle:{"vertical-align":"sub"},attrs:{src:n(303),height:"40px",alt:"chat icon"}}),t._v("\n        WhatsAnalyze\n      ")])])],1)],1)}),[],!1,null,"c3368420",null);o.default=component.exports;c()(component,{VContainer:d.a})},307:function(t,o,n){"use strict";n.r(o);var e=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("a",{staticClass:"black--text",attrs:{target:"_blank",href:"https://github.com/SpiritFour/whatsanalyze"}},[e("img",{staticStyle:{"vertical-align":"sub"},attrs:{height:"22",alt:"github logo",src:n(352)}}),t._v("\n\n    This project is "),e("b",[t._v("open-source")]),t._v(" and all code is "),e("b",[t._v("public")]),t._v(" on\n    "),e("b",[t._v("GitHub")])])}],r={name:"GlobalFooter",data:function(){return{posts:[{name:"switch-from-whatsapp-to-signal",text:"How to switch to Signal from WhatsApp"},{name:"how-to-export-your-whatsapp-chat",text:"How to export your WhatsApp Chat"}]}}},l=(n(353),n(77)),c=n(85),d=n.n(c),f=n(379),component=Object(l.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"foot py-7 additional-height"},[t._l(t.posts,(function(o){return e("h3",{key:o.to,staticClass:"my-3"},[e("nuxt-link",{attrs:{to:{name:o.name}}},[t._v("\n      "+t._s(o.text)+"\n    ")])],1)})),t._v(" "),e("hr",{attrs:{width:"70%",color:"white"}}),t._v(" "),e("div",{staticClass:"my-5"},[t._v("Made with ❤️ by four friends.")]),t._v(" "),t._m(0),t._v(" "),e("br"),t._v(" "),e("v-container",[e("h3",[e("img",{staticStyle:{"vertical-align":"sub"},attrs:{src:n(351),height:"32px",alt:"whatsanalyze logo"}}),t._v("\n      WhatsAnalyze\n    ")]),t._v(" "),e("h3",{staticClass:"mt-5",staticStyle:{height:"70px"}},[t._v("\n      © "+t._s((new Date).getFullYear())+" -\n      "),e("nuxt-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" -\n      "),e("nuxt-link",{attrs:{to:"/impressum"}},[t._v("Impressum")])],1)])],2)}),e,!1,null,"81bf6a96",null);o.default=component.exports;d()(component,{VContainer:f.a})},317:function(t,o,n){n(318),t.exports=n(319)},336:function(t,o,n){"use strict";n(257)},337:function(t,o,n){var e=n(75)(!1);e.push([t.i,"h1[data-v-78b6e16b]{font-size:20px}",""]),t.exports=e},344:function(t,o,n){"use strict";n(259)},345:function(t,o,n){var e=n(75)(!1);e.push([t.i,".top-color[data-v-c3368420]{background-color:#21a68d}.only-visible-to-html2canvas[data-v-c3368420]{display:none}.cta[data-v-c3368420]{background:#f2f2f2}.link[data-v-c3368420]{border:none;font-family:arial,sans-serif;color:#069;text-decoration:underline;cursor:pointer}hr[data-v-c3368420]{margin:1em auto;border-top:none}a[data-v-c3368420]:link{text-decoration:none}a[data-v-c3368420]:link,a[data-v-c3368420]:visited{color:#f2f2f2!important}a[data-v-c3368420]:hover{color:#11538c!important}.small-h1 h1[data-v-c3368420]{font-size:2em!important}.small-h2 h2[data-v-c3368420]{font-size:1.3em!important}.nav[data-v-c3368420]{width:100%;background:#21a68d}h1[data-v-c3368420]{font-size:3em}h2[data-v-c3368420]{font-size:2em;font-weight:400}",""]),t.exports=e},351:function(t,o,n){t.exports=n.p+"img/whatsanalyze-logo-white.50f36f8.png"},352:function(t,o,n){t.exports=n.p+"img/GitHub-Mark-Light-32px.266ca63.png"},353:function(t,o,n){"use strict";n(264)},354:function(t,o,n){var e=n(75)(!1);e.push([t.i,".top-color[data-v-81bf6a96]{background-color:#21a68d}.only-visible-to-html2canvas[data-v-81bf6a96]{display:none}.cta[data-v-81bf6a96]{background:#f2f2f2}.link[data-v-81bf6a96]{border:none;font-family:arial,sans-serif;color:#069;text-decoration:underline;cursor:pointer}hr[data-v-81bf6a96]{margin:1em auto;border-top:none}a[data-v-81bf6a96]:link{text-decoration:none}a[data-v-81bf6a96]:link,a[data-v-81bf6a96]:visited{color:#f2f2f2!important}a[data-v-81bf6a96]:hover{color:#11538c!important}.foot[data-v-81bf6a96]{padding:1em;width:100%;background:#21a68d;color:#f2f2f2;text-align:center}",""]),t.exports=e}},[[317,49,12,50]]]);
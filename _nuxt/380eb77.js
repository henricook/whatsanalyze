(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{442:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"h",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"f",(function(){return d})),n.d(e,"b",(function(){return j})),n.d(e,"d",(function(){return m})),n.d(e,"c",(function(){return v})),n.d(e,"e",(function(){return f})),n.d(e,"i",(function(){return h}));var o="home",r="file",l="results",c="pdf",d="payment",j="install",m="lead",v="interaction",f="num_persons";function h(t,label){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1";window.$nuxt.$gtag.event(label+"_"+t,{event_category:o,event_label:label,value:String(e)})}},586:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"d",(function(){return l})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"e",(function(){return j}));n(72);var o=n(437);function r(t,e){var n=document.createElement("a");document.body.appendChild(n),n.href=t,n.target="_self",n.download=e,n.click(),document.body.removeChild(n)}function l(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?!0===e?o(t).format("MMMM Do YYYY h:mm"):o(t).format("dddd, MMMM Do YYYY"):""}function c(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"days";return o(e).diff(o(t),n)}function d(t){return t.filterdChatObject[0].date}function j(t){return t.filterdChatObject.slice(-1)[0].date}},617:function(t,e,n){var map={"./af":451,"./af.js":451,"./ar":452,"./ar-dz":453,"./ar-dz.js":453,"./ar-kw":454,"./ar-kw.js":454,"./ar-ly":455,"./ar-ly.js":455,"./ar-ma":456,"./ar-ma.js":456,"./ar-sa":457,"./ar-sa.js":457,"./ar-tn":458,"./ar-tn.js":458,"./ar.js":452,"./az":459,"./az.js":459,"./be":460,"./be.js":460,"./bg":461,"./bg.js":461,"./bm":462,"./bm.js":462,"./bn":463,"./bn-bd":464,"./bn-bd.js":464,"./bn.js":463,"./bo":465,"./bo.js":465,"./br":466,"./br.js":466,"./bs":467,"./bs.js":467,"./ca":468,"./ca.js":468,"./cs":469,"./cs.js":469,"./cv":470,"./cv.js":470,"./cy":471,"./cy.js":471,"./da":472,"./da.js":472,"./de":473,"./de-at":474,"./de-at.js":474,"./de-ch":475,"./de-ch.js":475,"./de.js":473,"./dv":476,"./dv.js":476,"./el":477,"./el.js":477,"./en-au":478,"./en-au.js":478,"./en-ca":479,"./en-ca.js":479,"./en-gb":480,"./en-gb.js":480,"./en-ie":481,"./en-ie.js":481,"./en-il":482,"./en-il.js":482,"./en-in":483,"./en-in.js":483,"./en-nz":484,"./en-nz.js":484,"./en-sg":485,"./en-sg.js":485,"./eo":486,"./eo.js":486,"./es":487,"./es-do":488,"./es-do.js":488,"./es-mx":489,"./es-mx.js":489,"./es-us":490,"./es-us.js":490,"./es.js":487,"./et":491,"./et.js":491,"./eu":492,"./eu.js":492,"./fa":493,"./fa.js":493,"./fi":494,"./fi.js":494,"./fil":495,"./fil.js":495,"./fo":496,"./fo.js":496,"./fr":497,"./fr-ca":498,"./fr-ca.js":498,"./fr-ch":499,"./fr-ch.js":499,"./fr.js":497,"./fy":500,"./fy.js":500,"./ga":501,"./ga.js":501,"./gd":502,"./gd.js":502,"./gl":503,"./gl.js":503,"./gom-deva":504,"./gom-deva.js":504,"./gom-latn":505,"./gom-latn.js":505,"./gu":506,"./gu.js":506,"./he":507,"./he.js":507,"./hi":508,"./hi.js":508,"./hr":509,"./hr.js":509,"./hu":510,"./hu.js":510,"./hy-am":511,"./hy-am.js":511,"./id":512,"./id.js":512,"./is":513,"./is.js":513,"./it":514,"./it-ch":515,"./it-ch.js":515,"./it.js":514,"./ja":516,"./ja.js":516,"./jv":517,"./jv.js":517,"./ka":518,"./ka.js":518,"./kk":519,"./kk.js":519,"./km":520,"./km.js":520,"./kn":521,"./kn.js":521,"./ko":522,"./ko.js":522,"./ku":523,"./ku.js":523,"./ky":524,"./ky.js":524,"./lb":525,"./lb.js":525,"./lo":526,"./lo.js":526,"./lt":527,"./lt.js":527,"./lv":528,"./lv.js":528,"./me":529,"./me.js":529,"./mi":530,"./mi.js":530,"./mk":531,"./mk.js":531,"./ml":532,"./ml.js":532,"./mn":533,"./mn.js":533,"./mr":534,"./mr.js":534,"./ms":535,"./ms-my":536,"./ms-my.js":536,"./ms.js":535,"./mt":537,"./mt.js":537,"./my":538,"./my.js":538,"./nb":539,"./nb.js":539,"./ne":540,"./ne.js":540,"./nl":541,"./nl-be":542,"./nl-be.js":542,"./nl.js":541,"./nn":543,"./nn.js":543,"./oc-lnc":544,"./oc-lnc.js":544,"./pa-in":545,"./pa-in.js":545,"./pl":546,"./pl.js":546,"./pt":547,"./pt-br":548,"./pt-br.js":548,"./pt.js":547,"./ro":549,"./ro.js":549,"./ru":550,"./ru.js":550,"./sd":551,"./sd.js":551,"./se":552,"./se.js":552,"./si":553,"./si.js":553,"./sk":554,"./sk.js":554,"./sl":555,"./sl.js":555,"./sq":556,"./sq.js":556,"./sr":557,"./sr-cyrl":558,"./sr-cyrl.js":558,"./sr.js":557,"./ss":559,"./ss.js":559,"./sv":560,"./sv.js":560,"./sw":561,"./sw.js":561,"./ta":562,"./ta.js":562,"./te":563,"./te.js":563,"./tet":564,"./tet.js":564,"./tg":565,"./tg.js":565,"./th":566,"./th.js":566,"./tk":567,"./tk.js":567,"./tl-ph":568,"./tl-ph.js":568,"./tlh":569,"./tlh.js":569,"./tr":570,"./tr.js":570,"./tzl":571,"./tzl.js":571,"./tzm":572,"./tzm-latn":573,"./tzm-latn.js":573,"./tzm.js":572,"./ug-cn":574,"./ug-cn.js":574,"./uk":575,"./uk.js":575,"./ur":576,"./ur.js":576,"./uz":577,"./uz-latn":578,"./uz-latn.js":578,"./uz.js":577,"./vi":579,"./vi.js":579,"./x-pseudo":580,"./x-pseudo.js":580,"./yo":581,"./yo.js":581,"./zh-cn":582,"./zh-cn.js":582,"./zh-hk":583,"./zh-hk.js":583,"./zh-mo":584,"./zh-mo.js":584,"./zh-tw":585,"./zh-tw.js":585};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=617},795:function(t,e,n){"use strict";n.r(e);n(111),n(41),n(119),n(77),n(72),n(40);var o=n(618),r=n.n(o),l=n(586),c=n(442),d={name:"DownloadPopup",props:{chat:{type:Object},isSimple:{default:!1,type:Boolean}},data:function(){return{dialog:!1,loading:!1,suffix:this.isSimple?"-top":"",GTAG_INTERACTION:c.c}},methods:{download:function(){var t=this;this.loading=!0,Object(c.i)("download_image",c.h),setTimeout((function(){var e=0;document.querySelectorAll(".additional-height").forEach((function(a){return e+=a.clientHeight}));var n=0;document.querySelectorAll("[remove-height-in-html2-canvas]").forEach((function(a){return n-=a.clientHeight}));var o=document.querySelector("#download-graphs").clientHeight,canvas=r()(document.querySelector("#download-graphs"),{scrollX:0,scrollY:-window.scrollY,height:o+e+n,onclone:function(t){return t.querySelectorAll(".only-visible-to-html2canvas").forEach((function(t){return t.style.display="block"})),t}}),c=t.chat.messagesPerPerson.slice(0,2).map((function(t){return t.name})).join("-");canvas.then((function(canvas){Object(l.b)(canvas.toDataURL(),"whatsanlayze-results-"+c+".png"),t.loading=!1}))}),250)},paypalButtonPressed:function(){Object(c.i)("donation_download_results",c.f,5)},gtagEvent:c.i}},j=n(90),m=n(103),v=n.n(m),f=n(624),h=n(241),_=n(209),y=n(636),w=n(854),k=n(756),C=n(449),z=n(242),S=n(626),x=n(434),component=Object(j.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"mb-8"},[n("v-row",{attrs:{justify:"center"}},[n("div",{staticClass:"my-md-4 pa-8",class:{cta:!t.isSimple}},[t.isSimple?t._e():n("div",{staticClass:"text-h3 font-weight-bold pb-4"},[t._v("\n        Download all Graphs at once!\n      ")]),t._v(" "),t.isSimple?t._e():n("div",{staticClass:"text-body-1 pb-2"},[t._v("\n        Share them with your friends, all free just for you ❤️️\n      ")]),t._v(" "),n("v-dialog",{attrs:{width:"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{color:"#07bc4c",dark:"",loading:t.loading},on:{click:t.download}},o),[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-download")]),t._v("Download Results\n          ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline cyan",staticStyle:{"word-break":"normal"}},[n("div",{staticClass:"text-h4 font-weight-bold"},[t._v(t._s(t.$t("didWeMake")))]),t._v(" "),n("span",[t._v(t._s(t.$t("buyUsCoffee")))])]),t._v(" "),n("v-card-text",{staticClass:"pt-3"},[n("div",[t._v(t._s(t.$t("getResults")))])]),t._v(" "),n("v-row",{staticClass:"mb-3",attrs:{align:"center",justify:"center"},on:{click:t.paypalButtonPressed}},[n("form",{attrs:{action:"https://www.paypal.com/donate",method:"post",target:"_blank"}},[n("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"EPCYG8WEF289G"}}),t._v(" "),n("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}}),t._v(" "),n("img",{attrs:{alt:"",border:"0",src:"https://www.paypal.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])]),t._v(" "),n("v-divider"),t._v(" "),t.loading?n("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"blue"}}):t._e(),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n              Close\n            ")])],1)],1)],1),t._v(" "),t.isSimple?t._e():n("div",{staticClass:"text-text-h3 my-4"},[n("v-col",[t.isSimple?t._e():n("div",{staticClass:"text-body-1 pb-2"},[t._v("\n            Looking for "),n("b",[t._v("PDF download")]),t._v("?\n          ")]),t._v(" "),t.isSimple?t._e():n("v-btn",{attrs:{color:"#07bc4c",dark:""},on:{click:function(e){t.gtagEvent("jump_to_pdf_download_cta",t.GTAG_INTERACTION,0),t.$vuetify.goTo("#payButton",{duration:300,offset:100})}}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-keyboard-return")]),t._v(t._s(t.$t("goToPDF")))],1)],1)],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:f.a,VCard:h.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VCol:y.a,VDialog:w.a,VDivider:k.a,VIcon:C.a,VProgressLinear:z.a,VRow:S.a,VSpacer:x.a})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[40,12],{1315:function(t,e,n){"use strict";n.r(e);var r={name:"about.vue"},o=n(94),c=n(107),l=n.n(c),f=n(453),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("About")],1)}),[],!1,null,"84b245c4",null);e.default=component.exports;l()(component,{About:n(865).default}),l()(component,{VContainer:f.a})},642:function(t,e,n){"use strict";n(39),n(33),n(42),n(48),n(41),n(49);var r=n(16),o=(n(135),n(651),n(185)),c=n(266),l=n(271),f=n(22),d=n(125);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(o.a,c.a,l.a).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return y({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return y({height:Object(f.g)(this.size),minWidth:Object(f.g)(this.size),width:Object(f.g)(this.size)},this.measurableStyles)}},render:function(t){var data={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,data),this.$slots.default)}})},643:function(t,e,n){"use strict";n(33),n(42),n(48),n(49);var r=n(16),o=(n(99),n(106),n(50),n(39),n(56),n(100),n(341),n(34),n(60),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(64),n(41),n(355),n(11)),c=n(164),l=n(22);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=["start","end","center"];function j(t,e){return v.reduce((function(n,r){return n[t+Object(l.F)(r)]=e(),n}),{})}var O=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},m=j("align",(function(){return{type:String,default:null,validator:O}})),h=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},w=j("justify",(function(){return{type:String,default:null,validator:h}})),S=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},_=j("alignContent",(function(){return{type:String,default:null,validator:S}})),x={align:Object.keys(m),justify:Object.keys(w),alignContent:Object.keys(_)},P={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var r=P[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var k=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},m),{},{justify:{type:String,default:null,validator:h}},w),{},{alignContent:{type:String,default:null,validator:S}},_),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=k.get(l);return d||function(){var t,e;for(e in d=[],x)x[e].forEach((function(t){var r=n[t],o=C(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),k.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},651:function(t,e,n){var content=n(652);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("5ee2ef52",content,!0,{sourceMap:!1})},652:function(t,e,n){var r=n(78)(!1);r.push([t.i,".top-color{background-color:#21a68d}.only-visible-to-html2canvas{display:none}.cta{background:#f2f2f2}.link{border:none;font-family:arial,sans-serif;color:#069;text-decoration:underline;cursor:pointer}.v-avatar{align-items:center;border-radius:50%;display:inline-flex;justify-content:center;line-height:normal;position:relative;text-align:center;vertical-align:middle;overflow:hidden}.v-avatar .v-icon,.v-avatar .v-image,.v-avatar .v-responsive__content,.v-avatar img,.v-avatar svg{border-radius:inherit;display:inline-flex;height:inherit;width:inherit}",""]),t.exports=r},653:function(t,e,n){"use strict";n(33),n(42),n(48),n(49);var r=n(16),o=(n(135),n(39),n(56),n(100),n(341),n(34),n(60),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(64),n(99),n(41),n(108),n(355),n(11)),c=n(164),l=n(22);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),j=v.reduce((function(t,e){return t["offset"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(y),offset:Object.keys(j),order:Object.keys(O)};function h(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},j),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],m)m[e].forEach((function(t){var r=n[t],o=h(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},819:function(t,e,n){t.exports=n.p+"img/TUM_Logo.aa01fc9.png"},820:function(t,e,n){t.exports=n.p+"img/Oslo_Logo.f152efa.png"},821:function(t,e,n){t.exports=n.p+"img/Otago_Logo.54c1a71.png"},822:function(t,e,n){t.exports=n.p+"img/Stockholm_Logo.9e2ce9f.png"},823:function(t,e,n){t.exports=n.p+"img/Sebastian_WA.c6e5a9f.jpg"},824:function(t,e,n){t.exports=n.p+"img/Paul_WA.162df9d.jpg"},825:function(t,e,n){t.exports=n.p+"img/Adrian_WA.af4bb69.jpg"},826:function(t,e,n){t.exports=n.p+"img/Moritz_WA.2fc22cc.jpeg"},865:function(t,e,n){"use strict";n.r(e);var r={name:"About",data:function(){return{universities:[n(819),n(820),n(821),n(822)],persons:[{image:n(823),name:"Sebastian Fellner",description:["Computer Science MSc","AI Enthusiast"]},{image:n(824),name:"Paul Kehnel",description:["Computer Science  MSc","Bicycle Dude"]},{image:n(825),name:"Adrian Thiesen",description:["Business Administration BSc","The Allrounder"]},{image:n(826),name:"Moritz Wolf",description:["Robotics MSc","Outdoor Specialist"]}]}}},o=n(94),c=n(107),l=n.n(c),f=n(642),d=n(653),v=n(453),y=n(643),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pa-5"},[n("v-row",{staticClass:"ma-10 text-h3 font-weight-bold",attrs:{justify:"center"}},[t._v("\n    "+t._s(t.$t("about"))+"\n  ")]),t._v(" "),n("v-row",{staticClass:"ma-10 text-body-1",attrs:{justify:"center"}},[n("v-col",{attrs:{align:"center",cols:"12",md:"10",sm:"12"},domProps:{innerHTML:t._s(t.$t("aboutPoints"))}})],1),t._v(" "),n("v-row",{staticClass:"ma-10",attrs:{justify:"center"}},t._l(t.persons,(function(e){return n("v-col",{key:e.name,staticClass:"mb-3 my-xs-16",staticStyle:{"text-align":"center"},attrs:{cols:"12",justify:"center",md:"3",sm:"6"}},[n("v-row",{staticClass:"mb-3",attrs:{justify:"center"}},[n("v-avatar",{attrs:{size:"120"}},[n("img",{attrs:{src:e.image}})])],1),t._v(" "),n("v-row",{staticClass:"text-h5 font-weight-bold",attrs:{justify:"center"}},[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),t._l(e.description,(function(e){return n("v-row",{key:e,staticClass:"text-body-1",attrs:{justify:"center"}},[t._v("\n        "+t._s(e)+"\n      ")])}))],2)})),1),t._v(" "),n("v-row",{attrs:{justify:"center"}},t._l(t.universities,(function(t){return n("v-col",{key:t,attrs:{align:"center",cols:"3"}},[n("img",{staticStyle:{width:"100%","max-width":"100px"},attrs:{src:t}})])})),1)],1)}),[],!1,null,"4ded6864",null);e.default=component.exports;l()(component,{VAvatar:f.a,VCol:d.a,VContainer:v.a,VRow:y.a})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{439:function(t,e,n){"use strict";var o=n(24),r=n(210);o({target:"String",proto:!0,forced:n(211)("small")},{small:function(){return r(this,"small","","")}})},441:function(t,e,n){"use strict";n(439);var o=n(12);e.a=o.a.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},447:function(t,e,n){var content=n(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("6b715e77",content,!0,{sourceMap:!1})},448:function(t,e,n){var o=n(75)(!1);o.push([t.i,'.top-color{background-color:#21a68d}.only-visible-to-html2canvas{display:none}.cta{background:#f2f2f2}.link{border:none;font-family:arial,sans-serif;color:#069;text-decoration:underline;cursor:pointer}.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:"liga";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);width:100%;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense__component,.v-icon--dense__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',""]),t.exports=o},449:function(t,e,n){"use strict";n(39),n(35),n(42),n(52),n(41),n(53);var o,r=n(19),l=(n(439),n(95),n(102),n(128),n(130),n(129),n(72),n(447),n(252)),c=n(176),d=n(441),v=n(140),h=n(22),f=n(12),m=n(118);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(o||(o={}));var y=Object(m.a)(l.a,c.a,d.a,v.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(h.C)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(h.y)(t).find((function(e){return t[e]}));return e&&o[e]||Object(h.g)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:x({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=x(x({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(data){data.class=x(x({},data.class),this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var n=[],data=this.getDefaultData(),o="material-icons",r=t.indexOf("-"),l=r<=-1;l?n.push(t):function(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}(o=t.slice(0,r))&&(o=""),data.class[o]=!0,data.class[t]=!l;var c=this.getSize();return c&&(data.style={fontSize:c}),this.applyColors(data),e(this.hasClickListener?"button":this.tag,data,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},o=this.getSize();return o&&(n.style={fontSize:o,height:o,width:o}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var data={class:{"v-icon__component":!0}},n=this.getSize();n&&(data.style={fontSize:n,height:n,width:n}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(component,data)])}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e.a=f.a.extend({name:"v-icon",$_wrapperFor:y,functional:!0,render:function(t,e){var data=e.data,n=e.children,o="";return data.domProps&&(o=data.domProps.textContent||data.domProps.innerHTML||o,delete data.domProps.textContent,delete data.domProps.innerHTML),t(y,data,o?[o]:n)}})},646:function(t,e,n){var content=n(758);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("02fbefa3",content,!0,{sourceMap:!1})},757:function(t,e,n){"use strict";n(646)},758:function(t,e,n){var o=n(75)(!1);o.push([t.i,".top-color{background-color:#21a68d}.only-visible-to-html2canvas{display:none}.cta{background:#f2f2f2}.link{border:none;font-family:arial,sans-serif;color:#069;text-decoration:underline;cursor:pointer}.fun-facts{overflow:hidden}.person-facts{display:inline-block;margin:1em;padding:1em;border:2px solid #f2f2f2}",""]),t.exports=o},797:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{data:[]}},props:["chartdata"],methods:{updateGraph:function(){var t=this;this.chartdata.getFunFacts().then((function(e){return t.data=e}))}},watch:{chartdata:{handler:function(){this.updateGraph()},deep:!0}},mounted:function(){this.updateGraph()}},r=(n(757),n(90)),l=n(103),c=n.n(l),d=n(449),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fun-facts"},t._l(t.data,(function(e,o){return n("div",{key:o,staticClass:"person-facts"},[n("div",{staticClass:"text-h4 font-weight-bold py-5",style:"color: white; background: "+e.color},[t._v("\n      "+t._s(e.name)+"\n    ")]),t._v(" "),n("div",{staticClass:"text-left mt-8"},[n("div",[n("v-icon",{attrs:{color:e.color}},[t._v("mdi-book")]),t._v("\n\n        "+t._s(t.$t("totalWords"))+" "),n("b",[t._v(t._s(e.numberOfWords))])],1),t._v(" "),n("br"),t._v(" "),n("div",[n("v-icon",{attrs:{color:e.color}},[t._v(" mdi-emoticon-excited-outline ")]),t._v("\n        "+t._s(t.$t("mostUsedEmojie"))+"\n        "),t._l(e.sortedEmojis,(function(e){return n("span",{key:e},[t._v("\n          "+t._s(e)+" "+t._s(e.count)+"\n        ")])}))],2),t._v(" "),n("br"),t._v(" "),n("div",[n("v-icon",{attrs:{color:e.color}},[t._v(" mdi-android-messages ")]),t._v("\n        "+t._s(t.$t("longestMessage"))+"\n        "),n("b",[t._v(t._s(e.longestMessage))]),t._v(" words\n      ")],1),t._v(" "),n("br"),t._v(" "),n("div",[n("v-icon",{attrs:{color:e.color}},[t._v(" mdi-star ")]),t._v("\n        "+t._s(t.$t("uniqueWords"))+"\n        "),n("b",[t._v(t._s(e.uniqueWords))])],1),t._v(" "),n("br"),t._v(" "),n("div",[n("v-icon",{attrs:{color:e.color}},[t._v(" mdi-android-studio ")]),t._v("\n        "+t._s(t.$t("avgWords"))+"\n        "),n("b",[t._v(t._s(e.averageMessageLength))])],1)])])})),0)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:d.a})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{333:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));r(23),r(206),r(42),r(55),r(32),r(80),r(31),r(209),r(36),r(13),r(135),r(22),r(64),r(83),r(41),r(51),r(56);var n=r(82),o=r(11),l=r(20),c=r(394),h=r(579),D=r(647),d=r(648),f=r(299),j=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200;Object(o.a)(this,e),this.chatObject=r,this._groupAfter=n,this._maxWordsWordCloud=l,this.filterdChatObject=e.removeSystemMessages(this.chatObject);var h=Object.entries(e.getMessagesPerPerson(this.filterdChatObject));this.numPersonsInChat=h.length,this.personColorMap={},h.forEach((function(e,r){t.personColorMap[e[0]]=c.a[r%c.a.length]})),this._sortedFreqList=null,this._messagesPerPerson=null,this._dates=null,this.__reload()}return Object(l.a)(e,[{key:"__reload",value:function(){this._lineGraphData=Promise.resolve(this._getLineGraphData()),this._funfacts=Promise.resolve(this._getFunFacts()),this._allWords=Promise.resolve(this._getAllWords()),this._hourlyData=Promise.resolve(this._getHourlyData()),this._dailyData=Promise.resolve(this._getDailyData()),this._weeklyData=Promise.resolve(this._getWeeklyData()),this._shareOfSpeech=Promise.resolve(this._getShareOfSpeech())}},{key:"sortedFreqDict",get:function(){return this._sortedFreqList||(this._sortedFreqList=e.createSortedFreqDict(this.chatObject)),this._sortedFreqList}},{key:"groupAfter",get:function(){return this._groupAfter},set:function(e){this._groupAfter=e,this._messagesPerPerson=null,this._lineGraphData=Promise.resolve(this._getLineGraphData()),this._funfacts=Promise.resolve(this._getFunFacts()),this._hourlyData=Promise.resolve(this._getHourlyData()),this._dailyData=Promise.resolve(this._getDailyData()),this._weeklyData=Promise.resolve(this._getWeeklyData()),this._shareOfSpeech=Promise.resolve(this._getShareOfSpeech())}},{key:"messagesPerPerson",get:function(){return this._messagesPerPerson||(this._messagesPerPerson=this._getMessagesPerPerson()),this._messagesPerPerson}},{key:"_getMessagesPerPerson",value:function(){var t=this,r=Object.entries(e.getMessagesPerPerson(this.filterdChatObject));r=r.sort((function(a,b){return b[1].length-a[1].length}));var n=[],o=!1;return r.forEach((function(e,r){r>t._groupAfter?(n[t._groupAfter].messages=n[t._groupAfter].messages.concat(e[1]),o=!0):n.push({name:e[0],color:t.personColorMap[e[0]],messages:e[1].sort((function(a,b){return a.date-b.date}))})})),o&&(n[this._groupAfter].name="Others",n[this._groupAfter].color="#D3D3D3",n[this._groupAfter].messages.sort((function(a,b){return a.absolute_id-b.absolute_id}))),n}},{key:"dates",get:function(){return this._dates||(this._dates=this.filterdChatObject.map((function(e){return e.date}))),this._dates}},{key:"_getShareOfSpeech",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{labels:this.messagesPerPerson.map((function(e){return e.name})),datasets:[{label:"Share of Speech",backgroundColor:this.messagesPerPerson.map((function(t){return Object(c.b)(t.color,e)})),borderColor:this.messagesPerPerson.map((function(e){return e.color})),data:this.messagesPerPerson.map((function(e){return e.messages.length}))}]}}},{key:"getShareOfSpeech",value:function(){return this._shareOfSpeech}},{key:"_getFunFacts",value:function(){return this.messagesPerPerson.map((function(t){var r=t.name,n=e.getTotalNumberOfWords(t.messages),o=e.get_longest_message(t.messages),l=e.createSortedFreqDict(t.messages),c=e.uniqueWords(l).length,h=e.match_emojys(l).map((function(e){return e[0]})).slice(0,3),D=n/t.messages.length;return{color:t.color,name:r,numberOfWords:n,longestMessage:o,uniqueWords:c,sortedEmojis:h,averageMessageLength:Math.round(D)}}))}},{key:"getFunFacts",value:function(){return this._funfacts}},{key:"_getHourlyData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{labels:["0AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"],datasets:this.messagesPerPerson.map((function(r){return{label:r.name,backgroundColor:Object(c.b)(r.color,t),borderColor:r.color,data:e.hourlyDataFromChat(r.messages)}}))}}},{key:"getHourlyData",value:function(){return this._hourlyData}},{key:"_getDailyData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{labels:f.weekdays(),datasets:this.messagesPerPerson.map((function(r){return{label:r.name,backgroundColor:Object(c.b)(r.color,t),borderColor:r.color,data:e.dailyDataFromChat(r.messages)}}))}}},{key:"getDailyData",value:function(){return this._dailyData}},{key:"_getWeeklyData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{labels:f.months(),datasets:this.messagesPerPerson.map((function(r){return{label:r.name,backgroundColor:Object(c.b)(r.color,t),borderColor:r.color,data:e.weeklyDataFromChat(r.messages)}}))}}},{key:"getWeeklyData",value:function(){return this._weeklyData}},{key:"_getLineGraphData",value:function(){var e=function(s,e){for(var t={},r=f(s);r.isBefore(e);r.add(1,"days"))t[r.format("YYYY-MM-DD")]=0;return t}(new Date(Math.min.apply(null,this.dates)),new Date(Math.max.apply(null,this.dates)));return this.filterdChatObject.map((function(t){e[f(t.date).format("YYYY-MM-DD")]+=1})),{labels:Object.keys(e),datasets:[{data:Object.values(e),borderWidth:1,lineTension:0,pointRadius:0,pointHitRadius:2,backgroundColor:Object(c.b)("#EF5350"),borderColor:Object(c.b)("#B71C1C",[1])}]}}},{key:"getLineGraphData",value:function(){return this._lineGraphData}},{key:"getLineGraphXAxis",value:function(e,t){var r=new Date(e-t);return r.getFullYear()>1971?"year":r.getFullYear()>1970&&r.getMonth()>0?"month":"day"}},{key:"_getAllWords",value:function(){return this.sortedFreqDict.filter((function(e){return!(h.includes(e[0].toLowerCase())||D.includes(e[0].toLowerCase())||["","ich","du","wir","aber","<media","<attached:","audio","omitted>","bild","image","<Medien","weggelassen","omitted"].includes(e[0].toLowerCase()))&&e[1]>1})).map((function(e){return{word:e[0],freq:e[1]}}))}},{key:"getAllWords",value:function(){var e=this;return this._allWords.then((function(t){return t.slice(0,e._maxWordsWordCloud)}))}}],[{key:"removeSystemMessages",value:function(e){return e.filter((function(e){return"system"!==e.author.toLowerCase()})).slice(1)}},{key:"groupBy",value:function(e,t){return e.reduce((function(e,r){return(e[r[t]]=e[r[t]]||[]).push(r),e}),{})}},{key:"getTotalNumberOfWords",value:function(e){return e.reduce((function(e,t){return e+t.message.split(" ").length}),0)}},{key:"uniqueWords",value:function(e){return e.filter((function(e){return 1===e[1]}))}},{key:"match_emojys",value:function(e){var t=/(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])/g;return e.filter((function(e){var r=e[0].match(t);return null!=r?Object(d.onlyEmoji)(r[0]):r}))}},{key:"get_longest_message",value:function(e){return Math.max.apply(Math,Object(n.a)(e.map((function(object){return object.message.split(" ").length}))))}},{key:"createSortedFreqDict",value:function(e){var t=e.reduce((function(e,t){return e+" "+t.message})," "),r=(t=t.replace(/\u200E/gi,"")).replace(/\n/g," ").split(" "),n={};return r.map((function(e){n[e]=(n[e]||0)+1})),Object.entries(n).sort((function(a,b){return b[1]-a[1]}))}},{key:"toDayDates",value:function(e){return e.map((function(e){return e.date.setHours(0,0,0,0)}))}},{key:"getDaysBetween",value:function(e,t){for(var a=[],r=new Date(e);r<=t;r.setDate(r.getDate()+1))a.push(new Date(r));return a}},{key:"getMessagesPerPerson",value:function(e){return this.groupBy(e,"author")}},{key:"hourlyDataFromChat",value:function(e){var t=new Array(24).fill(0);return e.map((function(e){t[e.date.getHours()]+=1})),t}},{key:"dailyDataFromChat",value:function(e){var t=new Array(7).fill(0);return e.map((function(e){t[e.date.getDay()]+=1})),t}},{key:"weeklyDataFromChat",value:function(e){var t=new Array(12).fill(0);return e.map((function(e){t[e.date.getMonth()]+=1})),t}}]),e}()},394:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return l}));r(59),r(80),r(22),r(51);var n=["#016f94","#d93b3b","#21a68d","#ffd45c","#35cd96","#ed8c2b","#b3f94f","#ba33dc","#ffa35c","#227373","#ff855c"];function o(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return 3==(t=e.substring(1).split("")).length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),"rgba("+[(t="0x"+t.join(""))>>16&255,t>>8&255,255&t].join(",")+", "+r+" )";throw new Error("Bad Hex")}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return e.split(",").slice(0,-1).join(",")+","+t+")"}},644:function(e,t,r){"use strict";r.r(t);var n=r(373),o=r(333),l={extends:n.a,props:{chartdata:new o.a,dataGrouping:{type:String,validator:function(e){return-1!==["hourly","daily","weekly"].indexOf(e)}},options:{type:Object,default:function(){return{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{scaleLabel:{display:!0,labelString:"Messages"},ticks:{beginAtZero:!0,precision:0}}]}}}}},watch:{chartdata:{handler:function(){this.updateGraph()},deep:!0}},methods:{setStacked:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;this.chartdata.numPersonsInChat>e?(this.options.scales.xAxes[0].stacked=!0,this.options.scales.yAxes[0].stacked=!0):(this.options.scales.xAxes[0].stacked=!1,this.options.scales.yAxes[0].stacked=!1)},updateGraph:function(){var e=this;this.setStacked(),"hourly"===this.dataGrouping?this.chartdata.getHourlyData().then((function(t){return e.renderChart(t,e.options)})):"daily"===this.dataGrouping?this.chartdata.getDailyData().then((function(t){return e.renderChart(t,e.options)})):this.chartdata.getWeeklyData().then((function(t){return e.renderChart(t,e.options)}))}},mounted:function(){this.updateGraph()}},c=r(30),component=Object(c.a)(l,undefined,undefined,!1,null,null,null);t.default=component.exports},649:function(e,t,r){var map={"./af":421,"./af.js":421,"./ar":422,"./ar-dz":423,"./ar-dz.js":423,"./ar-kw":424,"./ar-kw.js":424,"./ar-ly":425,"./ar-ly.js":425,"./ar-ma":426,"./ar-ma.js":426,"./ar-sa":427,"./ar-sa.js":427,"./ar-tn":428,"./ar-tn.js":428,"./ar.js":422,"./az":429,"./az.js":429,"./be":430,"./be.js":430,"./bg":431,"./bg.js":431,"./bm":432,"./bm.js":432,"./bn":433,"./bn-bd":434,"./bn-bd.js":434,"./bn.js":433,"./bo":435,"./bo.js":435,"./br":436,"./br.js":436,"./bs":437,"./bs.js":437,"./ca":438,"./ca.js":438,"./cs":439,"./cs.js":439,"./cv":440,"./cv.js":440,"./cy":441,"./cy.js":441,"./da":442,"./da.js":442,"./de":443,"./de-at":444,"./de-at.js":444,"./de-ch":445,"./de-ch.js":445,"./de.js":443,"./dv":446,"./dv.js":446,"./el":447,"./el.js":447,"./en-au":448,"./en-au.js":448,"./en-ca":449,"./en-ca.js":449,"./en-gb":450,"./en-gb.js":450,"./en-ie":451,"./en-ie.js":451,"./en-il":452,"./en-il.js":452,"./en-in":453,"./en-in.js":453,"./en-nz":454,"./en-nz.js":454,"./en-sg":455,"./en-sg.js":455,"./eo":456,"./eo.js":456,"./es":457,"./es-do":458,"./es-do.js":458,"./es-mx":459,"./es-mx.js":459,"./es-us":460,"./es-us.js":460,"./es.js":457,"./et":461,"./et.js":461,"./eu":462,"./eu.js":462,"./fa":463,"./fa.js":463,"./fi":464,"./fi.js":464,"./fil":465,"./fil.js":465,"./fo":466,"./fo.js":466,"./fr":467,"./fr-ca":468,"./fr-ca.js":468,"./fr-ch":469,"./fr-ch.js":469,"./fr.js":467,"./fy":470,"./fy.js":470,"./ga":471,"./ga.js":471,"./gd":472,"./gd.js":472,"./gl":473,"./gl.js":473,"./gom-deva":474,"./gom-deva.js":474,"./gom-latn":475,"./gom-latn.js":475,"./gu":476,"./gu.js":476,"./he":477,"./he.js":477,"./hi":478,"./hi.js":478,"./hr":479,"./hr.js":479,"./hu":480,"./hu.js":480,"./hy-am":481,"./hy-am.js":481,"./id":482,"./id.js":482,"./is":483,"./is.js":483,"./it":484,"./it-ch":485,"./it-ch.js":485,"./it.js":484,"./ja":486,"./ja.js":486,"./jv":487,"./jv.js":487,"./ka":488,"./ka.js":488,"./kk":489,"./kk.js":489,"./km":490,"./km.js":490,"./kn":491,"./kn.js":491,"./ko":492,"./ko.js":492,"./ku":493,"./ku.js":493,"./ky":494,"./ky.js":494,"./lb":495,"./lb.js":495,"./lo":496,"./lo.js":496,"./lt":497,"./lt.js":497,"./lv":498,"./lv.js":498,"./me":499,"./me.js":499,"./mi":500,"./mi.js":500,"./mk":501,"./mk.js":501,"./ml":502,"./ml.js":502,"./mn":503,"./mn.js":503,"./mr":504,"./mr.js":504,"./ms":505,"./ms-my":506,"./ms-my.js":506,"./ms.js":505,"./mt":507,"./mt.js":507,"./my":508,"./my.js":508,"./nb":509,"./nb.js":509,"./ne":510,"./ne.js":510,"./nl":511,"./nl-be":512,"./nl-be.js":512,"./nl.js":511,"./nn":513,"./nn.js":513,"./oc-lnc":514,"./oc-lnc.js":514,"./pa-in":515,"./pa-in.js":515,"./pl":516,"./pl.js":516,"./pt":517,"./pt-br":518,"./pt-br.js":518,"./pt.js":517,"./ro":519,"./ro.js":519,"./ru":520,"./ru.js":520,"./sd":521,"./sd.js":521,"./se":522,"./se.js":522,"./si":523,"./si.js":523,"./sk":524,"./sk.js":524,"./sl":525,"./sl.js":525,"./sq":526,"./sq.js":526,"./sr":527,"./sr-cyrl":528,"./sr-cyrl.js":528,"./sr.js":527,"./ss":529,"./ss.js":529,"./sv":530,"./sv.js":530,"./sw":531,"./sw.js":531,"./ta":532,"./ta.js":532,"./te":533,"./te.js":533,"./tet":534,"./tet.js":534,"./tg":535,"./tg.js":535,"./th":536,"./th.js":536,"./tk":537,"./tk.js":537,"./tl-ph":538,"./tl-ph.js":538,"./tlh":539,"./tlh.js":539,"./tr":540,"./tr.js":540,"./tzl":541,"./tzl.js":541,"./tzm":542,"./tzm-latn":543,"./tzm-latn.js":543,"./tzm.js":542,"./ug-cn":544,"./ug-cn.js":544,"./uk":545,"./uk.js":545,"./ur":546,"./ur.js":546,"./uz":547,"./uz-latn":548,"./uz-latn.js":548,"./uz.js":547,"./vi":549,"./vi.js":549,"./x-pseudo":550,"./x-pseudo.js":550,"./yo":551,"./yo.js":551,"./zh-cn":552,"./zh-cn.js":552,"./zh-hk":553,"./zh-hk.js":553,"./zh-mo":554,"./zh-mo.js":554,"./zh-tw":555,"./zh-tw.js":555};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=649}}]);
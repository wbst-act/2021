(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-601de130"],{"0fd9":function(t,e,i){"use strict";i("13d5"),i("14d9"),i("4b85");var s=i("2b0e"),n=i("d9f7"),a=i("80d2");const o=["sm","md","lg","xl"],r=["start","end","center"];function l(t,e){return o.reduce((i,s)=>(i[t+Object(a["v"])(s)]=e(),i),{})}const c=t=>[...r,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),h=t=>[...r,"space-between","space-around"].includes(t),u=l("justify",()=>({type:String,default:null,validator:h})),f=t=>[...r,"space-between","space-around","stretch"].includes(t),v=l("alignContent",()=>({type:String,default:null,validator:f})),m={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(v)},p={align:"align",justify:"justify",alignContent:"align-content"};function g(t,e,i){let s=p[t];if(null!=i){if(e){const i=e.replace(t,"");s+="-"+i}return s+="-"+i,s.toLowerCase()}}const b=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:h},...u,alignContent:{type:String,default:null,validator:f},...v},render(t,{props:e,data:i,children:s}){let a="";for(const n in e)a+=String(e[n]);let o=b.get(a);if(!o){let t;for(t in o=[],m)m[t].forEach(i=>{const s=e[i],n=g(t,i,s);n&&o.push(n)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),b.set(a,o)}return t(e.tag,Object(n["a"])(i,{staticClass:"row",class:o}),s)}})},"1f09":function(t,e,i){},3129:function(t,e,i){"use strict";i("14d9"),i("1f09");var s=i("c995"),n=i("24b2"),a=i("7560"),o=i("58df"),r=i("80d2");e["a"]=Object(o["a"])(s["a"],n["a"],a["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:()=>({})}},computed:{attrs(){return this.isLoading?this.boilerplate?{}:{"aria-busy":!0,"aria-live":"polite",role:"alert",...this.$attrs}:this.$attrs},classes(){return{"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile,...this.themeClasses,...this.elevationClasses}},isLoading(){return!("default"in this.$scopedSlots)||this.loading},rootTypes(){return{actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text",...this.types}}},methods:{genBone(t,e){return this.$createElement("div",{staticClass:`v-skeleton-loader__${t} v-skeleton-loader__bone`},e)},genBones(t){const[e,i]=t.split("@"),s=()=>this.genStructure(e);return Array.from({length:i}).map(s)},genStructure(t){let e=[];t=t||this.type||"";const i=this.rootTypes[t]||"";if(t===i);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);i.indexOf(",")>-1?e=this.mapBones(i):i.indexOf("@")>-1?e=this.genBones(i):i&&e.push(this.genStructure(i))}return[this.genBone(t,e)]},genSkeleton(){const t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(r["m"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave(t){t.style.setProperty("display","none","important")},resetStyles(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},"4a00":function(t,e,i){"use strict";var s=i("8336"),n=i("b0af"),a=i("169a"),o=i("ce7e"),r=i("132d"),l=i("8860"),c=i("da13"),d=i("1800"),h=i("8270"),u=i("5d23"),f=i("8e36"),v=i("8dd9"),m=i("3129"),p=i("2fa4"),g=i("71d9"),b=i("2a7f"),_=function(){var t=this,e=t._self._c;return e(a["a"],{attrs:{fullscreen:"","hide-overlay":"",persistent:""},on:{"click:outside":function(e){return t.$emit("ebird-close")}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.loading?[e(n["a"],[e(g["a"],{attrs:{color:"light-green darken-3",dark:"",dense:""}},[e(b["a"],[t._v("連線查詢記錄中...")])],1),e(v["a"],[e(f["a"],{attrs:{color:"green",indeterminate:"",rounded:"",height:"6"}}),e(m["a"],{attrs:{type:"list-item,           list-item-avatar, list-item-avatar,           list-item-avatar, list-item-avatar,           list-item-avatar, list-item-avatar,           list-item-avatar, list-item-avatar,           list-item-avatar, list-item-avatar,           list-item-avatar, list-item-avatar,           list-item-avatar, list-item-avatar,           list-item-avatar, list-item-avatar,           list-item-avatar, list-item-avatar,           list-item-avatar, list-item-avatar"}})],1)],1)]:[e(n["a"],[e(g["a"],{attrs:{color:"light-green darken-3",dark:"",dense:""}},[e(b["a"],[t._v(t._s(t._f("moment")(t.date,"YYYY-MM-DD"))+" "+t._s(t.event.name))]),e(p["a"]),e(s["a"],{attrs:{icon:""},on:{click:function(e){return t.$emit("ebird-close")}}},[e(r["a"],[t._v(t._s(t.icons.mdiClose))])],1)],1),e(l["a"],[e(c["a"],[e(u["a"],[e(u["c"],[t._v(t._s(t.getfamily)+"科 "+t._s(t.record.length)+"種 ")]),e(u["b"],[t._v(" "+t._s(t.event.leader.join(" "))),t.event.people>0?e("span",{staticClass:"float-right"},[t._v("參與 "+t._s(t.event.people)+" 人")]):t._e()])],1),e(d["a"],[e(s["a"],{attrs:{href:"https://ebird.org/checklist/"+t.event.ebird,target:"_blank",icon:""}},[e(r["a"],{attrs:{color:"green"}},[t._v(t._s(t.icons.mdiBird)+" ")])],1)],1)],1)],1),e(l["a"],[e(o["a"]),t._l(t.record,(function(i,s){return[e(c["a"],{key:i.speciesCode},[e(h["a"],[t._v(t._s(i.howManyStr))]),e(u["a"],[e(u["c"],[t._v(" "+t._s(t.birds[i.speciesCode].name)),0==s||s-1>=0&&t.birds[t.record[s-1].speciesCode].family!=t.birds[i.speciesCode].family?e("span",{staticClass:"float-right caption"},[t._v(t._s(t.birds[i.speciesCode].family))]):t._e()]),i.comments?e(u["b"],[t._v(t._s(i.comments))]):t._e()],1)],1),e(o["a"])]}))],2)],1)]],2)},y=[],k=(i("14d9"),i("94ed")),O=i("2f62"),w={name:"EbirdDialog",props:["dialog","event"],data:()=>({icons:{mdiBird:k["e"],mdiClose:k["l"]},record:null,birds:{},loading:!0}),watch:{async dialog(t){t&&this.event.ebird&&this.dialog&&(this.loading=!0,await this.eBird(this.event.ebird),this.loading=!1)}},created(){this.birds=this.$offlineStorage.get("birds")},computed:{...Object(O["b"])(["apikey"]),getfamily(){const t=[];return this.record.forEach(e=>{-1==t.indexOf(this.birds[e.speciesCode].family)&&t.push(this.birds[e.speciesCode].family)}),t.length}},methods:{async eBird(t){return await this.$http.get("https://api.ebird.org/v2/product/checklist/view/"+t,{headers:{"X-eBirdApiToken":this.apikey}}).then(async t=>{this.date=this.$moment(t.data.obsDt,"YYYY-MM-DD HH:SS"),this.record=t.data.obs}).catch(()=>{this.$emit("ebird-close")})},async HotspotName(t){return await this.$http.get("https://api.ebird.org/v2/ref/hotspot/info/"+t,{headers:{"X-eBirdApiToken":this.apikey}}).then(t=>t.data.name).catch(()=>"私人熱點")}}},x=w,$=i("2877"),E=Object($["a"])(x,_,y,!1,null,null,null);e["a"]=E.exports},"4b85":function(t,e,i){},"62ad":function(t,e,i){"use strict";i("13d5"),i("14d9"),i("4b85");var s=i("2b0e"),n=i("d9f7"),a=i("80d2");const o=["sm","md","lg","xl"],r=(()=>o.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),l=(()=>o.reduce((t,e)=>(t["offset"+Object(a["v"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>o.reduce((t,e)=>(t["order"+Object(a["v"])(e)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(r),offset:Object.keys(l),order:Object.keys(c)};function h(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+="-"+i}return"col"!==t||""!==i&&!0!==i?(s+="-"+i,s.toLowerCase()):s.toLowerCase()}}const u=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...r,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:a}){let o="";for(const n in e)o+=String(e[n]);let r=u.get(o);if(!r){let t;for(t in r=[],d)d[t].forEach(i=>{const s=e[i],n=h(t,i,s);n&&r.push(n)});const i=r.some(t=>t.startsWith("col-"));r.push({col:!i||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),u.set(o,r)}return t(e.tag,Object(n["a"])(i,{class:r}),s)}})},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return r}));var s=i("b0af"),n=i("80d2");const a=Object(n["h"])("v-card__actions"),o=Object(n["h"])("v-card__subtitle"),r=Object(n["h"])("v-card__text"),l=Object(n["h"])("v-card__title");s["a"]},a523:function(t,e,i){"use strict";i("20f6"),i("4b85");var s=i("2b0e");function n(t){return s["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:s,children:n}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:a}=s;if(a){s.attrs={};const t=Object.keys(a).filter(t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(s.staticClass+=" "+t.join(" "))}return i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),e(i.tag,s,n)}})}var a=i("d9f7");e["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:s}){let n;const{attrs:o}=i;return o&&(i.attrs={},n=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(a["a"])(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),s)}})},abae:function(t,e,i){"use strict";i.r(e);var s=i("0798"),n=i("8336"),a=i("b0af"),o=i("62ad"),r=i("a523"),l=i("132d"),c=i("8860"),d=i("da13"),h=i("1800"),u=i("5d23"),f=i("f6c4"),v=i("0fd9"),m=i("8dd9"),p=i("3129"),g=i("2fa4"),b=i("71d9"),_=i("2a7f"),y=function(){var t=this,e=t._self._c;return e(f["a"],[e("activity-dialog",{attrs:{selectedOpen:t.selectedOpen,selectedEvent:t.selectedEvent,path:t.selectedPath},on:{close:function(e){t.selectedOpen=!1}}}),e("ebird-dialog",{attrs:{dialog:t.ebirdDialog,event:t.selectedEvent},on:{"ebird-close":function(e){t.ebirdDialog=!1}}}),e(r["a"],{attrs:{fluid:""}},[e(a["a"],{attrs:{flat:"",dense:""}},[e(b["a"],{staticClass:"mb-5",attrs:{flat:"",dense:""}},[e(n["a"],{attrs:{fab:"",text:"",color:"grey darken-2"},on:{click:function(e){return t.addDay(-7)}}},[e(l["a"],[t._v(t._s(t.icons.mdiChevronLeft))])],1),e(g["a"]),e(_["a"],[t._v(t._s(t._f("moment")(t.$moment(t.focus).day(6),"Y年M月")))]),e(g["a"]),e(n["a"],{attrs:{fab:"",text:"",color:"grey darken-2"},on:{click:function(e){return t.addDay(7)}}},[e(l["a"],[t._v(t._s(t.icons.mdiChevronRight))])],1)],1)],1),t.loading?[e(m["a"],[e(p["a"],{attrs:{type:"list-item-two-line, list-item-two-line, list-item-two-line"}})],1)]:[0==t.filterevent.length?[e(s["a"],{staticClass:"pa-0",attrs:{border:"left",color:"red lighten-4","colored-border":"",elevation:"2",dense:""}},[e(r["a"],{staticClass:"px-3 py-0"},[e(v["a"],{attrs:{"no-gutters":""}},[e(o["a"],{attrs:{cols:"12"}},[e(c["a"],[e(d["a"],[e(u["a"],[e(u["c"],[t._v(t._s(t.$t("本週活動尚未確認")))])],1)],1)],1)],1)],1)],1)],1)]:t._e(),t._l(t.filterevent,(function(i,n){return[i.done?[e("a",{key:n,attrs:{dense:"",link:""!=i.ebird},on:{click:function(e){return t.ebirdOpen(i)}}},[e(s["a"],{staticClass:"pa-0",attrs:{border:"left",color:i.color,"colored-border":"",elevation:"2",dense:""}},[e(r["a"],{staticClass:"px-3 py-0"},[e(v["a"],{attrs:{"no-gutters":""}},[e(o["a"],{attrs:{cols:"2","align-self":"center"}},[t._v(t._s(t._f("moment")(i.date,"D"))+" ["+t._s(t._f("moment")(i.date,"dd"))+"]")]),e(o["a"],{attrs:{cols:"10"}},[e(c["a"],[e(d["a"],[e(u["a"],[e(u["c"],[t._v(" "+t._s("en"==t.$i18n.locale?i.path.ename:i.name)),"y"==i.cancel?e("span",{staticClass:"caption red--text"},[t._v("["+t._s(i.cancelhelp)+"]")]):t._e()])],1),i.ebird?e(h["a"],[e(l["a"],{attrs:{color:"green"}},[t._v(t._s(t.icons.mdiBird))])],1):t._e()],1)],1)],1)],1)],1)],1)],1)]:[e("a",{key:n,attrs:{dense:"",link:""!=i.ebird},on:{click:function(e){return t.eventOpen(i)}}},[e(s["a"],{staticClass:"pa-0",attrs:{border:"left",color:i.color,"colored-border":"",elevation:"2",dense:""}},[e(r["a"],{staticClass:"px-3 py-0"},[e(v["a"],{attrs:{"no-gutters":""}},[e(o["a"],{attrs:{cols:"2","align-self":"center"}},[t._v(t._s(t._f("moment")(i.date,"D"))+" ["+t._s(t._f("moment")(i.date,"dd"))+"]")]),e(o["a"],{attrs:{cols:"10"}},[e(c["a"],[e(d["a"],[e(u["a"],[e(u["c"],[t._v(t._s("en"==t.$i18n.locale?i.path.ename:i.name)),"y"==i.memberonly?e("span",[t._v("("+t._s(t.$t("__msg_limit__"))+")")]):t._e(),"y"==i.cancel||"c"==i.cancel?e("span",{staticClass:"caption red--text"},[t._v("["+t._s(i.cancelhelp)+"] ")]):t._e()]),e(u["b"],[t._v(t._s("en"==t.$i18n.locale?i.path.elocation:i.location)),e("span",{staticClass:"float-right"},[t._v(t._s(i.starttime))])]),e(u["b"],[t._v(t._s(i.leader.join(" ")))])],1)],1)],1)],1)],1)],1)],1)],1)]]})),t.filterevent.length>0?[e(s["a"],{staticClass:"pa-0",attrs:{border:"left",color:"red","colored-border":"",elevation:"2",dense:""}},[e(r["a"],{staticClass:"px-3 py-0"},[e(v["a"],{attrs:{"no-gutters":""}},[t._v(t._s(t.$t("__msg_alert__")))])],1)],1)]:t._e()]],2)],1)},k=[],O=i("99d9"),w=i("169a"),x=i("ce7e"),$=(i("14d9"),i("ee6f"),i("480e")),E=i("4ad4"),C=i("16b7"),T=i("b848"),S=i("21be"),A=i("fe6c"),Y=i("75eb"),D=i("58df"),B=i("80d2");const M=Object(D["a"])(S["a"],Object(A["b"])(["top","right","bottom","left","absolute"]),E["a"],Y["a"]);var j=M.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:()=>({activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}),computed:{computedLeft(){const t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,s=Math.max(t.width,e.width);let n=0;if(n+=i,(this.left||this.$vuetify.rtl&&!this.right)&&(n-=s-t.width),this.offsetX){const e=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));n+=this.left?-e:t.width}return this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),n},computedTop(){const t=this.dimensions.activator,e=this.dimensions.content;let i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled(t){t&&this.callDeactivate()},isActive(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate(){},calcLeft(t){return Object(B["g"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop(){return Object(B["g"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow(t,e){const i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow(t){const e=this.getInnerHeight(),i=this.absoluteYOffset+e,s=this.dimensions.activator,n=this.dimensions.content.height,a=t+n,o=i<a;return o&&this.offsetOverflow&&s.top>n?t=this.pageYOffset+(s.top-n):o&&!this.allowOverflow?t=i-n-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate(){this.hasWindow&&this.activate()},callDeactivate(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed(){if(!1!==this.attach)return void(this.activatorFixed=!1);let t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1},deactivate(){},genActivatorListeners(){const t=E["a"].options.methods.genActivatorListeners.call(this),e=t.click;return e&&(t.click=t=>{this.openOnClick&&e&&e(t),this.absoluteX=t.clientX,this.absoluteY=t.clientY}),t},getInnerHeight(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect(t){const e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure(t){if(!t||!this.hasWindow)return null;const e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){const i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek(t){requestAnimationFrame(()=>{const e=this.$refs.content;e&&"none"===e.style.display?(e.style.display="inline-block",t(),e.style.display="none"):t()})},startTransition(){return new Promise(t=>requestAnimationFrame(()=>{this.isContentActive=this.hasJustFocused=this.isActive,t()}))},updateDimensions(){this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;const t={activator:{...this.dimensions.activator},content:{...this.dimensions.content}};if(!this.hasActivator||this.absolute)t.activator=this.absolutePosition();else{const e=this.getActivator();if(!e)return;t.activator=this.measure(e),t.activator.offsetLeft=e.offsetLeft,!1!==this.attach?t.activator.offsetTop=e.offsetTop:t.activator.offsetTop=0}this.sneakPeek(()=>{if(this.$refs.content){if(this.$refs.content.offsetParent){const e=this.getRoundedBoundedClientRect(this.$refs.content.offsetParent);this.relativeYOffset=window.pageYOffset+e.top,t.activator.top-=this.relativeYOffset,t.activator.left-=window.pageXOffset+e.left}t.content=this.measure(this.$refs.content)}this.dimensions=t})}}}),L=i("e4d3"),I=i("a236"),H=i("7560"),W=i("a293"),P=i("dc22"),N=i("d9bd"),F=i("7d8f");const q=Object(D["a"])(T["a"],C["a"],L["a"],I["a"],H["a"],j);var X=q.extend({name:"v-menu",directives:{ClickOutside:W["a"],Resize:P["a"]},provide(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile(){return this.tiles[this.listIndex]},calculatedLeft(){const t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(B["g"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight(){const t=this.auto?"200px":Object(B["g"])(this.maxHeight);return t||"0"},calculatedMaxWidth(){return Object(B["g"])(this.maxWidth)||"0"},calculatedMinWidth(){if(this.minWidth)return Object(B["g"])(this.minWidth)||"0";const t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(B["g"])(Math.min(e,t))||"0"},calculatedTop(){const t=this.auto?Object(B["g"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles(){return Boolean(this.tiles.find(t=>t.tabIndex>-1))},styles(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive(t){t||(this.listIndex=-1)},isContentActive(t){this.hasJustFocused=t},listIndex(t,e){if(t in this.tiles){const e=this.tiles[t];e.classList.add("v-list-item--highlighted");const i=this.$refs.content.scrollTop,s=this.$refs.content.clientHeight;i>e.offsetTop-8?Object(F["b"])(e.offsetTop-e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content}):i+s<e.offsetTop+e.clientHeight+8&&Object(F["b"])(e.offsetTop-s+2*e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content})}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(N["e"])("full-width",this)},mounted(){this.isActive&&this.callActivate()},methods:{activate(){this.updateDimensions(),requestAnimationFrame(()=>{this.startTransition().then(()=>{this.$refs.content&&(this.calculatedTopAuto=this.calcTopAuto(),this.auto&&(this.$refs.content.scrollTop=this.calcScrollPosition()))})})},calcScrollPosition(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);const i=e.offsetTop-this.calcScrollPosition(),s=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-s-1},changeListIndex(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==B["q"].tab){if(t.keyCode===B["q"].down)this.nextTile();else if(t.keyCode===B["q"].up)this.prevTile();else if(t.keyCode===B["q"].end)this.lastTile();else if(t.keyCode===B["q"].home)this.firstTile();else{if(t.keyCode!==B["q"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional(t){const e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes(){const t=E["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?{...t,"aria-activedescendant":this.activeTile.id}:t},genActivatorListeners(){const t=j.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition(){const t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives(){const t=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&t.push({name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:()=>[this.$el,...this.getOpenDependentElements()]}}),t},genContent(){const t={attrs:{...this.getScopeIdAttrs(),role:"role"in this.$attrs?this.$attrs.role:"menu"},staticClass:"v-menu__content",class:{...this.rootThemeClasses,...this.roundedClasses,"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive,[this.contentClass.trim()]:!0},style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:t=>{const e=t.target;e.getAttribute("disabled")||this.closeOnContentClick&&(this.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(t.on=t.on||{},t.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(t.on=t.on||{},t.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(t.on=t.on||{},t.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",t,this.getContentSlot())},getTiles(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item, .v-divider, .v-subheader")))},mouseEnterHandler(){this.runDelay("open",()=>{this.hasJustFocused||(this.hasJustFocused=!0)})},mouseLeaveHandler(t){this.runDelay("close",()=>{var e;(null===(e=this.$refs.content)||void 0===e?void 0:e.contains(t.relatedTarget))||requestAnimationFrame(()=>{this.isActive=!1,this.callDeactivate()})})},nextTile(){const t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile(){const t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile(){const t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile(){const t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown(t){if(t.keyCode===B["q"].esc){setTimeout(()=>{this.isActive=!1});const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}else!this.isActive&&[B["q"].up,B["q"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick(()=>this.changeListIndex(t))},onResize(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render(t){const e={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",e,[!this.activator&&this.genActivator(),this.showLazyContent(()=>[this.$createElement($["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])])])}}),R=function(){var t=this,e=t._self._c;return e(w["a"],{on:{"click:outside":function(e){return t.$emit("close")}},model:{value:t.selectedOpen,callback:function(e){t.selectedOpen=e},expression:"selectedOpen"}},[e("ebird-dialog",{attrs:{dialog:t.dialog,event:t.selectedEvent},on:{"ebird-close":function(e){t.dialog=!1}}}),t.selectedEvent?e(a["a"],{attrs:{dense:""}},[e(b["a"],{staticClass:"white--text",class:"y"==t.selectedEvent.cancel?"red":"light-green darken-3",attrs:{dense:""}},[e(_["a"],[t._v(t._s("y"==t.selectedEvent.cancel?"["+t.selectedEvent.cancelhelp+"]":"")+" "+t._s(t._f("moment")(t.selectedEvent.date,"MM月DD日 dddd"))+" "+t._s(t.selectedEvent.type))]),e(g["a"]),e(n["a"],{attrs:{icon:"",small:"",dark:""},on:{click:function(e){return t.$emit("close")}}},[e(l["a"],[t._v(t._s(t.icons.mdiClose))])],1)],1),t.selectedEvent?e(a["a"],[e(c["a"],{attrs:{dense:""}},[""==t.ebird_hotspot?[e(d["a"],[e(u["a"],[e(u["c"],[t._v(t._s(t.$t("路線")))]),e(u["b"],[t._v(" "+t._s("en"==t.$i18n.locale?t.selectedEvent.path.ename:t.selectedEvent.name)),t.selectedEvent.memberonly?e("span",[t._v("(人數限定場，需事先報名)")]):t._e()])],1)],1)]:[""==t.greenmap?[e(d["a"],{attrs:{link:"",href:t.ebird_hotspot,target:"_blank"}},[e(u["a"],[e(u["c"],[t._v(t._s(t.$t("路線")))]),e(u["b"],[t._v(t._s("en"==t.$i18n.locale?t.selectedEvent.path.ename:t.selectedEvent.name)),t.selectedEvent.memberonly?e("span",[t._v("("+t._s(t.$t("__msg_limit__"))+")")]):t._e()])],1),e(h["a"],[e(l["a"],{attrs:{color:"green",icon:""}},[t._v(t._s(t.icons.mdiBird))])],1)],1)]:[e(X,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e(d["a"],t._g(t._b({attrs:{link:""}},"v-list-item",s,!1),i),[e(u["a"],[e(u["c"],[t._v(t._s(t.$t("路線")))]),e(u["b"],[t._v(t._s("en"==t.$i18n.locale?t.selectedEvent.path.ename:t.selectedEvent.name)),t.selectedEvent.memberonly?e("span",[t._v("("+t._s(t.$t("__msg_limit__"))+")")]):t._e()])],1),e(h["a"],[e(l["a"],{attrs:{color:"green",icon:""}},[t._v(t._s(t.icons.mdiBird))])],1)],1)]}}],null,!1,258204416)},[e(c["a"],[e(d["a"],{attrs:{href:t.ebird_hotspot,target:"_blank"}},[e(u["c"],[t._v(t._s(t.$t("eBird熱點資訊")))])],1),e(d["a"],{attrs:{href:t.greenmap,target:"_blank"}},[e(u["c"],[t._v(t._s(t.$t("賞鳥綠地圖")))])],1)],1)],1)]],"y"!=t.selectedEvent.cancel&&0==t.selectedEvent.done?[e(d["a"],{attrs:{link:"",href:t.google_calendar,target:"_blank"}},[e(u["a"],[e(u["c"],[t._v(t._s(t.$t("集合時間")))]),e(u["b"],[t._v(t._s(t.selectedEvent.starttime))])],1),e(h["a"],[e(l["a"],{attrs:{color:"orange",dark:"",icon:""}},[t._v(t._s(t.icons.mdiCalendarPlus))])],1)],1),e(d["a"],{attrs:{link:"",href:t.google_map,target:"_blank"}},[e(u["a"],[e(u["c"],[t._v(t._s(t.$t("集合地點")))]),e(u["b"],[t._v(t._s("en"==t.$i18n.locale?t.selectedEvent.path.elocation:t.selectedEvent.location))]),t.selectedEvent.path.bus?e(u["b"],[t._v(t._s("en"==t.$i18n.locale?t.selectedEvent.path.ebus:t.selectedEvent.bus))]):t._e()],1),e(h["a"],[e(l["a"],{attrs:{color:"primary",icon:""}},[t._v(t._s(t.icons.mdiGoogleMaps))])],1)],1)]:[e(d["a"],[e(u["a"],[e(u["c"],[t._v(t._s(t.$t("集合時間")))]),e(u["b"],[t._v(t._s(t.selectedEvent.starttime))])],1)],1),e(d["a"],[e(u["a"],[e(u["c"],[t._v(t._s(t.$t("集合地點")))]),e(u["b"],[t._v(t._s("en"==t.$i18n.locale?t.selectedEvent.path.elocation:t.selectedEvent.location))]),t.selectedEvent.path.bus?e(u["b"],[t._v(t._s("en"==t.$i18n.locale?t.selectedEvent.path.ebus:t.selectedEvent.bus))]):t._e()],1)],1)],e(d["a"],[e(u["a"],[e(u["c"],[t._v(t._s(t.$t("解說員")))]),e(u["b"],[t._v(t._s(t.selectedEvent.leader.join(" ")))])],1)],1),"y"==t.selectedEvent.memberonly?e(d["a"],{attrs:{link:"",href:t.selectedEvent.memberurl}},[e(u["a"],[e(u["c"],[t._v(t._s(t.$t("報名網址")))]),t.selectedEvent.memberurl?e(u["b"],[t._v(t._s(t.selectedEvent.memberurl))]):e(u["b"],[t._v("尚未開始報名")])],1)],1):t._e()],2),"y"!=t.selectedEvent.cancel&&0==t.selectedEvent.done&&t.today?[e(x["a"]),e(O["a"],[0==t.users.length?[e(n["a"],{attrs:{link:"",block:"",href:t.google_form("","",""),target:"_blank",color:"green",dark:""}},[t._v(t._s(t.$t("活動簽到")))])]:1==t.users.length?[e(n["a"],{attrs:{link:"",block:"",href:t.google_form(t.users[0].name,t.users[0].tel,t.users[0].member),target:"_blank",color:"green",dark:""}},[t._v(t._s(t.$t("活動簽到")))])]:[e(X,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e(n["a"],t._g(t._b({attrs:{link:"",block:"",color:"green",dark:""}},"v-btn",s,!1),i),[t._v(t._s(t.$t("活動簽到")))])]}}],null,!1,3023419651)},[e(c["a"],t._l(t.users,(function(i){return e(d["a"],{key:i.name,attrs:{link:"",href:t.google_form(i.name,i.tel,i.member),target:"_blank"}},[e(u["c"],[t._v(t._s(i.name))])],1)})),1)],1)],""!=t.selectedEvent.ebird?e(n["a"],{attrs:{link:"",block:"",color:"primary"},on:{click:t.goto}},[t._v(t._s(t.$t("賞鳥記錄")))]):t._e()],2)]:t._e(),""!=t.selectedEvent.ebird?[e(x["a"]),e(O["a"],[e(g["a"]),e(n["a"],{attrs:{link:"",block:"",color:"primary"},on:{click:function(e){return t.goto(t.selectedEvent)}}},[t._v(t._s(t.$t("賞鳥記錄")))])],1)]:t._e()],2):t._e()],1):t._e()],1)},z=[],J=i("94ed"),K=i("4a00"),G={name:"ActivityDialog",components:{EbirdDialog:K["a"]},props:["selectedOpen","selectedEvent"],data:()=>({icons:{mdiClose:J["l"],mdiCalendarPlus:J["h"],mdiGoogleMaps:J["s"],mdiBird:J["e"]},users:[],dialog:!1,sid:""}),created(){var t;this.users=null!==(t=this.$offlineStorage.get("users"))&&void 0!==t?t:[]},computed:{date(){return this.$moment(this.selectedEvent.date)},today(){return this.date.isSame(this.$moment(),"day")},newlocation(){return this.date.isBefore(this.$moment("2021/07/01","YYYY/MM/DD"),"day")},google_map(){if(this.isOnline){if(this.newlocation)return"https://maps.google.com/?q="+this.selectedEvent.location;{const t=this.selectedEvent.path.pluscode;return"https://maps.google.com/?q="+encodeURIComponent(t)}}return""},google_calendar(){const t=this.$moment(this.selectedEvent.start,"YYYY-MM-DDTHH:mm").format("YYYYMMDDTHHmmSS")+"%2F"+this.$moment(this.selectedEvent.end,"YYYY-MM-DDTHH:mm").format("YYYYMMDDTHHmmSS"),e=this.newlocation?this.selectedEvent.location:encodeURIComponent(this.selectedEvent.path.pluscode);return this.isOnline?"https://calendar.google.com/calendar/render?action=TEMPLATE&dates="+t+"&text="+this.selectedEvent.name+"&location="+e+"&details="+encodeURIComponent("集合地點:"+this.selectedEvent.location+"\n"+(this.selectedEvent.bus?this.selectedEvent.bus+"\n":"")+"領隊:"+this.selectedEvent.leader.join(" ")):""},ebird_hotspot(){const t=this.$moment(this.selectedEvent.date).month()+1,e=this.selectedEvent.path?this.selectedEvent.path.locid:"";return this.isOnline&&e?`https://ebird.org/hotspot/${e}?m=${t}&yr=all&changeDate=`:""},greenmap(){const t=this.selectedEvent.path?this.selectedEvent.path.greenmap:"";return this.isOnline&&t?t:""}},methods:{google_form(t,e,i){return this.isOnline?"https://docs.google.com/forms/d/e/1FAIpQLSflFovOlWATa2MhTy8LaVxaq8ROcsQB3dD98zL4AwkJYB85Qw/viewform?entry.1479042466_year="+this.$moment().format("YYYY")+"&entry.1479042466_month="+this.$moment().format("MM")+"&entry.1479042466_day="+this.$moment().format("DD")+"&entry.120979086="+this.selectedEvent.name+"&entry.1844593536="+t+"&entry.411882768="+e+"&entry.710949816="+i:""},goto(){this.isOnline&&(this.dialog=!0)}}},Q=G,U=i("2877"),V=Object(U["a"])(Q,R,z,!1,null,null,null),Z=V.exports,tt=i("29da"),et={name:"Activity",mixins:[tt["a"]],components:{ActivityDialog:Z,EbirdDialog:K["a"]},data:()=>({icons:{mdiChevronLeft:J["i"],mdiChevronRight:J["j"],mdiBird:J["e"]},colors:["teal","red lighten-4","green","deep-purple","orange lighten-1","grey lighten-1","indigo"],events:[],paths:[],filterevent:[],loading:!0,focus:null,users:[],selectedEvent:null,selectedPath:null,selectedOpen:!1,sid:"",ebirdDialog:!1}),created(){this.focus=this.$moment(new Date),0==this.focus.day()?this.focus=this.focus.day(-7):this.focus=this.focus.day(0)},async mounted(){var t,e;this.loading=!0,this.users=this.$offlineStorage.get("users"),this.events=null!==(t=this.$offlineStorage.get("activity"))&&void 0!==t?t:[],this.paths=null!==(e=this.$offlineStorage.get("paths"))&&void 0!==e?e:[],this.getEvent(),this.loading=!1},methods:{addDay(t){this.focus=this.focus.add(t,"days"),this.getEvent()},getcolor(t){return"y"==t.cancel?"red lighten-4":1==t.done?"grey lighten-1":"關渡自然公園中心二樓"==t.name?"light-green darken-1":"芝山綠園"==t.name?"amber darken-1":"大安森林公園"==t.name?"orange darken-2":"light-blue darken-2"},getEvent(){const t=this.$moment(this.focus).day(7);this.filterevent=this.events.filter(e=>this.$moment(e.date).valueOf()>=this.focus.valueOf()&&this.$moment(e.date).valueOf()<=t.valueOf()),this.filterevent.forEach(t=>this.$set(t,"path",this.paths.find(e=>e.name==t.name)))},eventOpen(t){this.selectedEvent=t,"y"!=this.selectedEvent.cancel&&(this.selectedOpen=!0)},ebirdOpen(t){this.selectedEvent=t,this.selectedEvent&&this.selectedEvent.ebird&&(this.ebirdDialog=!0)}}},it=et,st=Object(U["a"])(it,y,k,!1,null,null,null);e["default"]=st.exports},ee6f:function(t,e,i){}}]);
//# sourceMappingURL=chunk-601de130.a21a14de.js.map
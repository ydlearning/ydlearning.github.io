(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bd36979"],{"1dd9":function(t,e,i){"use strict";i("8cc6");var a=i("bd87"),r=i("26f0"),s=i("d60a"),o=i("a0e9"),l=i("8cdb"),n=i("1ef2"),d=i("f357"),c=i("1e74"),u=i("da9d"),h=i("03af");e["a"]=Object(h["a"])(r["a"],s["a"],o["a"],l["a"],n["a"],d["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?t.offsetLeft:t.left;let r=0;return this.top||this.bottom||i?r=a+t.width/2-e.width/2:(this.left||this.right)&&(r=a+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),`${this.calcXOverflow(r,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let a=0;return this.top||this.bottom?a=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=i+t.height/2-e.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),`${this.calcYOverflow(a+this.pageYOffset)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(c["e"])(this.maxWidth),minWidth:Object(c["e"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(c["o"])(this,"activator",!0)&&Object(u["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=a["a"].options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===c["r"].esc&&(this.getActivator(t),this.runDelay("close"))},t}},render(t){const e=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.getContentSlot()));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[e]),this.genActivator()])}})},"814c":function(t,e,i){"use strict";var a=i("dc83");e["a"]=Object(a["b"])("form").extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>{return t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0})},i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))}):i.valid=e(t),i},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const i=this.watchers.find(t=>t._uid===e._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.$attrs},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"8cc6":function(t,e,i){},aa06:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"align-center":"","justify-center":""}},[i("v-card",{attrs:{flat:"",color:"transparent"}},[i("v-snackbar",{attrs:{top:"",right:"",color:"success"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[i("span",[t._v("Changes apply successfully!")]),i("v-icon",{attrs:{dark:""}},[t._v("mdi-check-circle")])],1),i("v-snackbar",{attrs:{top:"",right:"",color:"error"},model:{value:t.snackbarError,callback:function(e){t.snackbarError=e},expression:"snackbarError"}},[i("span",[t._v("Cancel, form cleared!")]),i("v-icon",{attrs:{dark:""}},[t._v("mdi-alert")])],1),i("v-toolbar",{attrs:{color:"primary",flat:""}},[i("v-toolbar-title",[t._v(t._s(this.$route.name))])],1),i("v-card-text",[i("TheEmailNewField",{attrs:{maxCounterEmail:100,fieldName:"Current E-mail",fieldLabel:"Current E-mail",fieldReadonly:!0,fieldPlaceholder:t.user.email.address,copySymbol:!1,fieldId:"1"},on:{errorCheck:function(e){t.emailNewHasErrors=e}},model:{value:t.user.email.address,callback:function(e){t.$set(t.user.email,"address",e)},expression:"user.email.address"}}),i("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[i("TheEmailNewField",{attrs:{maxCounterEmail:100,fieldName:"New E-mail",fieldLabel:"New E-mail",copySymbol:!1,fieldId:"2"},on:{errorCheck:function(e){t.emailNewHasErrors=e}},model:{value:t.form.emailNew,callback:function(e){t.$set(t.form,"emailNew",e)},expression:"form.emailNew"}}),i("TheEmailRepeatField",{attrs:{maxCounterEmail:t.maxCounterEmail,fieldName:"Repeat E-mail",fieldLabel:"Repeat E-mail",confirmationField:t.form.emailNew},on:{errorCheck:function(e){t.emailRepeatHasErrors=e}},model:{value:t.form.emailRepeat,callback:function(e){t.$set(t.form,"emailRepeat",e)},expression:"form.emailRepeat"}}),i("v-card-actions",[i("v-tooltip",{attrs:{bottom:"",color:"red"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-btn",t._g({attrs:{color:"primary",outlined:""},on:{click:t.resetForm}},Object.assign({},a)),[t._v("Cancel")])]}}])},[i("span",[i("v-icon",{attrs:{size:"15px"}},[t._v("mdi-alert")]),t._v(" All Fields will be deleted!")],1)]),i("v-spacer"),i("v-btn",{attrs:{color:"primary",type:"submit",disabled:!t.formIsValid},on:{click:function(t){}}},[t._v("Apply changes")])],1)],1)],1)],1)],1)},r=[],s=i("2ba1"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,email:!0,max:t.maxCounterEmail},expression:"{ required: true, email: true, max: maxCounterEmail }"}],ref:t.emailName,attrs:{id:t.fieldId,name:t.emailName,"data-vv-name":t.fieldName,label:t.fieldLabel,"error-messages":t.errors.collect(t.fieldName),clearable:t.fieldClearable,disabled:t.fieldDisable,placeholder:t.fieldPlaceholder,readonly:t.fieldReadonly,"append-icon":t.copySymbol?"mdi-content-copy":""},on:{input:function(e){return t.$emit("input",e)},"update:error":function(e){t.$emit("errorCheck",t.errors.has(t.fieldName))},"click:append":function(e){return t.copyToClipboard()}}})},l=[],n={name:"TheEmailNewField",props:{value:{type:String,default:""},maxCounterEmail:{type:Number,default:0,required:!0},fieldName:{type:String,default:"",required:!0},fieldLabel:{type:String,default:"",required:!0},fieldPlaceholder:{type:String,default:"",required:!1},emailName:{type:String,default:"email",required:!1},fieldClearable:{type:Boolean,default:!0,required:!1},fieldDisable:{type:Boolean,default:!1,required:!1},fieldReadonly:{type:Boolean,default:!1,required:!1},copySymbol:{type:Boolean,default:!1,required:!1},fieldId:{type:String,default:"",required:!1}},methods:{copyToClipboard(){var t=document.getElementById(this.fieldId);t.select();try{document.execCommand("copy")}catch(e){alert("Unable to copy")}window.getSelection().removeAllRanges()}},data(){return{}}},d=n,c=i("d9b7"),u=i("6a5d"),h=i.n(u),m=i("bb40"),f=Object(c["a"])(d,o,l,!1,null,null,null),p=f.exports;h()(f,{VTextField:m["a"]});var v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,confirmed:t.confirmationField},expression:"{ required: true, confirmed: confirmationField }"}],ref:t.emailName,attrs:{name:t.emailName,"data-vv-name":t.fieldName,label:t.fieldLabel,"error-messages":t.errors.collect(t.fieldName),clearable:t.fieldClearable},on:{input:function(e){return t.$emit("input",e)},"update:error":function(e){t.$emit("errorCheck",t.errors.has(t.fieldName))}}})},b=[],g={name:"TheEmailRepeatField",props:{value:{type:String,default:""},maxCounterEmail:{type:Number,default:0,required:!0},fieldName:{type:String,default:"",required:!0},fieldLabel:{type:String,default:"",required:!0},confirmationField:{type:String,default:"",required:!0},emailName:{type:String,default:"email",required:!1},fieldClearable:{type:Boolean,default:!0,required:!1}},data(){return{}}},y=g,w=Object(c["a"])(y,v,b,!1,null,null,null),k=w.exports;h()(w,{VTextField:m["a"]});var x={data(){const t=Object.freeze({emailNew:"",emailRepeat:""});return{form:Object.assign({},t),defaultForm:t,newEmail:"",maxCounterEmail:100,snackbar:!1,snackbarError:!1}},computed:{...Object(s["b"])(["isLoggedIn","user"]),formIsValid(){return this.form.emailNew&&this.form.emailRepeat&&!this.emailNewHasErrors&&!this.emailRepeatHasErrors}},methods:{resetForm(){this.snackbarError=!0,this.form=Object.assign({},this.defaultForm),this.$refs.form.reset()},submit(){this.snackbar=!0}},components:{TheEmailNewField:p,TheEmailRepeatField:k}},C=x,E=i("f34e"),_=i("a94c"),N=i("7d35"),T=i("94f6"),B=i("814c"),$=i("26c4"),S=i("b29e"),V=i("c1d1"),O=i("08e2"),A=i("6e08"),q=i("1dd9"),F=Object(c["a"])(C,a,r,!1,null,null,null);e["default"]=F.exports;h()(F,{VBtn:E["a"],VCard:_["a"],VCardActions:N["a"],VCardText:N["b"],VContainer:T["a"],VForm:B["a"],VIcon:$["a"],VSnackbar:S["a"],VSpacer:V["a"],VToolbar:O["a"],VToolbarTitle:A["b"],VTooltip:q["a"]})},b29e:function(t,e,i){"use strict";i("f1a2");var a=i("26f0"),r=i("f357"),s=i("d3d0"),o=i("03af"),l=i("da9d");e["a"]=Object(o["a"])(a["a"],r["a"],Object(s["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive(){this.setTimeout()}},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(l["d"])("auto-height",this)},mounted(){this.setTimeout()},methods:{setTimeout(){window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},this.timeout))}},render(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}})},f1a2:function(t,e,i){}}]);
//# sourceMappingURL=chunk-0bd36979.ac6ac0e3.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c9409c5"],{"0528":function(t,e,n){"use strict";n("fdd5")},"057f":function(t,e,n){var a=n("fc6a"),s=n("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(t){try{return s(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?l(t):s(a(t))}},"0abc":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-page"},[t._v(" "+t._s(t.cloneMassiveOfValues())+" "+t._s(t.pup)+" "),n("div",{staticClass:"nav"},[n("div",{staticClass:"nav__body nav__body_padding"},[n("div",{staticClass:"nav__content"},[n("div",{staticClass:"nav__link-body"},[n("div",{staticClass:"nav__link",on:{click:function(e){return t.cleanAllSavedData()}}},[n("router-link",{staticClass:"link non-selectable-element",attrs:{title:"Contacts",to:"/"}},[t._v("◀")])],1)]),n("div",{staticClass:"nav__title nav__title_margin"},[n("div",{staticClass:"lastname"},[t._v(t._s(t.getLastname()))]),t._v(" "+t._s(t.getName())+" "+t._s(t.getSecondName())+" ")]),n("div",{staticClass:"nav__link non-visible"}),n("button",{staticClass:"nav__adder nav__adder_display non-selectable-element",attrs:{title:"Add field"},on:{click:function(e){return t.showAddModal()}}},[t._v("➕")])])])]),n("div",{staticClass:"contact-page-body"},[n("div",{staticClass:"controls"},[t.showUndo?t.showUndo?n("div",{staticClass:"controls__buttons"},[n("button",{staticClass:"controls__undo key-style non-selectable-element",attrs:{title:"Undo the last change"},on:{mousedown:function(e){return t.whatIsUndo()}}},[t._v("↩")]),t._v(" "+t._s(t.unShowUndo())+" "),n("button",{staticClass:"controls__cancel key-style non-selectable-element",attrs:{title:"Undo all changes"},on:{click:function(e){return t.showCancelModal()}}},[t._v("🔄")])]):t._e():n("div",{staticClass:"controls__fake"}),n("h3",{staticClass:"controls__title"},[t._v("Contact information")]),n("div",{staticClass:"controls__fake"},[t.showUndo?n("button",{staticClass:"controls__cancel controls__cancel-1 key-style non-selectable-element",attrs:{title:"Undo all changes"},on:{click:function(e){return t.showCancelModal()}}},[t._v("🔄")]):t._e(),n("button",{staticClass:"controls__adder key-style non-selectable-element",attrs:{title:"Add field"},on:{click:function(e){return t.showAddModal()}}},[t._v("➕")])])]),n("DefaultField",{key:t.defaultFieldKey,attrs:{propFullContactName:t.fullContactName},on:{changeDefaultField:t.changeDefaultField}}),t.fieldsIsEmpty?n("p",{staticClass:"empty"},[t._v("It's empty here")]):n("ul",{staticClass:"fields"},t._l(Object.entries(t.savedMassiveOfValues),(function(e,a){return n("KeyValue",{key:t.getFieldKey(a),attrs:{val:e},on:{changeField:t.changeField,showRemoveModal:t.showRemoveModal}})})),1)],1),t.wannaShowModal?n("Validate",{attrs:{modalName:t.modalName,removeFieldName:t.removeFieldName},on:{addField:t.addField,removeField:function(e){return t.removeField()},cancelAll:function(e){return t.cancelAll()},unShowModal:function(e){return t.unShowModal()}}}):t._e()],1)},s=[],i=n("5530");n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("fb6a"),n("b0c0"),n("a630");function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function l(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function r(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=l(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,s=function(){};return{s:s,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,r=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){r=!0,i=t},f:function(){try{o||null==n["return"]||n["return"]()}finally{if(r)throw i}}}}n("a434"),n("b64b"),n("e439");var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"fields__element key-style"},[n("label",{staticClass:"fields__body"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.val[0],expression:"val[0]",modifiers:{trim:!0}}],staticClass:"fields__key",attrs:{type:"text"},domProps:{value:t.val[0]},on:{mouseup:function(e){return t.saveOldField(t.val)},change:t.changeField,input:function(e){e.target.composing||t.$set(t.val,0,e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v("| "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.val[1],expression:"val[1]",modifiers:{trim:!0}}],staticClass:"fields__value",attrs:{type:"text"},domProps:{value:t.val[1]},on:{mouseup:function(e){return t.saveOldField(t.val)},change:t.changeField,input:function(e){e.target.composing||t.$set(t.val,1,e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("button",{staticClass:"remover non-selectable-element",attrs:{title:"Remove field"},on:{click:t.showRemoveModal}},[t._v("❌")])])},u=[],d=(n("498a"),{props:["val"],data:function(){return{keysValues:[],trim:!1,flag:!0}},methods:{saveOldField:function(t){this.flag&&(this.keysValues[0]=t[0],this.keysValues[1]=t[1],this.flag=!1)},showRemoveModal:function(){this.$emit("showRemoveModal",this.val[0])},changeField:function(){this.keysValues[2]=this.val[0],this.keysValues[3]=this.val[1],this.trimField(),this.$emit("changeField",this.keysValues,this.trim),this.keysValues=[],this.trim=!1,this.flag=!0},trimField:function(){this.keysValues[0]===this.keysValues[2].trim()&&this.keysValues[1]===this.keysValues[3].trim()&&(this.trim=!0)}}}),f=d,h=(n("2881"),n("2877")),m=Object(h["a"])(f,c,u,!1,null,"380c34e5",null),v=m.exports,p=n("df8f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"default-fields"},[n("div",{staticClass:"default-fields__body"},[n("ul",{staticClass:"default-fields__list"},[n("li",{staticClass:"default-fields__element key-style"},[n("p",{staticClass:"default-fields__key"},[t._v("Name:")]),n("label",{staticClass:"default-fields__value"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.propFullContactName[0],expression:"propFullContactName[0]",modifiers:{trim:!0}}],staticClass:"default-fields__input",attrs:{type:"text",placeholder:"Empty"},domProps:{value:t.propFullContactName[0]},on:{click:function(e){return t.saveOldFullName(t.propFullContactName)},change:function(e){return t.changeDefaultField()},input:function(e){e.target.composing||t.$set(t.propFullContactName,0,e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),n("li",{staticClass:"default-fields__element key-style"},[n("p",{staticClass:"default-fields__key"},[t._v("Lastname:")]),n("label",{staticClass:"default-fields__value"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.propFullContactName[1],expression:"propFullContactName[1]",modifiers:{trim:!0}}],staticClass:"default-fields__input",attrs:{type:"text",placeholder:"Empty"},domProps:{value:t.propFullContactName[1]},on:{click:function(e){return t.saveOldFullName(t.propFullContactName)},change:function(e){return t.changeDefaultField()},input:function(e){e.target.composing||t.$set(t.propFullContactName,1,e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])])]),n("ul",{staticClass:"default-fields__list"},[n("li",{staticClass:"default-fields__element key-style"},[n("p",{staticClass:"default-fields__key"},[t._v("Secondname:")]),n("label",{staticClass:"default-fields__value"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.propFullContactName[2],expression:"propFullContactName[2]",modifiers:{trim:!0}}],staticClass:"default-fields__input",attrs:{type:"text",placeholder:"Empty"},domProps:{value:t.propFullContactName[2]},on:{click:function(e){return t.saveOldFullName(t.propFullContactName)},change:function(e){return t.changeDefaultField()},input:function(e){e.target.composing||t.$set(t.propFullContactName,2,e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),n("li",{staticClass:"default-fields__element key-style"},[n("p",{staticClass:"default-fields__key"},[t._v("Phone number:")]),n("label",{staticClass:"default-fields__value"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.propFullContactName[3],expression:"propFullContactName[3]",modifiers:{trim:!0}}],staticClass:"default-fields__input",attrs:{type:"number",placeholder:"Empty"},domProps:{value:t.propFullContactName[3]},on:{click:function(e){return t.saveOldFullName(t.propFullContactName)},change:function(e){return t.changeDefaultField()},input:function(e){e.target.composing||t.$set(t.propFullContactName,3,e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])])])])])},b=[],_={props:["propFullContactName"],data:function(){return{oldFullName:[],trim:!1,flag:!0}},methods:{saveOldFullName:function(t){if(this.flag){for(var e=0;e<t.length;e++)this.oldFullName[e]=t[e];this.flag=!1}},changeDefaultField:function(){this.trimField(),this.$emit("changeDefaultField",this.propFullContactName,this.oldFullName,this.trim),this.oldFullName=[],this.trim=!1,this.flag=!0},trimField:function(){this.oldFullName[0]===this.propFullContactName[0].trim()&&this.oldFullName[1]===this.propFullContactName[1].trim()&&this.oldFullName[2]===this.propFullContactName[2].trim()&&(this.trim=!0)}}},g=_,C=(n("2d3e"),Object(h["a"])(g,y,b,!1,null,"87f1cc0a",null)),w=C.exports,O=n("2f62"),k={name:"ContactPage",components:{Validate:p["a"],KeyValue:v,DefaultField:w},data:function(){return{fieldsIsEmpty:!1,doCloneMassive:!0,wannaShowModal:!1,showUndo:!1,showCancel:!1,modalName:"",removeFieldName:"",savedMassiveOfValues:{},undo:[],whatsUndo:[[],[],[],[]],forOptimize:[],fullContactName:[],defaultArray:[],fieldKey:0,defaultFieldKey:0}},methods:{forceRerenderFields:function(){this.fieldKey+=1},forceRerenderDefaultFields:function(){this.defaultFieldKey+=1},getFieldKey:function(t){return t+this.fieldKey},cleanAllSavedData:function(){this.contactMassiveMutation(),this.cleanSavedMassive(),this.cleanUndo(),localStorage.removeItem("index")},contactMassiveMutation:function(){this.defaultFieldsMutation(this.fullContactName),this.$store.commit("contactMassiveMutation",this.savedMassiveOfValues),this.fieldsIsEmpty=!1},cleanSavedMassive:function(){this.savedMassiveOfValues={}},whatIsUndo:function(){switch(this.undo[this.undo.length-1]){case"wasAdded":this.undoAdd();break;case"wasRemoved":this.undoRemove();break;case"wasChanged":this.undoChangedFields();break;case"wasChangedDefault":this.undoChangedDefaultFields();break}this.undo.splice(this.searchLastIndex(this.undo),1)},undoAdd:function(){this.getAllIndexes(this.whatsUndo[0][this.searchLastIndex(this.whatsUndo[0])]),delete this.savedMassiveOfValues[this.forOptimize[0]],this.whatsUndo[0].splice(this.searchLastIndex(this.whatsUndo[0]),1),this.cleanForOptimize(),this.getIsEmpty(),this.forceRerenderFields()},undoRemove:function(){this.getAllIndexes(this.whatsUndo[1][this.searchLastIndex(this.whatsUndo[1])]);var t=this.ObjMutation(this.forOptimize[2]);this.savedMassiveOfValues[this.forOptimize[0]]=this.forOptimize[1],Object.assign(this.savedMassiveOfValues,t),this.whatsUndo[1].splice(this.searchLastIndex(this.whatsUndo[1]),1),this.cleanForOptimize(),this.getIsEmpty(),this.forceRerenderFields()},undoChangedFields:function(){this.getAllIndexes(this.whatsUndo[2][this.searchLastIndex(this.whatsUndo[2])]);var t=this.ObjMutation(this.forOptimize[2]);this.savedMassiveOfValues[this.forOptimize[0]]=this.savedMassiveOfValues[this.forOptimize[2]],delete this.savedMassiveOfValues[this.forOptimize[2]],this.savedMassiveOfValues[this.forOptimize[0]]=this.forOptimize[1],Object.assign(this.savedMassiveOfValues,t),this.whatsUndo[2].splice(this.searchLastIndex(this.whatsUndo[2]),1),this.cleanForOptimize(),this.forceRerenderFields()},undoChangedDefaultFields:function(){this.getAllIndexes(this.whatsUndo[3][this.searchLastIndex(this.whatsUndo[3])]),this.defaultFieldsMutation(this.forOptimize),this.updateFullName(),this.forceRerenderDefaultFields(),this.whatsUndo[3].splice(this.searchLastIndex(this.whatsUndo[3]),1),this.cleanForOptimize(),this.getName(),this.getLastname(),this.getSecondName()},searchLastIndex:function(t){return t.lastIndexOf(t[t.length-1])},getAllIndexes:function(t){var e,n=r(t);try{for(n.s();!(e=n.n()).done;){var a=e.value;this.forOptimize.push(a)}}catch(s){n.e(s)}finally{n.f()}},cleanForOptimize:function(){this.forOptimize=[]},unShowUndo:function(){return 0===this.undo.length&&(this.showUndo=!1,this.showCancel=!1),""},cleanUndo:function(){this.undo=[]},showAddModal:function(){this.modalName="AddOnSecondPage",this.wannaShowModal=!0},addField:function(t,e){this.savedMassiveOfValues[t]=e,this.unShowModal(),this.showCancel=!0,this.showUndo=!0,this.getIsEmpty(),this.undo.push("wasAdded"),this.whatsUndo[0].push([t,e])},showRemoveModal:function(t){this.modalName="RemoveOnSecondPage",this.removeFieldName=t,this.wannaShowModal=!0},removeField:function(){var t=this.findFieldPosition();this.undo.push("wasRemoved"),this.whatsUndo[1].push([this.removeFieldName,this.savedMassiveOfValues[this.removeFieldName],t]),delete this.savedMassiveOfValues[this.removeFieldName],this.unShowModal(),this.showCancel=!0,this.showUndo=!0,this.getIsEmpty()},findFieldPosition:function(){var t,e=Object.keys(this.savedMassiveOfValues),n=r(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(a===this.removeFieldName)break;e=a}}catch(s){n.e(s)}finally{n.f()}return"string"!==typeof e&&(e=0),e},changeField:function(t,e){e||(this.undo.push("wasChanged"),this.whatsUndo[2].push(t),t[0]===t[2]&&this.changeValue(t),t[0]!==t[2]&&this.changeKey(t),this.showCancel=!0,this.showUndo=!0)},changeKey:function(t){var e=this.ObjMutation(t[0]);Object.defineProperty(this.savedMassiveOfValues,t[2],Object.getOwnPropertyDescriptor(this.savedMassiveOfValues,t[0])),delete this.savedMassiveOfValues[t[0]],Object.assign(this.savedMassiveOfValues,e)},changeValue:function(t){this.savedMassiveOfValues[t[0]]=t[3]},changeDefaultField:function(t,e,n){n||(this.undo.push("wasChangedDefault"),this.whatsUndo[3].push(e),this.fullContactName=t,this.defaultFieldsMutation(t),this.showCancel=!0,this.showUndo=!0,this.getName(),this.getLastname(),this.getSecondName())},showCancelModal:function(){this.modalName="CanOnSecondPage",this.wannaShowModal=!0},cancelAll:function(){this.cleanSavedMassive(),Object.assign(this.savedMassiveOfValues,this.contacts[this.index].massiveOfValues),this.defaultFieldsMutation(this.defaultArray),this.showCancel=!1,this.showUndo=!1,this.unShowModal(),this.cleanUndo(),this.whatsUndo=[[],[],[],[]],this.getIsEmpty(),this.forceRerenderDefaultFields(),this.updateFullName()},unShowModal:function(){this.wannaShowModal=!1},getIsEmpty:function(){this.fieldsIsEmpty=0===Object.keys(this.savedMassiveOfValues).length},defaultFieldsMutation:function(t){this.$store.commit("defaultFieldsMutation",t)},ObjMutation:function(t){var e={},n=!1;if(0===t)e=this.savedMassiveOfValues,this.savedMassiveOfValues={};else for(var a in this.savedMassiveOfValues)n&&(e[a]=this.savedMassiveOfValues[a],delete this.savedMassiveOfValues[a]),this.savedMassiveOfValues[a]===this.savedMassiveOfValues[t]&&(n=!0);return e},cloneMassiveOfValues:function(){return this.doCloneMassive&&(this.cleanSavedMassive(),Object.assign(this.savedMassiveOfValues,this.contacts[this.index].massiveOfValues),this.getIsEmpty(),this.defaultArray.push(this.fullContactName[0]=this.contacts[this.index].firstName),this.defaultArray.push(this.fullContactName[1]=this.contacts[this.index].lastName),this.defaultArray.push(this.fullContactName[2]=this.contacts[this.index].secondName),this.defaultArray.push(this.fullContactName[3]=this.contacts[this.index].telNumber),this.doCloneMassive=!1),""},updateFullName:function(){return this.fullContactName[0]=this.contacts[this.index].firstName,this.fullContactName[1]=this.contacts[this.index].lastName,this.fullContactName[2]=this.contacts[this.index].secondName,this.fullContactName[3]=this.contacts[this.index].telNumber,""},getName:function(){return"".concat(this.contacts[this.index].firstName)},getLastname:function(){return void 0!==this.contacts[this.index].lastName?"".concat(this.contacts[this.index].lastName):""},getSecondName:function(){return void 0!==this.contacts[this.index].secondName?"".concat(this.contacts[this.index].secondName):""}},computed:Object(i["a"])({pup:function(){addEventListener("popstate",this.cleanAllSavedData,!1)}},Object(O["b"])(["contacts","index"]))},F=k,N=(n("6909"),Object(h["a"])(F,a,s,!1,null,"3868d35a",null));e["default"]=N.exports},"159b":function(t,e,n){var a=n("da84"),s=n("fdbc"),i=n("17c2"),o=n("9112");for(var l in s){var r=a[l],c=r&&r.prototype;if(c&&c.forEach!==i)try{o(c,"forEach",i)}catch(u){c.forEach=i}}},"17c2":function(t,e,n){"use strict";var a=n("b727").forEach,s=n("a640"),i=s("forEach");t.exports=i?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var a=n("d039"),s=n("b622"),i=n("2d00"),o=s("species");t.exports=function(t){return i>=51||!a((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2881:function(t,e,n){"use strict";n("fd17")},"2d3e":function(t,e,n){"use strict";n("5101")},"498a":function(t,e,n){"use strict";var a=n("23e7"),s=n("58a8").trim,i=n("c8d2");a({target:"String",proto:!0,forced:i("trim")},{trim:function(){return s(this)}})},"4a5e":function(t,e,n){},"4de4":function(t,e,n){"use strict";var a=n("23e7"),s=n("b727").filter,i=n("1dde"),o=i("filter");a({target:"Array",proto:!0,forced:!o},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var a=n("0366"),s=n("7b0b"),i=n("9bdd"),o=n("e95a"),l=n("50c4"),r=n("8418"),c=n("35a1");t.exports=function(t){var e,n,u,d,f,h,m=s(t),v="function"==typeof this?this:Array,p=arguments.length,y=p>1?arguments[1]:void 0,b=void 0!==y,_=c(m),g=0;if(b&&(y=a(y,p>2?arguments[2]:void 0,2)),void 0==_||v==Array&&o(_))for(e=l(m.length),n=new v(e);e>g;g++)h=b?y(m[g],g):m[g],r(n,g,h);else for(d=_.call(m),f=d.next,n=new v;!(u=f.call(d)).done;g++)h=b?i(d,y,[u.value,g],!0):u.value,r(n,g,h);return n.length=g,n}},5101:function(t,e,n){},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),s=n("5899"),i="["+s+"]",o=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),r=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:r(1),end:r(2),trim:r(3)}},"65f0":function(t,e,n){var a=n("861d"),s=n("e8b5"),i=n("b622"),o=i("species");t.exports=function(t,e){var n;return s(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!s(n.prototype)?a(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},6909:function(t,e,n){"use strict";n("4a5e")},"746f":function(t,e,n){var a=n("428f"),s=n("5135"),i=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});s(e,t)||o(e,t,{value:i.f(t)})}},8418:function(t,e,n){"use strict";var a=n("c04e"),s=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var o=a(e);o in t?s.f(t,o,i(0,n)):t[o]=n}},"9bdd":function(t,e,n){var a=n("825a"),s=n("2a62");t.exports=function(t,e,n,i){try{return i?e(a(n)[0],n[1]):e(n)}catch(o){throw s(t),o}}},a434:function(t,e,n){"use strict";var a=n("23e7"),s=n("23cb"),i=n("a691"),o=n("50c4"),l=n("7b0b"),r=n("65f0"),c=n("8418"),u=n("1dde"),d=u("splice"),f=Math.max,h=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,a,u,d,p,y,b=l(this),_=o(b.length),g=s(t,_),C=arguments.length;if(0===C?n=a=0:1===C?(n=0,a=_-g):(n=C-2,a=h(f(i(e),0),_-g)),_+n-a>m)throw TypeError(v);for(u=r(b,a),d=0;d<a;d++)p=g+d,p in b&&c(u,d,b[p]);if(u.length=a,n<a){for(d=g;d<_-a;d++)p=d+a,y=d+n,p in b?b[y]=b[p]:delete b[y];for(d=_;d>_-a+n;d--)delete b[d-1]}else if(n>a)for(d=_-a;d>g;d--)p=d+a-1,y=d+n-1,p in b?b[y]=b[p]:delete b[y];for(d=0;d<n;d++)b[d+g]=arguments[d+2];return b.length=_-a+n,u}})},a4d3:function(t,e,n){"use strict";var a=n("23e7"),s=n("da84"),i=n("d066"),o=n("c430"),l=n("83ab"),r=n("4930"),c=n("fdbf"),u=n("d039"),d=n("5135"),f=n("e8b5"),h=n("861d"),m=n("825a"),v=n("7b0b"),p=n("fc6a"),y=n("c04e"),b=n("5c6c"),_=n("7c73"),g=n("df75"),C=n("241c"),w=n("057f"),O=n("7418"),k=n("06cf"),F=n("9bf2"),N=n("d1e7"),M=n("9112"),x=n("6eeb"),S=n("5692"),A=n("f772"),V=n("d012"),E=n("90e3"),j=n("b622"),U=n("e538"),P=n("746f"),I=n("d44e"),$=n("69f3"),D=n("b727").forEach,R=A("hidden"),z="Symbol",L="prototype",K=j("toPrimitive"),J=$.set,T=$.getterFor(z),B=Object[L],Q=s.Symbol,W=i("JSON","stringify"),q=k.f,G=F.f,H=w.f,X=N.f,Y=S("symbols"),Z=S("op-symbols"),tt=S("string-to-symbol-registry"),et=S("symbol-to-string-registry"),nt=S("wks"),at=s.QObject,st=!at||!at[L]||!at[L].findChild,it=l&&u((function(){return 7!=_(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,e,n){var a=q(B,e);a&&delete B[e],G(t,e,n),a&&t!==B&&G(B,e,a)}:G,ot=function(t,e){var n=Y[t]=_(Q[L]);return J(n,{type:z,tag:t,description:e}),l||(n.description=e),n},lt=c?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},rt=function(t,e,n){t===B&&rt(Z,e,n),m(t);var a=y(e,!0);return m(n),d(Y,a)?(n.enumerable?(d(t,R)&&t[R][a]&&(t[R][a]=!1),n=_(n,{enumerable:b(0,!1)})):(d(t,R)||G(t,R,b(1,{})),t[R][a]=!0),it(t,a,n)):G(t,a,n)},ct=function(t,e){m(t);var n=p(e),a=g(n).concat(mt(n));return D(a,(function(e){l&&!dt.call(n,e)||rt(t,e,n[e])})),t},ut=function(t,e){return void 0===e?_(t):ct(_(t),e)},dt=function(t){var e=y(t,!0),n=X.call(this,e);return!(this===B&&d(Y,e)&&!d(Z,e))&&(!(n||!d(this,e)||!d(Y,e)||d(this,R)&&this[R][e])||n)},ft=function(t,e){var n=p(t),a=y(e,!0);if(n!==B||!d(Y,a)||d(Z,a)){var s=q(n,a);return!s||!d(Y,a)||d(n,R)&&n[R][a]||(s.enumerable=!0),s}},ht=function(t){var e=H(p(t)),n=[];return D(e,(function(t){d(Y,t)||d(V,t)||n.push(t)})),n},mt=function(t){var e=t===B,n=H(e?Z:p(t)),a=[];return D(n,(function(t){!d(Y,t)||e&&!d(B,t)||a.push(Y[t])})),a};if(r||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),n=function(t){this===B&&n.call(Z,t),d(this,R)&&d(this[R],e)&&(this[R][e]=!1),it(this,e,b(1,t))};return l&&st&&it(B,e,{configurable:!0,set:n}),ot(e,t)},x(Q[L],"toString",(function(){return T(this).tag})),x(Q,"withoutSetter",(function(t){return ot(E(t),t)})),N.f=dt,F.f=rt,k.f=ft,C.f=w.f=ht,O.f=mt,U.f=function(t){return ot(j(t),t)},l&&(G(Q[L],"description",{configurable:!0,get:function(){return T(this).description}}),o||x(B,"propertyIsEnumerable",dt,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!r,sham:!r},{Symbol:Q}),D(g(nt),(function(t){P(t)})),a({target:z,stat:!0,forced:!r},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var n=Q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!lt(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),a({target:"Object",stat:!0,forced:!r,sham:!l},{create:ut,defineProperty:rt,defineProperties:ct,getOwnPropertyDescriptor:ft}),a({target:"Object",stat:!0,forced:!r},{getOwnPropertyNames:ht,getOwnPropertySymbols:mt}),a({target:"Object",stat:!0,forced:u((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),W){var vt=!r||u((function(){var t=Q();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));a({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,n){var a,s=[t],i=1;while(arguments.length>i)s.push(arguments[i++]);if(a=e,(h(e)||void 0!==t)&&!lt(t))return f(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!lt(e))return e}),s[1]=e,W.apply(null,s)}})}Q[L][K]||M(Q[L],K,Q[L].valueOf),I(Q,z),V[R]=!0},a630:function(t,e,n){var a=n("23e7"),s=n("4df4"),i=n("1c7e"),o=!i((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:o},{from:s})},a640:function(t,e,n){"use strict";var a=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&a((function(){n.call(null,e||function(){throw 1},1)}))}},b0c0:function(t,e,n){var a=n("83ab"),s=n("9bf2").f,i=Function.prototype,o=i.toString,l=/^\s*function ([^ (]*)/,r="name";a&&!(r in i)&&s(i,r,{configurable:!0,get:function(){try{return o.call(this).match(l)[1]}catch(t){return""}}})},b64b:function(t,e,n){var a=n("23e7"),s=n("7b0b"),i=n("df75"),o=n("d039"),l=o((function(){i(1)}));a({target:"Object",stat:!0,forced:l},{keys:function(t){return i(s(t))}})},b727:function(t,e,n){var a=n("0366"),s=n("44ad"),i=n("7b0b"),o=n("50c4"),l=n("65f0"),r=[].push,c=function(t){var e=1==t,n=2==t,c=3==t,u=4==t,d=6==t,f=7==t,h=5==t||d;return function(m,v,p,y){for(var b,_,g=i(m),C=s(g),w=a(v,p,3),O=o(C.length),k=0,F=y||l,N=e?F(m,O):n||f?F(m,0):void 0;O>k;k++)if((h||k in C)&&(b=C[k],_=w(b,k,g),t))if(e)N[k]=_;else if(_)switch(t){case 3:return!0;case 5:return b;case 6:return k;case 2:r.call(N,b)}else switch(t){case 4:return!1;case 7:r.call(N,b)}return d?-1:c||u?u:N}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},c8d2:function(t,e,n){var a=n("d039"),s=n("5899"),i="​᠎";t.exports=function(t){return a((function(){return!!s[t]()||i[t]()!=i||s[t].name!==t}))}},d28b:function(t,e,n){var a=n("746f");a("iterator")},dbb4:function(t,e,n){var a=n("23e7"),s=n("83ab"),i=n("56ef"),o=n("fc6a"),l=n("06cf"),r=n("8418");a({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(t){var e,n,a=o(t),s=l.f,c=i(a),u={},d=0;while(c.length>d)n=s(a,e=c[d++]),void 0!==n&&r(u,e,n);return u}})},df8f:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal"},[n("div",{staticClass:"modal__background",on:{click:function(e){return t.unShowModal()}}}),"AddOnFirstPage"===t.modalName?n("div",{staticClass:"modal__body key-style"},[n("h4",{staticClass:"modal__tittle"},[t._v("Add new contact:")]),n("label",{staticClass:"modal__inputs-body"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.values[0],expression:"values[0]"}],staticClass:"modal__input",attrs:{type:"text",placeholder:" Name"},domProps:{value:t.values[0]},on:{input:function(e){e.target.composing||t.$set(t.values,0,e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.values[1],expression:"values[1]"}],staticClass:"modal__input",attrs:{type:"number",placeholder:" Phone number"},domProps:{value:t.values[1]},on:{input:function(e){e.target.composing||t.$set(t.values,1,e.target.value)}}})]),n("div",{staticClass:"modal__buttons-body"},[n("button",{staticClass:"modal__button non-selectable-element",on:{click:function(e){return t.addContact()},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addContact()}}},[t._v("✅")]),n("button",{staticClass:"modal__button non-selectable-element",on:{click:function(e){return t.unShowModal()},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.unShowModal()}}},[t._v("❌")])])]):"RemoveOnFirstPage"===t.modalName?n("div",{staticClass:"modal__body key-style"},[n("h4",{staticClass:"modal__tittle"},[t._v("Are you sure you want to delete the contact "+t._s(t.removeContactName)+"?")]),n("div",{staticClass:"modal__buttons-body"},[n("button",{staticClass:"modal__button non-selectable-element",on:{click:function(e){return t.removeContact()},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.removeContact()}}},[t._v("✅")]),n("button",{staticClass:"modal__button non-selectable-element",on:{click:function(e){return t.unShowModal()},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.unShowModal()}}},[t._v("❌")])])]):"AddOnSecondPage"===t.modalName?n("div",{staticClass:"modal__body key-style"},[n("h4",{staticClass:"modal__tittle"},[t._v("Add new field:")]),n("label",{staticClass:"modal__inputs-body"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.values[0],expression:"values[0]"}],staticClass:"modal__input",attrs:{type:"text",placeholder:" Key"},domProps:{value:t.values[0]},on:{input:function(e){e.target.composing||t.$set(t.values,0,e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.values[1],expression:"values[1]"}],staticClass:"modal__input",attrs:{placeholder:" Value"},domProps:{value:t.values[1]},on:{input:function(e){e.target.composing||t.$set(t.values,1,e.target.value)}}})]),n("div",{staticClass:"modal__buttons-body"},[n("button",{staticClass:"modal__button non-selectable-element",on:{click:function(e){return t.addField()},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addField()}}},[t._v("✅")]),n("button",{staticClass:"modal__button non-selectable-element",on:{click:function(e){return t.unShowModal()},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.unShowModal()}}},[t._v("❌")])])]):"RemoveOnSecondPage"===t.modalName?n("div",{staticClass:"modal__body key-style"},[n("h4",{staticClass:"modal__tittle"},[t._v("Are you sure you want to delete the field "+t._s(t.removeFieldName)+"?")]),n("div",{staticClass:"modal__buttons-body"},[n("button",{staticClass:"modal__button non-selectable-element",on:{click:function(e){return t.removeField()},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.removeField()}}},[t._v("✅")]),n("button",{staticClass:"modal__button non-selectable-element",on:{click:function(e){return t.unShowModal()},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.unShowModal()}}},[t._v("❌")])])]):"CanOnSecondPage"===t.modalName?n("div",{staticClass:"modal__body key-style"},[n("h4",{staticClass:"modal__tittle"},[t._v("Are you sure you want to discard all changes?")]),n("div",{staticClass:"modal__buttons-body"},[n("button",{staticClass:"modal__button non-selectable-element",on:{click:function(e){return t.cancelAll()},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.cancelAll()}}},[t._v("✅")]),n("button",{staticClass:"modal__button non-selectable-element",on:{click:function(e){return t.unShowModal()},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.unShowModal()}}},[t._v("❌")])])]):t._e()])},s=[],i=(n("d3b7"),n("ddb0"),{props:["removeContactName","removeFieldName","modalName"],data:function(){return{values:[]}},methods:{addContact:function(){if(this.values[0]&&this.values[1]){var t={firstName:this.values[0],lastName:void 0,secondName:void 0,telNumber:this.values[1],massiveOfValues:{}};this.values=[],this.$emit("addContact",t)}},removeContact:function(){this.$emit("removeContact")},addField:function(){this.values[0]&&this.values[1]&&(this.$emit("addField",this.values[0],this.values[1]),this.values=[])},removeField:function(){this.$emit("removeField")},cancelAll:function(){this.$emit("cancelAll")},unShowModal:function(){this.$emit("unShowModal")}}}),o=i,l=(n("0528"),n("2877")),r=Object(l["a"])(o,a,s,!1,null,"204e2e45",null);e["a"]=r.exports},e01a:function(t,e,n){"use strict";var a=n("23e7"),s=n("83ab"),i=n("da84"),o=n("5135"),l=n("861d"),r=n("9bf2").f,c=n("e893"),u=i.Symbol;if(s&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};c(f,u);var h=f.prototype=u.prototype;h.constructor=f;var m=h.toString,v="Symbol(test)"==String(u("test")),p=/^Symbol\((.*)\)[^)]+$/;r(h,"description",{configurable:!0,get:function(){var t=l(this)?this.valueOf():this,e=m.call(t);if(o(d,t))return"";var n=v?e.slice(7,-1):e.replace(p,"$1");return""===n?void 0:n}}),a({global:!0,forced:!0},{Symbol:f})}},e439:function(t,e,n){var a=n("23e7"),s=n("d039"),i=n("fc6a"),o=n("06cf").f,l=n("83ab"),r=s((function(){o(1)})),c=!l||r;a({target:"Object",stat:!0,forced:c,sham:!l},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},e538:function(t,e,n){var a=n("b622");e.f=a},e8b5:function(t,e,n){var a=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},fb6a:function(t,e,n){"use strict";var a=n("23e7"),s=n("861d"),i=n("e8b5"),o=n("23cb"),l=n("50c4"),r=n("fc6a"),c=n("8418"),u=n("b622"),d=n("1dde"),f=d("slice"),h=u("species"),m=[].slice,v=Math.max;a({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var n,a,u,d=r(this),f=l(d.length),p=o(t,f),y=o(void 0===e?f:e,f);if(i(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?s(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(d,p,y);for(a=new(void 0===n?Array:n)(v(y-p,0)),u=0;p<y;p++,u++)p in d&&c(a,u,d[p]);return a.length=u,a}})},fd17:function(t,e,n){},fdd5:function(t,e,n){}}]);
//# sourceMappingURL=chunk-0c9409c5.64341049.js.map
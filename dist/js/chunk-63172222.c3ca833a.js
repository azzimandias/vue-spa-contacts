(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63172222"],{"5db4":function(t,e,a){"use strict";a("8b86")},7156:function(t,e,a){var n=a("861d"),o=a("d2bb");t.exports=function(t,e,a){var s,c;return o&&"function"==typeof(s=e.constructor)&&s!==a&&n(c=s.prototype)&&c!==a.prototype&&o(t,c),t}},"7aac":function(t,e,a){},"7ba1":function(t,e,a){"use strict";a("7aac")},"8b86":function(t,e,a){},"99af":function(t,e,a){"use strict";var n=a("23e7"),o=a("d039"),s=a("e8b5"),c=a("861d"),i=a("7b0b"),r=a("50c4"),l=a("8418"),d=a("65f0"),u=a("1dde"),m=a("b622"),f=a("2d00"),h=m("isConcatSpreadable"),v=9007199254740991,N="Maximum allowed index exceeded",p=f>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),_=u("concat"),b=function(t){if(!c(t))return!1;var e=t[h];return void 0!==e?!!e:s(t)},w=!p||!_;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,a,n,o,s,c=i(this),u=d(c,0),m=0;for(e=-1,n=arguments.length;e<n;e++)if(s=-1===e?c:arguments[e],b(s)){if(o=r(s.length),m+o>v)throw TypeError(N);for(a=0;a<o;a++,m++)a in s&&l(u,m,s[a])}else{if(m>=v)throw TypeError(N);l(u,m++,s)}return u.length=m,u}})},a9e3:function(t,e,a){"use strict";var n=a("83ab"),o=a("da84"),s=a("94ca"),c=a("6eeb"),i=a("5135"),r=a("c6b6"),l=a("7156"),d=a("c04e"),u=a("d039"),m=a("7c73"),f=a("241c").f,h=a("06cf").f,v=a("9bf2").f,N=a("58a8").trim,p="Number",_=o[p],b=_.prototype,w=r(m(b))==p,C=function(t){var e,a,n,o,s,c,i,r,l=d(t,!1);if("string"==typeof l&&l.length>2)if(l=N(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+l}for(s=l.slice(2),c=s.length,i=0;i<c;i++)if(r=s.charCodeAt(i),r<48||r>o)return NaN;return parseInt(s,n)}return+l};if(s(p,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var I,g=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof g&&(w?u((function(){b.valueOf.call(a)})):r(a)!=p)?l(new _(C(e)),a,g):C(e)},y=n?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;y.length>M;M++)i(_,I=y[M])&&!i(g,I)&&v(g,I,h(_,I));g.prototype=b,b.constructor=g,c(o,p,g)}},f4a9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-page"},[a("div",{staticClass:"nav"},[a("div",{staticClass:"nav__body"},[a("div",{staticClass:"nav__content"},[a("h2",{staticClass:"nav__title"},[t._v("Contacts")]),a("button",{staticClass:"nav__adder non-selectable-element",attrs:{title:"Add contact"},on:{click:function(e){return t.showAddModal()}}},[t._v("➕")])])])]),a("div",{staticClass:"contacts"},[a("div",{staticClass:"contacts__body"},[t.listIsEmpty?a("p",{staticClass:"empty"},[t._v("It's empty here")]):a("ul",{staticClass:"contacts__list"},t._l(t.contacts,(function(e,n){return a("Contact",{key:n,attrs:{contactIndex:n,firstName:e.firstName,lastName:e.lastName,secondName:e.secondName},on:{showRemoveModal:t.showRemoveModal}})})),1),a("Validate",{directives:[{name:"show",rawName:"v-show",value:t.wannaShowModal,expression:"wannaShowModal"}],attrs:{modalName:t.modalName,removeContactName:t.removeContactName},on:{removeContact:function(e){return t.removeContact()},addContact:t.addContact,unShowModal:function(e){return t.unShowModal()}}})],1)])])},o=[],s=a("5530"),c=(a("a434"),a("0abc")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"contacts__element-body"},[a("div",{staticClass:"contacts__element key-style"},[a("div",{staticClass:"contacts__index-taker",on:{mousedown:function(e){return t.saveContactIndex()}}},[a("router-link",{staticClass:"contacts__link",attrs:{title:"Contact Information",to:"/contact"}},[a("div",{staticClass:"contacts__link1"},[a("div",{staticClass:"contacts__contact-name"},[t._v(" "+t._s(t.getLastName())+" ")]),t._v(" "+t._s(t.getFullName())+" ")])]),a("button",{staticClass:"remover remover1 non-selectable-element",attrs:{title:"Remove contact"},on:{click:function(e){return t.showRemoveModal()}}},[t._v("❌")])],1)])])},r=[],l=(a("a9e3"),a("99af"),a("2f62")),d={props:{contactIndex:Number,firstName:{type:String,default:""},lastName:{type:String,default:""},secondName:{type:String,default:""}},methods:{getLastName:function(){return"".concat(this.lastName)},getFullName:function(){return"".concat(this.firstName,"\n              ").concat(this.secondName)},showRemoveModal:function(){this.$emit("showRemoveModal",this.contactIndex)},saveContactIndex:function(){localStorage.setItem("index","1"),this.$store.commit("updateIndex",this.contactIndex)}},computed:Object(s["a"])({},Object(l["b"])(["contacts","index"]))},u=d,m=(a("7ba1"),a("2877")),f=Object(m["a"])(u,i,r,!1,null,"4deabe70",null),h=f.exports,v=a("df8f"),N={name:"HomePage",components:{ContactPage:c["default"],Contact:h,Validate:v["a"]},data:function(){return{listIsEmpty:!1,wannaShowModal:!1,modalName:"",removeContactName:"",removeIndex:0}},methods:{addContact:function(t){this.unShowModal(),this.contacts.push(t),this.listIsEmpty=!1},showAddModal:function(){this.modalName="AddOnFirstPage",this.wannaShowModal=!0},showRemoveModal:function(t){this.modalName="RemoveOnFirstPage",this.removeContactName=this.contacts[t].firstName,this.removeIndex=t,this.wannaShowModal=!0},removeContact:function(){this.unShowModal(),this.contacts.splice(this.removeIndex,1),this.removeIndex=0,0===this.contacts.length&&(this.listIsEmpty=!0)},unShowModal:function(){this.wannaShowModal=!1}},computed:Object(s["a"])({},Object(l["b"])(["contacts"]))},p=N,_=(a("5db4"),Object(m["a"])(p,n,o,!1,null,null,null));e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-63172222.c3ca833a.js.map
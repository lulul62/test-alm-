webpackJsonp([22],{548:function(n,t,a){a(698);var e=a(1)(a(690),a(704),"data-v-20994149",null);n.exports=e.exports},690:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(243);t.default={name:"project-note",directives:{StickyScroll:e.a},props:{value:{type:Array,default:[]},height:{default:"auto"}},data:function(){return{inputMessage:""}},methods:{keyHandler:function(n){13===n.keyCode&&this.sendMessage()},sendMessage:function(){this.inputMessage&&(this.$emit("input",this.value.concat({text:this.inputMessage,yours:!0})),this.inputMessage="")}},mounted:function(){this.$emit("input",this.value)}}},692:function(n,t,a){t=n.exports=a(519)(),t.push([n.i,'\nh2[data-v-20994149], p[data-v-20994149] {\n  font-size: 100%;\n  font-weight: normal;\n}\nul[data-v-20994149], li[data-v-20994149] {\n  list-style: none;\n}\nul[data-v-20994149] {\n  overflow: hidden;\n  padding: 3em;\n}\nul li a[data-v-20994149] {\n  text-decoration: none;\n  color: #000;\n  background: #ffc;\n  display: block;\n  height: 10em;\n  width: 10em;\n  padding: 1em;\n  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);\n  -moz-transition: -moz-transform .15s linear;\n  -o-transition: -o-transform .15s linear;\n  -webkit-transition: -webkit-transform .15s linear;\n}\nul li[data-v-20994149] {\n  margin: 1em;\n  float: left;\n}\nul li h2[data-v-20994149] {\n  font-size: 140%;\n  font-weight: bold;\n  padding-bottom: 10px;\n}\nul li p[data-v-20994149] {\n  font-family: "Reenie Beanie",arial,sans-serif;\n  font-size: 180%;\n}\nul li a[data-v-20994149] {\n  -webkit-transform: rotate(-6deg);\n  -o-transform: rotate(-6deg);\n  -moz-transform: rotate(-6deg);\n}\nul li:nth-child(even) a[data-v-20994149] {\n  -o-transform: rotate(4deg);\n  -webkit-transform: rotate(4deg);\n  -moz-transform: rotate(4deg);\n  position: relative;\n  top: 5px;\n  background: #cfc;\n}\nul li:nth-child(3n) a[data-v-20994149] {\n  -o-transform: rotate(-3deg);\n  -webkit-transform: rotate(-3deg);\n  -moz-transform: rotate(-3deg);\n  position: relative;\n  top: -5px;\n  background: #ccf;\n}\nul li:nth-child(5n) a[data-v-20994149] {\n  -o-transform: rotate(5deg);\n  -webkit-transform: rotate(5deg);\n  -moz-transform: rotate(5deg);\n  position: relative;\n  top: -10px;\n}\nul li a[data-v-20994149]:hover, ul li a[data-v-20994149]:focus {\n  box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);\n  -moz-box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);\n  -webkit-box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);\n  -webkit-transform: scale(1.25);\n  -moz-transform: scale(1.25);\n  -o-transform: scale(1.25);\n  position: relative;\n  z-index: 5;\n}\nol[data-v-20994149] {\n  text-align: center;\n}\nol li[data-v-20994149] {\n  display: inline;\n  padding-right: 1em;\n}\nol li a[data-v-20994149] {\n  color: #fff;\n}\n.vuestic-chat[data-v-20994149] {\n  width: 100%;\n}\n.chat-body[data-v-20994149] {\n  min-height: 18.75rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  margin-bottom: 1.5rem;\n  overflow: auto;\n}\n.chat-message[data-v-20994149] {\n  padding: 0.657rem 1.375rem;\n  margin-bottom: 0.625rem;\n  border-radius: 0.875rem;\n  max-width: 70%;\n  overflow-wrap: break-word;\n}\n.chat-message[data-v-20994149]:last-child {\n    margin-bottom: 0;\n}\n.chat-message.alien[data-v-20994149] {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n    border-top-left-radius: 0;\n    background-color: #eff4f5;\n}\n.chat-message.yours[data-v-20994149] {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    border-top-right-radius: 0;\n    background-color: #4ae387;\n}\n.chat-message .chat-message-input[data-v-20994149] {\n    resize: vertical !important;\n}\n',"",{version:3,sources:["/Users/ludwig/Documents/Travail/SOPRA/ag2r/src/components/projects/ProjectNote.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB,aAAa;CACd;AACD;EACE,sBAAsB;EACtB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,aAAa;EACb,YAAY;EACZ,aAAa;EACb,8CAA8C;EAC9C,4CAA4C;EAC5C,wCAAwC;EACxC,kDAAkD;CACnD;AACD;EACE,YAAY;EACZ,YAAY;CACb;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,qBAAqB;CACtB;AACD;EACE,8CAA8C;EAC9C,gBAAgB;CACjB;AACD;EACE,iCAAiC;EACjC,4BAA4B;EAC5B,8BAA8B;CAC/B;AACD;EACE,2BAA2B;EAC3B,gCAAgC;EAChC,6BAA6B;EAC7B,mBAAmB;EACnB,SAAS;EACT,iBAAiB;CAClB;AACD;EACE,4BAA4B;EAC5B,iCAAiC;EACjC,8BAA8B;EAC9B,mBAAmB;EACnB,UAAU;EACV,iBAAiB;CAClB;AACD;EACE,2BAA2B;EAC3B,gCAAgC;EAChC,6BAA6B;EAC7B,mBAAmB;EACnB,WAAW;CACZ;AACD;EACE,6CAA6C;EAC7C,kDAAkD;EAClD,qDAAqD;EACrD,+BAA+B;EAC/B,4BAA4B;EAC5B,0BAA0B;EAC1B,mBAAmB;EACnB,WAAW;CACZ;AACD;EACE,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,2BAA2B;MACvB,uBAAuB;EAC3B,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,2BAA2B;EAC3B,wBAAwB;EACxB,wBAAwB;EACxB,eAAe;EACf,0BAA0B;CAC3B;AACD;IACI,iBAAiB;CACpB;AACD;IACI,2BAA2B;QACvB,uBAAuB;IAC3B,0BAA0B;IAC1B,0BAA0B;CAC7B;AACD;IACI,yBAAyB;QACrB,qBAAqB;IACzB,2BAA2B;IAC3B,0BAA0B;CAC7B;AACD;IACI,4BAA4B;CAC/B",file:"ProjectNote.vue",sourcesContent:['\nh2[data-v-20994149], p[data-v-20994149] {\n  font-size: 100%;\n  font-weight: normal;\n}\nul[data-v-20994149], li[data-v-20994149] {\n  list-style: none;\n}\nul[data-v-20994149] {\n  overflow: hidden;\n  padding: 3em;\n}\nul li a[data-v-20994149] {\n  text-decoration: none;\n  color: #000;\n  background: #ffc;\n  display: block;\n  height: 10em;\n  width: 10em;\n  padding: 1em;\n  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);\n  -moz-transition: -moz-transform .15s linear;\n  -o-transition: -o-transform .15s linear;\n  -webkit-transition: -webkit-transform .15s linear;\n}\nul li[data-v-20994149] {\n  margin: 1em;\n  float: left;\n}\nul li h2[data-v-20994149] {\n  font-size: 140%;\n  font-weight: bold;\n  padding-bottom: 10px;\n}\nul li p[data-v-20994149] {\n  font-family: "Reenie Beanie",arial,sans-serif;\n  font-size: 180%;\n}\nul li a[data-v-20994149] {\n  -webkit-transform: rotate(-6deg);\n  -o-transform: rotate(-6deg);\n  -moz-transform: rotate(-6deg);\n}\nul li:nth-child(even) a[data-v-20994149] {\n  -o-transform: rotate(4deg);\n  -webkit-transform: rotate(4deg);\n  -moz-transform: rotate(4deg);\n  position: relative;\n  top: 5px;\n  background: #cfc;\n}\nul li:nth-child(3n) a[data-v-20994149] {\n  -o-transform: rotate(-3deg);\n  -webkit-transform: rotate(-3deg);\n  -moz-transform: rotate(-3deg);\n  position: relative;\n  top: -5px;\n  background: #ccf;\n}\nul li:nth-child(5n) a[data-v-20994149] {\n  -o-transform: rotate(5deg);\n  -webkit-transform: rotate(5deg);\n  -moz-transform: rotate(5deg);\n  position: relative;\n  top: -10px;\n}\nul li a[data-v-20994149]:hover, ul li a[data-v-20994149]:focus {\n  box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);\n  -moz-box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);\n  -webkit-box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);\n  -webkit-transform: scale(1.25);\n  -moz-transform: scale(1.25);\n  -o-transform: scale(1.25);\n  position: relative;\n  z-index: 5;\n}\nol[data-v-20994149] {\n  text-align: center;\n}\nol li[data-v-20994149] {\n  display: inline;\n  padding-right: 1em;\n}\nol li a[data-v-20994149] {\n  color: #fff;\n}\n.vuestic-chat[data-v-20994149] {\n  width: 100%;\n}\n.chat-body[data-v-20994149] {\n  min-height: 18.75rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  margin-bottom: 1.5rem;\n  overflow: auto;\n}\n.chat-message[data-v-20994149] {\n  padding: 0.657rem 1.375rem;\n  margin-bottom: 0.625rem;\n  border-radius: 0.875rem;\n  max-width: 70%;\n  overflow-wrap: break-word;\n}\n.chat-message[data-v-20994149]:last-child {\n    margin-bottom: 0;\n}\n.chat-message.alien[data-v-20994149] {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n    border-top-left-radius: 0;\n    background-color: #eff4f5;\n}\n.chat-message.yours[data-v-20994149] {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    border-top-right-radius: 0;\n    background-color: #4ae387;\n}\n.chat-message .chat-message-input[data-v-20994149] {\n    resize: vertical !important;\n}\n'],sourceRoot:""}])},698:function(n,t,a){var e=a(692);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a(520)("c2b8fbac",e,!0)},704:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("vuestic-widget",{staticClass:"no-h-padding no-v-padding"},[a("vuestic-tabs",{ref:"tabs",attrs:{names:["Notes"]}},[a("div",{attrs:{slot:"Notes"},slot:"Notes"},[a("div",{staticClass:"vuestic-chat"},[a("div",{directives:[{name:"sticky-scroll",rawName:"v-sticky-scroll",value:{animate:!0,duration:500},expression:"{animate: true, duration: 500}"}],staticClass:"chat-body",style:{height:n.height}},[a("ul",[a("li",[a("a",{attrs:{href:"#"}},[a("h2",[n._v("Livraison finale 10/07/2018")])])]),n._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("h2",[n._v("Réunion client 22/01/2018")]),n._v(" "),a("p")])])])]),n._v(" "),a("div",{staticClass:"chat-controls"},[a("fieldset",[a("div",{staticClass:"form-group form-group-w-btn"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:n.inputMessage,expression:"inputMessage"}],attrs:{required:"",title:""},domProps:{value:n.inputMessage},on:{keypress:function(t){n.keyHandler(t)},input:function(t){t.target.composing||(n.inputMessage=t.target.value)}}}),n._v(" "),a("label",{staticClass:"control-label"},[n._v("Inscrivez votre note")]),a("i",{staticClass:"bar"})]),n._v(" "),a("div",{staticClass:"btn btn-sm btn-primary",on:{click:function(t){n.sendMessage()}}},[n._v("Envoyer")])])])])])])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=22.4dfb3aba088195f848c7.js.map
(function(e){function t(t){for(var s,r,o=t[0],a=t[1],l=t[2],u=0,v=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&v.push(c[r][0]),c[r]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);d&&d(t);while(v.length)v.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},c={app:0},i=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/phasjournal/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0616":function(e,t,n){},"22d0":function(e,t,n){},3446:function(e,t,n){"use strict";n("22d0")},"6f11":function(e,t,n){"use strict";n("dea1")},8935:function(e,t,n){"use strict";n("d7db")},9024:function(e,t,n){"use strict";n("f08b")},b2ec:function(e,t,n){},c939:function(e,t,n){"use strict";n("b2ec")},cb62:function(e,t,n){"use strict";n("0616")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23"),c={id:"app"},i=Object(s["f"])("h1",{class:"title"},[Object(s["e"])(" PhasJournal "),Object(s["f"])("a",{href:"https://github.com/MysteryBlokHed/phasjournal",target:"_blank"}," GitHub ")],-1);function r(e,t,n,r,o,a){var l=Object(s["m"])("Timer"),d=Object(s["m"])("EvidenceSelector"),u=Object(s["m"])("EvidenceNeeded"),v=Object(s["m"])("PotentialGhosts");return Object(s["h"])(),Object(s["c"])("div",c,[i,Object(s["f"])(l),Object(s["f"])(d),Object(s["f"])(u),Object(s["f"])(v)])}n("4d90");var o=Object(s["o"])("data-v-f738f1ba");Object(s["j"])("data-v-f738f1ba");var a={class:"container"},l={key:0},d={class:"timer"},u=Object(s["e"])(" : "),v=Object(s["f"])("br",null,null,-1),h=Object(s["f"])("br",null,null,-1),b=Object(s["f"])("br",null,null,-1);Object(s["i"])();var f=o((function(e,t,n,c,i,r){return Object(s["h"])(),Object(s["c"])("div",a,[e.show?(Object(s["h"])(),Object(s["c"])("div",l,[Object(s["f"])("p",d,Object(s["n"])(e.minutes)+":"+Object(s["n"])(String(e.seconds).padStart(2,"0")),1),Object(s["f"])("input",{onChange:t[1]||(t[1]=function(){return e.updateMinutes&&e.updateMinutes.apply(e,arguments)}),class:"minutes",type:"number",min:"0",value:"5"},null,32),u,Object(s["f"])("input",{onChange:t[2]||(t[2]=function(){return e.updateSeconds&&e.updateSeconds.apply(e,arguments)}),class:"seconds",type:"number",min:"0",max:"59",value:"00"},null,32),v,Object(s["f"])("button",{class:"toggle-timer",onClick:t[3]||(t[3]=function(){return e.toggleTimer&&e.toggleTimer.apply(e,arguments)})},"Start Timer"),h,Object(s["f"])("button",{onClick:t[4]||(t[4]=function(){return e.resetTimer&&e.resetTimer.apply(e,arguments)})},"Reset Timer"),b])):Object(s["d"])("",!0),Object(s["f"])("a",{class:"toggle-timer-visible",onClick:t[5]||(t[5]=function(){return e.toggleVisible&&e.toggleVisible.apply(e,arguments)})},"Hide")])})),g=Object(s["g"])({name:"Timer",data:function(){return{minutes:5,seconds:0,ticking:!1,show:!0,interval:-1}},methods:{toggleTimer:function(e){var t=this,n=e.target;this.ticking?(n.innerText="Start Timer",clearInterval(this.interval)):(n.innerText="Stop Timer",this.interval=setInterval((function(){if(t.ticking)if(t.seconds>0)t.seconds--;else if(t.minutes>0)t.seconds=59,t.minutes--;else{var e=document.querySelector(".toggle-timer");e.click()}}),1e3)),this.ticking=!this.ticking},resetTimer:function(){var e=document.querySelector(".minutes"),t=document.querySelector(".seconds"),n=document.querySelector(".toggle-timer");clearInterval(this.interval),this.ticking=!1,this.minutes=parseInt(e.value),this.seconds=parseInt(t.value),n.innerText="Start Timer"},updateMinutes:function(e){var t=e.target,n=parseInt(t.value);this.minutes=n>0?n:0},updateSeconds:function(e){var t=e.target,n=parseInt(t.value);n<59&&n>0?this.seconds=n:(this.seconds=0,t.value="00"),t.value=t.value.padStart(2,"0")},toggleVisible:function(e){var t=e.target;t.innerText=this.show?"Show":"Hide",this.show=!this.show}}});n("6f11");g.render=f,g.__scopeId="data-v-f738f1ba";var p=g,O=Object(s["o"])("data-v-a958595a");Object(s["j"])("data-v-a958595a");var j=Object(s["f"])("h1",null,"Evidence",-1),m=Object(s["f"])("p",null,[Object(s["e"])(" Click on evidence to change its state. "),Object(s["f"])("span",{class:"present"},"Green"),Object(s["e"])(" = Present, "),Object(s["f"])("span",{class:"not-present"},"Red"),Object(s["e"])(" = Not Present ")],-1),y={class:"evidence-types"};Object(s["i"])();var w,k=O((function(e,t,n,c,i,r){return Object(s["h"])(),Object(s["c"])("div",null,[j,m,Object(s["f"])("ul",y,[(Object(s["h"])(!0),Object(s["c"])(s["a"],null,Object(s["l"])(e.evidence,(function(n){return Object(s["h"])(),Object(s["c"])("li",{key:n},[Object(s["f"])("button",{onClick:t[1]||(t[1]=function(){return e.evidenceCycle&&e.evidenceCycle.apply(e,arguments)}),class:"neutral",evidence:n},Object(s["n"])(n),9,["evidence"])])})),128)),Object(s["f"])("li",null,[Object(s["f"])("button",{onClick:t[2]||(t[2]=function(){return e.resetEvidence&&e.resetEvidence.apply(e,arguments)}),class:"neutral"},"Reset Evidence")])])])})),E=n("2909"),P=n("b85c");n("fb6a"),n("a434"),n("caad"),n("2532"),n("07ac"),n("4de4"),n("13d5");(function(e){e["Emf5"]="EMF 5",e["SpiritBox"]="Spirit Box",e["Fingerprints"]="Fingerprints",e["GhostOrbs"]="Ghost Orbs",e["GhostWriting"]="Ghost Writing",e["Freezing"]="Freezing Temperatures",e["DotsProjector"]="D.O.T.S Projector"})(w||(w={}));var N=[{type:"Spirit",evidence:[w.Emf5,w.SpiritBox,w.GhostWriting],strength:"None",weakness:"Smudge sticks will stop attacks for a long period of time"},{type:"Wraith",evidence:[w.Emf5,w.SpiritBox,w.DotsProjector],strength:"Can't be tracked by footsteps",weakness:"Toxic reaction to salt"},{type:"Phantom",evidence:[w.SpiritBox,w.Fingerprints,w.DotsProjector],strength:"Looking at a it significantly lowers your sanity",weakness:"Taking a photo will make it go away for some time"},{type:"Poltergeist",evidence:[w.SpiritBox,w.Fingerprints,w.GhostWriting],strength:"Can throw many objects at once",weakness:"Almost ineffective in an empty room"},{type:"Banshee",evidence:[w.Fingerprints,w.GhostOrbs,w.DotsProjector],strength:"Only targets one person at a time",weakness:"Less active near a Crucifix"},{type:"Jinn",evidence:[w.Emf5,w.Fingerprints,w.Freezing],strength:"Travels faster when its victim is farther away",weakness:"Disabling the breaker disables its ability"},{type:"Mare",evidence:[w.SpiritBox,w.GhostOrbs,w.GhostWriting],strength:"Increased chance of attacking in the dark",weakness:"Turning lights on will make it less likely to attack"},{type:"Revenant",evidence:[w.GhostOrbs,w.GhostWriting,w.Freezing],strength:"Travels faster while hunting",weakness:"Hiding will make it move much slower"},{type:"Shade",evidence:[w.Emf5,w.GhostOrbs,w.Freezing],strength:"Being shy makes the ghost harder to find",weakness:"Doesn't hunt with multiple people nearby"},{type:"Demon",evidence:[w.Fingerprints,w.GhostWriting,w.Freezing],strength:"Attacks more than any other ghost",weakness:"Answered Ouija Board questions do not lower sanity"},{type:"Yurei",evidence:[w.GhostOrbs,w.Freezing,w.DotsProjector],strength:"Has a strong effect on sanity",weakness:"Using Smudge Sticks in the ghost room will stop it wandering for some time"},{type:"Oni",evidence:[w.Emf5,w.Freezing,w.DotsProjector],strength:"More active with more people and can moves objects fast",weakness:"Being more active makes it easier to find"},{type:"Hantu",evidence:[w.Fingerprints,w.GhostOrbs,w.Freezing],strength:"Moves faster at lower temperatures",weakness:"Moves slower at higher temperatures"},{type:"Yokai",evidence:[w.SpiritBox,w.GhostOrbs,w.DotsProjector],strength:"Talking near the ghost increses attack chance",weakness:"Can only hear nearby voices when hunting"},{type:"Goryo",evidence:[w.Emf5,w.Fingerprints,w.DotsProjector],strength:"Only appears on camera with nobody nearby",weakness:"Rarely seen far from ghost room"},{type:"Myling",evidence:[w.Emf5,w.Fingerprints,w.GhostWriting],strength:"Quieter while hunting",weakness:"More frequently makes paranormal sounds"}],S={debugLevel:0,state:Object(s["k"])({ghosts:N.slice(),evidencePresent:[],evidenceNotPresent:[],evidenceInCommon:[],evidenceNeeded:Object.values(w)}),setGhosts:function(e){var t;1===this.debugLevel?console.log("setGhosts called with new value",e):2===this.debugLevel&&(console.groupCollapsed("setGhosts called with new value",e),console.trace(),console.groupEnd()),this.state.ghosts.length=0,(t=this.state.ghosts).push.apply(t,Object(E["a"])(e))},clearGhosts:function(){1===this.debugLevel?console.log("clearGhosts called"):2===this.debugLevel&&(console.groupCollapsed("clearGhosts called"),console.trace(),console.groupEnd()),this.state.ghosts.length=0},setEvidencePresent:function(e){var t;1===this.debugLevel?console.log("setEvidencePresent called with new value",e):2===this.debugLevel&&(console.groupCollapsed("setEvidencePresent called with new value",e),console.trace(),console.groupEnd()),this.state.evidencePresent.length=0,(t=this.state.evidencePresent).push.apply(t,Object(E["a"])(e))},clearEvidencePresent:function(){1===this.debugLevel?console.log("clearEvidencePresent called"):2===this.debugLevel&&(console.groupCollapsed("clearEvidencePresent called"),console.trace(),console.groupEnd()),this.state.evidencePresent.length=0},setEvidenceNotPresent:function(e){var t;1===this.debugLevel?console.log("setEvidenceNotPresent called with new value",e):2===this.debugLevel&&(console.groupCollapsed("setEvidenceNotPresent called with new value",e),console.trace(),console.groupEnd()),this.state.evidenceNotPresent.length=0,(t=this.state.evidenceNotPresent).push.apply(t,Object(E["a"])(e))},clearEvidenceNotPresent:function(){1===this.debugLevel?console.log("clearEvidenceNotPresent called"):2===this.debugLevel&&(console.groupCollapsed("clearEvidenceNotPresent called"),console.trace(),console.groupEnd()),this.state.evidenceNotPresent.length=0},setEvidenceInCommon:function(e){var t;1===this.debugLevel?console.log("setEvidenceInCommon called with new value",e):2===this.debugLevel&&(console.groupCollapsed("setEvidenceInCommon called with new value",e),console.trace(),console.groupEnd()),this.state.evidenceInCommon.length=0,(t=this.state.evidenceInCommon).push.apply(t,Object(E["a"])(e))},clearEvidenceInCommon:function(){1===this.debugLevel?console.log("clearEvidenceInCommon called"):2===this.debugLevel&&(console.groupCollapsed("clearEvidenceInCommon called"),console.trace(),console.groupEnd()),this.state.evidenceInCommon.length=0},setEvidenceNeeded:function(e){var t;1===this.debugLevel?console.log("setEvidenceNeeded called with new value",e):2===this.debugLevel&&(console.groupCollapsed("setEvidenceNeeded called with new value",e),console.trace(),console.groupEnd()),this.state.evidenceNeeded.length=0,(t=this.state.evidenceNeeded).push.apply(t,Object(E["a"])(e))},clearEvidenceNeeded:function(){1===this.debugLevel?console.log("clearEvidenceNeeded called"):2===this.debugLevel&&(console.groupCollapsed("clearEvidenceNeeded called"),console.trace(),console.groupEnd()),this.state.evidenceNeeded.length=0}},C=S,G=Object(s["g"])({name:"EvidenceSelector",data:function(){return{ghosts:C.state.ghosts,evidence:w,evidencePresent:C.state.evidencePresent,evidenceNotPresent:C.state.evidenceNotPresent,evidenceInCommon:C.state.evidenceInCommon,evidenceNeeded:C.state.evidenceNeeded}},methods:{evidenceCycle:function(e){var t=e.target,n=t.getAttribute("evidence"),s=this.evidencePresent.slice(),c=this.evidenceNotPresent.slice();switch(t.className){case"neutral":s.push(n),C.setEvidencePresent(s),t.className="present";break;case"present":s.splice(s.indexOf(n),1),c.push(n),C.setEvidencePresent(s),C.setEvidenceNotPresent(c),t.className="not-present";break;case"not-present":c.splice(c.indexOf(n),1),C.setEvidenceNotPresent(c),t.className="neutral";break}this.updatePotentialGhosts(),this.updateEvidenceNeeded()},resetEvidence:function(){var e,t=document.querySelector(".evidence-types"),n=Object(P["a"])(t.children);try{for(n.s();!(e=n.n()).done;){var s=e.value;s.children[0].className="neutral"}}catch(c){n.e(c)}finally{n.f()}C.clearEvidencePresent(),C.clearEvidenceNotPresent(),C.clearEvidenceInCommon(),this.updatePotentialGhosts(),this.updateEvidenceNeeded()},updatePotentialGhosts:function(){for(var e=Object(E["a"])(N),t=[],n=this.evidencePresent.length,s=0;s<N.length;s++){var c,i=Object(P["a"])(this.evidenceNotPresent);try{for(i.s();!(c=i.n()).done;){var r=c.value;if(N[s].evidence.includes(r)){e.splice(e.indexOf(N[s]),1);break}}}catch(v){i.e(v)}finally{i.f()}}t=Object(E["a"])(e);for(var o=0;o<e.length;o++){var a,l=0,d=Object(P["a"])(this.evidencePresent);try{for(d.s();!(a=d.n()).done;){var u=a.value;e[o].evidence.includes(u)&&l++}}catch(v){d.e(v)}finally{d.f()}l<n&&t.splice(t.indexOf(e[o]),1)}C.setGhosts(t)},updateEvidenceNeeded:function(){var e=this;if(1===this.ghosts.length)return C.clearEvidenceNeeded(),void C.setEvidenceInCommon(this.ghosts[0].evidence);var t,n=Object.values(w),s=n.slice(),c=Object(P["a"])(this.ghosts);try{for(c.s();!(t=c.n()).done;){var i,r=t.value,o=Object(P["a"])(r.evidence);try{for(o.s();!(i=o.n()).done;){var a=i.value;s.includes(a)&&s.splice(s.indexOf(a),1)}}catch(b){o.e(b)}finally{o.f()}}}catch(b){c.e(b)}finally{c.f()}n=n.filter((function(e){return!s.includes(e)})),n=n.filter((function(t){return!e.evidencePresent.includes(t)&&!e.evidencePresent.includes(t)}));var l,d=[],u=Object(P["a"])(this.ghosts);try{for(u.s();!(l=u.n()).done;){var v=l.value;d.push(v.evidence)}}catch(b){u.e(b)}finally{u.f()}if(this.ghosts.length>1){var h=d.reduce((function(e,t){return e.filter((function(e){return t.includes(e)}))}));C.setEvidenceInCommon(h),n=n.filter((function(e){return!h.includes(e)}))}C.setEvidenceNeeded(n)}}});n("3446"),n("8935");G.render=k,G.__scopeId="data-v-a958595a";var T=G,L={key:0},I=Object(s["f"])("h2",null,"Evidence to Look For",-1),x={key:1};function F(e,t,n,c,i,r){return Object(s["h"])(),Object(s["c"])("div",null,[e.evidenceNeeded.length?(Object(s["h"])(),Object(s["c"])("div",L,[I,Object(s["f"])("ul",null,[(Object(s["h"])(!0),Object(s["c"])(s["a"],null,Object(s["l"])(e.evidenceNeeded,(function(e){return Object(s["h"])(),Object(s["c"])("li",{key:e},Object(s["n"])(e),1)})),128))])])):(Object(s["h"])(),Object(s["c"])("p",x,"No evidence to look for."))])}var M=Object(s["g"])({name:"EvidenceNeeded",data:function(){return{ghosts:C.state.ghosts,evidenceNeeded:C.state.evidenceNeeded}}});M.render=F;var z=M,H=Object(s["o"])("data-v-d29db00a");Object(s["j"])("data-v-d29db00a");var B=Object(s["f"])("h1",null,"Potential Ghosts",-1),_={key:0},D={key:0,class:"container"},W={class:"ghosts-column type"},q=Object(s["f"])("div",null,"Type",-1),A={class:"ghosts-column evidence"},R=Object(s["f"])("div",null,"Evidence",-1),J={class:"ghosts-column strength"},V=Object(s["f"])("div",null,"Strength",-1),Y={class:"ghosts-column weakness"},Q=Object(s["f"])("div",null,"Weakness",-1),U={key:1,class:"container"},K=Object(s["e"])(" Evidence: "),X={key:1};Object(s["i"])();var Z=H((function(e,t,n,c,i,r){return Object(s["h"])(),Object(s["c"])("div",null,[B,e.ghosts?(Object(s["h"])(),Object(s["c"])("div",_,[e.smallScreen?(Object(s["h"])(),Object(s["c"])("div",U,[Object(s["f"])("ul",null,[(Object(s["h"])(!0),Object(s["c"])(s["a"],null,Object(s["l"])(e.ghosts,(function(t){return Object(s["h"])(),Object(s["c"])("li",{key:t.type},[Object(s["e"])(Object(s["n"])(t.type)+" ",1),Object(s["f"])("ul",null,[Object(s["f"])("li",null,[K,Object(s["f"])("span",{innerHTML:e.formatEvidence(t.evidence)},null,8,["innerHTML"])]),Object(s["f"])("li",null,"Strength: "+Object(s["n"])(t.strength),1),Object(s["f"])("li",null,"Weakness: "+Object(s["n"])(t.weakness),1)])])})),128))])])):(Object(s["h"])(),Object(s["c"])("div",D,[Object(s["f"])("div",W,[Object(s["f"])("div",null,[q,(Object(s["h"])(!0),Object(s["c"])(s["a"],null,Object(s["l"])(e.ghosts,(function(e){return Object(s["h"])(),Object(s["c"])("div",{key:e.type},Object(s["n"])(e.type),1)})),128))])]),Object(s["f"])("div",A,[Object(s["f"])("div",null,[R,(Object(s["h"])(!0),Object(s["c"])(s["a"],null,Object(s["l"])(e.ghosts,(function(t){return Object(s["h"])(),Object(s["c"])("div",{key:t.type,innerHTML:e.formatEvidence(t.evidence)},null,8,["innerHTML"])})),128))])]),Object(s["f"])("div",J,[Object(s["f"])("div",null,[V,(Object(s["h"])(!0),Object(s["c"])(s["a"],null,Object(s["l"])(e.ghosts,(function(e){return Object(s["h"])(),Object(s["c"])("div",{key:e.type},Object(s["n"])(e.strength),1)})),128))])]),Object(s["f"])("div",Y,[Object(s["f"])("div",null,[Q,(Object(s["h"])(!0),Object(s["c"])(s["a"],null,Object(s["l"])(e.ghosts,(function(e){return Object(s["h"])(),Object(s["c"])("div",{key:e.type},Object(s["n"])(e.weakness),1)})),128))])])]))])):(Object(s["h"])(),Object(s["c"])("p",X,"No possible ghosts."))])})),$=(n("a15b"),Object(s["g"])({name:"PotentialGhosts",data:function(){return{ghosts:C.state.ghosts,evidencePresent:C.state.evidencePresent,evidenceNotPresent:C.state.evidenceNotPresent,evidenceInCommon:C.state.evidenceInCommon,smallScreen:!1}},methods:{formatEvidence:function(e){for(var t=[],n=0;n<e.length;n++){var s=e[n];this.evidencePresent.includes(s)||this.evidenceInCommon.includes(s)?t.push('<span class="present">'.concat(s,"</span>")):t.push('<span class="unknown-presence">'.concat(s,"</span>"))}return t.join(", ")},resizeHandler:function(){window.innerWidth<1200?this.smallScreen=!0:this.smallScreen=!1}},created:function(){window.addEventListener("resize",this.resizeHandler),this.resizeHandler()},unmounted:function(){window.removeEventListener("resize",this.resizeHandler)}}));n("c939"),n("cb62");$.render=Z,$.__scopeId="data-v-d29db00a";var ee=$,te=Object(s["g"])({name:"App",components:{PotentialGhosts:ee,EvidenceSelector:T,EvidenceNeeded:z,Timer:p}});n("9024");te.render=r;var ne=te;Object(s["b"])(ne).mount("#app")},d7db:function(e,t,n){},dea1:function(e,t,n){},f08b:function(e,t,n){}});
//# sourceMappingURL=app.972777d2.js.map
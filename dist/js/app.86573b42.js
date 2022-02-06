(function(t){function e(e){for(var i,c,a=e[0],u=e[1],l=e[2],p=0,f=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);s&&s(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},r={app:0},o=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),r=Object(i["i"])("h1",null,"CO2 Emission Analytics",-1);function o(t,e){var n=Object(i["K"])("router-view");return Object(i["E"])(),Object(i["h"])(i["a"],null,[r,Object(i["l"])(n)],64)}n("7147");var c=n("d959"),a=n.n(c);const u={},l=a()(u,[["render",o]]);var s=l,p=n("6c02"),f={class:"select-wrapper"},d=Object(i["i"])("span",null,"Emission type: ",-1),b=Object(i["i"])("option",{value:"any"},"Any",-1),h=Object(i["i"])("option",{value:"default"},"Default",-1),m=Object(i["i"])("option",{value:"modeled"},"Modeled",-1),O=Object(i["i"])("option",{value:"primary"},"Primary",-1),j=[b,h,m,O];function y(t,e,n,r,o,c){var a=Object(i["K"])("Datepicker"),u=Object(i["K"])("Shipments");return Object(i["E"])(),Object(i["h"])("main",null,[Object(i["l"])(a,{modelValue:o.date,"onUpdate:modelValue":[e[0]||(e[0]=function(t){return o.date=t}),c.getShipments],range:!0,twoCalendars:!0,startDate:o.startDate,placeholder:"Select pickup and dropoff time"},null,8,["modelValue","startDate","onUpdate:modelValue"]),Object(i["i"])("div",f,[d,Object(i["U"])(Object(i["i"])("select",{class:"dp-input","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.typeOfCalculations=t}),onChange:e[2]||(e[2]=function(){return c.filterShipments&&c.filterShipments.apply(c,arguments)})},j,544),[[i["R"],o.typeOfCalculations]])]),Object(i["l"])(u,{shipments:o.filteredShipments},null,8,["shipments"])])}n("d81d"),n("b680"),n("4de4"),n("d3b7"),n("99af");var v=n("a1e9"),g=n("ef2e"),S=(n("dfc8"),{class:"table-wrapper"}),_=Object(i["i"])("tr",null,[Object(i["i"])("th",null,"Shipment ID"),Object(i["i"])("th",null,"Weight (kg)"),Object(i["i"])("th",null,"Distance (km)"),Object(i["i"])("th",null,"Pickup Time"),Object(i["i"])("th",null,"Dropoff Time"),Object(i["i"])("th",null,"CO2 Emission"),Object(i["i"])("th",null,"Emission Type")],-1);function w(t,e,n,r,o,c){return Object(i["E"])(),Object(i["h"])("div",S,[Object(i["i"])("table",null,[_,(Object(i["E"])(!0),Object(i["h"])(i["a"],null,Object(i["I"])(n.shipments,(function(t){return Object(i["E"])(),Object(i["h"])("tr",null,[Object(i["i"])("td",null,Object(i["N"])(t.shipment_id),1),Object(i["i"])("td",null,Object(i["N"])(t.weight_kg),1),Object(i["i"])("td",null,Object(i["N"])(t.distance_km),1),Object(i["i"])("td",null,Object(i["N"])(t.pickup_time),1),Object(i["i"])("td",null,Object(i["N"])(t.dropoff_time),1),Object(i["i"])("td",null,Object(i["N"])(t.co2_emission),1),Object(i["i"])("td",null,Object(i["N"])(t.type_of_calculations),1)])})),256))])])}var k={props:["shipments"]};n("c881");const D=a()(k,[["render",w]]);var T=D,C={components:{Datepicker:g["a"],Shipments:T},data:function(){return{date:Object(v["n"])(),startDate:Object(v["n"])(new Date(2021,4)),typeOfCalculations:"any",shipments:[],filteredShipments:[]}},methods:{formatShipments:function(t){var e=this;this.shipments=t.map((function(t){return t.pickup_time=e.formatTime(t.pickup_time),t.dropoff_time=e.formatTime(t.dropoff_time),t.co2_emission=parseFloat(t.co2_emission).toFixed(2),t})),this.filterShipments()},filterShipments:function(){var t=this;this.filteredShipments=this.shipments.filter((function(e){return"any"==t.typeOfCalculations||e.type_of_calculations===t.typeOfCalculations?e:void 0}))},formatTime:function(t){return new Date(t).toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1})},pickupTime:function(){return new Date(this.date[0]).toISOString()},dropoffTime:function(){return new Date(this.date[1]).toISOString()},getShipments:function(){var t=this,e={method:"GET",headers:{"Content-Type":"application/json"}};fetch("http://localhost:3000/get_shipments/".concat(this.pickupTime(),"/").concat(this.dropoffTime(),"}"),e).then((function(t){return t.json()})).then((function(e){t.formatShipments(e)})).catch((function(t){return console.log(t)}))}}};n("6e09");const E=a()(C,[["render",y]]);var P=E,x=[{path:"/",name:"Main",component:P}],N=Object(p["a"])({history:Object(p["b"])(),routes:x}),M=N;Object(i["e"])(s).use(M).mount("#app")},"6e09":function(t,e,n){"use strict";n("e5dd")},7147:function(t,e,n){"use strict";n("bf83")},bf83:function(t,e,n){},c881:function(t,e,n){"use strict";n("d3fb")},d3fb:function(t,e,n){},e5dd:function(t,e,n){}});
//# sourceMappingURL=app.86573b42.js.map
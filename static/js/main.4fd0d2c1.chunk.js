(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),u=a.n(c),l=(a(15),a(4)),s=a(5),o=a(7),m=a(6),i=a(8);function d(){return r.a.createElement("header",null,r.a.createElement("h1",null,"ELF Computing | Laptops"))}function f(){return r.a.createElement("h2",null,"Customize your laptop")}var p={Processor:[{name:"17th Generation Intel Core HB (7 Core with donut spare)",cost:700},{name:"Professor X AMD Fire Breather with sidewinder technology",cost:1200}],"Operating System":[{name:"Ubuntu Linux 16.04",cost:200},{name:"Bodhi Linux",cost:300}],"Video Card":[{name:"Toyota Corolla 1.5v",cost:1150.98},{name:"Mind mild breeze 2000",cost:1345}],Display:[{name:'15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',cost:1500},{name:'15.3" HGTV (3840 x 2160) Home makeover edition',cost:1400}]};function E(e){var t=e.feature;return r.a.createElement("legend",{className:"feature__name"},r.a.createElement("h3",null,t))}var v=a(1),_=a.n(v),h=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});function y(e){var t=e.itemHash,a=e.item,n=e.feature,c=e.selected,u=e.updateFeature;return r.a.createElement("div",{key:t,className:"feature__item"},r.a.createElement("input",{type:"radio",id:t,className:"feature__option",name:_()(n),checked:a.name===c[n].name,onChange:function(e){return u(n,a)}}),r.a.createElement("label",{htmlFor:t,className:"feature__label"},a.name," (",h.format(a.cost),")"))}function b(e){var t=e.store,a=e.feature,n=e.updateFeature,c=e.selected;return t[a].map(function(e){var t=_()(JSON.stringify(e));return r.a.createElement(y,{feature:a,updateFeature:n,selected:c,itemHash:t,item:e})})}function F(e){var t=e.selected,a=e.updateFeature,n=e.store,c=e.feature,u=e.featureHash;return r.a.createElement("fieldset",{className:"feature",key:u},r.a.createElement(E,{feature:c}),r.a.createElement(b,{feature:c,selected:t,updateFeature:a,store:n}))}function O(e){var t=e.selected,a=e.updateFeature;return Object.keys(p).map(function(e,n){var c=e+"-"+n;return r.a.createElement(F,{selected:t,updateFeature:a,store:p,featureHash:c,feature:e})})}function N(e){var t=e.selected,a=e.updateFeature;return r.a.createElement("form",{className:"main__form"},r.a.createElement(f,null),r.a.createElement(O,{selected:t,updateFeature:a}))}function g(){return r.a.createElement("h2",null,"Your cart")}function H(e){var t=e.selectedOption;return r.a.createElement("div",{className:"summary__option__value"},t.name)}function w(e){var t=e.feature;return r.a.createElement("div",{className:"summary__option__label"},t)}function C(e){var t=e.selectedOption;return r.a.createElement("div",{className:"summary__option__cost"},h.format(t.cost))}function k(e){var t=e.featureHash,a=e.feature,n=e.selectedOption;return r.a.createElement("div",{className:"summary__option",key:t},r.a.createElement(w,{feature:a}),r.a.createElement(H,{selectedOption:n}),r.a.createElement(C,{selectedOption:n}))}function j(e){var t=e.selected;return Object.keys(t).map(function(e,a){var n=e+"-"+a,c=t[e];return r.a.createElement(k,{featureHash:n,feature:e,selectedOption:c})})}function x(){return r.a.createElement("div",{className:"summary__total__label"},"Total")}function B(e){var t=e.selected,a=Object.keys(t).reduce(function(e,a){return e+t[a].cost},0);return r.a.createElement("div",{className:"summary__total__value"},h.format(a))}function L(e){var t=e.selected;return r.a.createElement("div",{className:"summary__total"},r.a.createElement(x,null),r.a.createElement(B,{selected:t}))}function D(e){var t=e.selected;return r.a.createElement("section",{className:"main__summary"},r.a.createElement(g,null),r.a.createElement(j,{selected:t}),r.a.createElement(L,{selected:t}))}function S(e){var t=e.selected,a=e.updateFeature;return r.a.createElement("main",null,r.a.createElement(N,{selected:t,updateFeature:a}),r.a.createElement(D,{selected:t}))}a(16);var U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={selected:{Processor:{name:"17th Generation Intel Core HB (7 Core with donut spare)",cost:700},"Operating System":{name:"Ubuntu Linux 16.04",cost:200},"Video Card":{name:"Toyota Corolla 1.5v",cost:1150.98},Display:{name:'15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',cost:1500}}},a.updateFeature=function(e,t){var n=Object.assign({},a.state.selected);n[e]=t,a.setState({selected:n})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.selected;return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(S,{selected:e,updateFeature:this.updateFeature}))}}]),t}(n.Component);u.a.render(r.a.createElement(U,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.4fd0d2c1.chunk.js.map
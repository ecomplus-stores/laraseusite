/*! For license information please see chunk.1be3c21e59fccb29cd0c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{292:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n(44);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var s={selector:"vue-portal-target-".concat(((t=21)=>{let e="",n=t;for(;n--;)e+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64*Math.random()|0];return e})())},i=function(t){return s.selector=t},a="undefined"!=typeof window&&void 0!==("undefined"==typeof document?"undefined":r(document)),c=o.a.extend({abstract:!0,name:"PortalOutlet",props:["nodes","tag"],data:function(t){return{updatedNodes:t.nodes}},render:function(t){var e=this.updatedNodes&&this.updatedNodes();return e?1!==e.length||e[0].text?t(this.tag||"DIV",e):e:t()},destroyed:function(){var t=this.$el;t&&t.parentNode.removeChild(t)}}),d=o.a.extend({name:"VueSimplePortal",props:{disabled:{type:Boolean},prepend:{type:Boolean},selector:{type:String,default:function(){return"#".concat(s.selector)}},tag:{type:String,default:"DIV"}},render:function(t){if(this.disabled){var e=this.$scopedSlots&&this.$scopedSlots.default();return e?e.length<2&&!e[0].text?e:t(this.tag,e):t()}return t()},created:function(){this.getTargetEl()||this.insertTargetEl()},updated:function(){var t=this;this.$nextTick((function(){t.disabled||t.slotFn===t.$scopedSlots.default||(t.container.updatedNodes=t.$scopedSlots.default),t.slotFn=t.$scopedSlots.default}))},beforeDestroy:function(){this.unmount()},watch:{disabled:{immediate:!0,handler:function(t){t?this.unmount():this.$nextTick(this.mount)}}},methods:{getTargetEl:function(){if(a)return document.querySelector(this.selector)},insertTargetEl:function(){if(a){var t=document.querySelector("body"),e=document.createElement(this.tag);e.id=this.selector.substring(1),t.appendChild(e)}},mount:function(){if(a){var t=this.getTargetEl(),e=document.createElement("DIV");this.prepend&&t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),this.container=new c({el:e,parent:this,propsData:{tag:this.tag,nodes:this.$scopedSlots.default}})}},unmount:function(){this.container&&(this.container.$destroy(),delete this.container)}}});function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.name||"portal",d),e.defaultSelector&&i(e.defaultSelector)}"undefined"!=typeof window&&window.Vue&&window.Vue===o.a&&o.a.use(l)},405:function(t,e,n){"use strict";n.r(e);n(7),n(127),n(35);var o=n(1),r=n(44),s=n(306);e.default=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"search-engine",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"search-pagination";const a=document.getElementById(e);if(a){const c=document.getElementById("".concat(e,"-dock"));let d;const l=window.storefront&&window.storefront.getScopedSlots,{dataset:u}=a,h=new URLSearchParams(window.location.search),p={...t.props,term:h.get("term"),brands:h.getAll("brands[]"),categories:h.getAll("categories[]"),defaultFilters:h.getAll("filters[]").reduce(((t,e)=>{const[n,o]=e.split(":");return t[n]||(t[n]=[]),t[n].push(o),t}),{}),defaultSort:u.sort||h.get("sort")};["brands","categories"].forEach((t=>{if(u[t]){try{p[t]=JSON.parse(u[t])}catch(t){return void console.error(t)}p[t]&&p[t].length<2&&(p["isFixed".concat(t.charAt(0).toUpperCase()).concat(t.slice(1))]=!0),p.hasPopularItems=!1}}));const{resource:f}=window.document.body.dataset;switch(f){case"brands":case"categories":if(!p[f]||!p[f].length)return void console.error(new Error("Skipping SearchEngine with empty '".concat(f,"' filter")))}const m=document.title,g=()=>{const t=h.get("term");let e=t?"".concat(t," ~ ").concat(m):m;const n=h.get("page");if(n>1&&(e+=" (".concat(n,") ")),window.history){const t=h.toString(),{pathname:n}=window.location;window.history.pushState({pathname:n,query:t},e,n+(t?"?".concat(t):""))}document.title=e};g();const w=new r.a({data:{countRequests:0,canShowItems:!c,term:p.term,page:parseInt(h.get("page"),10)||1,totalItems:0},render(o){const f=this;return t.pagination&&n.e(32).then(n.bind(null,307)).then((t=>{new r.a({render:e=>e(t.default,{props:{totalItems:f.totalItems,page:f.page},on:{"update:page"(t){f.page=t,h.set("page",t),g(),window.scroll({top:0,behavior:"smooth"})}}})}).$mount(document.getElementById(i))})),o(s.a,{attrs:{id:c?null:e},props:{...p,term:f.term,page:f.page,canLoadMore:!t.pagination&&!u.disableLoadMore,canShowItems:f.canShowItems,loadMoreSelector:c?"#search-engine-load":null,isFilterable:!u.disableFilters},on:{"update:term"(t){f.term=t,h.set("term",t),g()},fetch(t){let{ecomSearch:e,fetching:n,isPopularItems:o}=t;n.then((t=>{if(o||(f.totalItems=e.getTotalCount()),c){f.countRequests++;const e=()=>{f.canShowItems=!0;const t=a.querySelector("#search-engine-snap"),e=a.querySelector(".search-engine__results");e.style.minHeight=t.offsetHeight+"px",t.remove(),setTimeout((()=>{e.style.minHeight=null}),600)};if(!f.canShowItems)if(f.countRequests>1)e();else if(t&&t.hits)if(d&&d.length===t.hits.hits.length){let n=!0;const{hits:o}=t.hits;for(let t=0;t<o.length;t++)if(!d.find('[data-product-id="'.concat(o[t]._id,'"]')).length){n=!1;break}n||e()}else e()}}))}},scopedSlots:"function"==typeof l?l(a,o,!c):void 0})}});if(c){Object(o.$)(a).append(Object(o.$)("<div>",{id:"search-engine-load"}));const t=()=>w.$mount(c);if(d=Object(o.$)("#search-engine-snap .product-item"),d.length){const e=new window.MutationObserver((()=>{clearTimeout(n),e.disconnect(),setTimeout(t,150)}));e.observe(d[0],{childList:!0});const n=setTimeout((()=>{e.disconnect(),t()}),3e3)}else t()}else w.$mount(a)}}}}]);
//# sourceMappingURL=chunk.1be3c21e59fccb29cd0c.js.map
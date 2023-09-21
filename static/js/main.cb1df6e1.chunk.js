(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{31:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var a=c(25),s=c.n(a),n=c(6),r=c(3),i=(c(31),c(0)),l=function(){return Object(i.jsx)(n.b,{to:"/",className:"logo",children:Object(i.jsx)("div",{className:"logo__img"})})},o=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("label",{htmlFor:"scroll",className:"scrollUp__text",children:"Back to top"}),Object(i.jsx)("button",{type:"button",id:"scroll",className:"scrollUp__container",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(i.jsx)("div",{className:"arrow arrow--up"})})]})},d=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"footer__container",children:[Object(i.jsx)(l,{}),Object(i.jsx)("nav",{className:"footer__nav",children:Object(i.jsxs)("ul",{className:"footer__navList",children:[Object(i.jsx)(n.c,{to:"https://github.com/Ir-ra/react_phone-catalog",className:"footer__navItem",target:"_blank",children:"Github"}),Object(i.jsx)(n.c,{to:"/contacts",className:"footer__navItem",children:"Contacts"}),Object(i.jsx)(n.c,{to:"/rights",className:"footer__navItem",children:"rights"})]})}),Object(i.jsx)("div",{className:"footer__buttonUp scrollUp",children:Object(i.jsx)(o,{})})]})})},j=c(4),u=c(7),b=c.n(u),m=c(1),_=c.n(m),h=c(26),O=c.n(h),p=_.a.createContext({appliedQuery:"",applyQuery:function(){}}),x=function(e){var t=e.children,c=Object(m.useState)(""),a=Object(j.a)(c,2),s=a[0],n=a[1],r=Object(m.useCallback)(O()(n,1e3),[]);return Object(i.jsx)(p.Provider,{value:{appliedQuery:s,applyQuery:r},children:t})},v=function(e,t){var c=new URLSearchParams(t);return Object.keys(e).forEach((function(t){var a=e[t];null===a?c.delete(t):Array.isArray(a)?(c.delete(t),a.forEach((function(e){return c.append(t,e.toString())}))):c.set(t,a.toString())})),c.toString()},f=function(){var e=Object(n.d)(),t=Object(j.a)(e,2),c=t[0],a=t[1],s=c.get("query")||"",l=Object(m.useContext)(p).applyQuery,o=Object(r.m)().pathname.slice(1);l(s);return Object(i.jsxs)("form",{className:"search",children:[Object(i.jsx)("label",{className:"search__bar",children:Object(i.jsx)("input",{className:"search__input",type:"search",name:"query",placeholder:"Search in ".concat(o,"..."),value:s,onChange:function(e){a(v({query:e.target.value||null},c)),l(e.target.value)}})}),s?Object(i.jsx)("button",{type:"button","data-cy":"searchDelete",className:b()("search__icon",{"search__icon--active":s}),"aria-label":"close",onClick:function(){var e=new URLSearchParams(c);e.delete("query"),a(e.toString()),l("")}}):Object(i.jsx)("div",{className:"search__icon"})]})},N=c(11),g=c(10),y=Object(m.createContext)({cartItems:[],addToCart:function(){},removeFromCart:function(){},plusItem:function(){},minusItem:function(){},cartCount:0,cartTotalPrice:0,checkAdded:function(){return!1}}),C=function(e){var t=e.children,c=Object(m.useState)([]),a=Object(j.a)(c,2),s=a[0],n=a[1],r=Object(m.useState)(0),l=Object(j.a)(r,2),o=l[0],d=l[1],u=Object(m.useState)(0),b=Object(j.a)(u,2),_=b[0],h=b[1];Object(m.useEffect)((function(){var e=localStorage.getItem("cartItems");e&&n(JSON.parse(e))}),[]),Object(m.useEffect)((function(){localStorage.setItem("cartItems",JSON.stringify(s))}),[s]),Object(m.useEffect)((function(){var e=s.reduce((function(e,t){return e+t.quantity}),0);d(e)}),[s]),Object(m.useEffect)((function(){var e=s.reduce((function(e,t){return e+t.quantity*t.price}),0);h(e)}),[s]);var O={cartItems:s,addToCart:function(e){n((function(t){return function(e,t){return e.find((function(e){return e.id===t.id}))?e:[].concat(Object(g.a)(e),[Object(N.a)({},t)])}(t,e)}))},removeFromCart:function(e){n((function(t){return function(e,t){return e.filter((function(e){return e.id!==t.id}))}(t,e)}))},plusItem:function(e){n((function(t){return t.map((function(t){return t.id===e.id?Object(N.a)(Object(N.a)({},t),{},{quantity:t.quantity+1}):t}))}))},minusItem:function(e){n((function(t){return t.map((function(t){if(t.id===e.id){var c=t.quantity>1?t.quantity-1:1;return Object(N.a)(Object(N.a)({},t),{},{quantity:c})}return t}))}))},cartCount:o,cartTotalPrice:_,checkAdded:function(e){return s.some((function(t){return t.id===e}))}};return Object(i.jsx)(y.Provider,{value:O,children:t})},k=Object(m.createContext)({favItems:[],addToFavs:function(){},removeFromFavs:function(){},checkFav:function(){return!1},toggleFav:function(){return!1}}),w=function(e){var t=e.children,c=Object(m.useState)([]),a=Object(j.a)(c,2),s=a[0],n=a[1];Object(m.useEffect)((function(){var e=localStorage.getItem("favouriteItems");e&&n(JSON.parse(e))}),[]),Object(m.useEffect)((function(){localStorage.setItem("favouriteItems",JSON.stringify(s))}),[s]);var r=function(e){n([].concat(Object(g.a)(s),[Object(N.a)({},e)]))},l=function(e){n(s.filter((function(t){return e.id!==t.id})))},o={favItems:s,addToFavs:r,removeFromFavs:l,toggleFav:function(e){return s.some((function(t){return t.id===e.id}))?(l(e),!1):(r(e),!0)},checkFav:function(e){return s.some((function(t){return t.id===e}))}};return Object(i.jsx)(k.Provider,{value:o,children:t})},S=function(){var e=Object(r.m)(),t=Object(m.useContext)(y).cartCount,c=Object(m.useContext)(k).favItems,a=["/phones","/tablets","/accessories","/favourites"].includes(e.pathname),s=["/cart"].includes(e.pathname),o=Object(m.useState)(!1),d=Object(j.a)(o,2),u=d[0],_=d[1],h=function(){_(!u)},O=function(){_(!1)};return Object(i.jsxs)("nav",{className:"navbar",children:[u?Object(i.jsx)("button",{type:"button","aria-label":"navbar__cross",className:"navbar__cross",onClick:h}):Object(i.jsx)("button",{type:"button","aria-label":"navbar__burger",className:"navbar__burger",onClick:h}),Object(i.jsx)(l,{}),Object(i.jsxs)("ul",{className:b()("navbar__list",{"navbar__list--mob":u}),children:[Object(i.jsx)(n.c,{to:"/",className:b()("navbar__item",{"navbar__item--active":"/"===e.pathname}),onClick:O,children:"home"}),Object(i.jsx)(n.c,{to:"/phones",className:b()("navbar__item",{"navbar__item--active":"/phones"===e.pathname}),onClick:O,children:"phones"}),Object(i.jsx)(n.c,{to:"/tablets",className:b()("navbar__item",{"navbar__item--active":"/tablets"===e.pathname}),onClick:O,children:"tablets"}),Object(i.jsx)(n.c,{to:"/accessories",className:"navbar__item ".concat("/accessories"===e.pathname?"navbar__item--active":""),onClick:O,children:"accessories"}),Object(i.jsxs)(n.c,{to:"/favourites",className:"navbar__item navbar__item-mob ".concat("/favourites"===e.pathname?"navbar__item--active":""),onClick:O,children:["favourites",c.length>0&&Object(i.jsx)("span",{className:"navbar__icon--count-mob",children:Object(i.jsx)("span",{className:"navbar__icon--count",children:c.length})})]}),Object(i.jsxs)(n.c,{to:"/cart",className:"navbar__item navbar__item-mob ".concat("/cart"===e.pathname?"navbar__item--active":""),onClick:O,children:["cart",t>0&&Object(i.jsx)("span",{className:"navbar__icon--count-mob",children:Object(i.jsx)("span",{className:"navbar__icon--count",children:t})})]})]}),Object(i.jsx)("div",{className:"navbar__search",children:a&&Object(i.jsx)(f,{})}),Object(i.jsxs)("div",{className:"navbar__icons",children:[!s&&Object(i.jsx)(n.b,{to:"/favourites",className:b()("navbar__icon",{"navbar__icon--active":"/favourites"===e.pathname}),children:c.length>=1?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"navbar__icon--favs"}),Object(i.jsx)("span",{className:"navbar__icon--count-box",children:Object(i.jsx)("span",{className:"navbar__icon--count",children:c.length})})]}):Object(i.jsx)("div",{className:"navbar__icon--favs"})}),Object(i.jsx)(n.b,{to:"/cart",className:b()("navbar__icon",{"navbar__icon--active":"/cart"===e.pathname}),children:t>=1?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"navbar__icon--cart"}),Object(i.jsx)("span",{className:"navbar__icon--count-box",children:Object(i.jsx)("span",{className:"navbar__icon--count",children:t})})]}):Object(i.jsx)("div",{className:"navbar__icon--cart"})})]})]})},I=c(8),P=c(5),q=c.n(P),F="https://mate-academy.github.io/react_phone-catalog/_new/products.json",T=_.a.createContext({products:[],loading:!1}),A=function(e){var t=e.children,c=Object(m.useState)([]),a=Object(j.a)(c,2),s=a[0],n=a[1],r=Object(m.useState)(!1),l=Object(j.a)(r,2),o=l[0],d=l[1];return Object(m.useEffect)((function(){function e(){return(e=Object(I.a)(q.a.mark((function e(){var t,c;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,fetch(F);case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,n(c),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(1),new Error("Unable to add products, please try again later");case 14:return e.prev=14,d(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(i.jsx)(T.Provider,{value:{products:s,loading:o},children:t})};function E(){return Object(m.useContext)(T)}var L=function(e){var t=e.prodId,c=Object(m.useContext)(y),a=c.addToCart,s=c.checkAdded,n=E().products,r=Object(m.useState)(s(t)),l=Object(j.a)(r,2),o=l[0],d=l[1];return Object(i.jsx)("button",{type:"button",className:b()("addToCart",{"addToCart--selected":o}),onClick:function(){var e=n.find((function(e){return e.itemId===t}));e&&(a({id:t,product:e,quantity:1,price:e.price}),d(!0))},children:o?Object(i.jsx)("p",{children:"Added to cart"}):Object(i.jsx)("p",{children:"Add to cart"})})},B=function(e){var t=e.prodId,c=Object(m.useContext)(k),a=c.toggleFav,s=c.checkFav,n=Object(m.useState)(s(t)),r=Object(j.a)(n,2),l=r[0],o=r[1],d=E().products;return Object(i.jsx)("button",{type:"button","data-cy":"addToFavorite",className:b()("addFav",{"addFav--selected":l}),onClick:function(){var e=d.find((function(e){return e.itemId===t}));if(e){var c=a({id:t,product:e});o(c)}},children:l?Object(i.jsx)("div",{className:"addFav--heart_selected"}):Object(i.jsx)("div",{className:"addFav--heart"})})},R=function(e){var t=e.product,c=t.image,a=t.name,s=t.price,r=t.fullPrice,l=t.screen,o=t.capacity,d=t.ram,j=t.itemId,u=t.category;return Object(i.jsxs)("div",{className:"card","data-cy":"cardsContainer",children:[Object(i.jsx)(n.b,{to:"/".concat(u,"/").concat(j),className:"card__imgContainer",children:Object(i.jsx)("img",{className:"card__img",src:c,alt:a})}),Object(i.jsxs)("div",{className:"card__infoContaiter",children:[Object(i.jsx)(n.b,{to:"/".concat(u,"/").concat(j),className:"card__title",children:a}),Object(i.jsxs)("div",{className:"card__price",children:[Object(i.jsx)("p",{className:"card__price--new",children:"$".concat(s)}),Object(i.jsx)("p",{className:"card__price--old",children:"$".concat(r)})]}),Object(i.jsxs)("div",{className:"card__description",children:[Object(i.jsxs)("div",{className:"card__description--line",children:[Object(i.jsx)("p",{className:"card__description--key",children:"Screen"}),Object(i.jsx)("p",{className:"card__description--val",children:l})]}),Object(i.jsxs)("div",{className:"card__description--line",children:[Object(i.jsx)("p",{className:"card__description--key",children:"Capacity"}),Object(i.jsx)("p",{className:"card__description--val",children:o})]}),Object(i.jsxs)("div",{className:"card__description--line",children:[Object(i.jsx)("p",{className:"card__description--key",children:"RAM"}),Object(i.jsx)("p",{className:"card__description--val",children:d})]})]}),Object(i.jsxs)("div",{className:"card__buttonContaiter",children:[Object(i.jsx)(L,{prodId:t.itemId}),Object(i.jsx)(B,{prodId:t.itemId})]})]})]})},U=function(e){var t=e.products,c=e.title,a=Object(m.useState)(0),s=Object(j.a)(a,2),n=s[0],r=s[1],l=0===n,o=n===t.length-4;return Object(i.jsxs)("div",{className:"productSlider",children:[Object(i.jsxs)("div",{className:"productSlider__top",children:[Object(i.jsx)("h2",{className:"productSlider__top--title",children:c}),Object(i.jsxs)("div",{className:"productSlider__top--buttons",children:[Object(i.jsx)("button",{type:"button",title:"Previous",className:b()("productSlider__button",{"productSlider__button--disabled":l}),onClick:function(){var e=t.length-1;r((function(t){return t-1<0?e:t-1}))},disabled:l,children:Object(i.jsx)("span",{className:b()("arrow arrow--left",{"arrow--left-disabled":l})})}),Object(i.jsx)("button",{type:"button",title:"Next",className:b()("productSlider__button",{"productSlider__button--disabled":o}),onClick:function(){var e=t.length-1;r((function(t){return t+1>e?0:t+1}))},disabled:o,children:Object(i.jsx)("span",{className:b()("arrow arrow--right",{"arrow--right-disabled":o})})})]})]}),Object(i.jsx)("div",{className:"productSlider__main",children:Object(i.jsx)("ul",{className:"productSlider__list",children:t.map((function(e){return Object(i.jsx)("li",{style:{transform:"translateX(-".concat(288*n,"px)"),transition:"".concat(500,"ms"),width:"".concat(272,"px")},children:Object(i.jsx)(R,{product:e})},e.id)}))})})]})},M=function(){var e=function(e){var t=Math.max.apply(Math,Object(g.a)(e.map((function(e){return e.year})))),c=e.filter((function(e){return e.year===t}));return c.sort((function(e,t){var c=e.price;return t.price-c})),c}(E().products);return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(U,{products:e,title:"Brand new models"})})},D=function(){var e=Object(m.useState)(["accessories.png","phones.png","tablets.png"]),t=Object(j.a)(e,1)[0],c=Object(m.useState)(0),a=Object(j.a)(c,2),s=a[0],n=a[1],r={mob:400,tab:600,desc:963,descXL:1040},l=function(e){return r[e]||r.mob},o=function(){var e=t.length-1;n((function(t){return t+1>e?0:t+1}))};Object(m.useEffect)((function(){var e=setInterval((function(){o()}),5e3);return function(){clearInterval(e)}}),[s]);return Object(i.jsxs)("div",{className:"slider",children:[Object(i.jsx)("button",{type:"button",title:"Previous",className:"slider__button",onClick:function(){var e=t.length-1;n((function(t){return t-1<0?e:t-1}))},children:Object(i.jsx)("span",{className:"arrow arrow--left"})}),Object(i.jsx)("div",{className:"slider__main",children:Object(i.jsx)("ul",{className:"slider__list",style:{transition:"transform ".concat(500,"ms")},children:t.map((function(e,t){return Object(i.jsx)("li",{children:Object.keys(r).map((function(c){return Object(i.jsx)("img",{className:b()("slider__main--photos","slider__".concat(c)),src:"_new/img/banner-".concat(e),alt:"banner-#".concat(t+1),style:{transform:"translateX(-".concat(s*l(c),"px)"),transition:"transform ".concat(500,"ms")}},c)}))},e)}))})}),Object(i.jsx)("button",{type:"button",title:"Next",className:"slider__button",onClick:o,children:Object(i.jsx)("span",{className:"arrow arrow--right"})}),Object(i.jsx)("div",{className:"slider__dots",children:t.map((function(e,t){return Object(i.jsx)("button",{type:"button","aria-label":"slider__dots",className:b()("slider__dot",{"slider__dot--active":t===s}),onClick:function(){n(t)}},e)}))})]})};var Q=function(){var e=function(e){var t=e.filter((function(e){return e.fullPrice!==e.price}));return t.sort((function(e,t){var c=e.fullPrice-e.price;return t.fullPrice-t.price-c})),t}(E().products);return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(U,{products:e,title:"Hot prices"})})},J=function(e){return e.filter((function(e){return"phones"===e.category}))},$=function(e){return e.filter((function(e){return"tablets"===e.category}))},W=function(e){return e.filter((function(e){return"accessories"===e.category}))},K=function(){var e=E().products,t=J(e),c=$(e),a=W(e),s=[{img:"phones.png",title:"Mobile phones",quantity:"".concat(t.length," models")},{img:"tablets.png",title:"Tablets",quantity:"".concat(c.length," models")},{img:"accessories.png",title:"Accessories",quantity:"".concat(a.length," models")}];return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"category",children:[Object(i.jsx)("h2",{className:"category__main-title",children:"ShopByCategory"}),Object(i.jsx)("div",{className:"category__links",children:s.map((function(e){return Object(i.jsxs)(n.b,{to:"/".concat(e.img.slice(0,-4)),className:"category__card","data-cy":"categoryLinksContainer",children:[Object(i.jsx)("div",{className:"\n            category__photoContainer\n            category__photoContainer--".concat(e.img.slice(0,-4)),children:Object(i.jsx)("img",{src:"_new/img/category-".concat(e.img),alt:"category-".concat(e.img.slice(0,-4)),className:"category__photo category__photo--".concat(e.img.slice(0,-4))})}),Object(i.jsx)("p",{className:"category__title",children:e.title}),Object(i.jsx)("p",{className:"category__subtitle",children:e.quantity})]},e.img)}))})]})})},V=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(D,{}),Object(i.jsx)(Q,{}),Object(i.jsx)(K,{}),Object(i.jsx)(M,{})]})},X=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},Y=function(e){var t=e.sortBy,c=e.label,a=e.handleChange,s=e.sortKeys,n=e.sortValues,r=Object(m.useState)(!1),l=Object(j.a)(r,2),o=l[0],d=l[1],u=s.find((function(e,c){return t===n[c]}))||"all";return Object(i.jsxs)("div",{className:"selector",children:[Object(i.jsx)("p",{className:"selector__title",children:c}),Object(i.jsxs)("button",{className:"selector__button",onClick:function(){d(!o)},type:"button",children:[u,Object(i.jsx)("span",{className:"selector__iconContainer",children:Object(i.jsx)("div",{className:"selector__iconContainer--icon"})})]}),o&&Object(i.jsx)("ul",{className:"selector__options",children:s.map((function(e,c){return Object(i.jsx)("button",{className:"selector__option ".concat(t===n[c]?"selected":""),onClick:function(){return e=n[c],a({target:{value:e}}),void d(!1);var e},type:"button",children:e},e)}))})]})};var z,G=function(e){var t=e.total,c=e.perPage,a=e.currentPage,s=e.onPageChange,n=Math.ceil(t/+c),r=function(e,t){for(var c=[],a=e;a<=t;a+=1)c.push(a);return c}(1,n),l=1===a,o=a===n;return Object(i.jsx)("div",{className:"pagination",children:Object(i.jsxs)("ul",{className:"pagination__list",children:[Object(i.jsx)("li",{className:b()("pagination__left",{"pagination__left--disabled":l}),children:Object(i.jsx)("a",{"data-cy":"paginationLeft",className:"pagination__btn",href:"#".concat(+a),"aria-disabled":"true",onClick:function(){1!==a&&s(a-1)},children:Object(i.jsx)("span",{className:b()("arrow arrow--left",{"arrow--left-disabled":l})})})}),r.map((function(e,t){return Object(i.jsx)("li",{className:b()("pagination__num",{"pagination__num--active":a===t+1,"pagination__num--inactive":a!==t+1}),children:Object(i.jsx)("a",{"data-cy":"pageLink",className:b()("pagination__num-link",{"pagination__num-link--active":a===t+1,"pagination__num-link--inactive":a!==t+1}),href:"#".concat(e),onClick:function(){return function(e){a!==e&&s(e)}(t+1)},children:t+1})},e)})),Object(i.jsx)("li",{className:b()("pagination__rigth",{"pagination__rigth--disabled":o}),children:Object(i.jsx)("a",{"data-cy":"paginationRight",className:"pagination__btn",href:"#".concat(+a),"aria-disabled":"false",onClick:function(){a!==n&&s(a+1)},children:Object(i.jsx)("span",{className:b()("arrow arrow--right",{"arrow--right-disabled":o})})})})]})})},H=function(e){var t=e.arrOfItems;return Object(i.jsx)("div",{className:"productsList","data-cy":"productList",children:t.map((function(e){return Object(i.jsx)("div",{className:"productsList__card",children:Object(i.jsx)(R,{product:e})},e.id)}))})};!function(e){e.Newest="year",e.Alphabetically="name",e.Cheapest="price"}(z||(z={}));var Z=_.a.createContext({sortBy:"age",currentPage:1,handleSort:function(){},handlePerPage:function(){},handleCurrentPage:function(){},endItem:0,startItem:0,setSearchWith:function(){},sortedProducts:[],setCurrentPage:function(){},itemsOnPage:""}),ee=function(e){var t=e.children,c=Object(n.d)(),a=Object(j.a)(c,2),s=a[0],r=a[1],l=s.get("sort")||"age",o=s.get("perPage")||"8",d=parseInt(s.get("page")||"1",10),u=Object(m.useState)(l),b=Object(j.a)(u,2),_=b[0],h=b[1],O=Object(m.useState)(o),p=Object(j.a)(O,2),x=p[0],f=p[1],N=Object(m.useState)(d),y=Object(j.a)(N,2),C=y[0],k=y[1],w=E().products;function S(e){var t=v(e,s);r(t)}var I=Object(m.useMemo)((function(){return function(e,t){if(t){var c=Object(g.a)(e);return c.sort((function(e,c){switch(t){case z.Alphabetically:return e[t].localeCompare(c[t]);case z.Newest:return+c[t]-+e[t];case z.Cheapest:return+e[t]-+c[t];default:return 0}})),c}return e}(w,_)}),[w,_]),P=function(e){return"all"===e?I.length.toString():e},q=+P(x),F=(C-1)*q,T=C*q>I.length?I.length:F+q;return Object(i.jsx)(Z.Provider,{value:{sortBy:_,currentPage:C,handleSort:function(e){var t=e.target.value;h(t),S({sort:e.target.value||void 0})},handlePerPage:function(e){var t=e.target.value;f(P(t)),k(1),S({perPage:e.target.value||void 0})},handleCurrentPage:function(e){C!==e&&k(e),S({page:e.toString()||void 0})},endItem:T,startItem:F,setSearchWith:S,sortedProducts:I,setCurrentPage:k,itemsOnPage:x},children:t})};function te(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}var ce=function(){return Object(i.jsx)("p",{className:"noResults",children:"There are no products matching the search query."})},ae=["Newest","Alphabetically","Cheapest"],se=["age","name","price"],ne=["4","8","16","all"],re=["Sort by","Items on page"],ie=function(e){var t=e.products,c=e.title,a=Object(m.useContext)(p).appliedQuery,s=Object(m.useContext)(Z),n=s.sortBy,r=s.currentPage,l=s.handleSort,o=s.handlePerPage,d=s.handleCurrentPage,u=s.endItem,b=s.startItem,_=s.setSearchWith,h=s.sortedProducts,O=s.setCurrentPage,x=s.itemsOnPage,v=Object(m.useState)(!0),f=Object(j.a)(v,2),N=f[0],g=f[1];Object(m.useEffect)((function(){O(1),_({page:"1"})}),[a]);var y=te(h,a),C=y.slice(b,+u);return Object(m.useEffect)((function(){var e=setTimeout((function(){g(!1)}),1e3);return function(){return clearTimeout(e)}}),[]),Object(i.jsxs)(i.Fragment,{children:[N&&Object(i.jsx)(X,{}),!N&&Object(i.jsxs)("div",{className:"pageDetails",children:[Object(i.jsx)("h2",{className:"pageDetails__title",children:c}),Object(i.jsx)("p",{className:"pageDetails__subtitle",children:"".concat(t.length," models")}),Object(i.jsxs)("div",{className:"pageDetails__sort",children:[Object(i.jsx)("div",{className:"pageDetails__sortBy",children:Object(i.jsx)(Y,{sortBy:n,label:re[0],handleChange:l,sortKeys:ae,sortValues:se})}),Object(i.jsx)("div",{className:"pageDetails__perPage",children:Object(i.jsx)(Y,{sortBy:x,label:re[1],handleChange:function(e){return o(e)},sortKeys:ne,sortValues:ne})})]}),C&&Object(i.jsx)(H,{arrOfItems:C}),0!==C.length?Object(i.jsx)(G,{total:y.length,perPage:x,currentPage:r,onPageChange:d}):Object(i.jsx)(ce,{})]})]})},le=function(e){var t=e.pathname,c=e.name;return Object(i.jsxs)("div",{className:"breadCrumbs","data-cy":"breadCrumbs",children:[Object(i.jsx)(n.c,{to:"/",className:"breadCrumbs__iconContainer",children:Object(i.jsx)("div",{className:"breadCrumbs__iconContainer--icon"})}),Object(i.jsx)("span",{className:"arrow arrow--right-disabled"}),Object(i.jsx)(n.c,{to:"/".concat(t.toLowerCase()),className:"breadCrumbs__text breadCrumbs__text--path",children:t}),c&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("span",{className:"arrow arrow--right-disabled"}),Object(i.jsx)("span",{className:"breadCrumbs__text",children:c})]})]})},oe=function(){return Object(i.jsx)("h1",{className:"noResults",children:"Product not found"})},de=function(){var e=Object(r.m)().pathname,t=e.slice(1,2).toUpperCase()+e.slice(2),c=E().products;Object(m.useEffect)((function(){window.scrollTo(0,0)}),[]);var a=J(c);return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(le,{pathname:t}),a.length?Object(i.jsx)(ie,{products:a,title:"Mobile phones"}):Object(i.jsx)(oe,{})]})},je=function(){var e=Object(r.m)().pathname,t=e.slice(1,2).toUpperCase()+e.slice(2),c=E().products;Object(m.useEffect)((function(){window.scrollTo(0,0)}),[]);var a=$(c);return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(le,{pathname:t}),a.length?Object(i.jsx)(ie,{products:a,title:"Tablets"}):Object(i.jsx)(oe,{})]})},ue=function(){var e=Object(r.m)().pathname,t=e.slice(1,2).toUpperCase()+e.slice(2),c=E().products;Object(m.useEffect)((function(){window.scrollTo(0,0)}),[]);var a=W(c);return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(le,{pathname:t}),a.length?Object(i.jsx)(ie,{products:a,title:"Accessories"}):Object(i.jsx)(oe,{})]})},be=function(){var e=E().products,t=e.sort((function(){return Math.random()-Math.random()})).slice(0,10);return Object(i.jsx)(U,{products:t,title:"You may also like"})},me={black:"#222",rosegold:"#e2a0b0",gold:"#ffd799",silver:"#eee",spacegray:"#717378",green:"#8eb",yellow:"#fe0",white:"#ffe",purple:"#d0a0d0",red:"#e23",midnightgreen:"#004953",coral:"#f88379"},_e=function(e){var t=e.product,c=e.currentImage,a=e.setCurrentImage,s=e.rout,r=e.currentCapacity,l=e.currentColor,o=t.name,d=t.images,j=t.colorsAvailable,u=t.capacityAvailable,m=t.priceDiscount,_=t.priceRegular,h=t.screen,O=t.resolution,p=t.processor,x=t.ram,v=t.capacity,f=t.camera,N=t.zoom,g=t.cell;return Object(i.jsxs)("div",{className:"details",children:[Object(i.jsx)("h1",{className:"details__title",children:o}),Object(i.jsxs)("div",{className:"details__container",children:[Object(i.jsxs)("div",{className:"details__top",children:[Object(i.jsxs)("div",{className:"details__photoBlock",children:[Object(i.jsx)("div",{className:"details__photo-list",children:d.map((function(e){return Object(i.jsx)("button",{type:"button",className:"details__photo",onClick:function(){return a(e)},children:Object(i.jsx)("img",{src:"../_new/".concat(e),alt:t.name,className:"details__photo--img"})},e)}))}),Object(i.jsx)("div",{className:"details__mainPhoto",children:Object(i.jsx)("img",{src:"../_new/".concat(c),alt:o,className:"details__mainPhoto--photo"})})]}),Object(i.jsxs)("div",{className:"details__baseInfo",children:[Object(i.jsxs)("div",{className:"details__colors",children:[Object(i.jsx)("p",{className:"details__colors-title",children:"Available colors"}),Object(i.jsx)("ul",{className:"details__colors-list",children:j.map((function(e){return Object(i.jsx)(n.b,{to:"".concat(s,"-").concat(r.toLowerCase(),"-").concat(e),style:{backgroundColor:me[e]},className:b()("details__colors-item",{"details__colors-item--active":e===l})},e)}))})]}),Object(i.jsxs)("div",{className:"details__capacity",children:[Object(i.jsx)("p",{className:"details__capacity-title",children:"Select capacity"}),Object(i.jsx)("ul",{className:"details__capacity-list",children:u.map((function(e){return Object(i.jsx)(n.c,{to:"".concat(s,"-").concat(e.toLowerCase(),"-").concat(l),className:b()("details__capacity-item",{"details__capacity-item--active":e===r}),children:e},e)}))})]}),Object(i.jsxs)("div",{className:"details__price",children:[Object(i.jsx)("h2",{className:"details__price--discount",children:"$".concat(m)}),Object(i.jsx)("h3",{className:"details__price--regular",children:"$".concat(_)})]}),Object(i.jsxs)("div",{className:"details__buttons",children:[Object(i.jsx)(L,{prodId:t.id}),Object(i.jsx)(B,{prodId:t.id})]}),Object(i.jsxs)("div",{className:"details__description","data-cy":"productDescription",children:[Object(i.jsxs)("div",{className:"details__description--line",children:[Object(i.jsx)("p",{className:"details__description--key",children:"Screen"}),Object(i.jsx)("p",{className:"details__description--val",children:h})]}),Object(i.jsxs)("div",{className:"details__description--line",children:[Object(i.jsx)("p",{className:"details__description--key",children:"Resolution"}),Object(i.jsx)("p",{className:"details__description--val",children:O})]}),Object(i.jsxs)("div",{className:"details__description--line",children:[Object(i.jsx)("p",{className:"details__description--key",children:"Processor"}),Object(i.jsx)("p",{className:"details__description--val",children:p})]}),Object(i.jsxs)("div",{className:"details__description--line",children:[Object(i.jsx)("p",{className:"details__description--key",children:"RAM"}),Object(i.jsx)("p",{className:"details__description--val",children:x})]})]})]})]}),Object(i.jsxs)("div",{className:"details__bottom",children:[Object(i.jsxs)("div",{className:"details__about",children:[Object(i.jsx)("h3",{className:"details__subtitle",children:"About"}),null===t||void 0===t?void 0:t.description.map((function(e){return Object(i.jsxs)("div",{className:"details__aboutInfo",children:[Object(i.jsx)("h4",{className:"details__aboutInfo--subtitle",children:e.title}),Object(i.jsx)("p",{className:"details__aboutInfo--text",children:e.text})]},e.title)}))]}),Object(i.jsxs)("div",{className:"details__tech",children:[Object(i.jsx)("h3",{className:"details__subtitle",children:"Tech specs"}),Object(i.jsxs)("div",{className:"details__description details__description--tech",children:[Object(i.jsxs)("div",{className:"details__description--line",children:[Object(i.jsx)("p",{className:"details__description--key",children:"Screen"}),Object(i.jsx)("p",{className:"details__description--val",children:h})]}),Object(i.jsxs)("div",{className:"details__description--line",children:[Object(i.jsx)("p",{className:"details__description--key",children:"Resolution"}),Object(i.jsx)("p",{className:"details__description--val",children:O})]}),Object(i.jsxs)("div",{className:"details__description--line",children:[Object(i.jsx)("p",{className:"details__description--key",children:"Processor"}),Object(i.jsx)("p",{className:"details__description--val",children:p})]}),Object(i.jsxs)("div",{className:"details__description--line",children:[Object(i.jsx)("p",{className:"details__description--key",children:"RAM"}),Object(i.jsx)("p",{className:"details__description--val",children:x})]}),Object(i.jsxs)("div",{className:"details__description--line",children:[Object(i.jsx)("p",{className:"details__description--key",children:"Built in memory"}),Object(i.jsx)("p",{className:"details__description--val",children:v})]}),Object(i.jsxs)("div",{className:"details__description--line",children:[Object(i.jsx)("p",{className:"details__description--key",children:"Camera"}),Object(i.jsx)("p",{className:"details__description--val",children:f})]}),Object(i.jsxs)("div",{className:"details__description--line",children:[Object(i.jsx)("p",{className:"details__description--key",children:"Zoom"}),Object(i.jsx)("p",{className:"details__description--val",children:N})]}),Object(i.jsxs)("div",{className:"details__description--line",children:[Object(i.jsx)("p",{className:"details__description--key",children:"Cell"}),Object(i.jsx)("p",{className:"details__description--val",children:g.join(", ")})]})]})]})]})]})]})},he=function(){return Object(i.jsxs)("button",{type:"button",className:"goBack","data-cy":"backButton",onClick:function(){return window.history.back()},children:[Object(i.jsx)("span",{className:"arrow arrow--left-disabled"}),Object(i.jsx)("span",{className:"goBack__span",children:"Back"})]})},Oe=function(){var e=Object(r.m)().pathname,t=Object(r.q)().itemId,c=Object(m.useState)(null),a=Object(j.a)(c,2),s=a[0],n=a[1],l=Object(m.useState)(!1),o=Object(j.a)(l,2),d=o[0],u=o[1],b=Object(m.useState)(""),_=Object(j.a)(b,2),h=_[0],O=_[1],p=Object(m.useState)(""),x=Object(j.a)(p,2),v=x[0],f=x[1],N=Object(m.useState)(""),g=Object(j.a)(N,2),y=g[0],C=g[1],k=Object(m.useState)(!1),w=Object(j.a)(k,2),S=w[0],P=w[1],F=function(){var e=Object(I.a)(q.a.mark((function e(t){var c,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-academy.github.io/react_phone-catalog/_new","/products/").concat(t,".json"));case 2:return c=e.sent,e.next=5,c.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(m.useEffect)((function(){window.scrollTo(0,0)}),[t]),Object(m.useEffect)((function(){u(!0),P(!1),F(t).then((function(e){n(e),O(e.images[0])})).catch((function(){return P(!0)})).finally((function(){return u(!1)}))}),[t]),Object(m.useEffect)((function(){var e=null===t||void 0===t?void 0:t.split("-");f((null===e||void 0===e?void 0:e.slice(-2,-1).toString().toUpperCase())||""),C((null===e||void 0===e?void 0:e.slice(-1).toString())||"")}),[t]);var T=e.slice(1,2).toUpperCase()+e.slice(2),A=T.indexOf("/"),E=T.slice(0,A),L="/".concat(E.toLocaleLowerCase(),"/").concat(null===t||void 0===t?void 0:t.split("-").slice(0,-2).join("-"));return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(le,{pathname:E,name:(null===s||void 0===s?void 0:s.name)||""}),Object(i.jsx)(he,{}),d&&Object(i.jsx)(X,{}),S&&Object(i.jsx)("h2",{className:"noResults",children:"Sorry, there is no phone with a given Id on the server."}),!d&&!S&&s&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(_e,{product:s,currentImage:h,setCurrentImage:O,rout:L,currentCapacity:v,currentColor:y}),Object(i.jsx)(be,{})]})]})},pe=function(){var e=Object(m.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(m.useContext)(y),n=s.cartItems,r=s.removeFromCart,l=s.cartTotalPrice,o=s.cartCount,d=s.plusItem,u=s.minusItem;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"cart__items-container",children:n.map((function(e){return Object(i.jsxs)("div",{className:"cart__item",children:[Object(i.jsxs)("div",{className:"cart__item-info",children:[Object(i.jsx)("button",{type:"button",className:"cart__item-delete","data-cy":"cartDeleteButton",onClick:function(){return r(e)},children:Object(i.jsx)("div",{className:"cart__item-delete--cross"})}),Object(i.jsx)("div",{className:"cart__image-block",children:Object(i.jsx)("img",{src:"../_new/".concat(e.product.image),alt:e.product.name,className:"cart__image-block--img"})}),Object(i.jsx)("p",{className:"cart__item-name",children:e.product.name}),Object(i.jsxs)("div",{className:"cart__quantity",children:[Object(i.jsx)("button",{type:"button",className:b()("cart__quantity-minus",{"cart__quantity-minus--disabled":1===e.quantity}),onClick:function(){return u(e)},children:Object(i.jsx)("div",{className:b()("cart__quantity-minus--minus",{"cart__quantity-minus--minus-disabled":1===e.quantity})})}),Object(i.jsx)("span",{className:"cart__quantity--quantity",children:e.quantity}),Object(i.jsx)("button",{type:"button",className:"cart__quantity-plus",onClick:function(){return d(e)},children:Object(i.jsx)("div",{className:"cart__quantity-plus--plus"})})]})]}),Object(i.jsx)("p",{className:"cart__price",children:"$".concat(e.price)})]},e.id)}))}),Object(i.jsxs)("div",{className:"cart__total",children:[Object(i.jsxs)("div",{className:"cart__total-info",children:[Object(i.jsx)("p",{className:"cart__total-price",children:"$".concat(l)}),Object(i.jsx)("p",{className:"cart__total-items","data-cy":"productQauntity",children:"Total for ".concat(o," items")})]}),Object(i.jsxs)("div",{className:"cart__checkout",children:[Object(i.jsx)("button",{type:"button",className:"cart__checkout-btn",onClick:function(){return a(!0)},children:Object(i.jsx)("p",{className:"cart__checkout-btn--text",children:"Checkout"})}),c&&Object(i.jsxs)("div",{className:"notification",children:[Object(i.jsx)("p",{className:"notification--text",children:"We are sorry, but this feature is not implemented yet."}),Object(i.jsx)("button",{type:"button",className:"notification__close",onClick:function(){return a(!1)},children:Object(i.jsx)("div",{className:"notification__close--cross"})})]})]})]})]})},xe=function(){var e=Object(m.useContext)(y).cartItems;return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(he,{}),Object(i.jsxs)("div",{className:"cart",children:[Object(i.jsx)("h1",{className:"cart__title",children:"Cart"}),Object(i.jsx)("div",{className:"cart__main",children:e.length>0?Object(i.jsx)(pe,{}):Object(i.jsx)("p",{className:"noResults",children:"Your cart is empty."})})]})]})},ve=function(){var e=Object(m.useContext)(k).favItems,t=Object(m.useContext)(p).appliedQuery,c=Object(r.m)().pathname,a=c.slice(1,2).toUpperCase()+c.slice(2),s=te(e.map((function(e){return e.product})),t);return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"favourites",children:[Object(i.jsx)(le,{pathname:a}),Object(i.jsx)("h1",{className:"favourites__title",children:"Favourites"}),e.length?Object(i.jsx)("p",{className:"favourites__quantity",children:"".concat(e.length," items")}):Object(i.jsx)("p",{className:"favourites__quantity",children:"There are no Favourite items."}),Object(i.jsx)("div",{className:"favourites__content",children:Object(i.jsx)(H,{arrOfItems:s})})]})})},fe=function(){return Object(i.jsx)("h1",{className:"noResults",children:"Page not found"})},Ne=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{className:"header",children:Object(i.jsx)(S,{})}),Object(i.jsx)("main",{className:"main",children:Object(i.jsxs)(r.d,{children:[Object(i.jsx)(r.b,{path:"/",element:Object(i.jsx)(V,{})}),Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(V,{})}),Object(i.jsx)(r.b,{path:"home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})}),Object(i.jsxs)(r.b,{path:"phones",children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(de,{})}),Object(i.jsx)(r.b,{path:":itemId",element:Object(i.jsx)(Oe,{})})]}),Object(i.jsxs)(r.b,{path:"tablets",children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(je,{})}),Object(i.jsx)(r.b,{path:":itemId",element:Object(i.jsx)(Oe,{})})]}),Object(i.jsx)(r.b,{path:"accessories",element:Object(i.jsx)(ue,{})}),Object(i.jsx)(r.b,{path:"cart",element:Object(i.jsx)(xe,{})}),Object(i.jsx)(r.b,{path:"favourites",element:Object(i.jsx)(ve,{})}),Object(i.jsx)(r.b,{path:"*",element:Object(i.jsx)(fe,{})})]})}),Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)(d,{})})]})};s.a.render(Object(i.jsx)(n.a,{children:Object(i.jsx)(A,{children:Object(i.jsx)(C,{children:Object(i.jsx)(w,{children:Object(i.jsx)(ee,{children:Object(i.jsx)(x,{children:Object(i.jsx)(Ne,{})})})})})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.cb1df6e1.chunk.js.map
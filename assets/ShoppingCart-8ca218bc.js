import{u as A,S as y,a as I,_ as x}from"./MainGoodsItem-0db12466.js";import{z as w,o as _,c,e as t,t as o,u as e,a as g,r as V,b as N,d as B,f as d,w as p,A as D,F as f,g as v,h as T,j as E,i as $}from"./index-ae1d49c6.js";import"./swiper-8d28ff12.js";const F="/clickshop/assets/trash-65ba1fd7.svg",j={class:"shoppingCart__inner__main__cards-item"},M=["src"],O={class:"shoppingCart__inner__main__cards-item-info"},q={class:"shoppingCart__inner__main__cards-item-price"},z={class:"shoppingCart__inner__main__cards-item-btns"},H={class:"shoppingCart__inner__main__cards-item-total"},L=t("img",{src:F,alt:"",srcset:""},null,-1),Q=[L],Y={__name:"OrderItem",props:{item:{type:Object,requaired:!0}},setup(n){const a=w();return(C,r)=>(_(),c("div",j,[t("img",{src:n.item.images[0],alt:"",class:"shoppingCart__inner__main__cards-item-img"},null,8,M),t("div",O,[t("h3",null,o(n.item.title),1),t("p",null,o(n.item.description),1)]),t("div",q," $"+o(n.item.price),1),t("div",z,[t("button",{class:"shoppingCart__inner__main__cards-item-btns-btn",onClick:r[0]||(r[0]=l=>e(a).changeAmount(n.item,"-"))},"-"),t("span",null,o(n.item.amount),1),t("button",{class:"shoppingCart__inner__main__cards-item-btns-btn",onClick:r[1]||(r[1]=l=>e(a).changeAmount(n.item,"+"))},"+")]),t("div",H," $"+o(n.item.price*n.item.amount),1),t("button",{class:"shoppingCart__inner__main__cards-item-trash",onClick:r[2]||(r[2]=l=>e(a).deleteItem(n.item))},Q)]))}},G={class:"shoppingCart"},J={class:"routes container"},K=t("span",null,"Home/",-1),R={class:"shoppingCart__inner container"},U={class:"shoppingCart__inner__main"},W=E('<div class="shoppingCart__inner__main__headers"><h4 class="shoppingCart__inner__main__headers-title">Products</h4><h4 class="shoppingCart__inner__main__headers-title">Price</h4><h4 class="shoppingCart__inner__main__headers-title">Quantity</h4><h4 class="shoppingCart__inner__main__headers-title">Total</h4></div>',1),X={class:"shoppingCart__inner__main__cards"},Z={class:"shoppingCart__inner__total"},tt=t("h3",null,"Cart Totals",-1),nt={class:"shoppingCart__inner__total__info"},st={class:"shoppingCart__inner__total__info-item"},et=t("span",{class:"shoppingCart__inner__total__info-item-name"},"Subtotal",-1),_t={class:"shoppingCart__inner__total__info-item-amount"},it={class:"shoppingCart__inner__total__info-item"},ot=t("span",{class:"shoppingCart__inner__total__info-item-name"},"Total Discount",-1),at={class:"shoppingCart__inner__total__info-item-amount"},rt={class:"shoppingCart__inner__total__info-item"},ct=t("span",{class:"shoppingCart__inner__total__info-item-name"},"Shiping",-1),lt={class:"shoppingCart__inner__total__info-item-amount"},dt=t("a",{class:"shoppingCart__inner__total__info-charge"}," View shipping charge ",-1),pt={class:"shoppingCart__inner__total__info-item"},ht=t("span",{class:"shoppingCart__inner__total__info-item-name"},"Total",-1),mt={class:"shoppingCart__inner__total__info-item-amountTotal"},ut=t("button",{class:"shoppingCart__inner__total-btn"}," Proceed To Checkout ",-1),gt=t("h5",{class:"shoppingCart__inner__total-continue"}," Continue Shopping ",-1),Ct={key:0,class:"productCard__recommendations container"},ft=t("div",{class:"productCard__recommendations-title"},[t("h3",null,"You may be interested in")],-1),vt={key:0,class:"productCard__recommendations__goods"},kt={__name:"ShoppingCart",setup(n){let a=g(()=>C.resArray);const C=A(),r=w(),l=g(()=>r.shopsArr);let S=V(16);const b=()=>{let s=0;return l.value.forEach(i=>{s+=i.price*i.amount}),s},k=()=>{let s=0;return l.value.forEach(i=>{s+=i.price*i.amount/i.discountPercentage}),Math.round(s)},P=()=>{let s=0;const i=g(()=>b()),h=g(()=>k());return s+=i.value,s+=S.value,s-=h.value,s};return N(async()=>{await C.getIndex()}),(s,i)=>{const h=B("router-link");return _(),c("div",G,[t("div",J,[d(h,{to:"/"},{default:p(()=>[K]),_:1}),D(" Shopping Card ")]),t("div",R,[t("div",U,[W,t("div",X,[(_(!0),c(f,null,v(l.value,(m,u)=>(_(),$(Y,{key:u,item:m},null,8,["item"]))),128))])]),t("div",Z,[tt,t("div",nt,[t("div",st,[et,t("span",_t,"$"+o(b()),1)]),t("div",it,[ot,t("span",at,"(-) $"+o(k()),1)]),t("div",rt,[ct,t("span",lt,"$"+o(e(S)),1)]),dt,t("div",pt,[ht,t("span",mt,"$"+o(P()),1)])]),d(h,{to:"/payment"},{default:p(()=>[ut]),_:1}),d(h,{to:"/"},{default:p(()=>[gt]),_:1})])]),e(a)?(_(),c("div",Ct,[ft,e(a)?(_(),c("div",vt,[d(e(I),{"slides-per-view":1},{default:p(()=>[d(e(y),{class:"productCard__recommendations__goods__slide"},{default:p(()=>[(_(!0),c(f,null,v(e(a).slice(0,4),(m,u)=>(_(),$(x,{key:u,item:m},null,8,["item"]))),128))]),_:1}),d(e(y),{class:"productCard__recommendations__goods__slide"},{default:p(()=>[(_(!0),c(f,null,v(e(a).slice(4,8),(m,u)=>(_(),$(x,{key:u,item:m},null,8,["item"]))),128))]),_:1})]),_:1})])):T("",!0)])):T("",!0)])}}};export{kt as default};
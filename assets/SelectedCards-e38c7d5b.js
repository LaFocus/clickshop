import{z as f,r as k,d as I,o as n,c as i,e,f as c,w as a,A as S,F as _,g as v,u as d,G as m,H as C}from"./index-ae1d49c6.js";const w={class:"routes container"},x=e("span",null,"Home/",-1),N={class:"selectedItems container"},G={class:"selectedItems__item__inner"},J={class:"selectedItems__item__inner-img"},O=["src"],y=["onClick"],A=e("img",{src:C,alt:"",class:"mainGoodsItem__inner-img-cart"},null,-1),B=[A],$=["onClick"],F={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"20",viewBox:"0 0 24 20",fill:"#030A8C",class:"mainGoodsItem__inner-img-like"},b={__name:"SelectedCards",setup(L){const u=f(),l=localStorage.length?k(JSON.parse(localStorage.itemsGoods)||[]):[],g=r=>{const s=JSON.parse(localStorage.getItem("itemsGoods"))||[],o=s.findIndex(t=>JSON.stringify(t)===JSON.stringify(r));o!==-1&&(s.splice(o,1),localStorage.setItem("itemsGoods",JSON.stringify(s)),l.value=s)};return(r,s)=>{const o=I("router-link");return n(),i(_,null,[e("div",w,[c(o,{to:"/"},{default:a(()=>[x]),_:1}),S(" Selected ")]),e("div",N,[(n(!0),i(_,null,v(d(l),(t,h)=>(n(),i("div",{class:"selectedItems__item",key:h},[e("div",G,[e("div",J,[c(o,{to:`/productpage/${t.id}`},{default:a(()=>[e("img",{src:`${t.images[0]}`,alt:"",class:"selectedItems__item__inner-img-phone"},null,8,O)]),_:2},1032,["to"]),e("button",{onClick:m(p=>d(u).addItem(t,1),["stop"])},B,8,y),e("button",{onClick:m(p=>g(t),["stop"])},[(n(),i("svg",F,[e("path",{d:"M12.0069 19L2.67077 10.709C-2.40323 5.73443 5.05554 -3.81677 12.0069 3.91042C18.9583 -3.81677 26.3832 5.7676 21.3431 10.709L12.0069 19Z",stroke:"#030A8C","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",ref_for:!0,ref:"likeFill"},null,512)]))],8,$)])])]))),128))])],64)}}};export{b as default};

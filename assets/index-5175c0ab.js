import{y as I,q as b,v as A,L as C,c as P,a as y,t as o,f as L,$ as f,a0 as S,I as p,w as E}from"./index-d08b172e.js";import{r as h,f as H,n as d,w as N,c as a,d as u,t as O,u as z,y as D}from"./index-68b57507.js";const M=(e,i)=>{const t=h(),n=()=>{t.value=C(e).height};return H(()=>{if(d(n),i)for(let l=1;l<=3;l++)setTimeout(n,100*l)}),I(()=>d(n)),N([b,A],n),t};function $(e,i){const t=M(e,!0);return n=>a("div",{class:i("placeholder"),style:{height:t.value?"".concat(t.value,"px"):void 0}},[n()])}const[q,r]=P("nav-bar"),F={title:String,fixed:Boolean,zIndex:y,border:o,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:o};var K=u({name:q,props:F,emits:["clickLeft","clickRight"],setup(e,{emit:i,slots:t}){const n=h(),l=$(n,r),g=c=>i("clickLeft",c),x=c=>i("clickRight",c),v=()=>t.left?t.left():[e.leftArrow&&a(p,{class:r("arrow"),name:"arrow-left"},null),e.leftText&&a("span",{class:r("text")},[e.leftText])],k=()=>t.right?t.right():a("span",{class:r("text")},[e.rightText]),s=()=>{const{title:c,fixed:m,border:w,zIndex:T}=e,B=L(T),_=e.leftArrow||e.leftText||t.left,R=e.rightText||t.right;return a("div",{ref:n,style:B,class:[r({fixed:m}),{[S]:w,"van-safe-area-top":e.safeAreaInsetTop}]},[a("div",{class:r("content")},[_&&a("div",{class:[r("left"),e.clickable?f:""],onClick:g},[v()]),a("div",{class:[r("title"),"van-ellipsis"]},[t.title?t.title():c]),R&&a("div",{class:[r("right"),e.clickable?f:""],onClick:x},[k()])])])};return()=>e.fixed&&e.placeholder?l(s):s()}});const V=E(K),j=u({__name:"index",setup(e){return(i,t)=>(O(),z("div",null,[a(D(V),{title:"购物车","left-text":"返回","left-arrow":""})]))}});export{j as default};

import{l as c,o as r,e as i,h as t,t as n,j as l,v as o,u as d,q as y,k as f}from"./entry.5e82415a.js";const m={class:"text-left text-xl pt-8 pb-2 text-gray-700"},x={class:"max-w-3xl"},g={key:0},h={__name:"BaseContent",props:{title:{type:String,required:!0},part1:{type:String,required:!0},part2:{type:String,required:!1}},setup(e){const a=c(!1);return(p,s)=>(r(),i("div",null,[t("div",m,n(e.title),1),t("div",x,[l(n(e.part1)+" ",1),e.part2!=null?(r(),i("div",g,[t("span",{onClick:s[0]||(s[0]=u=>a.value=!0),style:o(d(a)?{display:"none"}:{display:"initial"}),class:"text-gray-600 cursor-pointer underline decoration-dashed underline-offset-4"},"More info",4),t("span",{style:o(d(a)?{display:"initial"}:{display:"none"})},[l(n(e.part2)+" ",1),t("span",{onClick:s[1]||(s[1]=u=>a.value=!1),class:"text-gray-600 cursor-pointer underline decoration-dashed underline-offset-4"},"Less info")],4)])):y("",!0)])]))}},v=t("div",{class:"mx-auto loader"},null,-1),_=[v],k={__name:"BaseLoader",props:{displayLoader:{type:String},padding:{type:String}},setup(e){return(a,p)=>(r(),i("div",{id:"base-loader",style:o({display:e.displayLoader}),class:f(e.padding)},_,6))}};export{k as _,h as a};

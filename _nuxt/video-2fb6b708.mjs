import{_ as r,n as c,f as i,z as p,A as u,o as _,c as v,a as n,B as f}from"./entry-a2835517.mjs";const m=c({__name:"video",setup(d,{expose:t}){t();const e=i(null),o=()=>{e.value&&e.value.play()},s=()=>{e.value=f("example-video"),e.value.ready(()=>{console.log("onMounted:ready"),e.value.src({src:"https://cloudflarestream.com/7c2ede07a44d79b00831a22b144e65bc/manifest/video.mpd",type:"application/dash+xml"})})};p(()=>{console.log("onMounted")}),u(()=>{var l;(l=e.value)==null||l.dispose()});const a={player:e,playVideo:o,setupVideo:s};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),y=n("video",{id:"example-video"},null,-1);function b(d,t,e,o,s,a){return _(),v("div",null,[y,n("button",{onClick:o.setupVideo},"setupVideo"),n("button",{onClick:o.playVideo},"playVideo")])}var x=r(m,[["render",b]]);export{x as default};
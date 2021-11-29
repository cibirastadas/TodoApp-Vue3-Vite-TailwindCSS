var P=Object.defineProperty,K=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var j=(t,e,o)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,$=(t,e)=>{for(var o in e||(e={}))G.call(e,o)&&j(t,o,e[o]);if(M)for(var o of M(e))J.call(e,o)&&j(t,o,e[o]);return t},_=(t,e)=>K(t,R(e));import{a as Q,o as r,c as d,b as a,r as w,n as k,t as I,d as f,w as p,u as h,e as N,f as A,g as y,h as W,F as S,i as V,j as B,k as X,l as Y}from"./vendor.6df0f006.js";const Z=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const u of i)if(u.type==="childList")for(const m of u.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function o(i){const u={};return i.integrity&&(u.integrity=i.integrity),i.referrerpolicy&&(u.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?u.credentials="include":i.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(i){if(i.ep)return;i.ep=!0;const u=o(i);fetch(i.href,u)}};Z();const x=Q.create({baseURL:"http://jsonplaceholder.typicode.com/todos"}),b={get:async()=>{try{let t=await x.get("?_limit=200");if(!t.data)throw Error("Empty todo list");return t}catch(t){return t}},delete:async t=>{try{return await x.delete(`/${t}`),"Todo was deleted"}catch(e){return e}},update:async(t,e)=>{try{return await x.put(`/${t}`,e),"Todo completed"}catch(o){return o}},add:async t=>{try{return await x.post("",t),"Todo was added"}catch(e){return e}}},ee={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},te=a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"},null,-1),oe=[te];function le(t,e){return r(),d("svg",ee,oe)}var z={render:le};const se={class:"fill-current h-6 mw-6 stroke-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},ne=a("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),ae=a("path",{d:"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"},null,-1),re=[ne,ae];function ie(t,e){return r(),d("svg",se,re)}var de={render:ie};const ce={class:"fill-current h-4 mw-4 stroke-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},ue=a("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),fe=a("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"},null,-1),pe=[ue,fe];function he(t,e){return r(),d("svg",ce,pe)}var me={render:he};const q={props:{payload:{required:!1},red:{type:Boolean,required:!1},green:{type:Boolean,required:!1},blue:{type:Boolean,required:!1},active:{type:Boolean,required:!1}},setup(t){return(e,o)=>(r(),d("button",{onClick:o[0]||(o[0]=l=>e.$emit("action",t.payload)),class:k(["inline-flex items-center justify-center shadow-lg w-8 h-8 mx-1 text-white transition-colors duration-150 rounded-full",{"hover:bg-red-500 bg-red-300":t.red,"bg-red-500":t.active&&t.red,"hover:bg-green-500 bg-green-300":t.green,"bg-green-500":t.active&&t.green,"bg-blue-500":t.blue}])},[w(e.$slots,"default")],2))}},ve={class:"p-2"},ge={class:"flex px-2"},we={class:"ml-auto flex"},ye={props:{task:{type:Object,required:!0}},setup(t){return(e,o)=>(r(),d("div",ve,[a("div",{class:k(["flex items-center leading-none rounded-full p-2 text-base text-gray-900 bg-white shadow w-full",{"line-through text-gray-500 bg-gray-200":t.task.completed}])},[a("span",ge,I(t.task.title),1),a("div",we,[f(q,{onAction:o[0]||(o[0]=l=>e.$emit("completed",l)),payload:t.task.id,green:"",active:t.task.completed},{default:p(()=>[f(h(me),{class:"fill-current h-4 mw-4 stroke-2"})]),_:1},8,["payload","active"]),f(q,{onAction:o[1]||(o[1]=l=>e.$emit("delete",l)),payload:t.task.id,red:""},{default:p(()=>[f(h(de),{class:"fill-current h-6 mw-6 stroke-2"})]),_:1},8,["payload"])])],2)]))}},$e=["placeholder","value"],_e={props:{task:{type:String},placeholder:{type:String}},setup(t){return(e,o)=>(r(),d("input",{class:"leading-none text-black p-3 w-full bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner",placeholder:t.placeholder,type:"text",value:t.task,onInput:o[0]||(o[0]=l=>e.$emit("update:task",l.target.value)),required:""},null,40,$e))}},H={props:{payload:{type:Object,required:!1},active:{type:Boolean,required:!1},indigo:{type:Boolean,required:!1},yeallow:{type:Boolean,required:!1}},setup(t){return(e,o)=>(r(),d("button",{onClick:o[0]||(o[0]=l=>e.$emit("action",t.payload)),class:k(["uppercase text-black font-medium text-base py-3 px-2 sm:px-3 items-center transition-colors duration-75",{"bg-indigo-200 hover:bg-indigo-300":t.indigo,"bg-indigo-400":t.indigo&&t.active,"bg-yellow-200 hover:bg-yellow-300":t.yeallow}])},[w(e.$slots,"default")],2))}},ke=A("Add"),xe={props:{task:{type:String,required:!0}},setup(t){return(e,o)=>(r(),d("form",{onSubmit:o[2]||(o[2]=N(l=>e.$emit("action"),["prevent"])),class:"w-full"},[f(_e,{placeholder:"My task...",class:"mb-7",task:t.task,"onUpdate:task":o[0]||(o[0]=l=>e.$emit("update:task",l))},null,8,["task"]),f(H,{class:"w-full tracking-wide text-lg",yeallow:"",onAction:o[1]||(o[1]=l=>e.$emit("add"))},{default:p(()=>[ke]),_:1})],32))}},be={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18"},Ce=a("path",{d:"m14.53 4.53-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"},null,-1),Ae=[Ce];function Be(t,e){return r(),d("svg",be,Ae)}var qe={render:Be};const Te={class:"flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-900 bg-opacity-40"},Le={class:"bg-white rounded-lg sm:w-1/2 w-full mx-2"},Me={class:"flex flex-col items-start p-4"},je={class:"flex items-center w-full"},Ie={class:"text-gray-900 font-medium text-lg"},Ne=a("hr",null,null,-1),Se=a("div",{class:"main-content mt-6"},null,-1),Ve={props:{isCloseModal:{type:Boolean,required:!1}},setup(t){return(e,o)=>(r(),d("div",Te,[a("div",Le,[a("div",Me,[a("div",je,[a("div",Ie,[w(e.$slots,"header")]),f(h(qe),{class:"ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer",onClick:o[0]||(o[0]=l=>e.$emit("close"))})]),Ne,Se,w(e.$slots,"content")])])]))}},ze=["value"],He={class:"inline-flex items-center justify-center transition-colors duration-150 bg-yellow-200 focus:shadow-outline hover:bg-yellow-300"},Oe={props:{task:{type:String}},setup(t){return(e,o)=>(r(),d("form",{onSubmit:o[1]||(o[1]=N(l=>e.$emit("action"),["prevent"])),class:"flex"},[a("input",{class:"leading-none text-black p-3 border-0 outline-none w-full",placeholder:"Add New Todo...",id:"task",type:"text",value:t.task,onInput:o[0]||(o[0]=l=>e.$emit("update:task",l.target.value)),required:""},null,40,ze),a("button",He,[w(e.$slots,"default")])],32))}},Ue={class:"flex justify-center"},De={key:0,class:"text-green-500 text-3xl"},Ee={key:1,style:{width:"800px"}},Fe=a("h1",{class:"text-white text-center text-3xl py-8 uppercase tracking-widest font-medium"}," Todo list ",-1),Pe={class:"m-2 flex sm:justify-between mb-6"},Ke={class:"w-1/2 hidden sm:block"},Re={class:"bg-white flex w-full sm:w-auto"},Ge={class:"mb-24"},Je=A(" Add New Todo "),Qe={setup(t){const e=y(""),o=y(!1),l=y([]),i=y(!1),u=n=>{v.value=v.value.map(s=>s.id===n.id?_($({},s),{active:!s.active}):_($({},s),{active:!1}))},m=()=>l.value.filter(n=>n.completed),O=()=>l.value.filter(n=>!n.completed),U=()=>l.value,v=y([{id:1,name:"Completed",active:!1},{id:2,name:"UnCompleted",active:!1},{id:3,name:"All",active:!1}]);(async()=>{i.value=!0,await b.get().then(n=>l.value=n.data).catch(n=>console.log(n)),i.value=!1})();const D=n=>{b.delete(n).then(s=>{l.value=l.value.filter(c=>c.id!==n),alert(s)}).catch(s=>console.log(s))},T=()=>{const n={userId:1,id:l.value.length+1,title:e.value,completed:!1};b.add(e.value).then(s=>{l.value.unshift(n),alert(s)}).catch(s=>console.log(s)),e.value=""},E=n=>{const s=l.value.find(g=>g.id===n);if(!s)return;let c=_($({},s),{completed:!s.completed});const C=l.value.indexOf(s);b.update(n,c).then(g=>{l.value[C]=c,alert(g)}).catch(g=>console.log(g))},L=()=>{o.value=!o.value},F=W(()=>{const n=v.value.find(s=>s.active===!0);return n?n.name==="Completed"?m():n.name==="UnCompleted"?O():n.name==="All"?U():l.value:l.value});return(n,s)=>(r(),d("div",Ue,[i.value?(r(),d("p",De,"loading...")):(r(),d("div",Ee,[a("div",null,[Fe,a("div",Pe,[a("div",Ke,[f(Oe,{onAction:T,task:e.value,"onUpdate:task":s[0]||(s[0]=c=>e.value=c),class:"h-full"},{default:p(()=>[f(h(z),{class:"w-10 h-7"})]),_:1},8,["task"])]),a("div",Re,[(r(!0),d(S,null,V(v.value,(c,C)=>(r(),B(H,{key:c.id,payload:c,onAction:u,active:c.active,indigo:"",class:k([{"border-r-2 ":C<v.value.length-1},"h-full w-full"])},{default:p(()=>[A(I(c.name),1)]),_:2},1032,["payload","active","class"]))),128))])])]),a("div",Ge,[(r(!0),d(S,null,V(h(F),c=>(r(),B(ye,{key:c,task:c,onDelete:D,onCompleted:E},null,8,["task"]))),128))])])),f(q,{blue:"",class:"w-16 h-16 block sm:hidden fixed bottom-5",onAction:L},{default:p(()=>[f(h(z),{class:"w-14 h-14"})]),_:1}),o.value?(r(),B(Ve,{key:2,onClose:L,class:"w-full"},{header:p(()=>[Je]),content:p(()=>[f(xe,{task:e.value,"onUpdate:task":s[1]||(s[1]=c=>e.value=c),onAdd:T},null,8,["task"])]),_:1})):X("",!0)]))}},We={class:"min-h-screen bg-gradient-to-b from-blue-300 to-gray-300"},Xe={setup(t){return(e,o)=>(r(),d("div",We,[f(Qe)]))}};Y(Xe).mount("#app");
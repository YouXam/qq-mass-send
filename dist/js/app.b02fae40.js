(function(){"use strict";var e={5558:function(e,n,t){var s=t(9242),r=(t(7658),t(3396)),l=t(7139);const a={class:"container"},i={class:"width-80"},o=(0,r._)("h1",null,"QQ 群发助手",-1),u=(0,r._)("hr",null,null,-1),c=(0,r._)("h2",null,"当前账号",-1),d={class:"label"},p=(0,r._)("h2",null,"添加祝福语",-1),g=(0,r._)("h2",null,"选择好友",-1),f=(0,r._)("h2",null,"选择称呼和祝福语",-1),v=(0,r._)("span",{class:"label"},"祝福语：",-1),m=(0,r._)("span",{class:"label"},"称呼：",-1),h=(0,r._)("span",{class:"label"},"自定义祝福语：",-1),w=(0,r._)("h2",null,"检查和发送",-1),k=(0,r._)("span",{style:{"margin-bottom":"100px"}},null,-1);function _(e,n,t,s,_,b){const y=(0,r.up)("n-avatar"),F=(0,r.up)("n-thing"),G=(0,r.up)("n-list-item"),W=(0,r.up)("n-list"),q=(0,r.up)("n-button"),j=(0,r.up)("n-upload"),H=(0,r.up)("n-input"),U=(0,r.up)("n-transfer"),O=(0,r.up)("n-select"),x=(0,r.up)("n-alert"),C=(0,r.up)("n-space"),N=(0,r.up)("n-progress");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",i,[o,u,c,(0,r.Wm)(W,{class:"list"},{default:(0,r.w5)((()=>[(0,r.Wm)(G,null,{prefix:(0,r.w5)((()=>[(0,r.Wm)(y,{size:"large",src:"http://q1.qlogo.cn/g?b=qq&nk="+e.account+"&s=640"},null,8,["src"])])),default:(0,r.w5)((()=>[(0,r.Wm)(F,{title:e.nickname,"content-style":"margin-top: 10px;"},{description:(0,r.w5)((()=>[(0,r._)("span",d,(0,l.zw)(e.account),1)])),_:1},8,["title"])])),_:1})])),_:1}),(0,r.Wm)(j,{ref:"upload","default-upload":!1,class:"upload","show-file-list":!1,onChange:e.importConfig},{default:(0,r.w5)((()=>[(0,r.Wm)(q,null,{default:(0,r.w5)((()=>[(0,r.Uk)("导入配置")])),_:1})])),_:1},8,["onChange"]),p,(0,r.Wm)(W,{class:"list"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.greetings,((n,t)=>((0,r.wg)(),(0,r.j4)(G,{style:{width:"100%"},key:t},{default:(0,r.w5)((()=>[(0,r.Wm)(H,{value:e.greetings[t],"onUpdate:value":n=>e.greetings[t]=n,onChange:n=>{e.greetings[t].length>0||e.greetings.splice(t,1),Object.keys(e.personGreetings).forEach((n=>{e.personGreetings[parseInt(n)].auto&&(e.personGreetings[parseInt(n)].greetings=0)}))},placeholder:"使用 {name} 作为称呼的占位符"},null,8,["value","onUpdate:value","onChange"])])),_:2},1024)))),128)),(0,r.Wm)(G,null,{default:(0,r.w5)((()=>[(0,r.Wm)(q,{onClick:n[0]||(n[0]=()=>{e.greetings.push("")})},{default:(0,r.w5)((()=>[(0,r.Uk)(" 添加祝福语 ")])),_:1})])),_:1})])),_:1}),g,(0,r.Wm)(U,{ref:"transfer",value:e.selecedFriends,"onUpdate:value":n[1]||(n[1]=n=>e.selecedFriends=n),"virtual-scroll":"",options:e.friendsDataSource,"source-filterable":"","target-filterable":""},null,8,["value","options"]),f,(0,r.Wm)(W,{class:"list"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.selecedFriends,((n,t)=>((0,r.wg)(),(0,r.j4)(G,{key:t,style:{width:"100%"}},{prefix:(0,r.w5)((()=>[(0,r.Wm)(y,{size:"large",src:"http://q1.qlogo.cn/g?b=qq&nk="+n+"&s=640"},null,8,["src"])])),default:(0,r.w5)((()=>[(0,r.Wm)(F,{title:e.friendMap[e.selecedFriends[t]].nickname,"content-style":"margin-top: 10px;"},{description:(0,r.w5)((()=>[v,(0,r.Wm)(O,{value:e.personGreetings[e.selecedFriends[t]].greetings,"onUpdate:value":[n=>e.personGreetings[e.selecedFriends[t]].greetings=n,n=>{e.personGreetings[e.selecedFriends[t]].auto=!1}],options:e.greetings.map(((e,n)=>({label:e,value:n}))).concat({label:"自定义",value:-1})},null,8,["value","onUpdate:value","options"])])),default:(0,r.w5)((()=>[e.personGreetings[e.selecedFriends[t]].greetings>=0?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[m,(0,r.Wm)(H,{value:e.personGreetings[e.selecedFriends[t]].remark,"onUpdate:value":n=>e.personGreetings[e.selecedFriends[t]].remark=n,placeholder:"请输入..."},null,8,["value","onUpdate:value"])],64)):((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[h,(0,r.Wm)(H,{placeholder:"请输入...",value:e.personGreetings[e.selecedFriends[t]].customGreetings,"onUpdate:value":n=>e.personGreetings[e.selecedFriends[t]].customGreetings=n},null,8,["value","onUpdate:value"])],64))])),_:2},1032,["title"])])),_:2},1024)))),128))])),_:1}),w,(0,r.Wm)(W,{class:"list"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.selecedFriends,((n,t)=>((0,r.wg)(),(0,r.j4)(G,{key:t},{prefix:(0,r.w5)((()=>[(0,r.Wm)(y,{size:"large",src:"http://q1.qlogo.cn/g?b=qq&nk="+n+"&s=640"},null,8,["src"])])),default:(0,r.w5)((()=>[(0,r.Wm)(C,null,{default:(0,r.w5)((()=>[(0,r.Wm)(F,{title:e.friendMap[e.selecedFriends[t]].nickname,"content-style":"margin-top: 10px;"},{description:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.personGreetings[e.selecedFriends[t]].greetings>=0?e.greetings[e.personGreetings[e.selecedFriends[t]].greetings].replaceAll("{name}",e.personGreetings[e.selecedFriends[t]].remark):e.personGreetings[e.selecedFriends[t]].customGreetings),1)])),_:2},1032,["title"]),e.statuss?.[n]?((0,r.wg)(),(0,r.j4)(x,{key:0,title:"ok"===e.statuss[n]?"发送成功":"发送错误",type:"ok"===e.statuss[n]?"success":"error"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.statuss[n]),1)])),_:2},1032,["title","type"])):(0,r.kq)("",!0)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),(0,r.Wm)(q,{onClick:e.exportConfig,style:{"margin-bottom":"20px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("导出配置")])),_:1},8,["onClick"]),(0,r.Wm)(q,{onClick:e.send,type:"primary",disabled:e.disabled},{default:(0,r.w5)((()=>[(0,r.Uk)("发送！")])),_:1},8,["onClick","disabled"]),e.sending?((0,r.wg)(),(0,r.j4)(N,{key:0,style:{"margin-top":"20px",width:"50%"},type:"line",status:e.status,percentage:e.percentage},null,8,["status","percentage"])):(0,r.kq)("",!0),k])])}var b=t(4870),y=t(5433),F=t(1466),G=t(716),W=t(5563),q=t(9884),j=t(3032),H=t(30),U=t(9803),O=t(5457),x=t(7819),C=t(4295),N=t(3849),Z=(0,r.aZ)({name:"App",components:{NTransfer:y.Z,NList:F.ZP,NListItem:G.Z,NButton:W.ZP,NInput:q.Z,NAvatar:j.Z,NThing:H.Z,NSelect:U.Z,NProgress:O.Z,NAlert:x.Z,NUpload:C.Z,NSpace:N.Z},setup(){const e=(0,b.iH)([]),n=(0,b.iH)([]),t=(0,b.iH)([]),s=(0,b.iH)([]),r=(0,b.iH)({}),l=(0,b.iH)({}),a=(0,b.iH)({}),i=(0,b.iH)(!1),o=(0,b.iH)(0),u=(0,b.iH)(""),c=(0,b.iH)(!1),d=(0,b.iH)(""),p=(0,b.iH)(0);function g(){const e=[];for(const n of t.value){const t=a.value[n];e.push({user_id:n,message:t.greetings>=0?s.value[t.greetings].replaceAll("{name}",t.remark):t.customGreetings})}i.value=!0,c.value=!0,o.value=0,u.value="",fetch("/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{o.value=100,c.value=!1,u.value=e.every((e=>"ok"===e.status))?"success":"error",e.forEach((e=>{l.value[e.user_id]="ok"===e.status?"ok":e.reason})),console.log(e)}))}function f(){const e={greetings:s.value,selecedFriends:t.value,personGreetings:a.value},n=document.createElement("a");n.href=URL.createObjectURL(new Blob([JSON.stringify(e,null,2)],{type:"application/json"})),n.download="config.json",n.click()}function v(e){const n=e.fileList[0].file;if(!n)return;const r=new FileReader;r.onload=e=>{if(!e.target?.result)return;const n=JSON.parse(e.target.result);s.value=n.greetings,t.value=n.selecedFriends,a.value=n.personGreetings},r.readAsText(n)}return fetch("/status").then((e=>e.json())).then((e=>{d.value=e.nickname,console.log(e),p.value=e.qq})),fetch("/friends").then((e=>e.json())).then((t=>{e.value=t,e.value.forEach((e=>{r.value[e.user_id]=e,a.value[e.user_id]={remark:e.remark,greetings:s.value?.[0]?0:-1,auto:!0,customGreetings:"你好。"}})),n.value=e.value.map((e=>({label:e.nickname+(e.remark?`- ${e.remark}`:"")+" ("+e.user_id+")",value:e.user_id})))})),{friendsDataSource:n,selecedFriends:t,greetings:s,friendMap:r,personGreetings:a,send:g,sending:i,percentage:o,status:u,disabled:c,statuss:l,nickname:d,account:p,exportConfig:f,importConfig:v}}}),D=t(89);const S=(0,D.Z)(Z,[["render",_]]);var T=S;(0,s.ri)(T).mount("#app")}},n={};function t(s){var r=n[s];if(void 0!==r)return r.exports;var l=n[s]={exports:{}};return e[s](l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(n,s,r,l){if(!s){var a=1/0;for(c=0;c<e.length;c++){s=e[c][0],r=e[c][1],l=e[c][2];for(var i=!0,o=0;o<s.length;o++)(!1&l||a>=l)&&Object.keys(t.O).every((function(e){return t.O[e](s[o])}))?s.splice(o--,1):(i=!1,l<a&&(a=l));if(i){e.splice(c--,1);var u=r();void 0!==u&&(n=u)}}return n}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[s,r,l]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,s){var r,l,a=s[0],i=s[1],o=s[2],u=0;if(a.some((function(n){return 0!==e[n]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(o)var c=o(t)}for(n&&n(s);u<a.length;u++)l=a[u],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(c)},s=self["webpackChunkqq_mass_send_front"]=self["webpackChunkqq_mass_send_front"]||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(5558)}));s=t.O(s)})();
//# sourceMappingURL=app.b02fae40.js.map
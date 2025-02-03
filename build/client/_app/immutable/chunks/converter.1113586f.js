import{G as f,Z as x,B as k,_ as w}from"./Page.svelte_svelte_type_style_lang.5ee686e0.js";const v=n=>(n.type==="content"&&(n.type="markdown"),delete n.default,{...n,fields:n.fields.map(v)});function D(n){const s=f();if(n.version===2){const e=new Map,i=new Map,d=n.pages.filter(t=>t.parent===null).map(t=>{const o=f();return e.set(t.id,o),{...t,id:o,site:s}}),r=n.pages.filter(t=>t.parent!==null);return{...n,site:{...n.site,id:s},pages:[...d,...r.map(t=>{const o=f();return e.set(t.id,o),{...t,id:o,site:s,parent:e.get(t.parent)}})],symbols:n.symbols.map(t=>{const o=f();return i.set(t.id,o),{...t,id:o,site:s}}),sections:n.sections.map(t=>({...t,id:f(),symbol:i.get(t.symbol),page:e.get(t.page)}))}}n=I(n);const c=e=>{const i=Object.entries(n.content).reduce((d,[r,t])=>(d[r]={},e.fields.forEach(o=>{d[r][o.key]=w(o)}),d),{});return{id:f(),site:s,name:e.name,code:e.code,fields:e.fields.map(v),_old_id:e.id,content:i}},m=[...n.symbols.map(e=>c(e)),{id:f(),site:s,name:"Content",code:{html:'<div class="section"><div class="section-container content">{@html content.html}</div></div>',css:`
.content {

  :global(img) {
    width: 100%;
    margin: 2rem 0;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
  }

  :global(p) {
    padding: 0.25rem 0;
    line-height: 1.5;
  }

  :global(a) {
    text-decoration: underline;
  }

  :global(h1) {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  :global(h2) {
    font-size: 2.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  :global(h3) {
    font-size: 1.75rem; 
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  :global(ul) {
    list-style: disc;
    padding: 0.5rem 0;
    padding-left: 1.25rem;
  }

  :global(ol) {
    list-style: decimal;
    padding: 0.5rem 0;
    padding-left: 1.25rem;
  }

  :global(blockquote) {
    padding: 2rem;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
  }
}
      `,js:""},fields:[{id:x(),key:"content",label:"Content",type:"markdown",fields:[],options:{},is_static:!1}],content:{en:{content:{markdown:"# This is a content block",html:"<h1>This is a content block</h1>"}}},_old_id:null}],l=e=>{const i=Object.entries(n.content).reduce((d,[r,t])=>(d[r]={},e.fields.forEach(o=>{var u;d[r][o.key]=((u=t==null?void 0:t[e.id])==null?void 0:u[o.key])||w(o)}),d),{});return{id:f(),name:e.name,url:e.id,code:e.code,fields:e.fields.map(v)||[],sections:e.sections,pages:e.pages||[],content:i,site:s}},p=(e,i)=>{let d,r;return e.type==="component"?(d=m.find(t=>t._old_id===e.symbolID),r=Object.entries(n.content).reduce((t,[o,u])=>{var y;return t[o]=(y=u==null?void 0:u[i.url])==null?void 0:y[e.id],t},{})):e.type==="content"&&(d=m.at(-1),r=Object.entries(n.content).reduce((t,[o,u])=>{var j;const y=(j=u==null?void 0:u[i.url])==null?void 0:j[e.id];return t[o]={content:{html:y,markdown:y}},t},{})),{id:f(),page:i.id,symbol:d.id,content:r,index:i.sections.findIndex(t=>t.id===e.id)}},h=k.flatten(n.pages.map(e=>[l(e),...e.pages.map(i=>l(i))])),_=h.map(e=>{const i=h.find(d=>d.pages.find(r=>r.id===e.url));return{...e,parent:(i==null?void 0:i.id)||null}}),g=k.flatten(h.map(e=>e.sections.map(i=>p(i,e)))),a=Object.entries(n.content).reduce((e,[i,d])=>(e[i]={},n.fields.forEach(r=>{e[i][r.key]=(d==null?void 0:d[r.key])||w(r)}),e),{en:{}});return{site:{id:s,url:n.id,name:n.name,code:n.code,fields:n.fields,content:a},pages:_.map(e=>(delete e.sections,delete e.pages,e)),sections:g,symbols:m.map(e=>(delete e._old_id,e))}}function E(n){if(!n.content||k.isEmpty(n.content)){const s=Object.entries(n.fields).reduce((c,[m,l])=>(c[l.key]=w(l),c),{});n.content={en:s}}return n.fields=n.fields.map(v),n}function I(n){let s;try{S(n,["html"])?s=m(n):S(n,["content"])?s=c(n):s=null}catch{console.warn("Site is invalid",n),s=null}return s;function c(l){return{...l,fields:b(l.fields),symbols:l.symbols.map(p=>({...p,fields:b(p.fields)}))}}function m(l){const p={},h={id:l.id,name:l.name,pages:_(l.pages,a=>{p[a.id]=a.content}),code:g(l),symbols:O(l.symbols),fields:b(l.fields,a=>{p[a.id]=a.content}),content:{en:null}};return h.content.en=p,h;function _(a=[],e=i=>{}){return a.map(d=>{const r={},t={id:d.id,name:d.name||d.title||"",sections:i(d.sections,o=>{r[o.id]=o.content}),code:g(d),fields:b(d.fields,o=>{r[o.id]=o.content}),pages:_(d.pages)};return e({id:d.id,content:r}),t});function i(d,r){return d.filter(t=>t.type!=="options").map(t=>(r({id:t.id,content:t.value.fields?k.chain(t.value.fields).keyBy("key").mapValues("value").value():t.value.html}),{id:t.id,type:t.type,...t.symbolID?{symbolID:t.symbolID}:{}}))}}function g(a){return{html:a.html,css:a.css,js:a.js||""}}}}function O(n){return n.map(s=>({type:"symbol",id:s.id,name:s.title||"",code:{html:s.value.html,css:s.value.css,js:s.value.js},fields:b(s.value.fields)}))}function b(n=[],s=()=>{}){return n.map(c=>(s({id:c.key,content:c.value}),{id:c.id,key:c.key,label:c.label,type:c.type,fields:b(c.fields),options:c.options||{},default:c.default||"",is_static:c.is_static||!1}))}function S(n,s){var c=n;for(let m=0;m<s.length;++m){if(c[s[m]]==null)return!1;c=c[s[m]]}return!0}export{D as a,E as v};
//# sourceMappingURL=converter.1113586f.js.map

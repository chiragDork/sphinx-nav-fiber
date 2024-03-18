import{s as r,b as i,F as s,j as e,T as $,p as J,r as d,g as xe,P as de,e as Ie,q as Re,k as Ee}from"./index-8a12d07f.js";import{A as R,u as E,e as A,ar as pe,as as Ae,B as I,y as Pe,at as ne,au as Me,N as P,K as Le,I as he,O as U,P as ue,av as Q,R as ee,C as te,aw as Ge,ax as ye,ay as De,f as Fe,l as Ne}from"./react-toastify.esm-93f93bff.js";import{G as ge,L as se,B as oe,H as Ye,u as Oe,S as We,a as He,D as Ve,M as Ue,R as Qe,b as qe,c as Ke,d as Xe,N as fe,C as Ze,e as me,f as we,g as Je,h as et,i as je,j as tt,P as st,k as be,s as re,V as ot,F as it,E as nt,l as rt,m as at,n as ke,o as lt,p as ct,q as xt,r as dt,t as pt,v as ht,w as ut,x as yt,y as gt}from"./SoundIcon-778fd598.js";import{C as ft,S as mt}from"./ChevronUpIcon-8751c090.js";import{f as V,o as ve,n as wt,X as jt,Y as bt,T as kt,D as vt,S as ie,q as Ce}from"./generateCategoricalChart-03b29371.js";import{T as W}from"./index-b8812a35.js";import{S as Ct}from"./Skeleton-e3e8c059.js";import{T as ae}from"./toastMessage-a8fcdb29.js";import{g as St,d as $t}from"./index.esm-b5fe068c.js";import{T as _t,F as Tt}from"./Popover-ac86cd5f.js";import{I as Bt,S as zt,O as It}from"./Select-5c1c6aab.js";import{C as Rt}from"./CheckIcon-302ad75f.js";import{I as Et}from"./InfoIcon-537b5032.js";import{P as At}from"./PlusIcon-baadb478.js";import{u as Z}from"./index-7c4aea71.js";import{B as Pt}from"./index-6c710d98.js";import"./useSlotProps-5ee0f16c.js";const Mt=({imageUrl:t,name:o})=>e.jsxs(s,{align:"center",direction:"row",children:[t&&e.jsx(Lt,{children:e.jsx(R,{rounded:!0,size:64,src:t||"",type:"image"})}),o&&e.jsx(Gt,{children:o})]}),Lt=r(s)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Gt=r(s)`
  color: ${i.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Dt=({text:t,type:o,sourceLink:n})=>e.jsxs(s,{direction:"column",children:[e.jsx(s,{align:"center",direction:"row",children:e.jsx(W,{type:o})}),e.jsx($e,{"data-testid":"episode-description",children:t}),e.jsx(s,{align:"center",direction:"row",justify:"flex-start",children:n&&e.jsxs(Ft,{href:n,onClick:a=>a.stopPropagation(),target:"_blank",children:[e.jsx(ge,{}),e.jsx(Nt,{children:n})]})})]}),Ft=r.a`
  color: ${i.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Nt=r($)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${i.GRAY6};
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,Yt=({title:t,imageUrl:o,name:n})=>e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(Ot,{children:e.jsx(R,{rounded:!0,size:64,src:o||"",type:"person"})}),(t||n)&&e.jsx(Wt,{children:t||n})]}),Ot=r(s)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Wt=r(s)`
  color: ${i.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Ht=({text:t,imageUrl:o,date:n,twitterHandle:a,name:l,verified:x})=>e.jsxs(s,{direction:"column",children:[e.jsxs(s,{align:"center",direction:"row",pr:16,children:[e.jsx(Vt,{children:e.jsx(R,{rounded:!0,size:27,src:o||"",type:"person"})}),e.jsxs(s,{children:[e.jsxs(Ut,{align:"center",direction:"row",children:[l,x&&e.jsx("div",{className:"verification",children:e.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),a&&e.jsxs(Qt,{children:["@",a]})]})]}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(qt,{"data-testid":"episode-description",children:t}),e.jsx(s,{"data-testid":"date-text",direction:"row",justify:"flex-start",children:!!n&&e.jsx(q,{children:J.unix(n).fromNow()})})]})]}),Vt=r(s)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Ut=r(s)`
  color: ${i.white};
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.2px;
  .verification {
    margin-left: 4px;
  }
`,Qt=r(s)`
  color: ${i.GRAY7};
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`,qt=r(s)`
  color: ${i.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: 0.2px;
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`,Kt=r(s).attrs({direction:"column"})`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${i.BG1};

  .type-image {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .booster__pill {
    margin-right: 0;
    margin-top: 8px;
  }
  .player-controls {
    margin-left: 4px;
  }
`,Se=({boostCount:t,date:o,episodeTitle:n,isSelectedView:a=!1,imageUrl:l,showTitle:x,type:c,text:g,name:y,profilePicture:p,sourceLink:f,verified:v=!1,twitterHandle:u,className:w="episode-wrapper",onClick:C})=>{const k=c==="show"?x:n,j=c==="show"?"":x,b=["tweet","person","guest","topic","document"],h=c==="youtube"?"video":"audio";return c?e.jsx(Kt,{className:w,onClick:C,children:b.includes(c)?e.jsxs(e.Fragment,{children:[c==="topic"&&e.jsxs(Xt,{children:[e.jsx(Ye,{}),e.jsx("p",{children:j})]}),["person","guest"].includes(c)&&e.jsx(Yt,{imageUrl:l,name:y||"",title:x||""}),["image"].includes(c)&&e.jsx(Mt,{imageUrl:f,name:y||""}),c==="tweet"&&e.jsx(Ht,{date:o,imageUrl:p,name:y||"",text:g||"",twitterHandle:u,verified:v}),c==="document"&&e.jsx(Dt,{sourceLink:f||"",text:g||"",type:c})]}):e.jsxs(s,{direction:"row",children:[!a&&e.jsx(s,{align:"center",pr:16,children:e.jsx(R,{size:64,src:l||`${h}_default.svg`,type:c||""})}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsxs(s,{align:"center",direction:"row",justify:"space-between",children:[e.jsx(s,{align:"center",direction:"row",children:c&&e.jsx(W,{type:c})}),c==="youtube"&&f?e.jsx(Jt,{href:`${f}?open=system`,onClick:_=>_.stopPropagation(),children:e.jsx(se,{})}):null]}),e.jsx($e,{"data-testid":"episode-description",children:k}),e.jsxs(s,{align:"center",direction:"row",justify:"flex-start",children:[!!o&&e.jsx(q,{children:J.unix(o).fromNow()}),!!j&&e.jsx(Zt,{children:j}),!a&&t>0&&e.jsx(s,{style:{marginLeft:"auto"},children:e.jsx(oe,{amt:t})})]})]})]})}):null},$e=r(s)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  color: ${i.white};
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  letter-spacing: 0.2px;
`,q=r($)`
  overflow: hidden;
  color: ${i.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
  letter-spacing: 0.2pt;
`,Xt=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    color: ${i.mainBottomIcons};
    margin-right: 10px;
    align-self: center;
  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    overflow: hidden;
    color: var(--Primary-Text, #fff);
    leading-trim: both;
    text-edge: cap;
    text-overflow: ellipsis;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    margin: 0;
  }
`,Zt=r(q)`
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  padding-left: 12px;
  &:before {
    content: '';
    display: block;
    border-radius: 2px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2px;
    width: 4px;
    flex-shrink: 0;
    height: 4px;
    background: ${i.GRAY6};

    margin-top: 20px;
  }

  &.is-show {
    margin: 20px 0px;
    padding: 0px;
    color: var(--Primary-Text, #fff);
    leading-trim: both;
    text-edge: cap;
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 17px; /* 130.769% */
  }
`,Jt=r.a`
  color: ${i.GRAY6};
  font-size: 16px;
  height: 16px;
`,es=({isSearchResult:t})=>{const o=d.useRef(null),n=t?80:10,{setSelectedNode:a,setSelectedTimestamp:l}=E(b=>b),{currentSearch:x,setSidebarOpen:c,setRelevanceSelected:g}=A(b=>b),[y,p]=d.useState(0),f=pe(),u=y*n+n,w=f&&f.length>0?f.length-1>u:!1,C=Oe("sm","down"),k=d.useCallback(b=>{Ae(b),l(b),g(!0),a(b),C&&c(!1)},[a,g,c,l,C]),j=d.useMemo(()=>{if(f){const b=[...f].sort((h,_)=>(_.date||0)-(h.date||0));return x&&b.sort((h,_)=>{const M=h.node_type==="topic"&&h.name.toLowerCase()===x.toLowerCase()?1:0;return(_.node_type==="topic"&&_.name.toLowerCase()===x.toLowerCase()?1:0)-M}),b.slice(0,u)}return[]},[f,x,u]);return e.jsx(e.Fragment,{children:e.jsxs(We,{ref:o,id:"search-result-list",shrink:1,children:[(j??[]).map((b,h)=>{const{image_url:_,date:M,boost:z,type:Y,episode_title:O,show_title:D,node_type:m,text:S,source_link:F,link:N,name:G,profile_picture:B,verified:T=!1,twitter_handle:L}=b||{};return e.jsx(Se,{boostCount:z||0,date:M||0,episodeTitle:V(O),imageUrl:_||"",link:N,name:G||"",onClick:()=>{k(b)},profilePicture:B,showTitle:V(D),sourceLink:F,text:S||"",twitterHandle:L,type:m||Y,verified:T},h.toString())}),e.jsx(ss,{align:"center",background:"BG1",direction:"row",justify:"center",children:w&&e.jsx(I,{onClick:()=>{w&&p(y+1)},size:"medium",children:"Load More"})})]})})},ts=d.memo(es),ss=r(s)`
  flex: 0 0 86px;
`,os=({isSearchResult:t})=>{const{nodeCount:o,setNodeCount:n,setBudget:a}=xe(c=>c),{fetchData:l}=E(c=>c),x=async()=>{o<1||(await l(a,{skip_cache:"true"}),n("CLEAR"))};return e.jsxs(rs,{children:[!t&&e.jsxs("div",{className:"heading-container",children:[e.jsxs("div",{className:"heading",children:[e.jsx("span",{className:"heading__title",children:"Latest"}),e.jsx("span",{className:"heading__icon",children:e.jsx(He,{})})]}),o?e.jsx("div",{className:"button_container",children:e.jsx(is,{className:"button",onClick:x,startIcon:e.jsx(Ve,{}),children:`See Latest (${o})`})}):null]}),e.jsx(ts,{isSearchResult:t})]})},is=r(I)`
  && {
    width: 100%;
    margin-top: 1.2rem;
    font-weight: 500;
    .MuiButton-startIcon {
      color: ${i.GRAY6};
    }
  }
`,ns=d.memo(os),rs=r(s)`
  .heading-container {
    display: flex;
    flex-direction: column;
    padding: 16px 24px 16px 24px;
  }

  .heading {
    color: ${i.GRAY6};
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 1.12px;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    &__icon {
      margin-left: 14px;
      margin-bottom: -2px;
      font-size: 24px;
    }
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;

    &-item {
      padding: 18px 16px 18px 24px;
      overflow: hidden;
      color: ${i.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${i.SECONDARY_BLUE};
      }

      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${i.PRIMARY_BLUE};
      }
    }
  }
`,as=r(s).attrs({direction:"column"})`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${i.BG1};

  .type-image {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .booster__pill {
    margin-right: 0;
    margin-top: 8px;
  }
  .player-controls {
    margin-left: 4px;
  }

  .title {
    margin: 20px 0 8px;
  }
`,H=r(Ct)`
  && {
    background: rgba(0, 0, 0, 0.15);
  }
`,ls=()=>e.jsx(e.Fragment,{children:Array(7).fill(null).map((t,o)=>e.jsx(as,{children:e.jsxs(s,{direction:"row",children:[e.jsx(s,{align:"center",pr:16,children:e.jsx(H,{animation:"wave",height:64,variant:"rectangular",width:64})}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(H,{height:10,variant:"rectangular",width:56}),e.jsx(H,{className:"title",height:10,variant:"rectangular",width:262}),e.jsx(H,{height:10,variant:"rectangular",width:149})]})]})},o))});r(s)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  color: ${i.white};
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`;const cs=r($)`
  overflow: hidden;
  color: ${i.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
`;r(cs)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:before {
    content: '';
    display: block;
    border-radius: 2px;
    margin-right: 8px;
    width: 4px;
    flex-shrink: 0;
    height: 4px;
    background: ${i.GRAY6};
  }
`;const xs=48,ds=8,ps={PaperProps:{style:{maxHeight:xs*4.5+ds,width:250}}},hs=["Beginner","Intermediate","Advanced","Expert"],us=()=>{const t=E(h=>h.data),[o,n]=d.useState(""),[a,l]=d.useState("Beginner"),x=A(h=>h.currentSearch),c=Pe(),[g]=xe(h=>[h.setBudget]),[y,p,f,v,u]=ve(h=>[h.askedQuestions,h.askedQuestionsAnswers,h.setAskedQuestion,h.setAskedQuestionAnswer,h.hasQuestionInProgress]),w=d.useCallback(h=>{v(h.answer),ne(e.jsx(ae,{message:"Response is ready"}),{position:"bottom-center",type:"success"})},[v]);d.useEffect(()=>{c&&w&&c.on("askquestionhook",w)},[w,c]);const C=async()=>{o&&(f(o),n(""));try{const h=t==null?void 0:t.nodes.filter(z=>z.text),_=h==null?void 0:h.slice(0,5),M=(_!=null&&_.length?_.map(z=>z.text).join(" "):"").substring(0,2500).replace(/[?&=+/#]/g,z=>`\\${z}`);x&&(await Ie.enable(),await Me({expertise_level:a,question_text:o,search_term:x,transcripts:M},g),await Re(g),ne(e.jsx(ae,{message:"We started preparing response for you"}),{type:"success"}))}catch(h){console.error(h)}},k=a&&o.trim()&&!u,j=h=>{l(h.target.value)},b=async h=>{if(u){h.preventDefault();return}h.keyCode===13&&h.shiftKey===!1&&k&&(h.preventDefault(),C())};return e.jsxs(ys,{children:[e.jsx(s,{children:e.jsx(s,{children:e.jsxs(Tt,{component:"div",children:[e.jsx(fs,{id:"select-label",size:"small",children:"Expertise level"}),e.jsx(ms,{id:"demo-multiple-name",input:e.jsx(It,{label:"Expertise level"}),labelId:"select-label",MenuProps:ps,onChange:j,size:"small",value:a,children:hs.map(h=>e.jsx(Ue,{component:"li",value:h,children:h},h))})]})})}),e.jsx(bs,{children:y==null?void 0:y.map((h,_)=>e.jsxs(s,{className:"response",py:12,children:[e.jsx($,{kind:"medium",children:h}),e.jsx(s,{py:12,children:(p==null?void 0:p[_])!==void 0?e.jsx($,{color:"unreadMsgText",children:p[_]}):e.jsxs(s,{align:"center",py:12,children:[e.jsx(s,{align:"center",py:12,children:e.jsx(de,{color:i.white})}),e.jsx(s,{align:"center",py:12,children:e.jsx($,{children:"Generating response"})})]})})]},h))}),e.jsxs(ws,{onKeyDown:b,py:12,tabIndex:-1,children:[e.jsx(gs,{disabled:u,onChange:h=>n(h.target.value),placeholder:"Enter your question",value:o}),e.jsx(js,{children:e.jsx(St,{color:k?i.white:i.gray300,size:"18"})})]})]})},ys=r.div`
  margin-top: 20px;
`,gs=r(_t)`
  background: ${i.inputBg1};
  max-width: 100%;
  color: ${i.secondaryText4};
  padding: 16px 8px;
  border: none;
  outline: none;
`,fs=r(Bt)`
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${i.secondaryText4};
  }
`,ms=r(zt)`
  .MuiInputBase-root {
    color: blue;
  }
  background: ${i.inputBg1};

  .MuiSvgIcon-root {
    color: ${i.white};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiSelect-select {
    color: ${i.white};
  }
`,ws=r(s)`
  position: relative;
`,js=r(s)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: rotate(-45deg);
`,bs=r(s)`
  flex-shrink: 1;
  overflow: auto;

  .response {
    border-bottom: 1px solid ${i.divider2};
  }
`,le=({text:t})=>e.jsxs(s,{align:"center",justify:"center",py:12,children:[e.jsx(s,{align:"center",py:12,children:e.jsx(de,{color:i.white})}),e.jsx(s,{align:"center",py:12,children:e.jsx($,{children:t})})]}),ks=()=>{const[t,o,n,a]=ve(x=>[x.teachMeAnswer,x.hasTeachingInProgress,x.instgraphAnswser,x.hasInstagraphInProgress]),l=!a&&!!(n!=null&&n.edges)&&!!(n!=null&&n.nodes);return e.jsxs(e.Fragment,{children:[l?e.jsx(Qe,{edges:n==null?void 0:n.edges,nodes:n==null?void 0:n.nodes}):e.jsx(le,{text:"Generating instagraph"}),o?e.jsx(le,{text:"Generating tutorial"}):e.jsxs(e.Fragment,{children:[e.jsx(vs,{children:e.jsx($,{children:t})}),e.jsx(us,{})]})]})};r(I)``;const vs=r(s)`
  padding-left: 10px;
  padding-right: 10px;
`,Cs=({cx:t,cy:o})=>e.jsx(vt,{cx:t,cy:o,fill:i.blueTextAccent,r:2}),Ss=()=>{const t=P(),o=[...(t==null?void 0:t.data)||[]].sort((l,x)=>(l.year||0)-(x.year||0)),n=o.map(l=>l.year).filter(l=>l),a=o.map(l=>l.rate).filter(l=>l);return e.jsx($s,{direction:"column",px:24,py:16,children:e.jsx(qe,{height:"100%",width:"100%",children:e.jsxs(Ke,{margin:{bottom:20,left:20,right:20,top:20},children:[e.jsx(wt,{stroke:"#f5f5f5"}),e.jsx(jt,{dataKey:"year",domain:[Math.min(...n),Math.max(...n)],label:{fill:i.white,fontSize:"12px",offset:-10,position:"insideBottom",value:t.x_axis_name},name:"X",tick:{fill:i.white,fontSize:"8px"},type:"number"}),e.jsx(bt,{color:"#000",dataKey:"rate",domain:[Math.min(...a),Math.max(...a)],label:{angle:-90,fill:i.white,fontSize:"12px",offset:0,position:"insideLeft",value:t.y_axis_name},name:"Y",tick:{fill:i.white,fontSize:"8px"},type:"number"}),e.jsx(kt,{cursor:{strokeDasharray:"3 3"}}),e.jsx(Xe,{data:o,fill:i.blueTextAccent,line:!0,name:"A scatter",shape:e.jsx(Cs,{})})]})})})},$s=r(s)`
  width: 100%;
  height: 100%;
`;function K(t,o){if(!(o!=null&&o.trim()))return t;const n=new RegExp(`(${o})`,"gi"),a=t.split(n);return e.jsx(e.Fragment,{children:a.map((l,x)=>n.test(l)?e.jsx(_s,{children:l},x):l)})}const _s=r.span`
  background-color: rgba(0, 123, 255, 0.4);
  padding: 2;
  margin: 0;
  border-radius: 3px;
  color: inherit;
`,Ts=({stateless:t,node:o,searchTerm:n})=>e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(zs,{children:t&&e.jsxs(Bs,{children:[e.jsx("div",{className:"icon",children:e.jsx(fe,{})}),e.jsx("div",{className:"title",children:"Description"})]})}),e.jsx($,{children:o!=null&&o.description?K(o.description,n):"..."})]}),Bs=r(s).attrs({direction:"row",align:"center"})`
  .icon {
    font-size: 16px;
    color: ${i.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${i.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`,zs=r(s).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Is=r.span`
  color: ${i.white};
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`,Rs=({stateless:t,node:o})=>{var k;const[n,a]=A(j=>[j.transcriptIsOpen,j.setTranscriptOpen]),[l,x]=d.useState(!1),[c,g]=d.useState(""),[y,p]=d.useState(!1);if(!t&&!n)return null;const f="https://knowledge-graph.sphinx.chat",v=async j=>{try{const b=await fetch(`${f}/node/text/${j}`);if(!b.ok)throw new Error("Network response was not ok");const h=await b.json();g(h.data.text),p(!0)}catch(b){console.error("Error fetching full transcript",b)}},u=()=>{C(o==null?void 0:o.text),setTimeout(()=>{x(!1)},2e3)},w=()=>{y?p(!1):o!=null&&o.ref_id&&v(o.ref_id)},C=j=>{j!==void 0&&(navigator.clipboard.writeText(j),x(!0))};return e.jsxs(s,{grow:1,shrink:1,children:[e.jsxs(As,{children:[t&&e.jsxs(Es,{children:[e.jsx("div",{className:"icon",children:e.jsx(fe,{})}),e.jsx("div",{className:"title",children:"Transcript"})]}),o!=null&&o.text?e.jsx(e.Fragment,{children:l?e.jsxs(Ls,{align:"center",direction:"row",justify:"flex-start",children:[e.jsx("div",{className:"icon",children:e.jsx(Rt,{})}),e.jsx("div",{className:"text",children:"Copied"})]}):e.jsx(I,{endIcon:e.jsx(Ze,{}),onPointerDown:()=>u(),size:"small",variant:"outlined",children:"Copy"})}):e.jsx("div",{}),!t&&e.jsx(Ps,{onClick:()=>{a(!1)},children:e.jsx($t,{fontSize:35})})]}),e.jsxs(Ms,{children:[y?c:`${(k=o==null?void 0:o.text)==null?void 0:k.substring(0,100)}...`,e.jsx(Is,{onClick:w,children:y?"less":"more"})]})]})},Es=r(s).attrs({direction:"row",align:"center"})`
  .icon {
    font-size: 16px;
    color: ${i.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${i.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`,As=r(s).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Ps=r(s).attrs({})`
  color: ${i.mainBottomIcons};
  cursor: pointer;
  &:hover {
    color: ${i.lightBlue500};
  }
`,Ms=r(s)`
  color: ${i.white};
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`,Ls=r(s)`
  color: ${i.SECONDARY_BLUE};
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  height: 28px;
  padding: 0 20px;
  .text {
    margin-left: 5px;
  }

  .icon {
    font-size: 12px;
  }
`,_e=({node:t})=>{const o=E(k=>k.selectedNode),n=A(k=>k.currentSearch),{link:a,image_url:l,date:x,boost:c,node_type:g,type:y,id:p,show_title:f,episode_title:v,ref_id:u}=t||o||{},[w,C]=d.useState(c||0);return o?e.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:e.jsxs(Gs,{children:[e.jsx(Fs,{boostCount:w||0,date:x||0,episodeTitle:V(v),imageUrl:l,isSelectedView:!0,link:a,onClick:()=>null,showTitle:f,type:g||y}),e.jsx(X,{}),e.jsxs(Ds,{children:[e.jsx(oe,{amt:w}),e.jsx(we,{content:o,count:w,refId:u,updateCount:C})]}),e.jsx(X,{}),e.jsx(ce,{children:e.jsx(Ts,{node:o,searchTerm:n,stateless:!0})}),e.jsx(X,{}),e.jsx(ce,{children:e.jsx(Rs,{node:o,stateless:!0},p)})]})}):null},Gs=r(s)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: -1;
`,Ds=r(s)`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 18px 18px;
`,ce=r(s)`
  padding: 18px 18px 18px;
`,Fs=r(Se)`
  & {
    border-top: none;
    padding-bottom: 18px;
    font-size: 16px;
  }
`,X=r(me)`
  margin: auto 0px 2px 0px;
  opacity: 75%;
`,Ns=r(s)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.2);

  .episode-title {
    font-size: 20px;
    font-weight: 600;
    color: ${i.white};
  }

  .show {
    cursor: pointer;
    &__title {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      color: ${i.white};
      margin-left: 8px;
    }
  }
`,Ys=({selectedNodeShow:t})=>{const[o,n]=E(x=>[x.selectedNode,x.setSelectedNode]),{type:a}=o||{},l=A(x=>x.currentSearch);return e.jsxs(Ns,{p:20,children:[e.jsx(s,{align:"flex-start",children:a&&e.jsx(W,{type:a})}),e.jsx(s,{direction:"row",mb:22,mt:22,children:e.jsx(s,{grow:1,shrink:1,children:e.jsx($,{className:"episode-title",kind:"heading",children:K((o==null?void 0:o.episode_title)||"Unknown",l)})})}),t?e.jsxs(s,{className:"show",direction:"row",onClick:()=>n(t),children:[e.jsx(R,{size:16,src:(t==null?void 0:t.image_url)||"",type:"show"}),e.jsx($,{className:"show__title",color:"mainBottomIcons",kind:"regular",children:t==null?void 0:t.show_title})]}):null]})},Os="Flow 1",Ws=0,Hs=12,Vs=15,Us={g:"LottieFiles Figma v45"},Qs=[{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[13.5,6],t:58},{s:[13.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:1},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,3],t:58},{s:[1.5,3],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[7.5,9],t:58},{s:[7.5,9],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:2},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:3}],qs="5.7.0",Ks=60,Xs=57.6,Zs=0,Js=[],eo={nm:Os,ddd:Ws,h:Hs,w:Vs,meta:Us,layers:Qs,v:qs,fr:Ks,op:Xs,ip:Zs,assets:Js},to=()=>{const t=d.useRef(null);return d.useEffect(()=>{const o=document.getElementById("lottie-timestamp-equalizer");return o&&(t.current=Le.loadAnimation({container:o,animationData:eo,loop:!0,autoplay:!0})),()=>{t.current&&t.current.destroy()}},[]),e.jsx("div",{id:"lottie-timestamp-equalizer",style:{width:"18px",height:"18px"}})},so=r(s).attrs(()=>({direction:"row"}))`
  cursor: pointer;
  color: ${i.primaryText1};
  border-top: 1px solid ${i.black};
  background: ${t=>t.isSelected?"rgba(97, 138, 255, 0.1)":`${i.BG1}`};

  .play-pause {
    font-size: 24px;
    border-radius: 4px;
    color: ${i.GRAY7};
    cursor: pointer;
  }

  .info {
    margin-left: auto;
    color: ${i.GRAY7};
    font-size: 24px;
  }

  &:hover {
    .play-pause {
      color: ${i.white};
    }
  }
`,oo=({onClick:t,timestamp:o,isSelected:n,setOpenClip:a})=>e.jsxs(so,{align:"center","data-testid":"wrapper",direction:"row",isSelected:n,justify:"flex-start",onClick:t,px:20,py:20,children:[e.jsxs("div",{children:[e.jsx(he,{className:"play-pause",children:n?e.jsx(to,{}):e.jsx(Je,{})}),!1]}),e.jsxs(io,{align:"flex-start",direction:"column",justify:"center",children:[o.timestamp&&e.jsx("span",{className:"timestamp",children:et(o.timestamp)}),e.jsx("span",{className:"title",children:V(o.show_title)})]}),e.jsx("div",{className:"info",children:e.jsx(s,{"data-testid":"info-icon-wrapper",onClick:()=>a(o),pt:4,children:e.jsx(Et,{})})})]}),io=r(s)`
  font-size: 13px;
  color: ${i.white};
  font-family: 'Barlow';
  margin: 0 16px;
  flex-shrink: 1;
  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  .timestamp {
    color: ${i.GRAY6};
  }
`,no=r(s)`
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 1px;
    height: 4px;
  }
`,ro=()=>{const t=P(),o=Ce(),[n,a]=d.useState(null),[l,x]=d.useState(null),[c,g,y]=U(u=>[u.playingNode,u.setPlayingNodeLink,u.setPlayingTime]),p=d.useMemo(()=>je((o==null?void 0:o.nodes)||[],t),[o==null?void 0:o.nodes,t]),f=d.useMemo(()=>o==null?void 0:o.nodes.find(u=>u.node_type==="show"&&u.show_title===(t==null?void 0:t.show_title)),[o==null?void 0:o.nodes,t]),v=d.useCallback(u=>{var w;c&&u.link&&(c==null?void 0:c.link)!==u.link&&g(u.link),y(ue(((w=u==null?void 0:u.timestamp)==null?void 0:w.split("-")[0])||"00:00:01")),x(u)},[c,g,x,y]);return d.useEffect(()=>{p!=null&&p.length&&!p.some(u=>u.ref_id===(l==null?void 0:l.ref_id))&&v(p[0])},[p,l,v]),t?e.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:e.jsxs(lo,{children:[n&&e.jsx(co,{className:"slide-me",direction:"up",in:!!n,children:e.jsxs(ao,{children:[e.jsx(s,{className:"close-info",onClick:()=>a(null),children:e.jsx(ft,{})}),n&&e.jsx(_e,{node:n})]})}),e.jsx(Ys,{selectedNodeShow:f}),!!(p!=null&&p.length)&&e.jsx(no,{children:e.jsx(s,{pb:20,children:p==null?void 0:p.map((u,w)=>e.jsx(oo,{isSelected:(l==null?void 0:l.ref_id)===u.ref_id,onClick:()=>v(u),setOpenClip:a,timestamp:u},`${u.episode_title}_${w}`))})})]})}):null},ao=r(s)`
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  .close-info {
    position: absolute;
    color: ${i.white};
    top: 20px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`,lo=r(s)`
  position: relative;
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
`,co=r(ie)`
  && {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 16px;
    overflow: hidden;
    background: ${i.BG1};
    z-index: 1;
  }
`,xo=()=>{const t=P(),o=t==null?void 0:t.name;return e.jsxs(s,{direction:"column",px:24,py:16,children:[e.jsx(R,{"data-testid":"person-image",size:80,src:(t==null?void 0:t.source_link)||"",type:"image"}),e.jsx(s,{py:20,children:e.jsx($,{color:"primaryText1",kind:"bigHeading",children:o})})]})},po=()=>{const{sender_pic:t,sender_alias:o,date:n,message_content:a}=P()||{};return e.jsxs(s,{direction:"row",children:[e.jsx(yo,{src:t}),e.jsxs(ho,{children:[e.jsxs(s,{align:"flex-end",className:"info",direction:"row",children:[o&&e.jsx("span",{className:"info__name",children:o}),n&&e.jsx("span",{className:"info__date",children:n})]}),a&&e.jsx(uo,{dangerouslySetInnerHTML:{__html:tt(a)}})]})]})},ho=r(s)`
  color: ${i.black};
  border-radius: 8px;
  font-size: 20px;
  margin-left: 8px;
  flex: 1;

  .info__date {
    color: ${i.textMessages};
    font-size: 14px;
    margin-left: 8px;
  }

  .info__name {
    color: ${i.green400};
    font-size: 16px;
  }
`,uo=r.div`
  background: ${i.white};
  border-radius: 8px;
  padding: 16px;
  position: relative;
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${i.white};
    position: absolute;
    left: -6px;
    top: 0;
  }

  .username {
    color: ${i.blueTextAccent};
  }

  a {
    color: ${i.blueTextAccent};
    text-decoration: none;
  }

  a:hover,
  a:visited {
    color: ${i.blueTextAccent};
    text-decoration: none;
  }
`,yo=r.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: green;
`,go=()=>{const t=P(),o=(t==null?void 0:t.name)||(t==null?void 0:t.label);return e.jsxs(s,{direction:"row",px:24,py:16,children:[e.jsx(R,{"data-testid":"person-image",size:80,src:(t==null?void 0:t.image_url)||"person_placeholder_img.png",type:"person"}),e.jsx(s,{p:20,children:e.jsx($,{color:"primaryText1",kind:"bigHeading",children:o})})]})},fo=({node:t,onClick:o})=>{var l,x;const n=ue(t.timestamp||""),a=Math.ceil(n/60);return e.jsx(mo,{onClick:o,p:24,children:e.jsxs("div",{children:[e.jsxs(s,{align:"flex-start",direction:"row",justify:"flex-start",children:[e.jsx(s,{align:"center",children:e.jsx(R,{size:64,src:(t==null?void 0:t.image_url)||"",type:(t==null?void 0:t.node_type)||"episode"})}),e.jsxs("div",{className:"content",children:[e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(W,{type:"episode"}),a>0&&e.jsxs("div",{className:"subtitle",children:[a," ",a===1?"min":"mins"]})]}),e.jsx($,{className:"title",color:"primaryText1",kind:"regular",children:t.episode_title})]})]}),e.jsxs(s,{align:"center",direction:"row",justify:"flex-end",pt:4,children:[e.jsxs($,{className:"clipText",color:"mainBottomIcons",kind:"regular",children:[((l=t==null?void 0:t.children)==null?void 0:l.length)||0," ",((x=t==null?void 0:t.children)==null?void 0:x.length)===1?"Clip":"Clips"]}),e.jsx(st,{style:{color:i.white}})]})]})})},mo=r(s).attrs({})`
  direction: row;
  cursor: pointer;
  color: ${i.primaryText1};
  border-bottom: 1px solid #101317;

  .content {
    margin-left: 16px;
    align-self: stretch;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .title {
    margin-top: 16px;
    display: block;
  }

  .clipText {
    font-size: 12px;
    margin-right: 6px;
  }
`,wo=r(s)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: 0;

  .subtitle {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${i.GRAY6};
    margin-left: 8px;
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,jo=r(s)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  padding: 42px 20px;
  background-color: #1c1e26;
`,bo=r($)`
  font-size: 22px;
  font-weight: 700;
  max-width: 250px;
  -webkit-box-orient: vertical;
  max-height: calc(2 * 1.5em);
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`,ko=r.div`
  max-height: calc(100vh - 340px);
  overflow-y: auto;
`,vo=()=>{const[t,o]=E(c=>[c.selectedNode,c.setSelectedNode]),n=Ce(),[a,l]=d.useState([]),x=d.useMemo(()=>{var y;const c=new Set,g={};if((y=t==null?void 0:t.children)!=null&&y.length){t.children.forEach((f,v)=>{var C,k,j,b;const u=je((n==null?void 0:n.nodes)||[],t)||[],w=n==null?void 0:n.nodes.find(h=>h.ref_id===f);if(w){w.timestamp=(C=u[0])==null?void 0:C.timestamp;const h=(b=(j=(k=u[v])==null?void 0:k.hosts)==null?void 0:j[0])==null?void 0:b.name;h&&c.add(h),g[f]=w,g[f]=w}});const p=Array.from(c);l(p)}return Object.values(g).filter(p=>p.node_type==="episode").sort((p,f)=>(f.weight||0)-(p.weight||0))},[n==null?void 0:n.nodes,t]);return e.jsxs(wo,{children:[e.jsx(jo,{children:e.jsxs(s,{direction:"row",children:[e.jsx(s,{pr:24,children:e.jsx(R,{size:80,src:(t==null?void 0:t.image_url)||"audio_default.svg",type:"show"})}),e.jsx(s,{direction:"column",children:e.jsxs(s,{direction:"column",grow:1,justify:"space-between",children:[e.jsxs(s,{align:"center",direction:"row",justify:"flex-start",mb:16,children:[e.jsx(W,{type:"show"})," ",e.jsxs("div",{className:"subtitle",children:["by ",a.join(", ")||(t==null?void 0:t.show_title)]})]}),e.jsx(bo,{kind:"bigHeading",title:(t==null?void 0:t.show_title)||"Unknown",children:(t==null?void 0:t.show_title)||"Unknown"})]})})]})}),e.jsxs(s,{direction:"column",children:[e.jsx(s,{p:24,children:e.jsx($,{className:"relatedHeader",kind:"medium",children:"Related Episodes"})}),e.jsx(ko,{children:x.map(c=>e.jsx(fo,{node:c,onClick:()=>o(c)},c.ref_id))})]})]})},Co=()=>{const t=P();return e.jsx(s,{align:"center",justify:"center",children:e.jsx($,{color:"primaryText1",kind:"hugeHeading",children:t==null?void 0:t.label})})},So=()=>{const t=P(),{date:o,boost:n,text:a,name:l,verified:x,profile_picture:c,twitter_handle:g,ref_id:y}=t||{},p=(t==null?void 0:t.tweet_id)||"",[f,v]=d.useState(n||0),u=A(w=>w.currentSearch);return t&&e.jsxs(e.Fragment,{children:[e.jsxs(s,{direction:"column",p:24,children:[e.jsxs(s,{align:"center",direction:"row",pr:16,children:[e.jsx($o,{children:e.jsx(R,{rounded:!0,size:58,src:c||"",type:"person"})}),e.jsxs(s,{children:[e.jsxs(_o,{align:"center",direction:"row",children:[l,x&&e.jsx("div",{className:"verification",children:e.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),g&&e.jsxs(To,{children:["@",g]})]})]}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(Bo,{"data-testid":"episode-description",children:K(a||"",u)}),e.jsx(s,{direction:"row",justify:"flex-start",children:!!o&&e.jsx(q,{children:J.unix(o).format("ll")})})]}),e.jsx(s,{align:"stretch",mt:22,children:e.jsx("a",{href:`https://twitter.com/Interior/status/${p}?open=system`,children:e.jsx(Io,{endIcon:e.jsx(se,{}),children:"View Tweet "})})})]}),e.jsx(zo,{}),e.jsxs(s,{direction:"row",justify:"space-between",pt:14,px:24,children:[e.jsx(oe,{amt:f}),e.jsx(we,{content:t,count:f,refId:y,updateCount:v})]})]})},$o=r(s)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,_o=r(s)`
  color: ${i.white};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.22px;
  .verification {
    margin-left: 4px;
  }
`,To=r(s)`
  color: ${i.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Bo=r(s)`
  color: ${i.white};
  font-family: Barlow;
  font-size: 17px;
  font-weight: 400;
  font-style: normal;
  line-height: 130%;
  letter-spacing: -0.39px;
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`,zo=r(me)`
  margin: 0 0 6px 0;
  opacity: 75%;
`,Io=r(I)`
  width: 100%;
`,Ro=()=>{var g,y;const[t,o]=d.useState(!1),n=P(),a=!!(n!=null&&n.source_link),l=d.useRef(null),x=A(p=>p.currentSearch),c=p=>{p.stopPropagation(),p.currentTarget.blur(),o(!t)};return d.useEffect(()=>{var p,f;t?(p=l.current)==null||p.play():(f=l.current)==null||f.pause()},[t]),e.jsxs(s,{align:"flex-start",basis:"100%",direction:"column",grow:1,justify:"center",pt:a?62:0,shrink:1,children:[a&&e.jsxs(Eo,{children:[e.jsx(ge,{color:i.GRAY6}),e.jsx(Mo,{children:n==null?void 0:n.source_link}),e.jsx(Ao,{href:n==null?void 0:n.source_link,onClick:p=>p.stopPropagation(),target:"_blank",children:e.jsx(se,{})})]}),(g=n==null?void 0:n.audio)!=null&&g.length?e.jsxs(s,{justify:"flex-start",p:12,children:[e.jsx(I,{onClick:p=>c(p),startIcon:t?e.jsx(Q,{}):e.jsx(ee,{}),children:t?"Pause":"Play"}),e.jsx(Lo,{ref:l,src:((y=n.audio[0])==null?void 0:y.link)||"",children:e.jsx("track",{kind:"captions"})})]}):null,e.jsx(Po,{grow:1,justify:"flex-start",p:12,shrink:1,children:e.jsx($,{color:"primaryText1",kind:"regular",children:K((n==null?void 0:n.text)||"",x)})})]})},Eo=r(s)`
  top: 0px;
  position: absolute;
  border-radius: 16px 16px 0px 0px;
  padding: 0px 12px;
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${i.BG2};
  gap: 5px;
  color: ${i.GRAY6};

  span {
    font-family: Barlow;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    color: ${i.GRAY6};
  }
`,Ao=r.a`
  color: ${i.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Po=r(s)`
  overflow: auto;
`,Mo=r($)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Lo=r.audio`
  height: 0;
  width: 0;
`,Go=["clip","twitter_space","youtube","episode","podcast"],Do=()=>{const t=P(),{showTeachMe:o}=E(a=>a),{setPlayingNode:n}=U(a=>a);if(d.useEffect(()=>{Go.includes((t==null?void 0:t.node_type)||"")&&n(t)},[n,t]),o)return e.jsx(ks,{});switch(t==null?void 0:t.node_type){case"guest":case"person":return e.jsx(go,{});case"data_series":return e.jsx(Ss,{});case"tribe_message":return e.jsx(po,{});case"tweet":return e.jsx(So,{});case"topic":return e.jsx(Co,{});case"show":return e.jsx(vo,{});case"youtube":case"podcast":case"clip":case"twitter_space":return e.jsx(_e,{});case"document":return e.jsx(Ro,{});case"episode":return e.jsx(ro,{},t.ref_id);case"image":return e.jsx(xo,{});default:return null}},Fo=d.memo(Do),No=({isPlaying:t,isFullScreen:o,setIsPlaying:n,playingTime:a,duration:l,handleProgressChange:x,handleVolumeChange:c,onFullScreenClick:g,showToolbar:y})=>e.jsxs(s,{children:[!y&&e.jsx(Vo,{"aria-label":"Small",max:l,onChange:x,size:"small",value:a}),e.jsxs(Yo,{align:"center",direction:"row",showToolbar:y,children:[e.jsx(Oo,{onClick:n,size:"small",children:t?e.jsx(Q,{}):e.jsx(ee,{})}),e.jsxs(Uo,{direction:"row",children:[e.jsx("span",{children:re(a)}),e.jsx("span",{className:"separator",children:"/"}),e.jsx("span",{className:"duration",children:re(l)})]}),e.jsxs(Wo,{direction:"row",px:9,children:[e.jsx(be,{className:"volume-slider",defaultValue:.5,max:1,min:0,onChange:c,size:"small",step:.1}),e.jsx(ot,{})]}),e.jsx(Ho,{onClick:()=>g(),children:o?e.jsx(nt,{}):e.jsx(it,{})})]})]}),Yo=r(s)`
  height: 60px;
  padding: 12px 16px;
  ${t=>t.showToolbar&&`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index:1;
    background-color: rgba(0, 0, 0, 0.6);
  `}

  &.error-wrapper {
    color: ${i.primaryRed};
  }
`,Oo=r(he)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
  }
`,Wo=r(s)`
  height: 28px;
  font-size: 26px;
  border-radius: 200px;
  color: ${i.white};
  margin-left: auto;

  .volume-slider {
    display: none;
    color: ${i.white};
    height: 3px;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 2px;
      height: 10px;
      background-color: ${i.white};
      &:before {
        box-shadow: '0 4px 8px rgba(0,0,0,0.4)';
      }
      &:hover,
      &.Mui-focusVisible,
      &.Mui-active {
        box-shadow: none;
      }
    }
  }

  &:hover {
    background: rgba(42, 44, 55, 1);
    .volume-slider {
      width: 62px;
      margin-right: 4px;
      display: block;
    }
  }
`,Ho=r(s)`
  cursor: pointer;
  padding: 8px;
  font-size: 32px;
  color: #d9d9d9;
`,Vo=r(be)`
  && {
    z-index: 20;
    color: ${i.white};
    height: 3px;
    width: calc(100% - 12px);
    margin: -12px auto;
    box-sizing: border-box;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 10px;
      height: 10px;
      background-color: ${i.white};
      &:before {
        box-shadow: '0 4px 8px rgba(0,0,0,0.4)';
      }
      &:hover,
      &.Mui-focusVisible,
      &.Mui-active {
        box-shadow: none;
      }
    }
  }
`,Uo=r(s)`
  color: ${i.white};
  font-size: 13px;
  margin-left: 16px;
  font-weight: 500;

  .separator {
    color: ${i.GRAY6};
    margin: 0 4px;
  }

  .duration {
    color: ${i.GRAY6};
  }
`,Qo=({hidden:t})=>{const o=d.useRef(null),n=d.useRef(null),[a,l]=d.useState(!1),[x,c]=d.useState(!1),[g,y]=d.useState("ready"),{isPlaying:p,playingTime:f,duration:v,setIsPlaying:u,setPlayingTime:w,setDuration:C,playingNode:k,volume:j,setVolume:b,setHasError:h,resetPlayer:_}=U(B=>B);d.useEffect(()=>()=>_(),[_]);const M=()=>{u(!p)},z=()=>{u(!0)},Y=()=>{u(!1)},O=(B,T)=>{const L=Array.isArray(T)?T[0]:T;o.current&&(o.current.seekTo(L),w(L))},D=(B,T)=>{const L=Array.isArray(T)?T[0]:T;b(L)},m=()=>{h(!0),y("error")},S=B=>{const T=B.playedSeconds;w(T)},F=()=>{if(o.current){y("ready");const B=o.current.getDuration();C(B)}},N=()=>{n.current&&(document.fullscreenElement?(document.exitFullscreen(),l(!1)):n.current.requestFullscreen().then(()=>{document.addEventListener("fullscreenchange",G)}))},G=()=>{l(!!document.fullscreenElement),document.removeEventListener("fullscreenchange",G)};return d.useEffect(()=>()=>{document.removeEventListener("fullscreenchange",G)}),d.useEffect(()=>{const B=T=>{if(a){const L=window.screen.height,Be=T.clientY,ze=L-Be;c(ze<=50)}};return document.addEventListener("mousemove",B),()=>{document.removeEventListener("mousemove",B)}},[a,x]),d.useEffect(()=>{const B=T=>{a&&T.key==="Escape"&&(T.preventDefault(),T.stopPropagation())};return document.addEventListener("fullscreenchange",G),document.addEventListener("keydown",B),()=>{document.removeEventListener("fullscreenchange",G),document.removeEventListener("keydown",B)}}),k!=null&&k.link?e.jsxs(qo,{ref:n,hidden:t,children:[e.jsx(Ko,{children:e.jsx(R,{size:120,src:(k==null?void 0:k.image_url)||"",type:"clip"})}),e.jsx(rt,{ref:o,controls:!1,height:a?window.screen.height:"200px",onBuffer:()=>y("buffering"),onBufferEnd:()=>y("ready"),onError:m,onPause:Y,onPlay:z,onProgress:S,onReady:F,playing:p,url:(k==null?void 0:k.link)||"",volume:j,width:"100%"}),g==="error"?e.jsx(Zo,{className:"error-wrapper",children:"Error happened, please try later"}):null,g==="ready"?e.jsx(No,{duration:v,handleProgressChange:O,handleVolumeChange:D,isFullScreen:a,isPlaying:p,onFullScreenClick:N,playingTime:f,setIsPlaying:M,showToolbar:x&&a}):null,g==="buffering"?e.jsx(Xo,{children:e.jsx(te,{color:i.lightGray})}):null]}):null},qo=r(s)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  overflow: hidden;
  height: ${t=>t.hidden?"0px":"auto"};
`,Ko=r(s)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Xo=r(s)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,Zo=r(s)`
  height: 60px;
  padding: 12px 16px;
  color: ${i.primaryRed};
`,Jo=d.memo(Qo),ei=({open:t})=>{const{setSelectedNode:o,setTeachMe:n,showTeachMe:a}=E(g=>g),l=P(),{setSidebarOpen:x}=A(g=>g),{playingNode:c}=U(g=>g);return e.jsx(ie,{"data-testid":"sidebar-sub-view",direction:"right",in:t,style:{width:a?"700px":"",position:t?"relative":"absolute"},children:e.jsxs(ti,{children:[e.jsx(Jo,{hidden:(l==null?void 0:l.ref_id)!==(c==null?void 0:c.ref_id)},c==null?void 0:c.ref_id),e.jsx(oi,{children:e.jsx(Fo,{})}),e.jsx(si,{onClick:()=>{o(null),n(!1)},children:e.jsx(at,{})}),e.jsx(ii,{onClick:()=>{x(!1)},children:e.jsx(ke,{})})]})})},ti=r(s)(({theme:t})=>({position:"relative",background:i.BG1,width:"100%",margin:"64px auto 20px 10px",borderRadius:"16px",zIndex:29,[t.breakpoints.up("sm")]:{width:"390px"}})),si=r(s)`
  font-size: 32px;
  color: ${i.white};
  cursor: pointer;
  position: absolute;
  right: 3px;
  top: 3px;

  &:hover {
    color: ${i.GRAY6};
  }

  &:active {
  }
`,oi=r(s)`
  flex: 1 1 100%;
`,ii=r(s).attrs({align:"center",justify:"center",p:8})(({theme:t})=>({backgroundColor:i.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:i.white,[t.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:i.BG1_HOVER},"&:active":{backgroundColor:i.BG1_PRESS,color:i.GRAY6}})),ni=()=>{const t=A(o=>o.setSidebarOpen);return e.jsx(ri,{onClick:()=>{t(!0)},children:e.jsx(lt,{})})},ri=r(s).attrs({align:"center",justify:"center",p:8})(({theme:t})=>({backgroundColor:i.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:i.white,[t.breakpoints.up("sm")]:{left:"64px"},"&:hover":{backgroundColor:i.BG1_HOVER},"&:active":{backgroundColor:i.BG1_PRESS,color:i.GRAY6}})),ai=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5099_7163",maskUnits:"userSpaceOnUse",x:"2",y:"2",width:"16",height:"16",children:e.jsx("rect",{x:"2",y:"2",width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5099_7163)",children:e.jsx("path",{d:"M10 16.6667C9.16667 16.6667 8.38611 16.5083 7.65833 16.1917C6.93056 15.875 6.29722 15.4472 5.75833 14.9083C5.21944 14.3695 4.79167 13.7361 4.475 13.0083C4.15833 12.2806 4 11.5 4 10.6667C4 10.4778 4.06389 10.3195 4.19167 10.1917C4.31944 10.0639 4.47778 10 4.66667 10C4.85556 10 5.01389 10.0639 5.14167 10.1917C5.26944 10.3195 5.33333 10.4778 5.33333 10.6667C5.33333 11.9667 5.78611 13.0695 6.69167 13.975C7.59722 14.8806 8.7 15.3333 10 15.3333C11.3 15.3333 12.4028 14.8806 13.3083 13.975C14.2139 13.0695 14.6667 11.9667 14.6667 10.6667C14.6667 9.36667 14.2139 8.2639 13.3083 7.35834C12.4028 6.45279 11.3 6.00001 10 6.00001H9.9L10.4667 6.56667C10.6 6.70001 10.6639 6.85556 10.6583 7.03334C10.6528 7.21112 10.5889 7.36667 10.4667 7.50001C10.3333 7.63334 10.175 7.70279 9.99167 7.70834C9.80833 7.7139 9.65 7.65001 9.51667 7.51667L7.8 5.80001C7.66667 5.66667 7.6 5.51112 7.6 5.33334C7.6 5.15556 7.66667 5.00001 7.8 4.86667L9.51667 3.15001C9.65 3.01667 9.80833 2.95279 9.99167 2.95834C10.175 2.9639 10.3333 3.03334 10.4667 3.16667C10.5889 3.30001 10.6528 3.45556 10.6583 3.63334C10.6639 3.81112 10.6 3.96667 10.4667 4.10001L9.9 4.66667H10C10.8333 4.66667 11.6139 4.82501 12.3417 5.14167C13.0694 5.45834 13.7028 5.88612 14.2417 6.42501C14.7806 6.9639 15.2083 7.59723 15.525 8.32501C15.8417 9.05279 16 9.83334 16 10.6667C16 11.5 15.8417 12.2806 15.525 13.0083C15.2083 13.7361 14.7806 14.3695 14.2417 14.9083C13.7028 15.4472 13.0694 15.875 12.3417 16.1917C11.6139 16.5083 10.8333 16.6667 10 16.6667Z",fill:"currentColor"})})]}),li=({trend:t,onClose:o,selectTrending:n})=>{const[a,l]=d.useState(!1),{close:x}=Z("briefDescription"),c=d.useRef(null),g=()=>{n(t.topic)},y=d.useCallback(()=>{o(),x()},[o,x]),p=()=>{c.current&&(a?c.current.pause():c.current.play(),l(!a)),l(!a)};return d.useEffect(()=>(window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}),[y]),e.jsxs(Pt,{id:"briefDescription",kind:"regular",noWrap:!0,onClose:y,children:[t.audio_EN?e.jsxs(e.Fragment,{children:[e.jsxs(s,{direction:"row",justify:"flex-start",m:20,children:[e.jsx(I,{onClick:p,size:"small",startIcon:a?e.jsx(Q,{}):e.jsx(ct,{}),style:{marginRight:"10px"},children:"Listen"}),e.jsx(I,{onClick:g,size:"small",startIcon:e.jsx(Ge,{}),children:"Learn More"})]}),e.jsx(pi,{ref:c,src:t.audio_EN,children:e.jsx("track",{kind:"captions"})})]}):null,e.jsx(di,{children:t.tldr_topic??t.topic}),e.jsx(ci,{children:e.jsx(s,{children:e.jsx(xi,{children:t.tldr&&e.jsx(xt,{children:t.tldr})})})})]})},ci=r.div`
  max-height: 300px;
  overflow-y: auto;
  margin: 8px 0;
  padding: 0 20px;
`,xi=r($)`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Barlow';
  * {
    all: revert;
  }
`,di=r($)`
  font-weight: 600;
  font-size: 20px;
  padding: 0 20px;
`,pi=r.audio`
  height: 0;
  width: 0;
`,hi=["Drivechain","Ordinals","L402","Nostr","AI"],ui=({onSubmit:t})=>{var D;const{open:o}=Z("addContent"),[n,a]=d.useState(!1),[l,x]=d.useState(!1),[c,g]=d.useState(null),y=d.useRef(null),[p,f]=d.useState(0),[v,u]=d.useState(!1),{open:w}=Z("briefDescription"),{trendingTopics:C,setTrendingTopics:k}=E(m=>m),{setValue:j}=ye(),b=d.useCallback(async()=>{a(!0),x(!1);try{const m=await De();m.length&&Array.isArray(m)&&k(m)}catch{k(hi.map(S=>({topic:S,count:0})))}finally{a(!1)}},[k,x]);d.useEffect(()=>{C.length||b()},[b,C.length]),d.useEffect(()=>{const m=setTimeout(()=>{x(!0)},5e3);return()=>clearTimeout(m)},[x,n]);const h=m=>{j("search",m),t==null||t()},_=(m,S)=>{m.stopPropagation(),m.currentTarget.blur(),S!=null&&S.tldr&&(g(S),w())},M=()=>{g(null)},z=m=>{m.stopPropagation(),m.currentTarget.blur(),u(!v)};d.useEffect(()=>{var m,S;v?(m=y.current)==null||m.play():(S=y.current)==null||S.pause()},[p,v]);const Y=()=>{f(m=>{var F,N;let S=(m+1)%C.length;for(;S!==m&&!((F=C[S])!=null&&F.audio_EN);)S=(S+1)%C.length;return S===m?(u(!1),S):((N=y.current)==null||N.load(),S===0&&(u(!1),f(0)),S)})},O=n?"Loading":"No new trending topics in the last 24 hours";return e.jsxs(gi,{"data-testid":"trending-component",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"heading-container",children:[e.jsxs("div",{className:"heading",children:[e.jsx("span",{className:"heading__title",children:"Trending Topics"}),e.jsx("span",{className:"heading__icon",children:n?e.jsx(te,{color:i.white,size:16}):e.jsx(e.Fragment,{children:l?e.jsx(mi,{onClick:b,size:"small",startIcon:e.jsx(ai,{})}):e.jsx(dt,{})})})]}),pt(C)?e.jsxs("div",{children:[e.jsx(I,{onClick:m=>z(m),startIcon:v?e.jsx(Q,{}):e.jsx(ee,{}),children:v?"Pause":"Play All"}),e.jsx(wi,{ref:y,onEnded:Y,src:(D=C[p])==null?void 0:D.audio_EN,children:e.jsx("track",{kind:"captions"})})]}):null]}),C.length===0?e.jsxs("div",{className:"trending-empty",children:[e.jsx(fi,{children:O}),e.jsx(I,{color:"secondary",disabled:n,onClick:o,size:"medium",startIcon:e.jsx(At,{}),sx:{alignSelf:"flex-end",m:"0 36px 16px 0"},variant:"contained",children:"Add Content"})]}):e.jsx("ul",{className:"list",children:C.map(m=>e.jsxs(s,{align:"center",className:"list-item",direction:"row",justify:"space-between",onClick:()=>h(m.topic),children:[e.jsxs(yi,{children:[" #",ht(m)]}),m.tldr&&e.jsx(I,{onClick:S=>_(S,m),children:"TLDR"})]},m.topic))})]}),c&&e.jsx(li,{onClose:M,selectTrending:h,trend:c})]})},yi=r.div`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: 0.3pt;
`,gi=r(s)`
  .heading-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 12px 16px 24px;
  }
  .heading {
    display: flex;
    align-items: center;
    color: ${i.GRAY6};
    padding-right: 24px;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 1.12px;
    text-transform: uppercase;
    &__icon {
      margin-left: 16px;
      font-size: 23px;
      height: 24px;
    }
  }
  .trending-empty {
    padding: 0 24px;
    color: ${i.GRAY6};
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    &-item {
      padding: 18px 16px 18px 24px;
      overflow: hidden;
      color: ${i.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${i.SECONDARY_BLUE};
      }
      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${i.PRIMARY_BLUE};
      }
    }
  }
`,fi=r.p`
  color: ${i.GRAY6};
  margin-bottom: 20px;
`,mi=r(I)`
  && {
    min-width: 28px;
    width: 28px;
    padding: 0;
    height: 28px;
    .MuiButton-startIcon {
      color: ${i.white};
      margin: auto;
      display: flex;
      align-items: center;
    }
  }
`,wi=r.audio`
  height: 0;
  width: 0;
`,ji=390,bi=d.forwardRef(({onSubmit:t,subViewOpen:o},n)=>{const{isFetching:a,setTeachMe:l,setSidebarFilter:x}=E(j=>j),c=pe(),{setSidebarOpen:g,currentSearch:y,clearSearch:p,searchFormValue:f}=A(j=>j),[v]=Ee(j=>[j.trendingTopicsFlag]),{setValue:u}=ye(),w=d.useRef(null),[C,k]=d.useState(!1);return d.useEffect(()=>{u("search",f)},[u,f]),d.useEffect(()=>{const j=w.current;if(!j)return;const b=()=>{k((j==null?void 0:j.scrollTop)>0)};j.addEventListener("scroll",b)},[]),e.jsxs(Ci,{ref:n,id:"sidebar-wrapper",children:[e.jsx(zi,{}),e.jsxs(Te,{className:Fe({"has-shadow":C}),children:[e.jsxs(Si,{children:[e.jsx(ut,{onSubmit:t}),e.jsx(_i,{onClick:()=>{if(y){u("search",""),p(),x("all");return}t==null||t()},children:a?e.jsx(te,{color:i.SECONDARY_BLUE,"data-testid":"loader",size:"20"}):e.jsx(e.Fragment,{children:y?e.jsx(Ne,{}):e.jsx(mt,{})})})]}),y&&e.jsx($i,{children:a?e.jsx(yt,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"count",children:c.length}),e.jsx("span",{className:"label",children:" results"})]}),e.jsx("div",{className:"right",style:{alignItems:"center"},children:e.jsx(gt,{})})]})})]}),!o&&e.jsx(Ti,{onClick:()=>{g(!1),l(!1)},children:e.jsx(ke,{})}),e.jsxs(Bi,{ref:w,children:[!y&&v&&e.jsx(Ii,{children:e.jsx(ui,{onSubmit:t})}),e.jsx(s,{children:a?e.jsx(ls,{}):e.jsx(ns,{isSearchResult:!!y})})]})]})}),ki=["topic","person","guest","event","organization","place","project","software"],vi=({onSubmit:t})=>{const{sidebarIsOpen:o}=A(x=>x),n=P(),a=!!n&&o&&!ki.includes(n.node_type),{showTeachMe:l}=E(x=>x);return e.jsxs(e.Fragment,{children:[e.jsx(ie,{direction:"right",in:o,mountOnEnter:!0,unmountOnExit:!0,children:e.jsx(bi,{onSubmit:t,subViewOpen:a})}),e.jsx(ei,{open:a||!!l}),!o&&e.jsx(ni,{})]})},Ci=r(s)(({theme:t})=>({position:"relative",background:i.BG1,height:"100vh",width:"100%",zIndex:30,[t.breakpoints.up("sm")]:{width:ji}})),Te=r(s).attrs({direction:"column",justify:"center",align:"stretch"})(({theme:t})=>({padding:t.spacing(3.75,2),[t.breakpoints.up("sm")]:{padding:"12px"},"&.has-shadow":{borderBottom:"1px solid rgba(0, 0, 0, 0.25)",background:i.BG1,boxShadow:"0px 1px 6px 0px rgba(0, 0, 0, 0.20)"}})),Si=r(s).attrs({direction:"row",justify:"center",align:"center"})`
  flex-grow: 1;
`,$i=r(s).attrs({direction:"row",justify:"space-between",align:"center"})`
  flex-grow: 1;
  color: ${i.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 10px;
  padding: 0 8px;
  .count {
    color: ${i.white};
  }

  .right {
    display: flex;
  }
`,_i=r(s).attrs({align:"center",justify:"center",p:5})`
  font-size: 32px;
  color: ${i.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;

  &:hover {
    /* background-color: ${i.gray200}; */
  }

  ${Te} input:focus + & {
    color: ${i.primaryBlue};
  }
`,Ti=r(s).attrs({align:"center",justify:"center",p:8})(({theme:t})=>({backgroundColor:i.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:i.white,[t.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:i.BG1_HOVER},"&:active":{backgroundColor:i.BG1_PRESS,color:i.GRAY6}})),Bi=r(s)(()=>({overflow:"auto",flex:1,width:"100%"})),zi=r(s)`
  height: 64px;
  background: ${i.BG2};
`,Ii=r(s)`
  padding: 0;
  margin-bottom: 36px;
  margin-top: 20px;
`;vi.displayName="Sidebar";export{ji as MENU_WIDTH,vi as SideBar};
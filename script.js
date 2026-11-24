const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const PAGES={
 'quadri-bt':{t:'Quadri BT',cover:'',d:'Quadri di distribuzione e protezione in bassa tensione per stabilimenti, cantieri e impianti industriali.',type:'bt',items:['Quadro generale BT','Quadro di distribuzione','Quadro di rifasamento','Quadro per cantiere','Sottoquadro di reparto','Quadro prese e forza motrice','Quadro con interruttori scatolati','Quadro di commutazione rete-gruppo']},
 'quadri-automazione':{t:'Quadri automazione',cover:'',d:'Quadri di comando e controllo per macchine e processi: PLC, inverter, pannelli operatore e I/O.',type:'auto',items:['Quadro con PLC','Quadro con inverter','Quadro di controllo pompe','Quadro con pannello operatore','Quadro per linea di produzione','Armadio I/O remoto','Quadro soft starter','Quadro di supervisione']},
 'quadri-comando-pompa':{t:'Quadri comando pompa',cover:'',d:'Quadri per l’avviamento, la protezione e il controllo di pompe, impianti di sollevamento e impianti idrici.',type:'pump',items:['Quadro per pompa singola','Quadro per due pompe con alternanza','Quadro con avviamento stella-triangolo','Quadro con inverter per pompa','Quadro per elettropompe sommerse','Quadro antincendio','Quadro di sollevamento acque','Quadro con regolazione di livello']},
 'carpenteria':{t:'Carpenteria',cover:'',d:'Carpenteria metallica e involucri su misura per quadri elettrici: armadi, cassette e strutture lavorate secondo progetto.',type:'carp',items:['Armadio metallico su misura','Cassetta in lamiera','Carpenteria per quadro generale','Struttura con piastra di fondo','Armadio per esterno','Carpenteria in acciaio inox','Pannello con lavorazioni su misura','Basamento e zoccolo']}
};
/* Le foto si inseriscono in index.html (blocchi <template> in fondo al file). Qui vengono lette. */
$$('template[data-page]').forEach(t=>{const p=PAGES[t.dataset.page];if(!p)return;const imgs=[...t.content.querySelectorAll('img')];if(imgs.length)p.items=imgs.map(i=>({t:i.getAttribute('alt')||p.t,src:i.getAttribute('src')}));if(t.dataset.cover)p.cover=t.dataset.cover});
function art(type,i){
 const r=n=>{const x=Math.sin((i+1)*9301+n*49297)*233280;return x-Math.floor(x)};
 let s=`<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice"><rect width="400" height="300" fill="#d9e1ec"/><rect y="250" width="400" height="50" fill="#c3ceDD"/><rect x="70" y="24" width="260" height="246" rx="6" fill="#4b5563"/><rect x="80" y="34" width="240" height="226" rx="3" fill="#e9eef5"/>`;
 if(type==='bt'){
  for(let row=0;row<4;row++){s+=`<rect x="92" y="${48+row*50}" width="216" height="6" fill="#aab6c6"/>`;
   for(let c=0;c<7;c++){const on=r(row*7+c)>.3;s+=`<rect x="${94+c*30}" y="${58+row*50}" width="24" height="32" rx="2" fill="#2F3742"/><rect x="${100+c*30}" y="${64+row*50}" width="12" height="12" rx="1" fill="${on?'#F5B800':'#0B5FD0'}"/>`}}
 }else if(type==='carp'){
  s+=`<rect x="92" y="46" width="216" height="22" fill="#fff"/><rect x="92" y="222" width="216" height="22" fill="#fff"/><rect x="92" y="124" width="216" height="8" fill="#aab6c6"/><rect x="92" y="200" width="216" height="8" fill="#aab6c6"/>`;
  for(let c=0;c<14;c++)s+=`<rect x="${97+c*15}" y="52" width="9" height="10" fill="#cbd5e1"/><rect x="${97+c*15}" y="228" width="9" height="10" fill="#cbd5e1"/>`;
  for(let y=0;y<4;y++)for(let x=0;x<10;x++)s+=`<circle cx="${108+x*20}" cy="${88+y*20+(y>1?30:0)}" r="3.5" fill="#8b98aa"/>`;
}else if(type==='pump'){
  s+=`<circle cx="138" cy="88" r="36" fill="#fff" stroke="#2F3742" stroke-width="5"/><path d="M138 88l20-18" stroke="#E2001A" stroke-width="3.5" stroke-linecap="round"/><circle cx="138" cy="88" r="5" fill="#2F3742"/>`;
  for(let c=0;c<3;c++)s+=`<circle cx="${222+c*34}" cy="60" r="10" fill="${['#4ade80','#F5B800','#E2001A'][c]}"/><circle cx="${222+c*34}" cy="108" r="14" fill="#2F3742"/><rect x="${220+c*34}" y="96" width="4" height="13" fill="#F5B800"/>`;
  for(let c=0;c<4;c++)s+=`<rect x="${94+c*54}" y="146" width="46" height="58" rx="3" fill="#aab6c6"/><rect x="${94+c*54}" y="146" width="46" height="10" fill="#2F3742"/><circle cx="${117+c*54}" cy="180" r="9" fill="${c%2?'#F5B800':'#0B5FD0'}"/>`;
  s+=`<rect x="92" y="216" width="216" height="28" rx="3" fill="#2F3742"/>`;
  for(let c=0;c<12;c++)s+=`<rect x="${100+c*17}" y="223" width="10" height="14" fill="#0B5FD0"/>`;
 }else{
  s+=`<rect x="92" y="46" width="90" height="62" rx="4" fill="#18202a"/><rect x="98" y="52" width="78" height="40" fill="#0B5FD0"/><path d="M102 82l14-16 12 10 20-20 22 12" stroke="#F5B800" stroke-width="3" fill="none"/>`;
  for(let c=0;c<5;c++)s+=`<rect x="${196+c*22}" y="46" width="18" height="${90}" rx="2" fill="#2F3742"/><circle cx="${205+c*22}" cy="60" r="3.5" fill="${r(c)>.4?'#4ade80':'#F5B800'}"/>`;
  for(let c=0;c<8;c++)s+=`<rect x="${94+c*27}" y="156" width="21" height="44" rx="2" fill="#aab6c6"/><rect x="${94+c*27}" y="156" width="21" height="8" fill="#2F3742"/>`;
  s+=`<rect x="92" y="214" width="216" height="30" rx="3" fill="#2F3742"/>`;
  for(let c=0;c<12;c++)s+=`<rect x="${100+c*17}" y="222" width="10" height="14" fill="${r(c+9)>.5?'#0B5FD0':'#F5B800'}"/>`;
 }
 return s+'</svg>';
}
const COVER={bt:'quadri-bt',auto:'quadri-automazione',pump:'quadri-comando-pompa',carp:'carpenteria'};
$$('[data-art]').forEach(el=>{const k=el.dataset.art,c=(PAGES[COVER[k]]||{}).cover;el.outerHTML=c?`<img src="${c}" alt="">`:art(k,k==='bt'?2:5)});
let cur=[],idx=0;
function show(k){const lb=$('#lb'),it=cur[k];idx=k;$('#lbimg').innerHTML=it.src?`<img src="${it.src}" alt="${it.t}">`:it.svg;$('#lbcap').textContent=it.t}
function openLb(k){show(k);$('#lb').classList.add('on');$('#lb .x').focus()}
function closeLb(){$('#lb').classList.remove('on')}
$('#lb .x').onclick=closeLb;
$('#lb .p').onclick=()=>show((idx+cur.length-1)%cur.length);
$('#lb .n').onclick=()=>show((idx+1)%cur.length);
$('#lb').onclick=e=>{if(e.target.id==='lb')closeLb()};
addEventListener('keydown',e=>{if(!$('#lb').classList.contains('on'))return;if(e.key==='Escape')closeLb();if(e.key==='ArrowLeft')$('#lb .p').click();if(e.key==='ArrowRight')$('#lb .n').click()});

function render(key){
 const p=PAGES[key];cur=p.items.map((it,i)=>{const o=typeof it==='string'?{t:it}:it;return {t:o.t,src:o.src,svg:o.src?'':art(p.type,i+(p.type==='auto'?20:0))}});
 $('#crumb').textContent=p.t;$('#ptitle').textContent=p.t;$('#pdesc').textContent=p.d;document.title=p.t+' – GC Power Electric';
 $('#gal').innerHTML=cur.map((it,i)=>`<button class="tile rv" style="transition-delay:${i*60}ms" data-i="${i}" aria-label="Ingrandisci: ${it.t}">${it.src?`<img src="${it.src}" alt="${it.t}" loading="lazy">`:it.svg}<span>${it.t}</span></button>`).join('');
 $$('#gal .tile').forEach(b=>b.onclick=()=>openLb(+b.dataset.i));
 requestAnimationFrame(()=>requestAnimationFrame(()=>$$('#gal .rv').forEach(x=>x.classList.add('in'))));
}
function route(){
 const h=location.hash.slice(1),isP=!!PAGES[h];
 $('#home-view').hidden=isP;$('#page-view').hidden=!isP;
 $('#nav').classList.remove('open');$('.burger').setAttribute('aria-expanded','false');$$('.has-sub').forEach(x=>x.classList.remove('open'));
 if(isP){render(h);scrollTo(0,0)}
 else{document.title='GC Power Electric – Quadri elettrici industriali';const el=h&&document.getElementById(h);if(el)setTimeout(()=>el.scrollIntoView({behavior:'smooth'}),30);else scrollTo(0,0)}
}
addEventListener('hashchange',route);route();

const tb=$('.theme'),root=document.documentElement;
function setTheme(d,save){d?root.setAttribute('data-theme','dark'):root.removeAttribute('data-theme');tb.setAttribute('aria-pressed',d);tb.setAttribute('aria-label',d?'Passa alla modalità chiara':'Passa alla modalità scura')}
setTheme(root.getAttribute('data-theme')==='dark');
tb.onclick=()=>setTheme(root.getAttribute('data-theme')!=='dark',true);
$('.burger').onclick=e=>{const o=$('#nav').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o)};
$('.sub-btn').onclick=e=>{const li=e.currentTarget.parentElement,o=li.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o)};
function closeSub(){$$('.has-sub').forEach(x=>{x.classList.remove('open');x.firstElementChild.setAttribute('aria-expanded','false')})}
document.addEventListener('click',e=>{if(!e.target.closest('.has-sub'))closeSub()});
$$('.menu a').forEach(a=>a.addEventListener('click',closeSub));
addEventListener('keydown',e=>{if(e.key==='Escape')closeSub()});

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
$$('#home-view .rv').forEach((el,i)=>{el.style.transitionDelay=(i%5)*70+'ms';io.observe(el)});

$('#qf').onsubmit=e=>{e.preventDefault();
 const v=id=>$('#'+id).value.trim();
 const body=`Nome: ${v('n')}\nTelefono: ${v('t')}\nEmail: ${v('e')}\nTipo di quadro: ${v('k')}\n\n${v('m')}`;
 location.href=`mailto:info@gcpowerelectric7.com?subject=${encodeURIComponent('Richiesta preventivo – '+v('k'))}&body=${encodeURIComponent(body)}`;
 $('.ok').textContent='Si apre il tuo programma di posta con la richiesta già compilata: premi Invia per completarla.';
};

const hv=$('.hero-video');if(hv){hv.muted=true;if(matchMedia('(prefers-reduced-motion:reduce)').matches)hv.pause();else hv.play().catch(()=>{})}
$$('#nav a').forEach(a=>a.addEventListener('click',()=>{$('#nav').classList.remove('open');$('.burger').setAttribute('aria-expanded','false')}));


(function(){
 const cv=$('.bgfx');
 if(!cv||!cv.getContext||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 const ctx=cv.getContext('2d');let W=0,H=0,pts=[],pulses=[];
 function size(){
  const d=Math.min(devicePixelRatio||1,2);
  W=innerWidth;H=innerHeight;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0);
  const n=Math.min(70,Math.round(W*H/20000));
  pts=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3}));
 }
 const dark=()=>document.documentElement.getAttribute('data-theme')==='dark';
 function frame(){
  ctx.clearRect(0,0,W,H);
  const col=dark()?'112,165,255':'11,95,208',max=150;
  for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1}
  for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
   const a=pts[i],b=pts[j],dist=Math.hypot(a.x-b.x,a.y-b.y);
   if(dist<max){
    ctx.strokeStyle=`rgba(${col},${(1-dist/max)*(dark()?.35:.22)})`;ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
    if(Math.random()<.0002&&pulses.length<8)pulses.push({a,b,t:0});
   }
  }
  ctx.fillStyle=`rgba(${col},.5)`;
  for(const p of pts){ctx.beginPath();ctx.arc(p.x,p.y,2,0,6.283);ctx.fill()}
  pulses=pulses.filter(u=>u.t<1);
  for(const u of pulses){
   u.t+=.02;const x=u.a.x+(u.b.x-u.a.x)*u.t,y=u.a.y+(u.b.y-u.a.y)*u.t;
   const g=ctx.createRadialGradient(x,y,0,x,y,12);
   g.addColorStop(0,'rgba(245,184,0,.95)');g.addColorStop(1,'rgba(245,184,0,0)');
   ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,12,0,6.283);ctx.fill();
  }
  requestAnimationFrame(frame);
 }
 size();addEventListener('resize',size);frame();
})();
const AV={"aminul": "images/members/aminul.jpg", "ariful": "images/members/ariful.jpg", "badsha": "images/members/badsha.jpg", "furkan": "images/members/furkan.jpg", "imran": "images/members/imran.jpg", "jibon": "images/members/jibon.jpg", "mahabul": "images/members/mahabul.jpg", "majedul": "images/members/majedul.jpg", "malek": "images/members/malek.jpg", "masud": "images/members/masud.jpg", "ripon": "images/members/ripon.jpg", "sahabul": "images/members/sahabul.jpg", "maznul": "images/members/maznul.jpg", "midul": "images/members/midul.jpg", "milon": "images/members/milon.jpg", "mojnul": "images/members/mojnul.jpg", "musa": "images/members/musa.jpg", "nasir": "images/members/nasir.jpg", "rahul": "images/members/rahul.jpg", "rakibul": "images/members/rakibul.jpg", "rasel": "images/members/rasel.jpg", "riaz": "images/members/riaz.jpg", "robiul": "images/members/robiul.jpg", "rony": "images/members/rony.jpg", "rubel": "images/members/rubel.jpg", "shahanur": "images/members/shahanur.jpg", "shahin": "images/members/shahin.jpg", "shohag": "images/members/shohag.jpg", "sohidul": "images/members/sohidul.jpg", "zorul": "images/members/zorul.jpg", "jony": "images/members/jony.jpg", "tusar": "images/members/tusar.jpg", "rezaul": "images/members/rezaul.jpg"};
const MEMBERS=[["মো. আমিনুল হক", "aminul"], ["আব্দুল আজিজ হোসেন", null], ["আরিফুল", "ariful"], ["বাদশা", "badsha"], ["ফুরকান", "furkan"], ["ইমরান", "imran"], ["আবুল কালাম আজাদ", null], ["খালেক", null], ["এম. জীবন আহমেদ", "jibon"], ["মাহাবুল", "mahabul"], ["মাজেদুল", "majedul"], ["মালেক", "malek"], ["মাসুদ", "masud"], ["মো. আরিফ ইসলাম", null], ["মো. রিপন আলী", "ripon"], ["মো. সাহাবুল ইসলাম", "sahabul"], ["মজনুল হক (২)", "maznul"], ["মৃদুল", "midul"], ["মিলন", "milon"], ["মজিদুল", null], ["মজনুল হক", "mojnul"], ["মুসা", "musa"], ["নাসির উদ্দীন", "nasir"], ["নাজমুল", null], ["রুহুল", "rahul"], ["রাকিবুল", "rakibul"], ["রাসেল", "rasel"], ["রিয়াজ", "riaz"], ["রবিউল", "robiul"], ["রনি", "rony"], ["রসুল", null], ["রুবেল", "rubel"], ["শাহানুর", "shahanur"], ["শাহিন", "shahin"], ["সোহাগ", "shohag"], ["শহিদুল সুমন", "sohidul"], ["জিয়াউর", null], ["জহুরুল", "zorul"], ["আবু তাহের", null], ["বিন্দাস", null], ["জনি আলম", "jony"], ["মো. দালাম ইসলাম", null], ["তুষার খান", "tusar"], ["রেজাউল করিম", "rezaul"]];
const bn=n=>String(n).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d]);

/* members */
const grid=document.getElementById('members-grid'),meta=document.getElementById('meta'),q=document.getElementById('q');
function initial(n){return Array.from(n.replace(/^(মো\.|এম\.)\s*/,''))[0]||'ক'}
function render(list){
  grid.textContent='';
  if(!list.length){const e=document.createElement('p');e.className='empty';e.textContent='এই নামে কোনো সদস্য পাওয়া যায়নি।';grid.appendChild(e)}
  list.forEach(([name,key],i)=>{
    const c=document.createElement('article');c.className='mem';
    const a=document.createElement('div');
    if(key&&AV[key]){a.className='av';const im=document.createElement('img');im.src=AV[key];im.alt=name;im.loading='lazy';a.appendChild(im)}
    else{a.className='av t'+((MEMBERS.findIndex(m=>m[0]===name)%4)+1);a.textContent=initial(name);a.setAttribute('aria-hidden','true')}
    const b=document.createElement('b');b.textContent=name;
    const s=document.createElement('small');s.textContent='সদস্য';
    c.append(a,b,s);grid.appendChild(c);
  });
  meta.textContent=list.length===MEMBERS.length?'মোট '+bn(MEMBERS.length)+' জন সদস্য':bn(list.length)+' জন সদস্য পাওয়া গেছে';
}
render(MEMBERS);
q.addEventListener('input',()=>{const v=q.value.trim().toLowerCase();render(v?MEMBERS.filter(m=>m[0].toLowerCase().includes(v)):MEMBERS)});
document.querySelectorAll('.heroCount').forEach(e=>e.textContent=bn(MEMBERS.length));

/* committee */
const COMMITTEE=[
  {name:"আলহাজ্ব মো. নাসির উদ্দীন",key:"nasir",post:"সভাপতি",job:"ব্যবসা",tel:"01619-231530",pres:true},
  {name:"মো: মজনুল হক",key:"mojnul",post:"সম্পাদক",job:"শিক্ষকতা",tel:"01580-967758"},
  {name:"মো: শহিদুল ইসলাম",key:"sohidul",post:"অর্থ সম্পাদক",job:"প্রাইভেট চাকুরী",tel:"01678-745896"},
  {name:"মো: মোকাররেবুর রহমান (বাদশা)",key:"badsha",post:"সহ-অর্থ সম্পাদক",job:"প্রাইভেট চাকুরী",tel:"01720-123897"},
  {name:"মো: মোহায়মিনুল ইসলাম (রনি)",key:"rony",post:"সাংগঠনিক সম্পাদক",job:"ব্যবসা",tel:"01600-177584"},
  {name:"মো: আবুল কালাম আজাদ",post:"শিক্ষা ও ধর্ম বিষয়ক সম্পাদক",job:"শিক্ষকতা",tel:"01722-779924"},
  {name:"মো: মজনুল হক (২)",key:"maznul",post:"সমাজকল্যাণ ও সংস্কৃতি বিষয়ক সম্পাদক",job:"প্রাইভেট চাকুরী",tel:"01745-270250"},
  {name:"মো: ইমরান হোসেন",key:"imran",post:"প্রচার প্রকাশনা তথ্য ও গবেষণা বিষয়ক সম্পাদক",job:"প্রাইভেট চাকুরী",tel:"01516-164043"},
  {name:"মো: মৃদুল হোসেন",key:"midul",post:"আইন স্বাস্থ্য ও চিকিৎসা বিষয়ক সম্পাদক",job:"প্রাইভেট চাকুরী",tel:"01778-742926"},
  {name:"মো: রুবেল ইসলাম",key:"rubel",post:"দপ্তর ও ক্রীড়া সম্পাদক",job:"প্রাইভেট চাকুরী",tel:"01860-821848"},
  {name:"মো: শাহিন উদ্দীন",key:"shahin",post:"নিবাসী সদস্য",job:"প্রাইভেট চাকুরী",tel:"01719-508022"}
];
const C_FILTERS=["সব","ব্যবসা","শিক্ষকতা","চাকুরী"];
const cGrid=document.getElementById('cGrid'),cPres=document.getElementById('cPres'),cQ=document.getElementById('cq'),cChips=document.getElementById('cChips');
let cFilter="সব";
const ICON_CALL='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
const ICON_WA='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>';
const cInitial=n=>Array.from(n.replace(/^(আলহাজ্ব\s*)?মো[:.]\s*/,''))[0]||'ক';
const cDigits=t=>t.replace(/\D/g,'');
const cTagClass=j=>j.includes('ব্যবসা')?'biz':j.includes('শিক্ষক')?'edu':'job';
const cActs=m=>'<div class="c-acts"><a class="c-btn call" href="tel:+88'+cDigits(m.tel)+'">'+ICON_CALL+'কল</a><a class="c-btn wa" href="https://wa.me/88'+cDigits(m.tel)+'" target="_blank" rel="noopener">'+ICON_WA+'হোয়াটসঅ্যাপ</a></div>';
const cAv=m=>(m.key&&AV[m.key])?'<span class="c-av has-img"><img src="'+AV[m.key]+'" alt="'+m.name+'" width="52" height="52" loading="lazy" decoding="async"></span>':'<span class="c-av" aria-hidden="true">'+cInitial(m.name)+'</span>';
const cWho=m=>'<div class="c-who">'+cAv(m)+'<div class="c-txt"><b class="c-name">'+m.name+'</b><small class="c-post">'+m.post+'</small></div></div>';
function cMatch(m){
  const v=cQ.value.trim().toLowerCase();
  const okF=cFilter==="সব"||m.job.includes(cFilter);
  const okQ=!v||(m.name+' '+m.post+' '+m.tel+' '+cDigits(m.tel)).toLowerCase().includes(v);
  return okF&&okQ;
}
function cRender(){
  const list=COMMITTEE.filter(cMatch);
  const p=list.find(m=>m.pres);
  cPres.innerHTML=p?'<div class="c-pres">'+cWho(p)+'<div class="c-meta"><span class="c-tag">'+p.job+'</span><span>'+p.tel+'</span></div>'+cActs(p)+'</div>':'';
  const rest=list.filter(m=>!m.pres);
  cGrid.innerHTML=rest.length?rest.map(m=>'<article class="c-card">'+cWho(m)+'<div class="c-row"><span class="c-tag '+cTagClass(m.job)+'">'+m.job+'</span><span class="c-num">'+m.tel+'</span></div>'+cActs(m)+'</article>').join(''):(p?'':'<p class="empty">কোনো সদস্য পাওয়া যায়নি।</p>');
}
C_FILTERS.forEach(f=>{
  const b=document.createElement('button');b.type='button';b.className='c-chip';b.textContent=f;b.setAttribute('aria-pressed',String(f===cFilter));
  b.onclick=()=>{cFilter=f;cChips.querySelectorAll('.c-chip').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));cRender()};
  cChips.appendChild(b);
});
cQ.addEventListener('input',cRender);
cRender();

/* slider */
const slides=[...document.querySelectorAll('.slide')],hero=document.getElementById('home'),dotsBox=document.getElementById('dots');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
let cur=0,timer=null;
slides.forEach((s,k)=>{
  s.setAttribute('aria-label',bn(k+1)+' এর '+bn(slides.length));
  const d=document.createElement('button');d.type='button';d.className='dot';
  d.setAttribute('aria-label','স্লাইড '+bn(k+1));d.setAttribute('aria-current',String(k===0));
  d.onclick=()=>{go(k);play()};dotsBox.appendChild(d);
});
const dots=[...dotsBox.children];
function go(n){
  cur=(n+slides.length)%slides.length;
  slides.forEach((s,k)=>{s.classList.toggle('is-active',k===cur);s.setAttribute('aria-hidden',String(k!==cur))});
  dots.forEach((d,k)=>d.setAttribute('aria-current',String(k===cur)));
}
function stop(){if(timer){clearInterval(timer);timer=null}}
function play(){stop();if(!reduce)timer=setInterval(()=>go(cur+1),6500)}
document.getElementById('prev').onclick=()=>{go(cur-1);play()};
document.getElementById('next').onclick=()=>{go(cur+1);play()};
hero.addEventListener('mouseenter',stop);hero.addEventListener('mouseleave',play);
hero.addEventListener('focusin',stop);hero.addEventListener('focusout',play);
let sx=null;
hero.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
hero.addEventListener('touchend',e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>45){go(cur+(dx<0?1:-1));play()}},{passive:true});
go(0);play();

/* gallery */
const slideImgs=[...document.querySelectorAll('.slide img')],gBtns=[...document.querySelectorAll('.g-btn')];
gBtns.forEach(b=>{const im=b.querySelector('img');if(im.dataset.slide!==undefined)im.src=slideImgs[+im.dataset.slide].src});
const lb=document.getElementById('lb'),lbImg=document.getElementById('lbImg'),lbCap=document.getElementById('lbCap');
const fBtns=[...document.querySelectorAll('.f-btn:not(.yd-btn):not(.eid-btn)')],yBtns=[...document.querySelectorAll('.yd-btn')],eBtns=[...document.querySelectorAll('.eid-btn')];let LB=gBtns,gi=0,lastFocus=null;
function showG(i){gi=(i+LB.length)%LB.length;const im=LB[gi].querySelector('img');lbImg.src=im.src;lbImg.alt=im.alt;lbCap.textContent=LB[gi].querySelector('.g-cap').textContent}
function openG(i,list){LB=list||gBtns;lastFocus=document.activeElement;showG(i);lb.hidden=false;document.documentElement.style.overflow='hidden';document.getElementById('lbX').focus()}
function closeG(){lb.hidden=true;document.documentElement.style.overflow='';if(lastFocus)lastFocus.focus()}
gBtns.forEach((b,i)=>b.addEventListener('click',()=>openG(i,gBtns)));
fBtns.forEach((b,i)=>b.addEventListener('click',()=>openG(i,fBtns)));
yBtns.forEach((b,i)=>b.addEventListener('click',()=>openG(i,yBtns)));
eBtns.forEach((b,i)=>b.addEventListener('click',()=>openG(i,eBtns)));
document.getElementById('lbX').onclick=closeG;
document.getElementById('lbP').onclick=()=>showG(gi-1);
document.getElementById('lbN').onclick=()=>showG(gi+1);
lb.addEventListener('click',e=>{if(e.target===lb)closeG()});
addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')closeG();if(e.key==='ArrowLeft')showG(gi-1);if(e.key==='ArrowRight')showG(gi+1)});
let lx=null;
lb.addEventListener('touchstart',e=>{lx=e.touches[0].clientX},{passive:true});
lb.addEventListener('touchend',e=>{if(lx===null)return;const dx=e.changedTouches[0].clientX-lx;lx=null;if(Math.abs(dx)>50)showG(gi+(dx<0?1:-1))},{passive:true});

/* video popup */
const vm=document.getElementById('vm'),vmFrame=document.getElementById('vmFrame'),vmCap=document.getElementById('vmCap');
let vFocus=null;
function openV(id,si,cap){vFocus=document.activeElement;vmFrame.textContent='';const f=document.createElement('iframe');f.src='https://www.youtube.com/embed/'+id+'?'+(si?'si='+si+'&':'')+'autoplay=1';f.title=cap;f.setAttribute('frameborder','0');f.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';f.referrerPolicy='strict-origin-when-cross-origin';f.allowFullscreen=true;vmFrame.appendChild(f);vmCap.textContent=cap+' ';const yl=document.createElement('a');yl.href='https://www.youtube.com/watch?v='+id;yl.target='_blank';yl.rel='noopener';yl.textContent='YouTube-এ দেখুন ↗';vmCap.appendChild(yl);vm.hidden=false;document.documentElement.style.overflow='hidden';document.getElementById('vmX').focus()}
function closeV(){vm.hidden=true;vmFrame.textContent='';document.documentElement.style.overflow='';if(vFocus)vFocus.focus()}
document.querySelectorAll('.v-btn').forEach(b=>b.addEventListener('click',()=>openV(b.dataset.v,b.dataset.si,b.querySelector('.g-cap').textContent)));
document.getElementById('vmX').onclick=closeV;
vm.addEventListener('click',e=>{if(e.target===vm)closeV()});
addEventListener('keydown',e=>{if(!vm.hidden&&e.key==='Escape')closeV()});

/* menu */
const btn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
function setMenu(o){nav.classList.toggle('open',o);btn.setAttribute('aria-expanded',String(o));btn.setAttribute('aria-label',o?'মেনু বন্ধ করুন':'মেনু খুলুন')}
btn.onclick=()=>setMenu(!nav.classList.contains('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});

/* active link */
const links=[...nav.querySelectorAll('a')];
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('on',l.dataset.s===e.target.id))})},{rootMargin:'-35% 0px -60% 0px'});
['home','registration','president','mp','about','principles','committee','members','founding','eid','youth','gallery'].forEach(id=>{const el=document.getElementById(id);if(el)io.observe(el)});

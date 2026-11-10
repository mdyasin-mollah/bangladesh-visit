/* Discover Bangladesh — application */
(function(){
  "use strict";
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const app=$("#app"), nav=$("#nav"), menu=$("#mb"), scrim=$("#scrim"), header=$("#hdr"), topBtn=$("#tt");

  const esc=v=>String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
  const img=(src,alt="",cls="")=>src?'<img class="'+cls+'" src="'+esc(src)+'" alt="'+esc(alt)+'" loading="lazy" decoding="async">':'';
  const link=(href,label,cls="")=>'<a class="'+cls+'" href="'+esc(href)+'">'+esc(label)+'</a>';

  const navItems=[
    ["01","Home","#/"],
    ["02","Destinations","#/destinations"],
    ["03","Trip Planner","#/planner"],
    ["04","History","#/history"],
    ["05","Culture & Food","#/culture"],
    ["06","Essentials","#/essentials"],
    ["07","About","#/about"]
  ];

  function openNav(){
    nav.classList.add("open"); scrim.classList.add("on"); menu.setAttribute("aria-expanded","true");
    document.body.classList.add("nolock");
  }
  function closeNav(){
    nav.classList.remove("open"); scrim.classList.remove("on"); menu.setAttribute("aria-expanded","false");
    document.body.classList.remove("nolock");
  }
  function buildNav(){
    nav.innerHTML='<div class="nv-top"><b>DISCOVER BANGLADESH</b><button class="nv-x" type="button" aria-label="Close menu">×</button></div>'+
      '<div class="nv-links">'+navItems.map((x,i)=>'<a style="--i:'+i+'" href="'+x[2]+'"><small>'+x[0]+'</small>'+x[1]+'</a>').join("")+'</div>'+
      '<div class="nv-foot"><a class="b1" style="--i:7" href="#/planner">Plan a trip →</a><a class="b2" style="--i:8" href="https://tourismboard.portal.gov.bd" target="_blank" rel="noopener">Tourism Board ↗</a><a class="b3" style="--i:9" href="https://whc.unesco.org/en/statesparties/bd" target="_blank" rel="noopener">UNESCO ↗</a></div>';
    $(".nv-x",nav).addEventListener("click",closeNav);
    $$(".nv-links a",nav).forEach(a=>a.addEventListener("click",closeNav));
  }

  function cards(items){
    return '<div class="grid">'+items.map((d,i)=>
      '<article class="card" data-rv style="--d:'+(i*55)+'ms">'+
      '<a class="card-img" href="#/place/'+d.id+'">'+(img((IMAGES[d.id]||[])[0],d.n))+'<span>'+esc(d.r)+'</span></a>'+
      '<div class="card-body"><div class="chips">'+d.c.map(c=>'<span>'+esc(c)+'</span>').join("")+'</div>'+
      '<h3>'+esc(d.n)+'</h3><p>'+esc(d.s)+'</p><a class="more" href="#/place/'+d.id+'">Explore destination →</a></div></article>'
    ).join("")+'</div>';
  }

  function shell(title,lead,body){
    app.className="pg";
    app.innerHTML='<section class="w page-head"><p class="eyebrow">DISCOVER BANGLADESH</p><h1>'+title+'</h1><p class="lead">'+lead+'</p></section>'+body;
    afterRender();
  }

  function home(){
    document.body.classList.add("home");
    app.className="";
    const words="A Land of Stories, Rivers & Wonders".split(" ");
    app.innerHTML='<section class="hero"><div class="hero-slides">'+(IMAGES.home||[]).map((s,i)=>'<i class="'+(i===0?"on":"")+'" style="background-image:url(\''+s+'\')"></i>').join("")+'</div><div class="hero-bg"><span></span><span></span><span></span></div><div class="w"><p class="eyebrow">WELCOME TO BANGLADESH</p><h1>'+words.map((w,i)=>'<span class="wd" style="--i:'+i+'">'+esc(w)+' </span>').join("")+'</h1><p class="typed"><span class="ty-p">Discover </span><span class="ty-t" id="typedText">rivers, forests, food & culture</span><span class="ty-c"></span></p><p class="lead">A thoughtful travel guide to Bangladesh's landscapes, heritage, food and everyday culture — built for curious travelers.</p><div class="cta"><a class="btn primary" href="#/destinations">Explore destinations →</a><a class="btn ghost" href="#/planner">Build your trip</a></div></div></section>'+
      '<section class="w"><div class="section-title"><div><p class="eyebrow">START HERE</p><h2>Find your Bangladesh</h2></div><a href="#/destinations">View all →</a></div>'+cards(D.slice(0,6))+'</section>'+
      '<section class="w split" data-rv><div><p class="eyebrow">WHY GO</p><h2>One country, many worlds.</h2></div><div><p>From tidal mangrove channels and endless beaches to tea gardens, hill country and centuries-old architecture, Bangladesh rewards travelers who slow down and look closer.</p><a class="more" href="#/about">Learn about the guide →</a></div></section>';
    startHero(); afterRender();
  }

  function destinations(){
    document.body.classList.remove("home");
    shell("Places worth the journey","Choose a landscape, a story or simply a direction. Every destination below includes practical planning notes.",'<section class="w"><div class="filters"><input id="search" type="search" placeholder="Search destinations…" aria-label="Search destinations"><div id="filterBtns"><button class="active" data-filter="all">All</button><button data-filter="nature">Nature</button><button data-filter="heritage">Heritage</button><button data-filter="beach">Beach</button><button data-filter="hills">Hills</button><button data-filter="food">Food</button></div></div><div id="destGrid">'+cards(D)+'</div></section>');
    const render=()=>{const q=$("#search").value.trim().toLowerCase(), f=$(".filters button.active").dataset.filter; const list=D.filter(d=>(f==="all"||d.c.includes(f))&&(d.n+" "+d.r+" "+d.s).toLowerCase().includes(q));$("#destGrid").innerHTML=list.length?cards(list):'<div class="empty"><h3>No matches</h3><p>Try another destination or category.</p></div>';afterRender();};
    $("#search").addEventListener("input",render); $$("#filterBtns button").forEach(b=>b.addEventListener("click",()=>{$$("#filterBtns button").forEach(x=>x.classList.remove("active"));b.classList.add("active");render();}));
  }

  function place(id){
    const d=D.find(x=>x.id===id); if(!d){notFound();return;}
    shell(esc(d.n),esc(d.s),'<section class="w detail"><div class="detail-hero">'+img((IMAGES[d.id]||[])[0],d.n)+'</div><div class="detail-grid"><div><p>'+esc(d.o)+'</p><h2>Good to know</h2><ul class="facts"><li><b>Best time</b><span>'+esc(d.t)+'</span></li><li><b>Suggested stay</b><span>'+esc(d.d)+'</span></li><li><b>Getting there</b><span>'+esc(d.x)+'</span></li></ul></div><aside><p class="eyebrow">PLAN NEXT</p><a class="btn primary" href="#/planner">Add to trip planner →</a>'+(d.u?'<a class="btn ghost" href="'+esc(d.u)+'" target="_blank" rel="noopener">UNESCO resource ↗</a>':"")+'</aside></div></section>');
  }

  function planner(){
    shell("Build a simple trip","Choose the kind of experience you want. This planner gives you a practical starting route — not a rigid itinerary.",'<section class="w"><form id="plannerForm" class="planner"><label>How many days?<select id="days"><option>3</option><option>5</option><option>7</option><option>10</option></select></label><label>Primary interest<select id="interest"><option value="nature">Nature</option><option value="heritage">Heritage</option><option value="beach">Beach</option><option value="hills">Hills</option><option value="food">Food</option></select></label><label>Travel style<select id="style"><option>Balanced</option><option>Slow & immersive</option><option>Highlights</option></select></label><button class="btn primary" type="submit">Create my plan →</button></form><div id="planResult"></div></section>');
    $("#plannerForm").addEventListener("submit",e=>{e.preventDefault();const n=+$("#days").value,f=$("#interest").value;const ranked=D.filter(d=>d.c.includes(f)).concat(D.filter(d=>!d.c.includes(f)));const count=n<=3?3:n<=5?4:6;const list=ranked.slice(0,count);$("#planResult").innerHTML='<ul class="plan">'+list.map((d,i)=>'<li><span class="pn">'+(i+1)+'</span><div class="pb"><small>'+esc(d.r)+'</small><a href="#/place/'+d.id+'"><b>'+esc(d.n)+'</b></a><span>'+esc(d.s)+'</span></div></li>').join("")+'</ul><div class="pbud"><span>Suggested route</span><b>'+list.map(d=>esc(d.n)).join(" → ")+'</b><em>Adjust travel times to local conditions.</em></div>';afterRender();});
  }

  function history(){shell("A short history","The country’s story is layered: ancient Bengal, Islamic sultanates, Mughal cities, colonial change and the birth of a modern nation.",'<section class="w timeline">'+HISTORY.map((h,i)=>'<article data-rv><span>'+(i+1).toString().padStart(2,"0")+'</span><div><h3>'+esc(h[0])+'</h3><p>'+esc(h[1])+'</p></div></article>').join("")+'</section>');}
  function culture(){shell("Culture & food","Hospitality, language, river life, craft and a deeply regional food culture are part of what makes Bangladesh memorable.",'<section class="w two-col"><div><p class="eyebrow">FOOD</p><h2>Eat widely.</h2>'+FOOD.map(x=>'<article class="food"><h3>'+esc(x[0])+'</h3><p>'+esc(x[1])+'</p></article>').join("")+'</div><div class="culture-note"><p class="eyebrow">CULTURE</p><h2>Travel with curiosity.</h2><p>Ask before photographing people, dress appropriately for religious sites, support local businesses and be patient with traffic and weather. A little Bengali goes a long way: <b>ধন্যবাদ</b> — thank you.</p></div></section>');}
  function essentials(){shell("Travel essentials","Practical starting points for visas, safety, money, transport and official information.",'<section class="w essentials"><article><h3>Official tourism information</h3><p>Use current government sources for visa, entry and tourism updates.</p><p>'+link("https://tourismboard.portal.gov.bd","Bangladesh Tourism Board ↗")+'<br>'+link("https://www.parjatan.gov.bd","Bangladesh Parjatan Corporation ↗")+'</p></article><article><h3>Heritage</h3><p>'+link("https://whc.unesco.org/en/statesparties/bd","UNESCO — Bangladesh ↗")+'</p></article><article><h3>Planning basics</h3><p>Carry small cash, keep digital copies of important documents, allow extra road time and check local weather and access conditions before heading to remote areas.</p></article></section>');}
  function about(){shell("About this guide","Discover Bangladesh is an independent, client-side travel guide focused on clear information and a calm browsing experience.",'<section class="w split"><div><h2>Simple by design.</h2></div><div><p>No framework, no build step and no server-side dependency. The site is designed to work as a static GitHub Pages project.</p><p>Content is separated into <code>js/data.js</code>; interface logic lives in <code>js/app.js</code>; visual design lives in <code>css/styles.css</code>.</p></div></section>');}
  function notFound(){shell("Page not found","That route does not exist.",'<section class="w"><a class="btn primary" href="#/">Return home →</a></section>');}

  function startHero(){
    const slides=$$(".hero-slides i"); if(slides.length<2)return;
    let i=0; setInterval(()=>{slides[i].classList.remove("on");slides[i].classList.add("prev");i=(i+1)%slides.length;slides[i].classList.add("on");setTimeout(()=>slides.forEach((s,j)=>{if(j!==i)s.classList.remove("prev")}),2200)},7000);
    const t=$("#typedText"), phrases=["rivers, forests, food & culture","tea gardens & misty hills","heritage, markets & living history"];let p=0,pos=0,del=false;
    if(!t)return; setInterval(()=>{const s=phrases[p]; if(!del){pos=Math.min(s.length,pos+1);t.textContent=s.slice(0,pos);if(pos===s.length)del=true}else{pos=Math.max(0,pos-1);t.textContent=s.slice(0,pos);if(pos===0){del=false;p=(p+1)%phrases.length}}},95);
  }

  function afterRender(){
    app.classList.add("pg");
    requestAnimationFrame(()=>{$$("[data-rv]",app).forEach(e=>{if(!("IntersectionObserver" in window)){e.classList.add("in");return}const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.08});io.observe(e)})});
    window.scrollTo({top:0,behavior:"auto"});
  }

  function route(){
    closeNav();
    const raw=location.hash.replace(/^#/,"")||"/", parts=raw.split("/").filter(Boolean);
    if(parts[0]==="place")place(parts[1]); else if(raw==="/destinations")destinations(); else if(raw==="/planner")planner(); else if(raw==="/history")history(); else if(raw==="/culture")culture(); else if(raw==="/essentials")essentials(); else if(raw==="/about")about(); else home();
    $$("a[href]").forEach(a=>{try{if(new URL(a.href).hash===location.hash)a.setAttribute("aria-current","page")}catch(_){}}); 
  }

  menu.addEventListener("click",()=>nav.classList.contains("open")?closeNav():openNav());
  scrim.addEventListener("click",closeNav);
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeNav()});
  window.addEventListener("hashchange",route);
  window.addEventListener("scroll",()=>{header.classList.toggle("sc",scrollY>24);topBtn.classList.toggle("on",scrollY>500)});
  topBtn.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
  buildNav(); route();
})();
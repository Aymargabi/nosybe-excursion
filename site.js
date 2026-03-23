/* ═══════════════════════════════════════════════
   NOSY BE EXCURSIONS — site.js
   Email   : aymargabriel05@gmail.com
   WhatsApp: +261 32 795 0641
   ═══════════════════════════════════════════════ */
'use strict';

const OWNER_EMAIL = 'aymargabriel05@gmail.com';
const OWNER_WA    = '261327950641';
const OWNER_TEL   = '+261327950641';

/* ── LANGUE ─────────────────────────────────── */
let lang = 'fr';
const TR = {
  fr:{
    navHome:'Accueil',navExc:'Excursions',navMap:'Carte',
    heroTitle:'Découvrez <span class="text-gradient">Nosy Be</span>',
    heroSub:"L'île aux parfums vous ouvre ses portes",
    heroDesc:"Des expériences uniques à Nosy Be avec nos excursions terrestres et marines. Réservation simple, confirmation instantanée.",
    heroBtn:'Découvrir les excursions',
    whyUs:'Pourquoi nous choisir ?',popular:'Excursions populaires',seeAll:'Voir toutes',
    ctaTitle:'Prêt à découvrir Nosy Be ?',ctaDesc:'Réservez votre prochaine aventure et créez des souvenirs inoubliables',
    bookNow:'Réserver',perPerson:'/ personne',from:'À partir de',
    mapTitle:'Points de départ',mapDesc:'Localisation des points de départ pour nos excursions',
    avail:'✓ Disponible !',full:'❌ Complet — choisissez une autre date',
    reqDate:'Veuillez sélectionner une date disponible (verte).',
    reqFields:'Veuillez remplir tous les champs obligatoires.',
    sending:'Envoi en cours…',confirmBtn:'Confirmer la réservation',
    confirmed:'Réservation confirmée !',thanks:'Merci pour votre confiance',
    bookRef:'Référence de réservation',backHome:"Retour à l'accueil",
    emailSent:"Email de confirmation envoyé à l'organisateur",
    waSent:'Notre équipe vous contactera sur WhatsApp',
    legAvail:'Disponible',legFull:'Complet',legSel:'Sélectionné',
    participants:'Participants',recapTitle:'Récapitulatif',
    unitPrice:'Prix unitaire',totalPay:'Total à payer',
    highlights:'Points forts',included:'Inclus',itinerary:'Itinéraire',gallery:'Galerie photos',
    payment:'Mode de paiement',special:'Demandes spéciales',
    fullName:'Nom complet',emailLbl:'Email',phoneLbl:'Téléphone / WhatsApp',
    noResults:'Aucune excursion trouvée.',
    DAYS:['L','M','M','J','V','S','D'],
    MO:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    MS:['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'],
  },
  en:{
    navHome:'Home',navExc:'Excursions',navMap:'Map',
    heroTitle:'Discover <span class="text-gradient">Nosy Be</span>',
    heroSub:'The island of fragrances awaits you',
    heroDesc:'Unique experiences in Nosy Be with our land and sea excursions. Simple booking, instant confirmation.',
    heroBtn:'Discover excursions',
    whyUs:'Why choose us?',popular:'Popular excursions',seeAll:'See all',
    ctaTitle:'Ready to discover Nosy Be?',ctaDesc:'Book your next adventure and create unforgettable memories',
    bookNow:'Book',perPerson:'/ person',from:'From',
    mapTitle:'Departure points',mapDesc:'Location of departure points for our excursions',
    avail:'✓ Available!',full:'❌ Fully booked — choose another date',
    reqDate:'Please select an available date (green).',
    reqFields:'Please fill all required fields.',
    sending:'Sending…',confirmBtn:'Confirm booking',
    confirmed:'Booking confirmed!',thanks:'Thank you for your trust',
    bookRef:'Booking reference',backHome:'Back to home',
    emailSent:'Confirmation email sent to organizer',
    waSent:'Our team will contact you on WhatsApp',
    legAvail:'Available',legFull:'Fully booked',legSel:'Selected',
    participants:'Participants',recapTitle:'Summary',
    unitPrice:'Unit price',totalPay:'Total to pay',
    highlights:'Highlights',included:'Included',itinerary:'Itinerary',gallery:'Photo gallery',
    payment:'Payment method',special:'Special requests',
    fullName:'Full name',emailLbl:'Email',phoneLbl:'Phone / WhatsApp',
    noResults:'No excursions found.',
    DAYS:['M','T','W','T','F','S','S'],
    MO:['January','February','March','April','May','June','July','August','September','October','November','December'],
    MS:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  }
};
const T = () => TR[lang];

/* ── EXCURSIONS ─────────────────────────────── */
const EXC = [
  {id:1,cat:'sea',dur:'full_day',diff:'easy',price:45000,maxP:12,dep:'Port de Hell Ville',
   img:'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
   gal:['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600','https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600','https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600'],
   name:{fr:'Snorkeling à Nosy Tanikely',en:'Snorkeling at Nosy Tanikely'},
   desc:{fr:'Plongez dans les eaux cristallines de la réserve marine de Nosy Tanikely. Tortues marines, dauphins et faune colorée dans un écosystème préservé.',en:'Dive into the crystal clear waters of Nosy Tanikely marine reserve. Sea turtles, dolphins and colorful fauna await.'},
   hl:{fr:['Réserve marine protégée','Tortues marines garanties','Équipement fourni','Pique-nique sur la plage','Guide certifié'],en:['Protected marine reserve','Sea turtles guaranteed','Equipment provided','Beach picnic','Certified guide']},
   inc:{fr:['Masque et tuba','Palmes','Bouée de sécurité','Déjeuner sur place','Transport maritime'],en:['Mask and snorkel','Fins','Safety buoy','Lunch on site','Maritime transport']},
   itin:{fr:['08:00 — Départ du Port de Hell Ville','09:00 — Arrivée à Nosy Tanikely','09:30 — Session snorkeling (3h)','12:30 — Déjeuner sur la plage','14:00 — Libre sur la plage','16:00 — Retour à Hell Ville'],en:['08:00 — Departure from Hell Ville Port','09:00 — Arrival at Nosy Tanikely','09:30 — Snorkeling session (3h)','12:30 — Lunch on the beach','14:00 — Free time on the beach','16:00 — Return to Hell Ville']}},
  {id:2,cat:'land',dur:'full_day',diff:'moderate',price:55000,maxP:8,dep:'Andoany (Hell Ville)',
   img:'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800',
   gal:['https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600','https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600','https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600'],
   name:{fr:'Forêt de Lokobe & Lémuriens',en:'Lokobe Forest & Lemurs'},
   desc:{fr:"Explorez la seule forêt primaire de Nosy Be. Lémuriens noirs, caméléons et serpents boas dans leur habitat naturel.",en:"Explore the only primary forest of Nosy Be. Black lemurs, chameleons and boa snakes in their natural habitat."},
   hl:{fr:['Lémuriens noirs en liberté','Caméléons de Madagascar','Serpents boas arboricoles','Guide naturaliste','Pirogue traditionnelle'],en:['Free black lemurs','Madagascar chameleons','Arboreal boa snakes','Naturalist guide','Traditional canoe']},
   inc:{fr:['Guide naturaliste bilingue','Transport en pirogue','Déjeuner local','Entrée réserve','Eau et snacks'],en:['Bilingual naturalist guide','Canoe transport','Local lunch','Reserve entry','Water and snacks']},
   itin:{fr:['07:30 — Départ du centre-ville','08:30 — Traversée en pirogue vers Lokobe','09:00 — Randonnée dans la forêt (4h)','13:00 — Déjeuner au village local','15:00 — Retour en pirogue','16:30 — Arrivée à Hell Ville'],en:['07:30 — Departure from town center','08:30 — Canoe crossing to Lokobe','09:00 — Forest hike (4h)','13:00 — Lunch at local village','15:00 — Return by canoe','16:30 — Arrival at Hell Ville']}},
  {id:3,cat:'sea',dur:'half_day',diff:'easy',price:35000,maxP:15,dep:'Port de Hell Ville',
   img:'https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800',
   gal:['https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=600','https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600','https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600'],
   name:{fr:'Croisière coucher de soleil',en:'Sunset cruise'},
   desc:{fr:"Embarquez sur un boutre traditionnel malgache au coucher du soleil. Cocktails, fruits frais et panorama époustouflant.",en:"Embark on a traditional Malagasy dhow at sunset. Cocktails, fresh fruits and breathtaking panorama."},
   hl:{fr:['Boutre traditionnel malgache','Vue panoramique sur les îles','Cocktails et fruits frais','Coucher de soleil spectaculaire','Ambiance romantique'],en:['Traditional Malagasy dhow','Panoramic view of islands','Cocktails and fresh fruits','Spectacular sunset','Romantic atmosphere']},
   inc:{fr:['Cocktails de bienvenue','Plateau de fruits frais','Snacks apéritifs','Musique live','Photos professionnelles'],en:['Welcome cocktails','Fresh fruit platter','Appetizer snacks','Live music','Professional photos']},
   itin:{fr:['16:00 — Embarquement au port','16:30 — Départ en mer','17:00 — Cocktails et découverte des îles','18:30 — Coucher de soleil magique','19:30 — Retour au port'],en:['16:00 — Boarding at port','16:30 — Departure at sea','17:00 — Cocktails and island discovery','18:30 — Magical sunset','19:30 — Return to port']}},
  {id:4,cat:'sea',dur:'full_day',diff:'challenging',price:75000,maxP:6,dep:"Plage d'Ambatoloaka",
   img:'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800',
   gal:['https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=600','https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600','https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600'],
   name:{fr:'Plongée sous-marine PADI',en:'PADI Scuba diving'},
   desc:{fr:"Explorez les fonds marins avec nos moniteurs PADI certifiés. Requins-baleines de saison, raies manta et coraux multicolores.",en:"Explore the seabed with our certified PADI instructors. Seasonal whale sharks, manta rays and colorful corals."},
   hl:{fr:['Requins-baleines (oct-nov)','Raies manta','Coraux préservés','Moniteurs PADI certifiés','Matériel professionnel'],en:['Whale sharks (oct-nov)','Manta rays','Preserved corals','PADI certified instructors','Professional equipment']},
   inc:{fr:['Équipement complet','2 plongées','Briefing de sécurité','Déjeuner à bord','Photos sous-marines'],en:['Full equipment','2 dives','Safety briefing','Lunch on board','Underwater photos']},
   itin:{fr:['07:00 — Briefing et équipement','08:00 — Départ vers le site de plongée','09:00 — 1ère plongée (50 min)','11:00 — Pause déjeuner à bord','13:00 — 2ème plongée (50 min)','15:30 — Retour à la plage'],en:['07:00 — Briefing and equipment','08:00 — Departure to dive site','09:00 — 1st dive (50 min)','11:00 — Lunch break on board','13:00 — 2nd dive (50 min)','15:30 — Return to beach']}},
  {id:5,cat:'adventure',dur:'full_day',diff:'moderate',price:60000,maxP:10,dep:'Centre de Hell Ville',
   img:'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800',
   gal:['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600','https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600','https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600'],
   name:{fr:"Tour de l'île en quad",en:'Island tour by quad'},
   desc:{fr:"Découvrez Nosy Be sur des quads puissants : villages de pêcheurs, champs d'ylang-ylang et plages sauvages.",en:"Discover Nosy Be on powerful quads: fishing villages, ylang-ylang fields and wild beaches."},
   hl:{fr:["Villages de pêcheurs authentiques","Champs d'ylang-ylang","Plages sauvages","Panoramas époustouflants","Adrénaline garantie"],en:['Authentic fishing villages','Ylang-ylang fields','Wild beaches','Breathtaking panoramas','Guaranteed adrenaline']},
   inc:{fr:['Location de quad','Casque et équipement','Guide motocycliste','Déjeuner local','Assurance incluse'],en:['Quad rental','Helmet and equipment','Motorcycle guide','Local lunch','Insurance included']},
   itin:{fr:["08:00 — Briefing et initiation quad","09:00 — Départ vers le nord de l'île","11:00 — Visite village de pêcheurs","12:30 — Déjeuner local","14:00 — Plages sauvages et baignade","17:00 — Retour à Hell Ville"],en:['08:00 — Briefing and quad initiation','09:00 — Departure to north of island','11:00 — Fishing village visit','12:30 — Local lunch','14:00 — Wild beaches and swimming','17:00 — Return to Hell Ville']}},
  {id:6,cat:'cultural',dur:'half_day',diff:'easy',price:25000,maxP:15,dep:'Marché de Hell Ville',
   img:'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
   gal:['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600','https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600','https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600'],
   name:{fr:'Visite culturelle de Hell Ville',en:'Cultural visit of Hell Ville'},
   desc:{fr:"Marché coloré, architecture coloniale, distilleries d'ylang-ylang et rencontres authentiques avec les habitants de Nosy Be.",en:"Colorful market, colonial architecture, ylang-ylang distilleries and authentic meetings with the locals of Nosy Be."},
   hl:{fr:['Marché traditionnel coloré','Architecture coloniale française',"Distillerie d'ylang-ylang",'Rencontres avec les habitants','Dégustation de produits locaux'],en:['Colorful traditional market','French colonial architecture','Ylang-ylang distillery','Meetings with locals','Local product tasting']},
   inc:{fr:['Guide culturel bilingue','Entrées musée et distillerie','Dégustation produits locaux','Transport en pousse-pousse','Livret culturel'],en:['Bilingual cultural guide','Museum and distillery entries','Local product tasting','Rickshaw transport','Cultural booklet']},
   itin:{fr:['09:00 — Rencontre au marché central','09:30 — Visite du marché et des épices',"11:00 — Distillerie d'ylang-ylang",'12:00 — Dégustation et artisanat local','13:00 — Fin de la visite'],en:['09:00 — Meeting at central market','09:30 — Market and spices visit','11:00 — Ylang-ylang distillery','12:00 — Tasting and local crafts','13:00 — End of visit']}}
];

const DEPS = [
  {id:1,name:'Port de Hell Ville',lat:-13.4066,lng:48.2726,desc:'Départ principal — excursions maritimes'},
  {id:2,name:"Plage d'Ambatoloaka",lat:-13.3972,lng:48.2587,desc:'Départ plongée et snorkeling'},
  {id:3,name:'Centre de Hell Ville',lat:-13.4080,lng:48.2700,desc:'Départ visites culturelles et quads'},
];

/* ── STATE ───────────────────────────────────── */
let curExc    = null;
let nbPeople  = 1;
let selDate   = '';
let calY      = new Date().getFullYear();
let calM      = new Date().getMonth();
let mapInst   = null;

/* ── DATES RÉSERVÉES (localStorage) ─────────── */
function getBooked()    { try{return JSON.parse(localStorage.getItem('nbe_booked')||'[]');}catch(e){return[];} }
function addBooked(d)   { const l=getBooked(); if(!l.includes(d)){l.push(d);localStorage.setItem('nbe_booked',JSON.stringify(l));} }
function checkBooked(d) { return getBooked().includes(d); }

/* ── NAVIGATION ──────────────────────────────── */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  const pg=document.getElementById(id+'Page');
  if(pg) pg.classList.add('active');
  const lk=document.querySelector('[data-page="'+id+'"]');
  if(lk) lk.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  if(id==='map') initMap();
}

/* ── LANGUE ──────────────────────────────────── */
function toggleLanguage() {
  lang = lang==='fr'?'en':'fr';
  const t1=document.getElementById('langText');
  const t2=document.getElementById('langTextMobile');
  if(t1) t1.textContent=lang.toUpperCase();
  if(t2) t2.textContent=lang==='fr'?'English':'Français';
  applyTR();
  renderFeatured();
  renderGrid();
  if(curExc) renderDetail(curExc);
}
function applyTR() {
  const S=(id,v)=>{const e=document.getElementById(id);if(e)e.innerHTML=v;};
  const t=T();
  S('heroTitle',t.heroTitle); S('heroSub',t.heroSub); S('heroDesc',t.heroDesc); S('heroBtn',t.heroBtn);
  S('whyUsTitle',t.whyUs); S('popularTitle',t.popular); S('seeAllBtn',t.seeAll);
  S('ctaTitle',t.ctaTitle); S('ctaDesc',t.ctaDesc);
  S('mapPageTitle',t.mapTitle); S('mapPageDesc',t.mapDesc);
}

/* ── LABELS ──────────────────────────────────── */
function catLbl(c) { return ({sea:{fr:'Mer',en:'Sea'},land:{fr:'Terre',en:'Land'},adventure:{fr:'Aventure',en:'Adventure'},cultural:{fr:'Culturel',en:'Cultural'}}[c]||{})[lang]||c; }
function diffLbl(d){ return ({easy:{fr:'Facile',en:'Easy'},moderate:{fr:'Modérée',en:'Moderate'},challenging:{fr:'Difficile',en:'Challenging'}}[d]||{})[lang]||d; }
function durLbl(d) { return d==='half_day'?(lang==='fr'?'Demi-journée':'Half day'):(lang==='fr'?'Journée complète':'Full day'); }
function priceFmt(p){ return p.toLocaleString('fr-FR')+' Ar'; }
function dateFmt(s) {
  if(!s) return '';
  const [y,m,d]=s.split('-');
  return d+' '+T().MS[parseInt(m)-1]+' '+y;
}
function setTxt(id,v){ const e=document.getElementById(id); if(e) e.textContent=v; }

/* ── CARDS ───────────────────────────────────── */
function mkCard(e){
  return `<div class="excursion-card" onclick="openDetail(${e.id})">
    <div class="card-image">
      <img src="${e.img}" alt="${e.name[lang]}" loading="lazy">
      <div class="card-badge"><span class="badge ${e.cat}">${catLbl(e.cat)}</span></div>
    </div>
    <div class="card-content">
      <h3>${e.name[lang]}</h3>
      <p>${e.desc[lang]}</p>
      <div class="card-meta">
        <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> ${durLbl(e.dur)}</span>
        <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> Max ${e.maxP}</span>
        <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ${diffLbl(e.diff)}</span>
      </div>
      <div class="card-footer">
        <div class="price">
          <span class="price-label">${T().from}</span>
          <span class="price-value">${priceFmt(e.price)}</span>
          <span class="price-unit">${T().perPerson}</span>
        </div>
        <button class="btn btn-primary" onclick="event.stopPropagation();openDetail(${e.id})">${T().bookNow}</button>
      </div>
    </div>
  </div>`;
}

function renderFeatured(){ const g=document.getElementById('featuredGrid'); if(g) g.innerHTML=EXC.slice(0,4).map(mkCard).join(''); }
function renderGrid(){
  const g=document.getElementById('excursionsGrid'); if(!g) return;
  const cat=(document.getElementById('categoryFilter')||{}).value||'all';
  const dur=(document.getElementById('durationFilter')||{}).value||'all';
  const dif=(document.getElementById('difficultyFilter')||{}).value||'all';
  const f=EXC.filter(e=>(cat==='all'||e.cat===cat)&&(dur==='all'||e.dur===dur)&&(dif==='all'||e.diff===dif));
  g.innerHTML=f.length?f.map(mkCard).join(''):'<p style="grid-column:1/-1;text-align:center;color:var(--slate);padding:3rem 0">'+T().noResults+'</p>';
}
function filterExcursions(){ renderGrid(); }
function clearFilters(){
  ['categoryFilter','durationFilter','difficultyFilter'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='all';});
  renderGrid();
}

/* ── DÉTAIL ──────────────────────────────────── */
function openDetail(id){
  curExc=EXC.find(e=>e.id===id);
  if(!curExc) return;
  renderDetail(curExc);
  showPage('detail');
}

function renderDetail(e){
  const hero=document.getElementById('detailHero');
  if(hero) hero.innerHTML='<img src="'+e.img+'" alt="'+e.name[lang]+'"><div style="position:absolute;bottom:2rem;left:2rem;z-index:10"><span class="badge '+e.cat+'">'+catLbl(e.cat)+'</span></div>';
  setTxt('detailCategory',catLbl(e.cat));
  setTxt('detailTitle',e.name[lang]);
  setTxt('detailDuration',durLbl(e.dur));
  setTxt('detailDeparture',e.dep);
  setTxt('detailMaxParticipants','Max '+e.maxP+(lang==='fr'?' pers.':', people'));
  setTxt('detailDescription',e.desc[lang]);
  setTxt('detailPrice',priceFmt(e.price));
  const hl=document.getElementById('detailHighlights'); if(hl) hl.innerHTML=e.hl[lang].map(h=>'<li>'+h+'</li>').join('');
  const inc=document.getElementById('detailIncluded');  if(inc) inc.innerHTML=e.inc[lang].map(i=>'<li>'+i+'</li>').join('');
  const it=document.getElementById('detailItinerary');  if(it) it.innerHTML=e.itin[lang].map(s=>'<div class="itinerary-item"><div class="itinerary-dot"></div><p style="color:var(--slate)">'+s+'</p></div>').join('');
  const gal=document.getElementById('detailGallery');   if(gal) gal.innerHTML=e.gal.map(i=>'<img src="'+i+'" alt="photo" loading="lazy">').join('');
  // Reset
  nbPeople=1; selDate='';
  calY=new Date().getFullYear(); calM=new Date().getMonth();
  const bd=document.getElementById('bookingDate');
  if(bd){bd.value='';bd.min=new Date().toISOString().split('T')[0];}
  setTxt('participantCount','1');
  setTxt('totalPrice',priceFmt(e.price));
  const ai=document.getElementById('availabilityInfo'); if(ai) ai.style.display='none';
  renderCal();
}

/* ── CALENDRIER VISUEL ───────────────────────── */
function renderCal(){
  const wrap=document.getElementById('visualCalendar');
  if(!wrap) return;
  const booked=getBooked();
  const today=new Date(); today.setHours(0,0,0,0);
  const firstDay=new Date(calY,calM,1).getDay();
  const offset=firstDay===0?6:firstDay-1;
  const daysInM=new Date(calY,calM+1,0).getDate();
  const t=T();

  let h='<div style="background:#fff;border:1px solid var(--border);border-radius:.75rem;padding:1.25rem;margin-bottom:.75rem">';
  // Header
  h+='<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem">'
    +'<button onclick="calPrev()" style="width:32px;height:32px;border:1px solid var(--border);border-radius:.5rem;background:none;cursor:pointer;font-size:18px;color:var(--slate)">‹</button>'
    +'<strong style="font-size:1rem;font-family:var(--font-heading)">'+t.MO[calM]+' '+calY+'</strong>'
    +'<button onclick="calNext()" style="width:32px;height:32px;border:1px solid var(--border);border-radius:.5rem;background:none;cursor:pointer;font-size:18px;color:var(--slate)">›</button>'
    +'</div>';
  // Jours semaine
  h+='<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-bottom:4px">';
  t.DAYS.forEach(d=>{ h+='<div style="text-align:center;font-size:.65rem;font-weight:700;color:var(--slate-light);padding:4px 0">'+d+'</div>'; });
  h+='</div>';
  // Grille
  h+='<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px">';
  for(let i=0;i<offset;i++) h+='<div></div>';
  for(let d=1;d<=daysInM;d++){
    const ds=calY+'-'+String(calM+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
    const dt=new Date(calY,calM,d);
    const past=dt<today, full=booked.includes(ds), sel=selDate===ds, tod=dt.toDateString()===today.toDateString();
    let bg,col,brd='1px solid transparent',cur,clk='';
    if(past)     {bg='transparent';col='#CBD5E1';cur='default';}
    else if(full){bg='#FEE2E2';col='#DC2626';cur='not-allowed';}
    else if(sel) {bg='var(--primary)';col='#fff';cur='pointer';}
    else if(tod) {bg='#EFF6FF';col='var(--primary)';brd='1.5px solid var(--primary)';cur='pointer';}
    else         {bg='#F0FDF4';col='#166534';cur='pointer';}
    if(!past&&!full) clk=' onclick="pickDate(\''+ds+'\')"';
    h+='<div'+clk+' title="'+(full?t.legFull:(past?'':t.legAvail))+'" style="aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:.78rem;border-radius:.35rem;background:'+bg+';color:'+col+';border:'+brd+';cursor:'+cur+';font-weight:'+(sel?'700':'400')+';position:relative">'+d+(full?'<span style="position:absolute;bottom:1px;right:2px;font-size:.45rem;color:#DC2626">●</span>':'')+'</div>';
  }
  h+='</div>';
  // Légende
  h+='<div style="display:flex;gap:1rem;margin-top:.875rem;flex-wrap:wrap">'
    +lgd('#F0FDF4','#BBF7D0',t.legAvail)+lgd('#FEE2E2','#FECACA',t.legFull)+lgd('var(--primary)','var(--primary)',t.legSel)
    +'</div></div>';
  wrap.innerHTML=h;
}
function lgd(bg,brd,lbl){
  return '<div style="display:flex;align-items:center;gap:.35rem;font-size:.72rem;color:var(--slate)"><span style="width:11px;height:11px;background:'+bg+';border:1px solid '+brd+';border-radius:2px;display:inline-block"></span>'+lbl+'</div>';
}

function pickDate(ds){
  selDate=ds;
  const bd=document.getElementById('bookingDate'); if(bd) bd.value=ds;
  renderCal();
  showAvail(ds);
}
function showAvail(ds){
  const info=document.getElementById('availabilityInfo');
  if(!info||!ds){if(info)info.style.display='none';return;}
  info.style.display='block';
  if(checkBooked(ds)){info.className='availability-info full';info.innerHTML='<span>'+T().full+'</span>';}
  else{info.className='availability-info available';info.innerHTML='<span>'+T().avail+'</span>';}
}
function calPrev(){calM--;if(calM<0){calM=11;calY--;}renderCal();}
function calNext(){calM++;if(calM>11){calM=0;calY++;}renderCal();}

// Si l'utilisateur tape dans le champ date manuellement
function updateAvailability(){
  const bd=document.getElementById('bookingDate'); if(!bd) return;
  selDate=bd.value;
  if(selDate){const p=selDate.split('-');calY=parseInt(p[0]);calM=parseInt(p[1])-1;}
  renderCal(); showAvail(selDate);
}

/* ── PARTICIPANTS ────────────────────────────── */
function changeParticipants(delta){
  if(!curExc) return;
  nbPeople=Math.max(1,Math.min(curExc.maxP,nbPeople+delta));
  setTxt('participantCount',nbPeople);
  setTxt('totalPrice',priceFmt(curExc.price*nbPeople));
}

/* ── PASSER AU FORMULAIRE ────────────────────── */
function showBookingForm(){
  if(!selDate||checkBooked(selDate)){toast(T().reqDate);return;}
  const e=curExc;
  setTxt('summaryExcursion',e.name[lang]);
  setTxt('summaryDate',dateFmt(selDate));
  setTxt('summaryParticipants',nbPeople);
  setTxt('summaryUnitPrice',priceFmt(e.price));
  setTxt('summaryTotal',priceFmt(e.price*nbPeople));
  const img=document.getElementById('summaryImage');
  if(img){img.src=e.img;img.alt=e.name[lang];img.style.display='block';}
  showPage('booking');
}

/* ── SOUMETTRE ───────────────────────────────── */
function submitBooking(ev){
  ev.preventDefault();
  const name  =(document.getElementById('bookingName')||{}).value?.trim()||'';
  const email =(document.getElementById('bookingEmail')||{}).value?.trim()||'';
  const phone =(document.getElementById('bookingPhone')||{}).value?.trim()||'';
  const notes =(document.getElementById('bookingRequests')||{}).value?.trim()||(lang==='fr'?'Aucune':'None');
  const payEl =document.querySelector('input[name="payment"]:checked');
  const pay   =payEl?payEl.value:'non précisé';
  const btn   =document.getElementById('submitBtn');
  if(!name||!email||!phone){toast(T().reqFields);return;}

  const ref   ='NBE-'+Math.floor(10000+Math.random()*90000);
  const exc   =curExc;
  const total =priceFmt(exc.price*nbPeople);
  const eName =exc.name[lang];
  const dStr  =dateFmt(selDate);

  if(btn){btn.disabled=true;btn.textContent=T().sending;}

  // ★ Bloquer la date
  addBooked(selDate);
  renderCal();

  // ★ Email → aymargabriel05@gmail.com
  const subj=encodeURIComponent('[Nosy Be Excursions] Réservation '+ref+' — '+eName+' — '+dStr);
  const body=encodeURIComponent(
    'NOUVELLE RÉSERVATION — NOSY BE EXCURSIONS\n==========================================\n'
    +'Référence   : '+ref+'\n\nCLIENT\nNom         : '+name+'\nEmail       : '+email+'\nTéléphone   : '+phone
    +'\n\nEXCURSION\nExcursion   : '+eName+'\nDate        : '+dStr+'\nParticipants: '+nbPeople
    +'\nTotal       : '+total+'\nPaiement    : '+pay+'\n\nNOTES\n'+notes
    +'\n\n==========================================\nEnvoyé depuis le site Nosy Be Excursions'
  );
  window.location.href='mailto:'+OWNER_EMAIL+'?subject='+subj+'&body='+body;

  // ★ WhatsApp → 0327950641
  const wm=encodeURIComponent(
    '🌴 *NOUVELLE RÉSERVATION — NOSY BE EXCURSIONS*\n━━━━━━━━━━━━━━━━━━━━\n'
    +'📋 Réf : *'+ref+'*\n👤 Client : *'+name+'*\n📧 Email : '+email+'\n📱 Tél : '+phone
    +'\n━━━━━━━━━━━━━━━━━━━━\n🏝️ Excursion : *'+eName+'*\n📅 Date : *'+dStr+'*'
    +'\n👥 Participants : '+nbPeople+'\n💰 Total : *'+total+'*\n💳 Paiement : '+pay
    +'\n━━━━━━━━━━━━━━━━━━━━\n📝 Notes : '+notes
  );
  setTimeout(()=>{window.open('https://wa.me/'+OWNER_WA+'?text='+wm,'_blank');},600);

  // Confirmation
  setTimeout(()=>{
    setTxt('confirmReference',ref);
    setTxt('confirmExcursion',eName);
    setTxt('confirmDate',dStr);
    setTxt('confirmParticipants',nbPeople+(lang==='fr'?' pers.':', people'));
    setTxt('confirmTotal',total);
    const wa=document.getElementById('confirmWaBtn');
    const ca=document.getElementById('confirmCallBtn');
    if(wa) wa.href='https://wa.me/'+OWNER_WA;
    if(ca) ca.href='tel:'+OWNER_TEL;
    showPage('confirmation');
    if(btn){btn.disabled=false;btn.textContent=T().confirmBtn;}
  },1800);
}

/* ── CARTE ───────────────────────────────────── */
function initMap(){
  if(mapInst) return;
  const el=document.getElementById('map');
  if(!el||typeof L==='undefined') return;
  mapInst=L.map('map').setView([-13.4066,48.2726],13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors'}).addTo(mapInst);
  DEPS.forEach(p=>{
    L.marker([p.lat,p.lng]).addTo(mapInst)
      .bindPopup('<strong>'+p.name+'</strong><br>'+p.desc)
      .on('click',()=>hiliteDep(p.id));
  });
  renderDeps();
}
function renderDeps(){
  const l=document.getElementById('departureList'); if(!l) return;
  l.innerHTML=DEPS.map(p=>
    '<div class="departure-item" id="dep-'+p.id+'" onclick="hiliteDep('+p.id+')">'
    +'<div class="departure-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></div>'
    +'<div><h4>'+p.name+'</h4><p>'+p.desc+'</p></div></div>'
  ).join('');
}
function hiliteDep(id){
  document.querySelectorAll('.departure-item').forEach(e=>e.classList.remove('active'));
  const el=document.getElementById('dep-'+id); if(el) el.classList.add('active');
  const p=DEPS.find(d=>d.id===id); if(p&&mapInst) mapInst.setView([p.lat,p.lng],15);
}

/* ── MOBILE MENU ─────────────────────────────── */
function toggleMobileMenu(){const m=document.getElementById('mobileNav');if(m)m.classList.toggle('active');}

/* ── NAVBAR SCROLL ───────────────────────────── */
window.addEventListener('scroll',()=>{
  const n=document.getElementById('navbar'); if(n) n.classList.toggle('scrolled',window.scrollY>50);
});

/* ── TOAST ───────────────────────────────────── */
function toast(msg){
  let el=document.getElementById('nbeToast');
  if(!el){
    el=document.createElement('div');el.id='nbeToast';
    el.style.cssText='position:fixed;bottom:2rem;right:2rem;z-index:9999;background:#0F172A;color:#fff;padding:1rem 1.5rem;border-radius:.75rem;box-shadow:0 10px 30px rgba(0,0,0,.3);border-left:4px solid #0EA5E9;font-size:.9rem;max-width:340px;transform:translateY(120px);opacity:0;transition:all .4s;pointer-events:none';
    document.body.appendChild(el);
  }
  el.textContent=msg;
  el.style.transform='translateY(0)';el.style.opacity='1';
  setTimeout(()=>{el.style.transform='translateY(120px)';el.style.opacity='0';},4000);
}

/* ── INIT ────────────────────────────────────── */
document.addEventListener('DOMContentLoaded',()=>{
  renderFeatured();
  renderGrid();
  applyTR();
});

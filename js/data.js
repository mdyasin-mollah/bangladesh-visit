/* Discover Bangladesh — content data */
const IMAGES = {
  home: [
    "https://images.unsplash.com/photo-1791545717905-d0cfdd1cc845?q=80&w=1800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1800&auto=format&fit=crop"
  ],
  sundarbans: [
    "https://images.unsplash.com/photo-1602940659805-770d1b3b4b3f?q=80&w=1400&auto=format&fit=crop"
  ],
  coxs-bazar: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop"
  ],
  sylhet: [
    "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1400&auto=format&fit=crop"
  ],
  bandarban: [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1400&auto=format&fit=crop"
  ],
  rangamati: [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
  ],
  old-dhaka: [
    "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?q=80&w=1400&auto=format&fit=crop"
  ],
  paharpur: [
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1400&auto=format&fit=crop"
  ]
};

const D = [
  {id:"sundarbans",n:"Sundarbans",r:"Khulna Division",c:["nature","wildlife"],s:"A vast mangrove wilderness shaped by rivers, tides and the Royal Bengal tiger.",o:"Explore one of the world's great mangrove landscapes by boat and experience quiet waterways, forest trails and extraordinary wildlife.",t:"November–February",d:"2–3 days",x:"Travel via Khulna or Mongla, then continue by permitted boat tour.",cl:"#1f6f78",u:"https://whc.unesco.org/en/list/798"},
  {id:"coxs-bazar",n:"Cox's Bazar",r:"Chattogram Division",c:["beach","nature"],s:"A long sandy coastline known for sunsets, sea air and lively beach life.",o:"Spend slow mornings by the Bay of Bengal, visit nearby fishing communities and use Cox's Bazar as a base for coastal excursions.",t:"November–March",d:"2–3 days",x:"Regular flights and road connections serve Cox's Bazar from Dhaka.",cl:"#b5532f"},
  {id:"sylhet",n:"Sylhet & Srimangal",r:"Sylhet Division",c:["nature","culture"],s:"Rolling tea gardens, forest trails, wetlands and a slower green rhythm.",o:"Discover tea estates, Ratargul's wetland forest and the cultural landscape around Sylhet and Srimangal.",t:"October–March",d:"2–4 days",x:"Fly or travel by train/road from Dhaka; Srimangal is a convenient base.",cl:"#2e7d5b"},
  {id:"bandarban",n:"Bandarban",r:"Chattogram Hill Tracts",c:["hills","nature"],s:"Mountain landscapes, waterfalls and viewpoints in the southeastern hills.",o:"A strong choice for travelers seeking hill scenery, trails, indigenous culture and dramatic viewpoints.",t:"November–February",d:"2–4 days",x:"Travel by road from Chattogram; check current local access guidance before departure.",cl:"#7a6540"},
  {id:"rangamati",n:"Rangamati",r:"Chattogram Hill Tracts",c:["hills","lake"],s:"Kaptai Lake, forested hills and boat journeys through a beautiful inland landscape.",o:"Take a lake excursion, visit local markets and enjoy the combination of water and hills.",t:"November–February",d:"1–3 days",x:"Road travel from Chattogram is the usual route.",cl:"#477d83"},
  {id:"old-dhaka",n:"Old Dhaka",r:"Dhaka Division",c:["heritage","food"],s:"Historic streets, mosques, markets and some of Bangladesh's most memorable food.",o:"Walk through centuries of urban history, explore landmarks and sample classic Old Dhaka dishes.",t:"November–February",d:"1–2 days",x:"Accessible from central Dhaka by road; allow extra time for traffic.",cl:"#8a5b45"},
  {id:"paharpur",n:"Paharpur",r:"Rajshahi Division",c:["heritage","history"],s:"The monumental Somapura Mahavihara, one of South Asia's great Buddhist archaeological sites.",o:"See the vast monastery complex and its terracotta heritage in the wider archaeological landscape of northwestern Bangladesh.",t:"November–February",d:"1 day",x:"Reach via Naogaon/Joypurhat by road or rail connections.",cl:"#9b7841"}
];

const HISTORY = [
  ["Ancient Bengal","Early settlements and powerful kingdoms shaped the riverine delta."],
  ["Sultanate & Mughal Bengal","Mosques, trade centres, ports and distinctive architecture flourished."],
  ["Colonial era","Bengal became a major centre of commerce, education and political change."],
  ["1947","The partition of British India transformed the region's political geography."],
  ["1971","Bangladesh emerged as an independent nation after a liberation war."]
];

const FOOD = [
  ["Biryani","Fragrant rice, meat and spices; Dhaka's kacchi biryani is especially famous."],
  ["Hilsa","A national culinary icon, often prepared with mustard and aromatic spices."],
  ["Bhapa Pitha","A steamed rice cake traditionally filled with coconut and date molasses."],
  ["Fuchka","Crisp shells filled with spiced potato, chickpeas and tangy water."],
  ["Mishti","A broad family of Bengali sweets including roshogolla, sandesh and doi."]
];

const SITE = {
  about:"#/about",
  destinations:"#/destinations",
  planner:"#/planner",
  history:"#/history",
  culture:"#/culture",
  essentials:"#/essentials"
};
/**
 * Central portfolio data — generated from Sai Krishna Bethamcharla's real projects,
 * resume, and technical toolkit.
 * Creative & Technical Lead at Zai Labs Private Limited.
 * Every fact on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Sai Krishna Bethamcharla',
  displayName: 'Sai Krishna',
  firstName: 'SAI KRISHNA',
  seriesTag: 'CREATIVE & TECHNICAL LEAD',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SAI KRISHNA ORIGINAL',
  role: 'Creative & Technical Lead',
  tagline: ['Creative & Technical Lead', 'AI Filmmaking', 'Web Development', 'Post-Production'],
  intro:
    'Creative & Technical Lead at Zai Labs Private Limited, working across AI-driven video production, website development, and graphic design, with hands-on experience directing multi-shot AI filmmaking projects from concept through post-production.',
  location: 'Hyderabad, India',
  phone: '+91-7995197160',
  email: 'saikrishnabethamcharla@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/sai-krishna-bethamcharla',
    github: 'https://github.com/saikrishna-bethamcharla',
    instagram: 'https://www.instagram.com/saikrishna_bethamcharla',
  },
  resumePdf: './assets/Sai_Krishna_Bethamcharla_Resume.pdf',
  portrait: {
    src: './assets/portrait-v3-720.webp',
    srcSet: './assets/portrait-v3-420.webp 420w, ./assets/portrait-v3-720.webp 720w, ./assets/portrait-v3-1100.webp 1100w',
    alt: 'Portrait of Sai Krishna Bethamcharla',
  },
  interests: [
    'Generative AI Video Pipelines (Seedance, Kling, Higgsfield)',
    'Bilingual Structured Prompt Bibles (EN+ZH)',
    'Beat-Synced Editorial & Color Grading (DaVinci Resolve)',
    'Modern Web & CRM Infrastructure',
    'Interactive Media & Mobile Showcase Platforms',
  ],
};

export const education = [
  {
    school: 'Kingston University',
    place: 'London, United Kingdom',
    degree: 'Postgraduate Diploma (PGD)',
    period: '2022',
    score: 'PGD',
  },
];

export const experience = [
  {
    company: 'Zai Labs Private Limited',
    role: 'Creative & Technical Lead',
    place: 'Hyderabad, India',
    period: 'August 2026 – Present',
    points: [
      'Leading creative and technical delivery across website development, AI-driven video production, and graphic design for client engagements.',
      'Directing multi-shot AI filmmaking projects from concept through post-production with hands-on technical execution.',
      'Coordinated a client website, CRM, and hosting engagement covering full scope of work and production delivery.',
      'Owns client business documentation — standardized to a consistent formal brand template across work orders, quotations, and invoices.',
      'Organizing and leading a small creative/technical team around a shared production pipeline and conventions.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type SubWebsite = {
  id: string;
  name: string;
  category: string;
  logline: string;
  image: string;
  liveUrl?: string;
  github?: string;
  tags: string[];
  metrics: string[];
};

export type SubVideo = {
  id: string;
  title: string;
  category: string;
  logline: string;
  youtubeId: string;
  youtubeUrl: string;
  thumbnail?: string;
  author?: string;
  aspect?: '16/9' | '9/16';
  tags: string[];
  metrics: string[];
};

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  image?: string;
  liveUrl?: string;
  websites?: SubWebsite[];
  videos?: SubVideo[];
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    year: '2026',
    genre: 'Enterprise Web Systems • AI Agency & Pharma Portals',
    logline: 'Full-scope architecture, engineering, and deployment of production web applications — including the Vasudha Pharma Chem Limited Global Portal (80+ export nations, Zoho CRM), the Zai Labs Corporate AI Agency Platform, and the Pranic Healing AP & Telangana Chapter Web Portal.',
    image: './assets/projects/website-development-suite.jpg',
    liveUrl: 'https://saikrishna-bethamcharla.github.io/vasudhapharma/',
    github: 'https://github.com/saikrishna-bethamcharla/vasudhapharma',
    websites: [
      {
        id: 'vasudha-pharma-global',
        name: 'Vasudha Pharma Chem Limited',
        category: 'Global Enterprise Portal • 80+ Export Nations • Zoho CRM',
        logline: 'Corporate pharmaceutical portal for cGMP APIs, intermediates, and pellets, serving export markets in 80+ countries with interactive 3D global market footprint, automated Zoho CRM web-to-lead funnels, and 6-language localization.',
        image: './assets/projects/vasudha-pharma-site.jpg',
        liveUrl: 'https://saikrishna-bethamcharla.github.io/vasudhapharma/',
        github: 'https://github.com/saikrishna-bethamcharla/vasudhapharma',
        tags: ['Zoho CRM Lead Routing', '3D Interactive Globe', '6 Languages', 'cGMP API Catalog', 'SalesIQ Live Chat'],
        metrics: ['80+ Nations', '6 Languages', 'Zoho CRM Automated', 'cGMP Compliant'],
      },
      {
        id: 'zailabs-corporate',
        name: 'Zai Labs Private Limited',
        category: 'Corporate AI Agency Platform • Dark Cinematic UX • 3D Physics',
        logline: 'Production digital headquarters for Zai Labs built with dark cinematic design, real-time 3D card tilt & spotlight physics, laser progress telemetry, interactive CMS case study viewer, and custom video theater.',
        image: './assets/projects/zailabs-site.png',
        liveUrl: 'https://zailabs.co.in/',
        tags: ['Dark Cinematic UX', '3D Card Tilt & Physics', 'Laser Progress Telemetry', 'Video Theater Modal', 'Interactive CMS'],
        metrics: ['Optimized Asset Loading', 'Interactive 3D Experience', 'Responsive Layout', 'Production Live'],
      },
      {
        id: 'pranic-healing-aptelangana',
        name: 'Pranic Healing — AP & Telangana Chapter',
        category: 'Energy Healing Portal • Twin Hearts Live RSVP • GMCKS Courses',
        logline: 'Official digital portal for World Pranic Healing Foundation & Institute for Inner Studies (AP & Telangana Chapter), featuring dynamic aura energy visualizers, 8:40 PM Twin Hearts meditation WhatsApp booking, and GMCKS course directory.',
        image: './assets/projects/pranic-healing-site.jpg',
        liveUrl: 'https://www.pranichealingaptelangana.com/',
        tags: ['Twin Hearts 8:40 PM RSVP', 'Dynamic Energy Aura', 'GMCKS Course Directory', 'WhatsApp Booking Bridge', 'Digital Literature Library'],
        metrics: ['Live RSVP Booking', 'Dual State Chapter', 'GMCKS Certified', 'Responsive Layout'],
      },
      {
        id: 'rashmi-katari-wellness',
        name: 'Dr. Rashmi Katari — Virupaksha Niramayata',
        category: 'Mindful Web Sanctuary • React 19 & Lenis Momentum • Living Physics',
        logline: 'Award-caliber digital sanctuary for Dr. Rashmi Katari (Doctor of Naturopathy) built with React 19 and Lenis momentum scrolling, featuring an ambient living night-sky landscape canvas with starlight reflections, interactive Five Elements journey, and sacred sanctuary foundation portal.',
        image: './assets/projects/rashmi-landscape.png',
        liveUrl: 'https://virupakshawellness.com/',
        tags: ['React 19 & Lenis', 'Living Night-Sky Canvas', 'Five Elements Architecture', 'Kinetic Typography', 'Holistic Sanctuary'],
        metrics: ['React Architecture', 'Living Canvas Physics', 'Lenis Momentum', 'Production Live'],
      },
    ],
    stack: ['HTML5', 'Modern JavaScript (ES6+)', 'TypeScript', 'React 19', 'CSS3 / Tailwind', '3D Canvas & Physics', 'Lenis Momentum', 'Zoho CRM Web-to-Lead', 'Cloud Deployment'],
    build: [
      'Engineered and launched 4 complete production web platforms spanning global corporate pharmaceuticals, an AI agency digital portal, an energy healing state chapter portal, and an ambient holistic sanctuary.',
      'Configured automated customer acquisition funnels incorporating Zoho CRM web-to-lead scripts, SalesIQ chat, and multi-language routing for international markets.',
      'Architected dark cinematic user interfaces with 3D card tilt physics, living landscape starlight canvases, and instant WhatsApp booking bridges for live event attendance.',
      'Managed full-scope client deliverables covering responsive frontends, managed cloud hosting, DNS configuration, and standardized brand documentation across work orders, quotes, and invoices.',
    ],
    features: [
      'Vasudha Global: Interactive 3D export globe, 6-language localization & ESG hub',
      'Zai Labs Portal: Dark cinematic UX, 3D card tilt physics & video theater',
      'Pranic Healing: Dynamic energy aura visualizer & 8:40 PM Twin Hearts WhatsApp RSVP',
      'Rashmi Katari: Ambient living starlight landscape, Five Elements & Lenis momentum',
      'Zoho CRM automation, SalesIQ live chat & regulatory compliance displays',
      'Fully responsive, mobile-first performance architecture with sub-second loads',
    ],
    metrics: [
      { value: '4 Platforms', label: 'production web platforms deployed' },
      { value: '80+ Nations', label: 'global export market footprint' },
      { value: 'Zoho CRM', label: 'automated lead capture funnels' },
      { value: 'Live Portals', label: 'pharma, agency, healing & wellness' },
      { value: 'Full-Scope', label: 'architecture, CRM, hosting & brand' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'ai-cinematic-pipeline',
    title: 'Multi-Shot AI Film Direction',
    year: '2026',
    genre: 'AI Cinema • Generative Filmmaking • Character Continuity',
    logline: 'End-to-end multi-shot AI filmmaking pipeline with structured bilingual prompt engineering, shot bibles, character continuity, and commercial theatrical trailer editing.',
    liveUrl: 'https://youtu.be/r9kHcvYWZ4c',
    videos: [
      {
        id: 'the-door-at-11-47',
        title: 'The Door at 11:47 — Official Movie Trailer',
        category: 'Original AI Feature Trailer • 100% AI Generated • Custom SFX & Pacing',
        logline: 'Complete cinematic movie trailer generated 100% with generative AI and edited with commercial theatrical trailer pacing, beat-synced match cuts, and custom cinematic Foley sound effects.',
        youtubeId: 'r9kHcvYWZ4c',
        youtubeUrl: 'https://youtu.be/r9kHcvYWZ4c',
        thumbnail: 'https://i.ytimg.com/vi/r9kHcvYWZ4c/hqdefault.jpg',
        author: 'Zai Labs Media',
        aspect: '16/9',
        tags: ['100% AI Generated', 'Theatrical Movie Trailer', 'Trailer Style Cuts', 'Custom SFX & Sound Design', 'Zai Labs Media'],
        metrics: ['100% AI Generated', 'Beat-Synced Cuts', 'Custom SFX', 'Cinematic Grade'],
      },
      {
        id: 'odyssey-ai-film',
        title: 'Odyssey — AI Mythic Short Film',
        category: 'Generative AI Cinema • Mythic Short • Virtual Camera Staging',
        logline: 'The mythic epic condensed into a cinematic short. The ancient voyage rebuilt shot for shot with generative AI engines — sea, storm, and homecoming staged entirely in AI.',
        youtubeId: 'pEAK2S4oGME',
        youtubeUrl: 'https://youtu.be/pEAK2S4oGME',
        thumbnail: 'https://i.ytimg.com/vi/pEAK2S4oGME/hqdefault.jpg',
        author: 'Zai Labs Media',
        aspect: '16/9',
        tags: ['Generative AI Cinema', 'Mythic Odyssey', 'Virtual Camera Staging', 'Cinematic VFX', 'Zai Labs Media'],
        metrics: ['100% AI Staged', 'VFX Storm Simulation', 'Epic Score', 'Cinematic Lighting'],
      },
      {
        id: 'neo-belva-kushi-intro',
        title: 'Neo Belva Institutional Intro — Consistent Character "Kushi"',
        category: 'Character Continuity Pipeline • AI Mascot & Institutional Host • Mobile Storytelling',
        logline: 'Original institutional introduction for Neo Belva powered by an AI-generated consistent kid character named Kushi, demonstrating multi-shot facial, wardrobe, and voice continuity across an engaging narrative.',
        youtubeId: 'gEVCZi4RzRE',
        youtubeUrl: 'https://youtube.com/shorts/gEVCZi4RzRE',
        thumbnail: 'https://i.ytimg.com/vi/gEVCZi4RzRE/hqdefault.jpg',
        author: 'Zai Labs Media',
        aspect: '9/16',
        tags: ['Consistent Character Pipeline', 'AI Mascot "Kushi"', 'Neo Belva Institution', 'Facial & Wardrobe Continuity', 'Zai Labs Media'],
        metrics: ['Consistent Kid Character', 'Multi-Shot Continuity', 'Institutional Host', 'AI Character Pipeline'],
      },
      {
        id: 'abacus-campus-film',
        title: 'Abacus Campus — The Mind Behind the Numbers',
        category: 'Cognitive Education Commercial • 9:16 Vertical Reel • Visual Journey',
        logline: 'Follows a fluid visual journey: Paper → Mind → Reality. The film begins with pencil drawings, moves into abstract representations of mathematical thinking, and resolves in a realistic classroom where a child solves complex calculations with effortless focus.',
        youtubeId: 'cd9pQqzCpTA',
        youtubeUrl: 'https://youtube.com/shorts/cd9pQqzCpTA',
        thumbnail: 'https://i.ytimg.com/vi/cd9pQqzCpTA/hqdefault.jpg',
        author: 'Zai Labs Media',
        aspect: '9/16',
        tags: ['9:16 Vertical Reel', 'Abacus Campus Brain Gym', 'Cognitive Visual Journey', 'Pencil to Reality', 'Zai Labs Media'],
        metrics: ['9:16 Vertical Reel', 'Paper → Mind Journey', 'Cognitive Education', 'Sound Design'],
      },
    ],
    stack: ['Seedance 2.0', 'Kling 3.0', 'Higgsfield', 'ComfyUI', 'Bilingual Prompt Bibles (EN+ZH)', 'DaVinci Resolve', 'Character Consistency Workflows'],
    build: [
      'Directed and generated 100% AI-generated cinematic movie trailer "The Door at 11:47" and mythic short "Odyssey", creating shot bibles and reference consistency pipelines.',
      'Developed complete character consistency pipeline for Neo Belva, generating recurring character "Kushi" across multiple sequential camera angles and expressions.',
      'Authored vertical 9:16 cognitive educational film for Abacus Campus ("The Mind Behind the Numbers") tracing the pencil-to-reality mental arithmetic visual story.',
      'Cut and assembled trailers with industry-standard pacing, tension builds, rhythmic beat synchronization, and custom Foley sound design in post-production.',
    ],
    features: [
      'Official Movie Trailer: "The Door at 11:47" (100% AI Generated Suspense-Thriller)',
      'Mythic AI Short: "Odyssey" (Generative sea, storm and homecoming staging)',
      'Character Continuity: Neo Belva Institutional Intro (Consistent Kid Character "Kushi")',
      'Cognitive Film: Abacus Campus "The Mind Behind the Numbers" (9:16 Vertical Reel)',
      'Custom Foley SFX, sound design, and beat-synced audio rhythm',
      'Reference-image consistency for characters, wardrobe, and environments',
    ],
    metrics: [
      { value: '4 Films', label: 'cinematic trailers & vertical reels' },
      { value: '100% AI', label: 'generative AI story & VFX pipelines' },
      { value: 'Character AI', label: 'consistent recurring kid character' },
      { value: 'Custom SFX', label: 'cinematic sound design & Foley' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'post-production-motion',
    title: 'Cinematic Post & Motion Graphics',
    year: '2025 – 2026',
    genre: 'DaVinci Resolve • Documentary & Commercial Film',
    logline: 'Beat-synced editorial assembly, visual effects compositing, narrative color grading, sound design, and full commercial & documentary film productions.',
    liveUrl: 'https://youtu.be/yajmIsC6Pno',
    videos: [
      {
        id: 'green-field-school-promo',
        title: 'Green Field School International — Official Cinematic Promo',
        category: 'Commercial Institutional Campaign • Drone Cinematography • Beat-Synced Editorial',
        logline: 'High-energy cinematic promotional film produced for Green Field School International, showcasing campus architecture, student life, and athletic facilities through dynamic camera choreography, beat-synced rhythm cutting, and commercial color grading.',
        youtubeId: 'yajmIsC6Pno',
        youtubeUrl: 'https://youtu.be/yajmIsC6Pno',
        thumbnail: 'https://i.ytimg.com/vi/yajmIsC6Pno/hqdefault.jpg',
        author: 'Zai Labs Media',
        aspect: '16/9',
        tags: ['Cinematic Institutional Promo', 'Green Field School International', 'Beat-Synced Editorial', 'Dynamic Pacing & Montage', 'Commercial Color Science'],
        metrics: ['Commercial Promo', 'Campus Cinematography', 'Beat-Synced Cuts', 'Color Graded'],
      },
      {
        id: 'neo-belva-empowering-child',
        title: 'Neo Belva — Empowering Every Child',
        category: 'Commercial & Brand Film • 4K Cinematography • Pediatric Healthcare',
        logline: 'An uplifting, cinematic promotional film capturing sensory therapy milestones, play-based early intervention, and parent-therapist collaboration with warmth and emotional resonance.',
        youtubeId: 'o1bhc6LN30Y',
        youtubeUrl: 'https://youtu.be/o1bhc6LN30Y',
        thumbnail: 'https://i.ytimg.com/vi/o1bhc6LN30Y/hqdefault.jpg',
        author: 'Zai Labs Media',
        aspect: '16/9',
        tags: ['4K Commercial', 'Pediatric Child Development', 'Sensory Integration', 'Emotional Pacing', 'Zai Labs Media'],
        metrics: ['4K Commercial', 'Pediatric Therapy', 'Documentary Lighting', 'Color Science'],
      },
      {
        id: 'char-dham-yatra-film',
        title: 'Char Dham Yatra — Sacred Pilgrimage Commercial',
        category: 'Travel Commercial • High-Altitude Cinematography • Cultural Montage',
        logline: 'A cinematic invitation to the Char Dham Yatra. Ancient Himalayan temples, mountain roads, and the sacred pilgrimage between them, graded warm and edited as one continuous spiritual journey.',
        youtubeId: 'q_vyKUlcIUA',
        youtubeUrl: 'https://youtu.be/q_vyKUlcIUA',
        thumbnail: 'https://i.ytimg.com/vi/q_vyKUlcIUA/hqdefault.jpg',
        author: 'Zai Labs Media',
        aspect: '16/9',
        tags: ['Travel Commercial', 'Char Dham Yatra', 'Himalayan Pilgrimage', 'Warm Color Science', 'Continuous Journey Edit'],
        metrics: ['Travel Commercial', 'High-Altitude 4K', 'Rhythmic Montage', 'Cinematic Grade'],
      },
      {
        id: 'godavari-ghee-commercial',
        title: 'Godavari Ghee — Heritage FMCG Commercial',
        category: 'Product Commercial • Sensory Pack-Shots • Food Cinematography',
        logline: 'Product-first commercial advertising. Golden texture, warm pour, and aromatic steam held long enough to be felt, with the heritage pack landing clean at the end.',
        youtubeId: 'jTgPh0sl-Dk',
        youtubeUrl: 'https://youtu.be/jTgPh0sl-Dk',
        thumbnail: 'https://i.ytimg.com/vi/jTgPh0sl-Dk/hqdefault.jpg',
        author: 'Zai Labs Media',
        aspect: '16/9',
        tags: ['FMCG Commercial', 'Food Cinematography', 'Sensory Pack-Shots', 'Slow-Motion Pour', 'Heritage FMCG'],
        metrics: ['Product Commercial', 'Sensory Macro Shots', 'Lighting & Steam', 'Commercial Grade'],
      },
      {
        id: 'gmcks-legacy-documentary',
        title: 'Grandmaster Choa Kok Sui | The Man Behind a Legacy of Pranic Healing',
        category: 'Artistic Tribute Documentary • Pencil Sketch Style Animation • Narrative Pacing',
        logline: 'Biographical documentary tribute exploring the life, spiritual teachings, and global legacy of Grandmaster Choa Kok Sui (GMCKS), rendered completely in an expressive pencil-sketch visual art style with documentary narrative editing and sound design.',
        youtubeId: 'v4IFsHmIQDE',
        youtubeUrl: 'https://youtu.be/v4IFsHmIQDE',
        thumbnail: 'https://i.ytimg.com/vi/v4IFsHmIQDE/hqdefault.jpg',
        author: 'Zai Labs Media',
        aspect: '16/9',
        tags: ['Pencil-Sketch Animation Style', 'GMCKS Documentary', 'Narrative Editing', 'Documentary Sound Design', 'Pranic Healing Tribute'],
        metrics: ['Pencil-Sketch Style', 'Biographical Documentary', 'Narrative Pacing', 'Tribute Film'],
      },
    ],
    stack: ['DaVinci Resolve', 'Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Audition', 'Pencil-Sketch Style Animation', 'CapCut'],
    build: [
      'Produced and cut high-energy cinematic promotional commercial for Green Field School International with rhythmic pacing, drone shots, and color science.',
      'Produced pediatric healthcare commercial for Neo Belva Child Development Centre capturing play-based early therapy and emotional parent-therapist collaboration in 4K.',
      'Cinematography and warm narrative editing for Char Dham Yatra Himalayan pilgrimage commercial series.',
      'Directed sensory food cinematography and pack advertising for Godavari Ghee focusing on texture, slow-motion pour, and steam dynamics.',
      'Produced and directed biographical documentary film honoring Grandmaster Choa Kok Sui (GMCKS), executed entirely in a distinctive hand-drawn pencil-sketch artistic style with audio finishing in Audition.',
    ],
    features: [
      'Institutional Promo: Green Field School International (Campus & Architecture)',
      'Healthcare Brand Film: Neo Belva — Empowering Every Child (4K Pediatric Therapy)',
      'Travel Commercial: Char Dham Yatra (High-Altitude Himalayan Cinematography)',
      'FMCG Pack Film: Godavari Ghee (Sensory Macro Food Advertising)',
      'Documentary Film: GMCKS — The Man Behind a Legacy of Pranic Healing (Pencil-Sketch Art)',
      'Beat-synced precision editing & montage cutting in DaVinci Resolve & Premiere Pro',
    ],
    metrics: [
      { value: '5 Films', label: 'commercial, travel & documentary productions' },
      { value: 'Sketch Art', label: 'full pencil-sketch visual style' },
      { value: 'Beat-Synced', label: 'rhythmic editorial pacing & cuts' },
      { value: '4K Color', label: 'DaVinci Resolve narrative grading' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'brand-identity-operations',
    title: 'Brand Systems & Client Delivery',
    year: '2026',
    genre: 'Design Systems • Luxury Packaging • Performance Marketing',
    logline: 'Standardized client documentation frameworks, Sanskrit-rooted luxury packaging suites (Aura Organics 5 SKUs), FMCG heritage brand staging, and Meta/YouTube performance growth funnels.',
    image: './assets/projects/aura-campaign-poster.png',
    stack: ['Adobe Illustrator', 'Adobe Photoshop', 'Luxury Packaging Design', '3D Product Staging', 'Meta Performance Ads', 'Typography Systems', 'Client Operations'],
    build: [
      'Created luxury Sanskrit-rooted botanical wellness brand identity, gold-embossed lotus wordmark, and 5-SKU packaging language for Aura Organics (Kaya, Nila, Amara, Vana, Kesh).',
      'Designed heritage FMCG product packaging and commercial macro staging for Godavari Ghee.',
      'Architected high-intent Click-to-Message Meta ad funnels and YouTube in-stream discovery, driving 900+ qualified leads and reducing CAC by 42%.',
      'Standardized end-to-end client business operations — formal work orders, technical quotations, and invoices aligned to a consistent brand standard.',
      'Organized shared team conventions, creative-to-technical delivery pipelines, and production SOPs across Zai Labs engagements.',
    ],
    features: [
      'Aura Organics: 5-product luxury packaging language & gold-embossed identity',
      'Godavari Ghee: Heritage FMCG brand packaging & macro sensory pack shots',
      'Performance Marketing: High-conversion Meta funnels (900+ leads, -42% CAC)',
      'Standardized formal work orders, technical quotations & invoices',
      'Curated typography systems, color bibles & vector brand asset libraries',
      'Cross-functional creative-to-technical pipeline SOPs for client delivery',
    ],
    metrics: [
      { value: '5 SKUs', label: 'Aura Organics luxury packaging suite' },
      { value: '900+ Leads', label: 'performance marketing funnels' },
      { value: 'Standardized', label: 'work orders, quotations & invoices' },
      { value: '42% Cut', label: 'customer acquisition cost reduction' },
    ],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'zai-labs-lead',
    title: 'Creative & Technical Lead',
    org: 'Zai Labs Private Limited',
    detail: 'Leading creative and technical delivery across AI video, web development, and graphic design.',
    laurel: 'Leadership Role',
  },
  {
    id: 'kingston-pgd',
    title: 'Postgraduate Diploma (PGD)',
    org: 'Kingston University, London',
    detail: 'Completed postgraduate qualification in 2022 with focus on multidisciplinary creative execution.',
    laurel: 'Kingston Alum',
  },
  {
    id: 'ai-filmmaking-direction',
    title: 'Multi-Shot AI Filmmaking',
    org: 'Seedance 2.0 • Kling 3.0 • Higgsfield',
    detail: 'Developed proprietary bilingual (EN+ZH) shot bibles and reference consistency pipelines for cinematic productions.',
    laurel: 'AI Direction',
  },
  {
    id: 'website-development-platforms',
    title: 'Website Development & Platforms',
    org: 'Vasudha Pharma • Zai Labs • Pranic Healing • Rashmi Katari',
    detail: 'Architected 4 production web platforms across corporate pharma (80+ export nations, Zoho CRM), AI agency portal, GMCKS energy healing, and Dr. Rashmi Katari holistic sanctuary.',
    laurel: 'Web Platforms',
    link: 'https://saikrishna-bethamcharla.github.io/vasudhapharma/',
  },
  {
    id: 'pranic-healing-platform',
    title: 'Pranic Healing State Chapter Portal',
    org: 'World Pranic Healing Foundation (AP & Telangana)',
    detail: 'Engineered official chapter portal featuring dynamic energy aura visualizers, GMCKS course directory, and 8:40 PM Twin Hearts WhatsApp RSVP.',
    laurel: 'Healing Portal',
    link: 'https://www.pranichealingaptelangana.com/',
  },
  {
    id: 'rashmi-katari-sanctuary',
    title: 'Dr. Rashmi Katari Holistic Sanctuary',
    org: 'Virupaksha Niramayata & Naturopathy',
    detail: 'Engineered digital sanctuary with React 19, Lenis momentum scrolling, and ambient living starlight landscape canvas.',
    laurel: 'Living Web',
    link: 'https://virupakshawellness.com/',
  },
  {
    id: 'aura-organics-suite',
    title: 'Aura Organics Botanical Luxury Suite',
    org: 'Aura Organics Botanical Wellness',
    detail: 'Created luxury Sanskrit-rooted identity, gold-embossed lotus wordmark, and 5-SKU packaging language (Kaya, Nila, Amara, Vana, Kesh).',
    laurel: 'Luxury Brand',
  },
  {
    id: 'brand-standardization',
    title: 'Standardized Brand System & Operations',
    org: 'Client Operations & Scoping',
    detail: 'Unified work orders, technical quotations, and invoices into a consistent formal brand template with shared team SOPs.',
    laurel: 'Brand System',
  },
];

export type ProfessionalHighlight = { issuer: string; name: string; link?: string };

export const professionalHighlights: ProfessionalHighlight[] = [
  { issuer: 'Education', name: 'Postgraduate Diploma (PGD) • Kingston University, London' },
  { issuer: 'Professional Experience', name: 'Creative & Technical Lead • Zai Labs' },
  { issuer: 'Web Architecture', name: 'Vasudha Pharma Chem Global Flagship (80+ Export Nations & Zoho CRM)', link: 'https://saikrishna-bethamcharla.github.io/vasudhapharma/' },
  { issuer: 'Zai Labs Platform', name: 'Corporate AI Agency Portal & 3D Interactive UX', link: 'https://zailabs.co.in/' },
  { issuer: 'Pranic Healing', name: 'AP & Telangana Chapter Web Portal & 8:40 PM WhatsApp RSVP Bridge', link: 'https://www.pranichealingaptelangana.com/' },
  { issuer: 'Holistic Sanctuary', name: 'Dr. Rashmi Katari Living Landscape & Naturopathy Platform', link: 'https://virupakshawellness.com/' },
  { issuer: 'Generative AI Cinema', name: 'Multi-shot AI direction, character LoRAs & "The Door at 11:47"' },
  { issuer: 'Commercial Video', name: 'Neo Belva, Abacus Campus, Char Dham Yatra & Godavari Ghee' },
  { issuer: 'Luxury Brand Packaging', name: 'Aura Organics 5-SKU botanical luxury range & identity' },
  { issuer: 'Performance Marketing', name: 'High-intent Meta & YouTube funnels (900+ leads, -42% CAC)' },
  { issuer: 'Client Delivery', name: 'Standardized work orders, technical scoping, and cloud hosting' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-filmmaking',
    title: 'AI Video & Filmmaking',
    subtitle: 'Generative cinema & shot bibles',
    skills: [
      { name: 'Seedance 2.0', mono: 'Se', note: 'AI Video' },
      { name: 'Kling 3.0', mono: 'Kl', note: 'AI Video' },
      { name: 'Higgsfield', mono: 'Hg' },
      { name: 'Stable Diffusion', mono: 'Sd', note: 'Generative' },
      { name: 'Midjourney', mono: 'Mj' },
      { name: 'Runway Gen-3', mono: 'Rw' },
      { name: 'ComfyUI', mono: 'Cu', note: 'Node Workflows' },
      { name: 'Structured Prompting', mono: 'Pr', note: 'Bilingual EN+ZH' },
      { name: 'Shot Bibles', mono: 'Sb' },
      { name: 'Reference Consistency', mono: 'Rc' },
      { name: 'Multi-Shot Planning', mono: 'Ms' },
    ],
  },
  {
    id: 'post-production',
    title: 'Video Editing & Post',
    subtitle: 'Beat-synced editorial & compositing',
    skills: [
      { name: 'DaVinci Resolve', mono: 'Dr', note: 'Editorial & Color' },
      { name: 'Adobe Premiere Pro', mono: 'Pr' },
      { name: 'Adobe After Effects', mono: 'Ae', note: 'Motion & VFX' },
      { name: 'CapCut', mono: 'Cc' },
      { name: 'Adobe Audition', mono: 'Au', note: 'Sound Design' },
      { name: 'Beat-Synced Editing', mono: 'Bs' },
      { name: 'Match-Cutting', mono: 'Mc' },
      { name: 'Montage Assembly', mono: 'Ma' },
      { name: 'Color Grading', mono: 'Cg', note: 'LUTs & Mood' },
    ],
  },
  {
    id: 'web-dev',
    title: 'Software & Web Development',
    subtitle: 'Frontend, graphics engines & client systems',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Automation & Media' },
      { name: 'JavaScript (ES6+)', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'HTML5 / Canvas', mono: 'Cv', note: 'Real-time Graphics' },
      { name: 'CSS3 / Tailwind', mono: 'Cs' },
      { name: 'WebCodecs API', mono: 'Wc', note: 'Alpha Video' },
      { name: 'CRM Integration', mono: 'Cr' },
      { name: 'Hosting & DNS', mono: 'Hs' },
      { name: 'Git & GitHub', mono: 'Gt' },
    ],
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design & 3D',
    subtitle: 'Vector branding, visual systems & 3D',
    skills: [
      { name: 'Adobe Illustrator', mono: 'Ai' },
      { name: 'Adobe Photoshop', mono: 'Ps' },
      { name: 'Blender', mono: 'Bl', note: '3D Layout' },
      { name: 'Color Palettes', mono: 'Cp' },
      { name: 'Typography Systems', mono: 'Ty' },
      { name: 'Branded Visual Assets', mono: 'Va' },
      { name: 'Template Design', mono: 'Td' },
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership & Client Delivery',
    subtitle: 'Production pipelines & conventions',
    skills: [
      { name: 'Creative & Tech Direction', mono: 'Cd', note: 'Zai Labs' },
      { name: 'Production Pipelines', mono: 'Pp' },
      { name: 'Team Coordination', mono: 'Tc' },
      { name: 'Client Scoping', mono: 'Cs' },
      { name: 'Work Orders & Invoices', mono: 'Wo' },
      { name: 'Brand Documentation', mono: 'Bd' },
      { name: 'End-to-End Ownership', mono: 'Eo' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'Seedance 2.0': ['Multi-Shot AI Filmmaking', 'Zai Labs Productions'],
  'Kling 3.0': ['Multi-Shot AI Filmmaking', 'Commercial Client Campaigns'],
  Higgsfield: ['AI Video Generation', 'Concept Prototyping'],
  'Stable Diffusion': ['Generative Visuals', 'Stylized Concept Frames'],
  Midjourney: ['Visual Concept Art', 'Moodboards'],
  'Runway Gen-3': ['AI Video Extensions', 'Camera Moves'],
  ComfyUI: ['Custom Node Pipelines', 'Consistent Characters'],
  'Structured Prompting': ['Bilingual (EN+ZH) Prompts', 'Character Continuity'],
  'Shot Bibles': ['Multi-Scene Narrative Consistency'],
  'DaVinci Resolve': ['Beat-Synced Editing', 'Cinematic Color Grading'],
  'Adobe Premiere Pro': ['Commercial Montage', 'Master Assembly'],
  'Adobe After Effects': ['Motion Graphics', 'Visual Compositing'],
  CapCut: ['Short-Form Beat-Synced Edits'],
  'Adobe Audition': ['Audio Mastering', 'Sound Design'],
  Python: ['Automation Scripts', 'Batch Media Processors'],
  'JavaScript (ES6+)': ['Frontend Client Platforms', 'StreamHub Engine'],
  TypeScript: ['Component Architecture', 'Interactive Web Apps'],
  'HTML5 / Canvas': ['Real-Time Graphics', 'StreamHub Showcase'],
  'CSS3 / Tailwind': ['Responsive Layouts & Motion'],
  'WebCodecs API': ['Video & Media Processing'],
  'CRM Integration': ['Zai Labs Client Delivery', 'Lead Automation'],
  'Hosting & DNS': ['Client Web Engagements', 'Cloud Deployment'],
  'Adobe Illustrator': ['Vector Assets', 'Brand Systems'],
  'Adobe Photoshop': ['Digital Art', 'Document Templates'],
  Blender: ['3D Modeling', 'Camera Choreography'],
  'Creative & Tech Direction': ['Zai Labs Leadership', 'End-to-End Delivery'],
  'Production Pipelines': ['Cross-Functional Team Coordination'],
  'Work Orders & Invoices': ['Standardized Brand Documentation'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Academic Foundation',
    period: '2022',
    synopsis: 'Postgraduate Diploma (PGD) at Kingston University, London — establishing core creative and multidisciplinary foundations.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Kingston Years',
        description: 'Postgraduate Diploma (PGD) at Kingston University — rigorous creative methodologies, research, and technical foundations.',
        tags: ['Kingston University', 'PGD', 'London'],
        runtime: 'Graduated 2022',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Visual Craft & Post-Production',
    period: '2023 – 2024',
    synopsis: 'Mastering the post-production suite — DaVinci Resolve, Premiere Pro, After Effects, and graphic design systems.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Editorial Suite',
        description: 'Beat-synced editing, match-cutting, and narrative montages in DaVinci Resolve and Adobe Premiere Pro.',
        tags: ['DaVinci Resolve', 'Premiere Pro', 'Editorial'],
        runtime: 'Post-Production',
        palette: amber,
      },
      {
        code: 'S02 E02',
        title: 'Motion & Visual Identity',
        description: 'Adobe After Effects motion graphics, compositing, and brand identity design in Illustrator and Photoshop.',
        tags: ['After Effects', 'Illustrator', 'Photoshop'],
        runtime: 'Motion & Brand',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Software & Web Systems',
    period: '2025',
    synopsis: 'Python scripting for media automation, front-end development with HTML/CSS/JavaScript, CRM integration, and cloud architectures.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Python Automation & Media Processing',
        description: 'Developing automated media processing scripts, batch utilities, and workflow tools in Python.',
        tags: ['Python', 'Automation', 'Batch Media'],
        runtime: 'Software Scripting',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Interactive Frontend & CRM',
        description: 'Building responsive web applications, CRM configuration, customer lead routing, and cloud hosting.',
        tags: ['JavaScript', 'HTML5', 'CRM Integration'],
        runtime: 'Web & Systems',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Creative & Technical Lead',
    period: 'August 2026 – Present',
    synopsis: 'Creative & Technical Lead at Zai Labs Private Limited — directing multi-shot AI filmmaking pipelines and full-scope client deliveries.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'AI Filmmaking Direction',
        description: 'Directing multi-shot AI filmmaking from concept through post-production using Seedance 2.0, Kling 3.0, and bilingual shot bibles.',
        tags: ['Seedance 2.0', 'Kling 3.0', 'Shot Bibles'],
        runtime: 'Zai Labs',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'Full-Scope Production Lead',
        description: 'Coordinated complete client website, CRM, and hosting engagements while leading a cross-functional creative/technical team.',
        tags: ['Full-Scope', 'Zai Labs', 'Leadership'],
        runtime: 'Production Lead',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'Brand Standards & Documentation',
        description: 'Standardized client business operations — formal work orders, technical quotations, and brand design systems.',
        tags: ['Brand Templates', 'Work Orders', 'Invoicing'],
        runtime: 'Operations',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: 'Next-Gen Platforms & Cinema',
    period: 'Now Streaming',
    synopsis: 'Building interactive StreamHub mobile QR platforms and advancing multi-shot generative AI filmmaking pipelines.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'StreamHub & QR Ecosystem',
        description: 'Creating frictionless mobile testing and live video showcase platforms with real-time QR generation.',
        tags: ['StreamHub', 'QR Bridge', 'Video Theater'],
        runtime: 'Interactive Platform',
        palette: ocean,
      },
      {
        code: 'S05 E02',
        title: 'Autonomous AI Cinema Pipelines',
        description: 'Directing multi-scene continuous narratives with Seedance 2.0, Kling 3.0, and bilingual character bibles.',
        tags: ['AI Cinema', 'Bilingual Bibles', 'Multi-Shot'],
        runtime: 'Generative Cinema',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette; image: string };

export const topPicks: TopPick[] = [
  { label: 'Primary Role', title: 'Creative & Tech Lead', detail: 'Zai Labs Private Limited • August 2026 – Present', palette: crimson, image: './assets/picks/pick-1.webp' },
  { label: 'AI Video Engine', title: 'Seedance 2.0 & Kling 3.0', detail: "'The Door at 11:47' Trailer • Multi-shot AI filmmaking", palette: crimson, image: './assets/picks/pick-2.webp' },
  { label: 'Academic Credential', title: 'Kingston University', detail: 'Postgraduate Diploma (PGD) • London', palette: violet, image: './assets/picks/pick-3.webp' },
  { label: 'Prompt Mastery', title: 'Bilingual (EN+ZH)', detail: 'Structured prompts for character & environment consistency', palette: ocean, image: './assets/picks/pick-4.webp' },
  { label: 'Website Development', title: 'Production Web Platforms', detail: 'Vasudha Pharma (80+ nations), Zai Labs, Pranic Healing & Rashmi Katari', palette: ocean, image: './assets/picks/pick-5.webp' },
  { label: 'Energy Healing Web', title: 'Pranic Healing Portal', detail: 'AP & Telangana chapter, dynamic aura visualizer & 8:40 PM Twin Hearts RSVP', palette: jade, image: './assets/picks/pick-6.webp' },
  { label: 'Post-Production', title: 'DaVinci Resolve', detail: 'GMCKS pencil-sketch documentary & beat-synced editorial', palette: crimson, image: './assets/picks/pick-7.webp' },
  { label: 'Motion Graphics', title: 'After Effects', detail: 'Compositing, visual effects & title animations', palette: violet, image: './assets/picks/pick-8.webp' },
  { label: 'Visual Design', title: 'Adobe Illustrator & Photoshop', detail: 'Branded visual assets & typography systems', palette: amber, image: './assets/picks/pick-9.webp' },
  { label: 'Team Leadership', title: 'Production SOPs', detail: 'Standardized work orders, quotations & client documentation', palette: crimson, image: './assets/picks/pick-10.webp' },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Leadership',
    title: 'Creative & Technical Lead',
    lines: ['Zai Labs Private Limited', 'August 2026 – Present', 'Hyderabad, India'],
    chips: ['AI Filmmaking', 'Web Development', 'Graphic Design'],
  },
  {
    kicker: 'Education',
    title: 'Kingston University',
    lines: ['Postgraduate Diploma (PGD)', 'London, United Kingdom · 2022'],
    chips: ['Kingston PGD'],
  },
  {
    kicker: 'AI Direction',
    title: 'Cinematic AI Video',
    lines: ['Multi-shot filmmaking pipeline from concept through post-production', 'Seedance 2.0, Kling 3.0, Higgsfield & ComfyUI', 'Bilingual (EN+ZH) prompt engineering & shot bibles'],
    chips: ['Seedance 2.0', 'Kling 3.0', 'Higgsfield', 'Shot Bibles'],
  },
  {
    kicker: 'Post-Production',
    title: 'The Editorial Suite',
    lines: ['DaVinci Resolve, Adobe Premiere Pro & CapCut', 'Adobe After Effects for motion graphics & compositing', 'Beat-synced editing, sound design in Audition & match-cutting'],
    chips: ['DaVinci Resolve', 'Premiere Pro', 'After Effects'],
  },
  {
    kicker: 'Web Platform',
    title: 'Website Development & Delivery',
    lines: ['Full-scope architecture across corporate pharma, agency & wellness platforms', 'Vasudha Pharma (80+ nations), Zai Labs, Pranic Healing & Rashmi Katari', 'Frontend development with TypeScript, JavaScript, HTML5 & Tailwind'],
    chips: ['Website Development', 'Zoho CRM', 'JavaScript', 'TypeScript'],
  },
  {
    kicker: 'Creative Operations',
    title: 'Brand & Systems',
    lines: ['Adobe Illustrator & Photoshop for branded assets & vector design', 'Standardized work orders, quotations & invoices to brand template'],
    chips: ['Illustrator', 'Photoshop', 'Brand Systems'],
  },
];

export type ProfileId = 'saikrishna' | 'creative' | 'technical' | 'lead';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'saikrishna',
    name: 'Sai Krishna',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'originals', 'journey', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative / Director',
    blurb: 'AI filmmaking, video editing & motion first',
    color: '#ffb547',
    order: ['originals', 'picks', 'skills', 'journey', 'moments', 'about', 'story'],
  },
  {
    id: 'technical',
    name: 'Technical / Web',
    blurb: 'Web development, CRM integration & pipelines first',
    color: '#4cc9ff',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'lead',
    name: 'Client & Leadership',
    blurb: 'Experience, brand systems, leadership & resume first',
    color: '#46e3a8',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Awards & Highlights', meta: `${achievements.length} Moments • ${professionalHighlights.length} Highlights`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};

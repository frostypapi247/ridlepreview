import { useEffect, useState, type FormEvent } from 'react';
import { Link, Route, Switch, useLocation } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Check, ChevronRight, Clock3, Crosshair,
  Fingerprint, Mail, MapPin, Menu, Phone, Radar, Shield, ShieldCheck, Siren,
  Target, Users, X, Eye, Dog, Search, GraduationCap, BriefcaseBusiness,
  LockKeyhole, ScanEye, Route as RouteIcon, HeartHandshake,
} from 'lucide-react';

const pages = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/security-solutions', label: 'Security Solutions' },
  { href: '/our-approach', label: 'Our Approach' },
  { href: '/company-profile', label: 'Company Profile' },
  { href: '/contact', label: 'Contact' },
];

const serviceNames = [
  'Security Guard Service', 'Access Control', 'Dog Handling', 'Quick Armed Response',
  'Advisory Service', 'Risk Analysis', 'Undercover Security Guard', 'Private Investigations',
  'Mobile Patrols', 'Cash In Transit', 'Security Training Courses',
];
const industries = [
  'Private Sector', 'Real Estate', 'Individuals', 'Retail Sector', 'Office Parks',
  'Business Sector', 'Public Institutes', 'Shopping Malls',
];
const solutions = [
  'Physical Security', 'Access Control', 'K9 Security', 'Mobile Patrols',
  'Private Investigations', 'Risk Analysis', 'Electronic Security', 'Security Training',
  'Quick Armed Response', 'Cash In Transit',
];
const goals = [
  'Advanced Operational Systems', 'Advanced Electronic Security Systems',
  'Advanced Management Systems', 'Excellent Service Delivery', 'Client Satisfaction',
];
const serviceDescriptions: Record<string, string> = {
  'Security Guard Service': 'Professional guarding to support the security needs of people, premises and daily operations.',
  'Access Control': 'Structured access management for sites, facilities and authorised visitors.',
  'Dog Handling': 'K9 capability integrated into a considered, site-specific security plan.',
  'Quick Armed Response': 'An armed response offering designed around the needs of the client and the risk environment.',
  'Advisory Service': 'Practical security guidance informed by the operational context and client priorities.',
  'Risk Analysis': 'A clear assessment of vulnerabilities and practical measures to reduce exposure.',
  'Undercover Security Guard': 'Discreet security support for appropriate situations and client requirements.',
  'Private Investigations': 'Professional investigative support handled with discretion and care.',
  'Mobile Patrols': 'Visible mobile security presence supporting premises and surrounding environments.',
  'Cash In Transit': 'Security support for the movement of cash and other valuables.',
  'Security Training Courses': 'Training courses that strengthen awareness, readiness and security practice.',
};
const solutionIcons = [Shield, LockKeyhole, Dog, RouteIcon, Search, Crosshair, Radar, GraduationCap, Siren, BriefcaseBusiness];

function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  useEffect(() => setOpen(false), [location]);
  return <>
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-group"><a href="tel:+263719821140" data-testid="link-top-phone"><Phone size={12}/> +263 719 821 140</a><a href="mailto:riddlesecurity@gmail.com" data-testid="link-top-email"><Mail size={12}/> riddlesecurity@gmail.com</a></div>
        <div className="topbar-group"><span><MapPin size={12}/> Norton, Zimbabwe</span><span>Licensed &amp; insured</span></div>
      </div>
    </div>
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand" data-testid="link-brand-home">
          <img src="/images/riddle-crest.jpg" alt="Riddle Security shield crest" />
          <span><span className="brand-name">RIDDLE SECURITY</span><span className="brand-caption">PRIVATE LIMITED · ZIMBABWE</span></span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {pages.slice(1, 8).map((item) => <Link key={item.href} href={item.href} className={location === item.href ? 'active' : ''} data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}>{item.label}</Link>)}
        </nav>
        <Link href="/request-assessment" className="button button-primary nav-cta" data-testid="link-nav-assessment">REQUEST AN ASSESSMENT <ArrowRight size={14}/></Link>
        <button className="mobile-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)} data-testid="button-mobile-menu">{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <nav className="mobile-menu" aria-label="Mobile navigation">
        {pages.map(item => <Link key={item.href} href={item.href} data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`}>{item.label}</Link>)}
        <Link href="/request-assessment" className="mobile-assessment" data-testid="link-mobile-assessment">Request a Security Assessment <ArrowRight size={15}/></Link>
      </nav>}
    </header>
  </>;
}

function Footer() {
  return <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-intro">
          <div className="footer-brand"><img src="/images/riddle-crest.jpg" alt="Riddle Security shield crest"/><span><strong>Riddle Security</strong><small>PRIVATE LIMITED · ZIMBABWE</small></span></div>
          <p>Professional security, safeguarding and protection solutions for businesses, institutions and individuals.</p>
          <span className="eyebrow" style={{color:'#c7d3f5'}}>WE VALUE YOUR SECURITY NEEDS</span>
        </div>
        <div className="footer-col"><h3>Explore</h3>
          {pages.slice(1, 8).map(p => <Link key={p.href} href={p.href}>{p.label}</Link>)}
        </div>
        <div className="footer-col"><h3>Our services</h3>
          {serviceNames.slice(0, 6).map(x => <Link key={x} href="/services">{x}</Link>)}
          <Link href="/security-solutions">All security solutions</Link>
        </div>
        <div className="footer-col"><h3>Talk to our team</h3>
          <a href="tel:+263719821140">+263 719 821 140</a><a href="tel:+263783497993">+263 783 497 993</a>
          <a href="mailto:riddlesecurity@gmail.com">riddlesecurity@gmail.com</a>
          <span>619 Fletcher Road<br/>Norton, Zimbabwe</span>
          <Link href="/request-assessment">Request a security assessment <ArrowUpRight size={12}/></Link>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Riddle Security (Private) Limited. All rights reserved.</span><div className="footer-legal"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-conditions">Terms &amp; Conditions</Link></div></div>
    </div>
  </footer>;
}

function PageHero({ title, summary, eyebrow = 'RIDDLE SECURITY · ZIMBABWE' }: { title: string; summary: string; eyebrow?: string }) {
  return <section className="page-hero"><div className="container">
    <div className="breadcrumb"><Link href="/">Home</Link><ChevronRight size={12}/><span>{title}</span></div>
    <div className="eyebrow" style={{marginTop:25}}>{eyebrow}</div>
    <h1>{title}</h1><p>{summary}</p>
  </div></section>;
}

function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-head"><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function CtaBand({ title = 'A more considered approach to security.', text = 'Let’s understand your requirements and explore the right protection for your people, property and operations.' }: { title?: string; text?: string }) {
  return <section className="dark-band"><div className="container band-inner"><div className="band-copy"><div className="eyebrow">START A CONVERSATION</div><h2>{title}</h2><p>{text}</p></div><Link href="/request-assessment" className="button button-primary" data-testid="link-band-assessment">REQUEST A SECURITY ASSESSMENT <ArrowRight size={15}/></Link></div></section>;
}

function Home() {
  const highlights = [
    { icon: BadgeCheck, title: 'Licensed & insured', desc: 'Professional company credentials' },
    { icon: Clock3, title: 'Established 2022', desc: 'Built to serve with purpose' },
    { icon: Users, title: '10+ years’ experience', desc: 'Founders’ security experience' },
    { icon: MapPin, title: 'Norton, Zimbabwe', desc: '619 Fletcher Road' },
  ];
  const showcase = [
    { name: 'Security Guard Service', icon: ShieldCheck },
    { name: 'Access Control', icon: Fingerprint },
    { name: 'Risk Analysis', icon: Crosshair },
    { name: 'Mobile Patrols', icon: RouteIcon },
    { name: 'Private Investigations', icon: Eye },
    { name: 'Security Training Courses', icon: GraduationCap },
  ];
  return <>
    <section className="hero">
      <img className="hero-photo" src="/images/riddle-team.jpg" alt="Riddle Security uniformed team standing together" />
      <div className="hero-grid"/>
      <div className="hero-content"><div className="hero-copy">
        <div className="eyebrow">RIDDLE SECURITY · PRIVATE LIMITED</div>
        <h1>SECURITY YOU CAN TRUST.<br/><span>PROTECTION YOU CAN RELY ON.</span></h1>
        <p>Riddle Security (Private) Limited provides professional security, safeguarding and protection solutions designed to give individuals, businesses and organisations peace of mind.</p>
        <div className="hero-actions"><Link href="/request-assessment" className="button button-primary" data-testid="link-hero-assessment">REQUEST A SECURITY ASSESSMENT <ArrowRight size={15}/></Link><Link href="/services" className="button button-outline" data-testid="link-hero-services">EXPLORE OUR SERVICES</Link></div>
        <div className="hero-kicker">WE VALUE YOUR SECURITY NEEDS</div>
      </div></div>
      <div className="hero-stamp"><strong>RIDDLE</strong><span>Security · Zimbabwe</span></div>
    </section>
    <section className="trust-strip"><div className="container trust-grid">{highlights.map((item) => <div className="trust-item" key={item.title}><div className="trust-icon"><item.icon size={22}/></div><div><strong>{item.title}</strong><span>{item.desc}</span></div></div>)}</div></section>
    <section className="section"><div className="container intro-grid">
      <div className="intro-photo-wrap"><img className="intro-photo" src="/images/security-officer.jpg" alt="Riddle Security uniformed officer" /><div className="photo-label"><strong>RIDDLE</strong><span>Professional people. Thoughtful protection.</span></div></div>
      <div className="intro-copy"><div className="eyebrow">A PARTNER IN PROTECTION</div><h2>Security grounded in responsibility.</h2>
        <p>Established in 2022, Riddle Security is a Zimbabwean private-security company serving businesses, institutions and individuals. We bring together professional people, practical security knowledge and an accountable operational approach.</p>
        <p>Our founders bring more than 10 years’ experience in private investigations, safeguarding and control systems. That experience informs how we listen, assess and build security support around each client’s needs.</p>
        <Link className="text-link" href="/about-us" data-testid="link-home-about">GET TO KNOW RIDDLE <ArrowRight size={14}/></Link>
      </div>
    </div></section>
    <section className="section service-section"><div className="container">
      <SectionHead eyebrow="WHAT WE DO" title="Protection that starts with understanding." text="Security requirements are never identical. We offer a broad range of services and solutions to help clients address their people, premises and operational needs."/>
      <div className="service-cards">{showcase.map((item)=><div className="service-card" key={item.name}><div className="service-card-icon"><item.icon size={20}/></div><h3>{item.name}</h3><p>{serviceDescriptions[item.name]}</p></div>)}</div>
      <Link className="text-link" href="/services" data-testid="link-home-all-services">VIEW ALL SERVICES <ArrowRight size={14}/></Link>
    </div></section>
    <section className="section"><div className="container">
      <SectionHead eyebrow="WHO WE SERVE" title="Security for the places people depend on." text="From a single individual to a busy commercial environment, our services support varied sectors and settings across Zimbabwe."/>
      <div className="industry-row">{industries.map(x=><Link className="industry-pill" href="/industries" key={x}>{x}</Link>)}</div>
    </div></section>
    <CtaBand title="Let’s talk about what protection means for you."/>
  </>;
}

function About() {
  return <>
    <PageHero title="About Us" summary="A Zimbabwean security partner built on professional experience, accountable operations and a clear commitment to client needs."/>
    <section className="section"><div className="container content-two">
      <div className="prose"><div className="eyebrow">WHO WE ARE</div><h2>Here to protect what matters to you.</h2>
        <p>Riddle Security (Private) Limited is an established private-security company based in Norton, Zimbabwe. Since 2022, we have been focused on providing professional security, safeguarding and protection solutions to businesses, institutions and individuals.</p>
        <p>Our founders bring more than 10 years of experience across private investigations, safeguarding and control systems. This foundation shapes an approach that values clear assessment, reliable service and responsibility at every level.</p>
        <ul className="check-list"><li><Check size={17}/>Licensed and insured</li><li><Check size={17}/>Based at 619 Fletcher Road, Norton, Zimbabwe</li><li><Check size={17}/>A range of human, operational and electronic security solutions</li></ul>
      </div>
      <img className="content-photo" src="/images/riddle-team.jpg" alt="Riddle Security team in uniform"/>
    </div></section>
    <section className="section service-section"><div className="container">
      <SectionHead eyebrow="OUR VISION" title="To be the trusted leader in innovative security solutions." text="Providing exceptional and affordable safety and protection services that exceed our clients’ expectations."/>
      <div className="values-grid">
        <article className="value-card"><Target color="#0A2A8F"/><h3>Our mission</h3><p>To increase community awareness of real security issues.</p></article>
        <article className="value-card"><HeartHandshake color="#0A2A8F"/><h3>Our mission</h3><p>To improve the quality of life to our clients, employees and shareholders.</p></article>
        <article className="value-card"><ShieldCheck color="#0A2A8F"/><h3>Our commitment</h3><p>To place client requirements, reliable service and accountable practice at the heart of our work.</p></article>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <SectionHead eyebrow="OUR GOALS" title="The standards we work towards." text="Our goals describe the direction we are committed to pursuing as we serve clients and strengthen our company."/>
      <div className="goal-list">{goals.map((g,i)=><div className="goal" key={g}><b>0{i+1}</b>{g}</div>)}</div>
    </div></section><CtaBand/>
  </>;
}

function Services() {
  const icons = [Shield,LockKeyhole,Dog,Siren,HeartHandshake,Crosshair,ScanEye,Search,RouteIcon,BriefcaseBusiness,GraduationCap];
  return <>
    <PageHero title="Our Services" summary="A considered range of security services to support people, properties and organisations in the environments where they operate."/>
    <section className="section"><div className="container">
      <SectionHead eyebrow="SECURITY SERVICES" title="The right service begins with the right context." text="Explore the services offered by Riddle Security. A client conversation helps us understand your requirements and consider an appropriate approach."/>
      <div className="service-list">{serviceNames.map((name,i)=>{const Icon=icons[i];return <article className="service-list-item" key={name}><span>SERVICE / 0{i+1}</span><Icon size={23}/><strong>{name}</strong></article>})}</div>
    </div></section><CtaBand/>
  </>;
}

function Industries() {
  const descriptions = [
    'Security support for businesses and organisations across the private sector.',
    'Protection considerations for real estate, sites and property operations.',
    'Professional security options tailored to individual needs.',
    'Support for retail operations, premises and the people they serve.',
    'Security planning and support for multi-tenant office environments.',
    'Flexible services for a range of business settings and priorities.',
    'Security support for public institutions and their environments.',
    'Services designed for the active, public-facing setting of shopping malls.',
  ];
  return <>
    <PageHero title="Industries We Serve" summary="Riddle Security supports a broad range of clients and environments. Our work starts with understanding the people, place and priorities involved."/>
    <section className="section"><div className="container">
      <SectionHead eyebrow="OUR CLIENT ENVIRONMENTS" title="Different settings. Individual requirements." text="We work across sectors and client types. The appropriate services and operating arrangements are considered around each client’s needs."/>
      <div className="values-grid">{industries.map((name,i)=><article className="value-card" key={name}><span className="eyebrow">ENVIRONMENT · 0{i+1}</span><h3>{name}</h3><p>{descriptions[i]}</p></article>)}</div>
    </div></section>
    <section className="section service-section"><div className="container content-two"><div className="prose"><div className="eyebrow">ONE PARTNER, MANY SETTINGS</div><h2>Built around your operating reality.</h2><p>Security needs can differ from one organisation to the next, even within the same sector. We listen to the client, understand the environment and consider suitable services together.</p><p>Whether your priority is guarding, access management, investigations or risk analysis, our team can discuss an approach relevant to your situation.</p><Link className="text-link" href="/request-assessment">DISCUSS YOUR REQUIREMENTS <ArrowRight size={14}/></Link></div><img className="content-photo" src="/images/security-officer.jpg" alt="Riddle Security officer"/></div></section><CtaBand/>
  </>;
}

function Solutions() {
  return <>
    <PageHero title="Security Solutions" summary="A joined-up view of physical, operational and electronic security—grounded in your requirements and delivered with accountability."/>
    <section className="section"><div className="container">
      <SectionHead eyebrow="OUR CAPABILITIES" title="Security measures that work together." text="The right combination depends on your environment. Riddle Security offers the following solutions to help address different security needs."/>
      <div className="service-list">{solutions.map((name,i)=>{const Icon=solutionIcons[i];return <article className="service-list-item" key={name}><span>SOLUTION / 0{i+1}</span><Icon size={23}/><strong>{name}</strong></article>})}</div>
    </div></section>
    <section className="section service-section"><div className="container content-two">
      <div className="prose"><div className="eyebrow">INTEGRATED SECURITY</div><h2>People, systems and sound judgement.</h2><p>Security is strongest when the measures in place reflect actual operating conditions. Our service range spans guarding, access control, K9 security, electronic security, investigations, analysis and training.</p><p>We work with clients to understand how these areas may support their wider security requirements, without assuming that one solution fits every site.</p></div>
      <div className="goal-list">{['Understand the environment','Identify priorities','Consider relevant solutions','Agree clear responsibilities'].map((item,i)=><div className="goal" key={item}><b>0{i+1}</b>{item}</div>)}</div>
    </div></section><CtaBand/>
  </>;
}

function Approach() {
  const steps=[
    ['Listen & understand','We begin with your context: the environment, concerns, people and priorities that shape your requirements.'],
    ['Assess the need','Consider risks and existing arrangements to clarify the issues that matter most.'],
    ['Plan together','Discuss relevant services and responsibilities in a way that reflects the client’s requirements.'],
    ['Deliver accountably','Support the agreed approach through professional conduct, clear communication and operational accountability.'],
  ];
  return <>
    <PageHero title="Our Approach" summary="A responsible operating model built around client understanding, considered planning and accountable service delivery."/>
    <section className="section"><div className="container">
      <SectionHead eyebrow="HOW WE WORK" title="A disciplined process. A human partnership." text="Our approach is designed to stay grounded in each client’s real needs—not a one-size-fits-all security package."/>
      <div className="approach-steps">{steps.map(([heading,body])=><article className="approach-step" key={heading}><h3>{heading}</h3><p>{body}</p></article>)}</div>
    </div></section>
    <section className="section service-section"><div className="container">
      <SectionHead eyebrow="OPERATIONAL ACCOUNTABILITY" title="Clear responsibility at every level." text="Our operational model reflects structured oversight and defined lines of responsibility. Specific arrangements are established in line with the client engagement and operational requirements."/>
      <div className="org-chart" aria-label="Illustrative accountable service workflow"><div className="org-node">Client requirements</div><div className="org-stem"/><div className="org-node secondary">Service planning</div><div className="org-stem"/><div className="org-row"><div className="org-node secondary">Operational coordination</div><div className="org-node secondary">Security personnel</div><div className="org-node secondary">Client communication</div></div></div>
    </div></section>
    <section className="section"><div className="container content-two"><div className="prose"><div className="eyebrow">OUR VALUES</div><h2>The way we work matters.</h2><p>Ethical Values, Reliability and Honesty are central to how we approach our responsibilities. These values guide the way we engage with clients, colleagues and the communities around us.</p></div><div className="values-grid"><article className="value-card"><ShieldCheck color="#0A2A8F"/><h3>Ethical Values</h3><p>Acting responsibly and with due consideration.</p></article><article className="value-card"><BadgeCheck color="#0A2A8F"/><h3>Reliable</h3><p>Taking commitments and service responsibilities seriously.</p></article><article className="value-card"><Eye color="#0A2A8F"/><h3>Honest</h3><p>Communicating with integrity and clarity.</p></article></div></div></section><CtaBand/>
  </>;
}

function CompanyProfile() {
  return <>
    <PageHero title="Company Profile" summary="An overview of Riddle Security (Private) Limited—our background, purpose, services and company details."/>
    <section className="section"><div className="container content-two">
      <div className="prose"><div className="eyebrow">THE COMPANY</div><h2>Riddle Security (Private) Limited</h2>
        <p>Established in 2022, Riddle Security is a licensed and insured Zimbabwean private-security company based at 619 Fletcher Road, Norton, Zimbabwe.</p>
        <p>The company serves businesses, institutions and individuals through professional security, safeguarding and protection solutions. Its founders bring more than 10 years’ experience in private investigations, safeguarding and control systems.</p>
        <ul className="check-list"><li><Check size={17}/>Established: 2022</li><li><Check size={17}/>Location: Norton, Zimbabwe</li><li><Check size={17}/>Licensed and insured</li><li><Check size={17}/>Founder experience: 10+ years in relevant fields</li></ul>
      </div>
      <div style={{background:'#f5f7fa',padding:36}}><img src="/images/riddle-crest.jpg" alt="Riddle Security shield crest" style={{display:'block',width:'min(100%,300px)',aspectRatio:'1',objectFit:'cover',margin:'0 auto 20px'}}/><div className="eyebrow">WE VALUE YOUR SECURITY NEEDS</div></div>
    </div></section>
    <section className="section service-section"><div className="container">
      <SectionHead eyebrow="CORPORATE OVERVIEW" title="A partner with purpose." text="The company’s vision, mission, goals and values set the direction for the service we seek to provide."/>
      <div className="values-grid"><article className="value-card"><h3>Vision</h3><p>To be the trusted leader in innovative security solutions, providing exceptional and affordable safety and protection services that exceed our clients’ expectations.</p></article><article className="value-card"><h3>Mission</h3><p>To increase community awareness of real security issues.</p></article><article className="value-card"><h3>Mission</h3><p>To improve the quality of life to our clients, employees and shareholders.</p></article></div>
    </div></section>
    <section className="section"><div className="container"><SectionHead eyebrow="AREAS OF SERVICE" title="Our service portfolio"/><div className="industry-row">{serviceNames.map(s=><Link className="industry-pill" key={s} href="/services">{s}</Link>)}</div></div></section>
    <CtaBand title="Talk to Riddle Security." text="We welcome enquiries from businesses, institutions and individuals seeking professional security support."/>
  </>;
}

function Contact() {
  return <>
    <PageHero title="Contact" summary="Speak with Riddle Security about your organisation, site or personal security requirements."/>
    <section className="section"><div className="container contact-grid">
      <aside className="contact-details"><h2>Start a conversation.</h2><p>Reach our team by phone, email or visit us in Norton. We welcome your enquiry.</p>
        <div className="contact-row"><Phone size={18}/><div><strong>Call us</strong><a href="tel:+263719821140">+263 719 821 140</a><a href="tel:+263783497993">+263 783 497 993</a></div></div>
        <div className="contact-row"><Mail size={18}/><div><strong>Email</strong><a href="mailto:riddlesecurity@gmail.com">riddlesecurity@gmail.com</a></div></div>
        <div className="contact-row"><MapPin size={18}/><div><strong>Visit</strong><span>619 Fletcher Road<br/>Norton, Zimbabwe</span></div></div>
        <div className="contact-row"><BadgeCheck size={18}/><div><strong>Company status</strong><span>Licensed and insured</span></div></div>
      </aside>
      <div className="form-panel"><h2>Request an assessment</h2><p>Tell us a little about your security needs. The assessment form will prepare an email for you to review and send from your email application.</p><AssessmentForm compact/></div>
    </div></section>
  </>;
}

function AssessmentForm({ compact = false }: { compact?: boolean }) {
  const [formError, setFormError] = useState('');
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || 'Security assessment enquiry');
    const details = String(data.get('details') || '').trim();
    if (!name || !email || !details) { setFormError('Please complete your name, email and enquiry details.'); return; }
    setFormError('');
    const body = [
      `Name: ${name}`,
      `Organisation: ${String(data.get('organisation') || 'Not provided')}`,
      `Email: ${email}`,
      `Phone: ${String(data.get('phone') || 'Not provided')}`,
      `Location: ${String(data.get('location') || 'Not provided')}`,
      `Service of interest: ${String(data.get('service') || 'Not specified')}`,
      '',
      'Enquiry details:',
      details,
    ].join('\n');
    window.location.href = `mailto:riddlesecurity@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return <form onSubmit={submit} className="form-grid" data-testid="form-assessment">
    <div className="field"><label htmlFor={compact?'contact-name':'assessment-name'}>Your name *</label><input id={compact?'contact-name':'assessment-name'} name="name" required placeholder="Full name" data-testid="input-assessment-name"/></div>
    <div className="field"><label htmlFor={compact?'contact-email':'assessment-email'}>Email address *</label><input id={compact?'contact-email':'assessment-email'} name="email" type="email" required placeholder="you@example.com" data-testid="input-assessment-email"/></div>
    <div className="field"><label htmlFor={compact?'contact-org':'assessment-org'}>Organisation</label><input id={compact?'contact-org':'assessment-org'} name="organisation" placeholder="Company or organisation" data-testid="input-assessment-organisation"/></div>
    <div className="field"><label htmlFor={compact?'contact-phone':'assessment-phone'}>Phone number</label><input id={compact?'contact-phone':'assessment-phone'} name="phone" type="tel" placeholder="+263 ..." data-testid="input-assessment-phone"/></div>
    <div className="field"><label htmlFor={compact?'contact-location':'assessment-location'}>Site / location</label><input id={compact?'contact-location':'assessment-location'} name="location" placeholder="Town, site or area" data-testid="input-assessment-location"/></div>
    <div className="field"><label htmlFor={compact?'contact-service':'assessment-service'}>Service of interest</label><select id={compact?'contact-service':'assessment-service'} name="service" defaultValue="" data-testid="select-assessment-service"><option value="">Select a service</option>{serviceNames.map(s=><option key={s}>{s}</option>)}</select></div>
    <div className="field full"><label htmlFor={compact?'contact-subject':'assessment-subject'}>Subject</label><input id={compact?'contact-subject':'assessment-subject'} name="subject" defaultValue="Security assessment enquiry" data-testid="input-assessment-subject"/></div>
    <div className="field full"><label htmlFor={compact?'contact-details':'assessment-details'}>How can we help? *</label><textarea id={compact?'contact-details':'assessment-details'} name="details" required placeholder="Briefly describe your security requirements..." data-testid="textarea-assessment-details"/></div>
    <div className="field full">
      <button type="submit" className="button button-primary" data-testid="button-submit-assessment">PREPARE EMAIL <ArrowRight size={15}/></button>
      {formError && <span role="alert" style={{color:'#b91219',fontSize:12,marginTop:8}} data-testid="text-assessment-error">{formError}</span>}
      <p className="form-note">This is a frontend-only enquiry flow. Selecting “Prepare email” opens your device’s email application with your details addressed to riddlesecurity@gmail.com. Review and send the email there. No information is sent to this website.</p>
    </div>
  </form>;
}

function Assessment() {
  return <>
    <PageHero title="Request a Security Assessment" summary="Share a few details about your security requirements. We’ll prepare an email for you to review and send to our team." eyebrow="LET’S DISCUSS YOUR REQUIREMENTS"/>
    <section className="section"><div className="container" style={{maxWidth:900}}>
      <div className="section-head"><div className="eyebrow">ENQUIRY DETAILS</div><h2>Help us understand your needs.</h2><p>Complete the form below with the details you are comfortable sharing. Your email application will open with the information included.</p></div>
      <AssessmentForm/>
    </div></section>
  </>;
}

function Legal({ privacy }: { privacy: boolean }) {
  const title = privacy ? 'Privacy Policy' : 'Terms & Conditions';
  return <>
    <PageHero title={title} summary={privacy ? 'How this website handles information you choose to share with Riddle Security.' : 'Important information about using the Riddle Security website.'}/>
    <section className="section"><div className="container policy-copy">
      <div className="eyebrow">WEBSITE POLICIES</div>
      {privacy ? <>
        <h2>Information you provide</h2><p>This is a frontend-only website. The assessment and contact forms do not submit information to a web server or store it on this website. When you use a form, your device’s email application opens a draft addressed to riddlesecurity@gmail.com. You choose whether to review, change and send that email.</p>
        <h2>Information in your email</h2><p>If you decide to email Riddle Security, your message and any personal information it contains will be handled through email. Please share only information appropriate for an initial enquiry. Do not use the website form to communicate urgent or sensitive security incidents.</p>
        <h2>Website analytics and cookies</h2><p>This website does not intentionally use advertising cookies or collect personal information through account registration. Your browser or hosting provider may process basic technical information as part of delivering the website.</p>
        <h2>Third-party services</h2><p>Telephone and email links hand off to applications or services on your device. Their handling of your information is governed by their own terms and privacy practices.</p>
        <h2>Contact</h2><p>Questions about this policy may be directed to <a href="mailto:riddlesecurity@gmail.com">riddlesecurity@gmail.com</a> or +263 719 821 140.</p>
      </> : <>
        <h2>Website information</h2><p>The information on this website is provided for general informational purposes about Riddle Security (Private) Limited and its services. It does not constitute a binding offer, service agreement or guarantee of suitability for any particular security requirement.</p>
        <h2>Enquiries and engagement</h2><p>Submitting an enquiry through this website prepares a message in your own email application. No enquiry is submitted until you choose to send that email. Any services, scope, responsibilities, fees and operating arrangements are subject to discussion and a separate written agreement.</p>
        <h2>Service descriptions</h2><p>Service descriptions are general summaries. Availability, methods and suitability depend on the client, location, circumstances and applicable requirements. No response time, outcome or service level is promised by the general information on this website.</p>
        <h2>Website content and availability</h2><p>We aim to keep website information clear and current, but do not warrant that all material is complete, error-free or continuously available. Website content may be updated or changed without notice.</p>
        <h2>External links</h2><p>Links to telephone, email or other external services are provided for convenience. Riddle Security is not responsible for the content, availability or policies of third-party services.</p>
        <h2>Contact</h2><p>For questions about these terms, contact <a href="mailto:riddlesecurity@gmail.com">riddlesecurity@gmail.com</a> or +263 719 821 140.</p>
      </>}
    </div></section>
  </>;
}

function NotFound() {
  return <div className="notfound"><div><strong>404</strong><h1>This page isn’t on our watch.</h1><p style={{color:'#657184',margin:'0 auto 25px',maxWidth:430,lineHeight:1.7}}>The page may have moved, or the address may be incorrect. Let’s get you back to the information you need.</p><Link href="/" className="button button-primary" data-testid="link-notfound-home">RETURN TO HOME <ArrowRight size={15}/></Link></div></div>;
}

function RouteContent() {
  const [location] = useLocation();
  useEffect(() => {
    const pageMetadata: Record<string, { title: string; description: string }> = {
      '/': {
        title: 'Home',
        description: 'Riddle Security provides professional security, safeguarding and protection solutions for businesses, organisations and individuals in Zimbabwe.',
      },
      '/about-us': {
        title: 'About Us',
        description: 'Learn about Riddle Security, established in 2022 in Norton, Zimbabwe, and the experience behind its professional security services.',
      },
      '/services': {
        title: 'Services',
        description: 'Explore Riddle Security services including guarding, access control, K9 handling, investigations, mobile patrols, cash in transit and training.',
      },
      '/industries': {
        title: 'Industries',
        description: 'Security support for private businesses, real estate, individuals, retail, office parks, public institutes and shopping malls.',
      },
      '/security-solutions': {
        title: 'Security Solutions',
        description: 'Discover physical, electronic and operational security solutions from Riddle Security in Zimbabwe.',
      },
      '/our-approach': {
        title: 'Our Approach',
        description: 'See how Riddle Security listens, assesses requirements, plans with clients and delivers accountable security services.',
      },
      '/company-profile': {
        title: 'Company Profile',
        description: 'Company background, vision, mission, goals, values and contact details for Riddle Security (Private) Limited.',
      },
      '/contact': {
        title: 'Contact',
        description: 'Contact Riddle Security in Norton, Zimbabwe by phone or email to discuss your security requirements.',
      },
      '/request-assessment': {
        title: 'Request a Security Assessment',
        description: 'Share your security requirements with Riddle Security and prepare an assessment enquiry email for the team.',
      },
      '/privacy-policy': {
        title: 'Privacy Policy',
        description: 'Read how the Riddle Security website handles information visitors choose to share through email enquiries.',
      },
      '/terms-conditions': {
        title: 'Terms & Conditions',
        description: 'Read the terms for using the Riddle Security website and its general service information.',
      },
    };
    const metadata = pageMetadata[location] ?? {
      title: 'Page Not Found',
      description: 'The requested page could not be found. Return to Riddle Security to explore our services and company information.',
    };
    const fullTitle = `${metadata.title} | Riddle Security (Private) Limited`;
    document.title = fullTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', fullTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', fullTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.description);
  }, [location]);
  return <AnimatePresence mode="wait"><motion.main key={location} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-4}} transition={{duration:.22}}>
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/about-us" component={About}/>
      <Route path="/services" component={Services}/>
      <Route path="/industries" component={Industries}/>
      <Route path="/security-solutions" component={Solutions}/>
      <Route path="/our-approach" component={Approach}/>
      <Route path="/company-profile" component={CompanyProfile}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/request-assessment" component={Assessment}/>
      <Route path="/privacy-policy">{()=><Legal privacy/>}</Route>
      <Route path="/terms-conditions">{()=><Legal privacy={false}/>}</Route>
      <Route component={NotFound}/>
    </Switch>
  </motion.main></AnimatePresence>;
}

function App() {
  return <><Header/><RouteContent/><Footer/></>;
}

export default App;

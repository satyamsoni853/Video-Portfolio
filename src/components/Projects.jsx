import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allProjects = [
  {
    id: 0,
    name: 'Golden Sands Estate — Full-Stack Real Estate Suite',
    desc: 'End-to-end real estate tech ecosystem built for Kapoor Wealth Partners using the MERN stack. Delivered the full public website, an internal CRM for lead & deal management, a cross-platform mobile app for agents & buyers, a support dashboard for client tickets, and several auxiliary tools — all under one cohesive design system.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Next.js', 'React Native', 'MERN', 'Full Stack'],
    demo: 'https://goldensandsestate.com/',
    code: '',
    image: '/projects/goldensands.png',
    featured: true,
    flagship: true,
    client: 'Kapoor Wealth Partners',
    links: [
      { label: 'Website', url: 'https://goldensandsestate.com/', icon: '🌐' },
      { label: 'CRM', url: 'https://crm.goldensandsestate.com/', icon: '📊' },
      { label: 'Support', url: 'https://support.goldensandsestate.com/login', icon: '🎧' },
    ],
    highlights: [
      'Public website — luxury real estate listings, AI-powered search (GoldenGenie), multilingual (5 languages)',
      'Internal CRM — lead pipeline, deal tracking, agent management & analytics (MERN stack)',
      'Mobile app — cross-platform React Native app for agents & buyers with live property alerts',
      'Support dashboard — client ticketing, SLA tracking, and agent escalation flow',
    ],
  },
  {
    id: 1,
    name: 'Sunspots Holidays',
    desc: 'Professional travel & booking platform with high-performance React architecture. Features specialized flight systems and dynamic holiday packages.',
    tags: ['React', 'Next.js', 'Booking', 'FastAPI'],
    demo: 'https://sunspotsholidays.com/',
    code: '',
    image: '/projects/sunspot.png',
    featured: true,
  },
  {
    id: 2,
    name: 'Orra Healthy Cure',
    desc: 'Premium Ayurvedic wellness platform featuring heritage-inspired UI for botanical formulas and deep joint recovery products.',
    tags: ['React', 'E-commerce', 'Tailwind'],
    demo: 'https://orra-rust.vercel.app/',
    code: '',
    image: '/projects/ors.png',
    featured: true,
  },
  {
    id: 3,
    name: 'HRMaster — CRM',
    desc: 'Enterprise-grade HR management system for employees, departments & attendance with admin dashboard and analytics.',
    tags: ['React', 'Spring Boot', 'Dashboard'],
    demo: 'https://hrs-2frontend.vercel.app/',
    code: '',
    image: '/projects/hrs.png',
    featured: true,
  },
  {
    id: 4,
    name: 'Ashwini SD — FinTech',
    desc: 'Financial analytics platform for SEBI registered research analysts with tools for trading transformation and investment tracking.',
    tags: ['React', 'FinTech', 'Analytics'],
    demo: 'https://www.ashwinisdresearch.com/',
    code: '',
    image: '/projects/ashwin.png',
    featured: true,
  },
  {
    id: 5,
    name: 'CloudFire IT Services',
    desc: 'Agency website with immersive 3D visuals and smooth GSAP animations showcasing premium web development services.',
    tags: ['Next.js', 'Three.js', 'GSAP'],
    demo: 'http://manufac-ia6d.vercel.app/',
    code: 'https://github.com/satyamsoni853/cloudfireiitservice',
    image: '/projects/CloudFire.png',
    featured: true,
  },
  {
    id: 6,
    name: 'SlotSync — Doctor Appointment',
    desc: 'Doctor appointment booking system built with Java Spring Boot and Thymeleaf, supporting slot management and patient records.',
    tags: ['Java', 'Spring Boot', 'Thymeleaf'],
    demo: 'https://sslotsync.online/',
    code: '',
    image: '/projects/slotsync.png',
    featured: true,
  },
  {
    id: 20,
    name: 'Shivam Jewellers — E-commerce',
    desc: 'Online storefront for a jewellery business with curated gold, silver & artificial collections, live gold rate, made-to-order pieces, order tracking and cash on delivery.',
    tags: ['React', 'E-commerce', 'Frontend'],
    demo: 'https://shivam-jewwlers-frontend.vercel.app/',
    code: '',
    image: '/projects/shivamjewellers.png',
    featured: true,
  },
  {
    id: 21,
    name: 'Doctor Ping — Follow-up Reminders',
    desc: 'Follow-up tracking tool for small clinics: schedule return visits, prepare WhatsApp reminders, and see who is due, confirmed or missed, with role-based logins for doctors and receptionists.',
    tags: ['React', 'Healthcare', 'Dashboard'],
    demo: 'https://drping-frontend-1v5v.vercel.app/',
    code: '',
    image: '/projects/drping.png',
    featured: true,
  },
  {
    id: 7,
    name: 'Uniisphere — Company Website',
    desc: "Uniisphere's official website — a unified job-portal and social platform built with React JS.",
    tags: ['React', 'JavaScript', 'CSS'],
    demo: 'https://uniisphere.in/',
    code: '',
    image: '/projects/uniisphere.png',
  },
  {
    id: 8,
    name: 'TravelTips',
    desc: 'Freelancing project providing travel tips and destination guides with a clean, fast Next.js frontend.',
    tags: ['Next.js', 'React'],
    demo: 'https://travel-trips-one.vercel.app/',
    code: 'https://github.com/satyamsoni853/Travel-Trips',
    image: '/projects/TravelTips.png',
  },
  {
    id: 9,
    name: 'Resume Analyzer',
    desc: 'AI-powered resume analyzer built with React and TypeScript to score and give feedback on resumes.',
    tags: ['React', 'TypeScript'],
    demo: 'https://resume-analyzer1-ealg.vercel.app/',
    code: '',
    image: '/projects/ResumeAnalyzer.png',
  },
  {
    id: 10,
    name: 'Peppypick (Pvt. Ltd.)',
    desc: 'Company website and frontend showcase built with React JS.',
    tags: ['React', 'JavaScript', 'CSS'],
    demo: 'https://peppypick.vercel.app/',
    code: '',
    image: '/projects/PeeppyPick.png',
  },
  {
    id: 11,
    name: 'FuelPrep',
    desc: 'React.js application for fuel preparation strategies with clean, data-driven UI and intuitive UX.',
    tags: ['React.js'],
    demo: 'https://manufac-nu.vercel.app/',
    code: 'https://github.com/satyamsoni853/manufac',
    image: '/projects/FuelPrep.png',
  },
  {
    id: 12,
    name: 'Weather App',
    desc: 'Real-time weather app built with ReactJS delivering live weather updates via public APIs.',
    tags: ['React', 'API', 'JavaScript'],
    demo: 'https://weather-app-react-4j4r.vercel.app/',
    code: 'https://github.com/satyamsoni853/weather-app-react',
    image: '/projects/weather.png',
  },
  {
    id: 14,
    name: 'BMI Calculator',
    desc: 'Body Mass Index calculator built with JavaScript providing health insights based on user inputs.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    demo: 'https://bmi-new-sable.vercel.app/',
    code: 'https://github.com/satyamsoni853/bmi-new',
    image: '/projects/bmi.png',
  },
  {
    id: 15,
    name: 'Todo List App',
    desc: 'Clean, minimal To-Do List app for task management built with vanilla JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://crazytodolist.netlify.app/',
    code: 'https://github.com/satyamsoni853/Todo-list',
    image: '/projects/todo.png',
  },
  {
    id: 16,
    name: 'Password Generator',
    desc: 'Secure password generator with customizable options for length and character types.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://pg-git-main-satyam-sonis-projects.vercel.app/',
    code: 'https://github.com/satyamsoni853/PG',
    image: '/projects/pg.png',
  },
  {
    id: 18,
    name: 'Lucknow Football Clone',
    desc: 'Landing page clone of Lucknow Super Giants football club built with React JS.',
    tags: ['React', 'JavaScript', 'CSS'],
    demo: 'https://page-mu-nine.vercel.app/',
    code: 'https://github.com/satyamsoni853/page',
    image: '/projects/lucknow.png',
  },
  {
    id: 19,
    name: 'React Portfolio',
    desc: 'Personal portfolio website built with React JS showcasing projects and skills.',
    tags: ['React', 'JavaScript', 'CSS'],
    demo: 'https://satyamsoniportfolio.vercel.app/',
    code: 'https://github.com/satyamsoni853/reactportfoliao',
    image: '/projects/reactportfoliao.png',
  },
];

const flagship = allProjects.find(p => p.flagship);
const featured = allProjects.filter(p => p.featured && !p.flagship);
const extra    = allProjects.filter(p => !p.featured);

/* ── Icons ── */
const ExternalIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

/* ── Flagship card (full-width hero) ── */
const FlagshipCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    className="group relative w-full rounded-3xl overflow-hidden border border-[#C9A84C]/30 bg-gradient-to-br from-[#1a1508] via-[#111111] to-[#0d0d0d] shadow-[0_0_60px_rgba(201,168,76,0.08)] hover:shadow-[0_0_80px_rgba(201,168,76,0.18)] transition-all duration-500 mb-10"
  >
    {/* Golden shimmer border top */}
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

    <div className="flex flex-col lg:flex-row">
      {/* Left: Screenshot */}
      <div className="relative lg:w-[52%] aspect-video lg:aspect-auto lg:min-h-[340px] overflow-hidden bg-black/50 flex-shrink-0">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]/80 hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />

        {/* Client badge on image */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C9A84C] text-black text-[10px] font-black uppercase tracking-widest shadow-lg">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            Flagship Project
          </span>
        </div>
      </div>

      {/* Right: Info */}
      <div className="flex flex-col justify-between p-7 lg:p-10 flex-1">
        {/* Client + Live links row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C9A84C]/70 mb-1">Client</p>
            <p className="text-white/80 text-sm font-semibold">{project.client}</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-end">
            {(project.links || [{ label: 'Live', url: project.demo, icon: '🌐' }]).map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C9A84C] text-black text-[11px] font-black hover:bg-[#e0ba58] transition-colors shadow-lg shadow-[#C9A84C]/20 whitespace-nowrap"
              >
                <span>{link.icon}</span>
                {link.label} <ExternalIcon />
              </a>
            ))}
          </div>
        </div>

        {/* Title */}
        <div className="mb-5">
          <h3 className="text-xl lg:text-2xl font-black text-white leading-tight group-hover:text-[#C9A84C] transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-white/45 text-sm leading-relaxed mt-3">{project.desc}</p>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A84C]/60 mb-3">What I Built</p>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-white/55 leading-relaxed">
                <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.07]">
          {project.tags.map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-wide px-2.5 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/25 text-[#C9A84C]/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

/* ── Single card ── */
const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.55, delay: (index % 6) * 0.07, ease: [0.16, 1, 0.3, 1] }}
    className="group flex flex-col rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.02] hover:border-[#38bdf8]/40 hover:bg-[#38bdf8]/[0.04] transition-all duration-400"
  >
    {/* Screenshot */}
    <div className="relative aspect-video overflow-hidden bg-black/30">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#38bdf8] text-[#08090f] text-xs font-black hover:bg-[#7dd3fc] transition-colors shadow-lg"
          onClick={e => e.stopPropagation()}
        >
          Live Demo <ExternalIcon />
        </a>
      </div>
    </div>

    {/* Info */}
    <div className="flex flex-col flex-1 p-5">
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.slice(0, 3).map(t => (
          <span key={t} className="text-[10px] font-black uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 text-[#38bdf8]/80">
            {t}
          </span>
        ))}
      </div>

      <h3 className="text-base font-black text-white leading-tight mb-2 group-hover:text-[#38bdf8] transition-colors">
        {project.name}
      </h3>
      <p className="text-white/40 text-xs leading-relaxed flex-1">{project.desc}</p>

      {/* Link row */}
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/[0.06]">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[#38bdf8] text-xs font-bold hover:underline"
        >
          Live Demo <ExternalIcon />
        </a>
        <span className="ml-auto text-[10px] text-white/20 font-mono">
          {String(project.id).padStart(2, '0')}
        </span>
      </div>
    </div>
  </motion.div>
);

/* ── Main section ── */
const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="bg-[#111111] py-14 md:py-24 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-8 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6"
        >
          <div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">Projects</h2>
            <p className="text-white/25 text-[11px] font-mono mt-3 tracking-[0.2em] uppercase">
              {allProjects.length} Projects · {featured.length} Featured
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowAll(v => !v)}
            className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-full border border-[#38bdf8]/50 text-[#38bdf8] text-sm font-black hover:bg-[#38bdf8] hover:text-[#08090f] hover:border-[#38bdf8] transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]"
          >
            {showAll ? (
              <>
                Show Less
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                View All ({allProjects.length})
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Flagship project — full-width hero card */}
        {flagship && <FlagshipCard project={flagship} />}

        {/* Featured grid (excludes flagship) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Expanded: remaining projects */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {extra.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA if collapsed */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 text-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="text-white/30 text-sm font-semibold hover:text-[#38bdf8] transition-colors"
            >
              + {extra.length} more projects — click to expand
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Projects;

import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const stops = [
  {
    role: 'MERN Stack Developer',
    company: 'Kapoor Wealth',
    duration: 'May 2026 – Present',
    location: 'Mohali, Punjab',

    description:
      'Building and maintaining full-stack financial wealth management applications using MongoDB, Express.js, React, and Node.js — scalable APIs, interactive dashboards, and responsive client-facing interfaces.',
    current: true,
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    role: 'Next.js Developer',
    company: 'Cloudfire IT Services',
    duration: 'Nov 2024 – May 2025',
    location: 'Gurugram, India',
  
    description:
      'Frontend for a travel booking website — API integration, dynamic data rendering, and responsive UI components using Next.js.',
    current: false,
    tags: ['Next.js', 'API', 'Tailwind CSS'],
  },
  {
    role: 'Front-End Developer',
    company: 'Uniisphere Unified Pvt Ltd',
    duration: 'Nov 2024 – Nov 2025',
    location: 'Gurugram, India',
  
    description:
      'Built a unified job-portal and social-media platform with animated UIs using Next.js/React, API integration, and real-time chat via WebSockets.',
    current: false,
    tags: ['Next.js', 'React', 'WebSockets'],
  },
  {
    role: 'Java Full Stack Developer',
    company: 'JSpider Training Institute',
    duration: 'Apr 2024 – Apr 2025',
    location: 'Bengaluru, India',
   
    description:
      'Hands-on Java Full Stack training — Java, SQL, Servlets, Spring Boot, and modern frontend technologies through real-world assignments.',
    current: false,
    tags: ['Java', 'Spring Boot', 'SQL'],
  },
  {
    role: 'Front-End Developer',
    company: 'Apex Planet Software Pvt Ltd',
    duration: 'Jan 2025 – Feb 2025',
    location: 'Bihar, India',

    description:
      'Created responsive and interactive user interfaces using modern web technologies. Collaborated with the team to deliver high-quality software solutions.',
    current: false,
    tags: ['React', 'CSS', 'JavaScript'],
  },
  {
    role: 'Front-End Developer Intern',
    company: 'CodSoft',
    duration: 'Jan 2024 – Mar 2024',
    location: 'Remote',
    
    description:
      'Completed a web development internship — built a calculator, landing page, and portfolio site using HTML, CSS, and JavaScript.',
    current: false,
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

/* ── Path geometry (desktop) ── */
const ROW_H   = 220;
const PAD_TOP = 80;
const SVG_W   = 180;
const CX      = SVG_W / 2;          // 90 — centre of SVG
const OFFSET  = 52;                  // how far pins deviate from centre
const N       = stops.length;
const TOTAL_H = PAD_TOP + N * ROW_H + 100;

const pinX = (i) => CX + (i % 2 === 0 ? OFFSET : -OFFSET); // right / left
const pinY = (i) => PAD_TOP + i * ROW_H + ROW_H / 2;

/* build winding cubic-bezier path through all pins */
const buildPath = () => {
  let d = `M ${CX} 0`;
  for (let i = 0; i < N; i++) {
    const px = pinX(i), py = pinY(i);
    const prevX = i === 0 ? CX : pinX(i - 1);
    const prevY = i === 0 ? 0  : pinY(i - 1);
    const midY  = (prevY + py) / 2;
    d += ` C ${prevX} ${midY} ${px} ${midY} ${px} ${py}`;
  }
  const lx = pinX(N - 1), ly = pinY(N - 1);
  d += ` C ${lx} ${ly + 60} ${CX} ${TOTAL_H - 40} ${CX} ${TOTAL_H}`;
  return d;
};
const PATH_D = buildPath();

/* ── Card component ── */
const StopCard = ({ stop, side }) => (
  <div
    className={`rounded-2xl border p-5 transition-all duration-300 hover:scale-[1.02] ${
      stop.current
        ? 'bg-[#38bdf8]/8 border-[#38bdf8]/40 shadow-[0_0_30px_rgba(56,189,248,0.1)]'
        : 'bg-white/[0.025] border-white/[0.08] hover:border-white/20'
    }`}
  >
    {/* Location */}
    <div className={`flex items-center gap-1.5 mb-3 ${side === 'right' ? 'justify-end' : ''}`}>
      <svg className="w-3 h-3 text-[#38bdf8] shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
      <span className="text-[10px] font-black text-white/35 tracking-[0.18em] uppercase font-mono">
        {stop.location}
      </span>
      <span className="text-[9px] text-white/20 font-mono hidden sm:inline">{stop.coords}</span>
    </div>

    <h3 className={`text-base font-black text-white leading-tight mb-0.5 ${side === 'right' ? 'text-right' : ''}`}>
      {stop.role}
    </h3>
    <p className={`text-[#38bdf8] font-bold text-sm mb-2 ${side === 'right' ? 'text-right' : ''}`}>
      {stop.company}
    </p>

    <div className={`flex items-center gap-2 mb-3 flex-wrap ${side === 'right' ? 'justify-end' : ''}`}>
      <span className="text-[10px] font-semibold text-white/30 font-mono">{stop.duration}</span>
      {stop.current && (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#38bdf8] text-[9px] font-black tracking-widest uppercase">
          <span className="w-1 h-1 rounded-full bg-[#38bdf8] animate-pulse" />
          Live
        </span>
      )}
    </div>

    <p className={`text-white/60 text-[12px] leading-relaxed mb-3 ${side === 'right' ? 'text-right' : ''}`}>
      {stop.description}
    </p>

    <div className={`flex flex-wrap gap-1 ${side === 'right' ? 'justify-end' : ''}`}>
      {stop.tags.map(t => (
        <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/35 font-semibold">
          {t}
        </span>
      ))}
    </div>
  </div>
);

/* ── Main component ── */
const Experience = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 50, damping: 22 });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="bg-[#0a0a0a] py-14 md:py-24 px-6 md:px-12 w-full overflow-hidden"
      style={{
        backgroundImage: [
          'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px)',
          'linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
        ].join(','),
        backgroundSize: '28px 28px, 60px 60px, 60px 60px',
      }}
    >
      {/* ── Header ── */}
      <div className="max-w-6xl mx-auto mb-8 md:mb-16">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
        
          <div className="flex items-end gap-6 flex-wrap">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">
              Experience
            </h2>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }} style={{ originX: 0 }}
              className="hidden md:block flex-1 h-px bg-gradient-to-r from-[#38bdf8] to-transparent mb-3"
            />
          </div>
          
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          DESKTOP: Winding path with absolute-positioned cards
      ══════════════════════════════════════════════════════════ */}
      <div className="hidden md:block max-w-6xl mx-auto">
        <div className="relative" style={{ height: TOTAL_H }}>

          {/* ── SVG winding path ── */}
          <svg
            className="absolute top-0 pointer-events-none"
            style={{ left: '50%', transform: 'translateX(-50%)' }}
            width={SVG_W}
            height={TOTAL_H}
            viewBox={`0 0 ${SVG_W} ${TOTAL_H}`}
          >
            {/* Guide (faint dashes) */}
            <path
              d={PATH_D}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="2.5"
              strokeDasharray="6 10"
            />
            {/* Animated orange fill */}
            <motion.path
              d={PATH_D}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength }}
            />
            {/* Connector lines from pin to card edge */}
            {stops.map((_, i) => {
              const px = pinX(i), py = pinY(i);
              const isRight = px > CX;
              return (
                <line
                  key={i}
                  x1={px} y1={py}
                  x2={isRight ? SVG_W : 0} y2={py}
                  stroke="rgba(56,189,248,0.25)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              );
            })}
          </svg>

          {/* ── Pins ── */}
          {stops.map((stop, i) => {
            const px = pinX(i), py = pinY(i);
            return (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="absolute z-20"
                style={{
                  left: `calc(50% - ${CX}px + ${px}px)`,
                  top: py,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Pulse ring */}
                {stop.current && (
                  <motion.div
                    animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-[#38bdf8]"
                  />
                )}
                <div className={`relative w-11 h-11 rounded-full flex items-center justify-center border-2 shadow-lg z-10 ${
                  stop.current
                    ? 'bg-[#38bdf8] border-[#38bdf8] shadow-[0_0_24px_rgba(56,189,248,0.7)]'
                    : 'bg-[#161616] border-white/25'
                }`}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                {/* Stop number */}
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-black text-white/20 font-mono tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </motion.div>
            );
          })}

          {/* ── Stop number markers on path ── */}
          {stops.map((_, i) => {
            const py = pinY(i);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ left: '50%', top: py - ROW_H / 2 + 12 }}
              >
                <span className="text-[9px] font-black text-white/15 font-mono">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </motion.div>
            );
          })}

          {/* ── Cards ── */}
          {stops.map((stop, i) => {
            const px = pinX(i), py = pinY(i);
            const isRight = px > CX;
            const GAP = SVG_W / 2 + 28; // distance from centre to card edge

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isRight ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 + 0.1 }}
                viewport={{ once: true, margin: '-60px' }}
                className="absolute"
                style={
                  isRight
                    ? { left: `calc(50% + ${GAP}px)`, top: py - 90, width: `calc(50% - ${GAP + 12}px)` }
                    : { right: `calc(50% + ${GAP}px)`, top: py - 90, width: `calc(50% - ${GAP + 12}px)` }
                }
              >
                <StopCard stop={stop} side={isRight ? 'left' : 'right'} />
              </motion.div>
            );
          })}

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          MOBILE: Simple vertical stack with left pin line
      ══════════════════════════════════════════════════════════ */}
      <div className="md:hidden max-w-xl mx-auto">
        <div className="relative pl-14">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(to bottom, rgba(56,189,248,0.4) 0px, rgba(56,189,248,0.4) 8px, transparent 8px, transparent 18px)'
            }} />
          </div>

          {stops.map((stop, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: '-40px' }}
                className="relative pb-10 last:pb-0"
              >
                {/* Pin */}
                <div className="absolute -left-[34px] top-5 z-10">
                  {stop.current && (
                    <motion.div
                      animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-[#38bdf8]"
                    />
                  )}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 z-10 relative ${
                    stop.current ? 'bg-[#38bdf8] border-[#38bdf8] shadow-[0_0_16px_rgba(56,189,248,0.6)]' : 'bg-[#161616] border-white/20'
                  }`}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                </div>
                <StopCard stop={stop} side="left" />
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default Experience;

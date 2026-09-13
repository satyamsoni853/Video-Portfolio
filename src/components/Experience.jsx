import React, { useRef } from 'react';
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


/* ── Card ── */
const StopCard = ({ stop, align = 'left' }) => (
  <div
    className={`rounded-2xl border p-4 sm:p-5 transition-all duration-300 hover:scale-[1.02] ${
      stop.current
        ? 'bg-[#38bdf8]/[0.07] border-[#38bdf8]/40 shadow-[0_0_28px_rgba(56,189,248,0.1)]'
        : 'bg-white/[0.025] border-white/[0.08] hover:border-white/20'
    }`}
  >
    <div className={`flex items-center gap-1.5 mb-2 ${align === 'right' ? 'justify-end' : ''}`}>
      <svg className="w-3 h-3 text-[#38bdf8] shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
      <span className="text-[10px] font-black text-white/35 tracking-[0.15em] uppercase font-mono">
        {stop.location}
      </span>
    </div>

    <h3 className={`text-sm sm:text-base font-black text-white leading-tight mb-0.5 ${align === 'right' ? 'text-right' : ''}`}>
      {stop.role}
    </h3>
    <p className={`text-[#38bdf8] font-bold text-sm mb-2 ${align === 'right' ? 'text-right' : ''}`}>
      {stop.company}
    </p>

    <div className={`flex items-center gap-2 mb-3 flex-wrap ${align === 'right' ? 'justify-end' : ''}`}>
      <span className="text-[10px] font-semibold text-white/30 font-mono">{stop.duration}</span>
      {stop.current && (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#38bdf8] text-[9px] font-black tracking-widest uppercase">
          <span className="w-1 h-1 rounded-full bg-[#38bdf8] animate-pulse" />
          Live
        </span>
      )}
    </div>

    <p className={`text-white/55 text-[12px] leading-relaxed mb-3 ${align === 'right' ? 'text-right' : ''}`}>
      {stop.description}
    </p>

    <div className={`flex flex-wrap gap-1 ${align === 'right' ? 'justify-end' : ''}`}>
      {stop.tags.map(t => (
        <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/35 font-semibold">
          {t}
        </span>
      ))}
    </div>
  </div>
);

/* ── Pin dot ── */
const Pin = ({ current }) => (
  <div className="relative flex items-center justify-center w-10 h-10">
    {current && (
      <motion.div
        animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-[#38bdf8]"
      />
    )}
    <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 shadow-lg ${
      current
        ? 'bg-[#38bdf8] border-[#38bdf8] shadow-[0_0_22px_rgba(56,189,248,0.7)]'
        : 'bg-[#161616] border-white/25'
    }`}>
      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    </div>
  </div>
);

/* ── Main ── */
const Experience = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.85', 'end 0.15'],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 60, damping: 28 });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="bg-[#0a0a0a] py-14 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 w-full overflow-hidden"
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
      <div className="max-w-5xl mx-auto mb-10 md:mb-16">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex items-end gap-6 flex-wrap"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">
            Experience
          </h2>
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }} style={{ originX: 0 }}
            className="hidden md:block flex-1 h-px bg-gradient-to-r from-[#38bdf8] to-transparent mb-3"
          />
        </motion.div>
      </div>

      {/* ════════════════════════════════════════
          MOBILE (<md) — left-pin vertical stack
      ════════════════════════════════════════ */}
      <div className="md:hidden max-w-lg mx-auto">
        <div className="relative pl-12">
          <div
            className="absolute left-4 top-4 bottom-4 w-px"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom,rgba(56,189,248,0.4) 0px,rgba(56,189,248,0.4) 8px,transparent 8px,transparent 18px)',
            }}
          />
          {stops.map((stop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-40px' }}
              className="relative pb-8 last:pb-0"
            >
              <div className="absolute -left-[30px] top-4 z-10">
                {stop.current && (
                  <motion.div
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-[#38bdf8]"
                  />
                )}
                <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  stop.current
                    ? 'bg-[#38bdf8] border-[#38bdf8] shadow-[0_0_16px_rgba(56,189,248,0.6)]'
                    : 'bg-[#161616] border-white/20'
                }`}>
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
              </div>
              <StopCard stop={stop} align="left" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          TABLET / DESKTOP (md+)
          CSS Grid: [card-left] [56px centre] [card-right]
          Even-indexed → LEFT col, Odd-indexed → RIGHT col
      ════════════════════════════════════════════════ */}
      <div className="hidden md:block max-w-5xl mx-auto">
        <div className="relative grid grid-cols-[1fr_56px_1fr]">

          {/* Animated centre line
               top-10 / bottom-10 = 40px inset = py-5 padding (20px) + half pin height (20px)
               This makes the line start and end exactly at pin centres */}
          <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-0.5 overflow-hidden pointer-events-none z-0 rounded-full">
            {/* faint guide */}
            <div className="absolute inset-0 bg-white/[0.07]" />
            {/* animated fill — grows from top pin to bottom pin as you scroll */}
            <motion.div
              className="absolute top-0 left-0 right-0 bottom-0 origin-top"
              style={{
                scaleY: lineScale,
                background: 'linear-gradient(to bottom, #38bdf8, #38bdf8cc, #38bdf855)',
              }}
            />
          </div>

          {stops.map((stop, i) => {
            const goesLeft = i % 2 === 0;
            return (
              <React.Fragment key={i}>

                {/* LEFT col */}
                <div className="flex items-center justify-end pr-5 py-5">
                  {goesLeft ? (
                    <motion.div
                      className="w-full"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true, margin: '-50px' }}
                    >
                      <StopCard stop={stop} align="right" />
                    </motion.div>
                  ) : (
                    <div className="w-5 h-px bg-[#38bdf8]/20 self-center" />
                  )}
                </div>

                {/* CENTRE — pin + number */}
                <div className="flex flex-col items-center justify-center py-5 relative z-10">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-1"
                  >
                    <Pin current={stop.current} />
                    <span className="text-[9px] font-black text-white/20 font-mono tracking-widest">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
                </div>

                {/* RIGHT col */}
                <div className="flex items-center justify-start pl-5 py-5">
                  {!goesLeft ? (
                    <motion.div
                      className="w-full"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true, margin: '-50px' }}
                    >
                      <StopCard stop={stop} align="left" />
                    </motion.div>
                  ) : (
                    <div className="w-5 h-px bg-[#38bdf8]/20 self-center" />
                  )}
                </div>

              </React.Fragment>
            );
          })}
        </div>
      </div>

    </section>
  );
};


export default Experience;


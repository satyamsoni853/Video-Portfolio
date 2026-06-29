import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Building resilient, pixel-perfect digital experiences using React and Next.js. Turning complex requirements into seamless, high-speed interfaces.',
    tags: ['Next.js', 'Performance', 'SEO'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
      </svg>
    ),
  },
  {
    title: 'App Development',
    description: 'Crafting cross-platform mobile applications with React Native — smooth animations, native APIs, and a single codebase for iOS & Android.',
    tags: ['React Native', 'iOS & Android', 'Expo'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15h3" />
      </svg>
    ),
    highlight: true,
  },
  {
    title: 'Full Stack Mastery',
    description: 'Architecting the entire stack — from high-availability Java backends to responsive frontends. Focus on data integrity and API performance.',
    tags: ['Java / Spring Boot', 'REST APIs', 'Microservices'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: 'UI / UX Design',
    description: 'Designing intuitive, brand-focused interfaces that prioritize user journey and accessibility. Smooth micro-interactions and consistent systems.',
    tags: ['Figma', 'Motion Design', 'Prototyping'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Frontend Engineering',
    description: 'Crafting optimized architectures for complex applications. Expertise in state management, lifecycle, and enterprise-scale UI.',
    tags: ['Advanced React', 'Redux Toolkit', 'Framer Motion'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
  {
    title: 'Database Solutions',
    description: 'Engineering robust relational & NoSQL databases, optimizing query performance for high-availability systems.',
    tags: ['PostgreSQL', 'MongoDB', 'Data Modeling'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: 'Speed & Performance',
    description: 'Transforming slow applications into lightning-fast experiences. Focus on Core Web Vitals, lazy loading, and edge caching.',
    tags: ['Lighthouse', 'Asset Optimization', 'Code Splitting'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Business Logic',
    description: 'Helping brands launch high-quality digital products. Combining technical expertise with product growth strategy.',
    tags: ['MVP Architecture', 'Product Strategy', 'Scalability'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Quality Assurance',
    description: 'Ensuring zero-defect releases through comprehensive testing strategies and systematic edge-case discovery.',
    tags: ['Unit Testing', 'Debugging', 'Security Audit'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="bg-[#050508] py-14 md:py-24 px-6 md:px-12 w-full relative overflow-hidden">

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Blue glow top-right */}
      <div className="absolute -top-40 right-0 w-[500px] h-[400px] rounded-full bg-[#38bdf8]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* ── Header ── */}
        <div data-aos="fade-up" className="mb-8 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 rounded-full bg-[#38bdf8]" />
              <span className="text-[#38bdf8] text-[11px] font-mono font-bold tracking-[0.3em] uppercase">What I Do</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tight">
              <span className="text-white/30">Areas of</span>
              <br />
              <span className="text-white">Expertise</span>
            </h2>
          </div>
          <p className="text-white/35 text-sm leading-relaxed max-w-xs font-mono">
            9 disciplines · Full-stack to mobile · Design to deploy
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={i * 40}
              className={`group relative p-7 transition-all duration-300 cursor-default overflow-hidden ${
                service.highlight
                  ? 'bg-[#0d1f35] hover:bg-[#0f2540]'
                  : 'bg-[#08090d] hover:bg-[#0d1117]'
              }`}
            >
              {/* Blue glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.08) 0%, transparent 60%)' }}
              />

              {/* Left accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-[#38bdf8]/0 group-hover:bg-[#38bdf8]/70 transition-all duration-300 rounded-full" />

              {/* Number */}
              <span className="absolute top-5 right-6 text-[42px] font-black text-white/[0.04] group-hover:text-[#38bdf8]/10 leading-none transition-colors duration-300 select-none font-mono">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                service.highlight
                  ? 'bg-[#38bdf8]/15 text-[#38bdf8]'
                  : 'bg-white/[0.05] text-white/40 group-hover:bg-[#38bdf8]/10 group-hover:text-[#38bdf8]'
              }`}>
                {service.icon}
              </div>

              <h3 className="text-[15px] font-black text-white leading-tight mb-2.5 tracking-tight">
                {service.title}
                {service.highlight && (
                  <span className="ml-2 text-[9px] font-black text-[#38bdf8] tracking-widest uppercase align-middle">New</span>
                )}
              </h3>

              <p className="text-white/40 text-[12px] leading-relaxed mb-4 group-hover:text-white/55 transition-colors duration-300">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border tracking-wide transition-all duration-300 ${
                      service.highlight
                        ? 'border-[#38bdf8]/30 text-[#38bdf8]/80 bg-[#38bdf8]/5'
                        : 'border-white/[0.07] text-white/30 group-hover:border-[#38bdf8]/25 group-hover:text-[#38bdf8]/70'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expertise;

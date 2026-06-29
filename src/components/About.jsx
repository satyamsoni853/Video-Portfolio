import React from 'react';
import stackImage from '../assets/about/image.png';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';

const stacks = [
  {
    title: 'Java Full Stack',
    delay: 300,
    techs: [
      { name: 'Java',       path: 'java/java-original.svg' },
      { name: 'Spring',     path: 'spring/spring-original.svg' },
      { name: 'Hibernate',  path: 'hibernate/hibernate-original.svg' },
      { name: 'PostgreSQL', path: 'postgresql/postgresql-original.svg' },
      { name: 'MySQL',      path: 'mysql/mysql-original.svg' },
      { name: 'Maven',      path: 'maven/maven-original.svg' },
    ],
  },
  {
    title: 'Python Full Stack',
    delay: 450,
    techs: [
      { name: 'Python',  path: 'python/python-original.svg' },
      { name: 'FastAPI', path: 'fastapi/fastapi-original.svg' },
      { name: 'Django',  path: 'django/django-plain.svg',   invert: true },
      { name: 'Flask',   path: 'flask/flask-original.svg',  invert: true },
      { name: 'NumPy',   path: 'numpy/numpy-original.svg' },
      { name: 'Pandas',  path: 'pandas/pandas-original.svg' },
    ],
  },
  {
    title: 'MERN Full Stack',
    delay: 600,
    techs: [
      { name: 'MongoDB',    path: 'mongodb/mongodb-original.svg' },
      { name: 'Express',    path: 'express/express-original.svg', invert: true },
      { name: 'React',      path: 'react/react-original.svg' },
      { name: 'Node.js',    path: 'nodejs/nodejs-original.svg' },
      { name: 'JavaScript', path: 'javascript/javascript-original.svg' },
      { name: 'TypeScript', path: 'typescript/typescript-original.svg' },
    ],
  },
];

const StackCard = ({ title, techs, delay }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={delay}
    className="group rounded-2xl bg-black/20 backdrop-blur-sm border border-white/15 p-4 hover:border-white/35 hover:bg-black/30 transition-all duration-300 cursor-default"
  >
    {/* Header */}
    <p className="text-[10px] font-black tracking-[0.22em] uppercase text-white/50 group-hover:text-white/80 transition-colors mb-3">
      {title}
    </p>

    {/* Icon row */}
    <div className="flex flex-wrap gap-3 items-center">
      {techs.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center gap-1 group/icon">
          <div className="w-9 h-9 rounded-xl bg-black/25 flex items-center justify-center border border-white/10 group-hover/icon:border-white/30 group-hover/icon:scale-110 transition-all duration-200">
            <img
              src={CDN + tech.path}
              alt={tech.name}
              className={`w-5 h-5 object-contain ${tech.invert ? 'invert' : ''}`}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <span className="text-[9px] font-semibold text-white/40 group-hover/icon:text-white/70 transition-colors leading-none">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#08090f] pt-12 pb-20 md:pt-20 md:pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[320px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0" />
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]" />
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner" />
              </div>
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img src={stackImage} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Bio + Stack Cards */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">

          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Hello!</h2>
          <p className="text-lg font-medium mb-10 leading-relaxed max-w-3xl text-slate-300">
            Hi, my name is{' '}
            <span className="text-[#38bdf8] text-xl font-black mx-1 tracking-wide uppercase">Satyam Soni</span>,
            a results-driven Full Stack Developer based in Mohali, Punjab, with 2.5+ years of experience
            building large-scale, enterprise-ready web applications across Java, Python, and MERN ecosystems.
          </p>

          {/* Stack Cards */}
          <div className="flex flex-col gap-3 w-full">
            {stacks.map((stack) => (
              <StackCard key={stack.title} {...stack} />
            ))}
          </div>

        </div>
      </div>

      {/* Torn paper divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#08090f]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
    </section>
  );
};

export default About;

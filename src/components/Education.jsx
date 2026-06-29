import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Kamala Nehru Institute of Physical and Social Sciences',
    short: 'KNIPSS, Sultanpur',
    location: 'Sultanpur, Uttar Pradesh',
    duration: '2021 – 2025',
  
    description:
      'Specialized in Full Stack Web Development and Software Engineering. Built strong foundations in Data Structures, Algorithms, OOP, DBMS, and Modern Web Architectures.',
    highlight: true,
    icon: '🎓',
  },
  {
    degree: 'Intermediate — 12th Grade (Science)',
    institution: 'Sangam Modern Inter College',
    short: 'SMIC, Prayagraj',
    location: 'Prayagraj, Uttar Pradesh',
    duration: '2019 – 2020',
    gpa: null,
    description: 'Physics, Chemistry & Mathematics stream with focus on analytical problem-solving.',
    highlight: false,
    icon: '📚',
  },
  {
    degree: 'High School — 10th Grade',
    institution: 'Maharishi Vidya Mandir ',
    short: 'SMIC, Prayagraj',
    location: 'Sultanpur, Uttar Pradesh',
    duration: '2017 – 2018',
    gpa: null,
    description: 'General academics with strong performance in Mathematics and Science.',
    highlight: false,
    icon: '🏫',
  },
];

const highlights = [
  { value: '4', label: 'Years of Study', sub: '2021 – 2025' },
  { value: 'CSE', label: 'Major', sub: 'Computer Science' },
  { value: '7.2', label: 'CGPA', sub: 'B.Tech Final' },
  { value: '3', label: 'Degrees', sub: '10th · 12th · B.Tech' },
];

const Education = () => {
  return (
    <section id="education" className="bg-white py-14 md:py-24 px-6 md:px-12 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-8 md:mb-14"
        >
         
          <div className="flex items-end gap-6 flex-wrap">
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight leading-none">Education</h2>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }} style={{ originX: 0 }}
              className="hidden md:block flex-1 h-px bg-gradient-to-r from-[#0369a1] to-transparent mb-3"
            />
          </div>
        </motion.div>

        

        {/* Education cards — vertical timeline */}
        <div className="relative flex flex-col gap-0">
          {/* Timeline line */}
          <div className="absolute left-[26px] top-8 bottom-8 w-px bg-gradient-to-b from-[#0369a1] via-[#0369a1]/30 to-transparent hidden md:block" />

          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative flex gap-6 md:gap-10 pb-10 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex shrink-0 flex-col items-center pt-1">
                <div className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-xl border-2 shrink-0 z-10 ${
                  edu.highlight
                    ? 'bg-[#0369a1] border-[#0369a1] shadow-[0_0_24px_rgba(3,105,161,0.3)]'
                    : 'bg-white border-gray-200'
                }`}>
                  {edu.icon}
                </div>
              </div>

              {/* Card */}
              <div className={`flex-1 rounded-2xl border p-7 transition-all duration-300 ${
                edu.highlight
                  ? 'border-[#0369a1]/30 bg-gradient-to-br from-slate-50 to-white shadow-[0_8px_40px_rgba(3,105,161,0.12)]'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
              }`}>
                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <span className={`inline-block text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-2 ${
                      edu.highlight
                        ? 'bg-[#0369a1] text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {edu.duration}
                    </span>
                    {edu.gpa && (
                      <span className="ml-2 inline-block text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700">
                        {edu.gpa}
                      </span>
                    )}
                  </div>
                  {edu.highlight && (
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#0369a1]/60 border border-[#0369a1]/20 px-3 py-1 rounded-full">
                      Most Recent
                    </span>
                  )}
                </div>

                <h3 className={`text-xl font-black leading-tight mb-1 ${edu.highlight ? 'text-gray-900' : 'text-gray-800'}`}>
                  {edu.degree}
                </h3>
                <p className={`text-sm font-bold mb-1 ${edu.highlight ? 'text-[#0369a1]' : 'text-gray-500'}`}>
                  {edu.institution}
                </p>
                <div className="flex items-center gap-1 mb-4">
                  <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-[11px] text-gray-400 font-mono">{edu.location}</span>
                </div>
                <p className={`text-sm leading-relaxed ${edu.highlight ? 'text-gray-600' : 'text-gray-500'}`}>
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certs = [
  { src: '/certification/Codsoftt.png', title: 'Web Development',        provider: 'CodSoft' },
  { src: '/certification/Jspiders.png', title: 'Software Engineering',    provider: 'JSpiders' },
  { src: '/certification/img10.jpg',    title: 'Full Stack Mastery',      provider: 'Accredited Inst.' },
  { src: '/certification/img11.png',    title: 'Backend Architecture',    provider: 'Accredited Inst.' },
  { src: '/certification/img3.jpg',     title: 'Cloud Infrastructure',    provider: 'Accredited Inst.' },
  { src: '/certification/img4.jpg',     title: 'UI/UX Leadership',        provider: 'Accredited Inst.' },
  { src: '/certification/img6.jpg',     title: 'Data Algorithms',         provider: 'Accredited Inst.' },
  { src: '/certification/img7.jpg',     title: 'Digital Transformation',  provider: 'Accredited Inst.' },
  { src: '/certification/img8.jpg',     title: 'Advanced Development',    provider: 'Accredited Inst.' },
  { src: '/certification/img9.jpg',     title: 'Professional Excellence', provider: 'Accredited Inst.' },
];

/* ── Single card ── */
const CertCard = ({ cert, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    onClick={onClick}
    className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] cursor-pointer hover:border-[#38bdf8]/40 hover:bg-[#38bdf8]/[0.04] transition-all duration-300"
  >
    {/* Image */}
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/20">
      <img
        src={cert.src}
        alt={cert.title}
        className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
        onError={(e) => { e.target.style.opacity = '0.3'; }}
      />
      {/* Hover zoom hint */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
        <div className="w-11 h-11 rounded-full bg-[#38bdf8] flex items-center justify-center shadow-[0_0_24px_rgba(56,189,248,0.5)] scale-90 group-hover:scale-100 transition-transform duration-300">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zM11 8v6M8 11h6" />
          </svg>
        </div>
      </div>
    </div>

    {/* Info */}
    <div className="p-4">
      <div className="flex items-center gap-1.5 mb-1.5">
        <svg className="w-3 h-3 text-[#38bdf8] shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01z"/>
        </svg>
        <span className="text-[9px] font-black uppercase tracking-[0.18em] text-white/30">Verified Credential</span>
      </div>
      <h4 className="text-sm font-black text-white mb-0.5 leading-tight">{cert.title}</h4>
      <p className="text-[11px] font-bold text-[#38bdf8]/70">{cert.provider}</p>
    </div>

    {/* Shine sweep */}
    <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transition-all duration-1000 group-hover:left-[100%] pointer-events-none" />
  </motion.div>
);

/* ── Main section ── */
const Certifications = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="certifications"
      className="bg-[#0a0a0a] py-14 md:py-24 px-6 md:px-12 w-full"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-8 md:mb-14"
        >
       
          <div className="flex items-end gap-6 flex-wrap">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">
              Certifications
            </h2>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }} style={{ originX: 0 }}
              className="hidden md:block flex-1 h-px bg-gradient-to-r from-[#38bdf8] to-transparent mb-3"
            />
          </div>
          <p className="text-white/25 text-[11px] font-mono mt-3 tracking-[0.2em] uppercase">
            {certs.length} Credentials · Click any card to view full certificate
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {certs.map((cert, i) => (
            <CertCard key={i} cert={cert} index={i} onClick={() => setSelected(cert)} />
          ))}
        </div>
      </div>

      {/* ── Lightbox modal ── */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="relative w-full max-w-4xl rounded-3xl overflow-hidden border border-white/10 bg-[#111] shadow-[0_40px_80px_rgba(0,0,0,0.8)] z-10"
            >
              {/* Close btn */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-[#38bdf8] hover:border-[#38bdf8] transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="aspect-[4/3] w-full bg-black flex items-center justify-center p-6">
                <img
                  src={selected.src}
                  alt={selected.title}
                  className="max-w-full max-h-full object-contain rounded-xl"
                />
              </div>

              {/* Footer */}
              <div className="px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/[0.07]">
                <div>
                  <h3 className="text-xl font-black text-white">{selected.title}</h3>
                  <p className="text-[#38bdf8] font-bold text-sm uppercase tracking-widest mt-0.5">{selected.provider}</p>
                </div>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/25 shrink-0">
                  <svg className="w-4 h-4 text-[#38bdf8]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/50">Verified Credential</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;

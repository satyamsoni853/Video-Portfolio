import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certificates',   href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive]       = useState('home');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Active-section tracker */
  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace('#', ''));
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-black/70 backdrop-blur-2xl border-b border-white/[0.07] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* ── Logo ── */}
        <a
          href="#home"
          className="text-white leading-none select-none"
          style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2rem' }}
        >
          Satyam Soni
        </a>

        {/* ── Desktop nav links ── */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = active === id;
            return (
              <a
                key={label}
                href={href}
                className={`relative text-[13px] font-semibold tracking-wide transition-colors duration-300 group ${
                  isActive ? 'text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                {label}
                {/* underline */}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[1.5px] rounded-full bg-[#38bdf8] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
                {/* active dot */}
                {isActive && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#38bdf8]" />
                )}
              </a>
            );
          })}
        </div>

        {/* ── Desktop CTA ── */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-white text-sm font-bold hover:bg-[#38bdf8] hover:text-[#08090f] hover:border-[#38bdf8] hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all duration-300"
        >
          Hire Me
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        {/* ── Mobile: animated hamburger ── */}
        <button
          onClick={() => setIsOpen(o => !o)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-end gap-[5px] w-9 h-9 focus:outline-none"
        >
          <span
            className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${
              isOpen ? 'w-6 rotate-45 translate-y-[6.5px]' : 'w-6'
            }`}
          />
          <span
            className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${
              isOpen ? 'w-0 opacity-0' : 'w-4'
            }`}
          />
          <span
            className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${
              isOpen ? 'w-6 -rotate-45 -translate-y-[6.5px]' : 'w-6'
            }`}
          />
        </button>
      </div>

      {/* ── Mobile full-screen overlay menu ── */}
      <div
        className={`md:hidden fixed inset-0 z-40 flex flex-col transition-all duration-500 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(6,7,11,0.98)', backdropFilter: 'blur(24px)' }}
      >
        {/* spacer for nav height */}
        <div className="h-[64px] shrink-0" />

        <div className="flex flex-col justify-center flex-1 px-8 pb-10 gap-1">

          {navLinks.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between py-4 border-b border-white/[0.07] group"
              style={{
                transitionDelay: isOpen ? `${i * 55}ms` : '0ms',
                transform: isOpen ? 'translateY(0)' : 'translateY(16px)',
                opacity: isOpen ? 1 : 0,
                transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.45s ease',
              }}
            >
              <span className="text-2xl font-black text-white/80 group-hover:text-white tracking-tight transition-colors">
                {label}
              </span>
              <svg
                className="w-5 h-5 text-white/20 group-hover:text-[#38bdf8] transition-colors"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 py-4 rounded-full bg-[#38bdf8] text-[#08090f] font-black text-center text-lg hover:bg-[#7dd3fc] transition-colors shadow-[0_0_30px_rgba(56,189,248,0.3)]"
          >
            Hire Me
          </a>

          {/* Social row */}
          <div className="flex items-center gap-6 mt-8 justify-center">
            {[
              { label: 'GitHub',   href: 'https://github.com/satyamsoni853' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/satyam-soni-90a618258/' },
              { label: 'Twitter',  href: 'https://x.com/crazy_soni_' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-[#38bdf8] text-xs font-bold tracking-widest uppercase transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

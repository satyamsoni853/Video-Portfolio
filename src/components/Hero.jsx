import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/make_them_into_video_he_say_i.mp4';

const tags = ['MERN Stack Dev', 'Java Full Stack', 'React · Next.js'];

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const VideoControls = () => (
    <div className="flex items-center gap-2">
      <button
        onClick={toggleMute}
        className={`flex items-center gap-1.5 px-3 h-9 rounded-full backdrop-blur-sm border transition-all duration-300 text-xs font-bold ${
          isMuted
            ? 'bg-[#38bdf8]/90 border-[#38bdf8] text-[#08090f] animate-pulse'
            : 'bg-black/50 border-white/20 text-white hover:bg-white/20'
        }`}
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <>
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
            <span>Unmute</span>
          </>
        ) : (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        )}
      </button>
      <button
        onClick={toggleVideo}
        className="w-9 h-9 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  );

  return (
    <section id="home" className="w-full bg-[#0a0a0a]">

      {/* ── Video ── */}
      <div className="relative w-full aspect-video md:aspect-auto md:h-screen">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
          onEnded={() => setIsPlaying(false)}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        {/* Desktop text overlay — hidden on mobile */}
        <div className="hidden md:flex absolute inset-0 flex-col justify-end px-16 pb-16 max-w-4xl">
          <h1
            data-aos="fade-up"
            data-aos-delay="80"
            className="text-white text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Hi, I'm
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="160"
            className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-5"
            style={{ WebkitTextStroke: '2px white', color: 'transparent', fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Satyam Soni
          </h1>
          <div data-aos="fade-up" data-aos-delay="220" className="flex flex-wrap gap-2 mb-5">
            {tags.map(t => (
              <span key={t} className="px-3 py-1 rounded-full border border-white/20 text-white/70 text-xs font-semibold tracking-wide backdrop-blur-sm bg-black/20">{t}</span>
            ))}
          </div>
          <p data-aos="fade-up" data-aos-delay="280" className="text-white/70 text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
            2.5+ years building enterprise-ready web applications — from Spring Boot
            backends to pixel-perfect React frontends. Currently at{' '}
            <span className="text-white font-semibold">Kapoor Wealth</span> as MERN Stack Developer.
          </p>
          <div data-aos="fade-up" data-aos-delay="340" className="flex flex-wrap gap-3">
            <a href="#projects" className="px-6 py-3 rounded-full bg-white text-[#08090f] font-bold hover:bg-white/90 transition-all duration-300 text-sm shadow-lg">View My Work</a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-white/40 text-white font-bold hover:border-white/70 hover:bg-white/10 transition-all duration-300 text-sm backdrop-blur-sm">Contact Me</a>
          </div>
        </div>

        {/* Desktop video controls */}
        <div className="hidden md:flex absolute bottom-8 right-12 z-10">
          <VideoControls />
        </div>
      </div>

      {/* ── Mobile text block (below video) ── */}
      <div className="md:hidden bg-[#0a0a0a] px-6 pt-6 pb-2">
        <h1
          className="text-white text-4xl font-black tracking-tight leading-tight mb-1"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Hi, I'm
        </h1>
        <h1
          className="text-4xl font-black tracking-tight leading-tight mb-4"
          style={{ WebkitTextStroke: '1.5px white', color: 'transparent', fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Satyam Soni
        </h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(t => (
            <span key={t} className="px-3 py-1 rounded-full border border-white/20 text-white/60 text-[11px] font-semibold tracking-wide bg-white/5">{t}</span>
          ))}
        </div>
        <p className="text-white/60 text-sm leading-relaxed mb-5">
          2.5+ years building enterprise-ready web apps — from Spring Boot backends
          to pixel-perfect React frontends. Currently at{' '}
          <span className="text-white font-semibold">Kapoor Wealth</span>.
        </p>
        <div className="flex flex-wrap gap-3 mb-4">
          <a href="#projects" className="px-5 py-2.5 rounded-full bg-white text-[#08090f] font-bold text-sm shadow-lg">View My Work</a>
          <a href="#contact" className="px-5 py-2.5 rounded-full border border-white/30 text-white font-bold text-sm">Contact Me</a>
        </div>
        {/* Mobile video controls */}
        <div className="flex justify-end pb-2">
          <VideoControls />
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="bg-[#0a0a0a] px-6 md:px-16 py-5 md:py-8 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto flex gap-8 md:gap-10 items-center">
          {[
            { value: '2.5+', label: 'Years Exp.' },
            { value: '16+', label: 'Projects' },
            { value: '20+', label: 'Tech Stack' },
          ].map(s => (
            <div key={s.label}>
              <span className="block text-xl md:text-3xl font-black text-white">{s.value}</span>
              <span className="text-[9px] md:text-[10px] text-white/30 font-black tracking-[0.2em] uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

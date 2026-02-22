"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import ThreeDBackground from '@/components/ThreeDBackground';
import {
  ArrowRight, BookOpen, Users, Zap, Target,
  Trophy, Medal, Star, Award, ArrowLeft, ChevronLeft, ChevronRight,
  GraduationCap, MapPin, Phone, Mail
} from "lucide-react";
import Image from "next/image";

// ─── HERO BANNER WITH IMAGE SLIDER ───────────────────────────────────────────

const bannerImages = [
  { src: "/ban1.jpeg", alt: "Campus Life" },
  { src: "/ban2.jpeg", alt: "Academic Excellence" },
  { src: "/ban3.jpeg", alt: "Sports & Activities" },
  { src: "/ban4.jpeg", alt: "Modern Facilities" },
  { src: "/ban5.jpeg", alt: "Student Achievement" },
];

function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((index + bannerImages.length) % bannerImages.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next]);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <Image
            src={bannerImages[current].src}
            alt={bannerImages[current].alt}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Layered Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/50 to-[#0a0f1e]/10 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/70 via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end pb-20 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm font-medium mb-6">
            <MapPin size={14} className="text-amber-400" />
           Garh  School, Pilani
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Bal Niketan
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-2" style={{ background: "linear-gradient(135deg, #f59e0b, #fbbf24, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Sr. Sec. School
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light mb-8 max-w-xl leading-relaxed">
            Shaping young minds with academic excellence, innovation, and values — <em>Known as Garh School</em>
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-[#0a0f1e] text-base shadow-2xl transition-all"
              style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)" }}
            >
              Explore Campus
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-base border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all"
            >
              Admission 2025
            </motion.button>
          </div>
        </motion.div>

        {/* Slide Controls */}
        <div className="flex items-center gap-4 mt-12">
          <button onClick={prev} className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {bannerImages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-10 bg-amber-400" : "w-4 bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>
          <button onClick={next} className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2 text-white/40 text-xs tracking-widest uppercase"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/40" />
        Scroll
      </motion.div>
    </section>
  );
}

// ─── MARQUEE STRIP ────────────────────────────────────────────────────────────

function MarqueeStrip() {
  const items = ["Academic Excellence", "Modern Classrooms", "Expert Faculty", "Holistic Development", "Sports & Arts", "RBSE Affiliated", "Co-Education School"];
  return (
    <div className="overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 py-3 relative">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-[#0a0f1e] font-bold text-sm tracking-widest uppercase flex items-center gap-4">
            {item}
            <span className="text-[#0a0f1e]/40">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── FEATURE CARDS ────────────────────────────────────────────────────────────

function FeatureSection() {
  const features = [
    { icon: BookOpen, title: "World-Class Education", description: "Comprehensive RBSE curriculum blended with modern pedagogical methods and digital tools.", color: "#3b82f6" },
    { icon: Users, title: "Expert Faculty", description: "Highly qualified and dedicated educators with a passion for student achievement.", color: "#8b5cf6" },
    { icon: Zap, title: "Innovation First", description: "Smart boards, computer labs, and tech-integrated classrooms across all grades.", color: "#f59e0b" },
    { icon: Target, title: "Holistic Growth", description: "Equal focus on academics, sports, arts, and moral development for every child.", color: "#10b981" },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">Why Choose Us</p>
          <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            A School That <br />
            <span >
              Truly Cares
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-7 rounded-3xl border border-white/8 bg-white/4 backdrop-blur-sm overflow-hidden cursor-default"
              >
                {/* Glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                  style={{ background: f.color }}
                />
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${f.color}22`, border: `1px solid ${f.color}44` }}
                >
                  <Icon size={22} style={{ color: f.color }} />
                </div>
                <h3 className="text-black font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT SECTION ───────────────────────────────────────────────────────────

function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 px-6 md:px-12 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Image Grid */}
        <motion.div
          className="relative grid grid-cols-2 gap-4 h-[520px]"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <div className="relative rounded-3xl overflow-hidden row-span-2">
            <Image src="/ban1.jpeg" alt="School" fill className="object-cover" />
          </div>
          <div className="relative rounded-3xl overflow-hidden">
            <Image src="/ban2.jpeg" alt="Students" fill className="object-cover" />
          </div>
          <div className="relative rounded-3xl overflow-hidden">
            <Image src="/ban3.jpeg" alt="Campus" fill className="object-cover" />
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-6 -right-6 p-5 rounded-2xl backdrop-blur-xl border border-white/10 text-center"
            style={{ background: "linear-gradient(135deg, #f59e0b22, #f9731622)" }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <p className="text-4xl font-black text-amber-400">25+</p>
            <p className="text-white/60 text-sm">Years of Excellence</p>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-4">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Building Futures <br /> Since 1999
          </h2>
          <p className="text-white/60 leading-relaxed mb-5 text-base">
            Bal Niketan Sr. Sec. School — affectionately known as <strong className="text-white">Garh School</strong> — stands as a beacon of quality education in the heart of Pilani, Rajasthan. For over two decades, we have nurtured thousands of students into confident, capable, and compassionate individuals.
          </p>
          <p className="text-white/60 leading-relaxed mb-10 text-base">
            Our holistic philosophy balances rigorous academics with character-building activities, ensuring every child is equipped for the challenges and opportunities of tomorrow's world.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {[["2000+", "Students"], ["150+", "Faculty"], ["95%", "Pass Rate"], ["50+", "Awards"]].map(([num, label]) => (
              <div key={label} className="flex flex-col items-center px-6 py-4 rounded-2xl border border-white/10 bg-white/4">
                <span className="text-2xl font-black text-amber-400">{num}</span>
                <span className="text-white/50 text-xs mt-0.5">{label}</span>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-[#0a0f1e] text-sm shadow-2xl"
            style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)" }}
          >
            Read Our Full Story
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FACILITIES SECTION ───────────────────────────────────────────────────────

function FacilitiesSection() {
  const facilities = [
    { title: "Smart Classrooms", description: "Interactive whiteboards and digital tools in every class", img: "/ban4.jpeg" },
    { title: "Science Labs", description: "Modern Physics, Chemistry and Biology laboratories", img: "/ban5.jpeg" },
    { title: "Library", description: "10,000+ books with digital reading resources", img: "/ban1.jpeg" },
    { title: "Sports Complex", description: "Multi-sport ground, courts, and fitness center", img: "/ban2.jpeg" },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Infrastructure</p>
          <h2 className="text-4xl md:text-6xl font-black text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            World-Class <span style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Facilities</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-white/8 cursor-default h-72"
            >
              <Image src={f.img} alt={f.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-lg mb-1">{f.title}</h3>
                <p className="text-white/60 text-sm leading-snug">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────

function AchievementsSection() {
  const achievements = [
    { title: "Board Results", value: "98%", icon: Trophy, color: "#f59e0b" },
    { title: "Olympiad Winners", value: "150+", icon: Medal, color: "#8b5cf6" },
    { title: "Sports Champions", value: "80+", icon: Star, color: "#10b981" },
    { title: "National Awards", value: "50+", icon: Award, color: "#3b82f6" },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 px-6 md:px-12 relative overflow-hidden bg-[#0a0f1e]">
      {/* BG decoration */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #f59e0b 0%, transparent 60%), radial-gradient(circle at 70% 50%, #8b5cf6 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.7 }}>
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Track Record</p>
          <h2 className="text-4xl md:text-6xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our <span style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Achievements</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative group p-8 rounded-3xl border border-white/8 bg-white/3 text-center overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${item.color}, transparent 70%)` }}
                />
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}33` }}
                >
                  <Icon size={28} style={{ color: item.color }} />
                </div>
                <h3 className="text-5xl font-black text-white mb-2">{item.value}</h3>
                <p className="text-white/50 text-sm">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── ALUMNI SLIDER ────────────────────────────────────────────────────────────

function AlumniSection() {
  const alumni = [
    { name: "Rohit Sharma", role: "IAS Officer", batch: "2005" },
    { name: "Priya Verma", role: "Google Engineer", batch: "2008" },
    { name: "Aman Gupta", role: "Entrepreneur", batch: "2010" },
    { name: "Neha Singh", role: "MBBS Doctor", batch: "2007" },
    { name: "Vikas Mehta", role: "IPS Officer", batch: "2003" },
    { name: "Kavita Joshi", role: "Professor", batch: "2006" },
    { name: "Rahul Jain", role: "Startup Founder", batch: "2012" },
    { name: "Sneha Kapoor", role: "Chartered Accountant", batch: "2009" },
    { name: "Arjun Yadav", role: "Software Architect", batch: "2011" },
    { name: "Pooja Sharma", role: "Bank Manager", batch: "2004" },
  ];

  const colors = ["#f59e0b", "#8b5cf6", "#10b981", "#3b82f6", "#f97316", "#ec4899", "#06b6d4", "#84cc16", "#6366f1", "#f59e0b"];
 const scrollRef = useRef(null);
const timerRef = useRef(null);

  const startScroll = () => {
    timerRef.current = setInterval(() => {
      if (scrollRef.current) scrollRef.current.scrollBy({ left: 310, behavior: "smooth" });
    }, 2500);
  };
  const stopScroll = () => { if (timerRef.current) clearInterval(timerRef.current); };

  useEffect(() => { startScroll(); return stopScroll; }, []);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-28 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Success Stories</p>
            <h2 className="text-4xl md:text-5xl font-black text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Proud <span style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Alumni</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button onClick={() => scrollRef.current?.scrollBy({ left: -310, behavior: "smooth" })} className="p-3 rounded-2xl border ">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scrollRef.current?.scrollBy({ left: 310, behavior: "smooth" })} className="p-3 rounded-2xl border">
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={stopScroll}
        onMouseLeave={startScroll}
        className="flex gap-5 overflow-x-auto scroll-smooth px-6 md:px-12 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {alumni.map((a, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04, y: -4 }}
            className="min-w-[240px] p-6 rounded-3xl border  backdrop-blur-sm flex-shrink-0"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-black mb-5"
              style={{ background: `linear-gradient(135deg, ${colors[i % colors.length]}44, ${colors[i % colors.length]}22)`, border: `1px solid ${colors[i % colors.length]}44` }}
            >
              {a.name.split(" ").map(w => w[0]).slice(0, 2).join("")}
            </div>
            <h3 className="text-black font-bold text-base">{a.name}</h3>
            <p className="text-amber-400 text-sm font-medium mt-0.5">{a.role}</p>
            <p className="text-white/30 text-xs mt-2">Batch of {a.batch}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── CTA SECTION ──────────────────────────────────────────────────────────────

function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 px-6 md:px-12 bg-[#0a0f1e] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #f59e0b44 0%, transparent 70%)" }}
      />
      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-4">Join Us</p>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          Ready to Shape <br />
          <span style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Your Future?
          </span>
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Admissions open for 2025–26. Take the first step toward an exceptional journey at Bal Niketan Sr. Sec. School, Pilani.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-[#0a0f1e] text-base shadow-2xl"
            style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)" }}
          >
            Apply for Admission
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-white text-base border border-white/20 hover:bg-white/8 transition"
          >
            <Phone size={16} /> Contact Us
          </motion.button>
        </div>

        {/* Contact Strip */}
        <div className="flex flex-wrap justify-center gap-8 mt-14 pt-10 border-t border-white/10">
          {[
            { icon: MapPin, text: "Pilani, Rajasthan 333031" },
            { icon: Phone, text: "+91 98765 43210" },
            { icon: Mail, text: "info@garschool.edu.in" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/40 text-sm">
              <Icon size={14} className="text-amber-400" />
              {text}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="pt-20">
    <ThreeDBackground/>
      <HeroBanner />
      <MarqueeStrip />
      <FeatureSection />
      <AboutSection />
      <FacilitiesSection />
      <AchievementsSection />
      <AlumniSection />
      <CTASection />
    </main>
  );
}
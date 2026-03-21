"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import ThreeDBackground from "@/components/ThreeDBackground";
import {
  ArrowRight,
  BookOpen,
  Users,
  Zap,
  Target,
  Trophy,
  Medal,
  Star,
  Award,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
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

  const goTo = useCallback(
    (index) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((index + bannerImages.length) % bannerImages.length);
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
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
            Garh School, Pilani
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Bal Niketan
          </h1>
          <h2
            className="text-3xl md:text-5xl font-bold mb-2"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #fbbf24, #f97316)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sr. Sec. School
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light mb-8 max-w-xl leading-relaxed">
            Shaping young minds with academic excellence, innovation, and values
            — <em>Known as Garh School</em>
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-[#0a0f1e] text-base shadow-2xl transition-all"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #f97316)",
              }}
            >
              Explore Campus
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
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
          <button
            onClick={prev}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition"
          >
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
          <button
            onClick={next}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition"
          >
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
  const items = [
    "Academic Excellence",
    "Modern Classrooms",
    "Expert Faculty",
    "Holistic Development",
    "Sports & Arts",
    "RBSE Affiliated",
    "Co-Education School",
  ];
  return (
    <div className="overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 py-3 relative">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-[#0a0f1e] font-bold text-sm tracking-widest uppercase flex items-center gap-4"
          >
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
    {
      icon: BookOpen,
      title: "World-Class Education",
      description:
        "Comprehensive RBSE curriculum blended with modern pedagogical methods and digital tools.",
      color: "#3b82f6",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description:
        "Highly qualified and dedicated educators with a passion for student achievement.",
      color: "#8b5cf6",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "Smart boards, computer labs, and tech-integrated classrooms across all grades.",
      color: "#f59e0b",
    },
    {
      icon: Target,
      title: "Holistic Growth",
      description:
        "Equal focus on academics, sports, arts, and moral development for every child.",
      color: "#10b981",
    },
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
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">
            Why Choose Us
          </p>
          <h2
            className="text-4xl md:text-6xl font-black text-primary leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A School That <br />
            <span>Truly Cares</span>
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
                  style={{
                    background: `${f.color}22`,
                    border: `1px solid ${f.color}44`,
                  }}
                >
                  <Icon size={22} style={{ color: f.color }} />
                </div>
                <h3 className="text-black font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {f.description}
                </p>
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
            <Image
              src="/ban1.jpeg"
              alt="School"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/ban2.jpeg"
              alt="Students"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/ban3.jpeg"
              alt="Campus"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-6 -right-6 p-5 rounded-2xl backdrop-blur-xl border border-white/10 text-center"
            style={{
              background: "linear-gradient(135deg, #f59e0b22, #f9731622)",
            }}
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
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-4">
            Our Story
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Building Futures <br /> Since 1999
          </h2>
          <p className="text-white/60 leading-relaxed mb-5 text-base">
            Bal Niketan Sr. Sec. School — affectionately known as{" "}
            <strong className="text-white">Garh School</strong> — stands as a
            beacon of quality education in the heart of Pilani, Rajasthan. For
            over two decades, we have nurtured thousands of students into
            confident, capable, and compassionate individuals.
          </p>
          <p className="text-white/60 leading-relaxed mb-10 text-base">
            Our holistic philosophy balances rigorous academics with
            character-building activities, ensuring every child is equipped for
            the challenges and opportunities of tomorrow's world.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {[
              ["2000+", "Students"],
              ["150+", "Faculty"],
              ["95%", "Pass Rate"],
              ["50+", "Awards"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="flex flex-col items-center px-6 py-4 rounded-2xl border border-white/10 bg-white/4"
              >
                <span className="text-2xl font-black text-amber-400">
                  {num}
                </span>
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
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FACILITIES SECTION ───────────────────────────────────────────────────────

function FacilitiesSection() {
  const facilities = [
    {
      title: "Smart Classrooms",
      description: "Interactive whiteboards and digital tools in every class",
      img: "/ban4.jpeg",
    },
    {
      title: "Science Labs",
      description: "Modern Physics, Chemistry and Biology laboratories",
      img: "/ban5.jpeg",
    },
    {
      title: "Library",
      description: "10,000+ books with digital reading resources",
      img: "/ban1.jpeg",
    },
    {
      title: "Sports Complex",
      description: "Multi-sport ground, courts, and fitness center",
      img: "/ban2.jpeg",
    },
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
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">
            Infrastructure
          </p>
          <h2
            className="text-4xl md:text-6xl font-black text-black"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            World-Class{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f59e0b, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Facilities
            </span>
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
              <Image
                src={f.img}
                alt={f.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-lg mb-1">{f.title}</h3>
                <p className="text-white/60 text-sm leading-snug">
                  {f.description}
                </p>
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
    {
      title: "Himanshu Saini",
      desc: "Gold medal in District Open Athletic Meet (Triple Jump), 2nd in Badminton, Swimming participant.",
      icon: Trophy,
    },
    {
      title: "Riya Mahich",
      desc: "3rd position in Spot Drawing Competition at VEBGYOR-2025.",
      icon: Star,
    },
    {
      title: "Manvi",
      desc: "2nd in 68th District Roller Skating (U-14), selected for State.",
      icon: Trophy,
    },
    {
      title: "District Tournament U-11",
      desc: "Held from 27–30 Sep 2024 for boys & girls.",
      icon: Star,
    },
    {
      title: "District Tournament U-14",
      desc: "Held from 18–21 Oct 2024 for boys & girls.",
      icon: Star,
    },
    {
      title: "Payal Sharma",
      desc: "Received ₹1,00,000 Indira Priyadarshini Award.",
      icon: Trophy,
    },
    {
      title: "Yuvraj Singh",
      desc: "4 Gold, 2 Silver, 1 Bronze in Rajasthan State Quan Ki Do Championship.",
      icon: Trophy,
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#0a0f1e] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-amber-400 uppercase tracking-widest text-sm mb-3">
            Achievements
          </p>
          <h2 className="text-4xl md:text-6xl font-black">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">
              Champions
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/20 to-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Card */}
                <div className="relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl h-full transition-all duration-300 group-hover:border-amber-400/40">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 mb-4">
                    <Icon size={22} className="text-black" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bottom Line Animation */}
                  <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-500" />
                </div>
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
    {
      name: "Anamika",
      role: "Sub Inspector, SSB",
      image: "/anamika.png",
      desc: "Serving as a Sub Inspector in SSB, known for dedication, discipline, and commitment to national security.",
      color: "#f59e0b",
      bg: "#fff7ed",
    },
    {
      name: "Babu Lal Verma",
      role: "Additional Chief Engineer",
      image: "/babulalVerma.jpeg",
      desc: "An experienced engineer contributing to large-scale infrastructure projects with strong technical leadership.",
      color: "#8b5cf6",
      bg: "#f5f3ff",
    },
    {
      name: "Hemant",
      role: "Assistant Professor",
      image: "/hemant.png",
      desc: "Passionate educator focused on guiding students and advancing academic excellence in his field.",
      color: "#10b981",
      bg: "#ecfdf5",
    },
    {
      name: "Matu Ram Verma",
      role: "World-Famous Sculptor",
      image: "/MatuRamVerma.jpeg",
      desc: "Renowned sculptor recognized globally for exceptional artistic creations.",
      color: "#3b82f6",
      bg: "#eff6ff",
    },
    {
      name: "Vinod",
      role: "Chairman & Director",
      image: "/vinod.png",
      desc: "Visionary leader driving strategic growth and success.",
      color: "#f97316",
      bg: "#fff7ed",
    },
    {
      name: "Naresh",
      role: "Additional Commissioner",
      image: "/naresh.jpeg",
      desc: "Senior government official managing customs operations with integrity.",
      color: "#ec4899",
      bg: "#fdf2f8",
    },
  ];

  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % alumni.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + alumni.length) % alumni.length);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  const a = alumni[active];

  return (
    <section className="py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500 mb-3">
            Success Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Our Proud Alumni
          </h2>
        </div>

        {/* Card */}
        <div className="relative">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row rounded-3xl overflow-hidden border border-gray-100 shadow-2xl backdrop-blur-xl bg-white/80"
          >
            {/* LEFT IMAGE */}
            <div
              className="md:w-64 flex items-center justify-center py-10 relative"
              style={{ background: a.bg }}
            >
              {/* Glow */}
              <div
                className="absolute w-40 h-40 rounded-full blur-2xl opacity-20"
                style={{ background: a.color }}
              />

              <div
                className="relative w-28 h-28 rounded-full overflow-hidden border-4 shadow-lg"
                style={{ borderColor: a.color }}
              >
                <Image src={a.image} alt={a.name} fill className="object-top" />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex-1 px-8 py-10">
              {/* Role */}
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1 rounded-full mb-5"
                style={{ background: a.bg, color: a.color }}
              >
                {a.role}
              </span>

              {/* Name */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {a.name}
              </h3>

              {/* Divider */}
              <div className="w-10 h-[3px] rounded-full bg-amber-500 mb-5" />

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed text-[15px] italic">
                “{a.desc}”
              </p>
            </div>
          </motion.div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
          >
            ›
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-3 mt-10 flex-wrap">
          {alumni.map((th, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${
                i === active
                  ? "scale-110 border-amber-500"
                  : "opacity-50 border-transparent hover:opacity-80"
              }`}
            >
              <Image src={th.image} alt={th.name} fill className="object-top" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
// ─── CTA SECTION ──────────────────────────────────────────────────────────────

function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 px-6 md:px-12 bg-[#0a0f1e] relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #f59e0b44 0%, transparent 70%)",
        }}
      />
      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-4">
          Join Us
        </p>
        <h2
          className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ready to Shape <br />
          <span
            style={{
              background: "linear-gradient(135deg, #f59e0b, #f97316)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Your Future?
          </span>
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Admissions open for 2025–26. Take the first step toward an exceptional
          journey at Bal Niketan Sr. Sec. School, Pilani.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-[#0a0f1e] text-base shadow-2xl"
            style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)" }}
          >
            Apply for Admission
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
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
            <div
              key={text}
              className="flex items-center gap-2 text-white/40 text-sm"
            >
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
      <ThreeDBackground />
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

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView , useAnimation } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  GraduationCap, ArrowLeft
} from "lucide-react";
import Image from "next/image";
export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll();
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollProgress(
        window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight),
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative overflow-hidden">
      <ThreeDBackground />
      {/* <Navbar /> */}

    <section className="relative min-h-screen flex items-center justify-center px-6 text-center overflow-hidden">
  {/* Background Glow */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-b from-primary/15 via-transparent to-transparent"
    animate={{ opacity: [0.6, 1, 0.6] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />

  <div className="relative z-10 max-w-5xl">
    

    {/* Heading */}
    <motion.h1
      className="text-4xl md:text-7xl font-extrabold leading-tight pt-20 md:pt-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <span className="block">Bal Niketan</span>

      <span className="block bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
        Sr. Sec. School
      </span>

      <span className="block text-lg md:text-2xl mt-3 text-primary font-medium">
        (Known as Garh School)
      </span>

      <span className="block text-lg md:text-xl mt-2 text-muted-foreground">
        Pilani, Rajasthan
      </span>
    </motion.h1>

    {/* Description */}
    <motion.p
      className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      Bal Niketan Sr. Sec. School is dedicated to nurturing young minds through
      academic excellence, modern learning methods, and strong moral values.
      We focus on the overall development of students to prepare them for a
      successful future.
    </motion.p>

    {/* Buttons */}
    <motion.div
      className="flex flex-col sm:flex-row gap-5 justify-center mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <button className="px-10 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold shadow-xl flex items-center justify-center gap-2 hover:scale-105 transition">
        Explore Campus
        <ArrowRight size={20} />
      </button>

      <button className="px-10 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition flex items-center justify-center">
        Admission Details
      </button>
    </motion.div>
  </div>
</section>

      {/* Features Section */}
      <FeatureSection />

      {/* About Preview Section */}
      <AboutPreviewSection />

      {/* Facilities Section */}
      <FacilitiesSection />

      {/* Statistics Section */}
      <StatisticsSection />
      <AchievementsSection />
      <AlumniSection />

      {/* CTA Section */}
      <CTASection />

      {/* <Footer /> */}
    </main>
  );
}

function FeatureSection() {
  const features = [
    {
      icon: BookOpen,
      title: "World-Class Education",
      description:
        "Comprehensive curriculum with modern teaching methodologies",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Experienced educators dedicated to student success",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Cutting-edge technology integrated in every classroom",
    },
    {
      icon: Target,
      title: "Holistic Growth",
      description: "Development of academic, physical, and emotional skills",
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose Bal Niketan?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine traditional values with modern innovation to create an
            exceptional learning environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                }}
                className="p-6 bg-white rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutPreviewSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Bal Niketan Sr. Sec. School stands as a beacon of educational
              excellence in Pilani. For years, we have been committed to
              fostering a culture of learning, innovation, and character
              development.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to empower every student with knowledge, skills,
              and values that will help them thrive in an ever-changing world.
              We believe in nurturing not just academic excellence, but also
              building confident, compassionate leaders.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold flex items-center gap-2"
            >
              Read More <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Image with Parallax */}
          <motion.div
            style={{ y }}
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden border border-border">
              {/* About Image */}
              <Image
                src="/about.jpg" // from public folder
                alt="About Us"
                fill
                className="object-cover"
                priority
              />

              {/* Optional overlay animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FacilitiesSection() {
  const facilities = [
    {
      title: "Smart Classrooms",
      description: "State-of-the-art technology for enhanced learning",
    },
    {
      title: "Science Labs",
      description: "Well-equipped laboratories for practical learning",
    },
    {
      title: "Library",
      description: "Extensive collection of books and digital resources",
    },
    {
      title: "Sports Complex",
      description: "Olympic-sized facilities for all sports",
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            World-Class Facilities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(45, 90, 140, 0.2)",
              }}
              className="p-6 bg-white rounded-xl border border-border cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatisticsSection() {
  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "2000+", label: "Happy Students" },
    { number: "150+", label: "Expert Faculty" },
    { number: "95%", label: "Success Rate" },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.h3
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                {inView && <Counter value={stat.number} />}
              </motion.h3>
              <p className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const numValue = parseInt(value.replace(/\D/g, ""));
    const increment = numValue / 100;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numValue) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(
          Math.floor(current) +
            (value.includes("+") ? "+" : value.includes("%") ? "%" : ""),
        );
      }
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{displayValue}</span>;
}

function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take the first step towards an exceptional educational experience.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(45, 90, 140, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-white rounded-lg font-semibold flex items-center gap-2 justify-center mx-auto"
          >
            Contact Admissions <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

//////////////////////////////////////////////////////
// ACHIEVEMENTS
//////////////////////////////////////////////////////

function AchievementsSection() {
  const achievements = [
    { title: "Board Results", value: "98%", icon: Trophy },
    { title: "Olympiad Winners", value: "150+", icon: Medal },
    { title: "Sports Champions", value: "80+", icon: Star },
    { title: "Awards", value: "50+", icon: Award },
  ];

  return (
    <section className="py-32 px-6 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-6xl text-3xl font-bold text-center mb-20">
          Our Achievements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -12, scale: 1.05 }}
                className="p-10 rounded-3xl  bg-white/10 backdrop-blur-xl border  text-center"
              >
                <div className="flex justify-center mb-6">
                  <Icon size={40} className="text-primary" />
                </div>
                <h3 className="text-5xl font-extrabold mb-3">{item.value}</h3>
                <p className="text-xl">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

//////////////////////////////////////////////////////
// ALUMNI SLIDER (INFINITE)
//////////////////////////////////////////////////////

function AlumniSection() {
  const alumni = [
    { name: "Rohit Sharma", role: "IAS Officer" },
    { name: "Priya Verma", role: "Google Engineer" },
    { name: "Aman Gupta", role: "Entrepreneur" },
    { name: "Neha Singh", role: "Doctor" },
    { name: "Vikas Mehta", role: "IPS Officer" },
    { name: "Kavita Joshi", role: "Professor" },
    { name: "Rahul Jain", role: "Startup Founder" },
    { name: "Sneha Kapoor", role: "Chartered Accountant" },
    { name: "Arjun Yadav", role: "Software Architect" },
    { name: "Pooja Sharma", role: "Bank Manager" },
  ];

  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollRef.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }
    }, 2500);
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-r from-primary/5 to-accent/5 overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
          Our Proud Alumni
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Students of Bal Niketan (Garh School) are serving the nation and
          excelling globally in various fields.
        </p>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-white shadow-md hover:scale-110 transition"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-white shadow-md hover:scale-110 transition"
        >
          <ArrowRight />
        </button>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
        className="flex gap-8 overflow-x-auto scroll-smooth px-6 scrollbar-hide"
      >
        {alumni.map((a, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.07 }}
            className="min-w-[260px] p-8 bg-white rounded-3xl  text-center border border-primary/10  transition-all"
          >
            {/* Avatar */}
            <div className="w-24 h-24 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold">
              {a.name
                .split(" ")
                .map((word) => word[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </div>

            <h3 className="font-semibold text-lg">{a.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {a.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

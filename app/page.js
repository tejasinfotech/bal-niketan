"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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
  GraduationCap,
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
          className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-7xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="block">Bal Niketan</span>

            <span className="block bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Sr. Sec. School
            </span>

            {/* Known as */}
            <span className="block text-lg md:text-2xl mt-3 text-primary font-medium">
              (Known as Garh School)
            </span>

            <span className="block text-lg md:text-xl mt-2 text-muted-foreground">
              Pilani, Rajasthan
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Excellence in Education • Innovation • Values
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white text-center rounded-xl font-semibold shadow-lg flex items-center gap-2">
              Explore Campus <ArrowRight size={20} />
            </button>

            <button className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition">
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
        <h2 className="text-6xl font-bold text-center mb-20">
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
    { name: "Rohit Sharma", role: "IAS", img: "/alumni1.jpg" },
    { name: "Priya Verma", role: "Google Engineer", img: "/alumni2.jpg" },
    { name: "Aman Gupta", role: "Entrepreneur", img: "/alumni3.jpg" },
    { name: "Neha Singh", role: "Doctor", img: "/alumni4.jpg" },
  ];

  return (
    <section className="py-24 overflow-hidden bg-gradient-to-r from-primary/5 to-accent/5">
      <h2 className="text-4xl font-bold text-center mb-12">Our Proud Alumni</h2>

      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...alumni, ...alumni].map((a, i) => (
          <div
            key={i}
            className="min-w-[260px] p-6 bg-white rounded-2xl shadow-lg text-center"
          >
            <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              {" "}
              <span className="text-2xl font-bold text-primary">
                {" "}
                {a.name
                  .split(" ")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()}{" "}
              </span>{" "}
            </div>
            <h3 className="font-semibold">{a.name}</h3>
            <p className="text-sm text-muted-foreground">{a.role}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

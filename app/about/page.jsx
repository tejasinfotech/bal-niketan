'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeDBackground from '@/components/ThreeDBackground';
import Image from 'next/image';

export default function About() {
  return (
    <main className="relative overflow-hidden">
      <ThreeDBackground />
      {/* <Navbar /> */}

      <HeroSection />
      <StatsSection />
      <TimelineSection />
      <MissionVisionSection />
      <PrincipalSection />
      <ValuesSection />

      {/* <Footer /> */}
    </main>
  );
}

/* ================= HERO ================= */

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/aboutpage.jpg"
          alt="School"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Floating Gradient */}
      <motion.div
        className="absolute w-80 h-80 bg-primary/40 rounded-full blur-3xl -top-10 -left-10"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center text-white backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Bal Niketan School
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-8">
          65+ Years of Excellence in Education, Discipline, and Character Building.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-primary text-white rounded-full font-semibold shadow hover:scale-105 transition">
            Get Admission
          </button>
          <button className="px-6 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition">
            Explore More
          </button>
        </div>
      </motion.div>
    </section>
  );
}

/* ================= STATS ================= */

function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const stats = [
    { number: '65+', label: 'Years of Excellence' },
    { number: '8000+', label: 'Library Books' },
    { number: '22', label: 'Computers' },
    { number: '18+', label: 'Qualified Teachers' },
  ];

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
            className="p-6 text-center bg-white rounded-xl shadow border hover:shadow-xl transition"
          >
            <h3 className="text-3xl font-bold text-primary">{stat.number}</h3>
            <p className="text-muted-foreground mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ================= TIMELINE (RESPONSIVE) ================= */

function TimelineSection() {
  const milestones = [
    { year: '1959', title: 'Foundation', desc: 'School established in Pilani.' },
    { year: '1990', title: 'Expansion', desc: 'New classrooms and facilities added.' },
    { year: '2005', title: 'Computer Lab', desc: 'Digital education introduced.' },
    { year: '2015', title: 'Board Excellence', desc: 'Consistent high results.' },
    { year: '2020', title: 'Online Learning', desc: 'Smooth digital transition.' },
    { year: 'Today', title: 'Smart Campus', desc: 'Modern smart classrooms & labs.' },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Journey
        </h2>

        <div className="relative md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-1 md:before:bg-primary">
          {milestones.map((item, i) => (
            <div
              key={i}
              className={`mb-10 md:mb-16 flex flex-col md:flex-row ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 w-full md:px-8"
              >
                <div className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition">
                  <h3 className="text-primary font-bold">{item.year}</h3>
                  <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                  <p className="text-muted-foreground mt-2">{item.desc}</p>
                </div>
              </motion.div>

              <div className="hidden md:block w-6 h-6 bg-primary rounded-full border-4 border-white shadow z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= MISSION VISION ================= */

function MissionVisionSection() {
  const items = [
    {
      title: 'Our Mission',
      text: 'To provide quality education that builds knowledge, discipline and strong values.',
    },
    {
      title: 'Our Vision',
      text: 'To become a leading institution nurturing confident and responsible citizens.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="p-8 bg-white/70 backdrop-blur-xl rounded-2xl shadow border"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              {item.title}
            </h3>
            <p className="text-muted-foreground">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ================= PRINCIPAL ================= */

function PrincipalSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/aboutpage.jpg"
              alt="Principal"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">Principal's Message</h3>
          <p className="text-muted-foreground mb-4">
            We aim to create a learning environment that develops academic excellence,
            discipline, and strong character.
          </p>
          <p className="text-muted-foreground">
            Our focus is to prepare students for future success with modern education and values.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= VALUES ================= */

function ValuesSection() {
  const values = [
    'Discipline',
    'Integrity',
    'Excellence',
    'Respect',
    'Responsibility',
    'Innovation',
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Core Values</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-6 bg-white rounded-xl shadow border text-center hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold">{value}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
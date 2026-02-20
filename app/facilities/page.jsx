'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Facilities() {
  const facilities = [
    {
      title: 'Smart Classrooms',
      image: '/SmartClassrooms.jpg',
      description:
        'Digital smart boards, high-speed internet, and interactive learning tools to create an engaging classroom experience.',
      features: ['Interactive Boards', 'High-Speed WiFi', 'Audio-Visual System', 'Comfort Seating'],
    },
    {
      title: 'Science Laboratories',
      image: '/lab.jpg',
      description:
        'Modern Physics, Chemistry, and Biology labs equipped with advanced instruments and safety systems.',
      features: ['Advanced Equipment', 'Safety Systems', 'Digital Microscopes', 'Practical Learning'],
    },
    {
      title: 'Sports Facilities',
      image: '/sport.jpg',
      description:
        'Indoor and outdoor sports infrastructure to support physical fitness and team spirit.',
      features: ['Football Ground', 'Basketball Court', 'Indoor Games', 'Fitness Area'],
    },
    {
      title: 'Auditorium',
      image: '/Auditorium.jpg',
      description:
        'Spacious auditorium for cultural programs, seminars, and school events with modern sound & lighting.',
      features: ['Large Seating', 'Stage Setup', 'Sound System', 'LED Display'],
    },
  ];

  return (
    <main className="relative overflow-hidden ">
    

      {/* ================= Hero Video Section ================= */}
      <section className="relative h-[90vh] flex items-center justify-center mt-20">
        {/* Background Video */}
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            World-Class <span className="text-primary">Facilities</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Modern infrastructure designed for academic excellence and holistic development.
          </p>
        </motion.div>
      </section>

      {/* ================= Facilities Section ================= */}
      <section className="py-20 px-4 ">
        <div className="max-w-7xl mx-auto space-y-20">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="relative group">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full h-[350px] shadow-xl group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 rounded-2xl bg-primary/20 opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* Content */}
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
                <h2 className="text-3xl font-bold mb-4 text-primary">
                  {facility.title}
                </h2>
                <p className="text-black mb-6">{facility.description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    
    </main>
  );
}
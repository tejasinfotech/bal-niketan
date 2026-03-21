'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Facilities() {
  const facilities = [
    {
      title: "IT Skill Development Lab",
      image: "/SmartClassrooms.jpg",
      description:
        "Advanced IT lab for practical learning including programming and modern technologies.",
      features: [
        "Programming Classes (AI/ML)",
        "Hands-on Practice",
        "Modern Systems",
        "Digital Learning",
      ],
    },
    {
      title: "Science Laboratories",
      image: "/lab.jpg",
      description:
        "Well-equipped Physics and Chemistry labs for practical experiments and concept clarity.",
      features: [
        "Physics Lab",
        "Chemistry Lab",
        "Safe Environment",
        "Practical Learning",
      ],
    },
    {
      title: "Smart Classes & Coaching",
      image: "/SmartClassrooms.jpg",
      description:
        "Smart classrooms with digital tools along with coaching support for science students.",
      features: [
        "Smart Boards",
        "Science Coaching",
        "Interactive Learning",
        "Doubt Sessions",
      ],
    },
    {
      title: "Sports & Activities",
      image: "/sport.jpg",
      description:
        "Focus on physical development through sports, games, and fun activities.",
      features: [
        "Sports & Games",
        "Fun Activities",
        "Scout & Guide",
        "Skill Fest Participation",
      ],
    },
    {
      title: "Student Development",
      image: "/Auditorium.jpg",
      description:
        "Co-curricular and skill-based programs for overall student growth.",
      features: [
        "Parlor Training",
        "Stitching Classes",
        "Co-Curricular Activities",
        "Skill Development",
      ],
    },
    {
      title: "School Facilities & Support",
      image: "/Auditorium.jpg",
      description:
        "Safe and supportive environment with regular parent-teacher interaction.",
      features: [
        "CCTV Security",
        "PTM After Exams",
        "Merit Scholarship",
        "Student Guidance",
      ],
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
      <section className="py-20 px-4 bg-[#0a0f1e] text-white">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Heading */}
          <div className="text-center">
            <p className="text-amber-400 uppercase tracking-widest text-sm mb-3">
              Our Facilities
            </p>
            <h2 className="text-4xl md:text-6xl font-black">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">
                Campus
              </span>
            </h2>
          </div>

          {/* Facilities */}
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
            >
              {/* Image */}
              <div className="relative group">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  width={600}
                  height={400}
                  className="rounded-3xl object-cover w-full h-[350px] shadow-xl group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              {/* Content */}
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-amber-400/30 transition duration-300">

                <h2 className="text-3xl font-bold mb-4 text-amber-400">
                  {facility.title}
                </h2>

                <p className="text-white/70 mb-6 leading-relaxed">
                  {facility.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {facility.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <span className="w-2 h-2 bg-amber-400 rounded-full" />
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
'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Facilities() {
const facilities = [
  {
    title: "IT Skill Development Lab",
    image: "/SmartClassrooms.jpeg",
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
    title: "Sports & Activities",
    image: "/sportEvent.jpeg",
    description:
      "Focus on physical development through sports, games, and fun activities.",
    features: [
      "Sports & Games",
      "Fun Activities",
      "Scout & Guide",
      "Skill Fest Participation",
    ],
  },

  // 🔥 NEW ADDED FROM YOUR GALLERY

  {
    title: "Creative Art & Painting",
    image: "/paint.jpeg",
    description:
      "Encouraging creativity and imagination through painting and artistic activities.",
    features: [
      "Drawing Classes",
      "Color Activities",
      "Art Competitions",
      "Creative Learning",
    ],
  },
  {
    title: "Dance & Cultural Activities",
    image: "/dance.jpeg",
    description:
      "Promoting confidence and expression through dance and cultural programs.",
    features: [
      "Dance Classes",
      "Stage Performances",
      "Annual Functions",
      "Cultural Events",
    ],
  },
  {
    title: "Kids Play Area",
    image: "/swing.jpeg",
    description:
      "Safe and joyful play area designed for fun and physical activity.",
    features: [
      "Swings & Slides",
      "Outdoor Play",
      "Safe Equipment",
      "Fun Environment",
    ],
  },
  {
    title: "Horse Riding Activity",
    image: "/hourse.jpeg",
    description:
      "Adventure activity to build confidence, balance, and courage in students.",
    features: [
      "Outdoor Training",
      "Confidence Building",
      "Guided Activity",
      "Physical Development",
    ],
  },
  {
    title: "Experienced Faculty",
    image: "/teacher.jpeg",
    description:
      "Highly qualified and dedicated teachers focused on student success.",
    features: [
      "Expert Teachers",
      "Student Guidance",
      "Personal Attention",
      "Strong Mentorship",
    ],
  },
];
  return (
    <main className="relative overflow-hidden mt-20 ">


   

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
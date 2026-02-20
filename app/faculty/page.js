'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeDBackground from '@/components/ThreeDBackground';
import { ChevronDown } from 'lucide-react';
import Image from "next/image";

export default function Faculty() {
  return (
    <main className="relative overflow-hidden">
      <ThreeDBackground  />
      {/* <Navbar /> */}

      {/* Hero Section */}
    {/* Hero Section */}
<section className="relative h-[80vh] mt-20 flex items-center justify-center pt-20 overflow-hidden">

  {/* Background Image */}
  <Image
    src="/faculty.jpg"
    alt="Faculty"
    fill
    priority
    className="object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/10" />

  {/* Content */}
  <div className="relative z-10 text-center px-4">
    <motion.h1
      className="text-4xl md:text-6xl font-bold text-white mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Our <span className="text-primary">Faculty</span>
    </motion.h1>

    <motion.p
      className="text-lg md:text-xl text-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Meet Our Dedicated Educators
    </motion.p>
  </div>
</section>

      {/* Department Filter and Faculty Cards */}
      <FacultyCardsSection />

      <Footer />
    </main>
  );
}

function FacultyCardsSection() {
  const [selectedDept, setSelectedDept] = useState('all');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const departments = ['All', 'Science', 'Mathematics', 'Languages', 'Social Studies', 'Sports'];
const facultyMembers = [
  // Science
  {
    name: 'Dr. Rajesh Kumar',
    dept: 'Science',
    title: 'Head, Physics Department',
    experience: '20 years',
    image: '👨‍🏫',
  },
  {
    name: 'Dr. Anil Verma',
    dept: 'Science',
    title: 'Chemistry Specialist',
    experience: '22 years',
     image: '👨‍🏫',
  },

  // Mathematics
  {
    name: 'Prof. Priya Sharma',
    dept: 'Mathematics',
    title: 'Senior Mathematics Educator',
    experience: '18 years',
 image: '👨‍🏫',  },
  {
    name: 'Mr. Rakesh Mehta',
    dept: 'Mathematics',
    title: 'Algebra & Calculus Expert',
    experience: '14 years',
     image: '👨‍🏫',
  },

  // Languages
  {
    name: 'Ms. Neha Gupta',
    dept: 'Languages',
    title: 'English Language Specialist',
    experience: '15 years',
   image: '👨‍🏫',
  },
  {
    name: 'Ms. Anjali Reddy',
    dept: 'Languages',
    title: 'Hindi & Sanskrit Teacher',
    experience: '14 years',
    image: '👨‍🏫',
  },

  // Social Studies
  {
    name: 'Prof. Deepika Patel',
    dept: 'Social Studies',
    title: 'History & Geography Lead',
    experience: '19 years',
    image: '👨‍🏫',
  },
  {
    name: 'Mr. Arun Joshi',
    dept: 'Social Studies',
    title: 'Political Science Teacher',
    experience: '16 years',
    image: '👨‍🏫',
  },

  // Sports
  {
    name: 'Mr. Vikram Singh',
    dept: 'Sports',
    title: 'Sports Director',
    experience: '16 years',
 image: '👨‍🏫',
  },
  {
    name: 'Ms. Kavita Rao',
    dept: 'Sports',
    title: 'Physical Education Instructor',
    experience: '12 years',
   image: '👨‍🏫',
  },
];


  const filteredFaculty =
  selectedDept === 'all'
    ? facultyMembers
    : facultyMembers.filter(
        (member) => member.dept.toLowerCase() === selectedDept
      );


  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Department Filter */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {departments.map((dept, idx) => (
            <motion.button
              key={dept}
            onClick={() => setSelectedDept(dept.toLowerCase().trim())}

              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedDept === dept.toLowerCase()
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-secondary/20 text-foreground hover:bg-secondary/30'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              {dept}
            </motion.button>
          ))}
        </motion.div>

        {/* Faculty Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredFaculty.map((member, index) => (
            <FacultyCard
              key={member.name}
              member={member}
              index={index}
              inView={inView}
            />
          ))}
        </motion.div>

        {filteredFaculty.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-lg text-muted-foreground">No faculty members in this department.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function FacultyCard({ member, index, inView }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden"
    >
      <motion.div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-6 bg-white rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
        whileHover={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10">
          {/* Avatar */}
          <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
            {member.image}
          </div>

          {/* Name and Title */}
          <h3 className="text-lg font-bold text-foreground text-center mb-1">{member.name}</h3>
          <p className="text-sm text-primary font-semibold text-center mb-2">{member.title}</p>
          <p className="text-xs text-muted-foreground text-center mb-4">{member.dept} Department</p>

          {/* Experience badge */}
          <div className="flex justify-center mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
              {member.experience}
            </span>
          </div>

          {/* Expand indicator */}
          <motion.div
            className="flex justify-center"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} className="text-primary" />
          </motion.div>
        </div>

        {/* Expanded content */}
        <motion.div
          initial={false}
          animate={isExpanded ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden mt-4 pt-4 border-t border-border"
        >
          <p className="text-sm text-muted-foreground text-center">
            Dedicated educator with extensive experience in curriculum development and student mentoring.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

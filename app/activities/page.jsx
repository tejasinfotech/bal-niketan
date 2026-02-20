'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeDBackground from '@/components/ThreeDBackground';

export default function Activities() {
  return (
    <main className="relative overflow-hidden">
      <ThreeDBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-foreground mb-6 leading-tight text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Activities</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Beyond Academics: Discovering Talents and Building Character
          </motion.p>
        </div>
      </section>

      {/* Activities Timeline and Showcase */}
      <ActivitiesSection />

      <Footer />
    </main>
  );
}

function ActivitiesSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const categories = ['All', 'Sports', 'Cultural', 'Academic', 'Community'];

  const activities = [
    {
      id: 1,
      title: 'Annual Sports Day',
      category: 'Sports',
      date: 'October 2024',
      description: 'Celebrate athletic excellence with track and field events, team competitions, and awards.',
      icon: '🏃',
    },
    {
      id: 2,
      title: 'Science Fair',
      category: 'Academic',
      date: 'November 2024',
      description: 'Students showcase innovative projects and research in STEM fields.',
      icon: '🔬',
    },
    {
      id: 3,
      title: 'Cultural Fest',
      category: 'Cultural',
      date: 'December 2024',
      description: 'Celebrate diversity with music, dance, drama, and traditional art performances.',
      icon: '🎭',
    },
    {
      id: 4,
      title: 'Community Service Drive',
      category: 'Community',
      date: 'January 2025',
      description: 'Students engage in social responsibility through various community initiatives.',
      icon: '🤝',
    },
    {
      id: 5,
      title: 'Inter-School Quiz Contest',
      category: 'Academic',
      date: 'February 2025',
      description: 'Compete with students from other schools in knowledge-based competitions.',
      icon: '💡',
    },
    {
      id: 6,
      title: 'Art & Craft Exhibition',
      category: 'Cultural',
      date: 'March 2025',
      description: 'Display of student artwork, paintings, sculptures, and creative projects.',
      icon: '🎨',
    },
    {
      id: 7,
      title: 'Football Championship',
      category: 'Sports',
      date: 'April 2025',
      description: 'Inter-house football tournament with exciting matches and championships.',
      icon: '⚽',
    },
    {
      id: 8,
      title: 'Tech Workshop',
      category: 'Academic',
      date: 'May 2025',
      description: 'Hands-on training in programming, AI, and latest technology trends.',
      icon: '💻',
    },
  ];

  const filteredActivities = selectedCategory === 'all'
    ? activities
    : activities.filter((activity) => activity.category === selectedCategory);

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category, idx) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? 'all' : category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === (category === 'All' ? 'all' : category)
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-secondary/20 text-foreground hover:bg-secondary/30'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {filteredActivities.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              index={index}
              inView={inView}
            />
          ))}
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Activity Timeline</h2>
          <TimelineView activities={filteredActivities} />
        </motion.div>
      </div>
    </section>
  );
}

function ActivityCard({ activity, index, inView }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="p-6 bg-white rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 h-full group relative overflow-hidden cursor-pointer"
        whileHover={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {activity.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-2">{activity.title}</h3>

          {/* Category Badge */}
          <motion.div className="inline-block mb-3">
            <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
              {activity.category}
            </span>
          </motion.div>

          {/* Date */}
          <p className="text-sm text-muted-foreground mb-3 font-medium">{activity.date}</p>

          {/* Description */}
          <motion.p
            className="text-sm text-muted-foreground leading-relaxed"
            initial={{ opacity: 0.8 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0.8 }}
          >
            {activity.description}
          </motion.p>

          {/* Bottom accent line */}
          <motion.div
            className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4"
            initial={{ scaleX: 0 }}
            animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function TimelineView({ activities }) {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <motion.div
          key={activity.id}
          className="flex gap-6 items-start"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {/* Timeline indicator */}
          <div className="flex flex-col items-center">
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl shadow-lg"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              {activity.icon}
            </motion.div>
            {index < activities.length - 1 && (
              <div className="w-1 h-12 bg-gradient-to-b from-primary to-accent mt-2" />
            )}
          </div>

          {/* Timeline content */}
          <motion.div
            className="flex-1 p-6 bg-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 group"
            whileHover={{ x: 10 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-1">{activity.title}</h4>
                <p className="text-sm text-primary font-semibold mb-2">{activity.date}</p>
                <p className="text-muted-foreground mb-2">{activity.description}</p>
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                  {activity.category}
                </span>
              </div>
              <motion.div
                className="text-2xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {activity.icon}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

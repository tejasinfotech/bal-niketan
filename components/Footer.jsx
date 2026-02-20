'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Facilities', href: '/facilities' },
        { label: 'Activities', href: '/activities' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Academics',
      links: [
        { label: 'Admissions', href: '/admission' },
        { label: 'Faculty', href: '/faculty' },
        { label: 'Academic Calendar', href: '/' },
        { label: 'Results', href: '/' },
      ],
    },
    {
      title: 'More',
      links: [
        { label: 'Gallery', href: '/gallery' },
        { label: 'Events', href: '/activities' },
        { label: 'News & Updates', href: '/' },
        { label: 'Downloads', href: '/' },
      ],
    },
  ];

  // Actual School Info
  const contactInfo = [
    {
      icon: MapPin,
      text: 'Ward No. 6, Pilani, Jhunjhunun, Rajasthan - 333031',
    },
    {
      icon: Phone,
      text: '+91 9166416666',
    },
    {
      icon: Mail,
      text: 'info@balniketanpilani.edu.in',
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-secondary/5 border-t border-border relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* School Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BN</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground">
                  Bal Niketan Sr. Sec. School
                </h3>
                <p className="text-xs text-muted-foreground">
                  Pilani, Rajasthan
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Established in 1959, Bal Niketan Sr. Sec. School is committed to
              providing quality education and overall development for students
              from Class 6 to 12.
            </p>

            <div className="space-y-3">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <Icon size={18} className="text-primary flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Links */}
          {footerSections.map((section, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h4 className="font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Social */}
          <motion.div variants={itemVariants} className="flex gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div variants={itemVariants} className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Bal Niketan Sr. Sec. School, Pilani. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Established 1959 | Private Unaided | Classes 6–12
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Top */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center z-40"
      >
        ↑
      </motion.button>
    </footer>
  );
}
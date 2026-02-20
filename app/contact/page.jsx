'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeDBackground from '@/components/ThreeDBackground';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <main className="relative overflow-hidden">
      <ThreeDBackground />
      {/* <Navbar /> */}

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact <span className="text-primary">Us</span>
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Bal Niketan Sr. Sec. School, Pilani
          </motion.p>
        </div>
      </section>

      <ContactSection />

      {/* <Footer /> */}
    </main>
  );
}

function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content:
        'Ward No. 6, Pilani, Jhunjhunun, Rajasthan - 333031',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9166416666',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@balniketanpilani.edu.in',
    },
  ];

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          {contactInfo.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-md border p-6 text-center hover:shadow-xl transition"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-primary text-white rounded-lg">
                  <Icon size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.content}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-xl border"
        >
          <div className="w-full h-[500px] relative">

            {/* Google Map Embed */}
            <iframe
              src="https://www.google.com/maps?q=Bal+Niketan+Higher+Secondary+School+Pilani&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>

            {/* Direction Button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Bal+Niketan+Higher+Secondary+School+Pilani"
              target="_blank"
              className="absolute bottom-6 right-6 bg-primary text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:scale-105 transition"
            >
              Get Directions
            </a>
          </div>
        </motion.div>

        {/* School Info Section */}
        <motion.div
          className="mt-12 bg-white border rounded-2xl p-8 shadow-md"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-2xl font-bold mb-4">
            About the School
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <p><strong>Founded:</strong> 1959</p>
            <p><strong>Classes:</strong> 6 to 12</p>
            <p><strong>Medium:</strong> Hindi</p>
            <p><strong>School Type:</strong> Co-Educational</p>
            <p><strong>Management:</strong> Private Unaided</p>
            <p><strong>Location:</strong> Urban</p>
            <p><strong>Library:</strong> 8000+ Books</p>
            <p><strong>Computers:</strong> 20+</p>
            <p><strong>Playground:</strong> Available</p>
            <p><strong>Electricity:</strong> Available</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
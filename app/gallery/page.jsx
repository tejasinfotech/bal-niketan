'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: '/SmartClassrooms.jpg' },
    { id: 2, src: '/lab.jpg' },
    { id: 3, src: '/sport.jpg' },
    { id: 4, src: '/Auditorium.jpg' },
  ];

  return (
    <main className=" min-h-screen">
     

      {/* 🎥 Video Section */}
      <section className="relative w-full mt-20 h-[80vh] overflow-hidden">
        <video
          src="/video2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/40" /> */}
      </section>

      {/* 🖼 Image Grid Section */}
      <section className="py-20 px-6 md:px-12 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(img)}
              className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-2xl"
            >
              <Image
                src={img.src}
                alt="Gallery Image"
                width={800}
                height={600}
                className="w-full h-[450px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500" /> */}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔍 Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0  z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 p-3 rounded-full"
              >
                <X size={28} className="text-white" />
              </button>

              {/* Full Image */}
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt="Preview"
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

     
    </main>
  );
}
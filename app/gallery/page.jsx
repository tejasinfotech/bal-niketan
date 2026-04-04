'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X } from 'lucide-react';

export default function Gallery() {


  const images = [
    {
      id: 1,
      src: '/paint.jpeg',
      title: 'Painting Activity',
      desc: 'Students expressing creativity through colors and art.',
    },
    {
      id: 2,
      src: '/dance.jpeg',
      title: 'Dance Performance',
      desc: 'Cultural dance showcasing talent and confidence.',
    },
    {
      id: 3,
      src: '/swing.jpeg',
      title: 'Play Area',
      desc: 'Fun and safe swings for joyful playtime.',
    },
    {
      id: 4,
      src: '/hourse.jpeg',
      title: 'Horse Riding',
      desc: 'Outdoor activity for adventure and confidence building.',
    },
    {
      id: 5,
      src: '/teacher.jpeg',
      title: 'Our Teachers',
      desc: 'Dedicated teachers guiding students towards success.',
    },
    {
      id: 6,
      src: '/sportEvent.jpeg',
      title: 'Annual Sports Day',
      desc: 'A day full of fun, competition, and sportsmanship among students.',
    }

  ];

  return (
    <main className=" min-h-screen">

      <section className="relative w-full mt-20 h-[90vh] overflow-hidden">
        <video
          src="/upscaled-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

      </section>

      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-500 overflow-hidden group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.title}
                  width={800}
                  height={600}
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {img.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>




    </main>
  );
}
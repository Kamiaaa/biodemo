'use client';

import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';

const cards = [
  {
    title: 'BIOBUILD (Project Name)',
    image: '/img/gallery/gallery-01.jpg',
  },
  {
    title: 'BIOBUILD (Project Name)',
    image: '/img/gallery/gallery-02.jpg',
  },
  {
    title: 'BIOBUILD (Project Name)',
    image: '/img/gallery/gallery-03.jpg',
  },
  {
    title: 'BIOBUILD (Project Name)',
    image: '/img/gallery/gallery-04.jpg',
  },
];

// Variants for card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const ProjectGallery: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 w-full justify-center mt-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl text-center font-poppins text-gray-700"
      >
        Turning Ordinary Into Extraordinary!
      </motion.h1>

      <section className="flex flex-wrap gap-10 w-full justify-center items-center">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative group w-70 cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.2 }}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="flex flex-col justify-center items-center transition-transform duration-300"
            >
              <Image
                src={card.image}
                alt={`Card ${index + 1}`}
                width={320}
                height={240}
                className="w-full h-full object-cover rounded-lg"
              />
              <h1 className="-mt-10 text-xl font-poppins font-semibold bg-black text-white w-full py-2 text-center">
                {card.title}
              </h1>
            </motion.span>

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 text-center font-sans"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <h2 className="text-xl font-bold text-gray-100">JUST BEFORE TAKE-OFF</h2>
              <p className="text-gray-50 text-lg mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit autem quaerat explicabo, voluptatum,
                assumenda placeat reiciendis aliquid itaque voluptates facere odit laboriosam, exercitationem aperiam
                labore dolorem quasi quia minima. Fugiat maxime, molestias molestiae aliquid animi.
              </p>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </section>
  );
};

export default ProjectGallery;

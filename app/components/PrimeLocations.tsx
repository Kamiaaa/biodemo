'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function PrimeLocationsPage() {
  const locations = [
    {
      name: 'Gulshan Prime',
      image: '/img/locations/gulshan.jpg',
      description:
        "Premium commercial and residential spaces in the heart of Dhaka's most prestigious neighborhood.",
    },
    {
      name: 'Banani High Street',
      image: '/img/locations/banani.jpg',
      description:
        'Modern mixed-use development along the vibrant Banani commercial corridor.',
    },
    {
      name: 'Baridhara Diplomatic Zone',
      image: '/img/locations/baridhara.jpg',
      description:
        'Exclusive properties adjacent to the diplomatic enclave with premium amenities.',
    },
    {
      name: 'Uttara CBD',
      image: '/img/locations/uttara.jpg',
      description:
        "Strategic commercial developments in Uttara's emerging central business district.",
    },
    {
      name: 'Bashundhara R/A',
      image: '/img/locations/bashundhara.jpeg',
      description:
        "High-value residential projects in Dhaka's fastest growing residential area.",
    },
    {
      name: 'Purbachal New Town',
      image: '/img/locations/purbachal.jpeg',
      description:
        "Future-forward developments in Dhaka's most ambitious planned city project.",
    },
    {
      name: 'Mirpur DOHS',
      image: '/img/locations/mirpur.jpg',
      description:
        "Industrial and commercial properties in Bangladesh's premier economic zone.",
    },
    {
      name: 'Dhanmondi',
      image: '/img/locations/dhanmondi.webp',
      description:
        "Luxury beachfront developments in Bangladesh's premier tourist destination.",
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 mt-20">
      <motion.h2
        className="text-3xl font-poppins text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        BIOBUILD Prime Locations
      </motion.h2>

      {/* Locations Grid */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="group relative bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Location Image */}
                <motion.div
                  className="h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Location Info */}
                <div className="p-6 relative">
                  <h3 className="text-xl text-gray-900 dark:text-white font-semibold mb-2">
                    {location.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{location.description}</p>

                  {/* Cool Hover Border Effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7AA859] to-[#5d8a3f] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-[#7AA859] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                    <div className="absolute top-0 right-0 w-0.5 h-full bg-[#7AA859] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 delay-100"></div>
                    <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#7AA859] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 delay-200"></div>
                    <div className="absolute bottom-0 left-0 w-0.5 h-full bg-[#7AA859] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 delay-300"></div>
                  </div>

                  {/* Explore Button on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#7AA859] text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-full group-hover:translate-y-0">
                    <button className="w-full text-center font-medium">Explore Opportunities</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

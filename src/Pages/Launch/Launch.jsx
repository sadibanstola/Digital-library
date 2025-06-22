import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const images = [
  '/Property 1=Group 6.png',
  '/Property 1=Group 7.png',
  '/Property 1=Group 8.png',
];

const Launch = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants for Launching Soon text
  const textVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  // Animation variants for cards
  const cardVariants = {
    hiddenLeft: { x: -300, opacity: 0 },
    visibleLeft: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
    hiddenRight: { x: 300, opacity: 0 },
    visibleRight: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <div className="relative w-full h-screen bg-white flex flex-col items-center justify-center overflow-hidden text-black">
      {/* Launching Soon Text */}
      <motion.h1
        className="text-6xl w-[600px] h-[120px] font-[400] mb-3 text-[#5352ED] text-center"
        variants={textVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{
          fontFamily: 'Gothic A1',
        }}
      >
        Launching Soon
      </motion.h1>

      {/* Clock / Rotating Image */}
      <div className="w-[600px] h-[200px] mb-5">
        <img
          src={images[imageIndex]}
          alt="Clock"
          className="w-full h-full object-contain transition duration-500"
        />
      </div>

      {/* Cards (scroll reveal animation) */}
      <div ref={ref} className="relative w-full flex justify-between px-11">
        <motion.div
          className="relative w-[350px] h-[390px] bg-[#F1F4FE] rounded-[20px] border border-[#F5A623] overflow-hidden"
          variants={cardVariants}
          initial="hiddenLeft"
          animate={isInView ? 'visibleLeft' : 'hiddenLeft'}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute top-4 right-4">
            <button className="px-4 py-2 bg-[#5352ED] text-white rounded-[10px] text-sm font-medium">
              Coming Soon
            </button>
          </div>
          <img
            src="/Audio.png"
            alt="Card Content"
            className="w-[290] h-[150] object-contain p-3"
          />
          <div className="p-0.5 text-center">
            <h3 className="text-lg text-[#5352ED] flex items-center justify-center">
              <span className="mr-2">🎙️</span> Audio
            </h3>
            <p className="text-sm text-[#12121299] mt-1">
              Stay tuned for our upcoming podcasts and immersive soundscapes that bring stories to life.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="relative w-[350px] h-[390px] bg-[#F1F4FE] rounded-[20px] border border-[#F5A623] overflow-hidden"
          variants={cardVariants}
          initial="hiddenRight"
          animate={isInView ? 'visibleRight' : 'hiddenRight'}
          transition={{ delay: 0.4 }}
        >
          <div className="absolute top-4 right-4">
            <button className="px-4 py-2 bg-[#5352ED] text-white rounded-[10px] text-sm font-medium">
              Coming Soon
            </button>
          </div>
          <img
            src="/Video.png"
            alt="Card Content"
            className="w-[290] h-[150] object-contain p-3"
          />
          <div className="p-0.5 text-center">
            <h3 className="text-lg text-[#5352ED] flex items-start justify-start">
              <span className="ml-0.5">📹</span> Video
            </h3>
            <p className="text-sm text-[#12121299] mt-2">
              Get ready for exclusive behind-the-scenes videos and cinematic adaptations of your favorite tales.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Launch;
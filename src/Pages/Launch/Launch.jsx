import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const images = [
  '/6.png',
  '/5.png',
  '/4.png',
  '/3.png',
  '/7.png',

  
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
          className="relative w-[350px] h-[420px] bg-[#F1F4FE] rounded-[20px] border border-[#F5A623] overflow-hidden"
          variants={cardVariants}
          initial="hiddenLeft"
          animate={isInView ? 'visibleLeft' : 'hiddenLeft'}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute top-3 right-3">
            <button className="px-4 py-2 bg-[#5352ED] text-white rounded-[10px] text-sm font-medium">
              Coming Soon
            </button>
          </div>
          <img
            src="/Audio.png"
            alt="Card Content"
            className="w-[290] h-[150] object-contain p-3"
          />
          <div className="p-0.5 text-left" style={{
          fontFamily: 'Gothic A1',
        }}>
            <h3 className="text-xl text-[#5352ED] flex items-start justify-start">
              <span className="ml-2 pr-1"> <FontAwesomeIcon icon={faMicrophone} size="1x" /></span> Audio
            </h3>
            <p className="text-lg text-[#12121299] mt-1 pl-1 font-light">
              Stay tuned for our upcoming podcasts and immersive soundscapes that bring stories to life.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="relative w-[350px] h-[420px] bg-[#F1F4FE] rounded-[20px] border border-[#F5A623] overflow-hidden"
          variants={cardVariants}
          initial="hiddenRight"
          animate={isInView ? 'visibleRight' : 'hiddenRight'}
          transition={{ delay: 0.4 }}
        >
          <div className="absolute top-3 right-3">
            <button className="px-4 py-2 bg-[#5352ED] text-white rounded-[10px] text-sm font-medium">
              Coming Soon
            </button>
          </div>
          <img
            src="/Video.png"
            alt="Card Content"
            className="w-[290] h-[150] object-contain p-3"
          />
          <div className="p-0.5 text-left"style={{
          fontFamily: 'Gothic A1',
        }}>
            <h3 className="text-xl text-[#5352ED] flex items-start justify-start">
              <span className="ml-2 pr-1"><FontAwesomeIcon icon={faCirclePlay} size="1x" /></span> Video
            </h3>
            <p className="text-lg text-[#12121299] mt-2 pl-1 font-light">
              Get ready for exclusive behind-the-scenes videos and cinematic adaptations of your favorite tales.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Launch;
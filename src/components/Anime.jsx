import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Anime.css';

const slides = [
  {
    title: 'NARUTO UZUMAKI',
    desc: `A boisterous, determined ninja who seeks to overcome a childhood of isolation by becoming the Hokage and earning the respect of his village.`,
    bg: 'linear-gradient(135deg, #1a0000, #3b0a0a, #090000)',
    image: './images/a1.png',
    offsetX: 40,            
  },
  {
    title: 'SATORU GOJO',
    desc: `The world’s strongest sorcerer, defined by his playful arrogance and god-like powers, who mentors the next generation to reform a corrupt jujutsu society.`,
    bg: 'linear-gradient(135deg, #020a18, #071d3a, #010409)',
    image: './images/a2.jpg',
    offsetX: 40,             
  },
  {
    title: 'GOKU',
    desc: `A pure-hearted Saiyan warrior with an insatiable appetite for food and battle, constantly pushing his limits to face stronger opponents and protect Earth.`,
    bg: 'linear-gradient(135deg, #050505, #1a0000, #020b14)',
    image: './images/a3.png',
    offsetX: 60,            
  },
  {
    title: 'YUJI ITADORI',
    desc: `A selfless high schooler with extraordinary physical strength who enters the world of curses to ensure others receive a "proper death" after becoming the vessel for a malevolent demon.`,
    bg: 'linear-gradient(135deg, #020f08, #06301a, #010805)',
    image: './images/a4.png',
    offsetX: 60,
  },
];

const Anime = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="anime" style={{ background: slides[index].bg }}>
      {/* Background Watermark */}
      <div className="watermark">ANIME</div>

      <div className="left-stack">
        {slides.slice(0, index).map((slide) => (
          <motion.div
            key={slide.image}
            className="stack-image"
            layoutId={slide.image}
            style={{ background: slide.bg }}
          >
            <img src={slide.image} alt="stacked" />
          </motion.div>
        ))}
      </div>

      <div className="main-slide">
  <AnimatePresence mode="wait">
    <motion.div 
      className="anime-text"
      key={slides[index].title}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <h1>{slides[index].title}</h1>
      <p>{slides[index].desc}</p>
    </motion.div>
  </AnimatePresence>

  <div className="anime-image">
    <AnimatePresence mode="wait">
      <motion.img
              key={slides[index].image}
              src={slides[index].image}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hero-character"
            />
    </AnimatePresence>
  </div>
</div>
      <div className="controls">
        {/* <button className="arrow" onClick={prev}>‹</button> */}
        <button className="arrow" onClick={next}>›</button>
        
      </div>
    </section>
    
  );
  
};

export default Anime;
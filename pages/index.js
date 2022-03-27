import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Skills from '../components/skills'
import About from '../components/about'
import Contact from '../components/contact'
import Portfolio from '../components/portfolio/portfolio'
import Archive from '../components/archive/archive'

import data from '../data.json'

import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion'

export default function Home() {

  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, .5], {
    clamp: false
  });

  const y2 = useTransform(scrollY, [elementTop, elementTop + 1], [0, -.5], {
    clamp: false
  });

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <div  className='main'>
      <div ref={ref}>
        <motion.div className='stars-container' style={{ y}}>
          <img className='stars-top' src="/stars-top.png" alt='background' ></img>
        </motion.div>

        <Navbar/>

        <Hero hero={data.hero}/>
      </div> 

      <About about={data.about}/>

      <Skills skills={data.skills}/>

      <Portfolio portfolio={data.portfolio}/>

      <Archive archive={data.archive}/>

      <Contact contacts={data.contacts}/>

      <div className='stars-container'>
        <motion.img className='stars-bottom' src="/stars-bottom.png" alt='background'></motion.img>
      </div>
    </div>
  )
}
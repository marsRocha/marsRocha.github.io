import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Skills from '../components/skills'
import About from '../components/about'
import Contact from '../components/contact'
import Portfolio from '../components/portfolio/portfolio'
import Archive from '../components/archive/archive'

import data from '../data.json'

import { IoMdRocket} from "react-icons/io"

import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { Link } from 'react-scroll'


const style = [
  'background-image: url("https://c.tenor.com/es-dWz_Xy8AAAAAd/hype-lizard.gif")',
  'background-size: contain',
  'color: #fff',
  'padding: 0px 110px',
  'line-height: 300px',
  ].join(';');

export default function Home() {

  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, .5], {
    clamp: false
  });

  /*const y2 = useTransform(scrollY, [elementTop, elementTop + 1], [0, -.5], {
    clamp: false
  });*/

  useEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  useEffect(() => {
    {console.log('%cHello there!', style)};
    const mainW = document.querySelector(".main");
    const rocket = document.querySelector(".home-floater");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      // check if scroll top or down
      if(lastScrollY < window.scrollY) {
        rocket.classList.add("home-floater-hidden");
      } else {
        rocket.classList.remove("home-floater-hidden");
      }

      // check if reached top or down of page
      if(window.scrollY == 0) {
        rocket.classList.add("home-floater-hidden");
      } else if (window.scrollY == mainW.scrollHeight - window.innerHeight) {
        rocket.classList.remove("home-floater-hidden");
      }

      lastScrollY = window.scrollY;
    })
  }, []);

  return (
    <div  className='main'>
      <div title="Home" className='home-floater home-floater-hidden'>
        <Link to="navbar" href="#navbar" smooth={true}>
            <IoMdRocket/>
        </Link>
      </div>

      <div className='front-page' ref={ref}>
        <motion.div className='stars-container' style={{ y}}>
          <img className='stars-top' src="/stars-top2.png" alt='background' ></img>
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
        <motion.img className='stars-bottom' src="/stars-bottom2.png" alt='background'></motion.img>
      </div>
    </div>
  )
}
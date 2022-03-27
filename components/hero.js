import Image from 'next/image'
import { motion} from 'framer-motion'
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter'

const parentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: .7, 
      duration: .6,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}

const childVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .5,
    }
  },
}

const heroVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.3, 
      duration: .5,
    }
  },
}

const Hero = (props) => {
  return ( 
    <section className='hero' id="hero">
      <div className='hero_container'>
        <motion.div className='content' variants={parentVariants} initial = "hidden" animate = "visible" >
          <div>
            <motion.h1
              variants={childVariants}
              className="hero_title">{props.hero.name}</motion.h1>
            <motion.h1 
              variants={childVariants}
              className="hero_subtitle">
              <Typewriter
                words={props.hero.description}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                />
            </motion.h1>
          </div>
          <div className="more">
            <motion.div  variants={childVariants}>
              <p>Know More!</p>
            </motion.div>
            <motion.div variants={childVariants}>
              <Link to="about" href="#about" smooth={true}>
                <svg width="50" height="95" viewBox="0 0 50 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="44" height="89" rx="22" stroke="#FFFFFF" strokeWidth="5"/>
                  <motion.circle className="circle" cx="25.5" cy="68.5" r="14.5" fill="#FFFFFF" animate={{y: [-40, 0, 0]}} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse"}}/>
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <div className="hero_design__container">
          <motion.div className="hero_design" variants={heroVariants} initial = "hidden" animate = "visible">
            <motion.div animate={{y: [-20, 0]}} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse"}}>
              <Image src="/guy.png" alt='logo' width="1024" height="1252"/>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
    );
}
 
export default Hero;
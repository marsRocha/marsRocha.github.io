import Image from 'next/image'
import { motion } from 'framer-motion';

const logoVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
          delay: 0.2, 
          duration: .6,
        },
    },
}

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

const NotFound = () => {
    return ( 
        <div className="not-found">
            <div className='background-container'>
                <img className='background-img' src="/stars-top.png" alt='background'></img>
            </div>
            <header>
                <motion.div className="logo" variants={logoVariants} initial="hidden" animate="visible" whileHover={{ scale: 1.2 }}>
                    <a href='.'>
                        <Image src='/logo.svg' layout='fill' alt='logo'/>
                    </a>
                </motion.div>
            </header>
            <section>
                <div className="not-found-container">
                    <motion.div className='content' variants={parentVariants} initial = "hidden" animate = "visible" >
                        <motion.h1 variants={childVariants} className='title'>404</motion.h1>
                        <motion.h2 variants={childVariants} className='subtitle'>Ooops... Page not found</motion.h2>
                        <motion.div className='button-home' whileInView="visible" viewport={{once: true}}>
                            <motion.button variants={childVariants} whileHover={{ scale: 1.2 }}>
                                <a title="Go Home" href=".">Go Home</a>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                    <div className="design-container">
                        <motion.div className="not-found-design" variants={heroVariants} initial = "hidden" animate = "visible">
                            <motion.div animate={{y: [-20, 0]}} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse"}}>
                                <Image src="/not-found-guy.png" alt='logo' width="1025" height="1441"/>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default NotFound;
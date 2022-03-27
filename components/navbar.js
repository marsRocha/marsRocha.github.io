import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
        y: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: .2, 
        duration: .5,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      } 
    }
}

const childVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .5,
      }
    },
}

const navbar = () => {
    return (
        <div className="nav_container" id="navbar">
            <header>
                <motion.div className="logo" variants={logoVariants} initial="hidden" animate="visible" whileHover={{ scale: 1.2 }}>
                    <a href='.'>
                        <Image src='/logo.svg' layout='fill' alt='logo'/>
                    </a>
                </motion.div>
                <motion.nav variants={parentVariants} initial="hidden" animate="visible">
                    <ul className='navLinks'>
                        <motion.div variants={childVariants}>
                            <Link to="about" href="#about" smooth={true}>
                                <motion.div whileHover={{ scale: 1.2 }}>
                                    <span>About</span>
                                </motion.div>
                            </Link>
                        </motion.div>
                        <motion.div variants={childVariants}>    
                            <Link to="skills" href="/#work" smooth={true}>
                                <motion.div whileHover={{ scale: 1.2 }}>
                                    <span>Skills</span>
                                </motion.div>
                            </Link>
                        </motion.div>
                        <motion.div variants={childVariants}>
                            <Link to="portfolio" href="/#portfolio" smooth={true}>
                                <motion.div whileHover={{ scale: 1.2 }}>
                                    <span>Work</span>
                                </motion.div>
                            </Link>
                        </motion.div>
                        <motion.div variants={childVariants}>   
                            <Link to="contact" href="/#contact" smooth={true}>
                                <motion.div whileHover={{ scale: 1.2 }}>
                                    <span>Contact</span>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </ul>
                </motion.nav>
            </header>
        </div>
     );
}
 
export default navbar;
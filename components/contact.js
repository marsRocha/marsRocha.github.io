import Footer from './footer';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { motion } from 'framer-motion';

import { FiLinkedin, FiGithub } from "react-icons/fi";

const parentVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: .2, 
        duration: 0,
        when: 'beforeChildren',
        staggerChildren: 0.05,
      } 
    }
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

const soloVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: .3, 
        duration: .5,
      } 
    }
}


const Contact = (props) => {
    return (
        <section className="contact" id='contact'>
            <div className="contact_container">
                <motion.h2 className='contancts-title' variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>Get In Touch</motion.h2>
                <div className='hello_wrapper'>
                    <motion.div className="hello-button-container" variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                        <motion.button whileHover={{ scale: 1.2 }}>
                            <a className='hello_btn' href={`mailto:${props.contacts.email}`}>Say Hello!</a>
                        </motion.button>
                    </motion.div>
                    <motion.div variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                        <CopyToClipboard text='marciorocha.dev@gmail.com'>
                            <span>or you can copy my email</span>
                        </CopyToClipboard>
                    </motion.div>
                </div>
                <motion.div className="social_contacts" variants={parentVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                        <motion.li variants={childVariants}>
                            <motion.div whileHover={{ scale: 1.2 }} className="icon_wrapper">
                                <a title={`${props.contacts.socials[0].name}`} target="_blank" rel="noopener noreferrer" href={`${props.contacts.socials[0].url}`}>
                                    <FiGithub/>
                                </a>
                            </motion.div>
                        </motion.li>
                        <motion.li variants={childVariants}>
                            <motion.div whileHover={{ scale: 1.2 }} className="icon_wrapper">
                                <a title={`${props.contacts.socials[1].name}`} target="_blank" rel="noopener noreferrer" href={props.contacts.socials[1].url}>
                                    <FiLinkedin/>
                                </a>
                            </motion.div>
                        </motion.li>
                    </motion.div>
                <Footer/>
            </div>
        </section>
     );
}
 
export default Contact;
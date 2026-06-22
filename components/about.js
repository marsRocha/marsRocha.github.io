import Image from 'next/image'
import { motion } from 'framer-motion'

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

const About = (props) => {

    return (
        <section className='about' id="about">
            <div>
                <motion.div className="section_title_marquee" variants={soloVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <span className="marquee-grey">ABOUT ME&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="marquee-white">ABOUT ME&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="marquee-grey">ABOUT ME&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="marquee-grey">ABOUT ME&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="marquee-grey">ABOUT ME&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="marquee-grey">ABOUT ME&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="marquee-grey">ABOUT ME&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="marquee-grey">ABOUT ME&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </motion.div>
                <div className="about_container">
                    <motion.div className='about_img' variants={soloVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <Image className="profile_img" src={`/${props.about.profilePic}`} alt='me' width={338} height={339} objectFit="cover" objectPosition="center 60%" />
                    </motion.div>
                    <motion.div className="about_info" variants={soloVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {props.about.bio.map((phrase, index) => (
                            <p key={index}>{phrase}</p>
                        ))}
                        <motion.div className='btn_cv_wrapper' whileInView="visible" viewport={{ once: true }}>
                            <motion.button>
                                <a target="_blank" rel="noopener noreferrer" title="Download my resume" href={`${props.about.resumedownload}`}>Download CV</a>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
                <div className='extra_info'>
                </div>
            </div>
        </section>
    );
}

export default About;
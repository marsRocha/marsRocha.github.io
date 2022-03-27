import Image from 'next/image'
import { useState } from 'react'
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
    const [currentJob, setCurrentJob] = useState(props.about.work.length-1)

    return ( 
        <section className='about' id="about">
            <div>
                <motion.div className="section_title inverse" variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                    <h2>About Me</h2>
                </motion.div>
                <div className="about_container">
                    <motion.div className='about_img' variants={soloVariants} initial="hidden" whileInView="visible"  viewport={{once: true}}>
                        <Image className="profile_img" src={`/${props.about.profilePic}`} alt='me' width={338} height={339}/>
                    </motion.div>
                    <motion.div className="about_info" variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                        {props.about.bio.map((phrase, index) => (
                            <p key={index}>{phrase}</p>
                        ))}
                        <motion.div className='btn_cv_wrapper' whileInView="visible" viewport={{once: true}}>
                            <motion.button whileHover={{ scale: 1.2 }}>
                                <a target="_blank" rel="noopener noreferrer" title="Download my resume" href={`${props.about.resumedownload}`}>Download CV</a>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
                <div className='extra_info'>
                    <div className="info_container one">
                        <motion.h3 className='subsubsection_title one' variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>Education</motion.h3>
                        <motion.div className="content edu" variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                            {props.about.education.map((edu, index) => (
                                <div key={index}>
                                    <p>⦾ {edu.graduated}</p>
                                    <p className='ident1'><strong>{edu.school}</strong></p>
                                    <p className='ident1'>{edu.degree}</p>
                                    {edu.description != null ? <p className='ident2'>{edu.description}</p> : null }
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    <div className="info_container two">
                        <motion.h3 className='subsubsection_title two' variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>Work Experience</motion.h3>
                        <motion.div className='info_inner' variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                            <div className='tab-jobs'>
                                {props.about.work.slice(0).reverse().map(job => (
                                    <button className={`work-button ${currentJob == job.id ? 'work-button-active' : ''}`} key={job.id} id={job.id} onClick={() => {setCurrentJob(job.id)}}>
                                        <span>{job.company}</span>
                                    </button>
                                ))}
                            </div>
                            <div className="content jobs">
                                <h4>
                                    <span>{props.about.work[currentJob].role}</span> 
                                    <span className='company'> @ <a target="_blank" rel="noopener noreferrer" href={props.about.work[currentJob].companyUrl}>
                                        {props.about.work[currentJob].company}</a></span>
                                </h4>
                                <p>{props.about.work[currentJob].timespan}</p>
                                <ul>
                                    {props.about.work[currentJob].notes.map((note, index) => (
                                        <li key={index}>{note}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;
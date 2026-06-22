import Image from 'next/image'
import Project from './project'
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

const Portfolio = (props) => {
    return ( 
        <section className="portfolio" id='portfolio'>
            <div>
                <motion.div className="section_title_marquee" variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                    <span className="marquee-grey">FEATURED PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="marquee-white">FEATURED PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="marquee-grey">FEATURED PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="marquee-grey">FEATURED PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="marquee-grey">FEATURED PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="marquee-grey">FEATURED PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </motion.div>
                <div className='projects_container'>
                    <div className="project_container">
                        <div className='project-info big-version'>
                            <motion.div className='project-inner' variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                                <Project project={props.portfolio[0]}/>
                            </motion.div>
                        </div>
                        <motion.div className='proj-img-wrapper' variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                            <Image className='proj-img' src={`/proj/${props.portfolio[0].img}`} alt='project1' width={1842} height={1071}/>
                        </motion.div>
                        <div className='small-version'>
                            <motion.div className='project-inner' variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                                <Project project={props.portfolio[0]}/>
                            </motion.div>
                        </div>
                    </div>
                    <div className="project_container inverse">
                        <motion.div className='proj-img-wrapper' variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                            <Image className='proj-img' src={`/proj/${props.portfolio[1].img}`} alt='project2' width={1842} height={1071}/>
                        </motion.div>
                        <div className='project-info'>
                            <motion.div className="project-inner inverse" variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                                <Project project={props.portfolio[1]}/>
                            </motion.div>
                        </div>
                    </div>
                    <div className="project_container">
                        <div className='project-info big-version'>
                            <motion.div className='project-inner' variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                                <Project project={props.portfolio[2]}/>
                            </motion.div>
                        </div>
                        <motion.div className='proj-img-wrapper' variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                            <Image className='proj-img' src={`/proj/${props.portfolio[2].img}`} alt='project3' width={1842} height={1071}/>
                        </motion.div>
                        <div className='small-version'>
                            <motion.div className='project-inner' variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                                <Project project={props.portfolio[2]}/>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Portfolio;
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
                <motion.div className="section_title" variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                    <h2>Featured Projects</h2>
                </motion.div>
                <div className='projects_container'>
                    <div className="project_container">
                        <motion.div className='project-inner hide-mobile' variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                            <Project project={props.portfolio[0]}/>
                        </motion.div>
                        <motion.div variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                            <Image className='proj-img' src={`/proj/${props.portfolio[0].img}`} alt='project1' width={1842} height={1071}/>
                        </motion.div>
                        <motion.div className='show-mobile' variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                            <div className='project-inner'>
                                <Project project={props.portfolio[0]}/>
                            </div>
                        </motion.div>
                    </div>
                    <div className="project_container inverse">
                        <motion.div variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                            <Image className='proj-img' src={`/proj/${props.portfolio[1].img}`} alt='project2' width={1842} height={1071}/>
                        </motion.div>
                        <motion.div className="project-inner inverse" variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                            <Project project={props.portfolio[1]}/>
                        </motion.div>
                    </div>
                    <div className="project_container">
                        <motion.div className='project-inner hide-mobile' variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                            <Project project={props.portfolio[2]}/>
                        </motion.div>
                        <motion.div variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                            <Image className='proj-img' src={`/proj/${props.portfolio[2].img}`} alt='project3' width={1842} height={1071}/>
                        </motion.div>
                        <motion.div className='show-mobile' variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                            <div className='project-inner'>
                                <Project project={props.portfolio[2]}/>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Portfolio;
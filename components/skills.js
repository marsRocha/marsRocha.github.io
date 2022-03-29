import { motion } from "framer-motion";
import Icon from "../components/icon"
import { useState } from "react";
import Image from "next/image";

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

const tableSectiors = ["All", "Coding Languages", "Databases", "Web Development", "Game Development", "Design"];

const Skills = (props) => {
    const [currentSkillArray, setCurrentSkillArray] = useState(0);

    return ( 
        <section id='skills'>
            <div>
                <motion.div className="section_title" variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                    <h2>What I Can Do</h2>
                </motion.div>
                <div className="skills-container">
                    <ul className="skills-list">
                        <li className="skill-container">
                            <motion.div className="skill-icon-container" whileHover={{rotate: 40}}>
                                <Image src='/skillIcons/design.png' layout='fill' alt='logo'/>
                            </motion.div>
                            <p className="skill-title"><strong>Design</strong></p>
                            <ul>
                                {currentSkillArray == 0 || currentSkillArray == 1 ?
                                    props.skills.design.map((name, index) => (
                                        <li key={index}>
                                            <div title={name} className="skill-tools">
                                                <Icon name={name}/>
                                            </div>
                                        </li>
                                    ))
                                    : null
                                }
                            </ul>
                        </li>
                        <li className="skill-container">
                            <motion.div className="skill-icon-container" whileHover={{rotate: 40}}>
                                <Image src='/skillIcons/frontend.png' layout='fill' alt='logo'/>
                            </motion.div>
                            <p className="skill-title"><strong>Front End Development</strong></p>
                            <ul>
                                {currentSkillArray == 0 || currentSkillArray == 1 ?
                                    props.skills.front.map((name, index) => (
                                        <li key={index}>
                                            <div title={name} className="skill-tools">
                                                <Icon name={name}/>
                                            </div>
                                        </li>
                                    ))
                                    : null
                                }
                            </ul>
                        </li>
                        <li className="skill-container">
                            <motion.div className="skill-icon-container" whileHover={{rotate: 40}}>
                                <Image src='/skillIcons/backend.png' layout='fill' alt='logo'/>
                            </motion.div>
                            <p className="skill-title"><strong>Back End Development</strong></p>
                            <ul>
                                {currentSkillArray == 0 || currentSkillArray == 1 ?
                                    props.skills.back.map((name, index) => (
                                        <li key={index}>
                                            <div title={name} className="skill-tools">
                                                <Icon name={name}/>
                                            </div>
                                        </li>
                                    ))
                                    : null
                                }
                            </ul>
                        </li>
                        <li className="skill-container">
                            <motion.div className="skill-icon-container" whileHover={{rotate: 40}}>
                                <Image src='/skillIcons/game.png' layout='fill' alt='logo'/>
                            </motion.div>
                            <p className="skill-title"><strong>Game Development</strong></p>
                            <ul>
                                {currentSkillArray == 0 || currentSkillArray == 1 ?
                                    props.skills.game.map((name, index) => (
                                        <li key={index}>
                                            <div title={name} className="skill-tools">
                                                <Icon name={name}/>
                                            </div>
                                        </li>
                                    ))
                                    : null
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
     );
}
 
export default Skills;

/*
<motion.div className="skills-table-container" variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                    <div>
                        <header>
                            {tableSectiors.map((element, index) => (
                                <button className={`skill-section-button ${currentSkillArray == index ? 'work-button-active' : ''}`} key={index} onClick = {() => {setCurrentSkillArray(index)}}>
                                    <span>{element}</span>
                                </button>
                            ))}
                        </header>
                    </div>
                    <div className="skills-table">
                        <ul>
                            {currentSkillArray == 0 || currentSkillArray == 1 ?
                                props.skills.languages.map((name, index) => (
                                    <li key={index} className='skill-container-li'>
                                        <div title={name} className="skill-container">
                                            <Icon name={name}/>
                                        </div>
                                    </li>
                                ))
                                : null
                            }
                            {currentSkillArray == 0 || currentSkillArray == 2 ?
                                props.skills.data.map((name, index) => (
                                    <li key={index} className='skill-container-li'>
                                        <div title={name} className="skill-container">
                                            <Icon name={name}/>
                                        </div>
                                    </li>
                                ))
                                : null
                            }
                            {currentSkillArray == 0 || currentSkillArray == 3 ?
                                props.skills.web.map((name, index) => (
                                    <li key={index} className='skill-container-li'>
                                        <div title={name} className="skill-container">
                                            <Icon name={name}/>
                                        </div>
                                    </li>
                                ))
                                : null
                            }
                            {currentSkillArray == 0 || currentSkillArray == 4 ?
                                props.skills.game.map((name, index) => (
                                    <li key={index} className='skill-container-li'>
                                        <div title={name} className="skill-container">
                                            <Icon name={name}/>
                                        </div>
                                    </li>
                                ))
                                : null
                            }
                            {currentSkillArray == 0 || currentSkillArray == 5 ?
                                props.skills.design.map((name, index) => (
                                    <li key={index} className='skill-container-li'>
                                        <div title={name} className="skill-container">
                                            <Icon name={name}/>
                                        </div>
                                    </li>
                                ))
                                : null
                            }
                        </ul>
                    </div>
                </motion.div>
                */
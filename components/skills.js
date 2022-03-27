import { motion } from "framer-motion";
import Icon from "../components/icon"
import { useState } from "react";

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
    const [currentSkillArray, setCurrentSkillArray] = useState(0)

    return ( 
        <section id='skills'>
            <div>
                <motion.div className="section_title" variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                    <h2>What I Can Do</h2>
                </motion.div>
                <div className="skills_container one">
                    <motion.ul variants={parentVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                        <motion.li variants={childVariants}>
                            <div className="icon_container one" whileHover={{rotate: 25}}>
                                <motion.svg whileHover={{rotate: 25}} width="80" height="74" viewBox="0 0 80 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4 36H76V4H4V36ZM76 40H4V51H76V40ZM0 40V36V4V0H4H76H80V4V36V40V51V55H76H44V70H62V74H44H40H18V70H40V55H4H0V51V40Z" fill="#DFC172"/>
                                </motion.svg>
                            </div>
                            <p className="skill_title">Software Developer</p>
                            <p className="skill_desc">{props.skills.softwareDev}</p>
                        </motion.li>
                        <motion.li variants={childVariants}>
                            <div className="icon_container two">
                                <motion.svg whileHover={{rotate: 25}} width="80" height="74" viewBox="0 0 80 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4 36H76V4H4V36ZM76 40H4V51H76V40ZM0 40V36V4V0H4H76H80V4V36V40V51V55H76H44V70H62V74H44H40H18V70H40V55H4H0V51V40Z" fill="#DFC172"/>
                                </motion.svg>
                            </div>
                            <p className="skill_title">Game Developer</p>
                            <p className="skill_desc">{props.skills.gameDev}</p>
                        </motion.li>
                    </motion.ul>
                </div>
                <motion.div className="divider_wrapper" variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                    <div className="divider"/>
                </motion.div>
                <motion.div className="skills-table-container" variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                    <div>
                        <header>
                            {tableSectiors.map((element, index) => (
                                <button className={`skill-section-button ${currentSkillArray == index ? 'work-button-active' : ''}`} id={index} onClick = {() => {setCurrentSkillArray(index)}}>
                                    <span>{element}</span>
                                </button>
                            ))}
                        </header>
                    </div>
                    <div className="skills-table">
                        <ul>
                            {currentSkillArray == 0 || currentSkillArray == 1 ?
                                props.skills.languages.map((name, index) => (
                                    <li key={index}>
                                        <div title={name} className="skill-container">
                                            <Icon name={name}/>
                                        </div>
                                    </li>
                                ))
                                : null
                            }
                            {currentSkillArray == 0 || currentSkillArray == 2 ?
                                props.skills.data.map((name, index) => (
                                    <li key={index}>
                                        <div title={name} className="skill-container">
                                            <Icon name={name}/>
                                        </div>
                                    </li>
                                ))
                                : null
                            }
                            {currentSkillArray == 0 || currentSkillArray == 3 ?
                                props.skills.web.map((name, index) => (
                                    <li key={index}>
                                        <div title={name} className="skill-container">
                                            <Icon name={name}/>
                                        </div>
                                    </li>
                                ))
                                : null
                            }
                            {currentSkillArray == 0 || currentSkillArray == 4 ?
                                props.skills.game.map((name, index) => (
                                    <li key={index}>
                                        <div title={name} className="skill-container">
                                            <Icon name={name}/>
                                        </div>
                                    </li>
                                ))
                                : null
                            }
                            {currentSkillArray == 0 || currentSkillArray == 5 ?
                                props.skills.design.map((name, index) => (
                                    <li key={index}>
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
            </div>
        </section>
     );
}
 
export default Skills;

/*
                    <motion.div className="skill_icon_container" variants={childVariants}>
                        <p className="skill_title">Languages</p>

                            <ul>
                                {props.skills.languages.map((name, index) => (
                                    <li key={index}>
                                        <div title={name} className="skill-container">
                                            <Icon name={name}/>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                    </motion.div>
                        <motion.div className="skill_icon_container" variants={childVariants}>
                        <p className="skill_title">Databases</p>

                            <ul>
                                {props.skills.data.map((name, index) => (
                                    <li key={index}>
                                        <div title={name} className="skill-container">
                                            <Icon name={name}/>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div className="skill_icon_container" variants={childVariants}>
                        <p className="skill_title">Web Development</p>
                            <ul>
                                {props.skills.web.map((name, index) => (
                                    <li key={index}>
                                        <div title={name} className="skill-container">
                                            <Icon name={name}/>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div className="skill_icon_container" variants={childVariants}>
                        <p className="skill_title">Game Development</p>

                            <ul>
                                {props.skills.game.map((name, index) => (
                                    <li key={index}>
                                        <div title={name} className="skill-container">
                                            <Icon name={name}/>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div className="skill_icon_container" variants={childVariants}>
                        <p className="skill_title">Design Tools</p>
                            <ul>
                                {props.skills.design.map((name, index) => (
                                    <li key={index}>
                                        <div title={name} className="skill-container">
                                            <Icon name={name}/>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        */
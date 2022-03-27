import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";
import Icon from '../icon'

const ProjectCard = (props) => {
    return (
        <div className='project_card_inner'>
            <header>
                <FiFolder/>                       
                <ul>
                    {props.project.externalLinks.sourceCode != null ? 
                        <li name="source-code">
                            <motion.div whileHover={{ scale: 1.2 }}>    
                                <a title='Source Code'  target="_blank" rel="noreferrer noopener" href={props.project.externalLinks.sourceCode}>
                                    <FiGithub/>
                                </a>
                            </motion.div>
                            </li>
                    : null}
                    {props.project.externalLinks.demo != null ? 
                        <li name="demo">
                            <motion.div whileHover={{ scale: 1.2 }}>    
                                <a title='External Link' target="_blank" rel="noreferrer noopener" href={props.project.externalLinks.demo}>
                                    <FiExternalLink/>
                                </a>
                            </motion.div>
                            </li>
                    : null}
                </ul>
            </header>
            <div className='slide_info'>
                <p className='project_title'><strong>{props.project.title}</strong></p>
                {props.project.desc != null ? <p className='project_desc'>{props.project.desc}</p> : null}
            </div>
            <footer>
                <ul>
                    {props.project.tech.map((element, index) => (
                        <li key={index}>
                            <div title={element} className="skill-container">
                                <Icon name={element}/>
                            </div>
                        </li>
                    ))}
                </ul>
            </footer>
        </div>
    )
}

export default ProjectCard;
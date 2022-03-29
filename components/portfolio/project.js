import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Icon from "../icon"


const Project = (props) => {
    return ( 
        <div>
            <p className="project_title">{props.project.title}</p>
            <p className="project_desc">{props.project.desc}</p>
            <ul>
                {props.project.tech.map((element, index) => (
                    <li key={index}>
                        <div title={element} className="skill-tools">
                            <Icon name={element}/>
                        </div>
                    </li>
                ))}
            </ul>
            <ul>
                {props.project.externalLinks.sourceCode != null ? 
                    <li name="source-code">
                        <motion.div whileHover={{ scale: 1.2 }}>    
                            <a title='Source Code' target="_blank" rel="noreferrer noopener" href={props.project.externalLinks.sourceCode}>
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
    </div>
    );
}
 
export default Project;
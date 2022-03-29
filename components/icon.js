import { FaJava, FaJs, FaCss3Alt, FaPython, FaPhp, FaHtml5, FaSwift, FaNodeJs, FaReact, FaBootstrap, FaUnity, FaFigma, FaVuejs } from "react-icons/fa";
import { SiMysql, SiPostgresql, SiMongodb, SiNeo4J } from "react-icons/si";
import { SiSpring, SiNextdotjs, SiFramer, SiBlender, SiAdobephotoshop, SiAdobeillustrator, SiAdobelightroom, SiHibernate } from "react-icons/si";
import Image from 'next/image'

const extrasSize = 27;

const Icon = (props) => {
    switch (props.name) {
        case "Java":
            return <div className="tool-icon"><FaJava/><p>{props.name}</p></div>
        case "JavaScript":
            return <div className="tool-icon"><FaJs/><p>{props.name}</p></div>
        case "CSS":
            return <div className="tool-icon"><FaCss3Alt/><p>{props.name}</p></div>
        case "Python":
            return <div className="tool-icon"><FaPython/><p>{props.name}</p></div>
        case "C#":
            return <div className="tool-icon"><Image src="/extraIcons/cSharp.svg" alt="c#" width={extrasSize} height={extrasSize}/><p>{props.name}</p></div>
        case "C":
            return <div className="tool-icon"><Image src="/extraIcons/c.svg" alt="c#" width={extrasSize} height={extrasSize}/><p>{props.name}</p></div>
        case "C++":
            return <div className="tool-icon"><Image src="/extraIcons/cplusplus.svg" alt="c#" width={extrasSize} height={extrasSize}/><p>{props.name}</p></div>
        case "PHP":
            return <div className="tool-icon"><FaPhp/><p>{props.name}</p></div>
        case "HTML":
            return <div className="tool-icon"><FaHtml5/><p>{props.name}</p></div>
        case "Swift":
            return <div className="tool-icon"><FaSwift/><p>{props.name}</p></div>
        case "Erlang":
            return <div className="tool-icon"><Image src="/extraIcons/erlang.svg" alt="c#" width={extrasSize} height={extrasSize}/><p>{props.name}</p></div>

        case "MySQL":
            return <div className="tool-icon"><SiMysql/><p>{props.name}</p></div>
        case "PostgreSQL":
            return <div className="tool-icon"><SiPostgresql/><p>{props.name}</p></div>
        case "MongoDB":
            return <div className="tool-icon"><SiMongodb/><p>{props.name}</p></div>
        case "Neo4j":
            return <div className="tool-icon"><SiNeo4J/><p>{props.name}</p></div>
        case "Hibernate":
            return <div className="tool-icon"><SiNeo4J/><p>{props.name}</p></div>

        case "Spring":
            return <div className="tool-icon"><SiSpring/><p>{props.name}</p></div>
        case "Node.js":
            return <div className="tool-icon"><FaNodeJs/><p>{props.name}</p></div>
        case "Next.js":
            return <div className="tool-icon"><SiNextdotjs/><p>{props.name}</p></div>
        case "Framer Motion":
            return <div className="tool-icon"><SiFramer/><p>{props.name}</p></div>
        case "React":
            return <div className="tool-icon"><FaReact/><p>{props.name}</p></div>
        case "Vue.js":
            return <div className="tool-icon"><FaVuejs/><p>{props.name}</p></div>
        case "Bootstrap":
            return <div className="tool-icon"><FaBootstrap/><p>{props.name}</p></div>
        case "Unity":
            return <div className="tool-icon"><FaUnity/><p>{props.name}</p></div>
        case "Blender":
            return <div className="tool-icon"><SiBlender/><p>{props.name}</p></div>
        case "Autodesk Maya":
            return <div className="tool-icon"><Image src="/extraIcons/maya.svg" alt="c#" width={extrasSize} height={extrasSize}/><p>{props.name}</p></div>
        case "Autodesk 3DS Max":
            return <div className="tool-icon"><Image src="/extraIcons/3dsmax.svg" alt="c#" width={extrasSize} height={extrasSize}/><p>{props.name}</p></div>

        case "Figma":
            return <div className="tool-icon"><FaFigma/><p>{props.name}</p></div>
        case "Adobe Photoshop":
            return <div className="tool-icon"><SiAdobephotoshop/><p>{props.name}</p></div>
        case "Adobe Illustrator":
            return <div className="tool-icon"><SiAdobeillustrator/><p>{props.name}</p></div>
        case "Adobe Lightroom":
            return <div className="tool-icon"><SiAdobelightroom/><p>{props.name}</p></div>
        case "Procreate":
            return <div className="tool-icon"><Image src="/extraIcons/Procreate.svg" alt="c#" width={extrasSize} height={extrasSize}/><p>{props.name}</p></div>
        default:
            return <p>{props.name}</p>;
    }
}

export default Icon;
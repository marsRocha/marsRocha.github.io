import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper';
import 'swiper/css'
import { useEffect, useState } from 'react';
import ProjectCard from './projectCard'

import { motion } from 'framer-motion';


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

var resizeId;

const Archive = (props) => {

    let [mywindow , setMyWindow] = useState({})

    useEffect(()=>{
        setMyWindow({ height: window.innerHeight, width: window.innerWidth})

        window.addEventListener("resize", function(){
            clearTimeout(resizeId);
            resizeId = setTimeout(doneResizing, 500);
        })

        function doneResizing(){
            //console.log("window is ",window.innerHeight,window.innerWidth)
            setMyWindow({ height: window.innerHeight, width: window.innerWidth })
        }

    },[])

    return (
        <section className="archive">
            <div>
                <motion.div className="section_title" variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                    <h2>Other Noteworthy Projects</h2>
                </motion.div>
                <motion.div variants={soloVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={mywindow.width && mywindow.width < 1800 ? mywindow.width < 1200 ? 1 : 2 : 3}
                        navigation= {mywindow.width && mywindow.width < 700 ? false : true}
                        pagination={{ clickable: true }}
                        loop={true}
                        >
                        
                            {props.archive.map(project => (
                                <SwiperSlide key={project.id}>
                                    <ProjectCard project={project}/>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
}

export default Archive;
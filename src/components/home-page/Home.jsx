import About from '../about/About';
import './index.css';
import Image from './imgSlide.json';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home(){

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    function fetchImage(){
        setImages(Image);
    }

    function NextSlide(){
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1 );
    }
    useEffect(() => {
        fetchImage();
    },[])
    useEffect(() => {
      setTimeout(() => {
        NextSlide();
      },15000);
    });

    return(
        <>
         <div className="home relative">
           <motion.div initial={{opacity: 0, y: 150}}
                       whileInView={{opacity: 1, y:0}}
                       transition={{duration: 1.5}}
                       viewport={{once: true}} 
                       className="flex flex-col items-center justify-center h-screen p-8 gap-3 text-center ">
               <h1 className="text-5xl text-white font-bold uppercase lg:text-7xl md:text-6xl z-10">werka <span className="text-green-800 font-bold">coffee</span> Farm</h1>
               <h2 className="text-3xl text-white font-seimibold z-10 lg:text-5xl">Speciality coffee from the land of origin.</h2>
               <p className="text-white text-sm md:text-lg mt-3 z-10">We source premium coffee beans directly from our farm in Ethiopia’s coffee-producing regions, focusing on global distribution</p>
               <button className="bg-white border-2 border-white px-5 py-3 rounded-sm uppercase font-semibold mt-8 hover:bg-transparent hover:text-white z-10 "><Link to={'./contact'}>contact us</Link></button>
           </motion.div>
           {
            images && images.length ? 
            images.map((imgList, index) => (
                    <img key={index} src={imgList.images} alt="" className={currentSlide === index ? 'showCurrentSlide' : 'showCurrentSlide hide'}/>             
            ))
            : null
           }
       </div>
       <About/>
        </>
      
    )
}

export default Home;
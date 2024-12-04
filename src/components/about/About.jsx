import { Link } from "react-router-dom";
import './index.css';
import TheProcess from '../the process/TheProcess';
import { motion } from "framer-motion";

function About(){
    return(
        <>
        <div className="bg-yellow-100 relative">
            <div className="grid p-8 items-center justify-center gap-8 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 min-h-screen">
               <motion.div initial={{opacity: 0, y: 60}}
                             whileInView={{opacity: 1, y:0}}
                             transition={{duration: 1.5}}
                             viewport={{once: true}} 
                             className="paragraph flex flex-col items-start justify-center gap-5">

                   <p className="text-xl font-meduim uppercase text-yellow-700 ">About</p>
                    <h1 className="text-4xl font-bold uppercase text-green-800">mastering nurture in <span className="">coffee production</span> </h1>
                    <p>At Tade, we are dedicated to sharing the rich, distinctive flavors of our <br />coffee with the world. Nestled in fertile soil and blessed with an ideal climate, our farm produces beans known for their quality, mainly from it’s washing and drying station located in Oromia Region.</p>
                    <button className="px-5 py-3 bg-black border-2 border-black text-white uppercase rounded-sm hover:bg-transparent hover:border-black hover:text-black"><Link to={'/aboutUs'}>learn more</Link></button>
               </motion.div>

               <motion.div initial={{opacity: 0, y: 130}}
                             whileInView={{opacity: 1, y:0}}
                             transition={{duration: 1.5}}
                             viewport={{once: true}} 
                             className="relative max-w-xl">
                  <img src="./images/onsite-2.jpg" alt="" className="w-full h-full object-cover" />
               </motion.div>

            </div>
        </div>
        <TheProcess/>
        </>
    )
}

export default About;
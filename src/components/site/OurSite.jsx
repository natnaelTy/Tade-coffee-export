import "./style.css";
import { motion } from 'framer-motion';

function OurSite(){

    return(
        <div className="text-center mb-8 p-4 relative">
            {/* description */}
            <h1 className="text-2xl text-center">Our site's</h1>
            {/* description underline */}
            <div className="marked"></div>
            
            <motion.div initial={{opacity: 0, y: 150}}
                        whileInView={{opacity: 1, y:0}}
                        transition={{duration: 1.5}}
                        viewport={{once: true}} 
                        className="flex items-center justify-center flex-wrap gap-20 mt-14">
                <div className="contain-image">
                    <div className="content shadow-xl">
                       <h1 className="text-xl md:text-2xl text-white z-10">01. Mendoyu</h1>
                       <p className="max-w-md p-3 text-sm md:text-base text-gray-200 z-10">This site located about 1500 altitude at one of the tropical regions in oromia region.</p>
                    </div>
                    <img src="./images/tade-7.jpg" alt="" className="img"/>
                </div>

                <div className="contain-image">
                    <div className="content shadow-xl">
                       <h1 className="text-xl md:text-2xl text-white z-10">02. Yemasera</h1>
                       <p className="max-w-md p-3 text-sm md:text-base text-gray-200 z-10">This site one of our largest site with the size of over 100 workers.</p>
                    </div>
                    <img src="./images/site2.jpg" alt="" className="img"/>
                </div>

                <div className="contain-image">
                    <div className="content shadow-xl">
                       <h1 className="text-xl md:text-2xl text-white z-10">03. Uchuro </h1>
                       <p className="max-w-md p-3 text-sm md:text-base text-gray-200 z-10">This site planted at the remote area of oromia region with abundant coffee resources.</p>
                    </div>
                    <img src="./images/site4.jpg" alt="" className="img"/>
                </div>

                <div className="contain-image">
                    <div className="content shadow-xl">
                       <h1 className="text-xl md:text-2xl text-white z-10">04. Mewa Amrieha</h1>
                       <p className="max-w-md p-3 text-sm md:text-base text-gray-200 z-10">This site dedicated to improve the quality of our coffee.</p>
                    </div>
                    <img src="./images/site5.jpg" alt="" className="img"/>
                </div>

            </motion.div>
        </div>
    )
}

export default OurSite;
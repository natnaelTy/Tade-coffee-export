import './style.css'
import { motion } from 'framer-motion';

function TheProcess(){

    return(
        <>
        <div className='mb-20'>
            <motion.div  initial={{opacity: 0, y: 40}}
                         whileInView={{opacity: 1, y:0}}
                         transition={{duration: 1.5}}
                         viewport={{once: true}} 
                         className='relative'>
                 <h1 className="text-center text-2xl font-normal mt-16">What we offer</h1>
                 <div className='marked'>

                </div>
            </motion.div>
             <div className="p-2 md:p-5 flex gap-10 sm:mb-1 items-center justify-around flex-col lg:flex-row lg:gap-10 mt-10 lg:mt-4">
                 <motion.div initial={{opacity: 0, y: 70}}
                             whileInView={{opacity: 1, y:0}}
                             transition={{duration: 1.5}}
                             viewport={{once: true}}
                             className="container flex flex-col items-center justify-center shadow-md hover:shadow-2xl rounded-sm w-4/5 gap-4 p-3">
                     <img src="./images/dried.jpg" alt="" className="object-cover w-full h-full" />
                     <h2 className='text-xl font-medium'>Natural - Sun Dried</h2>
                     <p>Naturally processed beans have a heavy fruit and wine flavor. They may have hints of cherry, grape, lime, and peach. Their natural process gives them an earthy taste. If beans aren’t dried correctly, they develop a sour taste
                     and become too brittle to roast. Yirgacheffe union provides sun dried coffee based on their need.</p>
                 </motion.div>
                 <motion.div initial={{opacity: 0, y: 120}}
                             whileInView={{opacity: 1, y:0}}
                             transition={{duration: 1.5}}
                             viewport={{once: true}} 
                             className="container flex flex-col items-center justify-center shadow-md hover:shadow-2xl rounded-sm w-4/5 gap-4 p-3">
                     <img src="./images/unwashed.jpg" alt="" className="object-cover w-full h-full" />
                     <h2 className='text-xl font-medium'>Unwashed</h2>
                     <p> After harvesting, the coffee cherries are laid out to dry in the sun with the pulp and skin still intact. As the cherries dry, the natural sugars and flavors from the fruit seep into the beans, This process can take weeks, Once the cherries reach the desired moisture level, the dried pulp is removed, revealing the green coffee beans inside</p>
                 </motion.div>
                 <motion.div initial={{opacity: 0, y: 160}}
                             whileInView={{opacity: 1, y:0}}
                             transition={{duration: 1.5}}
                             viewport={{once: true}} 
                             className="container flex flex-col items-center justify-center shadow-md hover:shadow-2xl rounded-sm w-4/5 gap-4 p-3">
                     <img src="./images/washed.jpg" alt="" className="object-cover w-full h-full" />
                     <h2 className='text-xl font-medium'>Washed</h2>
                     <p>Instead of being picked and dried immediately, wet processing requires thorough washing. Once they are clean, the beans sit on rotating beds for 48 to 72 hours. This dries the entire bean evenly. Wet processing removes the
                     traditional fermented werka flavors and creates a lighter bodied coffee bean.</p>
                 </motion.div>
             </div>
        </div>
        </>
    )
}

export default TheProcess;
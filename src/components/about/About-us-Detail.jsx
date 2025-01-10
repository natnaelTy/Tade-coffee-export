import { useEffect, useState } from "react";
import image from './img.json';
import './index.css';
import { Link } from "react-router-dom";
import CommonHeader from "../header photo/CommonHeader";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function AboutUsDetail(){

   const [images, setImages] = useState([]);
   const [currentSlide, setCurrentSlide] = useState(0);

   function handlePrevious(){
      setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
   }

   function handleNextSlide(){
      setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1)
   }

   function fetchImage(){
      setImages(image);
   }

   useEffect(() => {
      fetchImage();
   },[]);

   console.log(images, currentSlide);

    return(
      <>
      {/* common header photo */}
      <div className="relative">
         <CommonHeader />
        <div className="absolute inset-x-1/2 inset-y-2/4 z-10">
           <div className="flex items-center justify-around text-white text-xl lg:text-2xl gap-2">
               <Link to={'/'} className="hover:text-green-800"><h2>Home</h2></Link>
               <h2><IoIosArrowForward/></h2>
               <h2>About</h2>
           </div>
        </div>
       </div>

        <div> 
            <div className="flex flex-col items-center justify-around p-4 gap-4">
               <div className="paragraph flex flex-col items-center justify-center text-center gap-4 mb-6">
                   <p className="text-xl uppercase text-orange-700 font-medium">about</p>
                    <h1 className="lg:text-5xl md:text-4xl text-3xl text-green-800 font-bold uppercase max-w-3xl">Mastering nurture in coffee production</h1>
                    <p className="text-gray-800 max-w-3xl">At Tade, we are dedicated to sharing the rich, distinctive flavors of our coffee with the world. Nestled in fertile soil and blessed with an ideal climate, our farm produces beans known for their quality, mainly from it’s washing and drying station located in Oromia and Southern Ethiopia Region. Our team combines traditional farming methods with sustainable practices, ensuring that every batch we export meets the highest standards. From the hands of skilled farmers to the final cup, we bring a premium coffee experience that showcases the art and heritage of coffee cultivation. Whether for a roastery or a café, we are committed to providing coffee lovers with an authentic Unwashed coffee beans, also known as naturally processed coffee, undergo a unique processing method that results in a rich and fruit-forward flavor profile. After harvesting, the coffee cherries are laid out to dry in the sun with the pulp and skin still intact. As the cherries dry, the natural sugars and flavors from the fruit seep into the beans, enhancing sweetness and body. This process can take weeks and requires careful monitoring to ensure even drying and avoid spoilage. Once the cherries reach the desired moisture level, the dried pulp is removed, revealing the green coffee beans inside. Naturally processed coffees tend to have a bold, complex taste with notes of berry, tropical fruit, or even chocolate, and are prized for their full body and vibrant acidity. The unwashed method also conserves water, making it an eco-friendly choice commonly used in regions where water resources are limited.</p>
               </div>
                 <div className="flex items-center justify-center relative">
                  <div onClick={handlePrevious} className="arrow arrowLeft"><MdOutlineArrowBackIosNew/></div>
                    {
                     images && images.length ? 
                     images.map((imageList, index) => (
                     <div className={currentSlide === index ? "container" : "hidden"} key={imageList.id}>
                        <img src={imageList.images} alt="" className='currentImage'/>
                     </div>
                     ))
                     : null
                    }
                    <div onClick={handleNextSlide} className="arrow arrowRight"><MdOutlineArrowForwardIos/></div>
                    <span className="circle-indicator">
                      {
                        images && images.length ? 
                        images.map((_, index) => (
                           <button onClick={() => setCurrentSlide(index)} key={index} className={currentSlide === index ? 'current-indicator' : 'current-indicator hide-indicator'}></button>
                        ))
                        : null
                      }
                    </span>
               </div>
            </div>
        </div>
        </>
    )
}

export default AboutUsDetail;
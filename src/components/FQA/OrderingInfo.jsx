
import { Link } from 'react-router-dom';
import data from './FQA.js';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import CommonHeader from "../header photo/CommonHeader";

function OrderingInfo(){

   const [selected, setSelected] = useState([]);
   const [toggleArrow, setToggleArrow] = useState(false);

   function handleToggle(){
      setToggleArrow(!toggleArrow);
   }

   function handleShowAnswer(getCurrentId){
      let copySelected = [...selected];
      const findIndexOfCurrentId = copySelected.indexOf(getCurrentId);

      if(findIndexOfCurrentId === -1)copySelected.push(getCurrentId);
      else{
         copySelected.splice(findIndexOfCurrentId, 1);
      }
      setSelected(copySelected);
   }
     return(
        <>
    {/* common header photo */}
      <div className="relative">
         <CommonHeader />
        <div className="absolute inset-x-1/2 inset-y-2/4 z-10">
           <div className="flex items-center justify-around text-white text-xl lg:text-2xl gap-2">
               <Link to={'/'} className="hover:text-green-800"><h2>Home</h2></Link>
               <h2><IoIosArrowForward/></h2>
               <h2>FAQ</h2>
           </div>
        </div>
       </div>

      <div className="relative">
         <h1 className='text-center text-3xl md:text-4xl p-8 mt-3 font-medium'>What's Available <span className='font-bold text-green-800'>and</span> what you should know.</h1>
            <div className="lg:flex flex-cols items-start justify-between p-4">
               <div className="paragraph flex flex-col items-start justify-center gap-5">
               <div className='flex flex-col gap-6 p-4'>
                     {
                        data && data.length ? 
                        data.map((dataItem, index) => (
                           <div  className={'cursor-pointer bg-yellow-100 hover:bg-yellow-200 max-w-lg w-full p-3 rounded-sm'} 
                                  onClick={() => handleShowAnswer(index)} 
                                  key={dataItem.id}>
                               <div className='flex items-center justify-between p-2'>
                                   <h3 className='text-green-900 font-semibold'>{dataItem.question}</h3>
                                   <span style={{fontSize: '20px'}} onClick={handleToggle}>
                                   {selected.indexOf(dataItem.id) !== - 1 ? <IoIosArrowUp/> :   <IoIosArrowDown/> }</span>
                              </div>
                                 {selected.indexOf(dataItem.id) !== - 1 && <div className='text-center p-3'>{dataItem.answer}</div>}
                           </div>
                        ))
                        : null
                     }
                     </div>
                 </div>
              <div className='max-w-xl w-full relative flex flex-col p-4 '>
                     <img src="./images/tade.jpg" alt="on site" className='object-cover h-full w-full' />
              </div>
          </div>
        </div>
        </>
     )
}

export default OrderingInfo;
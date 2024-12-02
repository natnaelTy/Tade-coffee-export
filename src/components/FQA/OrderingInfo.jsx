import HeaderPhoto from '../header/HeaderPhoto';
import { Link } from 'react-router-dom';
import data from './FQA.js';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

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
          <HeaderPhoto/>
          <div className="center-container flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase shadow-lg">
          Ordering information
        </h1>
        <div className="flex gap-4 items-center justify-center mt-4">
          <Link className="text-white text-lg md:text-lg hover:text-green-800" to={"/"}>
            Home
          </Link>
          <i className=" text-white text-lg md:text-lg fa-solid fa-chevron-right"></i>
          <h2 className="text-white text-lg md:text-lg"> FQA</h2>
        </div>
      </div>


      <div className="relative">
         <h1 className='text-center text-3xl md:text-4xl p-8 mt-3 font-medium'>What's Available <span className='font-bold text-green-800'>and</span> what you should know.</h1>
            <div className="flex flex-wrap items-center justify-around p-10">
               <div className="flex flex-wrap items-center justify-center gap-8 ">
               <div className='flex flex-col gap-6 max-w-[600px]'>
                     {
                        data && data.length ? 
                        data.map((dataItem, index) => (
                           <div  className={'cursor-pointer bg-yellow-100 hover:bg-[#ffeb88] p-4 rounded-sm'} 
                                  onClick={() => handleShowAnswer(index)} 
                                  key={dataItem.id}>
                               <div className='flex items-center justify-between p-2'>
                                   <h3 className='text-green-900 font-semibold'>{dataItem.question}</h3>
                                   <span style={{fontSize: '20px'}} onClick={handleToggle}>
                                   {selected.indexOf(dataItem.id) !== - 1 ? <IoIosArrowUp/> :   <IoIosArrowDown/> }</span>
                              </div>
                                 {selected.indexOf(dataItem.id) !== - 1 && <div className='text-center p-4 max-w-lg'>{dataItem.answer}</div>}
                           </div>
                        ))
                        : null
                     }
                     </div>
                 </div>
              <div className='w-[570px]  relative p-6'>
                     <img src="./images/tade.jpg" alt="on site" className='object-cover h-full w-full rounded-sm' />
              </div>
          </div>
        </div>
        </>
     )
}

export default OrderingInfo;
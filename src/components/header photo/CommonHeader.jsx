
import './style.css';
function CommonHeader(){

    return(
           <div className="relative h-[300px]">
              <div className="flex h-[300px] headerPhoto ">
                 <img src="./images/aboutHeader.jpg" alt="" className=" object-cover h-[300px] w-full"/>
              </div>
             <div className="rgb-black"></div>
        </div>        
    )
}

export default CommonHeader;
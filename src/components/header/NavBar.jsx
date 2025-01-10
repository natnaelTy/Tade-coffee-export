import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './index.css';
import { HiMenuAlt3 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";
import { animate, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function NavBar(){

    const [navbar, setNavBar] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const menuVar = {
        initial:{
            scaleY: 0,
        },
        animate:{
            scaleY: 1,
            transition:{
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0]
            }
        },
        exit:{
            scaleY: 0,
            transition:{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    function NavLinks(){
        return(
            <>
             <NavLink to={'/'}><li className="hover:text-green-700">Home</li></NavLink>
             <NavLink to={'/aboutUs'}><li className="hover:text-green-700">About</li></NavLink>
             <NavLink to={'/ordering-info'}><li className="hover:text-green-700">Info (FQA)</li></NavLink>
             <NavLink to={'/contact'}><li className="hover:text-green-700">Contact</li></NavLink>
            </>
        )
    }
    useEffect(() => {
      function changeHeader(){
        if(window.scrollY >= 70){
            setNavBar(true);
        }
        else{
            setNavBar(false);
        }
      };
      window.addEventListener('scroll', changeHeader);
      return() => {
        window.removeEventListener('scroll', changeHeader);
      }
    },[])

    function hanldeShowMenu(){
        setShowMenu(!showMenu);
    }

    return(
        <div>
            <nav className={ navbar ? 'navbar active' : 'navbar'}>
              <NavLink to={'/'}>
                <div className="flex items-center justify-center gap-1">
                    <div className="logo relative w-[65px] p-2 h-[65px]">
                       <img src="./images/coffeelogo.png" alt=""  className="w-full object-cover text-black"/>
                     </div>
                     <h1 className="uppercase text-sm lg:text-lg">Tade coffee export</h1>
                </div>
                </NavLink>
                  
                 <ul className="hidden md:flex gap-5 text-sm uppercase">
                      <NavLinks/>
                 </ul>
                 {
                    <button className="md:hidden p-3" style={{fontSize: '30px'}} onClick={hanldeShowMenu}>{showMenu ? <div><LiaTimesSolid/></div>  : <div><HiMenuAlt3/></div>}</button>
                 }  
            </nav>
              <AnimatePresence>
                 {showMenu && (
                    <motion.div variants={menuVar}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="navDropDown md:hidden origin-top flex basis-full items-start justify-between w-full top-0 bg-[#1c1c1c] text-white z-20 fixed gap-15 p-10 ">
                           <ul onClick={hanldeShowMenu} className="flex flex-col items-start justify-start gap-10 mt-8">
                             <NavLinks/>
                          </ul>         
                    </motion.div>
                 )}
             </AnimatePresence>
        </div>
    )
}

export default NavBar;
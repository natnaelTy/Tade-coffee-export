import { Link } from "react-router-dom"
import './style.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function Footer(){

    return(
        <div className="coffee-map relative">
            <div className="pt-10 px-4 md:px-10 lg:px-16 w-full overflow-hidden">
            <div className="mx-auto flex flex-col justify-between md:flex-row p-2 gap-10 text-white">
                <div className="flex items-start flex-col justify-start">
                     <div className="relative w-full  flex items-center justify-start p-2">
                       <img src="./images/coffeelogo.png" alt=""  className="w-[70px] object-cover mb-6"/>
                       <h1 className="text-lg uppercase font-medium">Tade coffee export</h1>
                     </div>
                     <p>Speciality coffee from the land <br /> of origin.</p>
                </div>
             
                <div>
                    <p className="text-xl md:text-3xl font-medium mb-8">Usefull Links</p>
                    <ul className="flex flex-col gap-4 items-start">
                        <button><Link to={'/'}>Home</Link></button>
                        <button><Link to={'/aboutUs'}>About</Link></button>
                        <a href="">What we offer</a>
                        <button><Link to={'/ordering-info'}>Info (FAQ)</Link></button>
                        <button><Link to={'/contact'}>Contact</Link></button>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl md:text-3xl font-medium mb-8">Socials</h1>
                    <ul className="flex flex-col gap-8 text-2xl hover:border-b-0">
                        <li className="hover:text-blue-700"><a href="https://www.facebook.com/tadesse.degife.1?mibextid=ZbWKwLhttps://www.facebook.com/tadesse.degife.1?mibextid=ZbWKwL"><FaFacebook/></a></li>
                        <li className="hover:text-green-500"><a href=""><IoLogoWhatsapp/></a></li>
                        <li className="hover:text-pink-700 "><a href=""><FaInstagram/></a></li>       
                    </ul>
                </div>
                <div className="flex flex-col gap-8 mb-6">
                    <h1 className="text-xl md:text-3xl font-medium">Contact us</h1>
                    <div className="flex gap-4 items-center justify-start">
                        <MdLocalPhone className="text-2xl"/>
                        <p>+251 911828573</p>
                    </div>
                    <div className="flex gap-4 items-center justify-start">
                        <MdLocalPhone className="text-2xl"/>
                        <p>+251 913291960</p>
                    </div>
                    <div className="flex gap-4 items-center justify-start">
                        <MdOutlineMail className="text-2xl"/>
                        <p className="text-sm md:text-base">tadesedegifecoffeenensebo@gmail.com</p>
                    </div>
                    <div className="flex gap-4 items-center justify-start">
                        <IoLocationSharp className="text-2xl"/>
                        <p>Sarbet, Addis Ababa</p>
                    </div>
                  </div>
                  </div>
                        <div className="copyright text-white p-6 py-6 text-sm text-center">Copyright © 2024. All right reserved. Tade Coffee Export</div>
                </div>
              </div>
    )
}

export default Footer;
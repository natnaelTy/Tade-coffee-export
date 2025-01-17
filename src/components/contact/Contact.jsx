import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import './style.css';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import CommonHeader from "../header photo/CommonHeader";

function Contact(){

    const [inputName, setInputName] = useState('');
    const [inputNumber, setInputNumber] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputMessage, setInputMessage] = useState('');

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "80e82641-b0bb-418d-af09-9f2d6e0e41db");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({
            title: "Success!",
            text: "Message was sent seccessfully",
            icon: "success"
          });
          setInputEmail('');
          setInputMessage('');
          setInputName('');
          setInputNumber('');
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
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
               <h2>Contact</h2>
           </div>
        </div>
       </div>

        <div>
             <div>
                <div className="flex flex-col gap-2 mt-20 relative">
                    <h3 className="uppercase text-orange-700 font-medium font-medium text-center">Our Contact</h3>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-green-800 uppercase font-semibold text-center">Get in touch</h1>
                    <h2 className="hidden md:flex contact-text font-bold">CONTACT</h2>
                </div>
    
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-around gap-6 text-center mt-8 p-4">
                     <div className="flex flex-col items-center justify-center">
                        <HiOutlineBuildingOffice2 className="text-2xl md:text-4xl text-black hover:text-green-800"/>
                        <h2 className="text-xl font-medium uppercase text-center">office address</h2>
                        <p className="text-gray-700">Sarbet<br />Addis Ababa, Ethiopia</p>
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <MdOutlineMail className="text-2xl md:text-4xl text-black hover:text-green-800"/>
                        <h2 className="text-xl font-medium uppercase text-center">email address</h2>
                        <p className="text-gray-700">tadesedegifecoffeenensebo@gmail.com</p>
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <FaPhoneAlt className="text-2xl md:text-4xl text-black hover:text-green-800"/>
                        <h2 className="text-xl font-medium uppercase text-center">Phone</h2>
                        <p className="text-gray-700">+251 911828573 <br />+251 913291960</p>
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <MdAccessTime className="text-2xl md:text-4xl text-black hover:text-green-800"/>
                        <h2 className="text-xl font-medium uppercase text-center">working hours</h2>
                        <p className="text-gray-700">Mon - Fri 8:30 AM - 5:00 PM <br />  Saturday 8:30 AM - 12:00 PM</p>
                       
                     </div>
                  </div>
             </div>

             <div className="flex items-center justify-center p-4 flex-col lg:flex-row bg-yellow-100 mt-10 pb-14">
                <div className="p-4 flex flex-col items-center justify-center bg-white shadow-xl gap-3 rounded-sm max-w-4xl mt-8">
                    <h1 className="uppercase text-2xl md:text-3xl lg:text-4xl text-green-800 font-semibold text-center">send us a message! </h1>
                    <p className="text-xs md:text-sm mb-2 text-center font-medium">Need a sample? Have a question? <br />Or do you just wanna talk?</p>
                    <form onSubmit={onSubmit}>
                        <div className="flex items-center flex-col md:flex-row justify-center gap-4">
                            <input type="text" 
                                   placeholder="Enter your full name"
                                   onChange={(e) => setInputName(e.target.value)}
                                   value={inputName} 
                                   name="name"
                                   className="p-2 rounded-sm" required/>
                            <input type="text" 
                                   placeholder="Enter Your phone number"
                                   onChange={(e) => setInputNumber(e.target.value)}
                                   value={inputNumber} 
                                   className="p-2 rounded-sm" name="phone"required/>
                        </div>
                        <div className="flex flex-col gap-5">
                        <input type="text" 
                               placeholder="Enter your email address"
                               onChange={(e) => setInputEmail(e.target.value)}
                               value={inputEmail}
                               className="p-2 rounded-sm mt-3" required
                               name="email address"/>
                         <textarea name="message" 
                                  placeholder="Enter message" 
                                  onChange={(e) => setInputMessage(e.target.value)}
                                  value={inputMessage}
                                  required
                                  className="h-32 p-2 resize-none rounded-sm">
                          </textarea> 
                          <button type="submit" className="bg-green-800 hover:bg-green-900 px-4 py-4 text-white font-semibold rounded-md ">Send</button>
                        </div>
                    </form>
                </div>
             </div>
        
             
          </div>
     </>
    )
}

export default Contact;
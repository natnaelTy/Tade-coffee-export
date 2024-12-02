import { useState } from "react";
import HeaderPhoto from "../header/HeaderPhoto";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import './style.css';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

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
  
      formData.append("access_key", "45f546c7-6041-46d0-ad23-7d9bc6b5b14a");
  
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
        <HeaderPhoto/>
      <div className="center-container flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase shadow-lg">
             contact
             </h1>
         <div className="flex gap-4 items-center justify-center mt-4">
            <Link className="text-white text-lg md:text-lg hover:text-green-800" to={"/"}>
              Home
            </Link>
              <i className=" text-white text-lg md:text-lg fa-solid fa-chevron-right"></i>
              <h2 className="text-white text-lg md:text-lg">Contact</h2>
          </div>
      </div>

        {/* contact info */}
        <div>
             <div>
                <div className="flex flex-col gap-2 mt-20 relative">
                    <h3 className="uppercase text-orange-700 font-medium text-center">Our Contact</h3>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-green-800 uppercase font-semibold text-center">Get in touch</h1>
                    <h2 className="hidden md:flex contact-text font-bold">CONTACT</h2>
                </div>
    
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-around gap-6 text-center mt-8 p-5">
                     <div className="flex flex-col items-center justify-center">
                        <HiOutlineBuildingOffice2 className="text-2xl md:text-4xl text-black hover:text-green-800"/>
                        <h2 className="text-xl font-medium uppercase text-center">office address</h2>
                        <p className="text-gray-700">Semit, Keker Building 3th Floor, <br />Addis Ababa, Ethiopia</p>
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <MdOutlineMail className="text-2xl md:text-4xl text-black hover:text-green-800"/>
                        <h2 className="text-xl font-medium uppercase text-center">email address</h2>
                        <p className="text-gray-700">infotade@gmail.com</p>
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <FaPhoneAlt className="text-2xl md:text-4xl text-black hover:text-green-800"/>
                        <h2 className="text-xl font-medium uppercase text-center">Phone</h2>
                        <p className="text-gray-700">+251 9754368854 <br />+251 9357881785</p>
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <MdAccessTime className="text-2xl md:text-4xl text-black hover:text-green-800"/>
                        <h2 className="text-xl font-medium uppercase text-center">working hours</h2>
                        <p className="text-gray-700">Mon - Fri 8:30 AM - 5:00 PM <br />  Saturday 8:30 AM - 12:00 PM</p>
                       
                     </div>
                  </div>
             </div>

              {/* contact form */}
             <div className="flex items-center justify-center p-6 bg-yellow-100 mt-10">
                <div className="p-6 flex flex-col items-center justify-center bg-white shadow-xl gap-3 rounded-sm w-full max-w-4xl mt-8 ">
                    <h1 className="uppercase text-2xl md:text-3xl lg:text-4xl text-green-800 font-semibold text-center">send us a message! </h1>
                    <p className="text-xs md:text-sm mb-2 text-center font-medium">Need a sample? Have a question? <br />Or do you just wanna talk?</p>
                    <form onSubmit={onSubmit} className="w-full max-w-3xl">
                        <div className="flex items-start flex-col md:flex-row justify-start gap-4">
                            <input type="text" 
                                   placeholder="Enter your full name"
                                   onChange={(e) => setInputName(e.target.value)}
                                   value={inputName} 
                                   name="name"
                                   className="p-3 rounded-sm w-full max-w-[400px]" required/>
                            <input type="text"
                                   placeholder="Enter Your phone number"
                                   onChange={(e) => setInputNumber(e.target.value)}
                                   value={inputNumber} 
                                   className="p-3 rounded-sm w-full max-w-[400px]"
                                   name="phone" 
                                   required/>
                        </div>
                        <div className="flex flex-col gap-5">
                        <input type="text" 
                               placeholder="Enter your email address"
                               onChange={(e) => setInputEmail(e.target.value)}
                               value={inputEmail}
                               className="p-3 rounded-sm mt-3" required
                               name="email address"/>
                         <textarea name="message" 
                                  placeholder="Enter message" 
                                  onChange={(e) => setInputMessage(e.target.value)}
                                  value={inputMessage}
                                  required
                                  className="h-32 p-3 resize-none rounded-sm">
                          </textarea> 
                          <button type="submit" className="bg-green-800 hover:bg-black px-4 py-4 text-white font-semibold rounded-md ">Send</button>
                        </div>
                    </form>
                </div>
             </div>
             
             <div>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.840041773153!2d38.48076207499745!3d7.028080392973706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b1452f26cf3247%3A0xff58001f612e485f!2sNext%20pictures!5e0!3m2!1sen!2set!4v1731831483560!5m2!1sen!2set" width="100%" height="350" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
             </div>
          </div>
     </>
    )
}

export default Contact;
import { Link } from "react-router-dom";
import './index.css';
import HeaderPhoto from "./HeaderPhoto";
function Header() {



  return (
    <>
     <HeaderPhoto/>
      <div className="center-container flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-3xl lg:text-4xl text-white font-semibold uppercase shadow-lg">
          about us
        </h1>
        <div className="flex gap-4 items-center justify-center mt-3">
          <Link className="text-white text-lg hover:text-green-800" to={"/"}>
            Home
          </Link>
          <i className=" text-white text-lg fa-solid fa-chevron-right"></i>
          <h2 className="text-white text-lg"> About</h2>
        </div>
      </div>
   
      </>
  );
}

export default Header;

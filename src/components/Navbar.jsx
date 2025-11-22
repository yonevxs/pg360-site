import {Link} from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

function Navbar(){
    return(
        <nav className="bg-[#1D91CE] p-4 flex shadow-lg w-full items-center relative">
          
          <svg 
              width="36" 
              height="32" 
              viewBox="0 0 31 28" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 mt-[-7px]"
            >
              <path d="M6.87445 24.1265L4.87474 24.0924C4.32253 24.0829 3.86724 24.5229 3.8578 25.0751C3.84837 25.6273 3.39307 26.0673 2.84087 26.0579L0.341232 26.0152" stroke="#FFB703" strokeOpacity="0.91" strokeWidth="2"/>
              <path d="M29.341 6.54573L29.372 4.54597C29.3806 3.99375 28.9398 3.53915 28.3876 3.53059C27.8354 3.52202 27.3947 3.06742 27.4032 2.5152L27.442 0.0155029" stroke="#FFB703" strokeOpacity="0.91" strokeWidth="2"/>
              <path d="M12.6234 10.1607L11.0829 8.88525C10.6575 8.53305 10.0271 8.59239 9.67489 9.0178C9.32268 9.4432 8.6923 9.50254 8.2669 9.15034L6.34123 7.55603" stroke="#FFB703" strokeOpacity="0.91" strokeWidth="2"/>
              <path d="M7.13356 17.2335L5.2536 16.551C4.73447 16.3626 4.16085 16.6307 3.97239 17.1498C3.78393 17.6689 3.21031 17.937 2.69118 17.7485L0.341232 16.8954" stroke="#FFB703" strokeOpacity="0.91" strokeWidth="2"/>
              <path d="M19.8938 6.91032L19.0511 5.09653C18.8184 4.59566 18.2237 4.37828 17.7229 4.61099C17.222 4.8437 16.6273 4.62632 16.3946 4.12545L15.3412 1.85822" stroke="#FFB703" strokeOpacity="0.91" strokeWidth="2"/>
              <path d="M29.9304 26.6047H8.74864C8.52364 26.6047 8.34123 26.4223 8.34123 26.1973V24.5506L8.34124 22.9074V21.4162C8.34124 20.2251 8.50594 19.0396 8.83066 17.8936C9.04712 17.1297 9.33355 16.3873 9.68629 15.6759L10.3783 14.2804C11.4492 12.6606 12.8918 11.3204 14.5858 10.3714L15.6746 9.76145C18.3704 8.67413 21.2332 8.04238 24.1399 8.01923C27.0524 7.99603 30.3412 8.0712 30.3412 8.52902V9.35064V15.102V27.0155C30.3412 26.7886 30.1573 26.6047 29.9304 26.6047Z" fill="#FFB703" stroke="#FFA303" strokeOpacity="0.91"/>
            </svg>

      <div>
        <Link to='/' className="font-outfit text-[#FFB703] text-2xl font-bold tracking-wider font-[500] ml-2">PG-360</Link>
      </div>

      <div className="flex-1 flex space-x-8 items-center justify-center">
        <Link to="/eventos" className="text-white text-lg hover:text-pg-blue-light transition-colors duration-200 font-poppins font-bold">Eventos</Link>
        <Link to="/atracoes" className="text-white text-lg hover:text-pg-blue-light transition-colors duration-200 font-poppins font-bold">Atrações & Passeios</Link>
        <Link to="/agendacultural" className="text-white text-lg hover:text-pg-blue-light transition-colors duration-200 font-poppins font-bold">Agenda Cultural</Link>
      </div>

      <div className="flex items-center space-x-4">
        <FaUserCircle className="text-white text-3xl"/>
        
        <button className="bg-[#FFA303] text-white px-5 py-2 rounded-md font-semibold transition delay-150 duration-300 ease-in-out hover:bg-[#FFB703]">
          Entrar
        </button>
      </div>

      <div className="absolute bottom-2 left-0 right-0 h-1 bg-[#8ECAE6]"></div>
      <div className="absolute bottom-1 left-0 right-0 h-1 bg-[#219EBC]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#EFD288]"></div>
    
    </nav>
    )
}

export default Navbar
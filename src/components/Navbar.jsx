import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav className="bg-[#1D91CE] p-4 flex shadow-lg w-full items-center relative">
      
      <div>
        <Link to='/' className="font-outfit text-[#FFB703] text-2xl font-bold tracking-wider font-[500]">PG-360</Link>
      </div>

      <div className="flex-1 flex space-x-8 items-center justify-center">
        <Link to="/eventos" className="text-white text-lg hover:text-pg-blue-light transition-colors duration-200 font-poppins font-bold">Eventos</Link>
        <Link to="/atracoes" className="text-white text-lg hover:text-pg-blue-light transition-colors duration-200 font-poppins font-bold">Atrações & Passeios</Link>
        <a href="#" className="text-white text-lg hover:text-pg-blue-light transition-colors duration-200 font-poppins font-bold">Serviços</a>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-white text-3xl">👤</span> 
        
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
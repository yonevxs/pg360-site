// Importe os ícones que você precisa, por exemplo:
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    // Removi a <div> externa desnecessária
    <footer className="bg-slate-900 text-gray-300 p-10 md:p-12">
      
      {/* Container Principal */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        
        {/* Coluna 1: Logo, Contato e Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-white">PG-360</h3>
          <p className="text-sm text-gray-400">Seu guia completo para a Orla de Praia Grande.</p>
          <p className="text-sm text-gray-400">Email: contato@pg360.com</p>
          
          {/* Formulário de Newsletter */}
          <form className="flex mt-4 max-w-sm">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              className="flex-grow p-2 rounded-l-md border-2 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit"
              className="p-2 px-4 bg-blue-600 text-white rounded-r-md font-semibold hover:bg-blue-700 transition-colors"
            >
              Assinar
            </button>
          </form>
        </div>

        {/* Coluna 2: Navegação */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Explorar</h4>
          <ul className="space-y-2">
            <li><a href="eventos" className="text-sm hover:text-white hover:underline transition-colors">Eventos</a></li>
            <li><a href="atracoes" className="text-sm hover:text-white hover:underline transition-colors">Atrações & Passeios</a></li>
            <li><a href="agendacultural" className="text-sm hover:text-white hover:underline transition-colors">Agenda Cultural</a></li>
            <li><a href="#" className="text-sm hover:text-white hover:underline transition-colors">Serviços</a></li>
          </ul>
        </div>
        
        {/* Coluna 3: Institucional e Redes Sociais */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Institucional</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:text-white hover:underline transition-colors">Sobre Nós</a></li>
            <li><a href="#" className="text-sm hover:text-white hover:underline transition-colors">FAQ/Ajuda</a></li>
            <li><a href="#" className="text-sm hover:text-white hover:underline transition-colors">Política de Privacidade</a></li>
          </ul>

          {/* Ícones de Redes Sociais */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white text-xl transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>
        
      </div>

      {/* Seção de Direitos Autorais */}
      <div className="max-w-6xl mx-auto border-t border-gray-700 pt-6 mt-10 text-center">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} PG-360. Todos os direitos reservados.</p>
      </div>
      
    </footer>
  );
}

export default Footer;
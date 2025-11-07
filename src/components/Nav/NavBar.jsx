function NavBar() {
    return (
        <div className='w-full'> 
            
            <header className='bg-blue-400 shadow-lg'> 
                
              
                <nav className='max-w-5xl flex justify-between itens-center px-4 py-4'>
                    
                    <div className="">
                        <img src="" alt="" />
                    </div>

                    <ul className='flex justify-between itens-center space-x-3 text-white font-medium'>
            
                        <li className='hover:text-blue-900 transition duration-150 cursor-pointer'>
                            Eventos
                        </li>
                        <li className='hover:text-blue-900 transition duration-150 cursor-pointer'>
                            Atrações & Passeios
                        </li>
                        <li className='hover:text-blue-900 transition duration-150 cursor-pointer'>
                            Serviços
                        </li>
                    </ul>
                </nav>
            </header>     
        </div>
    );
}

export default NavBar;
function Footer(){
    return(

        <div>
        <footer>
            
            {/* Container Principal */}
            <div>
                
                {/* Coluna 1: Logo e Contato */}
                <div>
                    <h3>PG-360</h3>
                    <p>Seu guia completo para a Orla de Praia Grande.</p>
                    <p>Email: contato@pg360.com</p>
                    
                    {/* Formulário de Newsletter */}
                    <form>
                        <input type="email" placeholder="Seu e-mail" />
                        <button type="submit">Assinar</button>
                    </form>
                </div>

                {/* Coluna 2: Navegação */}
                <div>
                    <h4>Explorar</h4>
                    <ul>
                        <li><a href="#">Eventos</a></li>
                        <li><a href="#">Atrações & Passeios</a></li>
                        <li><a href="#">Serviços</a></li>
                    </ul>
                </div>
                
                {/* Coluna 3: Institucional e Redes Sociais */}
                <div>
                    <h4>Institucional</h4>
                    <ul>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">FAQ/Ajuda</a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                    </ul>

                    {/* Ícones de Redes Sociais */}
                    <div>
                        <a href="#">
                            {/* Ícone de Exemplo: Facebook */}
                            <i className="fab fa-facebook-f"></i> 
                        </a>
                        <a href="#">
                            {/* Ícone de Exemplo: Instagram */}
                            <i className="fab fa-instagram"></i> 
                        </a>
                        <a href="#">
                            {/* Ícone de Exemplo: YouTube */}
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
                
            </div>

            {/* Seção de Direitos Autorais */}
            <div>
                <p>© {new Date().getFullYear()} PG-360. Todos os direitos reservados.</p>
            </div>
            
        </footer>
        </div>
    )
}
export default Footer


const Footer = () => {

    return (

        <div className="text-sm pl-2 min-w-full bg-pretoProjeto lg:h-28 flex flex-col lg:flex-row justify-around text-brancoProjeto">
            
            <div>
            <p className=" pt-10  ">© 2025 Locare Vehiculum | Todos os direitos reservados.</p>
            <p>Desenvolvido por ©  Well Develloper Group.</p>
            </div>
            
             <div className="pt-5 pb-5">
                <ul>
                    <li><a href="#" className="hover:text-amareloProjeto">Perguntas frequentes</a></li>
                    <li><a href="#" className="hover:text-amareloProjeto">Contrato de aluguel</a></li>
                    <li><a href="#" className="hover:text-amareloProjeto">Contato</a></li>
                </ul>
            </div>
        </div>

    )};


    export default Footer
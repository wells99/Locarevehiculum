import Logo from "../assets/LogoLocare-TEXTO.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";


const Navbar = ()=> {
    
    const [mobileDrawerOpen,setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-black min-w-[230px]">
                <div className="container px-4 mx-auto relative text-sm text-white">
                   <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img 
                        src={Logo} 
                        alt="Logo"
                        className="h-10 w-84 mr-2"  />
                    </div>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Entrar
                        </a>

                        <a href="#" 
                        className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                            Criar conta
                        </a>
                    </div>
                    <div className="lg:hidden flex flex-col justify-end">
                        <button onClick={toggleNavbar}> 
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                   </div>
                   {mobileDrawerOpen && (
                        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                            <div className="flex flex-col text-center ">
                                <a href="#" className="py-2 px-3 border rounded-md">
                                    Entrar
                                </a>
                                <a href="#" className="py-2 px-3 mt-5 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                                    Criar conta
                                </a>
                            </div>
                        </div>
                   )}
                </div>
        </nav>
    )
}

export default Navbar
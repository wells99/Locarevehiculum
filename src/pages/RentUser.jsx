import { useState,useRef } from "react";
import {FaUser, FaLock,FaHome,FaPhone, FaMapMarkerAlt, FaCar} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import "./Login.css";

import Api from "../services/api";
import { TbBrandCashapp } from "react-icons/tb";
import { MdOutlineWatchLater } from "react-icons/md";



const RentUser = () => {
  const [username, setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [phone,setPhone] = useState("");
  const [cpf,setCpf] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault();
    createUsers()
  };

  const navigate = useNavigate();

  console.log(tittle);
  
  const [users, setUsers] = useState([])

    let inputName = useRef()
    let inputEmail = useRef()
    let inputCpf = useRef()
    let inputEndereco = useRef()
    let inputTelefone = useRef()

     function createUsers() {
      let meuForm = {
        nomecadastrado:`${tittle}`,
        emailCadastrado:inputEmail.current.value,
        cpfCadastrado:inputCpf.current.value,
        enderecoCadastrado:inputEndereco.current.value,
        telefoneCadastrado:inputTelefone.current.value
      }

        // Limpa os campos de input
      inputName.current.value = `${meuForm.nomecadastrado}`;
      inputEmail.current.value = '';
      inputCpf.current.value = '';
      inputEndereco.current.value = '';
      inputTelefone.current.value = '';


    }

  return (
    <div id="Appdiv" className="flex lg:flex-row flex-col gap-4 min-h-fit min-w-fit ">
        <div className="containerLogin">
          <form onSubmit={handleSubmit}>

            <h1>Cliente</h1>

            <div className="input-field">
                <FaUser className="icon" />
              <input ref={inputName} type="text" placeholder='Qual o seu Nome ?'
              onChange={(e) => setUsername(e.target.value)} required/>
            </div>

            <div className="input-field">
                <MdEmail className="icon" />
              <input ref={inputEmail} type="email" placeholder='seu@email.com'
              onChange={(e) => setEmail(e.target.value)} required/>
            </div>
           
            <div className="input-field">
                <FaLock className="icon" />
              <input ref={inputCpf} type="text" placeholder='Seu CPF'
              onChange={(e) => setCpf(e.target.value)} required/>
            </div>

            <div className="input-field">
                <FaHome className="icon" />
              <input ref={inputEndereco} type="text" placeholder='Seu endereço'
              onChange={(e) => setAddress(e.target.value)} />
            </div>

            <div className="input-field">
                <FaPhone className="icon" />
              <input ref={inputTelefone} type="text" placeholder='Telefone para contato'
              onChange={(e) => setPhone(e.target.value)} required/>
            </div>

            <div className="recall-forget">
              
            </div>

            <div className="signup-link">
            </div>

          </form>
        </div>
        <div className="containerLogin">
          <form onSubmit={handleSubmit}>

            <h1>Seu aluguel</h1>

            <div className="input-field">
                <FaCar className="icon" />
              <input ref={inputName} type="text" placeholder='Veículo'
              onChange={(e) => setUsername(e.target.value)} required/>
            </div>

            <div className="input-field">
                <MdOutlineWatchLater className="icon" />
              <input ref={inputEmail} type="text" placeholder='Data de inicio'
              onChange={(e) => setEmail(e.target.value)} required/>
            </div>
           
            <div className="input-field">
                <MdOutlineWatchLater className="icon" />
              <input ref={inputCpf} type="text" placeholder='Data de Entrega'
              onChange={(e) => setCpf(e.target.value)} required/>
            </div>

            <div className="input-field">
                <TbBrandCashapp className="icon" />
              <input ref={inputEndereco} type="text" placeholder='Valor'
              onChange={(e) => setAddress(e.target.value)} />
            </div>

            <div className="input-field">
                <FaMapMarkerAlt className="icon" />
              <input ref={inputTelefone} type="text" placeholder='Local de entrega'
              onChange={(e) => setPhone(e.target.value)} required/>
            </div>

            <div className="recall-forget">
              
            </div>

            <div className="signup-link">
            </div>

          </form>
        </div>
    </div>
  )
}

export default RentUser
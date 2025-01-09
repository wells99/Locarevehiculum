import { useState,useRef } from "react";
import {FaUser, FaLock,FaHome,FaPhone} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Api from "../services/api";


const CadastroUser = () => {
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

  function onSeeDetailsClick() {
    navigate(`/UserInfo`)
  }

  const [users, setUsers] = useState([])

    let inputName = useRef()
    let inputEmail = useRef()
    let inputCpf = useRef()
    let inputEndereco = useRef()
    let inputTelefone = useRef()

    async function createUsers() {
      let meuForm = {
        nomecadastrado:inputName.current.value,
        emailCadastrado:inputEmail.current.value,
        cpfCadastrado:inputCpf.current.value,
        enderecoCadastrado:inputEndereco.current.value,
        telefoneCadastrado:inputTelefone.current.value
      }

      await Api.post("/usuarios", {
        name:meuForm.nomecadastrado,
        email:meuForm.emailCadastrado,
        cpf:meuForm.cpfCadastrado,
        adressname:meuForm.enderecoCadastrado,
        phone:meuForm.telefoneCadastrado
      });

      alert("Cadastrado")
        // Limpa os campos de input
      inputName.current.value = '';
      inputEmail.current.value = '';
      inputCpf.current.value = '';
      inputEndereco.current.value = '';
      inputTelefone.current.value = '';


    }

  return (
    <div id="Appdiv">
        <div className="containerLogin">
          <form onSubmit={handleSubmit}>

            <h1>Cadastre-se</h1>

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
            <button>Cadastrar</button>

            <div className="signup-link">
              <p>Já tem uma conta? <span 
              onClick={onSeeDetailsClick}
              className="text-brancoProjeto
               hover:cursor-pointer hover:text-amareloProjeto transition duration-200" >Login</span></p>
            </div>

          </form>
        </div>
    </div>
  )
}

export default CadastroUser
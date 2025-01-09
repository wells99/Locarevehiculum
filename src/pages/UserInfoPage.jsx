import { useState, useRef } from "react";
import {FaUser, FaLock} from "react-icons/fa";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Api from "../services/api";

const UserInfoPage = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  let inputEmail = useRef()
  let inputCpf = useRef()

  let [users, setUsers] = useState([])

  const handleSendParams = () => {
    navigate("/Aluguel?tittle=Aluguel&user=JohnDoe");
  };

  async function getUsers() {
    let usersFromApi = await Api.get("/usuarios")
    setUsers(usersFromApi.data)
 
    console.log(users);


    // Verificar se o email existe
    const emailExists = users.some(user => user.email == inputEmail.current.value);
    if (emailExists) {
      console.log("eMAIL: ok");
      //Verificar se a senha existe
      const senhaExists = users.some(user => user.cpf == inputCpf.current.value);
      if (senhaExists) {
        alert("Bem Vindo(a)!");
        handleSendParams() // Redirecionar para rota correta
      } else {
        alert("Senha incorreta")
        
      }
      
    } else {
      alert("Email incorreto");
      
    }
    
 

    
   }

  const handleSubmit = (event) =>{
    event.preventDefault();
   
    getUsers()
    
  };

  const navigate = useNavigate();

  function onSeeDetailsClick() {
    navigate(`/Cadastro`)
  }

  function clienteLogado() {
    navigate(`/Aluguel`)
  }

  const showAlert = () => {
    alert("A senha é seu cpf. Se ainda não conseguir acessar: entrar em contato com ADM: 0800WELL");
  };

  return (
    <div id="Appdiv">
        <div className="containerLogin">
          <form onSubmit={handleSubmit}>

            <h1>Acesse o sistema</h1>

            <div className="input-field">
                <FaUser className="icon" />
              <input ref={inputEmail} type="email" placeholder='seu@email.com'
              onChange={(e) => setEmail(e.target.value)} required/>
            </div>

            <div className="input-field">
                <FaLock className="icon" />
              <input ref={inputCpf} type="text" placeholder='insira sua senha'
              onChange={(e) => setPassword(e.target.value)} required/>
            </div>

            <div className="recall-forget">
            
              <span 
              onClick={showAlert}
              className="text-brancoProjeto
              hover:cursor-pointer hover:text-amareloProjeto
              transition duration-200 mt-2" >Recuperar senha </span>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
            <p>Não tem uma conta? <span 
              onClick={onSeeDetailsClick}
              className="text-brancoProjeto
               hover:cursor-pointer hover:text-amareloProjeto transition duration-200" >Cadastrar</span></p>
            </div>

          </form>
        </div>
    </div>
  )
}

export default UserInfoPage
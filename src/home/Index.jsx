import { useEffect, useState, useRef } from "react";
import viteLogo from '/vite.svg'
import Trash from "../assets/Trashicon-Red.svg"
import Api from "../services/api";



function Home() {

  const [users, setUsers] = useState([])

  let inputName = useRef()
  let inputEmail = useRef()
  let inputCpf = useRef()
  let inputEndereco = useRef()
  let inputTelefone = useRef()

//getUsers põe na tela os usuarios que vem do Banco de Dados
  async function getUsers() {
   let usersFromApi = await Api.get("/usuarios")
   setUsers(usersFromApi.data)
  }

  //createUsers pega as informações dos inputs e manda para o banco de dados.
  async function createUsers() {

  
    let meuForm = {
      nomecadastrado:inputName.current.value,
      emailCadastrado:inputEmail.current.value,
      cpfCadastrado:inputCpf.current.value,
      enderecoCadastrado:inputEndereco.current.value,
      telefoneCadastrado:inputTelefone.current.value
    }
    
    console.log(meuForm.nomecadastrado);


    await Api.post("/usuarios", {
      name:meuForm.nomecadastrado,
      email:meuForm.emailCadastrado,
      cpf:meuForm.cpfCadastrado,
      adressname:meuForm.enderecoCadastrado,
      phone:meuForm.telefoneCadastrado
    })
 
    getUsers()
    
    console.log(meuForm.nomecadastrado);
    
   }

   async function deletetUsers(id) {
    await Api.delete(`/usuarios/${id}`)
    getUsers()
   }

  useEffect(() => {
    getUsers()
  },[])

  return (
   <div className='container'>
    
      <form>
        <h1>Cadastro de Usuários</h1>
        <input type="text" placeholder='Nome' name='nome' ref={inputName}/>
        <input type="text" placeholder='Cpf' name='cpf'ref={inputCpf}/>
        <input type="email" placeholder='Email' name='email' ref={inputEmail}/>
        <input type="text" placeholder='Rua' name='rua' ref={inputEndereco} />
        <input type="text" placeholder='Telefone' name='telefone' ref={inputTelefone}/>
        <button type="button" onClick={createUsers}>Cadastrar</button>
      </form>



{ users.map((user) => (

      <div key={user.id} className='card'>
        <div>
          <p>Nome: <span>{user.name}</span></p>
          <p>Cpf: <span>{user.cpf}</span></p>
          <p>Email: <span>{user.email}</span></p>
          <p>Endereço: <span>{user.adressname}</span></p>
          <p>Telefone: <span>{user.phone}</span></p>
        </div>
          <button onClick={() => deletetUsers(user.id)}>
            <img src={Trash}/>
          </button>
      </div>
    
  ))}
      
   </div>
  )
}

export default Home

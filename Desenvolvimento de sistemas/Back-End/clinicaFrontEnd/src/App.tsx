import axios from 'axios'
import { use, useState } from 'react'

function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [dataLogin, setDataLogin] = useState(null)
  const [dataCadastro, setDataCadastro] = useState(false)
  const [nome, setNome] = useState("")




  const logar = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        senha
      })
      if (response?.data) {
        setDataLogin(response.data)
      }
    } catch (error) {
      console.log(error)
      alert("Erro ao fazer o login, verifique suas credenciais!")
    }

  }

  const cadastrar = async (e: any) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3000/cadastro", {
        nome,
        email,
        senha
      })
      if (response?.data) {
        setDataCadastro(response.data)
        setNome("")
        setEmail("")
        setSenha("")

      }
    } catch (error) {
      console.log(error);
      alert("Erro ao fazer o cadastro, verifique suas credenciais!")

    }
  }


  return (
    <>
      {dataLogin !== null ? (
        <div className='flex flex-col bg-gray-400 w-full pt-32 items-center h-screen'>
          <h1 className='text-2xl font-semibold text-white'>Seja bem-vindo fulaninho</h1>
          <button className='bg-red-800 px-5 py-2 text-white rounded-2xl' onClick={() => setDataLogin(null)}>Sair</button>
        </div>
      ) : dataCadastro ? (
        < div className='flex flex-col bg-gray-400 w-full justify-center items-center h-screen'>
          <form className='flex  gap-2 w-full flex-col items-center justify-center'>
            <label htmlFor="email">Email</label>

            <input className='cadastro_login' type="email" onChange={(e) => setEmail(e.target.value)} name="email" id="" />

            <label htmlFor="password">Senha</label>

            <input className='cadastro_login' type="password" onChange={(e) => setSenha(e.target.value)} name="password" id="" />
          </form>

            <a href="#" onClick={()=> setDataCadastro(!dataCadastro)}>Possui cadastro?</a>

          <button onClick={logar} className='bg-gray-800 px-5 py-2 text-white rounded-2xl'>Login</button>

        </div >
      ) : (
        <div className='flex flex-col bg-gray-400 w-full justify-center items-center h-screen'>
          <h1 className='text-4xl font-bold text-gray-800 p-5'>Cadastro</h1>
          <form className='flex  gap-2 w-full flex-col items-center justify-center'>
            <label htmlFor="name">Nome</label>
            <input className='cadastro_login' type="text" onChange={(e) => setNome(e.target.value)} name='name' id='' />

            <label htmlFor="email">Email</label>
            <input className='cadastro_login' type="email" onChange={(e) => setEmail(e.target.value)} name='email' id='' />

            <label htmlFor="password">Senha</label>
            <input className='cadastro_login' type="password" onChange={(e) => setSenha(e.target.value)} name='password' id='' />

            <a href="#" onClick={()=> setDataCadastro(!dataCadastro)}>Possui login?</a>

            <button type="submit" onClick={cadastrar} className='bg-gray-800 px-5 py-2 text-white rounded-2xl'>Cadastre-se</button>

          </form>
        </div>
      )
      }

    </>
  )
}

export default App
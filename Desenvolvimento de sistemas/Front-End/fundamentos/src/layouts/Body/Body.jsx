import Card from '../../components/Card/Card'
import style from './Body.module.css'

const Body = () => {

  // Array com nomes diferentes

  const usuarios = [
    { nome: "Ana", idade: "27", cidade: "São jose" },
    { nome: "Bruno", idade: "30", cidade: "Florianópolis" },
    { nome: "joão", idade: "35", cidade: "Palhoça" },
  ]

  return (
    <>
      <main className={style.body}>
        <h2>Usuários cadastrados</h2>
        <div className={style.cardConteiner}>
          {usuarios.map((usuario, index) => (
            <Card
              key={index}
              nome={usuario.nome}
              idade={usuario.idade}
              cidade={usuario.cidade}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default Body
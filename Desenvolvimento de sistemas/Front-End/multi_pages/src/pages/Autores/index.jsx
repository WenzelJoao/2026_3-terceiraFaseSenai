import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

const Authors = () => {

    const [authors, setAuthors] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/authors')
        .then(res => res.json())
        .then(data=> {
            setAuthors(data)
        })
    }, [])

  return (
    <div className='flex gap pt-5'>
        {
            authors.map(autores=>(
                <div key={autores.id} className='card'>
                    <img src={autores.foto} alt={autores.nome} />
                    <h2>{autores.nome}</h2>
                    <p>{autores.descricao}</p>
                    <p>{autores.biografia}</p>
                    <p>{autores.especialidade}</p>
                    <p>{autores.cidade}</p>
                    <Link to={`/autores/${autores.id}`} className='text-white 
                    bg-blue-500 hover:bg-blue-700'>
                        Ver detalhes
                    </Link>
                </div>
            ))
        }
    </div>
  )
}

export default Authors
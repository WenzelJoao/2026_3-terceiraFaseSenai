import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

const AuthorsDetail = () => {
    const { id } = useParams()
    const [autores, setAuthor] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/authors/${id}`)
            .then(res => res.json())
            .then(data => setAuthor(data))
            .catch(err => console.error(err))
    }, [id])

    if (!autores) return <div>Carregando...</div>

    return (
        <div className='p-4'>
            <img src={autores.foto} alt={autores.nome} />
            <h2>{autores.nome}</h2>
            <p>{autores.descricao}</p>
            <p>{autores.biografia}</p>
            <p>{autores.especialidade}</p>
            <p>{autores.cidade}</p>
        </div>
    )
}

export default AuthorsDetail
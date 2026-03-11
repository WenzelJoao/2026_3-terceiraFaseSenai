import React, { useEffect, useState } from 'react'

import styles from './Card.module.css'

const CardApi = () => {


    // const [contador, setContador] = useState(0)
    // const incementaValor = () => {
    //     setContador(prev => prev + 1)
    // }
    // const decrementarValor = () => {
    //     setContador(prev => prev - 1)
    // }

    const [users, setUsers] = useState([])

    const [filtro, setFiltro] = useState('')
    // const [filtroIdade, setFiltro] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                const filtrados = data.filter((user) => {
                    return user.name
                        .toLowerCase()
                        .includes(filtro.toLocaleLowerCase())
                })

                setUsers(filtrados)


            })

    }, [filtro])



    return (
        <>

            <input type="text"
                className={styles.input}
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                placeholder='Filtro por nome'
            />

            <div className={styles.cardConteinerApi}>
                {
                    users.map((user) => (
                        <div className={styles.card} key={user.id}>
                            <h2>{user.name}</h2>-
                            <p>{user.email}</p>
                            <p>{user.address.street}</p>
                            <p>{user.address.geo.lat}</p>
                            <p>{user.address.geo.lng}</p>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default CardApi
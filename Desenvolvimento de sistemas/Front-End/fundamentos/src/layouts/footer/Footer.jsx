import React from 'react'
import styles from './Footer.module.css'



const Footer = () => {
  return (
    <div className={styles.footer}>
        
        <div className={styles.direitos}>
            <p>&copy; 2026 Desenvolvido por João Vitor. Todos os direitos
                reservados.
            </p>
        </div>

        <div className={styles.nav}>
            <a href="Home">Home</a>
            <a href="Sobre">Sobre</a>
            <a href="Contato">Contato</a>
            <a href="Política de Privacidade">política de Privacidade</a>
        </div>
    </div>

  )
}

export default Footer
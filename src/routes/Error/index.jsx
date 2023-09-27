import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

function Error() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Erro 404 - Página não encontrada</h2>
      <p className={styles.message}>
        Você viajou tanto pelo universo dos livros que acabou encontrando o zoro perdido, vamos voltar para nossa livraria e esquecer que viu esse lugar.... <Link to="/" className={styles.link}>página inicial</Link>
      </p>
      <div className={styles.gifContainer}>
        <img
          src="https://uploads.spiritfanfiction.com/historias/capas/202105/zoro-perdido-22307526-160520211642.jpg" 
          alt="Erro 404"
          className={styles.gif}
        />
      </div>
    </div>
  );
}

export default Error;

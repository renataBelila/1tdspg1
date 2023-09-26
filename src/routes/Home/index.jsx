import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import aparelhosData from '../../data/aparelhosData.jsx';

function Home() {
  // IDs dos smartphones que serão destacados
  const destaquesIds = [2, 5];

  // Filtrar os smartphones com base nos IDs de destaque
  const destaques = aparelhosData.filter((smartphone) =>
    destaquesIds.includes(smartphone.id)
  );

  return (
    <div className={styles.container}>
      <div className={styles.featuredProducts}>
        <h2>Livros em Destaque</h2>
        <Link to="/aparelhos" className={styles.viewAllLink}>
          Ver mais
        </Link>
        {destaques.map((destaque) => (
          <div key={destaque.id} className={styles.product}>
            <div className={styles.productInfo}>
              <h3>{destaque.nome}</h3>
              <p>{destaque.descricaoCurta}</p>
              <p className={styles.productPrice}>{destaque.preco}</p>
              <Link to={`/aparelhos/${destaque.id}`} className={styles.detailsButton}>
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

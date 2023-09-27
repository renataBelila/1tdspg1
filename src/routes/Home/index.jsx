import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import aparelhosData, { printAparelho } from '../../data/aparelhosData.jsx';

function Home() {
  const destaquesIds = [2, 5];

  const destaques = aparelhosData.filter((smartphone) =>
    destaquesIds.includes(smartphone.id)
  
  );
  useEffect (()=> {
    printAparelho();
  },[]);

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
              <p> <span className={styles.autors}>Autor:</span> {destaque.autor}</p>
              <p className={styles.productPrice}>{destaque.preco}</p>
              <div className={styles.spacebutton}>
              <Link to={`/aparelhos/${destaque.id}`} className={styles.detailsButton}>
                Ver Detalhes
              </Link>
                <Link to="#" className={styles.detailsButton}>
                  Comprar Agora
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

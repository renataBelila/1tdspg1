import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import aparelhosData from '../../data/aparelhosData.jsx';

function Aparelhos() {
  
  const [aparelhos, setAparelhos] = useState(aparelhosData);

  return (
    <div className={styles.container}>
      <div className={styles.listProducts}>
        <h2>Livros Disponíveis</h2>
        {aparelhos.map((aparelho) => (
          <div key={aparelho.id} className={styles.product}>
            <div className={styles.productInfo}>
              <h3>{aparelho.nome}</h3>
              <p>{aparelho.descricaoCurta}</p>
              <p> <span className={styles.autorstyle}>Autor:</span> {aparelho.autor}</p>
              <p className={styles.productPrice}>{aparelho.preco}</p>
              <Link to={`/aparelhos/${aparelho.id}`} className={styles.detailsButton}>
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aparelhos;

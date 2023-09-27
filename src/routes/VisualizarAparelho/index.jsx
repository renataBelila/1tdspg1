import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import aparelhosData, { printAparelho }from '../../data/aparelhosData.jsx';
import styles from './index.module.css';

function VisualizarAparelho() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Encontra o aparelho pelo ID
  const aparelho = aparelhosData.find((item) => item.id === parseInt(id));

  // Função para lidar com a exclusão do aparelho
  const handleDelete = () => {
    //Remove o aparelho da lista de dados (aparelhosData)
    const index = aparelhosData.findIndex((item) => item.id ===
      aparelho.id);
    if (index !== -1) {
      aparelhosData.splice(index, 1);
      // Navega de volta para a página de aparelhos
      navigate('/aparelhos');
    }
  };

  if (!aparelho) {
    return <p>Livro não encontrado.</p>;
  }

  return (
    <div className={styles.container}>
      <h2>Detalhes de {aparelho.nome}</h2>
      <p className={styles.descricaoExtensa}>{aparelho.descricaoExtensa}</p>
      <p> <span className={styles.autorstyle}>Páginas:</span> {aparelho.paginas}</p>
      <p> <span className={styles.autorstyle}>Autor:</span> {aparelho.autor}</p>
      <p><span className={styles.preco}>Preço:</span> R$ {aparelho.preco}</p>
      <button onClick={handleDelete} className={styles.deleteButton}>
        Excluir Livro
      </button>
      <button onClick={() => navigate(`/aparelhos/${id}/editar`)} className={styles.editButton}>
        Editar Livro
      </button>
      <button onClick={() => navigate('/aparelhos')} className={styles.goBackLink}>
        Voltar para Livraria
      </button>
    </div>
  );
}

export default VisualizarAparelho;

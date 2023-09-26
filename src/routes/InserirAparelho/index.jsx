import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addAparelho } from '../../data/aparelhosData.jsx';
import styles from './index.module.css';

function InserirAparelho() {


    const navigate = useNavigate();

    // Estado para acompanhar os dados do novo aparelho
    const [novoAparelho, setNovoAparelho] = useState({
        nome: '',
        descricaoCurta: '',
        descricaoExtensa: '',
        preco: '',
    });


    // Função para lidar com as alterações nos campos de inserção
    const handleFieldChange = (field, value) => {
        setNovoAparelho({
            ...novoAparelho,
            [field]: value,
        });
    };

    // Função para adicionar o aparelho
    const handleInsert = () => {
        if (novoAparelho) {
            //Salvar no novo aparelho
            addAparelho(novoAparelho);
            // Navega de volta para a página de aparelhos
            navigate('/aparelhos');
        }
    };

    return (
        <div className={styles.container}>
            <h2>Inserir Novo Livro</h2>

            <label htmlFor="nome">Nome:</label>
            <input
                type="text"
                id="nome"
                value={novoAparelho.nome}
                onChange={(e) => handleFieldChange('nome', e.target.value)}
            />
            <label htmlFor="descricaoCurta">Descrição Curta:</label>
            <textarea
                id="descricaoCurta"
                value={novoAparelho.descricaoCurta}
                onChange={(e) => handleFieldChange('descricaoCurta', e.target.value)}
                className={styles.descricaoCurta}
            />
            <label htmlFor="descricaoExtensa">Descrição Extensa:</label>
            <textarea
                id="descricaoExtensa"
                value={novoAparelho.descricaoExtensa}
                onChange={(e) => handleFieldChange('descricaoExtensa', e.target.value)}
                className={styles.descricaoExtensa}
            />
            <label htmlFor="preco">Preço:</label>
            <input
                type="text"
                id="preco"
                value={novoAparelho.preco}
                onChange={(e) => handleFieldChange('preco', e.target.value)}
            />

            <label htmlFor="autor"> Autor:</label>
            <input 
                type="text" 
                id = "autor"
                value={novoAparelho.autor}
                onChange={(e) => handleFieldChange('autor', e.target.value)}
            />

            <label htmlFor="paginas">Páginas:</label>
            <input 
                type="text" 
                id="paginas"
                value={novoAparelho.paginas}
                onChange={(e) => handleFieldChange('paginas', e.target.value)}
            />
            <button onClick={handleInsert} className={styles.insertButton}>Inserir</button>

        </div>
    );

}

export default InserirAparelho;
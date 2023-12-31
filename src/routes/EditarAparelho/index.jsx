import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import aparelhosData, { printAparelho } from "../../data/aparelhosData";
import styles from './index.module.css';

function EditarAparelho() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Encontre o aparelho pelo ID
    const aparelho = aparelhosData.find((item) => item.id === parseInt(id));

    // Estado para acompanhar as edições
    const [editedAparelho, setEditedAparelho] = useState(aparelho);


    // Atualizar o aparelho com as edições
    const updateAparelho = (aparelho) => {
        const index = aparelhosData.findIndex((item) => item.id === aparelho.id);
        aparelhosData[index] = aparelho;
    };



    // Função para lidar com as alterações nos campos de edição
    const handleFieldChange = (field, value) => {
        setEditedAparelho({
            ...editedAparelho,
            [field]: value,
        });
    };

    // Função para salvar as edições
    const handleSave = () => {
        if (editedAparelho) {
            updateAparelho(editedAparelho);
            printAparelho();
            navigate(`/aparelhos/${id}`);
        }
    };

    if (!aparelho) {
        return <p>Livro não encontrado.</p>;
    }


    return (
        <div className={styles.container}>
            <h2>Editar {aparelho.nome}</h2>
            <label htmlFor="nome">Nome:</label>
            <input
                type="text"
                id="nome"
                value={editedAparelho.nome}
                onChange={(e) => handleFieldChange('nome', e.target.value)}
            />
            <label htmlFor="descricaoCurta">Descrição Curta:</label>
            <textarea
                id="descricaoCurta"
                value={editedAparelho.descricaoCurta}
                onChange={(e) => handleFieldChange('descricaoCurta', e.target.value)}
                className={styles.descricaoCurta}
            />
            <label htmlFor="descricaoExtensa">Descrição Extensa:</label>
            <textarea
                id="descricaoExtensa"
                value={editedAparelho.descricaoExtensa}
                onChange={(e) => handleFieldChange('descricaoExtensa', e.target.value)}
                className={styles.descricaoExtensa}
            />
            <label htmlFor="preco">Preço:</label>
            <input
                type="text"
                id="preco"
                value={editedAparelho.preco}
                onChange={(e) => handleFieldChange('preco', e.target.value)}
            />

            <label htmlFor="autor">Autor</label>
            <input 
                type="text" 
                id="autor"
                value={editedAparelho.autor}
                onChange={(e) => handleFieldChange('autor', e.target.value)}
            />

            <label htmlFor="paginas">Páginas:</label>
            <input 
                type="text" 
                id="paginas"
                value={editedAparelho.paginas}
                onChange={(e) => handleFieldChange('paginas', e.target.value)}
            />
            <button onClick={handleSave} className={styles.saveButton}>Salvar</button>
        </div>
    );
}

export default EditarAparelho;
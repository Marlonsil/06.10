import React from 'react'

const Noticia = ({ titulo,imagem,descricao, alt, categorria}) => {
    return(
        <div className='noticia'>
            <img src={imagem} alt={alt} className='noticia-imagem'></img>
            <h2 className='noticia-titulo'>{titulo}</h2>
            <p className='noticia-descricao'>{descricao}</p>
            <p className='noticia-categoria'>{categorria}</p>
        </div>
    );
};

export default Noticia;
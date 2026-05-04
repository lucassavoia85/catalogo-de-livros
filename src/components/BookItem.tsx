import {type  Livro } from '../types/livro.ts';

interface BookItemProps{
    livro:Livro;
    onDelete:(id:string) =>void;
}


const BookItem = ({livro, onDelete}: BookItemProps) => {

    return (
        <li>
            <h3>{livro.titulo}</h3>
            <p>Autor:{livro.autor}</p>
            <p>Ano de Publicação:{livro.anoPublicacao}</p>
            <p>Gênero:{livro.genero}</p>
            <p>Resumo:{livro.resumo}</p>
            <p>Status:{livro.status}</p>
            <button onClick={() => onDelete(livro._id!)}> Excluir</button>
        </li>
    )
};

export default BookItem;
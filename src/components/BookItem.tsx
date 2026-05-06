import {type  Livro } from '../types/livro';
import { deleteLivro } from '../services/api'; 

interface BookItemProps{
    livro:Livro;
    onDelete:(id:string) =>void;
}

const BookItem = ({livro, onDelete}: BookItemProps) => {

    const handleDelete = () => {
        if (window.confirm(`Deseja realmente excluir o livro "${livro.titulo}"?`)) {
            deleteLivro(livro._id!) 
                .then(() => {
                    onDelete(livro._id!);
                })
                .catch(error => console.error("Erro ao excluir:", error));
        }
    };

    return (
        <li className="bg-white  shadow-md p-6 border-gray-200">
            <h3 className= "text-xl font-bold text-gray-800 mb-2">{livro.titulo}</h3>
            <p>Autor:{livro.autor}</p>
            <p>Ano de Publicação:{livro.anoPublicacao}</p>
            <p>Gênero:{livro.genero}</p>
            <p>Resumo:{livro.resumo}</p>
            <p>Status:{livro.status}</p>
            <button onClick={handleDelete}> Excluir</button>
        </li>
    )
};

export default BookItem;
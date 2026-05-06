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
        <li className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-4 flex justify-between items-center">
            <div className= "grid grid-cols-6 gap flex-1 items-center text-sm">
            <h3 className= "text-xl font-bold text-blue-00 mb-2">{livro.titulo}</h3>
            <p><strong>Autor:</strong>{livro.autor}</p>
            <p><strong>Ano de Publicação:</strong>{livro.anoPublicacao}</p>
            <p><strong>Gênero:</strong>{livro.genero}</p>
            <p><strong>Resumo:</strong>{livro.resumo}</p>
            <p><strong>Status:</strong>{livro.status}</p>
            </div>
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors shadow-sm"> Excluir</button>
        </li>
    )
};

export default BookItem;
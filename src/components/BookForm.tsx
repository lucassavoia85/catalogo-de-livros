import { useState } from 'react';
import type { Livro } from '../types/livro';


interface BookFormProps {
  onAdd: (novo: Livro) => Promise<void>;
}

const BookForm = ({ onAdd }: BookFormProps) => {
  const [novoLivro, setNovoLivro] = useState<Livro>({
    titulo: '',
    autor: '',
    anoPublicacao: 0,
    genero: '',
    resumo: '',
    status: 'Não Lido',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await onAdd(novoLivro);

    setNovoLivro({
      titulo: '',
      autor: '',
      anoPublicacao: 0,
      genero: '',
      resumo: '',
      status: 'Não Lido',
    });
  };

  return (
    <form className="flex flex-col gap-4 max-w-md mx-auto bg-white p-6 rounded-lg shadow" onSubmit={handleSubmit}>
      <input className="rounded-lg p-2 border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Título"
        value={novoLivro.titulo}
        onChange={(e) => setNovoLivro({ ...novoLivro, titulo: e.target.value })}
      />
      <input className="rounded-lg p-2 border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Autor"
        value={novoLivro.autor}
        onChange={(e) => setNovoLivro({ ...novoLivro, autor: e.target.value })}
      />
      <input className="rounded-lg p-2 border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="number"
        placeholder="Ano de Publicação"
        value={novoLivro.anoPublicacao === 0 ? '' : novoLivro.anoPublicacao}
        onChange={(e) => setNovoLivro({ ...novoLivro, anoPublicacao: e.target.value === '' ? 0 : Number(e.target.value) })}
      />
      <input className="rounded-lg p-2 border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Gênero"
        value={novoLivro.genero}
        onChange={(e) => setNovoLivro({ ...novoLivro, genero: e.target.value })}
      />
      <input className="rounded-lg p-2 border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Resumo"
        value={novoLivro.resumo}
        onChange={(e) => setNovoLivro({ ...novoLivro, resumo: e.target.value })}
      />
      <select className="rounded-lg p-2 border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={novoLivro.status}
        onChange={(e) => setNovoLivro({ ...novoLivro, status: e.target.value as Livro['status'] })}
      >
        <option value="Não Lido">Não Lido</option>
        <option value="Lido">Lido</option>
      </select>
      <button className="bg-blue-500 text-white py-2  px-4 rounded-lg hover:bg-blue-700 transition-colors" type="submit">Adicionar Livro</button>
    </form>
  );
};

export default BookForm;

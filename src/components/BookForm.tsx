import { useState } from 'react';
import type { Livro } from '../types/livro';

interface BookFormProps {
  onAdd: (livro: Livro) => void;
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(novoLivro);
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={novoLivro.titulo}
        onChange={(e) => setNovoLivro({ ...novoLivro, titulo: e.target.value })}
      />
      <input
        type="text"
        placeholder="Autor"
        value={novoLivro.autor}
        onChange={(e) => setNovoLivro({ ...novoLivro, autor: e.target.value })}
      />
      <input
        type="number"
        placeholder="Ano de Publicação"
        value={novoLivro.anoPublicacao}
        onChange={(e) => setNovoLivro({ ...novoLivro, anoPublicacao: Number(e.target.value) })}
      />
      <input
        type="text"
        placeholder="Gênero"
        value={novoLivro.genero}
        onChange={(e) => setNovoLivro({ ...novoLivro, genero: e.target.value })}
      />
      <input
        type="text"
        placeholder="Resumo"
        value={novoLivro.resumo}
        onChange={(e) => setNovoLivro({ ...novoLivro, resumo: e.target.value })}
      />
      <select
        value={novoLivro.status}
        onChange={(e) => setNovoLivro({ ...novoLivro, status: e.target.value })}
      >
        <option value="Não Lido">Não Lido</option>
        <option value="Lido">Lido</option>
      </select>
      <button type="submit">Adicionar Livro</button>
    </form>
  );
};

export default BookForm;

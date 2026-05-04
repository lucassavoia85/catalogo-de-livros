import { useEffect, useState } from 'react'
import { getLivro, deleteLivro } from './services/api';
import  { type Livro } from './types/livro';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  const [meuLivro, setMeuLivro] = useState<Livro[]>([]);

  const carregarLivro = async () => {
    const dados = await getLivro();
    setMeuLivro(dados);
  };

  const handleDelete = async (id: string) => {
    await deleteLivro(id);
    await carregarLivro();
  };

  const adicionarLivro = async (novo: Livro) => {
    setMeuLivro([...meuLivro, novo]);
  };


  useEffect(() => {
    carregarLivro();
  }, []);

  return (
    <>
      <h1>Catálogo de Livros</h1>

<BookForm onAdd={adicionarLivro} />

      <BookList livros={meuLivro} onDelete={handleDelete} />
      <button onClick={carregarLivro}>Recarregar</button>
    </>
  );
}

export default App

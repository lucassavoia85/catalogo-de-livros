import { useEffect, useState } from 'react'
import { getLivro, deleteLivro, postLivro } from './services/api'; 
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
    try {
      await postLivro(novo);
      await carregarLivro(); 
    } catch (error: any) {
      console.error("Erro completo da API:", error.response?.data);
      let msg = "Erro desconhecido ao adicionar livro.";
      if (error.response) {
        if (error.response.status === 400) {
          msg = `Erro de validação (400): ${JSON.stringify(error.response.data)}`;
        } else if (error.response.status === 404) {
          msg = "Endpoint não encontrado (404). Verifique o nome do recurso no MockAPI.";
        }
      } else if (error.request) {
        msg = "Erro de rede: Não foi possível conectar ao servidor.";
      } else {
        msg = `Erro: ${error.message}`;
      }
      alert(msg);
    }
  };


  useEffect(() => {
    carregarLivro();
  }, []);

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="bg-gray-100 text-4xl font-bold text-center mb-4">Catálogo de Livros</h1>

      <BookForm onAdd={adicionarLivro} />

      <BookList livros={meuLivro} onDelete={handleDelete} />
      </div>
      </div>
    </>
  );
}

export default App

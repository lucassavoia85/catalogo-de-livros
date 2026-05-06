import axios from "axios";
import type { Livro } from "../types/livro";

const api = axios.create({

  baseURL: "https://crudcrud.com/api/47eaffcf2d1e44eba61fd47700d34ffc ",
});

// Função para POST
export const postLivro = async (livro: Omit<Livro, '_id'>) => {
  try {
    const response = await api.post('/livro', livro);
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar livro:", error);
    throw error; // Re-lançar o erro para que o componente possa tratá-lo
  }
};

// Função para DELETE
export const deleteLivro = async (id: string) => {
  try {
    await api.delete(`/livro/${id}`);
  } catch (error) {
    console.error("Erro ao deletar", error);
  }
};

// Função para GET
export const getLivro = async (): Promise<Livro[]> => {
  try {
    const response = await api.get('/livro');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar livros", error);
    return [];
  }
};
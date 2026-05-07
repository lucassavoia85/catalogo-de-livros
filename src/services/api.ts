import axios from "axios";
import type { Livro } from "../types/livro";

const api = axios.create({
  // Deixamos a baseURL no ponto comum
  baseURL: "https://crudcrud.com/api/c4c8fac22d9846db92c21f6f3037108d",
});

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

// Função para POST
export const postLivro = async (livro: Livro) => {
  try {    const response = await api.post('/livro', livro);
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar livro", error);
  }
}; 
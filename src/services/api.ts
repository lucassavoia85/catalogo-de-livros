import axios from "axios";
import type { Livro } from "../types/livro";

const api = axios.create({
  baseURL: "https://69fe05f08c70b15fa3ca1a25.mockapi.io/livros",
});

// Função para DELETE
export const deleteLivro = async (id: string) => {
  await api.delete(`/livros/${id}`);
};

// Função para GET
export const getLivro = async (): Promise<Livro[]> => {
  const response = await api.get('/livros');
  return response.data;
};

// Função para POST
export const postLivro = async (livro: Livro) => {
  const response = await api.post('/livros', livro);
  return response.data;
}; 
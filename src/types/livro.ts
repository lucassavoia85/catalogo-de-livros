export interface Livro {
  _id?: string;
  titulo: string;
  autor: string;
  anoPublicacao: number;
  genero: string;
  resumo: string;
  status: 'Lido' | 'Não Lido';
}
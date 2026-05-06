export interface Livro {
  _id?: string;
  titulo: string;
  autor: string;
  anoPublicacao?: string | number;
  genero: string;
  resumo: string;
  status: 'Lido' | 'Não Lido';
}
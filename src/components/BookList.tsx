import type { Livro } from "../types/livro";
import   BookItem from "./BookItem";

interface BookListProps {
  livros: Livro[];
  onDelete: (id: string) => void;
}

const BookList = ({ livros, onDelete }: BookListProps) => {
  return (
    <ul>
      {livros.map((item) => (
        <BookItem key={item._id}
          livro={item}
          onDelete={onDelete}/>
      ))}
    </ul>
  );
};

export default BookList;
import type { Livro } from "../types/livro";
import   BookItem from "./BookItem";

interface BookListProps {
  livros: Livro[];
  onDelete: (id: string) => void;
}

const BookList = ({ livros, onDelete }: BookListProps) => {
  return (
    <ul className="list-none space y-4 p-4">
      {livros.map((item) => (
        <BookItem key={item.id}
          livro={item}
          onDelete={onDelete}/>
      ))}
    </ul>
  );
};

export default BookList;
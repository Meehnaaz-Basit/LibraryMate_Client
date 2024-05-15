import { useEffect, useState } from "react";
import ThreeCart from "./ThreeCart";
import { Link } from "react-router-dom";

const ThreeBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allBooks")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  console.log(books);
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {books.slice(0, 3).map((book) => (
          <ThreeCart book={book} key={book._id}></ThreeCart>
        ))}
      </div>
      <div>
        <Link to="/allBooks" className="btn">
          View All Books
        </Link>
      </div>
    </div>
  );
};

export default ThreeBooks;

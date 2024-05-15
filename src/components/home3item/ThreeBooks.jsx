import { useEffect, useState } from "react";
import ThreeCart from "./ThreeCart";
import { Link } from "react-router-dom";
import Button from "../sharedItems/Button";

const ThreeBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://library-server-jade.vercel.app/allBooks")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // console.log(books);
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 font-lato">
        {books.slice(0, 3).map((book) => (
          <ThreeCart book={book} key={book._id}></ThreeCart>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/allBooks">
          <Button buttonText="View All Books"></Button>
        </Link>
      </div>
    </div>
  );
};

export default ThreeBooks;

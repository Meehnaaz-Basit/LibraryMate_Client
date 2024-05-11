import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyBook from "./MyBook";

const MyBorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allBorrowers/${user.email}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h2>my borrowed books </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {books.map((book) => (
          <MyBook book={book} key={book._id}></MyBook>
        ))}
      </div>
    </div>
  );
};

export default MyBorrowedBooks;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyBook from "./MyBook";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyBorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const allBorrowers = useLoaderData();

  useEffect(() => {
    // Filter user's crafts when allCrafts or user changes
    if (allBorrowers && user) {
      const filteredBooks = allBorrowers.filter(
        (books) => books.email === user.email
      );
      setBooks(filteredBooks);
    }
  }, [allBorrowers, user]);

  return (
    <div>
      <h2>my borrowed books </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {books.map((book) => (
          <MyBook
            book={book}
            key={book._id}
            books={books}
            setBooks={setBooks}
          ></MyBook>
        ))}
      </div>
    </div>
  );
};

export default MyBorrowedBooks;

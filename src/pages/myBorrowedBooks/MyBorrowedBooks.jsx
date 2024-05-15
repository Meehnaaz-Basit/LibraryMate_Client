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
    <div className="my-6">
      <h2 className="text-center text-teal-600 text-2xl font-bold my-8 font-merriweather capitalize">
        my borrowed books list{" "}
      </h2>
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

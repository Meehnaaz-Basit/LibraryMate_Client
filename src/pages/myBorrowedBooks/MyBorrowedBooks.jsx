import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyBook from "./MyBook";
import { useLoaderData } from "react-router-dom";

const MyBorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const allBorrowers = useLoaderData();

  // useEffect(() => {
  //   fetch(`http://localhost:5000/allBorrowers/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setBooks(data));
  // }, [user?.email]);

  useEffect(() => {
    // Filter user's crafts when allCrafts or user changes
    if (allBorrowers && user) {
      const filteredBooks = allBorrowers.filter(
        (books) => books.email === user.email
      );
      setBooks(filteredBooks);
    }
  }, [allBorrowers, user]);

  // Function to remove book from the list
  // const removeBook = (bookId) => {
  //   setBooks((prevBooks) =>
  //     prevBooks.filter((book) => book.book_id !== bookId)
  //   );
  // };

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

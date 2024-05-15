import { useLoaderData } from "react-router-dom";
import BookCard from "./allbook/BookCard";
import { useState } from "react";
import BookTable from "./allbook/BookTable";

const AllBooks = () => {
  const books = useLoaderData();
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState("card");
  const [serialNumber, setSerialNumber] = useState(1);

  // Function to handle the dropdown menu change
  const handleViewChange = (event) => {
    setView(event.target.value);
  };

  // Function to handle the filter dropdown menu change
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Function to filter books based on quantity
  const getFilteredBooks = () => {
    if (filter === "available") {
      return books.filter((book) => book.quantity > 0);
    }
    return books;
  };

  const filteredBooks = getFilteredBooks();

  return (
    <div className="my-8">
      <div className="font-merriweather lg:text-5xl text-2xl capitalize font-bold text-center my-6 text-teal-600">
        <h2>
          all <span className="text-orange-600">books</span>{" "}
        </h2>
      </div>
      <div className="flex justify-between my-6">
        <div>
          {/* Dropdown menu */}
          <select value={view} onChange={handleViewChange}>
            <option value="card">Card View</option>
            <option value="table">Table View</option>
          </select>
        </div>
        <div>
          {/* dropdown for books quantity more than 0 */}
          <select value={filter} onChange={handleFilterChange}>
            <option value="all">All Books</option>
            <option value="available">Available Books</option>
          </select>
        </div>
      </div>

      {/*  */}
      <div>
        {/* Render books based on selected view */}
        {view === "card" ? (
          // Display books as cards
          <div className="card-view grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {filteredBooks.map((book) => (
              <BookCard book={book} key={book._id}></BookCard>
            ))}
          </div>
        ) : (
          // Display books in a table
          <div className="card-view">
            <div className="overflow-x-auto">
              <table className="table text-center">
                {/* head */}
                <thead>
                  <tr>
                    <th>Sl.</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Rating</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {filteredBooks.map((book, index) => (
                    <BookTable
                      book={book}
                      serialNumber={serialNumber + index}
                      key={book._id}
                    ></BookTable>
                  ))}
                </tbody>
              </table>
            </div>

            {/* {books.map((book) => (
              <BookTable book={book} key={book._id}></BookTable>
            ))} */}
          </div>
        )}
      </div>
      {/*  */}
    </div>
  );
};

export default AllBooks;

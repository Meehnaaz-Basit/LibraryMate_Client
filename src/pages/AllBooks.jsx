import { useLoaderData } from "react-router-dom";
import BookCard from "./allbook/BookCard";
import { useState } from "react";
import BookTable from "./allbook/BookTable";

const AllBooks = () => {
  const books = useLoaderData();

  const [view, setView] = useState("card");
  const [serialNumber, setSerialNumber] = useState(1);

  // Function to handle the dropdown menu change
  const handleViewChange = (event) => {
    setView(event.target.value);
  };

  return (
    <div>
      <div>
        {/* Dropdown menu */}
        <select value={view} onChange={handleViewChange}>
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>
      <h2>all books here</h2>

      {/*  */}
      <div>
        {/* Render books based on selected view */}
        {view === "card" ? (
          // Display books as cards
          <div className="card-view grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {books.map((book) => (
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
                  {books.map((book, index) => (
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

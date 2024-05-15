import { useLoaderData } from "react-router-dom";
import AllBorrowTable from "./AllBorrowTable";
import { useState } from "react";

const AllBorrowers = () => {
  const borrowers = useLoaderData();
  //   const { name, email, date, image, book_id } = borrowers;
  const [serialNumber, setSerialNumber] = useState(1);
  return (
    <div>
      <h2>all borrowers only for librarian</h2>

      {/*  */}
      <div className="card-view">
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead>
              <tr>
                <th>Sl.</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Email</th>
                <th>Borrow Date</th>
                <th>Return Date</th>
                <th>Book Name</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {borrowers.map((borrower, index) => (
                <AllBorrowTable
                  borrower={borrower}
                  key={borrower._id}
                  serialNumber={serialNumber + index}
                ></AllBorrowTable>
              ))}
            </tbody>
          </table>
        </div>

        {/* {books.map((book) => (
              <BookTable book={book} key={book._id}></BookTable>
            ))} */}
      </div>
      {/*  */}
    </div>
  );
};

export default AllBorrowers;

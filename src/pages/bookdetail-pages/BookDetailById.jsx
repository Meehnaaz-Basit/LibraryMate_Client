import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const BookDetailById = () => {
  const { user } = useContext(AuthContext);

  const book = useLoaderData();
  const { _id, book_name, book_image } = book;

  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    if (!user || !user.email) {
      toast.alert("User not logged in or email not available");
      return;
    }

    fetch(`https://library-server-jade.vercel.app/allBorrowers/${user.email}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setBorrowedBooks(data);
      })
      .catch((err) => {
        console.error("Error fetching borrowed books:", err);
      });
  }, [user]);

  const handleCloseModal = (e) => {
    e.preventDefault();
    document.getElementById("my_modal_1").close();
  };

  const handleBorrow = (e) => {
    e.preventDefault();

    const bookId = e.target._id.value;

    const borrowedCount = borrowedBooks.filter(
      (borrowedBook) => borrowedBook.book_id === bookId
    ).length;
    if (borrowedCount >= 1) {
      document.getElementById("my_modal_1").close();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `You cannot borrow as you have already borrowed it twice.`,
      });
      return;
    }
    // Check if the user has already borrowed 3 different books
    if (borrowedBooks.length >= 3) {
      document.getElementById("my_modal_1").close();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have reached the borrowed limitation of 3 books.",
      });
      return;
    }

    // console.log("borrowed submit pressed");
    document.getElementById("my_modal_1").close();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const date = e.target.date.value;
    const image = user.photoURL;
    const book_id = e.target._id.value;
    const book_name = e.target.book_name.value;

    const borrower_info = {
      name,
      email,
      date,
      image,
      book_id,
      book_name,
    };
    // console.log(borrower_info);

    fetch("https://library-server-jade.vercel.app/allBorrowers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(borrower_info),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        // Update borrowedBooks state after successful borrow operation
        setBorrowedBooks([...borrowedBooks, bookId]);

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "The book has been successfully borrowed.",
        });
      })
      .catch((err) => {
        // console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No book Quantity left to be borrowed",
        });
      });
  };

  return (
    <div>
      <h2>detail: {book_name}</h2>
      <div>
        <img className="h-60 object-contain" src={book_image} alt="" />
      </div>
      <div>
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Borrow
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-sm text-center">
              {`Hello! ${user?.displayName} Please fill the form to borrow "${book_name}"`}
            </h3>

            <div className="modal-action justify-center">
              <form onSubmit={handleBorrow}>
                <div className="">
                  <div className="mb-4">
                    <input
                      id="book_name"
                      type="hidden"
                      // placeholder="Enter Book Name"
                      defaultValue={book_name}
                      disabled
                      name="book_name"
                      className="w-full p-3 border-b-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      id="_id"
                      type="hidden"
                      // placeholder="Enter Book Name"
                      defaultValue={_id}
                      disabled
                      name="_id"
                      className="w-full p-3 border-b-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="name" className="text-sm">
                      Borrower Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      // placeholder="Enter Book Name"
                      defaultValue={user?.displayName}
                      disabled
                      name="name"
                      className="w-full p-3 border-b-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="text-sm">
                      Borrower Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      // placeholder="Enter Book Name"
                      defaultValue={user?.email}
                      disabled
                      name="email"
                      className="w-full p-3 border-b-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="date" className="text-sm">
                      Returned Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      className="w-full p-3 border-b-2"
                      required
                    />
                  </div>
                </div>
                <div>
                  <button type="submit">submit</button>
                  <button onClick={handleCloseModal} className="btn">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default BookDetailById;

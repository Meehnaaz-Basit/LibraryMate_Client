// import { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

// import { AuthContext } from "../../provider/AuthProvider";
// import Swal from "sweetalert2";
// import { toast } from "react-toastify";

// const BookDetailById = () => {
//   const { user } = useContext(AuthContext);

//   const book = useLoaderData();
//   const { _id, book_name, book_image } = book;

//   const [borrowedBooks, setBorrowedBooks] = useState([]);

//   useEffect(() => {
//     if (!user || !user.email) {
//       toast.alert("User not logged in or email not available");
//       return;
//     }

//     fetch(`https://library-server-jade.vercel.app/allBorrowers/${user.email}`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setBorrowedBooks(data);
//       })
//       .catch((err) => {
//         console.error("Error fetching borrowed books:", err);
//       });
//   }, [user]);

//   const handleCloseModal = (e) => {
//     e.preventDefault();
//     document.getElementById("my_modal_1").close();
//   };

//   const handleBorrow = (e) => {
//     e.preventDefault();

//     const bookId = e.target._id.value;

//     const borrowedCount = borrowedBooks.filter(
//       (borrowedBook) => borrowedBook.book_id === bookId
//     ).length;
//     if (borrowedCount >= 1) {
//       document.getElementById("my_modal_1").close();
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: `You cannot borrow as you have already borrowed it twice.`,
//       });
//       return;
//     }
//     // Check if the user has already borrowed 3 different books
//     if (borrowedBooks.length >= 3) {
//       document.getElementById("my_modal_1").close();
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "You have reached the borrowed limitation of 3 books.",
//       });
//       return;
//     }

//     // console.log("borrowed submit pressed");
//     document.getElementById("my_modal_1").close();

//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const date = e.target.date.value;
//     const image = user.photoURL;
//     const book_id = e.target._id.value;
//     const book_name = e.target.book_name.value;

//     const borrower_info = {
//       name,
//       email,
//       date,
//       image,
//       book_id,
//       book_name,
//     };
//     // console.log(borrower_info);

//     fetch("https://library-server-jade.vercel.app/allBorrowers", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(borrower_info),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);

//         // Update borrowedBooks state after successful borrow operation
//         setBorrowedBooks([...borrowedBooks, bookId]);

//         Swal.fire({
//           icon: "success",
//           title: "Success!",
//           text: "The book has been successfully borrowed.",
//         });
//       })
//       .catch((err) => {
//         // console.log(err);
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "No book Quantity left to be borrowed",
//         });
//       });
//   };

//   return (
//     <div>
//       <h2>detail: {book_name}</h2>
//       <div>
//         <img className="h-60 object-contain" src={book_image} alt="" />
//       </div>
//       <div>
//         <button
//           className="btn"
//           onClick={() => document.getElementById("my_modal_1").showModal()}
//         >
//           Borrow
//         </button>
//         <dialog id="my_modal_1" className="modal">
//           <div className="modal-box">
//             <h3 className="font-bold text-sm text-center">
//               {`Hello! ${user?.displayName} Please fill the form to borrow "${book_name}"`}
//             </h3>

//             <div className="modal-action justify-center">
//               <form onSubmit={handleBorrow}>
//                 <div className="">
//                   <div className="mb-4">
//                     <input
//                       id="book_name"
//                       type="hidden"
//                       // placeholder="Enter Book Name"
//                       defaultValue={book_name}
//                       disabled
//                       name="book_name"
//                       className="w-full p-3 border-b-2"
//                       required
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <input
//                       id="_id"
//                       type="hidden"
//                       // placeholder="Enter Book Name"
//                       defaultValue={_id}
//                       disabled
//                       name="_id"
//                       className="w-full p-3 border-b-2"
//                       required
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="name" className="text-sm">
//                       Borrower Name
//                     </label>
//                     <input
//                       id="name"
//                       type="text"
//                       // placeholder="Enter Book Name"
//                       defaultValue={user?.displayName}
//                       disabled
//                       name="name"
//                       className="w-full p-3 border-b-2"
//                       required
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="email" className="text-sm">
//                       Borrower Email
//                     </label>
//                     <input
//                       id="email"
//                       type="text"
//                       // placeholder="Enter Book Name"
//                       defaultValue={user?.email}
//                       disabled
//                       name="email"
//                       className="w-full p-3 border-b-2"
//                       required
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="date" className="text-sm">
//                       Returned Date
//                     </label>
//                     <input
//                       id="date"
//                       type="date"
//                       name="date"
//                       className="w-full p-3 border-b-2"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <button type="submit">submit</button>
//                   <button onClick={handleCloseModal} className="btn">
//                     Close
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </dialog>
//       </div>
//     </div>
//   );
// };

// export default BookDetailById;

import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Button from "../../components/sharedItems/Button";

const BookDetailById = () => {
  const { user } = useContext(AuthContext);
  const book = useLoaderData();
  const {
    _id,
    book_name,
    book_image,
    category,
    quantity,
    author_name,
    rating,
    short_description,
    about,
  } = book;
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [borrowDate, setBorrowDate] = useState(getCurrentDate());
  const [returnDate, setReturnDate] = useState("");

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
    document.getElementById("borrow-form").reset();
    document.getElementById("my_modal_1").close();
    setReturnDate("");
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
    if (borrowedBooks.length >= 3) {
      document.getElementById("my_modal_1").close();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have reached the borrowed limitation of 3 books.",
      });
      return;
    }

    if (new Date(returnDate) < new Date(borrowDate)) {
      toast.error("Cannot select a return date before the borrow date");
      return;
    }

    document.getElementById("my_modal_1").close();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const date = e.target.date.value;
    const image = user.photoURL;
    const book_id = e.target._id.value;
    const book_name = e.target.book_name.value;
    const book_image = e.target.book_image.value;
    const category = e.target.category.value;

    const borrower_info = {
      name,
      email,
      date,
      image,
      book_id,
      book_name,
      book_image,
      category,
      borrow_date: borrowDate,
    };

    fetch("https://library-server-jade.vercel.app/allBorrowers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(borrower_info),
    })
      .then((res) => res.json())
      .then((data) => {
        setBorrowedBooks([...borrowedBooks, { book_id: bookId }]);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "The book has been successfully borrowed.",
        });
        handleCloseModal(e);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No book Quantity left to be borrowed",
        });
      });
  };

  // Get current date in YYYY-MM-DD format
  function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2); // Add leading zero
    const day = `0${date.getDate()}`.slice(-2); // Add leading zero
    return `${year}-${month}-${day}`;
  }

  const handleReturnDateChange = (e) => {
    const selectedDate = e.target.value;
    if (new Date(selectedDate) < new Date(borrowDate)) {
      toast.error("Cannot select a return date before the borrow date");
      setReturnDate("");
    } else {
      setReturnDate(selectedDate);
    }
  };

  return (
    <div className="flex flex-col  justify-center text-center items-center ">
      <div className="text-center capitalize">
        <h2 className="text-teal-600 font-bold text-2xl">
          detail: <span className="underline">{book_name}</span>
        </h2>
      </div>

      <div className="mt-8 flex gap-8 md:flex-row flex-col items-center lg:max-w-4xl p-6 m-auto shadow-lg ">
        <div className="basis-1/2">
          <img className="h-60 object-contain" src={book_image} alt="" />
        </div>
        <div className="text-left">
          <h1 className="text-teal-600 font-bold text-xl">{book_name}</h1>
          <p>{short_description}</p>
          <p>Category: {category}</p>
          <p>Rating: {rating}</p>
          <p> Quantity Available: {quantity}</p>
          <h4>By: {author_name}</h4>
          <p>About: {about}</p>
        </div>
      </div>
      <div className="my-6">
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          <Button buttonText="Borrow"></Button>
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-sm text-center">
              {`Hello! ${user?.displayName} Please fill the form to borrow "${book_name}"`}
            </h3>

            <div className="modal-action justify-center">
              <form onSubmit={handleBorrow} id="borrow-form">
                <div className="">
                  <div className="mb-4">
                    <input
                      id="category"
                      type="hidden"
                      defaultValue={category}
                      disabled
                      name="category"
                      className="w-full p-3 border-b-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      id="book_image"
                      type="hidden"
                      defaultValue={book_image}
                      disabled
                      name="book_image"
                      className="w-full p-3 border-b-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      id="book_name"
                      type="hidden"
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
                      defaultValue={user?.email}
                      disabled
                      name="email"
                      className="w-full p-3 border-b-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="borrow_date" className="text-sm">
                      Borrow Date
                    </label>
                    <input
                      id="borrow_date"
                      type="date"
                      value={borrowDate}
                      disabled
                      name="borrow_date"
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
                      value={returnDate}
                      onChange={handleReturnDateChange}
                      className="w-full p-3 border-b-2"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-between ">
                  <button type="submit">
                    <Button buttonText="Submit"></Button>
                  </button>
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

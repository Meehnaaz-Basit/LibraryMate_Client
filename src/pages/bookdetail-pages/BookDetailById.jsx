import { useContext } from "react";
import { useLoaderData } from "react-router-dom";

import { AuthContext } from "../../provider/AuthProvider";

const BookDetailById = () => {
  const { user } = useContext(AuthContext);

  const book = useLoaderData();
  const { book_name, book_image } = book;

  const handleCloseModal = (e) => {
    e.preventDefault();
    document.getElementById("my_modal_1").close();
  };

  // const handleBorrow = async () => {
  //   try {
  //     await fetch(`http://localhost:5000/borrowBook/${_id}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         userId: user?.id,
  //       }),
  //     });

  //     // If borrowing is successful, close the modal
  //     handleCloseModal();
  //   } catch (error) {
  //     console.error("Error borrowing book:", error);
  //     // You can handle errors here if needed
  //   }
  // };

  return (
    <div>
      <h2>detail: {book_name}</h2>
      <div>
        <img src={book_image} alt="" />
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
              <form method="dialog" onSubmit={handleBorrow}>
                <div className="">
                  <div className="mb-4">
                    <label htmlFor="user_name" className="text-sm">
                      Borrower Name
                    </label>
                    <input
                      id="user_name"
                      type="text"
                      // placeholder="Enter Book Name"
                      defaultValue={user?.displayName}
                      disabled
                      name="user_name"
                      className="w-full p-3 border-b-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="user_email" className="text-sm">
                      Borrower Email
                    </label>
                    <input
                      id="user_email"
                      type="text"
                      // placeholder="Enter Book Name"
                      defaultValue={user?.email}
                      disabled
                      name="user_email"
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
                  <button>submit</button>
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

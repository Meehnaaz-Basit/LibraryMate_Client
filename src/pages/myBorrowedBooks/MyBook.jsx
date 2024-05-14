import Swal from "sweetalert2";

const MyBook = ({ book, books, setBooks }) => {
  const { _id, name, email, date, book_id, book_name, quantity } = book;

  const handleReturn = (_id) => {
    Swal.fire({
      title: "Do you want to return ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Return!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allBorrowers/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // Remove the deleted item from userCrafts
              const updatedUserBooks = books.filter(
                (craft) => craft._id !== _id
              );
              // Update the state with the new userCrafts
              // setUserCrafts(updatedUserCrafts);
              Swal.fire({
                title: "Returned!",
                text: "The book has been returned.",
                icon: "success",
              });
              setBooks(updatedUserBooks);
            }
          })
          .catch((error) => {
            console.error("Error deleting craft:", error);
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the craft.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      {/* <figure>
          <img
            src={book_image}
            alt="book"
            className="h-60 w-full object-contain bg-gray-200"
          />
        </figure> */}
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title">{book_name}</h2>
        <div>
          <button
            onClick={() => handleReturn(_id)}
            className="btn btn-secondary"
          >
            {" "}
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBook;

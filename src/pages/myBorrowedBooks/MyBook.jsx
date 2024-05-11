const MyBook = ({ book }) => {
  const { name, email, date, book_id, book_name } = book;

  const handleReturn = (e) => {
    e.preventDefault();
    console.log("clicked return", book);
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
        <div>
          <button onClick={handleReturn} className="btn btn-secondary">
            {" "}
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBook;

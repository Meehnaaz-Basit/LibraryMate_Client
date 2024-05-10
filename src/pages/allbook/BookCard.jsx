const BookCard = ({ book }) => {
  const {
    book_image,
    book_name,
    quantity,
    author_name,
    category,
    rating,
    short_description,
    about,
  } = book;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={book_image}
          alt="book"
          className="h-60 w-full object-contain bg-gray-200"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book_name}</h2>
        <p>Author: {author_name}</p>
        <p>Category: {category}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
          <button className="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

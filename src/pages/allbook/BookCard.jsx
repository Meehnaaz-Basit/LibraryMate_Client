import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const {
    _id,
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
          className="h-60 w-full object-contain "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book_name}</h2>
        <p>Author: {author_name}</p>
        <p>Category: {category}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions">
          <Link to={`/bookDetail/${_id}`} className="btn btn-primary">
            View Details
          </Link>
          <Link to={`/update/${_id}`} className="btn btn-primary">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

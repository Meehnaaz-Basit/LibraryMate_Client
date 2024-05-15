import { Link } from "react-router-dom";
import Button from "../../components/sharedItems/Button";

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
    <div className="card bg-base-100 shadow-xl border-4 border-teal-600">
      <figure>
        <img
          src={book_image}
          alt="book"
          className="h-60 w-full object-contain "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-merriweather text-xl font-bold capitalize text-teal-600">
          {book_name}
        </h2>
        <p>Author: {author_name}</p>
        <p>Category: {category}</p>
        <p>Quantity: {quantity}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions flex justify-between">
          <Link to={`/bookDetail/${_id}`}>
            <Button buttonText="View Details"></Button>
          </Link>
          <Link to={`/update/${_id}`}>
            <Button buttonText="Update"></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

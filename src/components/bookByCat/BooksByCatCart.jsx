import { Link } from "react-router-dom";
import Button from "../sharedItems/Button";

const BooksByCatCart = ({ categoryWiseBook }) => {
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
  } = categoryWiseBook;

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
        <h2 className="card-title text-teal-600">{book_name}</h2>
        <p>Author: {author_name}</p>
        <p>Category: {category}</p>
        <p>Rating: {rating}</p>
        <p>Quantity: {quantity}</p>
        <div className="card-actions flex justify-between">
          <Link to={`/bookDetail/${_id}`}>
            <Button buttonText="View Detail"></Button>
          </Link>
          <Button buttonText="Update"></Button>
        </div>
      </div>
    </div>
  );
};

export default BooksByCatCart;

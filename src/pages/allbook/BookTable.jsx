import { Link } from "react-router-dom";

const BookTable = ({ book, serialNumber }) => {
  const {
    _id,
    book_image,
    book_name,
    author_name,
    category,
    rating,
    quantity,
  } = book;
  return (
    <>
      <tr>
        <th>{serialNumber}</th>
        <td>
          <img src={book_image} alt="" className="h-20 mx-auto" />
        </td>
        <td>{book_name}</td>
        <td>{author_name}</td>
        <td>{category}</td>
        <td>{quantity}</td>
        <td>{rating}</td>
        <td className="flex flex-col">
          <Link to={`/bookDetail/${_id}`} className="btn">
            Details
          </Link>
          <Link to={`/update/${_id}`}>Update</Link>
        </td>
      </tr>
    </>
  );
};

export default BookTable;

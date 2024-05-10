const BookTable = ({ book, serialNumber }) => {
  const { book_image, book_name, quantity, author_name, category, rating } =
    book;
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
        <td>{rating}</td>
        <td className="flex flex-col">
          <button>Details</button>
          <button>Update</button>
        </td>
      </tr>
    </>
  );
};

export default BookTable;

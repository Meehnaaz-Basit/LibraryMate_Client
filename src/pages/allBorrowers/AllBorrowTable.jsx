const AllBorrowTable = ({ borrower, serialNumber }) => {
  const { name, email, date, borrow_date, image, book_name } = borrower;
  return (
    <>
      <tr>
        <th>{serialNumber}</th>
        <td>
          <img src={image} alt="" className="h-14 w-14 rounded-full mx-auto" />
        </td>
        <td>{name}</td>
        <td>{email}</td>

        <td>{borrow_date}</td>
        <td>{date}</td>

        <td>{book_name}</td>
      </tr>
    </>
  );
};

export default AllBorrowTable;

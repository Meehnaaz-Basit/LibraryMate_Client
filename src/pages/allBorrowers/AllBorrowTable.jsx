const AllBorrowTable = ({ borrower, serialNumber }) => {
  const { name, email, date, image, book_id } = borrower;
  return (
    <>
      <tr>
        <th>{serialNumber}</th>
        <td>
          <img src={image} alt="" className="h-14 w-14 rounded-full mx-auto" />
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{date}</td>
        <td>{book_id}</td>
      </tr>
    </>
  );
};

export default AllBorrowTable;

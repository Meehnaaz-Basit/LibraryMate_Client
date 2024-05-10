import { useLoaderData, useParams } from "react-router-dom";
import BooksByCatCart from "./BooksByCatCart";

const BookByCategory = () => {
  const { category } = useParams();
  const singleCategory = useLoaderData();
  console.log(singleCategory, "allbooks");
  const booksByCategory = singleCategory.filter(
    (book) => book.category === category
  );
  console.log(booksByCategory);
  return (
    <div>
      <h2>category</h2>
      <h2 className=" font-bold text-3xl text-center">
        Books category:
        <span className=""> {category} </span>
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {booksByCategory.map((categoryWiseBook) => (
          <BooksByCatCart
            categoryWiseBook={categoryWiseBook}
            key={categoryWiseBook._id}
          ></BooksByCatCart>
        ))}
      </div>
    </div>
  );
};

export default BookByCategory;

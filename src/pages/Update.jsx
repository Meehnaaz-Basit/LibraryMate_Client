import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const { user } = useContext(AuthContext);
  const book = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();

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
  const handleUpdate = (e) => {
    e.preventDefault();

    const book_image = e.target.book_image.value;
    const book_name = e.target.book_name.value;
    const quantity = e.target.quantity.value;
    const author_name = e.target.author_name.value;
    const category = e.target.category.value;
    const rating = e.target.rating.value;
    const short_description = e.target.short_description.value;
    const about = e.target.about.value;

    const updateBook = {
      book_image,
      book_name,
      quantity,
      author_name,
      category,
      rating,
      short_description,
      about,
    };
    console.log(updateBook);

    fetch(`http://localhost:5000/bookDetail/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBook),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Updated items Successfully.",
            icon: "success",
          });

          navigate(location?.state ? location.state : "/allBooks");
        }
      });
  };
  return (
    <div>
      <h2>Update books </h2>
      <div>
        <form onSubmit={handleUpdate}>
          <fieldset className="grid grid-cols-4 gap-6 p-6 pb-0 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="book_image" className="text-sm">
                  Book Image Url
                </label>
                <input
                  id="book_image"
                  type="text"
                  placeholder="Enter Book Image"
                  defaultValue={book_image}
                  name="book_image"
                  className="w-full p-3 border-b-2"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="book_name" className="text-sm">
                  Book Name
                </label>
                <input
                  id="book_name"
                  defaultValue={book_name}
                  type="text"
                  placeholder="Enter Book Name"
                  name="book_name"
                  className="w-full p-3 border-b-2"
                  required
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="quantity" className="text-sm">
                  Quantity
                </label>
                <input
                  id="quantity"
                  type="number"
                  defaultValue={quantity}
                  placeholder="Enter the quantities"
                  name="quantity"
                  className="w-full p-3 border-b-2"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="author_name" className="text-sm">
                  Author Name
                </label>
                <input
                  id="author_name"
                  type="text"
                  defaultValue={author_name}
                  placeholder="Enter Book Author Name"
                  name="author_name"
                  className="w-full p-3 border-b-2"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <select
                  className="select w-full border-2"
                  name="category"
                  required
                  defaultValue={category}
                >
                  <option disabled selected>
                    Select a Category
                  </option>
                  <option>Business</option>
                  <option>Medical</option>
                  <option>History</option>
                  <option>Law</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <select
                  className="select w-full  border-2"
                  name="rating"
                  required
                  defaultValue={rating}
                >
                  <option disabled selected>
                    Rating
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="short_description" className="text-sm">
                  Short description
                </label>
                <textarea
                  name="short_description"
                  id="short_description"
                  defaultValue={short_description}
                  className=" w-full p-3 border-b-2"
                  placeholder="Short description"
                ></textarea>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="about" className="text-sm">
                  About
                </label>
                <textarea
                  name="about"
                  id="about"
                  defaultValue={about}
                  className=" w-full p-3 border-b-2"
                  placeholder="About the book"
                ></textarea>
              </div>
              {/* <div className="col-span-full sm:col-span-3">
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  className=" w-full p-3 border-b-2"
                  disabled
                  defaultValue=""
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <input
                  id="user_name"
                  type="hidden"
                  disabled
                  name="user_name"
                  defaultValue=""
                />
              </div> */}
            </div>
          </fieldset>
          <input
            type="submit"
            className="btn w-full border-2 mt-6"
            value="Update Books"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;

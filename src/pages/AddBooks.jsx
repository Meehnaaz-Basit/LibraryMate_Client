import { toast } from "react-toastify";

const AddBooks = () => {
  const handleAddBooks = (e) => {
    e.preventDefault();

    const book_image = e.target.book_image.value;
    const book_name = e.target.book_name.value;
    const quantity = e.target.quantity.value;
    const author_name = e.target.author_name.value;
    const category = e.target.category.value;
    const rating = e.target.rating.value;
    const short_description = e.target.short_description.value;
    const about = e.target.about.value;

    const newAddedBook = {
      book_image,
      book_name,
      quantity,
      author_name,
      category,
      rating,
      short_description,
      about,
    };
    // console.log(newAddedBook);

    // fetch("https://library-server-jade.vercel.app/allBooks", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newAddedBook),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //   });

    fetch("https://library-server-jade.vercel.app/allBooks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAddedBook),
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Book added successfully!");
          e.target.reset(); // Clear the form
        } else {
          throw new Error("Failed to add book");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to add book. Please try again later.");
      });
  };

  return (
    <div>
      <h2>add books </h2>
      <div>
        <form onSubmit={handleAddBooks}>
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
            className="btn w-full border-2 mt-6 mb-8 bg-teal-600 text-white"
            value="Add Books"
          />
        </form>
      </div>
    </div>
  );
};

export default AddBooks;

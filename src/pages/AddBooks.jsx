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
    console.log(newAddedBook);
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
                  <option>True Crime</option>
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
            className="btn w-full border-2 mt-6"
            value="Add Books"
          />
        </form>
      </div>
    </div>
  );
};

export default AddBooks;

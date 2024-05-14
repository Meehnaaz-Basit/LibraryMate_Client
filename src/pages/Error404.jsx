import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <div className="flex my-10 flex-col min-h-[50vh] justify-center items-center mx-auto mt-20">
        <img
          className="lg:w-[30%] md:[50%] object-cover"
          src="https://i.ibb.co/c6hPvxT/error.jpg"
          alt=""
        />
        <span className="mt-8">
          <Link to="/" className="btn bg-orange-500 text-white font-bold px-4">
            Go Back to Home page
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Error404;

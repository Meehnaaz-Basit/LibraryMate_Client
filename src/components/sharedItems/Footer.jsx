import { Link } from "react-router-dom";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="container  space-y-3 mx-auto max-w-[1300px] w-[90%] lg-w[88%] px-0">
          <div className="">
            <img
              className="w-36 mx-auto"
              src="https://i.ibb.co/5kD1HtX/REsidencehub-1.png"
              alt=""
            />
            <h1 className="text-3xl font-bold text-center text-teal-600">
              Library<span className="text-orange-600">Mate</span>
            </h1>
          </div>
          <nav className="grid grid-flow-col gap-4">
            <Link
              to="/"
              className="font-bold hover:text-orange-500 hover:underline transition-all"
            >
              Home
            </Link>
            <Link
              to="/allBooks"
              className="font-bold hover:text-orange-500 hover:underline transition-all"
            >
              All Books
            </Link>
            <Link
              to="/login"
              className="font-bold hover:text-orange-500 hover:underline transition-all"
            >
              Login
            </Link>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <div className="w-10 h-10 rounded-full flex justify-center items-center text-center transition-all bg-transparent hover:bg-orange-500 hover:text-white text-orange-500 border-2 border-orange-500">
                <a href="https://www.facebook.com/meehnaazbasit">
                  <FaFacebookF className="text-xl  " />
                </a>
              </div>
              <div className="w-10 h-10 rounded-full flex justify-center items-center text-center transition-all bg-transparent hover:bg-orange-500 hover:text-white text-orange-500 border-2 border-orange-500">
                <a href="https://www.facebook.com/meehnaazbasit">
                  <FaTwitter className="text-xl  " />
                </a>
              </div>
              <div className="w-10 h-10 rounded-full flex justify-center items-center text-center transition-all bg-transparent hover:bg-orange-500 hover:text-white text-orange-500 border-2 border-orange-500">
                <a href="https://www.facebook.com/meehnaazbasit">
                  <FaGithub className="text-xl  " />
                </a>
              </div>
              <div className="w-10 h-10 rounded-full flex justify-center items-center text-center transition-all bg-transparent hover:bg-orange-500 hover:text-white text-orange-500 border-2 border-orange-500">
                <a href="https://www.facebook.com/meehnaazbasit">
                  <FaLinkedinIn className="text-xl  " />
                </a>
              </div>
            </div>
          </nav>
          <aside>
            <p>
              Copyright © 2024 - All right reserved by{" "}
              <a
                href="https://www.facebook.com/meehnaazbasit"
                className="font-semibold underline hover:text-orange-500"
              >
                Meehnaaz Basit
              </a>
            </p>
          </aside>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

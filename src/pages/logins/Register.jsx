import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photoURL = form.get("photoURL");

    // const userInfo = { name, email, password, photoURL };
    console.log(name, email, password, photoURL);

    // Password validation
    // if (!containsUppercase(password)) {
    //   toast.error("Password must contain an uppercase letter");

    //   return;
    // }
    // if (!specialCharacter(password)) {
    //   toast.error("Password must contain a special character");

    //   return;
    // }
    // if (!hasSufficientLength(password)) {
    //   toast.error("Password must be at least 6 characters long");

    //   return;
    // }

    // create
    createUser(email, password, photoURL)
      .then((result) => {
        console.log(result.user);

        updateProfile(result.user, { displayName: name, photoURL: photoURL });
        navigate(location?.state ? location.state : "/login");

        toast.success("Registered Successfully ");
      })
      .catch((error) => {
        console.log(error.message);
        if (error.code === "auth/email-already-in-use") {
          toast.error(
            "Email is already in use. Please use a different email address."
          );
        } else {
          toast.error("Error registering");
        }
      });
  };
  //Function to check if password contains an uppercase letter
  const containsUppercase = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= "A" && str[i] <= "Z") {
        return true;
      }
    }
    return false;
  };

  // Function to check if password contains a special character

  const specialCharacter = (str) => {
    // Regular expression to match any special character
    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    // Test if the string contains any special character
    return specialCharRegex.test(str);
  };

  // Function to check if password has sufficient length
  const hasSufficientLength = (str) => {
    return str.length >= 6;
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg  lg:max-w-6xl ">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src="" alt="" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 ">
            Get Your Free Account Now.
          </p>

          <form onSubmit={handleRegister}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="name"
              >
                Username
              </label>
              <input
                required
                id="name"
                autoComplete="name"
                name="name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="photoURL"
              >
                Photo URL
              </label>
              <input
                required
                id="photoURL"
                // autoComplete="photo"
                name="photoURL"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                required
                id="email"
                // autoComplete="email"
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>

            <div className="mt-4 relative">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="password"
                >
                  Password
                </label>
              </div>

              <input
                required
                id="password"
                // autoComplete="current-password"
                name="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type={showPassword ? "text" : "password"}
              />
              <span
                className="absolute right-6 bottom-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEye className="text-gray-600 cursor-pointer"></FaEye>
                ) : (
                  <FaEyeSlash className="text-gray-600 cursor-pointer"></FaEyeSlash>
                )}
              </span>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Register
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase  hover:underline"
            >
              or Login
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: "url('https://i.ibb.co/XV0cy0H/569.jpg')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Register;

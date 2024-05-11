import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Nav = () => {
  //   const [theme, setTheme] = useState(null); // Set initial theme to null

  //   useEffect(() => {
  //     const localTheme = localStorage.getItem("theme");
  //     if (localTheme) {
  //       setTheme(localTheme);
  //       document.querySelector("html").setAttribute("data-theme", localTheme);
  //     } else {
  //       setTheme("light");
  //       localStorage.setItem("theme", "light");
  //     }
  //   }, []);

  //   const handleToggle = (e) => {
  //     const newTheme = e.target.checked ? "luxury" : "light";
  //     setTheme(newTheme);
  //     localStorage.setItem("theme", newTheme);
  //     document.querySelector("html").setAttribute("data-theme", newTheme);
  //   };

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then().catch();
  };
  const navMenu = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? " border-b-2 border-teal-700 text-teal-600 bg-transparent py-2 px-3 mx-2  font-bold"
            : "border-b-2 border-transparent  py-2 px-3 mx-2 font-bold hover:border-teal-600 hover:text-teal-600 hover:bg-transparent transition-all"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allBooks"
        className={({ isActive }) =>
          isActive
            ? " border-b-2 border-teal-700 text-teal-600 bg-transparent py-2 px-3 mx-2  font-bold"
            : "border-b-2 border-transparent  py-2 px-3 mx-2 font-bold  hover:text-teal-600 hover:bg-transparent transition-all"
        }
      >
        All Books
      </NavLink>
      <NavLink
        to="/addBooks"
        className={({ isActive }) =>
          isActive
            ? " border-b-2 border-teal-700 text-teal-600 bg-transparent py-2 px-3 mx-2  font-bold"
            : "border-b-2 border-transparent  py-2 px-3 mx-2 font-bold  hover:text-teal-600 hover:bg-transparent transition-all"
        }
      >
        Add Books
      </NavLink>
      <NavLink
        to="/allBorrowers"
        className={({ isActive }) =>
          isActive
            ? " border-b-2 border-teal-700 text-teal-600 bg-transparent py-2 px-3 mx-2  font-bold"
            : "border-b-2 border-transparent  py-2 px-3 mx-2 font-bold  hover:text-teal-600 hover:bg-transparent transition-all"
        }
      >
        Borrowers List
      </NavLink>
      <NavLink
        to="/myBorrowed"
        className={({ isActive }) =>
          isActive
            ? " border-b-2 border-teal-700 text-teal-600 bg-transparent py-2 px-3 mx-2  font-bold"
            : "border-b-2 border-transparent  py-2 px-3 mx-2 font-bold  hover:text-teal-600 hover:bg-transparent transition-all"
        }
      >
        My Borrowed Books
      </NavLink>
    </>
  );
  return (
    <div className="container mx-auto max-w-[1300px] w-[100%] lg-w[88%] px-0 pb-0 ">
      {/*  */}
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn p-1 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-40 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <a
            href="/"
            className="md:text-4xl text-xl font-extrabold text-teal-600 font-merriweather"
          >
            Library<span className="text-orange-600">Mate</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end md:gap-4 gap-1">
          {user ? (
            <>
              <div>
                {user.photoURL ? (
                  <img
                    className="md:w-14 md:h-14 w-10 h-10 rounded-full border-2 object-cover "
                    title={user.displayName}
                    src={user.photoURL}
                    alt="Profile"
                  />
                ) : (
                  <img
                    className="md:w-14 md:h-14 w-10 h-10 rounded-full border-2  object-cover "
                    src="https://i.ibb.co/X3yrLFJ/pngegg.png"
                    alt=""
                  />
                )}
              </div>
              <div>
                <button onClick={handleLogOut}>logout</button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button>login</button>
              </Link>
            </>
          )}
        </div>

        {/* <a id="clickable" className="z-30">
          {theme !== null && (
            <label className="cursor-pointer grid place-items-center">
              <input
                onChange={handleToggle}
                type="checkbox"
                checked={theme === "luxury"}
                // value="synthwave"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          )}
        </a>
        <Tooltip anchorSelect="#clickable" className="z-40" clickable>
          <button>Change theme</button>
        </Tooltip> */}
      </div>
    </div>
  );
};

export default Nav;

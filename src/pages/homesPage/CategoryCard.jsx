import { useState } from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { category_type, category_image } = category;
  const [isHovered, setIsHovered] = useState(false);
  return (
    // <div>
    //   <div>
    //     <img src={category_image} alt="" className="h-96 object-cover w-full" />
    //     <div>
    //       <h2>{category_type}</h2>
    //       <Link to={`/singleCategory/${category_type}`}>View Books</Link>
    //     </div>
    //   </div>
    // </div>
    <Link to={`/singleCategory/${category_type}`}>
      <div
        className="relative overflow-hidden "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className=" transform transition-transform duration-300 hover:scale-125">
          <img
            src={category_image}
            alt=""
            className="w-full h-80 object-cover hover:scale-125"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-teal-600 bg-opacity-60 text-opacity-50 hover:bg-opacity-30 transition-all duration-300">
            <h1 className="text-white font-merriweather font-bold md:text-5xl text-xl top-1/2 transform -translate-y-1/2">
              {category_type}
            </h1>
            {isHovered && (
              <p className="text-white font-bold absolute mt-8">View All</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

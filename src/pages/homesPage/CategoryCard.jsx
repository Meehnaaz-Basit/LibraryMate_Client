import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { category_type, category_image } = category;
  return (
    <div>
      <div>
        <img src={category_image} alt="" className="h-96 object-cover w-full" />
        <div>
          <h2>{category_type}</h2>
          <Link to={`/singleCategory/${category_type}`}>View Books</Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

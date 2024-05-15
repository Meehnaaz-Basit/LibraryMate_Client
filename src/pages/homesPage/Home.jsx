import { useLoaderData } from "react-router-dom";
import Categories from "./Categories";
import Slider from "./Slider";
import ThreeBooks from "../../components/home3item/ThreeBooks";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <div>
        <Slider></Slider>
      </div>
      <div>
        <Categories categories={categories}></Categories>
      </div>
      <div>
        <div>Popular Books</div>
        <div>
          <ThreeBooks></ThreeBooks>
        </div>
      </div>
    </div>
  );
};

export default Home;

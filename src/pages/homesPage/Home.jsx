import { useLoaderData } from "react-router-dom";
import Categories from "./Categories";
import Slider from "./Slider";
import ThreeBooks from "../../components/home3item/ThreeBooks";
import Contact from "./Contact";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <div>
        <Slider></Slider>
      </div>
      <div className="my-20">
        <div className="text-center mb-20">
          <h2 className="capitalize md:text-5xl font-bold text-2xl font-merriweather text-teal-600">
            book <span className="text-orange-600">categories</span>
          </h2>
        </div>
        <Categories categories={categories}></Categories>
      </div>
      <div className="my-20">
        <div className="text-center mb-20">
          <h2 className="capitalize md:text-5xl font-bold text-2xl font-merriweather text-teal-600">
            popular <span className="text-orange-600">books</span>
          </h2>
        </div>
        <div>
          <ThreeBooks></ThreeBooks>
        </div>
      </div>
      <div className="my-8">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;

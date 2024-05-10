import { useLoaderData } from "react-router-dom";
import Categories from "./Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <h2>this is home banner</h2>
      <div>
        <Categories categories={categories}></Categories>
      </div>
    </div>
  );
};

export default Home;

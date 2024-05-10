import CategoryCard from "./CategoryCard";

const Categories = ({ categories }) => {
  return (
    <div>
      <h2>this is all 4 cards</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;

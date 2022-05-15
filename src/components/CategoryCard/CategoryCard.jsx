import './CategoryCard.css';

export default function CategoryCard({ category }) {
  const { categoryName, categoryImage } = category;
  return (
    <div className="category-card">
      <img className="img-res fill-height" src={categoryImage} alt={categoryName} />
      <div className="overlay">
        <h3 className="heading-3">{categoryName}</h3>
      </div>
    </div>
  );
}

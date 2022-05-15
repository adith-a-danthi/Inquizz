import { Link } from 'react-router-dom';
import { Navbar, CategoryCard } from '../components';
import { useData } from '../contexts/data-context';

export default function Home() {
  const { categories } = useData();

  return (
    <div>
      <Navbar />
      <main className="pa-4 px-8">
        <section className="text-center my-8">
          <h1 className="heading-1">Inquizz</h1>
          <h3 className="heading-2">Super cool tagline goes here.</h3>
          <p className="text-md">You're just a click away from the best quizzes on the internet.</p>
          <p className="text-md">Alright, maybe two, but you get the point.</p>

          <Link to="/quizzes">
            <button className="btn btn-gray mt-4">View All Quizzes</button>
          </Link>
        </section>

        <hr />

        <section id="categories">
          <h3 className="heading-3 text-center">Categories</h3>
          <div className="flex gap-1 flex-wrap justify-center py-4">
            {categories.map((category) => (
              <Link to={`/quizzes?category=${category.categoryName}`} key={category.id}>
                <CategoryCard category={category} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

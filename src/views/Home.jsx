import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navbar } from '../components';
import CategoryCard from '../components/CategoryCard/CategoryCard';

export default function Home() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="pa-4 px-8">
        <section className="text-center my-8">
          <h1 className="heading-1">Inquizz</h1>
          <h3 className="heading-2">Super cool tagline goes here.</h3>
          <p className="text-md">You're just a click away from the best quizzes on the internet.</p>
          <p className="text-md">Alright, maybe two, but you get the point.</p>

          <button className="btn btn-gray mt-4">View All Quizzes</button>
        </section>

        <hr />

        <section id="categories">
          <h3 className="heading-3 text-center">Categories</h3>
          <div className="flex gap-1 flex-wrap justify-center py-4">
            {categories.map((category) => (
              <CategoryCard category={category} key={category.id} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

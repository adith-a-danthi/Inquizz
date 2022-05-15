import { useSearchParams } from 'react-router-dom';
import { Navbar, QuizCard } from '../components';
import { useData } from '../contexts/data-context';

export default function QuizzesPage() {
  const { quizzes } = useData();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');

  const filteredQuizzes = selectedCategory
    ? quizzes.filter((quiz) => selectedCategory === quiz.categoryName)
    : quizzes;

  return (
    <div>
      <Navbar />
      <main className="pa-4 px-8">
        <section id="quizzes">
          <h3 className="heading-3 text-center">Quizzes</h3>
          <div className="flex gap-1 flex-wrap justify-center py-4">
            {filteredQuizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

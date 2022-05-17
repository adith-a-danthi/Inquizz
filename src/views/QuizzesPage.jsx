import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import { Navbar, QuizCard } from '../components';
import { useData } from '../contexts/data-context';
import { useQuiz } from '../contexts/quiz-context';

export default function QuizzesPage() {
  // Hooks
  const { quizzes } = useData();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');
  const { dispatchQuiz } = useQuiz();

  const filteredQuizzes = selectedCategory
    ? quizzes.filter((quiz) => selectedCategory === quiz.categoryName)
    : quizzes;

  // Handle Quiz Selection
  const quizClickHandler = async (quiz) => {
    try {
      dispatchQuiz({ type: 'RESET_QUIZ' });
      const res = await axios.get(`/api/quizzes/${quiz._id}`);
      dispatchQuiz({ type: 'SET_QUIZ', payload: res.data.quiz });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="pa-4 px-8">
        <section id="quizzes">
          {/* Title */}
          <h3 className="heading-3 text-center">Quizzes</h3>

          {/* Quizzes */}
          <div className="flex gap-1 flex-wrap justify-center py-4">
            {filteredQuizzes.map((quiz) => (
              <Link
                to="/quiz/rules"
                key={quiz.id}
                onClick={() => quizClickHandler(quiz)}
                className="text-decoration-none text-gray">
                <QuizCard quiz={quiz} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

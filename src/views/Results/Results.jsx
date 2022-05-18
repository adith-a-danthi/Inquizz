import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../../components';
import { useQuiz } from '../../contexts/quiz-context';

import './Results.css';

export default function Results() {
  // Hooks
  const {
    quizState: { currentQuiz, score, selectedOptions },
  } = useQuiz();
  const navigate = useNavigate();

  // CSS ClassName Helpers
  const markedClass = (questionId, option) =>
    selectedOptions[questionId] === option ? 'selected' : '';

  const getIconClassNames = (answer, option) =>
    answer === option ? 'fas fa-circle-check answer' : 'fas fa-circle-xmark incorrect';

  // Component Effects
  useEffect(() => {
    currentQuiz?._id ?? navigate('404');
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Quiz Results */}
      <main className="pa-4 px-8">
        <section id="quizzes" className="text-center">
          {/* Quiz Title and Score */}
          <h3 className="heading-3 text-center">{currentQuiz?.quizName}</h3>
          <h3 className="heading-4 text-center">
            Final Score: {score} / {currentQuiz?.questions?.length * 10}
          </h3>

          {/* Quiz Questions */}
          {currentQuiz?.questions?.map(({ question, _id, answer, options }, index) => (
            <div key={index}>
              <h4 className="heading-4 mt-8">
                {index + 1}. {question}
              </h4>
              <div className="grid grid-cols-2 gap-1 fluid-grid ma-4 mt-8">
                {options.map((option, index) => (
                  <div className={`option-item ${markedClass(_id, option)}`} key={index}>
                    {option}
                    <span className={`${getIconClassNames(answer, option)} fa-lg ml-4`}></span>
                  </div>
                ))}
              </div>
              <hr />
            </div>
          ))}

          {/* Action Buttons */}
          <div className="text-center mt-8 pt-8">
            <Link to="/quizzes">
              <button className="btn btn-gray outlined pa-4">Try Another</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

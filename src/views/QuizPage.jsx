import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Navbar } from '../components';
import { useQuiz } from '../contexts/quiz-context';

export default function QuizPage() {
  // Hooks
  const { quizId } = useParams();
  const {
    quizState: { currentQuiz, questionNumber },
    markAnswer,
    dispatchQuiz,
  } = useQuiz();
  const navigate = useNavigate();

  let currentQuestion = currentQuiz?.questions?.[questionNumber];

  // Handle Uninitialized Quiz
  useEffect(() => {
    currentQuiz ?? navigate('404');
    currentQuestion ?? navigate('404');
    quizId !== currentQuiz?._id && navigate('/quizzes');
  }, []);

  // Update Current Question
  useEffect(() => {
    if (questionNumber < currentQuiz?.questions?.length) {
      currentQuestion = currentQuiz?.questions?.[questionNumber];
    }
  }, [questionNumber]);

  // Handle Option Selection
  const answerHandler = (selectedOption) => {
    markAnswer(currentQuestion, selectedOption);
    if (questionNumber + 1 === currentQuiz.questions.length) {
      navigate('/quiz/results');
    } else {
      dispatchQuiz({ type: 'NEXT_QUESTION' });
    }
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Quiz */}
      <main className="pa-4 px-8">
        <section id="quizzes" className="text-center">
          {/* Quiz Title */}
          <h3 className="heading-3 text-center">{currentQuiz?.quizName}</h3>

          {/* Quiz Question */}
          <h4 className="heading-4 mt-8">
            {questionNumber + 1}. {currentQuestion?.question}
          </h4>

          {/* Options */}
          <div className="grid grid-cols-2 fluid-grid ma-4 mt-8">
            {currentQuestion?.options?.map((option, index) => (
              <button
                className="btn outlined btn-gray pa-4"
                key={index}
                onClick={() => answerHandler(option)}>
                {option}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

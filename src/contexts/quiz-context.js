import { createContext, useContext, useReducer } from 'react';
import { initialState, quizReducer } from '../reducers/quizReducer';

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [quizState, dispatchQuiz] = useReducer(quizReducer, initialState);

  const markAnswer = (currentQuestion, option) => {
    dispatchQuiz({
      type: 'SET_SELECTED_OPTION',
      payload: {
        id: currentQuestion._id,
        option,
      },
    });
    const isCorrect = currentQuestion.answer === option;
    dispatchQuiz({
      type: 'SET_SCORE',
      payload: isCorrect ? quizState.score + 10 : quizState.score - 5,
    });
  };

  return (
    <QuizContext.Provider value={{ quizState, dispatchQuiz, markAnswer }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };

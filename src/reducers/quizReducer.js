const initialState = {
  currentQuiz: {},
  selectedOptions: [],
  score: 0,
  questionNumber: 0,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUIZ':
      return {
        ...state,
        currentQuiz: action.payload,
      };
    case 'SET_SELECTED_OPTION':
      return {
        ...state,
        selectedOptions: { ...state.selectedOptions, [action.payload.id]: action.payload.option },
      };
    case 'SET_SCORE':
      return {
        ...state,
        score: action.payload,
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        questionNumber: state.questionNumber + 1,
      };
    case 'RESET_QUIZ':
      return initialState;
    default:
      return state;
  }
};

export { quizReducer, initialState };

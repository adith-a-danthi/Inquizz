import { Routes, Route } from 'react-router';
import { Home, Page404, QuizPage, QuizzesPage, Results, Rules } from './views';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<QuizzesPage />} />
        <Route path="/quiz">
          <Route path="rules" element={<Rules />} />
          <Route path=":quizId" element={<QuizPage />} />
          <Route path="results" element={<Results />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;

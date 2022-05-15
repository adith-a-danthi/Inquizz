import { Routes, Route } from 'react-router';
import { Home, Page404, QuizzesPage } from './views';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<QuizzesPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router';
import { Home } from './views';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeServer } from './server';
import App from './App';
import { DataProvider } from './contexts/data-context';
import { QuizProvider } from './contexts/quiz-context';

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </DataProvider>
    </Router>
  </React.StrictMode>
);

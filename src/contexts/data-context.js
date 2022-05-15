import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  const getQuizzes = async () => {
    try {
      const response = await axios.get('/api/quizzes');
      setQuizzes(response.data.quizzes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
    getQuizzes();
  }, []);

  return <DataContext.Provider value={{ categories, quizzes }}>{children}</DataContext.Provider>;
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };

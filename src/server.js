import { Server, Model, RestSerializer } from 'miragejs';
import { loginHandler, signupHandler } from './backend/controllers/AuthController';
import {
  getAllCategoriesHandler,
  getCategoryHandler,
} from './backend/controllers/CategoryController';
import { getAllQuizzesHandler, getQuizHandler } from './backend/controllers/QuizController';

import { users } from './backend/db/users';
import { categories } from './backend/db/categories';
import { quizzes } from './backend/db/quizzes';

export function makeServer({ environment = 'development' } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      user: Model,
      category: Model,
      quiz: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      server.logging = false;
      users.forEach((item) => server.create('user', { ...item }));

      categories.forEach((item) => server.create('category', { ...item }));

      quizzes.forEach((item) => server.create('quiz', { ...item }));
    },

    routes() {
      this.namespace = 'api';
      // auth routes (public)
      this.post('/auth/signup', signupHandler.bind(this));
      this.post('/auth/login', loginHandler.bind(this));

      // categories routes (public)
      this.get('/categories', getAllCategoriesHandler.bind(this));
      this.get('/categories/:categoryId', getCategoryHandler.bind(this));

      // quiz routes (public)
      this.get('/quizzes', getAllQuizzesHandler.bind(this));
      this.get('/quizzes/:quizId', getQuizHandler.bind(this));
    },
  });
}

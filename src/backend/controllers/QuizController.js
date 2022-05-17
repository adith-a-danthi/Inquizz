import { Response } from 'miragejs';

/**
 * This handler handles gets all quizzes in the db.
 * send GET Request at /api/quizzes
 * */
const getAllQuizzesHandler = function () {
  try {
    const quizzes = this.db.quizzes.map((quiz) => {
      // eslint-disable-next-line no-unused-vars
      const { questions, ...rest } = quiz;
      return { ...rest };
    });
    return new Response(200, {}, { quizzes });
  } catch (error) {
    return new Response(500, {}, { error });
  }
};

/**
 * This handler handles gets the specified quiz from the db.
 * send GET Request at /api/quizzes/:quizId
 * */
const getQuizHandler = function (schema, request) {
  const quizId = request.params.quizId;
  try {
    const quiz = schema.quizzes.findBy({ _id: quizId });
    return new Response(200, {}, { quiz });
  } catch (error) {
    return new Response(500, {}, { error });
  }
};

export { getAllQuizzesHandler, getQuizHandler };

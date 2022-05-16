import './QuizCard.css';

export default function QuizCard({ quiz }) {
  const { quizName, quizImage, categoryName } = quiz;
  return (
    <div>
      <div className="card outlined-card quiz-card">
        <img className="card-img" src={quizImage} alt={quizName} />
        <div className="card-content">
          <h3 className="card-title">{quizName}</h3>
          <p className="card-body">{categoryName}</p>
        </div>
      </div>
    </div>
  );
}

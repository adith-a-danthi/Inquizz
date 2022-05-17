import { Navbar } from '../components';

export default function Rules() {
  return (
    <div>
      <Navbar />
      <main className="pa-4 px-8 flex flex-grow-0 justify-center">
        <section id="rules" className="mt-8">
          <h3 className="heading-3 text-center">Rules</h3>
          <ul className="list list-circle ma-4 text-md">
            <li>The quiz contains 5 questions.</li>
            <li>Each question has only 1 correct answer.</li>
            <li>A correct answer fetches you 10 points.</li>
            <li>An incorrect answer fetches you -5 points.</li>
          </ul>
          <div className="ma-4 mt-8 text-center">
            <button className="btn btn-gray">Start Quiz</button>
          </div>
        </section>
      </main>
    </div>
  );
}

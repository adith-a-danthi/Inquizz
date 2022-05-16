import { Link } from 'react-router-dom';
import { Navbar } from '../components';

export default function Page404() {
  return (
    <>
      <Navbar />
      <main className="my-8 pa-4 px-8">
        <section className="text-center ma-8">
          <h1 className="heading-1">404</h1>
          <h3 className="heading-3 mb-8">Oops! You seem to have accessed a broken link.</h3>
          <Link to="/">
            <button className="btn btn-gray">
              <i className="fas fa-chevron-left mr-2"></i>
              Go To Home
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}

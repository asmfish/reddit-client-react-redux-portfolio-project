import logo from './logo.svg';
import './App.css';
import Subreddits from './features/Subreddits/Subreddits';
import Posts from './features/Posts/Posts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Posts />
      </main>
      <aside>
        <Subreddits />
      </aside>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

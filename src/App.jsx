import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>My art portfolio!</h1>
        <p>Welcome to my portfolio of my artworks! :-)</p>
        <p>author: @ironyxp on tumblr</p>
      </header>
      
      <Gallery />
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} All rights reserved. ironyxp</p>
      </footer>
    </div>
  );
}

export default App;
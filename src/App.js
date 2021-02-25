import {Posts} from './components/Posts/Posts'
import {Books} from './components/books/Books'
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>
          Our first react app.

      </h1>

      <Posts />
      <Books />
    </div>
  );
}

export default App;

import {Posts} from './components/Posts/Posts'
import './App.scss';
import {SearchPosts} from "./components/SearchPosts/SearchPosts";
import {useState} from "react";

function App() {
    //define state in functional component
    //     state,   setSate()            default value
    const [posts, setPosts] = useState([]);
  return (
    <div className="App">
      <h1>
          Our first react app.
      </h1>
        <SearchPosts  onSearchResult={(results) => setPosts(results)}/>
        <hr />
      <Posts  posts={posts}/>
    </div>
  );
}

export default App;

import React, {Component} from 'react';
import './Posts.scss'
import Post from '../Post/Post'
import axios from "axios";

export class Posts extends Component {
    postsEndPoint = 'http://mysite.com/wp-json/wp/v2/posts';
    state = {
        posts: [],
        isLoaded: false,
    }

    //run when the component is added to the page

    componentDidMount() {
        axios
            .get(this.postsEndPoint)
            .then((res) => {
                console.log('responce', res);

                //replace array in state
                this.setState({
                    posts: res.data,
                    isLoaded: true,
                })
            })
            .catch((err) => {
               console.log('api error', err);
            });
    }

    render() {
    return(
        <div className="posts">
            {this.state.isLoaded ? '' : <h2>loading</h2>}
            {this.state.posts.map((post) =>
                  <Post title={post.title.rendered} body={post.content.rendered} key={post.id}/>

            )}
         </div>
        )
    }
}



import React, {Component} from 'react';
import './Posts.scss'
import Post from '../Post/Post'
export class Posts extends Component {
    state = {
        posts: [
            {title: 'Post 1', body: 'blah blah blah blah'},
            {title: 'Post 2', body: 'yeah yeah yeah yeah'},
            {title: 'Post 3', body: 'sick sick sick sick'},
            ],
    }

    render() {
    return(
        <div className="posts">
            {this.state.posts.map((post) => (
                  <Post title={post.title} body={post.body} />
                )
            )}
         </div>
        )
    }
}



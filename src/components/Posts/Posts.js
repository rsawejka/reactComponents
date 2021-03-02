import React, {Component} from 'react';
import './Posts.scss'
import Post from '../Post/Post'
import GridList from "@material-ui/core/GridList";



export class Posts extends Component {

    render() {
    return(

        <div className="posts">
            <GridList cellHeight={180} className="grid">
            {this.props.posts.map((post) =>
                  <Post
                      title={post.title.rendered}
                      author={post._embedded.author[0].name}
                      authorImg={post._embedded.author[0].avatar_urls[24]}
                      key={post.id}
                      featuredImg={post._embedded['wp:featuredmedia'][0].source_url}
                      postUrl={post.link}
                      authorUrl={post._embedded.author[0].link}
                  />
            )}
            </GridList>
         </div>


        )
    }
}



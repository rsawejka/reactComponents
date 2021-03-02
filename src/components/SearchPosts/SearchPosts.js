import React, {Component} from 'react';
import axios from "axios";
import { Button, TextField } from '@material-ui/core';


export class SearchPosts extends Component {
    postsEndPoint = 'http://mysite.com/wp-json/wp/v2/posts';
    state = {
        search: '',
    }

    getPosts() {
        axios
            .get(this.postsEndPoint, {
                params: {
                    search: this.state.search,
                    _embed: 1,
                    per_page: 12,
                }
            })

            .then((res) => {
                console.log('responce', res);

              //return posts to the app/parent
                // (onSearchResult() is passed in from app as a prop)

                this.props.onSearchResult(res.data);
            })
            .catch((err) => {
                console.log('api error', err);
            });

    }

    handleSubmit(event){
    event.preventDefault();
    //only search if we have something to search on.
    if(this.state.search){
        this.getPosts();
    }

    }

    render() {
        return(
            <form className="search" onSubmit={(event)=> this.handleSubmit(event)}>
                <TextField
                    label="Search...."
                    variant="outlined"
                    value={this.state.search}
                    onChange={(event) => this.setState({search: event.target.value})}
                />
                <Button type="submit" variant="contained" color="primary">get posts</Button>
            </form>
        )
    }
}



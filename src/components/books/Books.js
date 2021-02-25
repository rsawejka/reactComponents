import React, {Component} from 'react';
import './Books.scss'
import Book from '../book/Book'
import axios from "axios";

export class Books extends Component {
    booksEndPoint = 'http://rsawejka.bitlampsites.com/wpd/wordpress/wordpressfinal/wp-json/wp/v2/books';
    state = {
        books: [],
        isLoaded: false,
    }

    //run when the component is added to the page

    componentDidMount() {
        axios
            .get(this.booksEndPoint)
            .then((res) => {
                console.log('responce', res);

                //replace array in state
                this.setState({
                    books: res.data,
                    isLoaded: true,
                })

            })
            .catch((err) => {
                console.log('api error', err);
            });


    }

    render() {
        return(
            <div className="Books">
                {this.state.isLoaded ? '' : <h2>loading</h2>}
                {this.state.books.map((book) =>
                    <Book title={book.title.rendered}
                          body={book.content.rendered}
                          featiredMedia={book._links['wp:featuredmedia'][0].href}
                          key={book.id}/>

                )}
            </div>
        )
    }
}


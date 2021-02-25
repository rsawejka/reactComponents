import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Book.scss';
import axios from "axios";

export class Book extends Component {

    state = {
        pics: [],
        isLoaded: false,
    }
    componentDidMount(){

        axios
            .get(this.props.featiredMedia)
            .then((res) => {
                console.log('responce', res);

                //replace array in state
                this.setState({
                    pics: res.data,
                    isLoaded: true,
                })
            })
            .catch((err) => {
                console.log('api error', err);
            });

    }
    render (){
        return(
            <div className="Book">
                <h3>{this.props.title}</h3>
                <p dangerouslySetInnerHTML={{__html: this.props.body}}></p>
                <img src={this.state.pics.source_url} />

            </div>
        )
    }
}







Book.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};

Book.defaultProps = {
    title: "post title",
    body: "default body",
};

export default Book;


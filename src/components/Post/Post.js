import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const Post = (props) => (
    <div className="Post">


        <GridListTile key="Subheader" cols={6} style={{ height: 'auto' }}>

            <img className="img" src={props.featuredImg} />
            <GridListTileBar
                actionIcon={
                    <img className="authorIcon" src={props.authorImg} />
                }
                title={<a className="link" href={props.postUrl}> {props.title} </a>}
                subtitle={<span>by: <a className="link" href={props.authorUrl}> {props.author}</a></span>}
                actionPosition={'left'}

            />
        </GridListTile>

    </div>

);


Post.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    authorImg: PropTypes.string,
    featuredImg: PropTypes.string,
    postUrl: PropTypes.string,
    authorUrl: PropTypes.string,


};

Post.defaultProps = {
    title: "post title",
    author: "default author",
    authorImg: "img url",
    featuredImg: "imgurl",
    postUrl: "post url",
    authorUrl: "author url",
};

export default Post;
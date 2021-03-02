import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const Post = (props) => (
<div className="Post">


        <GridListTile key="Subheader" cols={6} style={{ height: 'auto' }}>

            <img className="img" src={props.featuredImg} />
            <GridListTileBar
                actionIcon={
                    <img className="authorIcon" src={props.authorImg} />
                }
                title={props.title}
                subtitle={<span>by: {props.author}</span>}

            />
        </GridListTile>

</div>

);


Post.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    authorImg: PropTypes.string,
    featuredImg: PropTypes.string,


};

Post.defaultProps = {
    title: "post title",
    author: "default author",
    authorImg: "img url",
    featuredImg: "imgurl",
};

export default Post;

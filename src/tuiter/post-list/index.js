import React from "react";
import postsArray from './posts.json';
import "./index.css";
// import "/vendors/fontawesome/fontawesome-free-6.2.0-web/css/all.min.css"
// <link href="../../vendors/fontawesome/fontawesome-free-6.2.0-web/css/all.min.css" rel="stylesheet"/>
import PostListItem
    from "./post-list-item";

const PostList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostListItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostList;


import postItem from "./postItem.js";
import posts from "./posts.js"
import PostItem from "./postItem.js";

const PostList = () => {
    return (`       
                ${posts.map(post => {
                    return PostItem(post)
                 }).join('')
                }
           `);
}
export default PostList
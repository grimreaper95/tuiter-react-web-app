import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faComment, faRetweet, faUpload, faCheckCircle} from '@fortawesome/free-solid-svg-icons';


const PostListItem = (
    {
      post = {
          "_id": 123,
          "commentCount": "4.2K",
          "replyCount": "3.5K",
          "likeCount": "37.5K",
          "authorName": "Elon Musk",
          "avatarIcon": "../images/muskrocket.jpeg",
          "handle": "elonmusk",
          "time": "23h",
          "postContent": "Amazing show about <\a class=\"text-primary\" href=\"#\">@Inspiration4</a> mission!",
          "shareImage": "../images/inspiration4.jpeg",
          "shareTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
          "shareContent": "From training to launch to landing, this all access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space",
          "shareLink": "netflix.com"
        }
    }
) => {
    return (
        <div>


        <span className="wd-author-avatar"><img src={post.avatarIcon}/></span>
            <div className="wd-tuit-body">
                <div className="wd-author-name"> {post.authorName}  <FontAwesomeIcon icon={faCheckCircle} /></div>
                <div className="wd-author-handle"> @{post.handle} · {post.time}</div>
                <div className="wd-tuit-content">
                    {post.postContent}
                </div>
                <div className="wd-tuit-img-body">
                    <img className="wd-tuit-img" width="100%" height="100%" src={post.shareImage}/>
                    {/*<div className="wd-tuit-img-description">*/}
                        <div className="wd-tuit-img-title">{post.shareTitle}</div>
                        <div className="wd-tuit-img-text">{post.shareContent}</div>
                    {/*</div>*/}
                </div>
            </div>
            <div id="reaction-container " className="mt-3">
                <ul className="wd-reaction-bar justify-content-between ">
                    <li className="ms-5">
                        <a className="wd-reaction-tab wd-reaction-tab-unselected text-decoration-none" href="#">
                            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon> {post.commentCount}
                        </a>
                    </li>
                    <li>
                        <a className="wd-reaction-tab wd-reaction-tab-unselected text-decoration-none" href="#">
                            <FontAwesomeIcon icon={faRetweet} /> {post.replyCount}
                        </a>
                    </li>
                    <li>
                        <a className="wd-reaction-tab text-decoration-none" href="#">
                            <FontAwesomeIcon icon={faHeart} /> {post.likeCount}
                        </a>
                    </li>
                    <li>
                        <a className="wd-reaction-tab wd-reaction-tab-unselected text-decoration-none" href="#">
                            <FontAwesomeIcon icon={faUpload} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    );
}
export default PostListItem;
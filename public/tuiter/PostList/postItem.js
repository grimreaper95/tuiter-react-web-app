const PostItem = (post) => {
    return (`
        <span class="wd-author-avatar"><img src=${post.avatarIcon}></span>
        <div class="wd-tuit-body">
            <div class="wd-author-name"> ${post.authorName} <i class="fas fa-check-circle"></i> </div>
            <div class="wd-author-handle"> @${post.handle} · ${post.time}</div>
            <div class="wd-tuit-content">
                ${post.postContent}
            </div>
            <div class="wd-tuit-img-body">                
                <img class="wd-tuit-img" width="100%" height="100%" src=${post.shareImage}/>                              
                <div class="wd-tuit-img-description">
                    <div class="wd-tuit-img-title">${post.shareTitle}</div>
                    <div class="wd-tuit-img-text">${post.shareContent}</div>
                </div>
            </div>            
        </div>
        <div id="reaction-container " class="mt-3">
            <ul class="wd-reaction-bar justify-content-between ">
                <li class="ms-5">
                    <a class="wd-reaction-tab wd-reaction-tab-unselected text-decoration-none" href="for_you.html">
                        <i class="fa-regular fa-comment"></i> ${post.commentCount}
                    </a>
                </li>
                <li>
                    <a class="wd-reaction-tab wd-reaction-tab-unselected text-decoration-none" href="#">
                        <i class="fa-solid fa-retweet"></i> ${post.replyCount}
                    </a>
                </li>
                <li>
                    <a class="wd-reaction-tab text-decoration-none" href="#">
                        <i class="fa-regular fa-heart"></i> ${post.likeCount}
                    </a>
                </li>
                <li >
                    <a class="wd-reaction-tab wd-reaction-tab-unselected text-decoration-none" href="#">
                        <i class="fa-solid fa-upload"></i>
                    </a>
                </li>
            </ul>
        </div>
        <hr>
    `);
}
export default PostItem;
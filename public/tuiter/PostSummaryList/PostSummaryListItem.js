const PostSummaryListItem = (post) => {
    return (`
    <div class="list-group-item list-group-item-action post-summary">
        <div class="ps-4 py-2">
            <img src=${post.image} class="me-3 float-end rounded-4" height="70px" width="70px">                       
            <div class=" text-secondary h6 small"> ${post.topic}</div>
            <div class="h6 fw-bold"> ${post.userName} <i class="fas fa-check-circle"></i>            
            <div class="fw-light text-secondary d-inline">· ${post.time}</div>
            </div>
            <div class="h6 small fw-bold">${post.title}</div>
        </div>
        </div>
    `);
}
export default PostSummaryListItem;
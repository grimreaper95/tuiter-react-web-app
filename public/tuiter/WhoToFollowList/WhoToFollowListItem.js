const WhoToFollowListItem = (who) => {
    return(`
     <div class="list-group-item list-group-item-action ">
        <div class="row">
            <div class="col-2">
                <img class="rounded-circle img-fluid" width="100%" height="100%"
                     src=${who.avatarIcon}/>
            </div>
            <div class="col-6">
                <span class="fw-bold text-nowrap "> ${who.userName}  <i class="fas fa-check-circle"></i></span>
                <br>
                <span class="d-fg-color-gray">@${who.handle}</span>
            </div>
            <div class="col-4">
                <button class="btn btn-primary mt-1 rounded-pill float-end">
                    Follow
                </button>
            </div>
        </div>
    </div>
    `);
}
export default WhoToFollowListItem;
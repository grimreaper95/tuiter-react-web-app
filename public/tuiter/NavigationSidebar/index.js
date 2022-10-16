const NavigationSidebar = (active) => {

    let component = `<div class="list-group">
             <a class="list-group-item" href="/">
               <i class="fab fa fa-twitter"></i></a>                                  
               <!-- continue rest of list, e.g.,
                    Home, Explore, Notifications,  Messages, etc. -->                                    
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action 
                    ${active === 'home' ? 'btn-primary' : ''}">                                        
                    <i class="fa fa-home float-start p-2" aria-hidden="true"></i>
                    <div class="pt-1 d-none d-xl-inline-block"> Home </div></a>
                
                <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action
                ${active === 'explore' ? 'btn-primary' : ''}">
                    <i class="fa fa-hashtag float-start p-2" aria-hidden="true"></i>
                    <div class="pt-1 d-none d-xl-inline-block"> Explore </div></a>
                
                <a href="../notifications.html" class="list-group-item list-group-item-action
                ${active === 'notifications' ? 'btn-primary' : ''}">
                    <i class="fa-regular fa-bell float-start p-2" aria-hidden="true"></i>
                    <div class="pt-1 d-none d-xl-inline-block">Notifications</div></a>
                
                <a href="../messages.html" class="list-group-item list-group-item-action
                ${active === 'messages' ? 'btn-primary' : ''}">
                    <i class="fa-regular fa-envelope float-start p-2" aria-hidden="true"></i>
                    <div class="pt-1 d-none d-xl-inline-block">Messages</div></a>
                
                <a href="../bookmarks/index.html" class="list-group-item list-group-item-action
                ${active === 'bookmarks' ? 'btn-primary' : ''}">
                    <i class="fa-regular fa-bookmark float-start p-2" aria-hidden="true"></i>
                    <div class="pt-1 d-none d-xl-inline-block">Bookmarks</div></a>
                
                <a href="../lists.html" class="list-group-item list-group-item-action
                ${active === 'lists' ? 'btn-primary' : ''}">
                    <i class="fas fa-list-ul float-start p-2" aria-hidden="true"></i>
                    <div class="pt-1 d-none d-xl-inline-block">Lists</div></a>
                
                <a href="../profile.html" class="list-group-item list-group-item-action
                ${active === 'profile' ? 'btn-primary' : ''}">
                    <i class="fa-regular fa-user float-start p-2" aria-hidden="true"></i>
                    <span class="pt-1 d-none d-xl-inline-block">Profile</span></a>
                    
                <a id = "more" href="../more.html" class="list-group-item list-group-item-action pe-3
                ${active === 'more' ? 'btn-primary' : ''}">
                    <span class="fa-stack my-0 pe-2 py-0  wd-text-color-gray">
                        <i class="fa-regular fa-circle fa-stack-1x wd-text-color-gray  m-0 pe-2"></i>
                        <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse  wd-text-color-gray  m-0  pe-2"></i>
                            </span><span class="pt-1 d-none d-xl-inline-block">More </span>
                 </a>
           </div>
           
           <div class="d-grid mt-2">
             <a href="tweet.html"
                class="btn btn-primary btn-block rounded-pill">
                Tweet</a>
           </div>`;
    // const parser = new DOMParser();
    // let doc = parser.parseFromString(component, "text/html");
    // const child = doc.firstChild.childNodes;
    // console.log(child)
    // child.addClass('btn-primary');
    // console.log($(doc));
    // switch (active) {
    //
    //     case 'home' : $(component).addClass('btn-primary');
    //     break;
    // }

    return component;
}
export default NavigationSidebar;


import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                Home
            </Link>
            <Link to="explore" className={`list-group-item
                    ${active === 'explore' || active === undefined ?'active':''}`}>
                Explore
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>
            <Link to="../notifications" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                Notifications
            </Link>
            <Link to="../messages" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Messages
            </Link>
            <Link to="../bookmarks" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </Link>
            <Link to="../lists" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                Lists
            </Link>
            <Link to="../profile" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                Profile
            </Link>
            <Link to="../more" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                More
            </Link>
        </div>
    );
};
export default NavigationSidebar;


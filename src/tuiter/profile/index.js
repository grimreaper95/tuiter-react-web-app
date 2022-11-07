import React from "react";
import {useSelector} from "react-redux";
import User from "./user"
import PostSummaryItem from "../post-summary-list/post-summary-item";
import WhoToFollowListItem from "../who-to-follow-list/who-to-follow-list-item";
// import "./index.css";

const ProfileComponent = () => {

    const userDetails = useSelector(state => state.userDetails)
    return(
        <ul className="list-group">
            {
                <User
                    key={userDetails._id}
                    user={userDetails}/>

            }
        </ul>
    );
};

export default ProfileComponent;
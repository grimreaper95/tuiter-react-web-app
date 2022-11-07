import React from "react";
import {useSelector} from "react-redux";
import EditProfile from "./edit-profile"
import PostSummaryItem from "../post-summary-list/post-summary-item";
import WhoToFollowListItem from "../who-to-follow-list/who-to-follow-list-item";
// import "./index.css";

const EditProfileComponent = () => {
    const profileDetails = useSelector(state => state.userDetails)
    return(
        <ul className="list-group">
            {
                // profileDetails.map(profile =>
                    <EditProfile
                        key={profileDetails._id}
                        editProfile={profileDetails}/>
                // )
            }
        </ul>
    );
};

export default EditProfileComponent;
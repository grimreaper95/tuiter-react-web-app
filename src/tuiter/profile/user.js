import React from "react";
import "./index.css";
import {faArrowLeft,faMapMarker,faCakeCandles,faCalendar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const User = (
    {
        user = {
            "id": 1,
            "firstName": "Jose", "lastName": "Annunziato", "handle": "@jannunzi",
            "profilePicture": "jose.png", 	"bannerPicture": "polyglot.png",
            "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
            "website": "youtube.com/webdevtv",
            "location": "Boston, MA",	"dateOfBirth": "7/7/1968",	"dateJoined": "4/2009",
            "followingCount": 340,	"followersCount": 223
        }
    }) => {

    return(
        <>
            <div>
                <div className="float-start">
                    <a href="home" className="overflow-auto text-black"> <FontAwesomeIcon icon={faArrowLeft}/> </a>
                </div>

                <div className="float-start ps-4">
                    <div className="fw-bold h5"> {user.firstName} {user.lastName}
                        <div className="h6">6,114 Tweets</div>
                    </div>
                </div>

                <img height="200px" width="100%" className="wd-banner " src="images/wallpaper.png"></img>
                <img width="100px" height="100px" className="position-relative profile-img" src="images/parag_face.jpeg"></img>
                <Link to="../edit-profile" className="btn-edit text-decoration-none text-black float-end rounded-pill">Edit Profile</Link>
                <div>
                    <h3 >{user.firstName} {user.lastName}</h3>
                    <h6 className="text-secondary">{user.handle}</h6>
                    <h6 className="text-secondary">{user.bio}</h6>
                </div>
                <ul className="wd-user-bar">
                    <li className="">
                        <a className="wd-reaction-tab wd-reaction-tab-unselected text-decoration-none" href="for_you.html">
                            <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon> {user.location}
                        </a>
                    </li>
                    <li>
                        <a className="wd-reaction-tab wd-reaction-tab-unselected text-decoration-none" href="#">
                            <FontAwesomeIcon icon={faCakeCandles} /> Born {user.dateOfBirth}
                        </a>
                    </li>
                    <li>
                        <a className="wd-reaction-tab text-decoration-none" href="#">
                            <FontAwesomeIcon icon={faCalendar} /> Joined {user.dateJoined}
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default User;

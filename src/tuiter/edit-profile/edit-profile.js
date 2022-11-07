import React, {useState} from "react";
import "./index.css"
import {Link} from "react-router-dom";
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import {saveProfile} from "../profile/profile-reducer"


const EditProfile = (
    {
        editProfile = {
            "id": 1,
            "firstName": "Jose", "lastName": "Annunziato", "handle": "@jannunzi",
            "profilePicture": "jose.png", 	"bannerPicture": "polyglot.png",
            "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
            "website": "youtube.com/webdevtv",
            "location": "Boston, MA",	"dateOfBirth": "7/7/1968",	"dateJoined": "4/2009",
            "followingCount": 340,	"followersCount": 223
        }
    }) => {

    const [profile, setProfile] = useState(editProfile);

    const dispatch = useDispatch();

    let newUserProfile = {...editProfile}

    const saveUserProfile = () => {
        setProfile(newUserProfile);
        dispatch(saveProfile(newUserProfile));
    }


    const nameChangeHandler = (event) => {
        const name = event.target.value;
        newUserProfile.firstName = name.split(" ")[0];
        newUserProfile.lastName = name.split(" ")[1];
        // setProfile(newUserProfile);
    }

    const bioChangeHandler = (event) => {
        const bio = event.target.value;
        // let newUserProfile = {...editProfile}
        newUserProfile.bio = bio;
        // setProfile(newUserProfile);
    }

    const locationChangeHandler = (event) => {
        const location = event.target.value;
        // let newUserProfile = {...editProfile}
        newUserProfile.location = location;
        // setProfile(newUserProfile);
    }

    const webSiteChangeHandler = (event) => {
        const webSite = event.target.value;
        // let newUserProfile = {...editProfile}
        newUserProfile.website = webSite;
        // setProfile(newUserProfile);
    }

    const birthDateChangeHandler = (event) => {
        const birthDate = event.target.value;
        newUserProfile.dateOfBirth = birthDate;
    }


    return(
        <>
            <div>
                <div className="justify-content-between">
                    <Link to="../profile">
                        <i className="bi bi-x-lg float-start pe-4 me-4 w-10 text-black"
                        ></i>
                    </Link>


                    <h5 className="fw-bold float-start">Edit Profile</h5>
                    <Link to="../profile"
                       className="float-end mb-3 ps-3 pe-3 py-1 edit-btn text-decoration-none text-white bg-black rounded-pill"
                       onClick={() => saveUserProfile()}
                    >
                        Save

                    </Link>
                </div>

                <img height="200px" width="100%" className="wd-banner " src="images/wallpaper.png"></img>
                <img width="100px" height="100px" className="position-relative profile-img" src="images/parag_face.jpeg"></img>
                <br/>

                <label htmlFor="text-fields-name">Name</label>
                <br/>
                <input id="text-fields-name" placeholder="Name"
                       onChange={nameChangeHandler}
                       defaultValue={`${editProfile.firstName} ${editProfile.lastName}`}/>



                <br/>


                <br/>
                <label>Bio</label><br/>

                <textarea name="Text1" cols="70" rows="5"
                          onChange={bioChangeHandler}
                          defaultValue={`${editProfile.bio}`}/>

                <br/>
                <br/>
                <label>Location</label><br/>
                <input id="text-fields-name" placeholder="Location" size="72"
                       onChange={locationChangeHandler}
                       defaultValue={`${editProfile.location}`}/>

                <br/>
                <br/>
                <label>Website</label><br/>
                <input id="text-fields-name" placeholder="Website" size="72"
                       onChange={webSiteChangeHandler}
                       defaultValue={`${editProfile.website}`}/>

                <br/>
                <br/>
                <label>Birth Date</label><br/>
                <input id="text-fields-name" placeholder="Location" size="72"
                       onChange={birthDateChangeHandler}
                       defaultValue={`${editProfile.dateOfBirth}`}/>

                <br/>
                <br/>
                Switch to Professtional
                <a href="home" className="float-end "> <FontAwesomeIcon icon={faArrowRight}/> </a>
            </div>
        </>
    );
};
export default EditProfile;
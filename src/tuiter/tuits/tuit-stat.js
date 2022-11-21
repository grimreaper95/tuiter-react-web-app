import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faHeart,
    faComment,
    faRetweet,
    faShareNodes,
    faCheckCircle,
    faThumbsDown
} from '@fortawesome/free-solid-svg-icons';
import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk}
    from "../../services/tuits-thunks";
import {Link} from "react-router-dom";


const TuitStat = (
    {
        tuit =   { "_id": 123, "topic": "Space", "userName": "SpaceX",
            "liked":true, "replies": 123, "retuits": 432, "likes": 2435, "handle": "@spacex",
            "dislikes": 123, "tuitContent": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",   "image": "../images/spacex-logo.jpeg" }
    }
) => {
    const dispatch = useDispatch();
    return (
        <div id="reaction-container " className="mt-3">
            <ul className="wd-reaction-bar justify-content-between ">
                <li className="ms-5">
                    <a className="wd-reaction-tab wd-reaction-tab-unselected text-decoration-none" href="for_you.html">
                        <FontAwesomeIcon icon={faComment}></FontAwesomeIcon> {tuit.replies}
                    </a>
                </li>
                <li>
                    <a className="wd-reaction-tab wd-reaction-tab-unselected text-decoration-none" href="#">
                        <FontAwesomeIcon icon={faRetweet} /> {tuit.retuits}
                    </a>
                </li>
                <li>
                    <a    className={`wd-reaction-tab text-decoration-none ${tuit.likes > 0 ?'wd-reaction-tab-selected':''}`}>
                        <FontAwesomeIcon icon={faHeart} onClick={() => dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))} />
                    </a>
                    {tuit.likes}
                </li>
                <li>
                    <a    className={`wd-reaction-tab text-decoration-none}`}>
                        <FontAwesomeIcon icon={faThumbsDown} onClick={() => dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }))} />
                    </a>
                    {tuit.dislikes}
                </li>
                <li>
                    <a className="wd-reaction-tab wd-reaction-tab-unselected text-decoration-none" href="#">
                        <FontAwesomeIcon icon={faShareNodes} />
                    </a>
                </li>
            </ul>
        </div>

    );
}
export default TuitStat;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faComment, faRetweet, faShareNodes, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import React from "react";
import {Link} from "react-router-dom";


const TuitStat = (
    {
        tuit =   { "_id": 123, "topic": "Space", "userName": "SpaceX",
            "liked":true, "replies": 123, "retuits": 432, "likes": 2435, "handle": "@spacex",
            "tuitContent": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",   "image": "../images/spacex-logo.jpeg" }
    }
) => {
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
                    <a    className={`wd-reaction-tab text-decoration-none ${tuit.liked === true ?'wd-reaction-tab-selected':''}`} href="#">
                        <FontAwesomeIcon icon={faHeart} />
                    </a>
                    {tuit.likes}
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
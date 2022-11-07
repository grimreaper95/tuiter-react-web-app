import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faComment, faRetweet, faUpload, faCheckCircle} from '@fortawesome/free-solid-svg-icons';


const TuitItem = (
    {
        tuit =   { "_id": 123, "topic": "Space", "userName": "SpaceX",
            "liked":true, "replies": 123, "retuits": 432, "likes": 2435, "handle": "@spacex",
            "tuitContent": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",   "image": "../images/spacex-logo.jpeg" }
    }
) => {

    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <div>
            <span className="wd-author-avatar"><img src={tuit.image}/></span>
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(tuit._id)}></i>

            <div className="wd-tuit-body">
                <div className="wd-author-name"> {tuit.userName}  <FontAwesomeIcon icon={faCheckCircle} /></div>
                <div className="wd-author-handle"> {tuit.handle} · {tuit.time}</div>
                <div className="wd-tuit-content">
                    {tuit.tuitContent}
                </div>
            </div>
        </div>

    );
}
export default TuitItem;
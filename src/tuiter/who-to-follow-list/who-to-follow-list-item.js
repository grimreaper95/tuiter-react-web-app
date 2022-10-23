import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <div className="list-group-item list-group-item-action ">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle img-fluid" width="100%" height="100%"
                         src={who.avatarIcon}/>
                </div>
                <div className="col-6">
                    <span className="fw-bold text-nowrap "> {who.userName} <FontAwesomeIcon icon={faCheckCircle} /></span>
                    <br/>
                        <span className="d-fg-color-gray">{who.handle}</span>
                </div>
                <div className="col-4">
                    <button className="btn btn-primary mt-1 rounded-pill float-end">
                        Follow
                    </button>
                </div>
            </div>
        </div>
    );
};
export default WhoToFollowListItem;


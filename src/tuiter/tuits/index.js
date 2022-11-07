import React from "react";
import TuitItem
    from "./tuit-item";
import TuitStat
    from "./tuit-stat";
import {useSelector} from "react-redux"

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group ">
            {
                tuitsArray.map(tuit =>
                    <div className ="list-group-item">
                    <TuitItem
                        key={tuit._id} tuit={tuit}/>
                    <TuitStat
                        key={tuit._id + 1} tuit={tuit}/>
                    </div>
                )
            }
        </ul>
    );
};
export default TuitsList;


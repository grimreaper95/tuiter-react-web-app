import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import TuitItem
    from "./tuit-item";
import {findTuitsThunk}
    from "../../services/tuits-thunks"
import TuitStat
    from "./tuit-stat";


const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(
        <ul className="list-group ">
            {
            loading &&
            <li className="list-group-item">
                Loading...
            </li>
            }
            {
                tuits?.slice(0).reverse().map(tuit =>
                    <div className ="list-group-item"
                         key={(tuit.key_id)?tuit.key_id : tuit._id} tuit={tuit}>
                    <TuitItem
                        tuit={tuit}/>
                    <TuitStat
                        tuit={tuit}/>
                    </div>

                )
            }
        </ul>
    );
};
export default TuitsList;


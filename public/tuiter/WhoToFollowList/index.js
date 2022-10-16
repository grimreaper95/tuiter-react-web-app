import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./whos.js"

const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
           <!-- continue here -->          
            ${whos.map(whoItem => {
                return WhoToFollowListItem(whoItem)
            }).join('')
            }
           </ul>
    `);
}
export default WhoToFollowList

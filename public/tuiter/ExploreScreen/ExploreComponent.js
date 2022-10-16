import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <div class="input-group pt-1 pb-3">
                <input class=" form-control search-input border-end-1 rounded-pill ps-5 me-2 border-0 " type="text" placeholder="Search Tuiter">
                <i class="zindex-tooltip fa fa-magnifying-glass position-absolute my-1 ms-3 pt-1"></i>               
                <i class="fa fa-cog fa-2x settings-icon mt-1 text-primary ps-4 " aria-hidden="true"></i>
            </div>
           <ul class="nav mb-2 text-white">
                <li class="me-1 my-1">
                    <a class="p-2 btn-primary" href="for_you.html">
                        For you
                    </a>
                </li>
                <li class="m-1">
                    <a class="p-2" href="trending.html">
                        Trending
                    </a>
                </li>
                <li class="m-1">
                    <a class="p-2" href="news.html">
                        News
                    </a>
                </li>
                <li class="m-1">
                    <a class="p-2" href="sports.html">
                        Sports
                    </a>
                </li>
                <li class="m-1">
                    <a class="p-2"  href="entertainment.html">
                        Entertainment
                    </a>
                </li>
               
           </ul>
<!--           <div >-->
            <img class="card-img  mb-2 border-top border-secondary position-relative d-block" width=600px height="400px" src = "../images/starship.jpeg" alt="Tutorial" >
            <div class="d-flex align-items-end img-text">SpaceX's Starship</div>
<!--           </div>-->
           <!-- image with overlaid text -->
<!--           <div class = "recommendation-post position-relative">-->
<!--                <img class="recommendation-image mb-2 w-100 border-top border-secondary position-absolute" src = "../images/starship.jpeg" alt="Tutorial" >-->
<!--                <div class = "recommendation-image-title align-bottom ps-4 b-5 h3 fw-bold position-absolute mt-5">SpaceX's Starship                   -->
<!--            </div>-->
<!--           <div class="w-100 d-block">-->
           ${PostSummaryList()}
<!--            </div>-->
           
    `);
}
export default ExploreComponent;


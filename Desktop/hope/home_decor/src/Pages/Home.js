import React from "react";
import Top from "../Components/Top";
import Slider from "../Components/Slider";

const Home = () => {
    return(
        <div className="home-page" id="home">
          <div className="top-container"><Top /></div>
          <div className="slider"><Slider /></div>
          <div className="collections">
            <div className="collections-text">
                <h1 style={{textDecoration:"underline"}}>OUR COLLECTIONS</h1>
                <h1>All Time Favourites</h1>
            </div>
            <div className="collection-gallery">
            <div className="collections-image"><figure><img src=""></img></figure><figcaption></figcaption></div>
            <div className="collections-image"><figure><img src=""></img></figure><figcaption></figcaption></div>
            <div className="collections-image"><figure><img src=""></img></figure><figcaption></figcaption></div>
            <div className="collections-image"><figure><img src=""></img></figure><figcaption></figcaption></div>
            </div>
          </div>
        </div>
    );
};

export default Home;
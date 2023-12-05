import "./banner.css";
import bannerImage from "../../../assets/banner.png";
const Banner = () => {
    return (
        <div className="banner-Wrapper">
            <div className="content-banner">
                <div className="banner">
                    <h1 className="line1">Stay Curious.</h1>
                    <h3 className="line2">
                        Discover stories, thinking, and expertise from writers
                        on any topic.
                    </h3>

                    {/* <button className="start-button">Start Reading</button> */}
                </div>

                <div className="imageDiv">
                    <img className="bannerImage" src={bannerImage} />
                </div>
            </div>
        </div>
    );
};

export default Banner;

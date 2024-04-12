import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { IoCloseOutline } from "react-icons/io5";
import "./MorePics.css";
import pic from "./../../images/570.jpg";


export default function MorePics({ setShowMorePics, allImages, imageAlt }) {
    return (
        <section className="morePicsSection">
                <div className="iconCloseWrapper">
                    <IoCloseOutline
                        className="closeGalleryIcon"
                        onClick={() => setShowMorePics(false)}
                    />
                </div>

            <div className="imagesDirWrapper">
                <div className="dirIconrDiv"><GrLinkPrevious className="dirIcon" /></div>

                <div className="imagesDiv">
                    <img src={pic} alt="pic" />
                    <p>1 / 2</p>
                </div>

                <div className="dirIconrDiv"><GrLinkNext className="dirIcon" /></div>
            </div>
        </section>
    );
}

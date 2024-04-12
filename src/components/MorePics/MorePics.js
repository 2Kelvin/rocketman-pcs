import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { IoCloseOutline } from "react-icons/io5";
import "./MorePics.css";
import pic from "./../../images/570.jpg";


export default function MorePics({ setShowMorePics, allImages, imageAlt }) {
    return (
        <section className="morePicsSection">
            <div className="iconCloseWrapper">
                <div className="closeDivIcon">
                    <IoCloseOutline
                        className="closeGalleryIcon"
                        onClick={() => setShowMorePics(false)}
                    />
                </div>
            </div>

            <div className="imagesDirWrapper">
                <button className="dirIconBtn"><GrLinkPrevious className="dirIcon" /></button>

                <div className="imagesDiv">
                    <img src={pic} alt="pic" />
                    <p>1 / 2</p>
                </div>

                <button className="dirIconBtn"><GrLinkNext className="dirIcon" /></button>
            </div>
        </section>
    );
}

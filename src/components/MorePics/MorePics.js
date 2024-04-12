import { useState } from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { IoCloseOutline } from "react-icons/io5";
import "./MorePics.css";
import OneImage from "../OneImage/OneImage";


export default function MorePics({ setShowMorePics, allImages, imageAlt }) {
    let [imgindex, setImgindex] = useState(0);

    // logic for next and previous image button navigation
    let cannotGoToPrevImage = imgindex === 0;
    let cannotGoToNextImage = imgindex === allImages.length - 1;

    // these will be passed on to OneImage reusable component
    const imagesCount = allImages.length;
    // accessing each picture in the array using their index
    const onePicture = allImages[imgindex];

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
                <button className="dirIconBtn" disabled={cannotGoToPrevImage}>
                    <GrLinkPrevious
                        className="dirIcon"
                        onClick={() => {
                            // checking if there's a previous image to click to
                            if (!cannotGoToPrevImage) {
                                setImgindex(imgindex - 1);
                            }
                        }}
                    />
                </button>

                <div className="imagesDiv">
                    <OneImage
                        key={imgindex}
                        onePicture={onePicture}
                        imageAlt={imageAlt}
                        imgIndex={imgindex}
                        imagesCount={imagesCount}
                    />
                </div>

                <button className="dirIconBtn" disabled={cannotGoToNextImage}>
                    <GrLinkNext
                        className="dirIcon"
                        onClick={() => {
                            // checking if there's a next image to click to
                            if (!cannotGoToNextImage) {
                                setImgindex(imgindex + 1);
                            }
                        }}
                    />
                </button>
            </div>
        </section>
    );
}

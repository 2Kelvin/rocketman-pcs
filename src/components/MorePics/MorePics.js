import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
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
        <div className="morePicsTransparentBg">
            <section className="sectionMorePics">
                <div className="wrapCloseIconDiv">
                    <div className="divCloseIcon">
                        <IoCloseOutline
                            className="closeIcon"
                            onClick={() => setShowMorePics(false)}
                        />
                    </div>
                </div>

                <div className="wrapBtnsAndImage">
                    <div className="theBtnsDiv">
                        <button disabled={cannotGoToPrevImage}>
                            <IoIosArrowBack
                                className="directionIcon"
                                onClick={() => {
                                    // checking if there's a previous image to click to
                                    if (!cannotGoToPrevImage) {
                                        setImgindex(imgindex - 1);
                                    }
                                }}
                            />
                        </button>

                        <button disabled={cannotGoToNextImage}>
                            <IoIosArrowForward
                                className="directionIcon"
                                onClick={() => {
                                    // checking if there's a next image to click to
                                    if (!cannotGoToNextImage) {
                                        setImgindex(imgindex + 1);
                                    }
                                }}
                            />
                        </button>
                    </div>

                    <OneImage
                        key={imgindex}
                        onePicture={onePicture}
                        imageAlt={imageAlt}
                        imgIndex={imgindex}
                        imagesCount={imagesCount}
                    />
                </div>
            </section>
        </div>
    );
}

import "./OneImage.css";


export default function OneImage({ eachImage, imageAlt, allImages }) {
    return (
        <>
            <img src={eachImage} alt={imageAlt} loading="lazy"/>
            <p>{allImages.indexOf(eachImage) + 1} of {allImages.length}</p>
        </>
    );
}

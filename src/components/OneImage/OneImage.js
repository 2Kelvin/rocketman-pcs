export default function OneImage({ onePicture, imageAlt, imgIndex, imagesCount }) {
    return (
        <div className="imageAndParagraphDiv">
            <p>{imgIndex + 1} of {imagesCount}</p>
            <img src={onePicture} alt={imageAlt} loading="lazy" />
        </div>
    );
}

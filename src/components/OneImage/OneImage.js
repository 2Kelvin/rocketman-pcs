export default function OneImage({ onePicture, imageAlt, imgIndex, imagesCount }) {
    return (
        <>
            <img src={onePicture} alt={imageAlt} loading="lazy" />
            <p>{imgIndex + 1} of {imagesCount}</p>
        </>
    );
}

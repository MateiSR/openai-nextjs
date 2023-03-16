import { useState } from "react";

export default function ImageRenderer(props) {
    /* set state for large image */
    const [largeImage, setLargeImage] = useState('');

    /* show large picture overlay */
    const showLargePicture = (item) => {
        setLargeImage(item);
    }

    /* close large picture overlay */
    const closeLargePicture = () => {
        setLargeImage('');
    }

    return (
        <div className="container">
            <h1>Image Results:</h1>
            <div className="image-container-grid">
                {props.answer.map((item) => (
                    <img className="image" src={item} onClick={() => showLargePicture(item)} key={item} />
                ))}
            </div>
            {largeImage && (
                <div className="large-image-container" onClick={closeLargePicture}>
                    <img src={largeImage} alt="large image" />
                </div>
            )}
        </div>
    );
}
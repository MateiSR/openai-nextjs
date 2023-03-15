import { Component } from "react";

export default class ImageRenderer extends Component {

    /* show large picture overlay */
    showLargePicture = (item) => {
        return () => {
            /*if already opened one, close previous */
            const oldLargeImage = document.querySelector(".large-image-container");
            if (oldLargeImage) {
            oldLargeImage.remove();
            }
            const largeImage = document.createElement("div");
            largeImage.classList.add("large-image-container");
            largeImage.innerHTML = `<img src=${item} alt="large image" />`;
            document.body.appendChild(largeImage);
            largeImage.addEventListener("click", () => {
            largeImage.remove();
            });
        };
    }

    render() {
        return (
        <div className="container">
            <h1>Image Results:</h1>
            <div className="image-container-grid">
            {this.props.answer.map((item) => (
                <img className="image" src={item} onClick={this.showLargePicture(item)} />
            ))}
            </div>
        </div>
        );
    }
    }
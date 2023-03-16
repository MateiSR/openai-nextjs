import { useState } from "react";
import ImageRenderer from "../components/imageRenderer";

export default function MyPage() {
  // Set up state variables
  const [formValues, setFormValues] = useState({
    prompt: "",
    res: "256x256",
    number: "1",
  });
  const [answer, setAnswer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Define function to handle form submission
  async function handleSubmit(e) {
    e.preventDefault(); // Prevent form from submitting normally
    setIsLoading(true); // Set loading state to true

    try {
      // Send a POST request to the server with the prompt, resolution, and number of images
      const response = await fetch("/api/get-image", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: formValues.prompt,
          res: formValues.res,
          number: parseInt(formValues.number),
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json(); // Get JSON data from server response
      setAnswer(data.resUrls); // Set state with URLs of generated images
    } catch (error) {
      console.error("Error:", error);
    }

    setIsLoading(false); // Set loading state to false
  }

  // Define function to handle changes in input fields
  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="container">
      <h1>Enter Image Prompt:</h1>
      <form className="our-form" onSubmit={handleSubmit}>
        <input
          className="prompt-field"
          type="text"
          disabled={isLoading}
          name="prompt"
          value={formValues.prompt}
          onChange={handleInputChange}
          placeholder="Prompt"
        />
        <select
          className="choice-field"
          disabled={isLoading}
          name="res"
          value={formValues.res}
          onChange={handleInputChange}
        >
          <option value="256x256">256x256</option>
          <option value="512x512">512x512</option>
          <option value="1024x1024">1024x1024</option>
        </select>
        <select
          className="choice-field"
          disabled={isLoading}
          name="number"
          value={formValues.number}
          onChange={handleInputChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <button className="submit-button">Generate</button>
      </form>

      {isLoading && <div className="loading-spinner"></div>}

      {!isLoading && <ImageRenderer answer={answer} />}
    </div>
  );
}
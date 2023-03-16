// Importing useState Hook from the 'react' module
import { useState } from "react"

// Declaring and exporting MyPage component
export default function MyPage() {

  // Initializing state with useState Hook
  const [formValues, setFormValues] = useState({
    prompt: "",
    answer: "",
    isLoading: false,
    model: "text-davinci-003",
    maxTokens: 1000
  });

  // Handling form submission
  async function handleSubmit(e) {
    e.preventDefault();
    setFormValues({ ...formValues, isLoading: true });

    const response = await fetch("/api/get-answer", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formValues)
    });

    const data = await response.json();
    setFormValues({ ...formValues, answer: data.text.trim(), isLoading: false });
  }

  // Handling input changes
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  }

  // Returning the component
  return (
  // Replacing <div> tags with Next.js components
  <main className="container">
  <h1>Enter Text Prompt:</h1>

  <form className="our-form" onSubmit={handleSubmit}>
    <input className="prompt-field" type="text" name="prompt" value={formValues.prompt} onChange={handleChange} />
    <select className="choice-field" name="model" value={formValues.model} onChange={handleChange}>
      <option value="text-davinci-003">Davinci</option>
      <option value="text-curie-001">Curie</option>
      <option value="text-babbage-001">Babbage</option>
      <option value="text-ada-001">Ada</option>
    </select>
    <select className="choice-field" name="maxTokens" value={formValues.maxTokens} onChange={handleChange}>
      <option value="64">64</option>
      <option value="128">128</option>
      <option value="256">256</option>
      <option value="512">512</option>
      <option value="1024">1024</option>
      <option value="2048">2048</option>
    </select>
    <button className="submit-button">Go!</button>
  </form>

  {formValues.isLoading && <div className="loading-spinner"></div>}

  <div className="answer-area">{formValues.answer}</div>
  </main>
  )
  }
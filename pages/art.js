import { useState } from "react"
import ImageRenderer from "../components/imageRenderer"

export default function MyPage() {
  const [prompt, setPrompt] = useState("")
  const [res, setRes] = useState("")
  const [number, setNumber] = useState("")
  const [answer, setAnswer] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    const response = await fetch("/api/get-image", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: prompt, res: res, number: parseInt(number) })
    })
    const data = await response.json()
    setAnswer(data.resUrls)
    setIsLoading(false)
    return data
  }

  function handleChange(e) {
    setPrompt(e.target.value)
  }

  function handleChooseRes(e) {
    setRes(e.target.value)
  }

  function handleNumber(e) {
    setNumber(e.target.value)
  }


  return (
    <div className="container">
      <h1>Enter Image Prompt:</h1>
      <form className="our-form" onSubmit={handleSubmit}>
        <input className="prompt-field" type="text" disabled={isLoading} onChange={handleChange} placeholder="Prompt" />
        <select className="choice-field" type="text" disabled={isLoading} onChange={handleChooseRes}>
          <option value="256x256">256x256</option>
          <option value="512x512">512x512</option>
          <option value="1024x1024">1024x1024</option>
        </select>
        <select className="choice-field" type="number" disabled={isLoading} onChange={handleNumber}>
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
  )
}
//{isLoading == false && <img className="img-result" src={answer}/>}
//
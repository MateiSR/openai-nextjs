// Import the required libraries from openai
import { Configuration, OpenAIApi } from "openai";

// Create a new configuration object with API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI
});

// Create a new instance of OpenAi API with the configuration object
const openai = new OpenAIApi(configuration);

// Export the handler function
export async function handler(req, res) {
  // Check if prompt exists and is a string
  if (!req.body.prompt || typeof req.body.prompt !== "string") {
    return res.status(400).json({ error: "Invalid prompt provided." });
  }

  try {
    // Create a new completion with the provided prompt, text model, and max tokens
    const response = await openai.createCompletion({
      model: req.body.model || "text-davinci-003",
      prompt: req.body.prompt,
      temperature: 0,
      max_tokens: req.body.maxTokens || 1000
    });

    // Send back the first text choice from the response
    return res.status(200).json({ text: response.data.choices[0].text });
  } catch (error) {
    // Send back
    return res.status(500).json({ error: error.message });
  }
}
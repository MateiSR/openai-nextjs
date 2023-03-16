import { Configuration, OpenAIApi } from "openai";

// Create a configuration object with API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI,
});

// Initialize an OpenAI API instance with the configuration
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  //Check if the request body's `prompt` property is a string
  if (typeof req.body.prompt === "string") {
    // Call the OpenAI API's `createImage()` method with the prompt and other optional parameters
    const response = await openai.createImage({
      prompt: `${req.body.prompt}`,
      n: req.body.number || 1,
      size: req.body.res || "512x512",
    });
    // Extract the generated image URLs from the response's `data` property
    const resUrls = response.data.data.map((item) => item.url);
    // Send the URLs as a JSON object in the response body
    res.status(200).json({ resUrls: resUrls });
  } else {
    // If the `prompt` property is not a string, return a default image URL
    res.status(200).json({ text: "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_1722.jpg" });
  }
}
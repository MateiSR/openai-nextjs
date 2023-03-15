const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  apiKey: process.env.OPENAI
})
const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
  if (typeof req.body.prompt === "string") {

    const response = await openai.createImage({
      prompt: `${req.body.prompt}`,
      n: req.body.number || 1,
      size: req.body.res || "512x512",
    })
    const resUrls = response.data.data.map((item) => item.url)
    res.status(200).json({ resUrls: resUrls })
    /*
    res.status(200).json({ resUrls: ["https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_1722.jpg","https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_1722.jpg","https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_1722.jpg","https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_1722.jpg"] })
    */
  } else {
    res.status(200).json({ text: "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_1722.jpg" })
  }
}

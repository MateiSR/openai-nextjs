# Text + Image GPT Next.js Example

This repository is a demonstration of how to create a publicly available website using Next.js and OpenAI's GPT-3 API. Unlike other examples, this website does not expose your OpenAI API key to the public.

## Getting Started

To get started, clone this repository to your local machine and install the required dependencies using `npm install`.

Next, create a `.env` file in the root directory of the project and add your OpenAI API key as follows:

```
OPENAI_API_KEY=<your-api-key-here>
```

Once you have added your API key, you can run the project locally using `npm run dev`. This will start a development server at `localhost:3000`.

## Building and Deploying

To build the project for production use `npm run build`. This will generate a production-ready build in the `out` directory.

You can then preview the production build locally using `npm run start`.

To deploy the project, you can use a free Vercel account. Simply push the project to a GitHub repository and connect it to Vercel. Vercel will automatically build and deploy the project whenever you push changes to the repository.

## Features

This project demonstrates how to generate text and images using OpenAI's GPT-3 API. The website is built using Next.js, which makes it easy to create serverless applications that can be deployed to the cloud.

The website contains a simple form where users can enter a prompt and choose an image category. The website then uses the OpenAI API to generate text and an image based on the user's input.

The website also includes a simple caching mechanism that stores previously generated responses in memory. This helps to reduce the number of API calls and improve response times.

## Limitations

This example is designed to be a simple demonstration of how to use OpenAI's GPT-3 API with Next.js. As such, it has several limitations:

- The website does not include any authentication or authorization mechanisms. This means that anyone can access the website and generate responses using your OpenAI API key.
- The website is not optimized for performance or scalability. It is designed to be a simple demonstration and may not perform well under heavy load.
- The website does not include any error handling mechanisms. If the OpenAI API fails to respond or returns an error, the website will not display an error message to the user.

## Conclusion

This example demonstrates how to create a serverless website that uses OpenAI's GPT-3 API to generate text and images. While it has limitations, it provides a good starting point for building more advanced applications.

If you plan to use this example in a production environment, it is important to implement appropriate security measures and error handling mechanisms. Additionally, you may want to consider optimizing the website for performance and scalability.

Overall, this project demonstrates the power and flexibility of Next.js and OpenAI's GPT-3 API. With these tools, it is possible to quickly build complex and sophisticated applications that can generate high-quality text and images.

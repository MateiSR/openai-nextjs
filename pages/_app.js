// Importing the required modules from Next.js
import Link from "next/link";
import "../styles/global.css";

// Defining the functional component with props
export default function MyApp({ Component, pageProps }) {
  // Returning the component with props and the footer component
  return (
    <>
      <Component {...pageProps} />
      <div className="footer">
        <p>
          {/* Linking to the homepage and art page */}
          <Link href="/">Text</Link>
          <Link href="/art">Art</Link>
          <br />
          {/* Displaying a message about the website's code generation */}
          <span>The code for this website was partially generated/rewritten by OpenAI's CodeGPT models.</span>
        </p>
      </div>
    </>
  );
}
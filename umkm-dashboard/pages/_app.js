// pages/_app.js

import '../styles/globals.css'; // Import file global CSS
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

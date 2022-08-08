import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen h-full bg-clay">
      <img
        src="images/logos/light-gray.svg"
        alt="logo"
        className="fixed w-[95%] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      />
      <div className="h-full relative sm:w-[500px] mx-auto z-40">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;

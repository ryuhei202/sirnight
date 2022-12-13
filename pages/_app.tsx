import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Script from "next/script";
import { QueryClient, QueryClientProvider } from "react-query";
import "tailwindcss/tailwind.css";
import SEO from "../next-seo.config";
import { GA_ID } from "../src/lib/gtag";
import { GOOGLE_TAG_MANAGER_ID } from "../src/lib/gtm";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      {GA_ID !== "" && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}');
        `}
          </Script>
        </>
      )}
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');`}
      </Script>
      <DefaultSeo {...SEO} />
      <div className="w-screen h-full bg-clay font-medium">
        <img
          src="/images/logos/light-gray.svg"
          alt="logo"
          className="fixed w-[95%] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
        />
        <div className="h-full relative bg-clay sm:w-[500px] mx-auto z-40 sm:border-x border-themeGray">
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </div>
      </div>
    </>
  );
}

export default MyApp;

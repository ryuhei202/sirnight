import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { GA_ID } from "../src/lib/gtag";
type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <title>UWear公式サイト</title>
          <meta
            name="description"
            content="メンズファッションレンタルサービスUWear"
          />
          <link rel="icon" href="/favicon/favicon_head.png" />
          {GA_ID === "" ? (
            <></>
          ) : (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import { GOOGLE_TAG_MANAGER_ID } from "../src/lib/gtm";
type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" href="/favicon/favicon_head.png" />
          {/* もしもアフィリエイトトラッキングタグ */}
          <Script src="https://r.moshimo.com/af/r/maftag.js" />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              />`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

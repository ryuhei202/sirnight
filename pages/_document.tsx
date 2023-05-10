import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { GOOGLE_TAG_MANAGER_ID } from "../src/lib/gtm";
type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" href="/favicon/favicon_head.png" />
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
          {/* もしもアフィリエイトトラッキングタグ */}
          <script src="https://r.moshimo.com/af/r/maftag.js"></script>
        </body>
      </Html>
    );
  }
}

export default Document;

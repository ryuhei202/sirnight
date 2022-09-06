import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

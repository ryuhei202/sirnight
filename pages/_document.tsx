import NextDocument, { Head, Html, Main, NextScript } from "next/document";
type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" href="/favicon/favicon_head.png" />
          {typeof window !== undefined && (
            <script
              type="text/javascript"
              src="//typesquare.com/3/tsst/script/ja/typesquare.js?630eda9dcf5c46eea556398eac1e02e5"
              charSet="utf-8"
            ></script>
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

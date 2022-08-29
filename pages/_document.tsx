import NextDocument, { Head, Html, Main, NextScript } from "next/document";
type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" href="/favicon/favicon_head.png" />
          <script
            type="text/javascript"
            src="//typesquare.com/3/tsst/script/ja/typesquare.js?630c3bb40834454282f339adac1e02e5"
            charSet="utf-8"
          ></script>
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

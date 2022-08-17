import NextDocument, { Head, Html, Main, NextScript } from "next/document";
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

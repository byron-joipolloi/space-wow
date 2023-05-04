import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#ACCFF7" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" /> 
      </Head>
      <body>
        <main>
          <Main />
        </main>

        <NextScript />
      </body>
    </Html>
  )
}

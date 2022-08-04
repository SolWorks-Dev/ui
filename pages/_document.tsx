import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📁</text></svg>" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1D1326" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link href="https://fonts.googleapis.com/css?family=Roboto|Poppins" rel="stylesheet" />
        <title>SolApps: The directory for the best Solana applications</title>
        <meta name="robots" content="index,follow" />
        <meta name="description"
          content="SolApps is an application directory for the best Solana projects. New curated projects added weekly." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SolApps_" />
        <meta name="twitter:creator" content="@SolApps_" />
        <meta property="og:title" content="SolApps" />
        <meta property="og:description"
          content="SolApps is an application directory for the best Solana projects. New curated projects added weekly." />
        <meta property="og:url" content="https://solapps.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://solapps.dev/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="SolApps" />
        <link rel="canonical" href="https://solapps.dev" />
        <meta name="msapplication-TileColor" content="#1D1326" />
        <meta name="next-head-count" content="19" />
      </Head>
      <body>
        <Main />
        <div id="root"></div>
        <NextScript />
      </body>
    </Html>
  )
}
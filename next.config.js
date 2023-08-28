const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  sentry: {
    hideSourceMaps: true,
    disableServerWebpackPlugin: process.env.NEXT_PUBLIC_ENV === "development",
    disableClientWebpackPlugin: process.env.NEXT_PUBLIC_ENV === "development",
  },
};

const sentryWebpackPluginOptions = {
  silent: false,
  authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
  org: process.env.NEXT_PUBLIC_SENTRY_ORG,
  project: process.env.NEXT_PUBLIC_SENTRY_PROJECT,
};

module.exports = {
  ...withSentryConfig(nextConfig, sentryWebpackPluginOptions),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

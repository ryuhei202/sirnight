const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

if (process.env.NEXT_PUBLIC_ENV === undefined) {
  nextConfig.sentry = {
    hideSourceMaps: true,
  };
}

const sentryWebpackPluginOptions = {
  silent: false,
  authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
  org: process.env.NEXT_PUBLIC_SENTRY_ORG,
  project: process.env.NEXT_PUBLIC_SENTRY_PROJECT,
  include: ".",
  ignore: ["node_modules"],
};

module.exports =
  process.env.NEXT_PUBLIC_ENV === undefined
    ? nextConfig
    : withSentryConfig(nextConfig, sentryWebpackPluginOptions);

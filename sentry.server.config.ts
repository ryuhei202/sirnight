import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://dad5de7f8a6b466ebe4d0ec1db4018d7@o1202316.ingest.sentry.io/6653672",
  tracesSampleRate: 0.3,
});

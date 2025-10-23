import type { NextConfig } from "next";
import { withSentryConfig } from '@sentry/nextjs';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default withSentryConfig(nextConfig, {
  silent: true,
});

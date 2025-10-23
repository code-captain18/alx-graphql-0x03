import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || 'https://example@example.ingest.sentry.io/example',
  
  // Configure your environment
  environment: process.env.NODE_ENV || 'development',
  
  // Only send to Sentry in production unless explicitly testing
  enabled: process.env.NODE_ENV === 'production' || process.env.SENTRY_TESTING === 'true',
  
  // Set tracing options
  tracesSampleRate: 1.0,
  
  // Set debug to true for testing
  debug: process.env.NODE_ENV === 'development',
});
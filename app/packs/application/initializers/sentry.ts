import * as Sentry from "@sentry/react";

declare const SENTRY_DSN: string;

Sentry.init({ dsn: SENTRY_DSN });

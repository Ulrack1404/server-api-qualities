import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

function init() {
  Sentry.init({
    dsn: "https://606998e5e7994032801b430df3920803@o4504266373988352.ingest.sentry.io/4504266379296768",
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}
function log(error) {
  Sentry.captureException(error);
}

const logger = {
  init,
  log,
};

export default logger;

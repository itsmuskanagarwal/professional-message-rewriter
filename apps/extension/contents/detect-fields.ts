import type { PlasmoCSConfig } from 'plasmo';

export const config: PlasmoCSConfig = {
  matches: [
    'https://*.slack.com/*',
    'https://mail.google.com/*',
    'https://*.atlassian.net/*',
    'https://teams.microsoft.com/*',
  ],
  run_at: 'document_idle',
};

// P3 task: detect active text fields on supported platforms and inject the
// ToneWise floating button. Stub only — implementation lives in apps/extension
// per Frontend Architect ownership in the master spec.

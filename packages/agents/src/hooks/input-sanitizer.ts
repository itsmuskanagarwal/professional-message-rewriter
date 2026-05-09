export interface SanitizeResult {
  sanitized: string;
  placeholders: Record<string, string>;
}

export function inputSanitizer(_text: string): SanitizeResult {
  // Strips PII (emails, phone numbers, names) and replaces with tokens.
  // Tokens are restored post-rewrite. Implementation in P1.
  throw new Error('inputSanitizer: not implemented (P1)');
}

export function restorePlaceholders(_text: string, _placeholders: Record<string, string>): string {
  throw new Error('restorePlaceholders: not implemented (P1)');
}

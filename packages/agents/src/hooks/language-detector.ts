export interface DetectedLanguage {
  language: string;
  confidence: number;
}

export async function languageDetector(_text: string): Promise<DetectedLanguage> {
  throw new Error('languageDetector: not implemented (P1)');
}

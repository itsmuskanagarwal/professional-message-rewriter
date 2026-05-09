import type { Intent } from '../types/index.js';

export async function intentClassifier(_message: string): Promise<Intent> {
  throw new Error('intentClassifier: not implemented (P1)');
}

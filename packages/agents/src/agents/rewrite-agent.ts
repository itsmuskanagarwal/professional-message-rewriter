import type { Intent, Platform, TonePreset } from '../types/index.js';

export interface RewriteAgentInput {
  message: string;
  preset: TonePreset;
  platform: Platform;
  intent: Intent;
}

export async function rewriteAgent(_input: RewriteAgentInput): Promise<string> {
  throw new Error('rewriteAgent: not implemented (P1)');
}

import type { TonePreset } from '../types/index.js';

export interface TonePromptSpec {
  systemPrompt: string;
  examples: Array<{ input: string; output: string }>;
  doRules: string[];
  dontRules: string[];
  assertivenessTarget: number;
}

export function toneMapping(_preset: TonePreset): TonePromptSpec {
  // Maps each preset to a structured prompt spec. Authored by Domain Researcher (P0/P1).
  throw new Error('toneMapping: not implemented — content authored in P0 by Domain Researcher');
}

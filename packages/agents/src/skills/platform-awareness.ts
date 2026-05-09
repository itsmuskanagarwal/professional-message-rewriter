import type { Platform } from '../types/index.js';

export interface PlatformRules {
  maxSentences: number | null;
  needsSalutation: boolean;
  needsSignoff: boolean;
  formalityFloor: 'casual' | 'semi-formal' | 'formal';
  bannedTokens: string[];
}

export function platformAwareness(_platform: Platform): PlatformRules {
  throw new Error('platformAwareness: not implemented (P1)');
}

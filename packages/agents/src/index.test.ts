import { describe, expect, it } from 'vitest';
import {
  toneOrchestrator,
  intentClassifier,
  rewriteAgent,
  grammarAgent,
  clarificationAgent,
  inputSanitizer,
  restorePlaceholders,
  lengthGuardrail,
  toneVerifier,
  languageDetector,
  toneMapping,
  platformAwareness,
  culturalCalibration,
  fewShotExamples,
} from './index.js';

describe('@tonewise/agents — P0 public surface', () => {
  it('exports every symbol the orchestrator pipeline depends on', () => {
    const surface = [
      toneOrchestrator,
      intentClassifier,
      rewriteAgent,
      grammarAgent,
      clarificationAgent,
      inputSanitizer,
      restorePlaceholders,
      lengthGuardrail,
      toneVerifier,
      languageDetector,
      toneMapping,
      platformAwareness,
      culturalCalibration,
      fewShotExamples,
    ];
    for (const fn of surface) {
      expect(typeof fn).toBe('function');
    }
  });

  it('synchronous P0 stubs throw "not implemented"', () => {
    expect(() => inputSanitizer('hi')).toThrow(/not implemented/i);
    expect(() => toneMapping('humble-polite')).toThrow(/not implemented/i);
    expect(() => platformAwareness('slack')).toThrow(/not implemented/i);
    expect(() => culturalCalibration('US')).toThrow(/not implemented/i);
    expect(() => fewShotExamples('humble-polite', 'slack')).toThrow(/not implemented/i);
  });

  it('async P0 stubs reject with "not implemented"', async () => {
    await expect(
      toneOrchestrator({ message: 'hi', preset: 'humble-polite', platform: 'slack' }),
    ).rejects.toThrow(/not implemented/i);
    await expect(intentClassifier('hi')).rejects.toThrow(/not implemented/i);
    await expect(grammarAgent('hi')).rejects.toThrow(/not implemented/i);
    await expect(languageDetector('hi')).rejects.toThrow(/not implemented/i);
  });
});

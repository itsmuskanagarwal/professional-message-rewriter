export interface LengthGuardrailOptions {
  inputLength: number;
  maxRatio: number;
}

export async function lengthGuardrail(
  _output: string,
  _opts: LengthGuardrailOptions,
): Promise<string> {
  // Triggers a compression pass if output exceeds maxRatio * inputLength.
  // Default ratio for chat presets is 1.5 (per spec section 6).
  throw new Error('lengthGuardrail: not implemented (P1)');
}

import { useState } from 'react';

export default function Popup() {
  const [status] = useState<'idle' | 'rewriting'>('idle');

  return (
    <div style={{ width: 320, padding: 16, fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>ToneWise</h1>
      <p style={{ fontSize: 12, color: '#7a7670', marginTop: 4 }}>
        Workplace communication, calibrated.
      </p>
      <p style={{ fontSize: 12, marginTop: 16 }}>
        P0 scaffold. The popup UI ships in P3 (week 7–8).
      </p>
      <p style={{ fontSize: 11, color: '#7a7670', marginTop: 8 }}>Status: {status}</p>
    </div>
  );
}

// Sound, made in the browser (no audio files): a quiet ambient pad, plus short cues for clicks,
// hovering and travelling between topics. Nothing plays until the visitor has interacted with the page,
// and everything can be muted; the choice is remembered on this device.

let ctx: AudioContext | undefined, master: GainNode | undefined, pad: GainNode | undefined;
let muted = false, lastHover = 0;

function read() { try { return localStorage.getItem('sound') === 'off'; } catch { return false; } }
function write(off: boolean) { try { localStorage.setItem('sound', off ? 'off' : 'on'); } catch { /* private window: just don't remember */ } }

function context() {
  if (!ctx) {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return undefined;
    ctx = new AC(); master = ctx.createGain(); master.gain.value = muted ? 0 : 1; master.connect(ctx.destination);
  }
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
}

/** One short tone that fades out: the building block for the cues. */
function tone(from: number, to: number, seconds: number, volume: number, type: OscillatorType = 'sine') {
  const c = context(); if (!c || !master || muted) return;
  const o = c.createOscillator(), g = c.createGain(), t = c.currentTime;
  o.type = type; o.frequency.setValueAtTime(from, t); o.frequency.exponentialRampToValueAtTime(to, t + seconds);
  g.gain.setValueAtTime(volume, t); g.gain.exponentialRampToValueAtTime(0.0001, t + seconds);
  o.connect(g).connect(master); o.start(t); o.stop(t + seconds + 0.02);
}

export const sound = {
  get muted() { return muted; },
  init() { muted = read(); },
  setMuted(off: boolean) { muted = off; write(off); if (ctx && master) master.gain.setTargetAtTime(off ? 0 : 1, ctx.currentTime, 0.15); },
  /** Start the ambient pad. Call from a click, or the browser will refuse. */
  startAmbient() {
    const c = context(); if (!c || !master || pad) return;
    pad = c.createGain(); pad.gain.value = 0; pad.gain.setTargetAtTime(0.045, c.currentTime, 2.5);
    const filter = c.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 520;
    const sweep = c.createOscillator(), depth = c.createGain(); sweep.frequency.value = 0.05; depth.gain.value = 180; sweep.connect(depth).connect(filter.frequency); sweep.start(); // slowly opens and closes the tone
    for (const [freq, detune] of [[110, -6], [164.8, 5], [220, 3], [277.2, -4]] as const) { // a soft open chord
      const o = c.createOscillator(); o.type = 'triangle'; o.frequency.value = freq; o.detune.value = detune; o.connect(filter); o.start();
    }
    filter.connect(pad).connect(master);
  },
  click() { tone(720, 420, 0.09, 0.07); },
  hover() { const now = performance.now(); if (now - lastHover < 90) return; lastHover = now; tone(1250, 1100, 0.04, 0.018, 'triangle'); },
  /** Travelling to another topic: a short rush of filtered noise. */
  travel() {
    const c = context(); if (!c || !master || muted) return;
    const length = Math.floor(c.sampleRate * 0.9), buffer = c.createBuffer(1, length, c.sampleRate), data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource(), filter = c.createBiquadFilter(), g = c.createGain(), t = c.currentTime;
    src.buffer = buffer; filter.type = 'bandpass'; filter.Q.value = 0.8;
    filter.frequency.setValueAtTime(300, t); filter.frequency.exponentialRampToValueAtTime(2400, t + 0.45); filter.frequency.exponentialRampToValueAtTime(400, t + 0.9);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.05, t + 0.35); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
    src.connect(filter).connect(g).connect(master); src.start(t);
  },
};

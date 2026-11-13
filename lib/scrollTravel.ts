// Scroll-driven travel between topics.
// Scrolling does not set a position directly; it adds speed. The speed fades by itself, and once the
// input stops the position settles on the nearest topic. The topics form a loop: after the last comes the first.
// `progress` is a plain number that keeps counting (…, 5.9, 6.0, 6.1 …); whole numbers are topics.

export function createScrollTravel(stops: number, onIndex: (index: number) => void, onSettled: (settled: boolean) => void) {
  const state = { progress: 0, velocity: 0, direction: 1 };
  let target: number | null = null, origin = 0, elapsed = 0, duration = 1, lastInput = -1000, index = 0, settled = true, enabled = false;
  const wrap = (i: number) => ((i % stops) + stops) % stops;
  /** Start a timed, eased journey to a position: slow start, slow arrival. Longer trips take a little longer. */
  const travelTo = (to: number) => { target = to; origin = state.progress; elapsed = 0; duration = 0.7 + 1.1 * Math.sqrt(Math.min(3, Math.abs(to - origin))); state.velocity = 0; };

  return {
    state,
    get stops() { return stops; },
    set stops(n: number) { stops = Math.max(1, n); },
    setEnabled(on: boolean) { enabled = on; if (!on) state.velocity = 0; },
    /** Add speed from a wheel or touch movement (pixels). */
    impulse(pixels: number) {
      if (!enabled) return;
      target = null; lastInput = performance.now();
      state.velocity = Math.max(-2.6, Math.min(2.6, state.velocity + pixels * 0.0018));
    },
    /** Travel to a topic by the shortest way round the loop. */
    goTo(i: number) {
      const here = state.progress, base = Math.round(here), offset = wrap(i) - wrap(base);
      travelTo(base + (offset > stops / 2 ? offset - stops : offset < -stops / 2 ? offset + stops : offset));
    },
    step(direction: number) { if (enabled) travelTo(Math.round(target ?? state.progress) + direction); },
    nearest: () => wrap(Math.round(state.progress)),
    /** Call once per frame. */
    update(dt: number) {
      const before = state.progress;
      if (target !== null) {
        elapsed += dt;
        const t = Math.min(1, elapsed / duration), e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        state.progress = origin + (target - origin) * e;
        if (t >= 1) { state.progress = target; target = null; }
      } else {
        state.velocity *= Math.exp(-dt * 2.6); // friction
        state.progress += state.velocity * dt;
        const idle = performance.now() - lastInput > 160;
        if (idle && Math.abs(state.velocity) < 0.35) travelTo(Math.round(state.progress + state.velocity * 0.3)); // settle on the nearest topic
      }
      const moved = state.progress - before;
      if (Math.abs(moved) > 1e-5) state.direction = Math.sign(moved);
      const i = wrap(Math.round(state.progress));
      if (i !== index) { index = i; onIndex(i); }
      const nowSettled = Math.abs(state.progress - Math.round(state.progress)) < 0.06;
      if (nowSettled !== settled) { settled = nowSettled; onSettled(settled); }
    },
  };
}
export type ScrollTravel = ReturnType<typeof createScrollTravel>;

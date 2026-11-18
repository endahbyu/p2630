// Line icons, one per shape, as SVG path data on a 24×24 grid. Used by TopicIcon.vue and painted onto the 3D tokens.
import type { ShapeName } from '~/lib/shapes';
const ring = (cx: number, cy: number, r: number) => `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0`;
export const ICONS: Record<ShapeName, string[]> = {
  globe: [ring(12, 12, 9), 'M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18'],
  flask: ['M10 3h4M10.5 3v5.2a6 6 0 1 0 3 0V3', 'M7.2 15h9.6'],
  bottle: ['M10 2.5h4M10.5 2.5v3.2L8.5 9v10.5a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5V9l-2-3.3V2.5', 'M8.5 13h7'],
  bulb: ['M9 17.5h6M10 20.5h4', 'M9 17.5c0-2.2-3-3.4-3-7.2a6 6 0 0 1 12 0c0 3.8-3 5-3 7.2'],
  chain: ['M3 6.5h16.5v12H3z', 'M19.5 6.5l1.5-1.5v12l-1.5 1.5', 'M3 6.5l1.5-1.5H21'], // the sixth topic: a landscape book
  target: [ring(12, 12, 9), ring(12, 12, 5), ring(12, 12, 1.2)],
};

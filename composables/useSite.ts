// Shared state for the whole experience: content, which screen is showing, which topic is active,
// and which page (if any) is open in the side panel. The open page is mirrored in the URL hash,
// so a link to a page works on any static host.
import type { ShapeName } from '~/lib/shapes';

export type Block =
  | { type: 'heading'; text: string }
  | { type: 'text'; text: string }
  | { type: 'columns'; left: string; right: string }
  | { type: 'figure'; caption: string; src?: string }
  | { type: 'carousel'; slides: { caption: string; src?: string }[] }
  | { type: 'video'; caption: string; src?: string; poster?: string }
  | { type: 'button'; label: string; to: string };
export type Page = { slug: string; title: string; lead?: string; blocks: Block[] };
export type Zone = { id: string; title: string; summary: string; shape: ShapeName; pages: Page[] };
export type Site = {
  ui: { brand: string; loading: string; tutorial: { title: string; text: string; button: string }[]; menu: string; menuShort: string; close: string; open: string; hintScroll: string; hintPointer: string; hintFocus: string; cursorExplore: string; cursorFocus: string; description: string; soundOn: string; soundOff: string };
  zones: Zone[];
};
type Phase = 'loading' | 'tutorial' | 'explore';

export function useSite() {
  const site = useState<Site | null>('site', () => null);
  const phase = useState<Phase>('phase', () => 'loading');
  const zoneIndex = useState('zone', () => 0);
  const menuOpen = useState('menu', () => false);
  const pageSlug = useState<string | null>('page', () => null);
  const focused = useState('focused', () => false); // true once a topic has been entered: the stage moves closer and shows the topic's points

  const zones = computed(() => site.value?.zones ?? []);
  const zone = computed(() => zones.value[zoneIndex.value]);
  const page = computed(() => {
    for (const z of zones.value) { const p = z.pages.find((x) => x.slug === pageSlug.value); if (p) return p; }
    return null;
  });

  async function load() {
    const base = useRuntimeConfig().app.baseURL;
    site.value = await $fetch<Site>(`${base}content/en.json`);
    const fromHash = () => { const slug = location.hash.replace(/^#\/?/, ''); if (slug) openPage(slug, false); else pageSlug.value = null; };
    fromHash();
    window.addEventListener('hashchange', fromHash); // back/forward and pasted links
  }
  function goToZone(i: number) {
    zoneIndex.value = Math.max(0, Math.min(zones.value.length - 1, i));
  }
  function openPage(slug: string, updateHash = true) {
    const i = zones.value.findIndex((z) => z.pages.some((p) => p.slug === slug));
    if (i < 0) return;
    zoneIndex.value = i; pageSlug.value = slug; menuOpen.value = false;
    if (updateHash) history.replaceState(null, '', `#/${slug}`);
  }
  function closePage() {
    pageSlug.value = null;
    history.replaceState(null, '', location.pathname + location.search);
  }

  return { site, phase, zones, zone, zoneIndex, menuOpen, page, pageSlug, focused, load, goToZone, openPage, closePage };
}

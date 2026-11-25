// Keyboard focus for an overlay that covers the page (the topics menu, a content sheet):
//   · when it opens, focus moves inside it (to `initial`, or else the overlay itself);
//   · while it is open, Tab and Shift+Tab cycle through its own controls only, never the page behind it;
//   · when it closes, focus returns to the control that was focused before it opened (the menu button, a token…).
// Escape is handled by the page (pages/index.vue). The overlay's root should carry role="dialog" and aria-modal="true".
import type { Ref } from 'vue';

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function useFocusTrap(root: Ref<HTMLElement | undefined | null>, open: Ref<boolean>, initial?: () => HTMLElement | null | undefined) {
  let before: HTMLElement | null = null;

  function focusables() {
    const el = root.value; if (!el) return [];
    return [...el.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((e) => e.offsetParent !== null || e === document.activeElement);
  }
  function onKey(e: KeyboardEvent) {
    if (e.key !== 'Tab' || !open.value) return;
    const list = focusables(); if (!list.length) { e.preventDefault(); root.value?.focus(); return; }
    const first = list[0], last = list[list.length - 1], active = document.activeElement as HTMLElement | null;
    const inside = !!active && !!root.value?.contains(active);
    if (e.shiftKey && (active === first || !inside)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && (active === last || !inside)) { e.preventDefault(); first.focus(); }
  }

  watch(open, (now, was) => {
    if (now && !was) {
      before = document.activeElement as HTMLElement | null;
      document.addEventListener('keydown', onKey);
      // wait for the overlay to be in the page (it mounts inside a <Transition>)
      nextTick(() => requestAnimationFrame(() => { const target = initial?.() ?? root.value; target?.focus({ preventScroll: true }); }));
    } else if (!now && was) {
      document.removeEventListener('keydown', onKey);
      const back = before; before = null;
      // after the page has re-rendered: the control that opened the overlay may only show again once it is closed
      nextTick(() => { if (back && document.contains(back) && back.offsetParent !== null) back.focus({ preventScroll: true }); });
    }
  }, { immediate: true });
  onBeforeUnmount(() => document.removeEventListener('keydown', onKey));
}

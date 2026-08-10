/**
 * Theme configuration.
 *
 * One palette, two modes. The neutral ramp carries the whole design; the accent
 * appears only on links, focus rings and active states — never on backgrounds,
 * never as a glow. To retheme the site, change `--accent` in both modes.
 */

export const THEME = {
  dark: {
    '--bg':         '#0a0a0a',
    '--bg-2':       '#101010',
    '--surface':    '#141414',
    '--card':       '#161616',
    '--card-hover': '#1c1c1c',

    '--border':     'rgba(255, 255, 255, 0.09)',
    '--border-2':   'rgba(255, 255, 255, 0.16)',

    '--accent':       '#ff5c63',
    '--accent-light': '#ff8a8f',
    '--accent-dim':   'rgba(255, 92, 99, 0.10)',

    '--ok':         '#4ade80',

    '--text':       '#ededed',
    '--text-2':     '#a1a1a1',
    '--text-3':     '#6f6f6f',

    '--shadow-sm':  '0 1px 2px rgba(0, 0, 0, 0.4)',
  },

  light: {
    '--bg':         '#ffffff',
    '--bg-2':       '#fafafa',
    '--surface':    '#ffffff',
    '--card':       '#fafafa',
    '--card-hover': '#f4f4f4',

    '--border':     'rgba(0, 0, 0, 0.09)',
    '--border-2':   'rgba(0, 0, 0, 0.16)',

    '--accent':       '#d92d38',
    '--accent-light': '#b31f29',
    '--accent-dim':   'rgba(217, 45, 56, 0.07)',

    '--ok':         '#15803d',

    '--text':       '#0a0a0a',
    '--text-2':     '#525252',
    '--text-3':     '#8f8f8f',

    '--shadow-sm':  '0 1px 2px rgba(0, 0, 0, 0.06)',
  },
};

/** Applies a mode's CSS custom properties to :root */
export function applyTheme(mode) {
  const root = document.documentElement;
  Object.entries(THEME[mode] ?? THEME.dark).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

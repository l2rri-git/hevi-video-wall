// Turns an inline CSS string into a React style object (cached).
const cache = new Map();
const camel = (p) => (p.startsWith('--') ? p : p.replace(/^-ms-/, 'ms-').replace(/-([a-z])/g, (_, c) => c.toUpperCase()));
export function css(str) {
  const hit = cache.get(str);
  if (hit) return hit;
  const out = {};
  let depth = 0,
    quote = null,
    start = 0;
  const decls = [];
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (quote) {
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") quote = ch;
    else if (ch === '(') depth++;
    else if (ch === ')') depth--;
    else if (ch === ';' && depth === 0) {
      decls.push(str.slice(start, i));
      start = i + 1;
    }
  }
  decls.push(str.slice(start));
  for (const d of decls) {
    const k = d.indexOf(':');
    if (k < 0) continue;
    const prop = d.slice(0, k).trim(),
      val = d.slice(k + 1).trim();
    if (prop && val) out[camel(prop)] = val;
  }
  if (cache.size > 5000) cache.clear();
  cache.set(str, out);
  return out;
}

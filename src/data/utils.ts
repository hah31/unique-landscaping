const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  if (path.startsWith('#') || path.startsWith('tel:') || path.startsWith('http') || path.startsWith('mailto:')) {
    return path;
  }
  // Handle hash links like /#services → /unique-landscaping/#services
  if (path.startsWith('/#')) {
    return `${base}/${path.slice(1)}`;
  }
  if (path === '/') {
    return `${base}/`;
  }
  return `${base}${path}`;
}

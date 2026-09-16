/** GitHub Pages project slug — keep in sync with next.config.ts */
export const BASE_PATH = "/tasty-corner-demo";

export function withBase(path: string): string {
  if (!path) return BASE_PATH;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}

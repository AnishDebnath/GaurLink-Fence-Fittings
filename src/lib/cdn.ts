const IMAGE_BASE = (
  (import.meta.env.VITE_ASSET_BASE_URL as string | undefined) ||
  'https://res.cloudinary.com/charuenterprises/image/upload/v1790553339'
).replace(/\/+$/, '');

const VIDEO_BASE = (
  (import.meta.env.VITE_ASSET_VIDEO_BASE_URL as string | undefined) ||
  'https://res.cloudinary.com/charuenterprises/video/upload/v1790552998'
).replace(/\/+$/, '');

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov'];

/**
 * Cloudinary flat URL: base + /filename.ext
 * Images use VITE_ASSET_BASE_URL, videos use VITE_ASSET_VIDEO_BASE_URL.
 */
export function assetUrl(path: string): string {
  const clean = path.replace(/^\/+/, '');
  const isVideo = VIDEO_EXTENSIONS.some((ext) => clean.toLowerCase().endsWith(ext));
  return `${isVideo ? VIDEO_BASE : IMAGE_BASE}/${clean}`;
}

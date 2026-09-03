const CDN_BASE_URL = '';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
}: OptimizedImageProps) {
  const isExternal = src.startsWith('http');

  const optimizedSrc = isExternal && CDN_BASE_URL
    ? `${CDN_BASE_URL}${src}?tr=w-${width},f-auto,q-auto`
    : src;

  const srcSet = isExternal && CDN_BASE_URL
    ? `${CDN_BASE_URL}${src}?tr=w-${Math.round(width / 2)},f-auto,q-auto ${Math.round(width / 2)}w, ${CDN_BASE_URL}${src}?tr=w-${width},f-auto,q-auto ${width}w`
    : undefined;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: `${width} / ${height}`,
        backgroundColor: '#f3f4f6',
      }}
    >
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={srcSet ? `(max-width: 600px) ${Math.round(width / 2)}px, ${width}px` : undefined}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        className={className}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  );
}

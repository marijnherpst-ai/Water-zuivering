import Image from 'next/image';

export default function ProductAfbeelding({ src, alt, className = '', sizes = '(min-width: 768px) 40vw, 90vw', priority = false }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-edge bg-gradient-to-b from-white to-bg ${className}`}>
      <div aria-hidden="true" className="absolute left-1/2 bottom-[6.5%] h-3 w-[38%] -translate-x-1/2 rounded-full bg-ink/25 blur-md" />
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-contain px-8 pt-8 pb-10"
      />
    </div>
  );
}

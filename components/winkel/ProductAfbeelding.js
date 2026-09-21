import Image from 'next/image';

export default function ProductAfbeelding({ src, alt, className = '', sizes = '(min-width: 768px) 40vw, 90vw', priority = false }) {
  return (
    <div className={`relative overflow-hidden bg-bg rounded-2xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-contain p-6 drop-shadow-[0_18px_22px_rgba(15,23,42,0.18)]"
      />
    </div>
  );
}

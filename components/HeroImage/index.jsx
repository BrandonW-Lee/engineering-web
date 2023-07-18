import Image from 'next/image';

export default function HeroImage({ alt, src }) {
  return (
    <div className="relative h-1/2">
      <Image
        alt={alt}
        src={src}
        objectFit="cover"
        objectPosition="center"
        priority
        fill
      />
    </div>
  );
}

import Image from 'next/image';

export default function HeroImage({ alt, src }) {
  return (
    <div className="relative h-1/2">
      <Image className="object-cover" alt={alt} src={src} priority fill />
    </div>
  );
}

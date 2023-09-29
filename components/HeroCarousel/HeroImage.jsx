import Image from 'next/image';

export default function HeroImage({ alt, src }) {
  return (
    <div className="relative h-80 md:h-[800px]">
      <Image className="object-cover" src={src} alt={alt} priority fill />
    </div>
  );
}

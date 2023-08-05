import Image from 'next/image';

import { TypographyH1 } from '../ui/typography/TypographyH1';
import { TypographyH3 } from '../ui/typography/TypographyH3';

export default function HeroImage({ alt, src }) {
  return (
    <div className="relative h-80 md:h-[750px]">
      <Image className="object-cover" alt={alt} src={src} priority fill />
      <div className="text-white text-center absolute p-4 md:p-12 bg-black -bottom-20 md:left-1/2 md:-translate-x-1/2">
        <TypographyH1>Welcome to THE BRIDGE</TypographyH1>
        <TypographyH3>&quot; a place to connect &quot;</TypographyH3>
      </div>
    </div>
  );
}

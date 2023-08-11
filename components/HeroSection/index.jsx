import { TypographyH1 } from '../ui/typography/TypographyH1';
import { TypographyH3 } from '../ui/typography/TypographyH3';
import HeroCarousel from '../HeroCarousel';

export default function HeroSection() {
  return (
    <div className="relative h-80 md:h-[800px]">
      <HeroCarousel />
      <div className="z-10 text-white text-center absolute w-full md:w-auto p-4 md:p-12 bg-black -bottom-20 md:left-1/2 md:-translate-x-1/2">
        <TypographyH1>Welcome to the Bridge</TypographyH1>
        <div className="mt-2">
          <TypographyH3>
            <em>A Place to Connect</em>
          </TypographyH3>
        </div>
      </div>
    </div>
  );
}

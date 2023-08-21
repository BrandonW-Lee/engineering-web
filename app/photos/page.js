import { TypographyH1 } from '@/components/ui/typography/TypographyH1';
import Image from 'next/image';

export const metadata = {
  title: 'Photos | THE BRIDGE',
  description:
    "Experience the heart and soul of NLVC The Bridge Church in Glendale, California, through our captivating photo gallery. Immerse yourself in moments of togetherness, vibrant worship, and community gatherings captured in vivid detail. Explore scenes that showcase our church's spirit, from lively discussions to heartfelt worship sessions. Join us in reliving cherished memories and discovering the essence of our church family. Browse now and witness the essence of NLVC The Bridge Church through these captivating snapshots.",
};

const photos = [
  {
    alt: 'group sitting in a circle',
    src: 'https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/8afe7e4b-9070-4baf-1447-16e869175100/public',
  },
  {
    alt: 'group walking through the city at night',
    src: 'https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/a460585a-c9b7-4328-934d-e756f2d7c400/public',
  },
  {
    alt: 'group photo with a cake in front of sign',
    src: 'https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/4ed61bfa-88ca-4f84-865b-bc4335af5b00/public',
  },
  {
    alt: 'worship in conference room',
    src: 'https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/5f042c45-742c-4a8f-8c08-a7219d808c00/public',
  },
  {
    alt: 'guys talking while eating in-n-out',
    src: 'https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/c6da4fac-f0b4-4c38-f3ec-4cb33127ef00/public',
  },
  {
    alt: 'group hanging out while drinking soda',
    src: 'https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/fa7a47bd-4528-49bb-af43-bb6b6bebe600/public',
  },
  {
    alt: 'group of 8 at a restaurant table',
    src: 'https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/ca7f55b1-500f-428c-edc6-2e5e515e0300/public',
  },
  {
    alt: 'large group playing games in a circle',
    src: 'https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/6b06b119-fe1f-4140-df56-de917d862300/public',
  },
  {
    alt: 'man setting up donuts',
    src: 'https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/ac9dcd62-acab-4ff9-7fb1-ab405c9f1000/public',
  },
  {
    alt: 'guys pointing at bbq food',
    src: 'https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/8bb5ef9e-d8d3-40df-bc23-3845bbd56700/public',
  },
  {
    alt: 'two guys arm wrestling',
    src: 'https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/de21c6bb-cdea-458b-2a75-702882bfb000/public',
  },
  {
    alt: 'womens ministry',
    src: 'https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/0a3b4da9-5aa6-4c0a-3ac2-8e6baad9ee00/public',
  },
  {
    alt: 'two men discussing softball strategy',
    src: 'https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/1451283a-2d96-4838-5928-3c54f366cb00/public',
  },
  {
    alt: 'two men getting ready to play softball',
    src: 'https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/62c5ff87-ee49-4306-5031-ff116e81c400/public',
  },
];

export default function Photos() {
  return (
    <div className="container mx-auto py-12 sm:pb-24">
      <TypographyH1>Photos</TypographyH1>
      <section className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {photos.map((photo) => {
            return (
              <div className="relative h-60 md:h-72" key={photo.src}>
                <Image
                  fill
                  className="object-cover rounded-md"
                  src={photo.src}
                  alt={photo.alt}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

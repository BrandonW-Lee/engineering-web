import { TypographyH1 } from '@/components/ui/typography/TypographyH1';
import Image from 'next/image';

export const metadata = {
  title: 'Photos | THE BRIDGE',
  description:
    "Experience the heart and soul of NLVC The Bridge Church in Glendale, California, through our captivating photo gallery. Immerse yourself in moments of togetherness, vibrant worship, and community gatherings captured in vivid detail. Explore scenes that showcase our church's spirit, from lively discussions to heartfelt worship sessions. Join us in reliving cherished memories and discovering the essence of our church family. Browse now and witness the essence of NLVC The Bridge Church through these captivating snapshots.",
};

const photos = [
  {
    alt: 'large group playing games in a circle',
    src: '/photos/retreat-1.jpg',
  },
  {
    alt: 'group walking through the city at night',
    src: '/photos/retreat-2.jpg',
  },
  {
    alt: 'group photo with a cake in front of sign',
    src: '/photos/retreat-3.jpg',
  },
  {
    alt: 'group in circle talking',
    src: '/photos/retreat-4.jpg',
  },
  {
    alt: 'worship in conference room',
    src: '/photos/retreat-5.jpg',
  },
  {
    alt: 'guys talking while eating in-n-out',
    src: '/photos/retreat-6.jpg',
  },
  {
    alt: 'group hanging out while drinking soda',
    src: '/photos/retreat-7.jpg',
  },
  {
    alt: 'group of 8 at a restaurant table',
    src: '/photos/retreat-8.jpg',
  },
  {
    alt: 'man setting up donuts',
    src: '/photos/mens-bbq-1.jpg',
  },
  {
    alt: 'guys pointing at bbq food',
    src: '/photos/mens-bbq-2.jpg',
  },
  {
    alt: 'two guys arm wrestling',
    src: '/photos/mens-bbq-3.jpg',
  },
  {
    alt: 'womens ministry',
    src: '/photos/womens-ministry.jpg',
  },
  {
    alt: 'two men discussing softball strategy',
    src: '/photos/softball-1.jpg',
  },
  {
    alt: 'two men getting ready to play softball',
    src: '/photos/softball-2.jpg',
  },
  {
    alt: 'family at baby dedication ceremony',
    src: '/photos/baby-dedication-1.jpg',
  },
  {
    alt: 'pastor ben speaking at baby dedication ceremony',
    src: '/photos/baby-dedication-2.jpg',
  },
  {
    alt: 'sam and liz playing with ivy',
    src: '/photos/baby-dedication-3.jpg',
  },
  {
    alt: 'bowling group photo',
    src: 'https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/8314c03b-df09-467a-e0b1-0f92d1c39700/public',
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

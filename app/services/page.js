import { TypographyH1 } from "@/components/ui/typography/TypographyH1";
import Image from "next/image";

export const metadata = {
  title: "Photos | THE BRIDGE",
  description:
    "Experience the heart and soul of NLVC The Bridge Church in Glendale, California, through our captivating photo gallery. Immerse yourself in moments of togetherness, vibrant worship, and community gatherings captured in vivid detail. Explore scenes that showcase our church's spirit, from lively discussions to heartfelt worship sessions. Join us in reliving cherished memories and discovering the essence of our church family. Browse now and witness the essence of NLVC The Bridge Church through these captivating snapshots.",
};

const photos = [
  {
    alt: "large group playing games in a circle",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "group walking through the city at night",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "group photo with a cake in front of sign",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "group in circle talking",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "worship in conference room",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "guys talking while eating in-n-out",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "group hanging out while drinking soda",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "group of 8 at a restaurant table",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "man setting up donuts",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "guys pointing at bbq food",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "two guys arm wrestling",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "womens ministry",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "two men discussing softball strategy",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "two men getting ready to play softball",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "family at baby dedication ceremony",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "pastor ben speaking at baby dedication ceremony",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "sam and liz playing with ivy",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "bowling group photo",
    src: "/photos/pencil-blueprint.png",
  },
];

export default function Photos() {
  return (
    <div className='container mx-auto py-0 sm:pb-24 justify-stretch'>
      <div className='relative md:h-[400px] justify-bottom object-cover'>
        <Image
          fill
          className='bg-auto bg-cover object-cover w-full h-full overflow-hidden'
          src='/photos/Section-Hero.png'
          alt='hero image'
          sizes=' 100vw'
          title='Photos'
        />
        <div className='absolute w-full py-2.5 bottom-1/2 inset-x-0 text-xl text-center leading-4'>
          <p className='text-amber-50'>Services</p>
          <br></br>
          <p className='text-white'>Trailblazing Project Engineering</p>
        </div>
      </div>

      <section className='mt-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
          {photos.map((photo) => {
            return (
              <div
                className='relative h-60 md:h-72'
                key={photo.src}
              >
                <Image
                  fill
                  className='object-cover rounded-md'
                  src={photo.src}
                  alt={photo.alt}
                  sizes='(min-width: 768px) 33vw, 100vw'
                  loading='lazy'
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

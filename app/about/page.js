import { TypographyBlockquote } from "@/components/ui/typography/TypographyBlockquote";
import { TypographyH1 } from "@/components/ui/typography/TypographyH1";
import { TypographyH2 } from "@/components/ui/typography/TypographyH2";
import { TypographyH3 } from "@/components/ui/typography/TypographyH3";
import { TypographyH4 } from "@/components/ui/typography/TypographyH4";
import { TypographyP } from "@/components/ui/typography/TypographyP";
import Image from "next/image";

export const metadata = {
  title: "Welcome | THE BRIDGE",
  description:
    "Discover the Good News of the Gospel | Learn how to enter into a relationship with God through the person of Jesus Christ. Explore key Bible verses, including Romans 3:23, 6:23, 5:8, and 10:9-10. Rejoice in the care and provision of God with Romans 8:1. THE BRIDGE invites you to embrace the free gift of eternal life in Christ Jesus our Lord.",
};

const photos = [
  {
    alt: "large group playing games in a circle",
    src: "/photos/pencil-blueprint.png",
  },
  {
    alt: "large group playing games in a circle",
    src: "/photos/pencil-blueprint.png",
  },
];

export default function About() {
  return (
    <div className='container mx-auto sm:pb-24 justify-stretch w-full'>
      <div className='relative md:h-[400px] h-400 position: absolute object-cover'>
        {/* 'mt-8 max-w-7xl min-h-800  w-full flex flex-col gap-20 items-center text-slate-700' */}
        <Image
          fill
          className='bg-auto h-400 bg-cover object-cover w-full md:h-[400px] w-screen'
          src='/photos/Section-Hero.png'
          alt='hero image'
          sizes=' 100vw'
          title='Photos'
        />
        <div className='absolute w-full py-2.5 bottom-1/2 inset-x-0 text-xl text-center leading-4'>
          <p className='text-amber-50'>About</p>
          <br></br>
          <p className='text-white'>Trailblazing Project Engineering</p>
        </div>
      </div>
      <section className='mt-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
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
                  sizes='(min-width: 768px) 50vw, 100vw'
                  loading='lazy'
                />
              </div>
            );
          })}
        </div>
      </section>
      <section className='mt-12'>
        <div className=''>
          <div className='relative h-60 md:h-72'>
            <Image
              fill
              className='object-cover rounded-md'
              src='/photos/AboutRocket.png'
              alt='about rockets'
              sizes='(min-width: 768px) 50vw, 100vw'
              loading='lazy'
            />
          </div>
        </div>
      </section>
    </div>
  );
}

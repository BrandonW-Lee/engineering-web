import { TypographyH1 } from "@/components/ui/typography/TypographyH1";
import { TypographyH2 } from "@/components/ui/typography/TypographyH2";
import { createClient } from "@/prismicio";
import Image from "next/image";

export const metadata = {
  title: "Bridge Groups | THE BRIDGE",
  description:
    "Bridge Groups are weekly gatherings of 8-12 people that meet in homes throughout the city. They are the primary way we connect with others and grow in our faith together. We have groups for different locations throughout Los Angeles.",
};

const client = createClient();

export default async function BridgeGroups() {
  const page = await client.getByUID(
    "bridge_groups_page",
    "bridge-groups-page"
  );

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
          <p className='text-amber-50'>Blogs</p>
          <br></br>
          <p className='text-white'>Trailblazing Project Engineering</p>
        </div>
      </div>
    </div>
  );
}

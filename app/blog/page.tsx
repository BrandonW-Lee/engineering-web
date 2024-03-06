// import { TypographyH1 } from "@/components/ui/typography/TypographyH1";
// import { TypographyH2 } from "@/components/ui/typography/TypographyH2";
// import { createClient } from "@/prismicio";
// import Image from "next/image";

// export const metadata = {
//   title: "Bridge Groups | THE BRIDGE",
// };

// const client = createClient();

// export default async function BlogsGroups() {
//   const page = await client.getByUID(
//     "blog_page",
//     "blog-page"
//   );

//   return (
//     <div className='container mx-auto py-12 sm:pb-24'>
//       <TypographyH1>{page.data.title}</TypographyH1>
//       <div className='mt-12'>
//         <TypographyH2>{page.data.subtitle}</TypographyH2>
//       </div>
//       <div className='mt-8 '>
//         <div className='relative w-full md:w-4/5 lg:w-2/3 h-[540px] sm:h-screen mx-auto'>
//           <Image
//             src={page.data.image.url}
//             alt={page.data.image.alt}
//             fill
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// ./src/app/page.tsx

import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { PostCard } from "../../components/Prismic/Postcard";
import { Navigation } from "../../components/Prismic/Navigation";

/**
 * This component renders your homepage.
 *
 * Use Next's generateMetadata function to render page metadata.
 *
 * Use the SliceZone to render the content of the page.
 */

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("blog_page", "blog-page");

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title || undefined,
      images: [
        {
          url: home.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Index() {
  // The client queries content from the Prismic API
  const client = createClient();

  // Fetch the content of the home page from Prismic
  const home = await client.getByUID("blog_page", "blog-page");

  // Get all of the blog_post documents created on Prismic ordered by publication date
  const posts = await client.getAllByType("blog_page", {
    orderings: [
      { field: "my.blog_post.publication_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return (
    <>
      <Navigation client={client} />

      <SliceZone
        slices={home.data.slices}
        components={components}
      />

      {/* Map over each of the blog posts created and display a `PostCard` for it */}
      <section className='grid grid-cols-1 gap-8 max-w-3xl w-full'>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}
      </section>

      <Navigation client={client} />
    </>
  );
}

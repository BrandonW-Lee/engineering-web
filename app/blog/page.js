import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { PostCard } from "../../components/Prismic/Postcard";
// import { Navigation } from "../../components/Prismic/Navigation";

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
      {/* Map over each of the blog posts created and display a `PostCard` for it */}
      <section className='grid grid-cols-1 gap-8 max-w-3xl w-full mx-auto'>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}
      </section>

      {/* <Navigation client={client} /> */}
    </>
  );
}

// ./src/app/blog/[uid]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "../../../prismicio";
import { components } from "../../../slices";
import { PrismicNextImage } from "@prismicio/next";
import { PostCard } from "../../../components/Prismic/Postcard";
import { RichText } from "../../../components/Prismic/RichText";
import { Navigation } from "../../../components/Prismic/Navigation";

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export default async function Page({ params }) {
  const client = createClient();

  // Fetch the current blog post page being displayed by the UID of the page
  const page = await client
    .getByUID("blog_page", params.uid)
    .catch(() => notFound());
  console.log(page);

  // Destructure out the content of the current page
  const {
    slices,
    title,
    publication_date,
    description,
    featured_image,
    content,
  } = page.data;

  return (
    <div className='flex flex-col gap-12 w-full max-w-3xl mx-auto'>
      {/* Display the "hero" section of the blog post */}
      <section className='flex flex-col gap-12'>
        <div className='flex flex-col items-center gap-3 w-full'>
          <div className='flex flex-col gap-6 items-center'>
            <PrismicNextImage
              field={featured_image}
              sizes='100vw'
              className='w-full max-w-3xl max-h-96 rounded-xl object-cover'
            />
            <p className='opacity-75 border-b-2 w-min pb-1'>
              {new Date(publication_date || "").toLocaleDateString()}
            </p>
            <div className='text-center'>
              <RichText field={title} />
            </div>
          </div>
          <div className='text-center'>
            <RichText field={description} />
            <RichText field={content} />
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("blog_page");

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid };
  });
}

// ./src/slices/RichText/index.tsx

import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RichText } from "../../components/Prismic/RichText";

type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

export default function RichTextSlice({ slice }: RichTextProps) {
  return (
    <section className='flex flex-col gap-2'>
      <RichText field={slice.primary.content} />
    </section>
  );
}
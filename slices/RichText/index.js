// ./src/slices/RichText/index.tsx
import { RichText } from "../../components/Prismic/RichText";

export default function RichTextSlice({ slice }) {
  return (
    <section className='flex flex-col gap-2'>
      <RichText field={slice.primary.content} />
    </section>
  );
}

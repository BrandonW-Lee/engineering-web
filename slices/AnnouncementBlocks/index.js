/**
 * @typedef {import("@prismicio/client").Content.AnnouncementBlockSlice} AnnouncementBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AnnouncementBlockSlice>} AnnouncementBlockProps
 * @param {AnnouncementBlockProps}
 */
const AnnouncementBlock = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for announcement_block (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default AnnouncementBlock;

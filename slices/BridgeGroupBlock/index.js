/**
 * @typedef {import("@prismicio/client").Content.BridgeGroupBlockSlice} BridgeGroupBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BridgeGroupBlockSlice>} BridgeGroupBlockProps
 * @param {BridgeGroupBlockProps}
 */
const BridgeGroupBlock = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for bridge_group_block (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default BridgeGroupBlock;

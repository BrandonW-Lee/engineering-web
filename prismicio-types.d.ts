// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AnnouncementsPageDocumentDataSlicesSlice = AnnouncementBlockSlice;

/**
 * Content for Announcements Page documents
 */
interface AnnouncementsPageDocumentData {
  /**
   * Title field in *Announcements Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: announcements_page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Date field in *Announcements Page*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: announcements_page.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Slice Zone field in *Announcements Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: announcements_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AnnouncementsPageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Announcements Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: announcements_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Announcements Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: announcements_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Announcements Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: announcements_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Announcements Page document from Prismic
 *
 * - **API ID**: `announcements_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AnnouncementsPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<AnnouncementsPageDocumentData>,
    "announcements_page",
    Lang
  >;

type BridgeGroupsPageDocumentDataSlicesSlice = never;

/**
 * Content for Bridge Groups Page documents
 */
interface BridgeGroupsPageDocumentData {
  /**
   * Title field in *Bridge Groups Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bridge_groups_page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *Bridge Groups Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bridge_groups_page.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Image field in *Bridge Groups Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bridge_groups_page.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Bridge Groups Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: bridge_groups_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BridgeGroupsPageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Bridge Groups Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: bridge_groups_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Bridge Groups Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bridge_groups_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Bridge Groups Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: bridge_groups_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Bridge Groups Page document from Prismic
 *
 * - **API ID**: `bridge_groups_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BridgeGroupsPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BridgeGroupsPageDocumentData>,
    "bridge_groups_page",
    Lang
  >;

type LiveStreamPageDocumentDataSlicesSlice = never;

/**
 * Content for Live Stream Page documents
 */
interface LiveStreamPageDocumentData {
  /**
   * Title field in *Live Stream Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: live_stream_page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Date field in *Live Stream Page*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: live_stream_page.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Video Embed URL field in *Live Stream Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: https://www.youtube.com/embed/dK_yrW8siyc
   * - **API ID Path**: live_stream_page.video_embed_url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  video_embed_url: prismic.KeyTextField;

  /**
   * Slice Zone field in *Live Stream Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: live_stream_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<LiveStreamPageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Live Stream Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: live_stream_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Live Stream Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: live_stream_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Live Stream Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: live_stream_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Live Stream Page document from Prismic
 *
 * - **API ID**: `live_stream_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LiveStreamPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<LiveStreamPageDocumentData>,
    "live_stream_page",
    Lang
  >;

export type AllDocumentTypes =
  | AnnouncementsPageDocument
  | BridgeGroupsPageDocument
  | LiveStreamPageDocument;

/**
 * Primary content in *AnnouncementBlocks → Items*
 */
export interface AnnouncementBlockSliceDefaultItem {
  /**
   * Announcement Title field in *AnnouncementBlocks → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: announcement_block.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Accouncement field in *AnnouncementBlocks → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: announcement_block.items[].announcement
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  announcement: prismic.RichTextField;
}

/**
 * Default variation for AnnouncementBlocks Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AnnouncementBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<AnnouncementBlockSliceDefaultItem>
>;

/**
 * Slice variation for *AnnouncementBlocks*
 */
type AnnouncementBlockSliceVariation = AnnouncementBlockSliceDefault;

/**
 * AnnouncementBlocks Shared Slice
 *
 * - **API ID**: `announcement_block`
 * - **Description**: AnnouncementBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AnnouncementBlockSlice = prismic.SharedSlice<
  "announcement_block",
  AnnouncementBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AnnouncementsPageDocument,
      AnnouncementsPageDocumentData,
      AnnouncementsPageDocumentDataSlicesSlice,
      BridgeGroupsPageDocument,
      BridgeGroupsPageDocumentData,
      BridgeGroupsPageDocumentDataSlicesSlice,
      LiveStreamPageDocument,
      LiveStreamPageDocumentData,
      LiveStreamPageDocumentDataSlicesSlice,
      AllDocumentTypes,
      AnnouncementBlockSlice,
      AnnouncementBlockSliceDefaultItem,
      AnnouncementBlockSliceVariation,
      AnnouncementBlockSliceDefault,
    };
  }
}

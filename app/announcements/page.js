import { TypographyH1 } from "@/components/ui/typography/TypographyH1";
import { TypographyH2 } from "@/components/ui/typography/TypographyH2";
import { TypographyH3 } from "@/components/ui/typography/TypographyH3";
import { TypographyList } from "@/components/ui/typography/TypographyList";
import { TypographyP } from "@/components/ui/typography/TypographyP";
import { createClient } from "@/prismicio";

//Use this page as a reference to get prismic api calls and get 4 showing up on this page. No style for now, just get MVP.
//After, handle showing the blog page on click
export const metadata = {
  title: "Announcements | THE BRIDGE",
  description: "NLVC bridge Sunday announcements",
};

const client = createClient();

export default async function Announcements() {
  const page = await client.getByUID(
    "announcements_page",
    "announcements-page"
  );

  const announcementBlocks = page.data.slices[0].items;
  const formattedAnnouncements = announcementBlocks.map((block) => {
    return block.announcement.reduce(
      (announcement, nextAnnouncement) => {
        if (nextAnnouncement.type === "paragraph") {
          return {
            title: announcement.title,
            paragraph: [...announcement.paragraph, nextAnnouncement],
            listItems: [...announcement.listItems],
          };
        }
        return {
          title: announcement.title,
          paragraph: [...announcement.paragraph],
          listItems: [...announcement.listItems, nextAnnouncement],
        };
      },
      {
        title: block.title,
        paragraph: [],
        listItems: [],
      }
    );
  });

  return (
    <div className='container mx-auto py-12 sm:pb-24'>
      <TypographyH1>Announcements</TypographyH1>
      <section className='mt-12'>
        <TypographyH2>
          {new Date(page.data.date).toLocaleDateString("en-US")}
        </TypographyH2>
        {formattedAnnouncements.map((block) => {
          return (
            <div
              key={block.title}
              className='mt-12'
            >
              <TypographyH3>{block.title}</TypographyH3>
              {!!block.paragraph.length &&
                block.paragraph.map((paragraph) => {
                  return (
                    <TypographyP key={paragraph.text}>
                      {paragraph.text}
                    </TypographyP>
                  );
                })}
              {!!block.listItems.length && (
                <TypographyList>
                  {block.listItems.map((listItem) => {
                    return <li key={listItem.text}>{listItem.text}</li>;
                  })}
                </TypographyList>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}

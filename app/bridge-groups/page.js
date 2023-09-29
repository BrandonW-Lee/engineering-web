import { TypographyH1 } from '@/components/ui/typography/TypographyH1';
import { TypographyH2 } from '@/components/ui/typography/TypographyH2';
import { TypographyH3 } from '@/components/ui/typography/TypographyH3';
import { TypographyLead } from '@/components/ui/typography/TypographyLead';
import { TypographySmall } from '@/components/ui/typography/TypographySmall';
import { createClient } from '@/prismicio';
import Image from 'next/image';

export const metadata = {
  title: 'Bridge Groups | THE BRIDGE',
  description:
    'Bridge Groups are weekly gatherings of 8-12 people that meet in homes throughout the city. They are the primary way we connect with others and grow in our faith together. We have groups for different locations throughout Los Angeles.',
};

const client = createClient();

export default async function BridgeGroups() {
  const page = await client.getByUID(
    'bridge_groups_page',
    'bridge-groups-page'
  );

  // const bridgeGroupsByDayOfWeek = page.data.slices.reduce(
  //   (bridgeGroups, item) => {
  //     if (!bridgeGroups[item.primary.day_of_week]) {
  //       bridgeGroups[item.primary.day_of_week] = [item.primary];
  //       return bridgeGroups;
  //     }

  //     bridgeGroups[item.primary.day_of_week].push(item.primary);
  //     return bridgeGroups;
  //   },
  //   {}
  // );

  // const bridgeGroupsByDayOfWeekArray = Object.keys(bridgeGroupsByDayOfWeek).map(
  //   (key) => {
  //     return {
  //       dayOfWeek: key,
  //       bridgeGroups: bridgeGroupsByDayOfWeek[key],
  //     };
  //   }
  // );

  return (
    <div className="container mx-auto py-12 sm:pb-24">
      <TypographyH1>{page.data.title}</TypographyH1>
      <div className="mt-12">
        <TypographyH2>{page.data.subtitle}</TypographyH2>
      </div>
      <div className="mt-8 ">
        <div className="relative w-full sm:w-4/5 md:w-1/2 h-[540px] sm:h-screen mx-auto ">
          <Image src={page.data.image.url} alt={page.data.image.alt} fill />
        </div>
        {/* {bridgeGroupsByDayOfWeekArray.map(({ bridgeGroups, dayOfWeek }) => {
          return (
            <div key={dayOfWeek} className="mt-8">
              <TypographyH3>{dayOfWeek}</TypographyH3>
              {bridgeGroups.map(({ facilitators, location }) => {
                return (
                  <div key={facilitators} className="mt-6">
                    <TypographyLead>{location}</TypographyLead>
                    <TypographySmall>with {facilitators}</TypographySmall>
                  </div>
                );
              })}
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

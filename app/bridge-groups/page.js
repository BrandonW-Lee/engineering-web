import { TypographyH1 } from '@/components/ui/typography/TypographyH1';
import { TypographyH2 } from '@/components/ui/typography/TypographyH2';
import { createClient } from '@/prismicio';

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

  return (
    <div className="container mx-auto py-12 sm:pb-24">
      <TypographyH1>{page.data.title}</TypographyH1>
      <div className="mt-12">
        <TypographyH2>{page.data.subtitle}</TypographyH2>
      </div>
    </div>
  );
}

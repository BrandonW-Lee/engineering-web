import { TypographyH1 } from '@/components/ui/typography/TypographyH1';
import { TypographyH3 } from '@/components/ui/typography/TypographyH3';

export const metadata = {
  title: 'Committees | THE BRIDGE',
  description: '',
};

const committees = [
  {
    title: 'CO-OP',
    description:
      'A group of volunteers who are willing and able to set up, arrange, build, and tear down equipment, chairs, stages, tables, and other misc. tasks for different ministry events for church.',
    email: 'operations@nlvcbridge.com',
  },
  {
    title: 'MISSIONS',
    description:
      'A group of volunteers who help coordinate, plan, and support the local and overseas missions efforts of the Bridge. This includes supporting field missionaries with their needs as well as helping organize and launch short-term mission trips.',
    email: 'missions@nlvcbridge.com',
  },
  {
    title: 'SPORTS',
    description:
      'A group of volunteers who help coordinate and plan our sports ministry of the Bridge. This includes supporting all sports and sports-related fundraisers.',
    email: 'sports@nlvcbridge.com',
  },
  {
    title: 'VISUAL ARTS',
    description:
      'A group of volunteers who are artistically gifted and willing to design, create, paint, make, build, and illustrate images for the church, both physically and digitally, that will enhance the aesthetics of the church ministry for the glory of God.',
    email: 'arts@nlvcbridge.com',
  },
  {
    title: 'WELCOME',
    description:
      'A group of volunteers who greet and welcome new guests to our Sunday worship service. This includes follow up and integration of new guests to the regular membership of the church.',
    email: 'welcome@nlvcbridge.com',
  },
  {
    title: "WOMEN'S MINISTRY",
    description:
      "A group of volunteers who help coordinate, plan, and support the Women's ministry of the Bridge. This includes soul care, Between Us events, and all other ministries focusing on the sisters of the Bridge.",
    email: 'women@nlvcbridge.com',
  },
];

export default function Committees() {
  return (
    <div className="container mx-auto py-12 sm:pb-24">
      <TypographyH1>Committees</TypographyH1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {committees.map((committee) => {
          return (
            <div
              className="h-60 md:h-80 cursor-pointer rounded-lg bg-black text-white flex items-center justify-center"
              key={committee.title}
            >
              <TypographyH3>{committee.title}</TypographyH3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

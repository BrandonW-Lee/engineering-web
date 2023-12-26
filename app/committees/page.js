import { TypographyH1 } from '@/components/ui/typography/TypographyH1';
import { TypographyH3 } from '@/components/ui/typography/TypographyH3';
import { TypographyMuted } from '@/components/ui/typography/TypographyMuted';
import { TypographySmall } from '@/components/ui/typography/TypographySmall';
import { Mail } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Committees | THE BRIDGE',
  description:
    "Explore the diverse committees at NLVC Bridge. Volunteer for Co-Op, Missions, Sports, Visual Arts, Welcome, and Women's Ministry. Get involved in event setup, missions coordination, sports ministry, artistry, welcoming new guests, and supporting sisters in the community. Contact each committee via email and learn more about their roles. Check out our vibrant images capturing the essence of each committee. Join us in creating a stronger community together.",
};

const committees = [
  {
    title: 'Co-Op',
    description:
      'Volunteers who are willing and able to set up, arrange, build, and tear down equipment, chairs, stages, tables for our different ministry events.',
    email: 'operations@nlvcbridge.com',
    src: '/committees/committees-coop.jpg',
  },
  {
    title: 'Missions',
    description:
      'Volunteers who help coordinate, plan, and support the local and overseas missions efforts of the Bridge.',
    email: 'missions@nlvcbridge.com',
    src: '/committees/committees-missions.jpg',
  },
  {
    title: 'Sports',
    description:
      'Volunteers who help coordinate and plan our sports ministry of the Bridge. This includes supporting all sports and sports-related fundraisers.',
    email: 'sports@nlvcbridge.com',
    src: '/committees/committees-sports.jpg',
  },
  {
    title: 'Visual Arts',
    description:
      'Volunteers who are artistically gifted and willing to design, create, paint, make, build, and illustrate images for the church.',
    email: 'arts@nlvcbridge.com',
    src: '/committees/committees-art.jpg',
  },
  {
    title: 'Welcome',
    description:
      'Volunteers who greet and welcome new guests to our Sunday worship service. This includes follow up and integration of new guests to the regular membership of the church.',
    email: 'welcome@nlvcbridge.com',
    src: '/committees/committees-welcome.jpg',
  },
  {
    title: "Women's Ministry",
    description:
      "Volunteers who help coordinate, plan, and support the Women's ministry of the Bridge. This includes soul care, and all other ministries focusing on the sisters of the Bridge.",
    email: 'women@nlvcbridge.com',
    src: '/committees/committees-women.jpg',
  },
];

export default function Committees() {
  return (
    <div className="container mx-auto py-12 sm:pb-24">
      <TypographyH1>Committees</TypographyH1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {committees.map((committee) => {
          return (
            <div key={committee.title}>
              <TypographyH3>{committee.title}</TypographyH3>
              <TypographyMuted>
                <a
                  href={`mailto:${committee.email}`}
                  className="flex items-center mt-2"
                >
                  <Mail className="h-4 w-4 mr-1" />
                  {committee.email}
                </a>
              </TypographyMuted>
              <div className="mt-2">
                <TypographySmall>{committee.description}</TypographySmall>
              </div>
              <div className="mt-4 h-60 w-full md:h-80 relative">
                <Image
                  className="rounded-lg object-cover"
                  alt={committee.title}
                  src={committee.src}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

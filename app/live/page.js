import { Button } from '@/components/ui/button';
import { TypographyH1 } from '@/components/ui/typography/TypographyH1';
import { TypographyH2 } from '@/components/ui/typography/TypographyH2';
import { Megaphone } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Live | THE BRIDGE',
  description: '',
};

export default function Live() {
  return (
    <div className="container mx-auto py-12 sm:pb-24">
      <TypographyH1>Live Stream</TypographyH1>
      <div className="mt-8">
        <TypographyH2>Sundays at 11:30 AM</TypographyH2>
      </div>
      <div className="mt-8">
        <iframe
          width="100%"
          height="720"
          src="https://www.youtube.com/embed/dK_yrW8siyc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
      <div className="mt-8 flex justify-center">
        <Link href="/announcements" passHref>
          <Button>
            <Megaphone className="mr-2 h-4 w-4" />
            Announcements
          </Button>
        </Link>
      </div>
    </div>
  );
}

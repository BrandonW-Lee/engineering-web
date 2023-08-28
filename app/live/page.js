import { Button } from '@/components/ui/button';
import { TypographyH1 } from '@/components/ui/typography/TypographyH1';
import { TypographyH2 } from '@/components/ui/typography/TypographyH2';
import { createClient } from '@/prismicio';
import { Megaphone } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Live | THE BRIDGE',
  description:
    'Watch New Life Vision Church The Bridge live stream Sundays at 11:30 AM. ',
};

const client = createClient();

export default async function Live() {
  const page = await client.getByUID('live_stream_page', 'live-stream-page');

  return (
    <div className="container mx-auto py-12 sm:pb-24">
      <TypographyH1>{page.data.title}</TypographyH1>
      <div className="mt-8">
        <TypographyH2>Sundays at 11:30 AM</TypographyH2>
      </div>
      <div className="mt-8">
        <iframe
          width="100%"
          height="720"
          src={page.data.video_embed_url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
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

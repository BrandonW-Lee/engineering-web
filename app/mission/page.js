import { TypographyBlockquote } from '@/components/ui/typography/TypographyBlockquote';
import { TypographyH1 } from '@/components/ui/typography/TypographyH1';
import { TypographyH2 } from '@/components/ui/typography/TypographyH2';
import { TypographyH3 } from '@/components/ui/typography/TypographyH3';
import { TypographyH4 } from '@/components/ui/typography/TypographyH4';
import { TypographyP } from '@/components/ui/typography/TypographyP';

export const metadata = {
  title: 'Mission and Vision | THE BRIDGE',
  description: '',
};

export default function Mission() {
  return (
    <div className="container mx-auto py-12 sm:pb-24">
      <TypographyH1>Mission and Vision</TypographyH1>
      <section className="mt-12">
        <TypographyH2>Mission</TypographyH2>
        <div className="mt-8">
          <TypographyP>
            Christianity is more than merely just a religion. It actually is
            about a relationship with God through the person of the Lord Jesus
            Christ. Religion tells us to “do” things in order to get to heaven.
            Christianity invites us into relationship because of the finished
            work that was “done” for us through the dying of Jesus Christ on the
            cross. So how does one enter into a relationship with God. Here’s
            what the Bible tells us:
          </TypographyP>
        </div>
      </section>
      <section className="mt-12">
        <TypographyH2>Vision</TypographyH2>
        <div className="mt-8">
          <TypographyP>
            To be a place to connect (with God and with others)
          </TypographyP>
        </div>
      </section>
      <section className="mt-12">
        <TypographyH2>Theme Verse</TypographyH2>
        <div className="mt-8">
          <TypographyBlockquote>
            “And let us consider how to stir up one another to love and good
            works, not neglecting to meet together, as is the habit of some, but
            encouraging one another, and all the more as you see the Day drawing
            near.”
          </TypographyBlockquote>
        </div>
        <div className="mt-8 text-right">
          <TypographyH4>Hebrews 10:24-25</TypographyH4>
        </div>
      </section>
    </div>
  );
}

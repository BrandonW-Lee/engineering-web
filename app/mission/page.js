import { TypographyBlockquote } from '@/components/ui/typography/TypographyBlockquote';
import { TypographyH1 } from '@/components/ui/typography/TypographyH1';
import { TypographyH2 } from '@/components/ui/typography/TypographyH2';
import { TypographyH3 } from '@/components/ui/typography/TypographyH3';
import { TypographyH4 } from '@/components/ui/typography/TypographyH4';
import { TypographyP } from '@/components/ui/typography/TypographyP';

export const metadata = {
  title: 'Mission and Vision | THE BRIDGE',
  description:
    'Discover our Mission and Vision | Our mission is to exalt God, edify the brethren, equip the saints, evangelize the world, and exemplify Christ-likeness. Our vision is to be a place of connection with God and others. Theme verse: Hebrews 10:24-25.',
};

const verses = [
  {
    title: 'To exalt God with our lives for His glory.',
    reference: '1 Corinthians 10:31',
  },
  {
    title: 'To edify the brethren to love and good deeds.',
    reference: 'Hebrews 10:24-25',
  },
  {
    title: 'To equip the saints for the work of the ministry.',
    reference: 'Ephesians 4:11-12',
  },
  {
    title: 'To evangelize the world with the Gospel of the Lord Jesus Christ.',
    reference: 'Matthew 28:16-20',
  },
  {
    title: 'To exemplify Christ-likeness to a watching world.',
    reference: 'John 13:34-35',
  },
];

export default function Mission() {
  return (
    <div className="container mx-auto py-12 sm:pb-24">
      <TypographyH1>Mission and Vision</TypographyH1>
      <section className="mt-12">
        <TypographyH2>Mission</TypographyH2>
        <div className="mt-8">
          {verses.map((verse, index) => {
            return (
              <div className="mt-8" key={verse.title}>
                <TypographyH3>
                  {index + 1}. {verse.title}
                </TypographyH3>
                <div className="mt-8 text-right">
                  <TypographyH4>{verse.reference}</TypographyH4>
                </div>
              </div>
            );
          })}
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

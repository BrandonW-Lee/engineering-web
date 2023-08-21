import { TypographyH1 } from '@/components/ui/typography/TypographyH1';

import ContactForm from '../../components/ContactForm';
import { TypographyH2 } from '@/components/ui/typography/TypographyH2';

export const metadata = {
  title: 'Contact | THE BRIDGE',
  description: 'Contact New Life Vision Church The Bridge in Glendale, CA. ',
};

export default function Contact() {
  return (
    <div className="container mx-auto py-12 sm:pb-24">
      <TypographyH1>Contact</TypographyH1>
      <div className="mt-12">
        <TypographyH2>
          Want to learn more? Send us a message! &#128512;
        </TypographyH2>
      </div>
      <section className="mt-12">
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

import { TypographyH1 } from '@/components/ui/typography/TypographyH1';

import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact | THE BRIDGE',
  description: '',
};

export default function Contact() {
  return (
    <div className="container mx-auto py-12 sm:pb-24">
      <TypographyH1>Contact</TypographyH1>
      <section className="mt-12">
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

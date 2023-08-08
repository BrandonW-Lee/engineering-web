import HeroImage from '@/components/HeroImage';
import { TypographyBlockquote } from '@/components/ui/typography/TypographyBlockquote';
import { TypographyH1 } from '@/components/ui/typography/TypographyH1';
import { TypographyH3 } from '@/components/ui/typography/TypographyH3';
import { TypographyLead } from '@/components/ui/typography/TypographyLead';
import { TypographyP } from '@/components/ui/typography/TypographyP';

export const metadata = {
  title: 'NLVC | THE BRIDGE',
  description:
    'Welcome to New Life Vision Church The Bridge in Glendale, California! Join our thriving community and discover a place where faith, hope, and love converge. Experience uplifting worship, powerful teachings, and meaningful connections that inspire personal growth and transformation. Find your purpose and embrace a new life with us. Plan your visit today and be a part of a church that bridges the gap between spirituality and everyday life.',
};

export default function Home() {
  return (
    <div>
      <HeroImage src="/hero-1.jpg" alt="nlvc home page hero image" />
      <div className="container mx-auto py-36 md:py-40">
        <div>
          <TypographyH1>Sunday Service</TypographyH1>
          <TypographyP>Join us for worship at 11:30 AM</TypographyP>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52862.83851356888!2d-118.32276390929226!3d34.09700007358989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8f560e36155%3A0xdba1381438aadcb2!2sNew%20Life%20Vision%20Church!5e0!3m2!1sen!2sus!4v1691258098945!5m2!1sen!2sus"
            className="rounded-md mt-8 h-[450px] w-full md:w-1/2"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-20">
          <TypographyH1>Events</TypographyH1>
        </div>
      </div>
    </div>
  );
}

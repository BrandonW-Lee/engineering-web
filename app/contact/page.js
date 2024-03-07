"use client";

import { TypographyH1 } from "../../components/ui/typography/TypographyH1";
import CalendlyButton from "../../components/ContactForm/calendly";
import ContactForm from "../../components/ContactForm";
import { TypographyH2 } from "../../components/ui/typography/TypographyH2";
import { InlineWidget } from "react-calendly";
import { React } from "react";

// export const metadata = {
//   title: "Contact | THE BRIDGE",
//   description: "Contact New Life Vision Church The Bridge in Glendale, CA. ",
// };

export default function Contact() {
  return (
    <div className='container mx-auto py-12 sm:pb-24'>
      <div className='min-w-320 max-h-680'>
        <InlineWidget
          url='https://calendly.com/trail-walker01/30min?hide_event_type_details=1&hide_gdpr_banner=1'
          style='height: 750px'
        >
          <CalendlyButton />
        </InlineWidget>
      </div>

      <TypographyH1>Contact</TypographyH1>
      <div className='mt-12'>
        <TypographyH2>
          Want to learn more? Send us a message! &#128512;
        </TypographyH2>
      </div>
      <div></div>
      <section className='mt-12'>
        <div className='w-full md:w-1/2'>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

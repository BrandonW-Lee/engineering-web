import { TypographyBlockquote } from "../../components/ui/typography/TypographyBlockquote";
import { TypographyH1 } from "../../components/ui/typography/TypographyH1";
import { TypographyH2 } from "../../components/ui/typography/TypographyH2";
import { TypographyH3 } from "../../components/ui/typography/TypographyH3";
import { TypographyH4 } from "../../components/ui/typography/TypographyH4";
import { TypographyP } from "../../components/ui/typography/TypographyP";

export const metadata = {
  title: "Welcome | THE BRIDGE",
  description:
    "Discover the Good News of the Gospel | Learn how to enter into a relationship with God through the person of Jesus Christ. Explore key Bible verses, including Romans 3:23, 6:23, 5:8, and 10:9-10. Rejoice in the care and provision of God with Romans 8:1. THE BRIDGE invites you to embrace the free gift of eternal life in Christ Jesus our Lord.",
};

const verses = [
  {
    title: "Recognize that you fall short and that you are a sinner.",
    quote: '"For all have sinned and fall short of the glory of God"',
    reference: "Romans 3:23",
  },
  {
    title: "Realize that there is significant consequence for being a sinner.",
    quote:
      '"For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord."',
    reference: "Romans 6:23",
  },
  {
    title: "Receive the truth that Jesus Christ died for you and your sins!",
    quote:
      '"But God shows his love for us in that while we were still sinners, Christ died for us."',
    reference: "Romans 5:8",
  },
  {
    title:
      "Repent (change your mind) and accept the free gift of eternal life.",
    quote:
      '"Because, if you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved. For with the heart one believes and is justified, and with the mouth one confesses and is saved."',
    reference: "Romans 10:9-10",
  },
  {
    title: "Rejoice that you are now under God’s care and provision.",
    quote:
      '"There is therefore now no condemnation for those who are in Christ Jesus"',
    reference: "Romans 8:1",
  },
];

export default function Welcome() {
  return (
    <div className='container mx-auto py-12 sm:pb-24'>
      <TypographyH1>Welcome</TypographyH1>
      <section className='mt-12'>
        <TypographyH2>The Good News of the Gospel</TypographyH2>
        <div className='mt-8'>
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
        {verses.map((verse, index) => {
          return (
            <div
              className='mt-8'
              key={verse.title}
            >
              <TypographyH3>
                {index + 1}. {verse.title}
              </TypographyH3>
              <div className='sm:w-3/4'>
                <TypographyBlockquote>{verse.quote}</TypographyBlockquote>{" "}
              </div>
              <div className='mt-8 text-right'>
                <TypographyH4>{verse.reference}</TypographyH4>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

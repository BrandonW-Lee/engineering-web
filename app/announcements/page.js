import { TypographyH1 } from '@/components/ui/typography/TypographyH1';
import { TypographyH2 } from '@/components/ui/typography/TypographyH2';
import { TypographyH3 } from '@/components/ui/typography/TypographyH3';
import { TypographyList } from '@/components/ui/typography/TypographyList';
import { TypographyP } from '@/components/ui/typography/TypographyP';

export const metadata = {
  title: 'Announcements | THE BRIDGE',
  description: 'NLVC bridge Sunday announcements',
};

export default function Announcements() {
  return (
    <div className="container mx-auto py-12 sm:pb-24">
      <TypographyH1>Announcements</TypographyH1>
      <section className="mt-12">
        <TypographyH2>July 23, 2023</TypographyH2>
        <div className="mt-12">
          <TypographyH3>Welcome</TypographyH3>
          <TypographyP>
            Thank you for joining us for Sunday worship! If you are visiting us
            for the first time today, we thank and welcome you. Please make sure
            you receive our welcoming gift and meet with our pastors.
          </TypographyP>
        </div>
        <div className="mt-12">
          <TypographyH3>Prayer Time</TypographyH3>
          <TypographyP>
            We meet at 11 am every Sunday for a short prayer time. Please join
            us as we pray for our worship service and one another.
          </TypographyP>
        </div>
        <div className="mt-12">
          <TypographyH3>College Time</TypographyH3>
          <TypographyP>
            College Time is from 7 -10 pm on Fridays at church with P. Josh. We
            welcome all college students, and we offer free dinners.
          </TypographyP>
        </div>
        <div className="mt-12">
          <TypographyH3>
            Summer Bible Study/Challenges to the Bible
          </TypographyH3>
          <TypographyP>
            Join us on Wednesdays as we continue our Summer Bible Study. This
            week is Week 3 of 6. Dinner will be in the cafeteria from 7 pm - 8
            pm (Bring Your Own), and study is from 8 pm - 9:15 pm in this room.
          </TypographyP>
        </div>
        <div className="mt-12">
          <TypographyH3>Affinity Group</TypographyH3>
          <TypographyP>
            Married without Children will meet in this room today for AG from
            1:20 pm - 2:20 pm. Please eat right after service and join us on
            time.
          </TypographyP>
          <TypographyList>
            <li>8/6: Singles (Anyone not married, AKA Thriving)</li>
            <li>8/13: College</li>
          </TypographyList>
        </div>
        <div className="mt-12">
          <TypographyH3>Membership Class</TypographyH3>
          <TypographyP>
            If you have been attending the Bridge and would like to join as an
            official member, please sign up for our 3-week class. Each class
            will last 45 minutes (1 pm - 1:45 pm). And classes are on Sundays,
            7/30, 8/6 and 8/13. If you are interested, please signup today.
          </TypographyP>
        </div>
        <div className="mt-12">
          <TypographyH3>Dodgers</TypographyH3>
          <TypographyP>
            We are planning a Dodgers event for Friday, August 18. The start
            time is at 7:10 pm, and it&apos;s a fireworks night. Tickets are $37
            a person, and the deadline for signup/pay is August 6.
          </TypographyP>
        </div>
        <div className="mt-12">
          <TypographyH3>In-Person &amp; Online Giving</TypographyH3>
          <TypographyP>
            We have two ways to give. You can give in person by dropping off
            your offering in the black offering box in the back of our worship
            room or online through Tithe.ly. If you haven&apos;t signed up for
            Tithe.ly, you can sign up today by clicking{' '}
            <strong>&quot;Give&quot;</strong> on the top right corner of our
            website
          </TypographyP>
        </div>
      </section>
    </div>
  );
}

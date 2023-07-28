import { TypographyH1 } from '@/components/ui/typography/TypographyH1';
import { TypographyH2 } from '@/components/ui/typography/TypographyH2';
import { TypographyH3 } from '@/components/ui/typography/TypographyH3';
import { TypographyLead } from '@/components/ui/typography/TypographyLead';
import { TypographyP } from '@/components/ui/typography/TypographyP';
import { TypographySmall } from '@/components/ui/typography/TypographySmall';
import { AtSign, Phone } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Staff | THE BRIDGE',
  description: '',
};

const leadership = [
  {
    name: 'Benjamin Shin',
    title: 'Teaching Pastor',
    email: 'benjamin.shin@biola.edu',
    phone: '818-314-0367',
    src: 'https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/74c25d9a-c4d1-48ce-2940-2884f03d8200/public',
    bio: 'Benjamin C. Shin has served in the ministry as a pastor, parachurch leader, and professor for more than 25 years. He is a graduate of UCLA, Talbot School of Theology, and Dallas Theological Seminary. He enjoys reading, music, sports (especially the UCLA Bruins), and spending time with people. His vision and passion include mentoring leaders, re-building churches, and teaching the Word of God. He is married to his bride, Jen and has 2 wonderful sons named Adam and Zachary. He currently serves as the Teaching Pastor at New Life Vision Church in Glendale, CA and as an Associate Professor of Christian Ministry & Leadership and Director of the Asian-American Ministry track for the Doctor of Ministry at Talbot School of Theology in La Mirada, CA. He is the co-author of Tapestry of Grace: Untangling the Cultural Complexities of Asian American Life and Ministry.',
  },
  {
    name: 'Jacob Cho',
    title: 'Associate Pastor',
    email: 'jacob105cho@gmail.com',
    phone: '213-321-2980',
    src: 'https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/6ebb5bac-15f1-49b1-e785-751119cefe00/public',
    bio: 'Jacob Cho has been serving at New Life Vision Church since 2009. He holds a Master of Divinity degree from Talbot School of Theology. He enjoys watching the Dodgers, Lakers and playing sports. He is married to his beautiful bride, Joy, and a happy father to Evelyn and Ivy.',
  },
];

export default function Staff() {
  return (
    <div className="container mx-auto py-12 sm:pb-24">
      <TypographyH1>Leadership</TypographyH1>
      <div className="mt-8">
        <TypographyH2>Pastoral Staff</TypographyH2>
      </div>
      <div className="mt-8">
        {leadership.map((leader) => {
          return (
            <div key={leader.name} className="flex mt-16 gap-8">
              <div className="relative w-1/3 h-96">
                <Image
                  className="rounded-sm"
                  alt={`portrait of ${leader.name}`}
                  src={leader.src}
                  fill
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="w-full">
                <div>
                  <TypographyH3>{leader.name}</TypographyH3>
                  <TypographyLead>{leader.title}</TypographyLead>
                  <div className="flex mt-2">
                    <AtSign className="h-4 w-4 mr-1" />
                    <TypographySmall>
                      <a href={`mailto:${leader.email}`}>{leader.email}</a>
                    </TypographySmall>
                  </div>
                  <div className="flex mt-2">
                    <Phone className="h-4 w-4 mr-1" />
                    <TypographySmall>{leader.phone}</TypographySmall>
                  </div>
                </div>
                <TypographyP>{leader.bio}</TypographyP>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { TypographyH1 } from '@/components/ui/typography/TypographyH1';
import { TypographyH2 } from '@/components/ui/typography/TypographyH2';
import { TypographyH3 } from '@/components/ui/typography/TypographyH3';
import { TypographyLead } from '@/components/ui/typography/TypographyLead';
import { TypographyP } from '@/components/ui/typography/TypographyP';
import { TypographySmall } from '@/components/ui/typography/TypographySmall';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Staff | THE BRIDGE',
  description:
    "Meet NLVC Bridge's leadership team - Teaching Pastor Benjamin Shin and Associate Pastor Jacob Cho. Benjamin, with over 25 years of experience, is a mentor, teacher, and visionary. Jacob, serving since 2009, holds a Master of Divinity from Talbot School of Theology. Reach out to Benjamin at benjamin.shin@biola.edu or 818-314-0367, and Jacob at jacob105cho@gmail.com or 213-321-2980. View their images and read their bios, showcasing their passion and commitment. Join us under their guidance in Glendale, CA, as we grow together in faith and community.",
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
  {
    name: 'Daniel Tak',
    title: 'Worship Pastor',
    email: '',
    phone: '',
    src: '',
    bio: 'Pastor Daniel Tak is a Southern California native and loves everything LA & OC (except the traffic). He received his B.A in English and his Master of Divinity (M.Div) from Talbot School of Theology at BIOLA University. With the conviction that Jesus Christ is the hope of the world, Daniel is committed to the Gospel while partnering with the local church in order to make Christ known and Him, alone, glorified.',
  },
];

export default function Staff() {
  return (
    <div className="container mx-auto py-12 sm:pb-24">
      <TypographyH1>Leadership</TypographyH1>
      <div className="mt-12">
        <TypographyH2>Pastoral Staff</TypographyH2>
      </div>
      <div className="mt-8">
        {leadership.map((leader) => {
          return (
            <div
              key={leader.name}
              className="flex flex-col md:flex-row mt-16 gap-8"
            >
              <div className="relative w-full md:w-full lg:w-1/2 h-96">
                <Image
                  className="rounded-sm object-cover"
                  alt={`portrait of ${leader.name}`}
                  src={leader.src}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw "
                />
              </div>
              <div className="w-full">
                <div>
                  <TypographyH3>{leader.name}</TypographyH3>
                  <TypographyLead>{leader.title}</TypographyLead>
                  {!!leader.email && (
                    <div className="flex mt-2">
                      <Mail className="h-4 w-4 mr-1" />
                      <TypographySmall>
                        <a href={`mailto:${leader.email}`}>{leader.email}</a>
                      </TypographySmall>
                    </div>
                  )}
                  {!!leader.phone && (
                    <div className="flex mt-2">
                      <Phone className="h-4 w-4 mr-1" />
                      <TypographySmall>{leader.phone}</TypographySmall>
                    </div>
                  )}
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

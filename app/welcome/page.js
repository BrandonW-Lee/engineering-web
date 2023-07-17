import { TypographyH1 } from '@/components/ui/typography/TypographyH1';

export const metadata = {
  title: 'Welcome | THE BRIDGE',
  description: '',
};

export default function Welcome() {
  return (
    <div className="container mx-auto">
      <div className="mt-12">
        <TypographyH1>Welcome</TypographyH1>
      </div>
    </div>
  );
}

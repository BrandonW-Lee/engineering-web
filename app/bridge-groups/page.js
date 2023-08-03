import { TypographyH1 } from '@/components/ui/typography/TypographyH1';
import { TypographyH2 } from '@/components/ui/typography/TypographyH2';

export const metadata = {
  title: 'Bridge Groups | THE BRIDGE',
  description: '',
};

export default function BridgeGroups() {
  return (
    <div className="container mx-auto py-12 sm:pb-24">
      <TypographyH1>Bridge Groups</TypographyH1>
      <div className="mt-12">
        <TypographyH2>2023 Fall session - 12 weeks - Coming soon!</TypographyH2>
      </div>
    </div>
  );
}

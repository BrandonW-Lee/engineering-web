import HeroImage from '@/components/HeroImage';

export const metadata = {
  title: 'NLVC | THE BRIDGE',
  description:
    'Welcome to New Life Vision Church The Bridge in Glendale, California! Join our thriving community and discover a place where faith, hope, and love converge. Experience uplifting worship, powerful teachings, and meaningful connections that inspire personal growth and transformation. Find your purpose and embrace a new life with us. Plan your visit today and be a part of a church that bridges the gap between spirituality and everyday life.',
};

export default function Home() {
  return (
    <div className="h-full">
      <HeroImage
        src="https://imagedelivery.net/_hFr1roF71hCDtIXUIgrjw/64a99fa5-73fa-46cc-2d6f-748ca607b100/hero"
        alt="nlvc home page hero image"
      />
      <div className="container mx-auto">Home</div>
    </div>
  );
}

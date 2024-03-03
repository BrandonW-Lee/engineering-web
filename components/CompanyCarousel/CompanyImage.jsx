import Image from "next/image";

export default function CompanyImage({ alt, src }) {
  return (
    <div className=' mt-8 relative h-20 md:h-[200px]'>
      <Image
        className='object-cover ease-linear'
        src={src}
        alt={alt}
        priority
        fill
      />
      <div className='company-scrollbar' />
    </div>
  );
}

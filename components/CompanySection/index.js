import CompanyCarousel from "../CompanyCarousel";

export default function CompanySection() {
  return (
    <div className='relative h-40 md:h-[400px] justify-auto w-400'>
      <CompanyCarousel />
      {/* <div className='z-10 text-white text-center absolute w-full md:w-auto p-4 md:p-12 bg-black -bottom-20 md:left-1/2 md:-translate-x-1/2'>
        <TypographyH1>Welcome to the Bridge</TypographyH1>
        <div className='mt-2'>
          <TypographyH3>
            <em>A Place to Connect.</em>
          </TypographyH3>
        </div>
      </div> */}
    </div>
  );
}

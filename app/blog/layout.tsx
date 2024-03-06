import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../../prismicio";
import "./styles.css";
import { Inter } from "next/font/google";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Toaster } from "../../components/ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // return (
  //   <html lang='en'>
  //     <body className={inter.className}>
  //       <Header />
  //       <main className='min-h-screen'>{children}</main>
  //       <Footer />
  //       <Toaster />
  //     </body>
  //   </html>
  // );

  return (
    <html lang='en'>
      {/* <body className={interface.className}></body> */}
      {/* <Header /> */}
      {/* <head>
        <link
          rel='icon'
          type='image/png'
        />
      </head> */}
      <Header />
      <body className='flex flex-col items-center '>
        <div className='mt-8 max-w-7xl min-h-800  w-full flex flex-col gap-20 items-center text-slate-700'>
          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </div>
        <Footer />
        {/* <Toaster /> */}
      </body>
    </html>
  );
}

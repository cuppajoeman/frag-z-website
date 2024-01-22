import { Analytics } from "@vercel/analytics/react";
import Image, { StaticImageData } from "next/image";

import { Navbar } from "@/components";
import { WindowInfo } from "@/components/WindowInfo";
import SupabaseProvider from "@/components/supabase/supabase-provider";

import { createClient } from "@/utils/supabase-server";

import fragz from "@/public/appIcons/fragz.png";
import computer from "@/public/appIcons/computer.png";
import folder from "@/public/appIcons/folder.png";
import bin from "@/public/appIcons/bin.png";
import "@/public/globals.css";
import SupabaseAuthProvider from "@/components/supabase/supabase-auth-provider";
import Cursor from "@/components/Cursor";

// export const metadata = {
//   title: {
//     default: "Frag-Z",
//     template: "%s | Frag-Z",
//   },
//   description: "",
//   keywords: [],
//   authors: [],
//   icons: {
//     icon: "",
//     apple: "",
//   },
//   robots: {
//     index: false,
//     follow: true,
//     nocache: true,
//     googleBot: {
//       index: true,
//       follow: false,
//       noimageindex: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   openGraph: {
//     title: {
//       default: "Frag-Z",
//       template: "%s | Frag-Z",
//     },
//     description: "",
//     url: "",
//     siteName: "Frag-Z",
//     images: [
//       {
//         url: "",
//         width: 1200,
//         height: 700,
//       },
//     ],
//     locale: "en-US",
//     type: "website",
//   },
// };

interface AppProps {
  img: StaticImageData;
  title: string;
}

const appData = [
  {
    img: computer,
    title: "Computer",
  },
  {
    img: folder,
    title: "User Files",
  },
  {
    img: fragz,
    title: "FRAG-Z",
  },
  {
    img: bin,
    title: "Recycle Bin",
  },
];

// Window icon group

const Minimize = () => {
  return (
    <span className="tab-button">
      <span className="w-5/6 h-0 border absolute bottom-1 mx-auto border-black" />
    </span>
  );
};

const Maximize = () => {
  return (
    <span className="tab-button">
      <span className="w-5/6 h-5/6 border border-black border-t-4" />
    </span>
  );
};

const Close = () => {
  return (
    <span className="tab-button">
      <span className="text-lg font-semibold mr-[2px]">X</span>
    </span>
  );
};

// Apps

const App = ({ img, title }: AppProps) => {
  return (
    <div className="flex flex-col my-3">
      <span className="w-16 h-16 overflow-hidden mb-2">
        <Image className="object-fill" src={img} alt="img" />
      </span>
      <h1 className="font-windows text-white text-center">{title}</h1>
    </div>
  );
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className="root">
        <SupabaseProvider>
          <SupabaseAuthProvider serverSession={session}>
          {/* App Row - Lowest*/}
          <div className="flex flex-col items-center h-0 overflow-hidden lg:h-fit lg:w-42 absolute top-3 left-3 -z-10">
            {appData.map((val, i) => (
              <App key={i} img={val.img} title={val.title} />
            ))}
          </div>
          {/* Page container - Highest*/}
          <div className="border lg:border-4 page-container">
            {/* Top tab */}
            <div className="w-full min-h-fit bg-[#C5C5C5] pt-[2px] pb-1">
              <div className="page-container-tab">
                {/* Window info */}
                <WindowInfo />
                {/* Tab button group */}
                <div className="w-1/2 h-full flex flex-row items-center justify-end">
                  <Minimize />
                  <Maximize />
                  <Close />
                </div>
              </div>
            </div>
            {/* Page/Children */}
            <div className="h-full border border-black border-l-2 border-t-2 border-b-slate-200 w-full overflow-y-scroll no-scrollbar">
              {children}
              <Analytics />
            </div>
          </div>
          {/* Navbar - Middle*/}
          <Navbar />
          </SupabaseAuthProvider>
        </SupabaseProvider>
        <Cursor/>
      </body>
    </html>
  );
}

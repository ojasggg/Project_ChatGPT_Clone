import { Poppins } from "@next/font/google";
import "../styles/globals.css";
import { Sidebar } from "../components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className} bg-primary`}>
      <head />
      <body>
        <div className="flex">
          {/* <div>
            <Sidebar />
          </div> */}

          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}

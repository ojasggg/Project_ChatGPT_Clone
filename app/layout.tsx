import { Poppins } from "@next/font/google";
import "../styles/globals.css";
import { getServerSession } from "next-auth";
import { ClientProvider, Login, SessionProvider, Sidebar } from "../components";
import { authOptions } from "../pages/api/auth/[...nextauth]";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" className={`${poppins.className} bg-primary`}>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div>
                <Sidebar />
              </div>
              <ClientProvider />

              <div className="flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}

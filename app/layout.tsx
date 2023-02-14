import { Sidebar } from "../components";
import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <Sidebar />
      <body>{children}</body>
    </html>
  );
}

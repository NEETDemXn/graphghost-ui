import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GraphGhost — Discord Server Health Dashboard",
  description:
    "Cyberpunk-inspired health dashboard for your Discord server. Visualize activity, detect issues, and keep your community alive.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="body-background">{children}</body>
    </html>
  );
}
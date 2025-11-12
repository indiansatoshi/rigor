import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/top-nav";
import { TeamProvider } from "@/components/team-context";
import { WorkspaceProvider } from "@/components/workspace-context";
import { SidebarProvider } from "@/components/sidebar-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RiGoR",
  description: "Rigorous product management and strategic alignment platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WorkspaceProvider>
          <TeamProvider>
            <SidebarProvider>
              <div className="flex flex-col h-screen">
                <TopNav />
                <div className="flex flex-1 overflow-hidden">
                  {children}
                </div>
              </div>
            </SidebarProvider>
          </TeamProvider>
        </WorkspaceProvider>
      </body>
    </html>
  );
}

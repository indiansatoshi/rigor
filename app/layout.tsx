import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/top-nav";
import { TeamProvider } from "@/components/team-context";
import { WorkspaceProvider } from "@/components/workspace-context";
import { SidebarProvider } from "@/components/sidebar-context";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
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
        className={`${sans.variable} ${serif.variable} ${mono.variable} antialiased font-sans`}
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

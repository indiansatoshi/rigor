import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/layout/top-nav";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { TeamProvider } from "@/components/providers/team-context";
import { WorkspaceProvider } from "@/components/providers/workspace-context";
import { GoalProvider } from "@/components/providers/goal-context";
import { SidebarProvider } from "@/components/ui/sidebar";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Outliv",
  description: "Rigorous product management and strategic alignment platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <WorkspaceProvider>
          <GoalProvider>
            <TeamProvider>
              <SidebarProvider>
                <AppSidebar />
                <main className="flex flex-col flex-1 min-w-0 h-screen overflow-hidden">
                  <TopNav />
                  <div className="flex-1 overflow-y-auto">
                    {children}
                  </div>
                </main>
              </SidebarProvider>
            </TeamProvider>
          </GoalProvider>
        </WorkspaceProvider>
      </body>
    </html>
  );
}

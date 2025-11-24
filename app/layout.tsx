import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { LayoutDashboard, Map, Lightbulb, Layers, Target, Search, Bell, HelpCircle, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sidebar } from "@/components/layout/sidebar";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StratAlign - Unified Strategy Platform",
  description: "Connect strategy to execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#F0F4F9]`}>
        <div className="flex h-screen overflow-hidden p-2 gap-2">
          <Sidebar />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 relative">
            {/* Top Navigation Bar */}
            <header className="h-16 border-b border-gray-100 bg-white flex items-center justify-between px-6 shrink-0 z-10">
              <div className="flex items-center gap-4 w-1/3">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search..."
                    className="pl-10 h-10 bg-gray-50 border-transparent focus-visible:bg-white focus-visible:border-primary/20 rounded-full transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-500 hover:text-primary hover:bg-primary/5 rounded-full">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-500 hover:text-primary hover:bg-primary/5 rounded-full">
                  <HelpCircle className="h-5 w-5" />
                </Button>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white ml-2 cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-sm font-bold">JD</span>
                </div>
              </div>
            </header>

            {/* Page Content - No global scroll, children handle it */}
            <main className="flex-1 overflow-hidden bg-white p-6 flex flex-col">
              <div className="h-full w-full flex flex-col">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

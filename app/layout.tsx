import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { LayoutDashboard, Map, Lightbulb, Layers, Target, Search, Bell, HelpCircle, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "StratAlign - Unified Strategy Platform",
  description: "Connect strategy to execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { name: "Master View", href: "/", icon: LayoutDashboard },
    { name: "Strategy", href: "/strategy", icon: Target },
    { name: "Portfolio", href: "/portfolio", icon: Map },
    { name: "Product", href: "/product", icon: Lightbulb },
    { name: "Delivery", href: "/delivery", icon: Layers },
  ];

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="flex h-screen bg-background text-foreground overflow-hidden">
          {/* ADS Sidebar (Dark) - Slimmer */}
          <aside className="w-52 bg-[#091E42] text-[#DEEBFF] flex flex-col shrink-0 z-20 transition-all duration-300">
            <div className="p-3 h-14 flex items-center gap-2 border-b border-[#A6C5F7]/20">
              <div className="h-6 w-6 bg-[#0052CC] rounded flex items-center justify-center shrink-0">
                <Target className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold tracking-tight truncate">StratAlign</span>
            </div>

            <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-[3px] hover:bg-[#A6C5F7]/20 transition-colors text-[#DEEBFF]"
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{item.name}</span>
                </Link>
              ))}
            </nav>

            <div className="p-3 border-t border-[#A6C5F7]/20 text-[10px] text-[#A6C5F7] text-center truncate">
              Powered by StratAlign
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            {/* Top Navigation Bar */}
            <header className="h-14 border-b bg-background flex items-center justify-between px-4 shrink-0 z-10">
              <div className="flex items-center gap-4 w-1/3">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search..."
                    className="pl-8 h-8 bg-secondary border-transparent focus-visible:bg-background focus-visible:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-secondary">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-secondary">
                  <HelpCircle className="h-4 w-4" />
                </Button>
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary ml-2 cursor-pointer hover:bg-primary/20 transition-colors">
                  <span className="text-xs font-bold">JD</span>
                </div>
              </div>
            </header>

            {/* Page Content - No global scroll, children handle it */}
            <main className="flex-1 overflow-hidden bg-secondary/30 p-4 flex flex-col">
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

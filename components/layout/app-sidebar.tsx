"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import {
    HomeIcon,
    TargetIcon,
    FolderIcon,
    UsersIcon,
    BarChart3Icon,
    SettingsIcon,
    HelpCircleIcon,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AppSidebar() {
    const pathname = usePathname()

    const navItems = [
        { title: "Home", href: "/", icon: HomeIcon },
        { title: "Goals", href: "/goals", icon: TargetIcon },
        { title: "Projects", href: "/projects", icon: FolderIcon },
        { title: "Teams", href: "/teams", icon: UsersIcon },
        { title: "Reports", href: "/reports", icon: BarChart3Icon },
    ]

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="h-14 flex items-center justify-center border-b border-sidebar-border">
                <Link href="/" className="flex items-center gap-2 px-2 w-full group-data-[collapsible=icon]:justify-center hover:opacity-80 transition-opacity">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <span className="font-bold">O</span>
                    </div>
                    <span className="font-bold text-lg group-data-[collapsible=icon]:hidden">
                        Outliv
                    </span>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Platform</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={pathname === item.href || pathname.startsWith(item.href + "/")}
                                        tooltip={item.title}
                                    >
                                        <Link href={item.href}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Settings</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip="Settings">
                                    <Link href="/settings">
                                        <SettingsIcon />
                                        <span>Settings</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip="Help">
                                    <Link href="/help">
                                        <HelpCircleIcon />
                                        <span>Help</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
            <SidebarRail />
        </Sidebar>
    )
}

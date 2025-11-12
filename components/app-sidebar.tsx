"use client"

import * as React from "react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { appData } from "@/components/app-data"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={appData.navMain} />
        {/* <NavProjects projects={appData.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={appData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

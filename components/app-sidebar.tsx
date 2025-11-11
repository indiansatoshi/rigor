"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  CircleCheck,
  Command,
  Compass,
  EyeIcon,
  FlaskConical,
  Frame,
  GalleryVerticalEnd,
  LandPlot,
  Map,
  PieChart,
  Route,
  Settings2,
  SquareTerminal,
} from "lucide-react"

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

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Strategy",
      url: "#",
      icon: LandPlot,
      isActive: true,
      items: [
        {
          title: "Lean Canvas",
          url: "#",
        },
        {
          title: "OKRs",
          url: "#",
        },
      ],
    },
    {
      title: "Discovery",
      url: "#",
      icon: FlaskConical,
      items: [
        {
          title: "OST",
          url: "#",
        },
        {
          title: "Hypotheses",
          url: "#",
        },
      ],
    },
    {
      title: "Planning",
      url: "#",
      icon: Route,
      items: [
        {
          title: "Roadmaps",
          url: "#",
        },
        {
          title: "PI Plans",
          url: "#",
        },
        {
          title: "Release Tracker",
          url: "#",
        },
      ],
    },
    {
      title: "Delivery",
      url: "#",
      icon: CircleCheck,
      items: [
        {
          title: "Development",
          url: "#",
        },
        {
          title: "Testing",
          url: "#",
        },
        {
          title: "Deployment",
          url: "#",
        },
      ],
    },
    {
      title: "Governance",
      url: "#",
      icon: EyeIcon,
      items: [
        {
          title: "Operations",
          url: "#",
        },
        {
          title: "Customer Support",
          url: "#",
        },
        {
          title: "Feedback Loop",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

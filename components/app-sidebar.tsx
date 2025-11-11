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
      url: "/strategy",
      icon: LandPlot,
      isActive: true,
      items: [
        {
          title: "Lean Canvas",
          url: "/strategy/lean-canvas",
        },
        {
          title: "OKRs",
          url: "/strategy/okrs",
        },
      ],
    },
    {
      title: "Discovery",
      url: "/discovery",
      icon: FlaskConical,
      items: [
        {
          title: "OST",
          url: "/discovery/ost",
        },
        {
          title: "Hypotheses",
          url: "/discovery/hypotheses",
        },
      ],
    },
    {
      title: "Planning",
      url: "/planning",
      icon: Route,
      items: [
        {
          title: "Roadmaps",
          url: "/planning/roadmaps",
        },
        {
          title: "PI Plans",
          url: "/planning/pi-plans",
        },
        {
          title: "Release Tracker",
          url: "/planning/release-tracker",
        },
      ],
    },
    {
      title: "Delivery",
      url: "/delivery",
      icon: CircleCheck,
      items: [
        {
          title: "Development",
          url: "/delivery/development",
        },
        {
          title: "Testing",
          url: "/delivery/testing",
        },
        {
          title: "Deployment",
          url: "/delivery/deployment",
        },
      ],
    },
    {
      title: "Governance",
      url: "/governance",
      icon: EyeIcon,
      items: [
        {
          title: "Operations",
          url: "/governance/operations",
        },
        {
          title: "Customer Support",
          url: "/governance/customer-support",
        },
        {
          title: "Feedback Loop",
          url: "/governance/feedback-loop",
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

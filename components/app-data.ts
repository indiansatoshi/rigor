import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
} from "lucide-react";

export const appData = {
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
      icon: undefined,
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
      icon: undefined,
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
      icon: undefined,
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
      title: "Governance",
      url: "/governance",
      icon: undefined,
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
};

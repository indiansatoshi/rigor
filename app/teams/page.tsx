"use client";

import { useWorkspace } from "@/components/providers/workspace-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusIcon, UsersIcon, FolderIcon } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";

// Mock data for teams since we don't have a full backend yet
const TEAMS_DATA = [
    {
        id: "t1",
        name: "Platform Engineering",
        focus: "Infrastructure & Core Services",
        members: [
            { name: "Alice", avatar: "/avatars/alice.png" },
            { name: "Bob", avatar: "/avatars/bob.png" },
            { name: "Charlie", avatar: "/avatars/charlie.png" },
            { name: "Dave", avatar: "/avatars/dave.png" },
        ],
        projectCount: 5,
        health: "Healthy",
    },
    {
        id: "t2",
        name: "Growth & Acquisition",
        focus: "User Onboarding & Marketing",
        members: [
            { name: "Eve", avatar: "/avatars/eve.png" },
            { name: "Frank", avatar: "/avatars/frank.png" },
            { name: "Grace", avatar: "/avatars/grace.png" },
        ],
        projectCount: 3,
        health: "At Risk",
    },
    {
        id: "t3",
        name: "Mobile Experience",
        focus: "iOS & Android Apps",
        members: [
            { name: "Heidi", avatar: "/avatars/heidi.png" },
            { name: "Ivan", avatar: "/avatars/ivan.png" },
        ],
        projectCount: 2,
        health: "Healthy",
    },
    {
        id: "t4",
        name: "Design Systems",
        focus: "UI Kit & Brand Guidelines",
        members: [
            { name: "Judy", avatar: "/avatars/judy.png" },
            { name: "Kevin", avatar: "/avatars/kevin.png" },
            { name: "Leo", avatar: "/avatars/leo.png" },
            { name: "Mallory", avatar: "/avatars/mallory.png" },
            { name: "Niaj", avatar: "/avatars/niaj.png" },
        ],
        projectCount: 1,
        health: "Healthy",
    },
];

export default function TeamsPage() {
    const { selectedOrg } = useWorkspace();

    if (!selectedOrg) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <h2 className="text-lg font-semibold">No Organization Selected</h2>
                    <p className="text-muted-foreground">
                        Please select an organization to view teams.
                    </p>
                </div>
            </div>
        );
    }

    const getHealthColor = (health: string) => {
        switch (health) {
            case "Healthy":
                return "bg-green-500/10 text-green-700 border-green-500/20";
            case "At Risk":
                return "bg-yellow-500/10 text-yellow-700 border-yellow-500/20";
            case "Critical":
                return "bg-red-500/10 text-red-700 border-red-500/20";
            default:
                return "bg-gray-500/10 text-gray-700";
        }
    };

    return (
        <PageContainer>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Teams</h1>
                    <p className="text-muted-foreground text-sm mt-1">
                        Directory of teams driving {selectedOrg.name} forward.
                    </p>
                </div>
                <Button size="sm">
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Create Team
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {TEAMS_DATA.map((team) => (
                    <Card key={team.id} className="group hover:shadow-md transition-all duration-200">
                        <CardHeader className="pb-2 p-3">
                            <div className="flex items-start justify-between">
                                <div className="space-y-1">
                                    <CardTitle className="text-base">{team.name}</CardTitle>
                                    <p className="text-xs text-muted-foreground">{team.focus}</p>
                                </div>
                                <Badge variant="outline" className={`text-[10px] px-1.5 py-0 ${getHealthColor(team.health)}`}>
                                    {team.health}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="p-3 pt-0">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-xs">
                                    <div className="flex items-center text-muted-foreground">
                                        <FolderIcon className="h-3.5 w-3.5 mr-1.5" />
                                        {team.projectCount} Active Projects
                                    </div>
                                    <div className="flex items-center text-muted-foreground">
                                        <UsersIcon className="h-3.5 w-3.5 mr-1.5" />
                                        {team.members.length} Members
                                    </div>
                                </div>

                                <div className="flex items-center -space-x-2 overflow-hidden pt-1">
                                    {team.members.map((member, i) => (
                                        <Avatar key={i} className="inline-block h-7 w-7 ring-2 ring-background">
                                            <AvatarImage src={member.avatar} />
                                            <AvatarFallback className="bg-primary/10 text-primary text-[10px]">
                                                {member.name[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                    ))}
                                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-muted text-[10px] font-medium ring-2 ring-background hover:bg-muted/80 transition-colors cursor-pointer">
                                        +
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </PageContainer>
    );
}

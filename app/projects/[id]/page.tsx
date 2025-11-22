"use client";

import { useWorkspace } from "@/components/providers/workspace-context";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/layout/page-container";
import {
    ArrowLeftIcon,
    UsersIcon,
    FolderIcon,
    ActivityIcon
} from "lucide-react";
import Link from "next/link";

export default function ProjectDetailPage() {
    const params = useParams();
    const { projects, teams, selectedProject, setSelectedProject } = useWorkspace();

    // Find the project by ID from URL
    const projectId = params.id as string;
    const project = projects.find(p => p.id === projectId);

    // Update selected project if it's different
    if (project && selectedProject?.id !== projectId) {
        setSelectedProject(project);
    }

    if (!project) {
        return (
            <PageContainer>
                <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                        <h2 className="text-lg font-semibold">Project Not Found</h2>
                        <p className="text-muted-foreground mb-4">
                            The project you're looking for doesn't exist.
                        </p>
                        <Button asChild>
                            <Link href="/projects">
                                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                                Back to Projects
                            </Link>
                        </Button>
                    </div>
                </div>
            </PageContainer>
        );
    }

    // Find related team
    const relatedTeam = project.teamId ? teams.find(t => t.id === project.teamId) : null;

    return (
        <PageContainer>
            {/* Header */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/projects">
                            <ArrowLeftIcon className="h-4 w-4 mr-2" />
                            Back
                        </Link>
                    </Button>
                </div>

                <div className="flex items-start justify-between">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold tracking-tight">{project.name}</h1>
                        {relatedTeam && (
                            <p className="text-sm text-muted-foreground">
                                Team: {relatedTeam.name}
                            </p>
                        )}
                    </div>
                    <Button size="sm">Edit Project</Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardContent className="p-3">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <UsersIcon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">Team</p>
                                <p className="text-sm font-semibold">{relatedTeam?.name || "No team assigned"}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-3">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <FolderIcon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">Project ID</p>
                                <p className="text-sm font-mono">{project.id}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content */}
            <div className="grid gap-6 md:grid-cols-3">
                {/* Left Column - Details */}
                <div className="md:col-span-2 space-y-4">
                    {/* Activity */}
                    <Card>
                        <CardHeader className="pb-2 p-3">
                            <CardTitle className="text-base">Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent className="p-3 pt-0">
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold">
                                        U
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm">
                                            <span className="font-medium">User</span> created this project
                                        </p>
                                        <p className="text-xs text-muted-foreground">Recently</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - Metadata */}
                <div className="space-y-4">
                    <Card>
                        <CardHeader className="pb-2 p-3">
                            <CardTitle className="text-base">Project Details</CardTitle>
                        </CardHeader>
                        <CardContent className="p-3 pt-0">
                            <div className="space-y-3 text-sm">
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">Project ID</p>
                                    <p className="font-mono text-xs">{project.id}</p>
                                </div>
                                {project.teamId && (
                                    <div>
                                        <p className="text-xs text-muted-foreground mb-1">Team</p>
                                        <p className="font-medium">{relatedTeam?.name || project.teamId}</p>
                                    </div>
                                )}
                                {project.portfolioId && (
                                    <div>
                                        <p className="text-xs text-muted-foreground mb-1">Portfolio ID</p>
                                        <p className="font-mono text-xs">{project.portfolioId}</p>
                                    </div>
                                )}
                                {project.workspaceId && (
                                    <div>
                                        <p className="text-xs text-muted-foreground mb-1">Workspace ID</p>
                                        <p className="font-mono text-xs">{project.workspaceId}</p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </PageContainer>
    );
}

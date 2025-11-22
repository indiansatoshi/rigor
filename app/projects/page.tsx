"use client";

import { useWorkspace } from "@/components/providers/workspace-context";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusIcon, FolderIcon, ChevronRightIcon } from "lucide-react";
import { AlignmentPicker } from "@/components/goals/alignment-picker";
import { PageContainer } from "@/components/layout/page-container";

export default function ProjectsPage() {
    const { selectedOrg, projects, getProjectHierarchy } = useWorkspace();

    if (!selectedOrg) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <h2 className="text-lg font-semibold">No Organization Selected</h2>
                    <p className="text-muted-foreground">
                        Please select an organization to view projects.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <PageContainer>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
                    <p className="text-muted-foreground text-sm mt-1">
                        Manage initiatives and track progress across {selectedOrg.name}.
                    </p>
                </div>
                <Button size="sm">
                    <PlusIcon className="h-4 w-4 mr-2" />
                    New Project
                </Button>
            </div>

            <div className="grid gap-4">
                {projects.length === 0 ? (
                    <div className="text-center py-12 border-2 border-dashed rounded-lg">
                        <h3 className="text-base font-medium">No projects found</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Create a project to start tracking work.
                        </p>
                        <Button variant="outline" size="sm">Create Project</Button>
                    </div>
                ) : (
                    projects.map((project) => (
                        <Card key={project.id} className="group hover:shadow-md transition-all duration-200">
                            <CardContent className="p-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                                            <FolderIcon className="h-3 w-3" />
                                            <span>{getProjectHierarchy(project)}</span>
                                        </div>
                                        <h3 className="font-semibold text-base flex items-center gap-2">
                                            {project.name}
                                            <ChevronRightIcon className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <AlignmentPicker projectId={project.id} />
                                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0">Active</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </PageContainer>
    );
}

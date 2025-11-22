"use client";

import { useState } from "react";
import { useGoal, Goal } from "@/components/providers/goal-context";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface GoalDialogProps {
    children: React.ReactNode;
    goalToEdit?: Goal;
}

export function GoalDialog({ children, goalToEdit }: GoalDialogProps) {
    const { addGoal, updateGoal } = useGoal();
    const [open, setOpen] = useState(false);

    const [title, setTitle] = useState(goalToEdit?.title || "");
    const [description, setDescription] = useState(goalToEdit?.description || "");
    const [status, setStatus] = useState<Goal["status"]>(
        goalToEdit?.status || "On Track"
    );
    const [progress, setProgress] = useState(goalToEdit?.progress || 0);
    const [timebox, setTimebox] = useState(goalToEdit?.timebox || "FY 2024");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (goalToEdit) {
            updateGoal(goalToEdit.id, {
                title,
                description,
                status,
                progress,
                timebox,
            });
        } else {
            addGoal({
                title,
                description,
                status,
                progress,
                timebox,
                ownerId: "u1", // Mock owner
            });
        }
        setOpen(false);
        // Reset form if adding
        if (!goalToEdit) {
            setTitle("");
            setDescription("");
            setStatus("On Track");
            setProgress(0);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{goalToEdit ? "Edit Goal" : "Create Goal"}</DialogTitle>
                    <DialogDescription>
                        Define a high-level objective for your organization.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                            Title
                        </Label>
                        <Input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="col-span-3"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="status" className="text-right">
                            Status
                        </Label>
                        <Select
                            value={status}
                            onValueChange={(val: Goal["status"]) => setStatus(val)}
                        >
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="On Track">On Track</SelectItem>
                                <SelectItem value="At Risk">At Risk</SelectItem>
                                <SelectItem value="Off Track">Off Track</SelectItem>
                                <SelectItem value="Completed">Completed</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="progress" className="text-right">
                            Progress (%)
                        </Label>
                        <Input
                            id="progress"
                            type="number"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={(e) => setProgress(Number(e.target.value))}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="timebox" className="text-right">
                            Timebox
                        </Label>
                        <Input
                            id="timebox"
                            value={timebox}
                            onChange={(e) => setTimebox(e.target.value)}
                            className="col-span-3"
                            placeholder="e.g. Q4 2024"
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

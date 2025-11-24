"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

// --- Flow Board Container ---
export const FlowBoard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("h-full flex flex-col overflow-hidden", className)}>
            <div className="flex-1 overflow-x-auto overflow-y-hidden">
                <div className="flex h-full gap-12 min-w-max px-4 relative">
                    {children}
                </div>
            </div>
        </div>
    );
};

// --- Flow Column ---
export const FlowColumn = ({ title, icon: Icon, color, children, className }: { title: string, icon: any, color: string, children: React.ReactNode, className?: string }) => (
    <div className={cn("flex flex-col gap-4 min-w-[320px] max-w-[320px] h-full z-10", className)}>
        <div className="flex items-center gap-2 px-1">
            <div className={cn("p-2 rounded-lg bg-white shadow-sm border border-gray-100", color)}>
                <Icon className="h-4 w-4" />
            </div>
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">{title}</h2>
        </div>
        <div className="flex-1 overflow-y-auto pr-2 space-y-4 pb-10">
            {children}
        </div>
    </div>
);

// --- Flow Card ---
interface FlowCardProps {
    title: string;
    description?: string;
    status?: string;
    isActive?: boolean;
    type?: string;
    meta?: string;
    onClick?: () => void;
    className?: string;
}

export const FlowCard = ({ title, description, status, isActive, type, meta, onClick, className }: FlowCardProps) => (
    <motion.div
        whileHover={{ y: -2 }}
        onClick={onClick}
        className={cn(
            "group relative bg-white rounded-xl p-4 border transition-all duration-300 cursor-pointer",
            isActive
                ? "border-primary/40 shadow-md ring-1 ring-primary/10"
                : "border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200",
            className
        )}
    >
        {isActive && (
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
        )}
        <div className="flex justify-between items-start mb-2">
            {type && <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{type}</span>}
            {status && (
                <span className={cn(
                    "text-[10px] px-2 py-0.5 rounded-full font-medium",
                    isActive ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-500"
                )}>
                    {status}
                </span>
            )}
        </div>
        <h3 className={cn("text-sm font-semibold mb-1 leading-snug", isActive ? "text-gray-900" : "text-gray-700")}>
            {title}
        </h3>
        {description && (
            <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                {description}
            </p>
        )}
        {meta && (
            <div className="pt-2 border-t border-gray-50 flex items-center gap-2 text-[10px] text-gray-400">
                <Sparkles className="h-3 w-3" />
                {meta}
            </div>
        )}

        {/* Connector Dots */}
        <div className={cn(
            "absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white transition-colors z-10",
            isActive ? "bg-primary" : "bg-gray-200 group-hover:bg-gray-300"
        )} />
        <div className={cn(
            "absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white transition-colors z-10",
            isActive ? "bg-primary" : "bg-gray-200 group-hover:bg-gray-300"
        )} />
    </motion.div>
);

// --- Flow Connector Layer ---
// This is a simplified connector that draws lines between fixed points for now.
// In a real app, this would calculate positions based on refs.
export const FlowConnectorLayer = ({ children }: { children?: React.ReactNode }) => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
        {children}
    </svg>
);

export const FlowConnector = ({ start, end }: { start: { x: number, y: number }, end: { x: number, y: number } }) => {
    // Calculate control points for bezier curve
    const midX = (start.x + end.x) / 2;
    const path = `M ${start.x} ${start.y} C ${midX} ${start.y}, ${midX} ${end.y}, ${end.x} ${end.y}`;

    return (
        <path
            d={path}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
        />
    );
};

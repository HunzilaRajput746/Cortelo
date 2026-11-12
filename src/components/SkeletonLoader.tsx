import React from "react";

export default function SkeletonLoader({ className = "h-4 w-full" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-white/[0.05] ${className}`}
    />
  );
}

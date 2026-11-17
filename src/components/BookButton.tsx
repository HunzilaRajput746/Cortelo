"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useAgencyShell } from "./ClientShell";

/** Opens the booking drawer from server-rendered pages. */
export default function BookButton({
  scope,
  label = "Book a call",
  variant = "primary",
  className = "",
}: {
  scope?: string;
  label?: string;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const { openDrawer } = useAgencyShell();
  return (
    <button onClick={() => openDrawer(scope)} className={`btn btn-${variant} ${className}`}>
      {label} <ArrowRight className="h-4 w-4" />
    </button>
  );
}

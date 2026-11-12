import React from "react";
import { CheckCircle2 } from "lucide-react";

interface DeliverableCardProps {
  title: string;
  items: string[];
}

export default function DeliverableCard({ title, items }: DeliverableCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-[#0B0F19]/80 border border-cortelo-border space-y-4">
      <h4 className="text-sm font-bold uppercase tracking-wider text-cortelo-text font-mono">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-xs text-cortelo-muted font-light">
            <CheckCircle2 className="w-4 h-4 text-cortelo-mint shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

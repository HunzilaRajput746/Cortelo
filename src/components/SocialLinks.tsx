import React from "react";
import { FOUNDER_DATA } from "@/lib/agencyData";
import { ExternalLink, Award, MessageSquare } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <a
        href={FOUNDER_DATA.portfolioUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full border border-cortelo-border bg-[#0F131D] flex items-center justify-center text-cortelo-muted hover:text-cortelo-mint hover:border-cortelo-mint transition-all"
        title="Founder Portfolio (devhunzila.site)"
      >
        <ExternalLink className="w-4 h-4" />
      </a>
      <a
        href={FOUNDER_DATA.fiverrUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full border border-cortelo-border bg-[#0F131D] flex items-center justify-center text-green-400 hover:border-green-400 transition-all"
        title="Fiverr Services"
      >
        <Award className="w-4 h-4" />
      </a>
      <a
        href={FOUNDER_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 transition-all"
        title="Direct WhatsApp"
      >
        <MessageSquare className="w-4 h-4" />
      </a>
    </div>
  );
}

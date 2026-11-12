"use client";

import React from "react";
import Image from "next/image";
import { Globe, Sparkles, MessageSquare } from "lucide-react";
import { AGENCY_TEAM_ROSTER, FOUNDER_DATA } from "@/lib/agencyData";
import { useAgencyShell } from "./ClientShell";

export default function TeamShowcase() {
  const { openFounderModal, openDrawer } = useAgencyShell();

  return (
    <section id="team" className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-white/10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-white/90 font-semibold uppercase tracking-wider inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4533]" />
          Team
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#FCFCFA] tracking-tight">
          Meet the <span className="font-serif italic font-normal text-white lowercase">incredible</span> team.
        </h2>
        <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light">
          We pride ourselves on fielding senior-level engineering specialists across machine learning, full-stack architecture, private cloud VPS infrastructure, and enterprise design.
        </p>
      </div>

      {/* Grid of Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {AGENCY_TEAM_ROSTER.map((member) => {
          const isFounder = member.id === "hunzila-nisar";
          const isCoFounder = member.id === "mahreen-hashir";

          return (
            <div
              key={member.id}
              className={`rounded-3xl p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between group bg-[#0D0D0D] ${
                isFounder
                  ? "border-[#FF4533]/60 shadow-[0_0_30px_rgba(255,69,51,0.18)] relative"
                  : "border-white/10 hover:border-[#FF4533]/50 shadow-sm hover:shadow-[0_0_30px_rgba(255,69,51,0.12)]"
              }`}
            >
              {isFounder && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#FF4533] text-white text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3" /> Lead Architect
                </div>
              )}

              <div>
                {/* Avatar with smooth zoom */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#141414] border border-white/10 mb-5">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Badge in image corner */}
                  <div className="absolute bottom-3 left-3">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold tracking-wider uppercase border backdrop-blur-md ${
                      isFounder
                        ? "bg-[#FF4533]/20 border-[#FF4533]/40 text-[#FF4533]"
                        : isCoFounder
                        ? "bg-purple-500/20 border-purple-500/40 text-purple-300"
                        : "bg-white/10 border-white/15 text-white/90"
                    }`}>
                      {member.badge}
                    </span>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="space-y-1 mb-3">
                  <h3 className="text-lg font-bold text-[#FCFCFA] flex items-center justify-between">
                    <span>{member.name}</span>
                    {isFounder && (
                      <span className="text-xs font-mono text-[#FF4533] font-normal">
                        Founder
                      </span>
                    )}
                  </h3>
                  <p className="text-xs font-mono text-[#FF4533] font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-xs text-white/60 leading-relaxed mb-4 line-clamp-3 font-light">
                  {member.bio}
                </p>

                {/* Specialties Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {member.specialties.slice(0, 4).map((spec) => (
                    <span
                      key={spec}
                      className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/10 text-[10px] font-mono text-white/60"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                {isFounder ? (
                  <>
                    <button
                      onClick={openFounderModal}
                      className="flex-1 py-2 px-3 rounded-xl bg-[#FF4533]/15 hover:bg-[#FF4533]/25 border border-[#FF4533]/40 text-[#FF4533] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" /> Founder Dossier
                    </button>
                    {member.portfolioUrl && (
                      <a
                        href={member.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl border border-white/10 hover:border-[#FF4533]/50 text-white/60 hover:text-[#FF4533] transition-colors"
                        title="Hunzila Nisar Portfolio (devhunzila.site)"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl border border-white/10 hover:border-[#0A66C2]/60 text-white/60 hover:text-[#0A66C2] transition-colors"
                        title="LinkedIn Profile"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => openDrawer(member.name)}
                      className="flex-1 py-2 px-3 rounded-xl border border-white/10 hover:border-[#FF4533]/50 text-white/80 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      View Profile
                    </button>
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl border border-white/10 hover:border-[#0A66C2]/60 text-white/60 hover:text-[#0A66C2] transition-colors"
                        title={`${member.name} LinkedIn`}
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Roster Callout Box */}
      <div className="mt-16 rounded-3xl p-8 sm:p-10 border border-white/10 bg-[#0D0D0D] max-w-4xl mx-auto text-center space-y-4 shadow-sm">
        <h4 className="text-xl sm:text-2xl font-bold uppercase text-[#FCFCFA]">
          Direct Founder-Led Execution & Senior Engineering
        </h4>
        <p className="text-sm text-white/60 leading-relaxed font-light max-w-2xl mx-auto">
          Every client project is personally architected and overseen by <span className="text-[#FCFCFA] font-semibold">Hunzila Nisar</span> and deployed by our dedicated senior engineers. We never outsource your core IP to junior subcontractors.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href={FOUNDER_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-conversion-primary px-6 py-3.5 rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-[0_0_20px_rgba(255,69,51,0.35)]"
          >
            <MessageSquare className="w-4 h-4" /> Chat Directly on WhatsApp
          </a>
          <button
            onClick={openFounderModal}
            className="px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 text-white font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer transition-colors"
          >
            View Founder Portfolio & Certifications
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { AGENCY_TEAM_ROSTER, FOUNDER_DATA, type TeamMember } from "@/lib/agencyData";

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <main className="relative z-10 pt-36 pb-28">
      <section className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="max-w-3xl border-b border-white/15 pb-14">
          <p className="mb-6 text-[11px] font-mono uppercase tracking-[0.24em] text-[#d7a47a]">
            Cortelo / The people behind the work
          </p>
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#f7f5f0] sm:text-7xl">
            A small team with
            <span className="font-serif italic font-normal text-[#d7a47a]"> serious range.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/60 sm:text-lg">
            Strategists, engineers, and makers working together from first principle to production. Click a profile to see the thinking behind each discipline.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {AGENCY_TEAM_ROSTER.map((member, index) => (
            <button
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="group text-left animate-team-in"
              style={{ animationDelay: `${index * 55}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#171818]">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top grayscale transition duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-4 left-4 text-[10px] font-mono uppercase tracking-[0.18em] text-white/75">
                  {member.badge}
                </span>
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/35 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-white/15 py-5">
                <div>
                  <h2 className="text-lg font-medium text-white">{member.name}</h2>
                  <p className="mt-1 text-xs font-mono uppercase tracking-[0.13em] text-[#d7a47a]">{member.role}</p>
                </div>
                <span className="pt-1 text-xs text-white/35">0{index + 1}</span>
              </div>
              <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-white/50">{member.bio}</p>
            </button>
          ))}
        </div>

        <div className="mt-24 flex flex-col gap-5 border-t border-white/15 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>Want to work with the studio?</span>
          <Link href={`mailto:${FOUNDER_DATA.email}`} className="text-[#d7a47a] transition-colors hover:text-white">
            {FOUNDER_DATA.email} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center">
          <button className="absolute inset-0 cursor-default" onClick={() => setSelectedMember(null)} aria-label="Close member details" />
          <article className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto bg-[#111313] p-6 shadow-2xl sm:p-10 animate-member-in">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center text-white/50 transition-colors hover:text-white"
              aria-label="Close member details"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex flex-col gap-7 sm:flex-row">
              <div className="relative h-48 w-full shrink-0 overflow-hidden bg-[#1a1b1b] sm:h-56 sm:w-44">
                <Image src={selectedMember.avatar} alt={selectedMember.name} fill className="object-cover object-top" />
              </div>
              <div className="pt-1">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d7a47a]">{selectedMember.badge}</p>
                <h2 className="mt-3 text-3xl font-medium tracking-tight text-white">{selectedMember.name}</h2>
                <p className="mt-2 text-sm text-white/55">{selectedMember.role}</p>
                <p className="mt-6 text-sm leading-relaxed text-white/65">{selectedMember.bio}</p>
              </div>
            </div>
            <div className="mt-9 border-t border-white/15 pt-7">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Specialties</p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                {selectedMember.specialties.map((specialty) => (
                  <span key={specialty} className="text-sm text-white/75">{specialty}</span>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 border-t border-white/15 pt-6">
              {selectedMember.portfolioUrl && (
                <a href={selectedMember.portfolioUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#d7a47a] hover:text-white">
                  Portfolio <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              {selectedMember.linkedinUrl && (
                <a href={selectedMember.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
                  LinkedIn <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </article>
        </div>
      )}
    </main>
  );
}

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AGENCY_PROJECTS } from "@/lib/agencyData";
import WorkCard from "./WorkCard";

export default function ResultsSection() {
  const [first, ...rest] = AGENCY_PROJECTS;
  const shown = rest.slice(0, 4);

  return (
    <section id="results" aria-labelledby="results-h" className="py-16 md:py-22">
      <div className="wrap">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-5">Selected work</p>
            <h2 id="results-h" className="h2 max-w-[760px]">
              Systems in production. <span className="soft">Numbers from the running builds.</span>
            </h2>
          </div>
          <Link href="/work" className="link-draw shrink-0 text-[13px]">
            All case studies <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <WorkCard p={first} wide />
          {shown.map((p) => (
            <WorkCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

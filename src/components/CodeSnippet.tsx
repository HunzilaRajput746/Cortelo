import React from "react";
import CopyButton from "./CopyButton";

interface CodeSnippetProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeSnippet({ code, language = "bash", title }: CodeSnippetProps) {
  return (
    <div className="rounded-2xl border border-cortelo-border bg-[#07090E] overflow-hidden text-xs font-mono">
      {title && (
        <div className="px-4 py-2.5 bg-white/[0.02] border-b border-cortelo-border flex items-center justify-between">
          <span className="text-cortelo-muted text-[11px]">{title}</span>
          <CopyButton text={code} />
        </div>
      )}
      <pre className="p-4 text-cortelo-mint overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

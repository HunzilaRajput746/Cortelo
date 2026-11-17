"use client";

import React, { useState } from "react";
import { AGENCY_SERVICES } from "@/lib/agencyData";

export const SERVICE_OPTIONS = [...AGENCY_SERVICES.map((s) => s.title), "Something else"];

const base =
  "w-full rounded-[var(--radius-s)] border bg-[var(--surface2)] px-4 text-[15px] text-[var(--text)] outline-none transition-colors placeholder:text-[var(--text-faint)] focus:border-[var(--accent)]";

interface FieldProps {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
  children?: React.ReactNode;
}

/** A labelled field with its error shown under it. */
export function Field({ label, name, error, optional, children }: FieldProps) {
  return (
    <label className="block" htmlFor={name}>
      <span className="flex items-baseline justify-between text-[14px] text-[var(--text-muted)]">
        {label}
        {optional && <span className="text-[12px] text-[var(--text-faint)]">Optional</span>}
      </span>
      <span className="mt-2 block">{children}</span>
      {error && (
        <span id={`${name}-error`} role="alert" className="mt-1.5 block text-[13px] text-[#ff8a7a]">
          {error}
        </span>
      )}
    </label>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { name: string; invalid?: boolean };
export function Input({ invalid, className = "", ...p }: InputProps) {
  return (
    <input
      id={p.name}
      aria-invalid={invalid || undefined}
      aria-describedby={invalid ? `${p.name}-error` : undefined}
      className={`${base} h-12 ${invalid ? "border-[#ff8a7a]" : "border-[var(--line-strong)]"} ${className}`}
      {...p}
    />
  );
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { name: string; invalid?: boolean };
export function Textarea({ invalid, className = "", ...p }: TextareaProps) {
  return (
    <textarea
      id={p.name}
      aria-invalid={invalid || undefined}
      aria-describedby={invalid ? `${p.name}-error` : undefined}
      className={`${base} py-3 leading-relaxed ${invalid ? "border-[#ff8a7a]" : "border-[var(--line-strong)]"} ${className}`}
      {...p}
    />
  );
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & { name: string; options: string[]; placeholder?: string };
export function Select({ options, placeholder, className = "", ...p }: SelectProps) {
  return (
    <select id={p.name} className={`${base} h-12 border-[var(--line-strong)] ${className}`} {...p}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

/** Hidden field that only bots fill in. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

export type Errors = Record<string, string>;

/** Posts JSON and returns field errors, a general error, or success. */
export function usePost<T = { ok: boolean; id: string }>(url: string) {
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [failure, setFailure] = useState("");

  async function send(body: Record<string, unknown>): Promise<T | null> {
    setBusy(true);
    setErrors({});
    setFailure("");
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) return data as T;
      if (data.errors) setErrors(data.errors);
      else setFailure(data.error || "Something went wrong. Please try again or email us.");
      return null;
    } catch {
      setFailure("We couldn't reach the server. Check your connection and try again.");
      return null;
    } finally {
      setBusy(false);
    }
  }

  return { send, busy, errors, failure };
}

export const formValues = (form: HTMLFormElement) =>
  Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

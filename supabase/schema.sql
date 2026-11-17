-- Cortelo: tables for call requests and messages.
-- Run once in Supabase: Dashboard -> SQL Editor -> New query -> paste -> Run.
--
-- Row Level Security is on and no policies are added, so the public (anon) key
-- can neither read nor write these tables. Only the website server, using the
-- service role key, writes rows; the admin page reads them on the server after
-- checking the signed-in user is on the ADMIN_EMAILS list.

create table if not exists public.call_requests (
  id text primary key,
  created_at timestamptz not null default now(),
  mode text not null default 'request',          -- 'request' or 'slot'
  slot_start timestamptz not null,               -- preferred (or booked) time
  duration_minutes int not null default 30,
  name text not null,
  email text not null,
  company text,
  service text,
  message text,
  time_zone text,
  status text not null default 'requested'       -- 'requested', 'confirmed', 'cancelled'
);

create table if not exists public.inquiries (
  id text primary key,
  created_at timestamptz not null default now(),
  kind text not null default 'contact',          -- 'contact' or 'brief'
  name text not null,
  email text not null,
  company text,
  service text,
  budget text,
  timeline text,
  message text not null,
  page text
);

create index if not exists call_requests_slot_start_idx on public.call_requests (slot_start);
create index if not exists inquiries_created_at_idx on public.inquiries (created_at desc);

alter table public.call_requests enable row level security;
alter table public.inquiries enable row level security;

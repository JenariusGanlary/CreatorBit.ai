# CreatorBit Database Schema

Database: Supabase PostgreSQL

---

## Users

create table users (
 id uuid primary key,
 email text unique,
 plan text default 'free',
 created_at timestamp default now()
);

---

## Creator Profiles

create table creator_profiles (
 id uuid primary key default gen_random_uuid(),
 user_id uuid references users(id),
 niche text,
 primary_platform text,
 audience_type text,
 content_style text,
 posting_frequency text
);

---

## Ideas

create table ideas (
 id uuid primary key default gen_random_uuid(),
 user_id uuid references users(id),
 title text,
 hook text,
 description text,
 thumbnail_text text,
 platform text,
 created_at timestamp default now()
);

---

## Scripts

create table scripts (
 id uuid primary key default gen_random_uuid(),
 idea_id uuid references ideas(id),
 script_text text,
 created_at timestamp default now()
);

---

## Content Calendar

create table content_calendar (
 id uuid primary key default gen_random_uuid(),
 user_id uuid references users(id),
 idea_id uuid references ideas(id),
 scheduled_date timestamp,
 platform text
);

---

## Analytics

create table analytics (
 id uuid primary key default gen_random_uuid(),
 post_id uuid,
 views integer,
 likes integer,
 comments integer,
 engagement_rate numeric
);

---

## AI Usage Logs

create table ai_usage_logs (
 id uuid primary key default gen_random_uuid(),
 user_id uuid references users(id),
 feature text,
 tokens_input integer,
 tokens_output integer,
 total_tokens integer,
 estimated_cost numeric,
 created_at timestamp default now()
);

---

## Usage Tracking

create table user_usage_stats (
 id uuid primary key default gen_random_uuid(),
 user_id uuid references users(id),
 ideas_generated integer default 0,
 scripts_generated integer default 0,
 month text
);
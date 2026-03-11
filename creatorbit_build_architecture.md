# CreatorBit Build Architecture

Version: 1.0  
Project: CreatorBit

---

## Overview

CreatorBit is an AI-powered operating system for content creators.  
The system helps creators manage their workflow:

Idea → Script → Calendar → Publish → Analytics

Development follows an **Infrastructure First Approach**.

---

## Development Philosophy

Build order:

1. Infrastructure
2. UI system
3. Database
4. Product workflow
5. API layer
6. AI gateway
7. AI integration

AI must **not** be the starting point.

---

## Project Structure

creatorbit/

app/
components/
services/
lib/
database/
docs/
middleware/

---

## Pages

/app/dashboard  
/app/ideas  
/app/scripts  
/app/calendar  
/app/analytics  
/app/settings  

---

## Components

Navbar  
Sidebar  
IdeaCard  
ScriptEditor  
CalendarGrid  
UsageMeter  

---

## Core Workflow

Idea → Script → Calendar → Publish

Each stage is its own module.

---

## AI Gateway

All AI requests pass through a gateway.

Architecture:

Frontend  
↓  
API Route  
↓  
AI Gateway  
↓  
Rate Limiter  
↓  
Token Validator  
↓  
LLM Provider  
↓  
Usage Logging

---

## Rate Limiting

Example limits:

Idea generation: 10 requests per minute  
Script generation: 5 requests per minute

Implementation:

Redis / Upstash Redis

---

## Token Limits

Max tokens per request:

4000 tokens

Validation:

input_tokens + output_tokens must not exceed the limit.

---

## AI Usage Tracking

Table: ai_usage_logs

Tracks:

user_id  
feature  
tokens_input  
tokens_output  
total_tokens  
estimated_cost  

Purpose:

Track LLM cost and enforce limits.

---

## Security

Authentication: Clerk  
Row-level security: Supabase  
Environment variables for secrets.

---

## Goal

Provide a scalable architecture capable of supporting:

- thousands of creators
- AI workflows
- subscription enforcement
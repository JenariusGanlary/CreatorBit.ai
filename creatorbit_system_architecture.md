# CreatorBit System Architecture

Version: 1.0  
Project: CreatorBit

---

## System Overview

CreatorBit uses a layered architecture.

Layers:

Frontend  
Authentication  
API Layer  
AI Gateway  
Database  
External AI Services

---

## High-Level Flow

User Browser  
↓  
Next.js Frontend  
↓  
Clerk Authentication  
↓  
Next.js API Routes  
↓  
AI Gateway  
↓  
LLM Provider  
↓  
Supabase Database

---

## Frontend

Technology:

Next.js  
TailwindCSS  
ShadCN UI

Responsibilities:

UI rendering  
creator workflow interaction  
analytics display

---

## Authentication

Handled by Clerk.

Responsibilities:

user signup  
login  
session management  
protected routes

---

## API Layer

Next.js API routes handle:

database operations  
AI calls  
usage limits  
data processing

Example endpoints:

/api/generate-ideas  
/api/generate-script  
/api/calendar  
/api/usage

---

## AI Gateway

The AI gateway controls all LLM interactions.

Responsibilities:

rate limiting  
token validation  
usage tracking  
subscription checks

---

## Database

Supabase PostgreSQL.

Stores:

users  
ideas  
scripts  
calendar  
analytics  
AI usage

---

## Storage

Supabase Storage used for:

videos  
clips  
assets

---

## Scalability

Stage 1:

Single server Next.js + Supabase

Stage 2:

Background workers for AI jobs

Stage 3:

Microservices architecture

---

## Security

Rate limiting  
token validation  
authentication  
RLS policies
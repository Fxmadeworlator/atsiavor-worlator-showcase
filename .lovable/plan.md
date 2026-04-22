

## Keep-Alive Health Check for Lovable Cloud

A lightweight health-check edge function pinged every 4 minutes by a `pg_cron` job to keep the Cloud backend warm.

### Implementation

**1. Create `supabase/functions/health-check/index.ts`**
- Handle CORS preflight
- Create a Supabase client with the service role key
- Run a trivial `SELECT 1`-style query
- Return `{ status: "ok", timestamp: "..." }`

**2. Update `supabase/config.toml`**
- Add `[functions.health-check]` block with `verify_jwt = false` so the cron job can hit it without an auth header

**3. Deploy the edge function**

**4. Enable required extensions (migration)**
```sql
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;
```

**5. Schedule the cron job (insert, not migration — contains project-specific URL/key)**
```sql
SELECT cron.schedule(
  'keep-alive-ping',
  '*/4 * * * *',
  $$
  SELECT net.http_post(
    url := 'https://ejheilisoxculezjvjrp.supabase.co/functions/v1/health-check',
    headers := '{"Content-Type":"application/json","Authorization":"Bearer <anon_key>"}'::jsonb,
    body := concat('{"time":"', now(), '"}')::jsonb
  ) AS request_id;
  $$
);
```

### Technical Details

- **Frequency**: every 4 minutes (`*/4 * * * *`)
- **Impact**: negligible — single trivial query per call
- **Files**: `supabase/functions/health-check/index.ts` (new), `supabase/config.toml` (edited), 1 migration for extensions, 1 insert for the cron job
- **Project ref used**: `ejheilisoxculezjvjrp` (corrected from the placeholder in the request)


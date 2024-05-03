import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://dsgaseqinnksvaowvdcn.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzZ2FzZXFpbm5rc3Zhb3d2ZGNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzMTM2NzEsImV4cCI6MjAyOTg4OTY3MX0.T70ovLtN9YpkXzFO1dqGYH8m-vo1K3PoXnI_Qyw0Cg0";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});

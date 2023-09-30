import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bpbiaujhtrmzbxmqcrrc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwYmlhdWpodHJtemJ4bXFjcnJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4MjY1ODcsImV4cCI6MjAwODQwMjU4N30.WAp9TaV_m9sfXTpnn1QoX-PvGkiHeARI3Jw3SHPksCo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
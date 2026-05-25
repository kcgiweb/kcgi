import { createClient } from '@supabase/supabase-js';

// Hardcoded for direct connection since .env wasn't loading
const supabaseUrl = 'https://pegrruoagqzlxijkafkr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlZ3JydW9hZ3F6bHhpamthZmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2OTY4MDYsImV4cCI6MjA5NTI3MjgwNn0.fCOc-nXWzczKrdpYw0TEdki0rezH-PwgmbEyOi0qgv8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

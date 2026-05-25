import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pegrruoagqzlxijkafkf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlZ3JydW9hZ3F6bHhpamthZmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2OTY4MDYsImV4cCI6MjA5NTI3MjgwNn0.fCOc-nXWzczKrdpYw0TEdki0rezH-PwgmbEyOi0qgv8';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  console.log("Testing Supabase connection...");
  const { data, error } = await supabase.from('settings').select('*').limit(1);
  
  if (error) {
    console.error("Connection Failed. Error details:");
    console.error(error);
  } else {
    console.log("Connection Successful! Data:", data);
  }
}

testConnection();

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cgscejzkkyfmaigunuvn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnc2Nlanpra3lmbWFpZ3VudXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2MjU0MjQsImV4cCI6MjA5MzIwMTQyNH0.imgac7aIfWwQZUvKQ8_Y4XG4iIyiVKFjbNE3V98q_wE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Optimizes a Supabase Storage URL using their image transformation service.
 * @param {string} url - The original public URL
 * @param {number} width - Target width
 * @returns {string} - Optimized URL
 */
export function optimizeSupabaseImage(url, width = 800) {
  if (!url || typeof url !== 'string' || !url.includes('/object/public/')) {
    return url;
  }
  return (
    url.replace('/object/public/', '/render/image/public/') +
    `?width=${width}&quality=75&format=webp`
  );
}

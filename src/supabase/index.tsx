import { createClient } from "@supabase/supabase-js";
import { Provider } from "react-supabase";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "text";
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "text";

// client connected to your database
const client = createClient(URL, KEY);

export default client;

// React component to wrap your app
export function SupabaseProvider({ children }: any) {
  return <Provider value={client}>{children}</Provider>;
}

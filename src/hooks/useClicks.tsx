import { useRealtime } from "react-supabase";

function useClicks() {
  const [{ data }] = useRealtime("clicks", {
    select: {
      columns: "id,type",
    },
  });

  return data;
}

export default useClicks;

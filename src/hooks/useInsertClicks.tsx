import { useInsert } from "react-supabase";

export function useInsertClicks() {
  //   const [_data, execute] = useInsert("clicks");
  const [, execute] = useInsert("clicks");

  return execute;
}

export default useInsertClicks;

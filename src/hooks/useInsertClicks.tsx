import { useInsert } from "react-supabase";

function useInsertClicks() {
  //   const [_data, execute] = useInsert("clicks");
  const [, execute] = useInsert("clicks");

  return execute;
}

export default useInsertClicks;

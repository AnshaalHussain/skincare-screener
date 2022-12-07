import { useState } from "react";

export const useInput = (opts) => {
  const [value, setValue] = useState("");

  const input = (
    <input value={value} onChange={(e) => setValue(e.target.value)} {...opts} />
  );

  return [value, input];
};

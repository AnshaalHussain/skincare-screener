import { useEffect } from "react";

export const useValueSetter = (value, setter) => {
  useEffect(() => {
    setter(value);
  }, []);
};

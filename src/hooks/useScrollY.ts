import { useState, useMemo, useEffect } from "react";
import { throttle } from "lodash";

export const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);
  const throttleScroll = useMemo(
    () =>
      throttle(() => {
        setScrollY(window.scrollY);
      }, 0),
    []
  );
  useEffect(() => {
    window.addEventListener("scroll", throttleScroll);
  }, [throttleScroll]);

  return scrollY;
};

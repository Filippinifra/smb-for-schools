import { useState, useEffect, useRef } from "react";

export const useStaggered = (factor) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const scrollHandler = (_) => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height * factor);
      }
    };

    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, [ref, factor]);

  return { ref, height };
};

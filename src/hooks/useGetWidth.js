import { useState, useEffect, useRef } from "react";

export const useGetWidth = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const scrollHandler = (_) => {
      if (ref.current) {
        setWidth(ref.current.getBoundingClientRect().width);
      }
    };

    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, [ref]);

  return { ref, width };
};

import { useEffect } from "react";

const useDebounce = (callBack: () => void, time: number) => {
  useEffect(() => {
    const data = setTimeout(callBack, time);

    return () => clearTimeout(data);
  }, [callBack, time]);
};

export default useDebounce;

import { useEffect, useState } from 'react';

/**
 * Hook that delays the execution of a function.
 *
 * @param val the user input value
 * @param timeout the amount of time to delay
 *
 * @return val
 */
const useDebounce = <T>(val: T, timeout?: number) => {
  const [value, setValue] = useState<T>(val);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setValue(val);
    }, timeout ?? 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [val]);

  return value;
};

export default useDebounce;

import { useCallback, useState } from 'react';

const useLocalStorage = <T>(
  name: string,
  initialValue: T,
): [T, (newValue: T) => void] => {
  const getValue = (): T => {
    try {
      const item = window.localStorage.getItem(name);
      return item != null ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(getValue);

  const setValue = useCallback(
    (newValue: T) => {
      try {
        window.localStorage.setItem(name, JSON.stringify(newValue));
        setStoredValue(newValue);
      } catch (error) {}
    },
    [name],
  );

  return [storedValue, setValue];
};

export default useLocalStorage;

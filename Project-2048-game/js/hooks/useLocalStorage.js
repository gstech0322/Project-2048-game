import { useCallback, useState } from 'react';
const useLocalStorage = (name, initialValue) => {
    const getValue = () => {
        try {
            const item = window.localStorage.getItem(name);
            return item != null ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            // eslint-disable-next-line no-console
            console.error(`Cannot get localStorage by the given name ${name}:`, error.message);
            return initialValue;
        }
    };
    const [storedValue, setStoredValue] = useState(getValue);
    const setValue = useCallback((newValue) => {
        try {
            window.localStorage.setItem(name, JSON.stringify(newValue));
            setStoredValue(newValue);
        }
        catch (error) {
            // eslint-disable-next-line no-console
            console.error(`Cannot set localStorage by the given name ${name}:`, error.message);
        }
    }, [name]);
    return [storedValue, setValue];
};
export default useLocalStorage;

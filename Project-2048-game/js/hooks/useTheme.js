import { useReducer } from 'react';
import defaultTheme from '../themes/default';
import darkTheme from '../themes/dark';
const isThemeName = (t) => t === 'default' || t === 'dark';
const getTheme = (name) => name === 'default'
    ? { name: 'default', value: defaultTheme }
    : { name: 'dark', value: darkTheme };
const themeReducer = (theme, nextThemeName) => isThemeName(nextThemeName) ? getTheme(nextThemeName) : theme;
const useTheme = (initialThemeName) => useReducer(themeReducer, getTheme(initialThemeName));
export default useTheme;

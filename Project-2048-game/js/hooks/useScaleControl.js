import { useReducer } from 'react';
import { clamp } from '../utils/common';
import { MAX_SCALE, MIN_SCALE } from '../utils/constants';
const scaleReducer = (s, change) => clamp(s + change, MIN_SCALE, MAX_SCALE);
const useScaleControl = (initScale) => useReducer(scaleReducer, clamp(initScale, MIN_SCALE, MAX_SCALE));
export default useScaleControl;

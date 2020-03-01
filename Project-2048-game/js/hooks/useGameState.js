import { useReducer } from 'react';
const gameStateReducer = (state, nextStatus) => {
    switch (nextStatus) {
        case 'win':
        case 'lost':
            return { status: nextStatus, pause: true };
        case 'continue':
        case 'restart':
        case 'running':
            return { status: nextStatus, pause: false };
        default:
            return state;
    }
};
const useGameState = (initState) => useReducer(gameStateReducer, initState);
export default useGameState;

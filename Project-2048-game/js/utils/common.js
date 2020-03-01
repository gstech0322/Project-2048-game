// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
let _tileIndex = 0;
// eslint-disable-next-line no-plusplus
export const nextTileIndex = () => _tileIndex++;
export const resetTileIndex = () => {
    _tileIndex = 0;
};
// https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
export const shuffle = (arr) => {
    const shuffled = arr.slice(0);
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};
export const getId = (ind) => `${ind}_${Date.now()}`;
export const clamp = (d, min, max) => Math.max(Math.min(max, d), min);
export const getTileFontSize = (w, h, v) => {
    const factor = v >= 1024 ? 2.8 : 2;
    return Math.min(w, h) / factor;
};
export const getTileColor = (v) => `tile${clamp(v, 2, 2048)}`;
export const calcSegmentSize = (length, segmentNum, spacing) => (length - (segmentNum + 1) * spacing) / segmentNum;
export const calcTileSize = (gridSize, rows, cols, spacing) => ({
    width: calcSegmentSize(gridSize, cols, spacing),
    height: calcSegmentSize(gridSize, rows, spacing),
});
export const calcLocation = (l, c, spacing) => (spacing + l) * c + spacing;
export const createIndexArray = (len) => Array.from(Array(len).keys());

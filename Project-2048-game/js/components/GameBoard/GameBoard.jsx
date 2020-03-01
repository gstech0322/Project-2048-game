import React, { useEffect, useRef, useState } from 'react';
import useArrowKeyPress from '../../hooks/useArrowKeyPress';
import useSwipe from '../../hooks/useSwipe';
import { calcLocation, calcTileSize } from '../../utils/common';
import Box from '../Box';
import Grid from '../Grid';
import Notification from '../Notification';
import Tile from '../Tile';
const GameBoard = ({ tiles, gameStatus, rows, cols, boardSize, spacing, onMove, onMovePending, 
// onMergePending,
onCloseNotification, }) => {
    const [{ width: tileWidth, height: tileHeight }, setTileSize] = useState(() => calcTileSize(boardSize, rows, cols, spacing));
    const boardRef = useRef(null);
    useArrowKeyPress(onMove);
    useSwipe(boardRef, onMove);
    useEffect(() => {
        setTileSize(calcTileSize(boardSize, rows, cols, spacing));
    }, [boardSize, cols, rows, spacing]);
    return (<Box position="relative" ref={boardRef}>
      <Grid width={boardSize} height={boardSize} rows={rows} cols={cols} spacing={spacing}/>
      <Box position="absolute" top={0} left={0} background="transparent" blockSize="100%" inlineSize="100%" onTransitionEnd={onMovePending}>
        {tiles?.map(({ r, c, id, value, isMerging, isNew }) => (<Tile key={id} width={tileWidth} height={tileHeight} x={calcLocation(tileWidth, c, spacing)} y={calcLocation(tileHeight, r, spacing)} value={value} isNew={isNew} isMerging={isMerging}/>))}
      </Box>
      {(gameStatus === 'win' || gameStatus === 'lost') && (<Notification win={gameStatus === 'win'} onClose={() => onCloseNotification(gameStatus)}/>)}
    </Box>);
};
export default React.memo(GameBoard);

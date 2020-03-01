import React from 'react';
import { getTileColor } from '../../utils/common';
import StyledTile from './StyledTile';
import StyledTileValue from './StyledTileValue';
const Tile = ({ value, x, y, width, height, isNew = false, isMerging = false, }) => (<StyledTile value={value} x={x} y={y} width={width} height={height}>
    <StyledTileValue value={value} backgroundColor={getTileColor(value)} isNew={isNew} isMerging={isMerging}>
      {value}
    </StyledTileValue>
  </StyledTile>);
export default Tile;

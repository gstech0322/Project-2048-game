import React, { useMemo } from 'react';
import { createIndexArray } from '../../utils/common';
import StyledCell from './StyledCell';
import StyledGrid from './StyledGrid';
const Grid = ({ width, height, rows, cols, spacing }) => {
    const Cells = useMemo(() => {
        const cells = createIndexArray(rows * cols);
        return cells.map((c) => <StyledCell key={c}/>);
    }, [rows, cols]);
    return (<StyledGrid width={width} height={height} rows={rows} cols={cols} spacing={spacing}>
      {Cells}
    </StyledGrid>);
};
export default React.memo(Grid);

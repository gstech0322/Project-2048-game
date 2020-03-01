import styled from 'styled-components';
import { getTileFontSize } from '../../utils/common';
const StyledTile = styled.div.attrs(({ width, height, value, x, y }) => ({
    style: {
        width: `${width}px`,
        height: `${height}px`,
        fontSize: `${getTileFontSize(width, height, value)}px`,
        transform: `${`translate(${x}px, ${y}px)`}`,
    },
})) `
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  transition: transform 0.15s ease-in-out;
  background: none;
`;
export default StyledTile;

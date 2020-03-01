import styled, { css } from 'styled-components';
const getFontStyle = ({ as, textTransform, fontSize = 14, fontWeight, }) => css `
  margin: ${as === 'p' && 0};
  line-height: ${as === 'p' ? 2 : 1.5};
  text-transform: ${textTransform};
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};
`;
const StyledText = styled.span `
  line-height: 1.25;
  white-space: nowrap;
  color: ${({ theme: { palette }, color }) => color && palette[color]};
  ${getFontStyle};
`;
export default StyledText;

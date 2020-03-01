import styled, { css } from 'styled-components';
const getMiniProps = () => css `
  width: 24px;
  height: 24px;
  font-size: 12px;
  line-height: 24px;
  padding: 0;
`;
const StyledButton = styled.button `
  outline: none;
  border: none;
  padding: 8px 16px;
  line-height: 1.75;
  margin: 0;
  white-space: nowrap;
  ${({ mini }) => mini && getMiniProps};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme: { palette } }) => palette.primary};
  color: ${({ theme: { palette } }) => palette.foreground};
  opacity: ${({ disable }) => disable && 0.7};
  cursor: ${({ disable }) => (disable ? 'not-allowed' : 'pointer')};
`;
export default StyledButton;

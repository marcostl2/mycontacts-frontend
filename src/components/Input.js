import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  border: none;
  outline: none;
  height: 52px;
  font-size: 16px;
  padding: 0 16px;
  appearance: none;
  border: 2px solid #fff;
  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: ${(props) => props.theme.colors.main};
  }

  ${({ theme, error }) =>
    error &&
    css`
      color: ${theme.colors.danger};
      border-color: ${theme.colors.danger} !important;
    `}
`;

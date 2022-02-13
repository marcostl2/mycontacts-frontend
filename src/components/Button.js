import styled, { css } from 'styled-components';

export default styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;
  background-color: ${(props) => props.theme.colors.main};
  font-size: 16px;
  color: #fff;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.2s ease-in;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  &:hover {
    background-color: ${(props) => props.theme.colors.light};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.dark};
  }

  &[disabled] {
    background-color: #ccc;
    cursor: not-allowed;
  }

  ${({ danger, theme }) =>
    danger &&
    css`
      background-color: ${theme.colors.danger};

      &:hover {
        background-color: ${theme.colors.lightDanger};
      }

      &:active {
        background-color: ${theme.colors.darkDanger};
      }
    `}
`;

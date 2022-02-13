import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 450px;

  h1 {
    font-size: 22px;
    color: ${({ danger, theme }) =>
      danger ? theme.colors.danger : theme.colors.darkGray};
  }

  p {
    margin: 8px 0 0;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;

  .cancel-button {
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: ${(props) => props.theme.colors.gray};
    height: 52px;
    padding: 0 16px;
  }
`;

import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 24px;

  a {
    width: fit-content;
    display: flex;
    gap: 8px;
    align-items: center;
    text-decoration: none;
    margin-bottom: 8px;

    span {
      color: ${({ theme }) => theme.colors.main};
      font-weight: bold;
    }

    img {
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 24px;
  }
`;

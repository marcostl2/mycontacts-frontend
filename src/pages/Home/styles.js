import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  position: relative;
`;

export const InputSearchContainer = styled.header`
  width: 100%;

  input {
    width: 100%;
    background-color: #fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;

  strong {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 24px;
  }

  a {
    border: 2px solid ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.main};
    font-weight: bold;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 8px;

    button {
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      gap: 8px;

      span {
        color: ${({ theme }) => theme.colors.main};
        font-weight: bold;
      }
    }
  }
`;

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 16px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &-name-and-tag {
      display: flex;
      align-items: center;
      gap: 8px;

      strong {
        font-weight: bold;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.darkGray};
      }

      small {
        text-transform: uppercase;
        font-size: 12px;
        padding: 4px 6px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.main};
        border-radius: 4px;
        background-color: ${({ theme }) => theme.colors.lightBlue};
      }
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.lightGray};
    }
  }

  .actions {
    display: flex;
    gap: 8px;
    align-items: center;

    button {
      background-color: transparent;
      border: none;
    }
  }
`;

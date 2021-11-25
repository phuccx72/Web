import styled from 'styled-components/macro';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px -4px 11px 0px #00000052;
  position: fixed;
  width: 1520px;
  background-color: white;
  z-index: 3;
  .header {
    &__logo {
      box-shadow: 2px -4px 12px 5px #a9a9a942;
    }

    &__items:nth-child(2) {
      width: 60%;
    }

    &__items:last-child {
      margin-right: 20px;
    }
    &__btn {
      background-color: white;
      border: none;
    }
  }
`;

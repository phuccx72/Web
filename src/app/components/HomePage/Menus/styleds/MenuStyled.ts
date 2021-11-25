import styled from 'styled-components/macro';

export const MenuStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .menu {
    &__items {
      padding: 18px 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      /* position:relative; */

      &__container {
        opacity: 0;
        position: absolute;
        transition: all 0.5s ease;
        top: 60px;
        width: 1519px;
        background-color: #f6f6f4;
        right: -1100px;
        display: flex;
        justify-content: space-between;
        z-index: 1;
        &__text {
          color: black;
          padding: 10px 0px;
          display: block;
          font-size: 1rem;
          text-decoration: none;
          margin-left: 290px;
          padding-top: 20px;
        }

        &__img {
          width: 475px;
          height: 140px;
          margin-right: 325px;
          padding-top: 25px;
        }
      }
    }
    &__items:hover li {
      height: 200px;
      opacity: 1;
      transform: translateY(0);
    }

    &__items:hover .menu__hightline {
      width: 100%;
    }

    &__items {
      position: relative;
    }

    &__hightline {
      position: absolute;
      height: 4px;
      width: 0%;
      background-color: #c40058;
      bottom: 0;
      margin: 0 auto;
      transition: width 0.5s;
    }
  }
`;

import styled from 'styled-components/macro';

export const HeaderBotStyled = styled.header`
  /* display:flex; */
  /* align-items: center; */
  font-size: 16px;
  text-align: center;
  background-image: url('/Endy-couple-on-mattress-nav-517-142.jpg');
  height: 500px;
  background-size: 1520px 500px;
  background-repeat: no-repeat;
  padding-top: 60px;
  background-position-y: 60px;
  z-index: 5;
  .bg-purple {
    background-color: #c40058;
  }

  .white {
    color: white;
  }

  .headerbot {
    /* padding-top:426px; */
    &__container {
      font-size: 3rem;
      font-family: auto;
      padding-right: 2px;
      /* margin-top: 10px; */

      &__img {
        height: 45px;
        width: 47.2px;
        margin-bottom: 20px;
        margin-left: 10px;
      }
    }

    &__btn {
      outline: none;
      border: 2px solid #c40058;
      padding: 12.5px 15px;
      margin-left: 10px;
      margin-right: 10px;
      border-radius: 2px;
      transition-duration: 0.4s;
      margin-top: 300px;
    }
    &__btn:hover {
      background-color: white;
      color: #c40058;
    }
  }
`;

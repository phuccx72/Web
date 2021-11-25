/* eslint-disable prettier/prettier */
import styled from 'styled-components/macro';

export const AboutStyled = styled.div`
  text-align:center;
  font-size:16px;
  /* max-width:1310px; */
  margin-left:113px;
  margin-right:113px;
  /* margin:0 auto; */
  border:2px;
  height:337px;
  padding-left:90px;
  padding-right:90px;
  border-color:black;
  /* position: absolute; */
  .about{
    padding:40px;
    
    &__header{
        font-size:2rem;
        width:66.6667%;
      }
    &__container{
      display:flex;
      justify-content: center;
      &__body{
        width:360px;
        height:106px;
        padding-top:30px;
        &__p{
          padding-top:20px;
        }
      }
    }

    &__btn{
      margin-top:100px;
      padding: 15px 12.5px;
      background-color:#243746;
      color:white;
      border:2px solid black;
      border-radius:2px;
      transition-duration: 0.4s;
    }
    &__btn:hover{
      background-color:white;
      color:#243746;
    }
  }
`;
/* eslint-disable prettier/prettier */
import styled from 'styled-components/macro';

export const ReviewStyleds = styled.div`
  text-align: center;
  background-color:#243746;
  color:white;
  font-size:16px;
  height:575px;
  .review{
    &__text{
      padding-top:30px;
      font-size:2.5rem;
      font-family:utopia-std-display,serif;
      font-weight:bold;
    }

    &__container{
      justify-content: center;
      display:flex;
      text-align:left;
      &__frames{
        background-color:white;
        margin:0 16px;
        color:black;
        width:350px;
        height:340px;
        padding:40px;
        border-radius:5px;
        position: relative;
        
        &__title{
          font-family:utopia-std-display,serif;
          font-size:1.75rem;
          
        }
        &__content{
          padding-top:10px;
          font-family:utopia-std-display,serif;
          font-size:1.1875rem;
          margin-bottom:16px; 
        }
        &__signature{
          text-align:right;
          font-size:1rem;
          position:absolute;
          right:35px;
          bottom:53px;
          font-weight:bold;

        }
        &__location{
          position:absolute;
          right:35px;
          bottom:35px;
          font-size:0.8rem;
        }
      }
    }

    &__btn{
      margin-top:32px;
      padding:12.5px 15px;
      font-size:0.85rem;
      border:2px solid white;
      border-radius:2px;
      transition-duration: 0.4s;
      background-color:#243746;
      color:white;
      font-weight:bold;
    }
    &__btn:hover{
      background-color:white;
      color:#243746;
    }

  }
`;
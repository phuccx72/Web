/* eslint-disable prettier/prettier */
import styled from 'styled-components/macro';

export const CartStyled = styled.div`
  margin-left:1150px;
  z-index:5;
  position:absolute;
  top:0;
  right:0%;
  margin-top:60px;
  
  .cart{
    font-size:16px;
    position:fixed;
    
    top:0;
    right:10px;
    /* width:100%; */
    /* height:100%; */
    /* z-index:8; */
    width: 396px;
    float:right;
    margin-right:500px;
      &__header{
      display:flex;
      justify-content: space-between;
      background-color:#c40058;
      color:white;
      
        &__text{
        text-align:left;
        font-size:1.5rem;
        padding:10px;
        padding-left:20px;
        }
        &__exit{
        background-color:#c40058;
        /* text-align:right; */
        border:none;
        }
      }
      &__notice{
        font-size:0.8rem;
        padding:13px 20px 17px 20px;
        background-color:#F6F6F4;
      }
      &__store{
        text-align:center;
        padding-top:24px;
        background-color:white;
        
        &__h1{
          font-size:1rem;
          font-weight:bold;
        }
        &__h2{
          font-size:0.9rem;
          margin-bottom:0;
        }
      }
      &__item{
        background-color:white;
        padding:0px 20px;
        padding-top:5px;
        &__text{
          padding-top:10px;
          padding-left:10px;
          position:absolute;
          text-decoration:none;
          color:black;
          font-weight:bold;
          font-size:0.8rem;
        }
        &__img{
          
          width:356px;
          height:207px;
        }

        &__img1{
          width:173px;
          height:158px;
          /* padding:0px 5px;  */
        }

      }
      
  }
  
  
`;
import styled from 'styled-components/macro';

export const ItemStyled = styled.div`
  
  .item{
    font-size:16px;
    
    &__title{
      display:flex;
      justify-content: center;
      font-size: 2.5rem;
      color:#C40058;
      padding-top:48px;
    }
    &__container{
      display:flex;
      justify-content: center;
      margin:0 113px;
      padding:0px 75px;
      &__items{
        padding-right: 30px;
        text-align: center;

        &__name{
          font-size:18px;
          margin-bottom:12px;
          margin-top:0px;
          padding:25px 25px 0px 25px;
          text-align: left;
          font-weight:bold;
        }
        &__price{
          padding:0px 25px;
          margin-bottom:0;
          text-align: left;
        }
        &__img{
          width:100%;
          max-width:350px;
          max-height:226px;
          margin:0 auto;
          display:block;
          
        }
        &__btn{
          border-radius:2px;
          border:2px solid #c40058;
          background-color:#c40058;
          color:white;
          padding:12.5px 15px;
          transition-duration: 0.4s;
        }
        &__btn:hover{
          background-color:white;
          color:#c40058;
        }
      }
    }
    
    } 
  }

`;

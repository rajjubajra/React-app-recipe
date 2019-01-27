import React from 'react';
import styled from 'styled-components';

const PageTitle = styled.div`
  display: flex;
  justify-content: center;
  

  h1{
    font-family: serif;
    letter-spacing: -2px;
  }
  
  > img{
    width: 50px;
    height: 50px;
    align-self: center;
    margin-right: 20px;
  }


@media(max-width: 414px){
  >img {
    position: relative;
    left: 50px;
  }
  h1{
    width: 260px;
    position: relative;
    right: 0px;
  }
  
}


`;

const Title = () => (
  <PageTitle>
    <img src='./images/chef.png' alt='search recipe' />
    <h1>Recipe Search</h1>
  </PageTitle>
)
export default Title;
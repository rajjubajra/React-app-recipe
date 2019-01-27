import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  margin: 0px auto;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  
  >h3{
    font-family: initial;
    color: #d05460;
    letter-spacing: 2px;
    text-shadow: 1px 1px 0px #696666;
  }


  > img{
    margin-top: 100px;
    max-width: 200px;
    height: auto;
  }
`;



class Home extends React.Component{


  render(){
    return(
      <Page>
        <img src='./images/book.png' alt='Recipe Search' />
        <h3>Search your favourite Recepe..</h3>
      </Page>
    )
  }


}
export default Home;

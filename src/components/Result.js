import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import Images from './images.json';

const Card = styled.div`

h1{
    font-size: 3.5rem;
    letter-spacing: -3px;
    font-family: monospace;
    text-shadow: 1px 2px 3px #928c8c73;
    color: #FF1F0D;
  }
  
  h3{
    font-family: initial;
    font-weight: 400;
    -webkit-letter-spacing: -1px;
    -moz-letter-spacing: -1px;
    -ms-letter-spacing: -1px;
    letter-spacing: 1px;
    font-size: 1.3rem;
  }
  p{
      line-height: 0.1em;
      font-size: 0.9rem;
      color: #333;
  }
  
  a.wwww{
      color: #333;
      text-decoration: none;
      cursor: pointer;
      letter-spacing: -1px;
  }
  a.btn{
      text-decoration: none;
      color: #333;
      letter-spacing: 2px;
      font-weight: 200;
      border: 1px solid 888;
      border: 1px solid #888;
      padding: 3px 20px;
      margin-top: 15px;
  }
  
  
  .msg{
    padding: 10px 5px;
    font-family: sans-serif;
    font-size: 1.2rem;
    font-weight: 200;
    width: 350px;
    margin: 0px auto;
    margin-bottom: 10px;
    color: red;
  }

  > div > img{
    width: 100%;
}
  
  
  input{
      padding: 5px;
      font-size: 1.2rem;
      width: 300px;
      border: 1px solid #333;
  }
  
  input::placeholder{
    color: #ccc;
  }
  
  button{
    font-size: 1.0rem;
    padding: 8px 20px;
    font-weight: 100;
    width: 100px;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    margin: 20px 0px 5px 0px;
    -webkit-letter-spacing: -1px;
    -moz-letter-spacing: -1px;
    -ms-letter-spacing: -1px;
    -webkit-letter-spacing: -1px;
    -moz-letter-spacing: -1px;
    -ms-letter-spacing: -1px;
    letter-spacing: -1px;
    background-color: #6d3838;
    color: aliceblue;
  }


  > section > p{
    text-align: center;
    font-family: monospace;
    font-size: 1.3rem;

    > a{
        text-decoration; none;
        color: #888;
    }
  }
  
 
`;


   

class Result extends React.Component {

 
    
  render(props) {

        
        console.log('data', this.props.search_result);

        /** react-masonry-css break points for responsive view*/
        const breakpointColumnsObj = {
            default: 4,
            1100: 3,
            700: 2,
            500: 1
        };

        const childElements = this.props.search_result.map(function(element){  
         return (
              <Card key={element.recipe_id} className="image-element-class">
                  <h3>{element.title}</h3>
                  <div><img src={element.image_url} /></div>
                  <section>
                      <p>Pulisher:</p>
                      <p>{element.publisher} [<a href={element.publisher_url}>www</a>]</p>
                  </section>  
                  <button>Veiw</button>  
              </Card>
          );
      });
  
    return (
        <Masonry  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
        >

        {childElements}
        </Masonry>
        
        );

  }/** render closed  */

}
export default Result;
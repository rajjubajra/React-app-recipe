import React from 'react';
import styled from 'styled-components';

const Footerdiv = styled.div`


    > section > ul{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        list-style: none;
        list-style: none;
        padding-inline-start: 0px;
      > li a{
            margin: 3px 20px;
      }
    }

`;

const StickToButtom = styled.div`
width: 100%;
    position: fixed;
    bottom: 0px;
    background-color: #dddddd;

> div{
  text-align: center;
    > p{
      font-size: 0.8rem;
      -webkit-letter-spacing: 0px;
      -moz-letter-spacing: 0px;
      -ms-letter-spacing: 0px;
      letter-spacing: 0px;
      color: slategray;
    }
`;

class Footer extends React.Component{

    render(){

      let dt = new Date();
      return(
        <div>
        {/* <Footerdiv>
          <section>
             
                <ul>
                  <li><a>About</a></li>
                  <li><a>Contact</a></li>
                  <li><a>Home</a></li>
                </ul>
             
          </section>                          
        </Footerdiv> */}

        <StickToButtom>
          <div>
             <p>Search source: www.food2form.com</p>
              <p>&copy; {dt.getFullYear()} www.Yellow-Website.com. All rights reserved | Tel: +44 (0) 7828991384, London, UK</p>
          </div>
         
        </StickToButtom>

        </div>
       
      )
    }


}
export default Footer;
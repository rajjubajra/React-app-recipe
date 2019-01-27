import React from 'react';
import styled from 'styled-components';

const Limit = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 60vh;

 >h1{
  text-align: center;
  padding: 20px 10px;
  border-bottom: 1px solid #fff;
  font-family: initial;
  font-size: larger;
 }

 >p{
  font-size: smaller;
  letter-spacing: 1px;
 }
`;
const UseLimit = () => (
  <Limit>
     <h1>Search limit for the day is finish. Please try tomorrow</h1>
     <p> Free api call per day is 50 only</p>
  </Limit>

)
export default UseLimit;


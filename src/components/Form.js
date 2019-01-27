import React from 'react';
import styled from 'styled-components';

const Frm = styled.form`
    margin-bottom: 30px;
    margin-left: 19px;
    width: 400px;
    margin: 0px auto;

> input{
    width: 280px;
    padding: 10px;
    font-size: 1rem;
    border: 0px;
    border-bottom: 1px solid #000;
    background-color: #536272;
    color: #ccc;
}

> input::placeholder{
   color: #ccc;
}


> button{
  width: 100px;
    padding: 10px;
    font-size: 1rem;
    border: 0px;
    border-bottom: 1px solid #000;
    background-color: black;
    color: yellowgreen;
}

.limit{
  font-size: 0.8rem;
  margin-bottom: 5px;
}

`;

const Form = (props) => {
  return(
    <Frm onSubmit={props.getRecipe}>
      <div className='limit'></div>
      <input type='text' name='recipeName' placeholder='Type Recipe Name' />
      <button>Search</button>
    </Frm>
  )
}
export default Form;
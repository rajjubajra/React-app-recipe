import React from 'react';
import styled from 'styled-components';


class View extends React.Component{
  state = {
    data: '' 
  }

  componentDidMount(props){

    console.log('ApiKey pass', this.props.apikey);

    fetch(`${this.props.anyWhereHeroku}/https://www.food2fork.com/api/get?key=${this.props.apikey}&rId=35382`)
    .then(res=> res.json())
    .then(data => this.setState({data}))
    .catch(res=>{
      console.log('Error fetching data');
    })

  }

  render(){
    console.log('view data', this.state.data);
    console.log('view data', this.state.data.image_url);
    return(
      <div>
      
        
      </div>
    )
  }

}
export default View;



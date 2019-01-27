import React, { Component } from 'react';
import './App.css';

import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Result';
import Footer from './components/Footer';
import View from './components/View';
import Home from './components/home'; 
import UseLimit from './components/UseLimit';

const API_KEY = '941b8da5aba849b9a08fcb545263326c';
const anyWhereHeroku = 'https://cors-anywhere.herokuapp.com';

class App extends Component {

   state = {
      search_result: [],
      api_uses_count: '',
      result_notfound: '',
      err_msg: false,
      isLoading: false,
      route: 'home'
   }
 

  getRecipe = async (event) => {

    /** change state route from home to search */
    this.setState({route: 'search'});

    /**loading begins */
    this.setState({isLoading: true});
 
    /* stop referecing page */
    event.preventDefault(); 

    /** do not display error message */
    this.setState({err_msg: false});

    /** recieve value from FORM search submit */
    const recipeName = event.target.elements.recipeName.value;


    if(!recipeName){

        /** if FORM SUBMIT IS BLANK */
        this.setState({result_notfound: ''});
        this.setState({err_msg: true})
        this.setState({isLoading: false});
        
    }else{
           
          /** REQUEST API ON SEARCH SUBMIT */
           const call_api = await 
           fetch(`${anyWhereHeroku}/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&page=1`)
           .catch((response)=> {
             console.log("error found");
             this.setState({route: 'home'});
           });      
          /** API DATA IN TO JSON format */  
          const Data = await call_api.json();

          console.log('DATA ??? :- ', Data, ' ERROR ?? ', Data.error);


          /** food2fork allow only 50 uses per day
           *  once limit exceeds the limit 
           *  the data display error - 'limit'
           *  once the limit crossed route page to home
           */
          if(Data.error === 'limit'){
            console.log('YOU ARE INSIDE THE LIMIT CONDITION');
            this.setState({route: 'limit'});
            this.setState({isLoading: false});
            return;
          }else{
             /** if search not found display message */
              if(Data.recipes.length >= 1){
                this.setState({result_notfound: ''});
                this.setState({search_result: Data.recipes});
              }else{
                
                this.setState({result_notfound: `Search Item " ${recipeName} " not found. Please try next item`  })
              }
              this.setState({isLoading: false});
          }
      
          console.log('GetRecipe : ', this.state.search_result.length);
          
    }
    
  }

  


  PageRouter = (router) =>{

      switch(router){

        case 'home':
        return <Home />
        break;

        case 'view':
        {/**View  Recipe *************************************************** */}
        return <View  apikey={API_KEY}  
                      anyWhereHeroku={anyWhereHeroku}             
                /> 
        break;

        case 'search':
        {/** Search Result Page ******************************************* */}  
        return <Result search_result={this.state.search_result} />
        break;

        case 'limit':
        return <UseLimit />
        break;
        
        default:
        return <Home />
        break;
      }
  }




  render() {
    const msg = this.state.err_msg;
  
    return (
      <div className="App">
        
        {/**Page Title **************************************************/}
        <div><Title /></div>

        {/** Error message display************************************* */}
        <section className='message'>
              {
                msg ? <div className='msg'>Please enter search recipe name</div> : ''
              }

              {
                <div className='msg'>{this.state.result_notfound}</div>
              }
        </section>
        
        {/** Search formm************************************************* */}
        <div>
        <Form getRecipe={this.getRecipe} api_uses_count={this.state.api_uses_count} />
        </div> 
         
     
        {/** Loading spinner ********************************************* */} 
        {this.state.isLoading === true ? 
          <div style={{display: 'flex', justifyContent: 'center', 
                       alignItems: 'center',height: '75vh',
                       fontSize: '5rem', color: 'slategray'}}>
            <i className="fas fa-spinner fa-spin"></i>
          </div> : null }

        {this.PageRouter(this.state.route)}


        {/** FOOTER ******************************************************* */}
        <Footer />
      </div>
    );
  }
}

export default App;

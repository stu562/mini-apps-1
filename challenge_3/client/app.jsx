//now lets use react to render the components 

import React from 'react';
import axios from 'axios'; 
import F1 from 'F1.jsx';
import F2 from 'F2.jsx';
import F3 from 'F3.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',
      email:'',
      password:'',
      line1:'',
      line2:'',
      city:'',
      zip:'',
      code:''
    }
    this.handleInput = this.handleInput.bind(this); 



  }
  
  handleInput(e) {
    //the user will put in input value 
    let { value } = e.target;
    console.log(e.target)
    // this.setState({}, () => console.log(this.state.))
  }

  formOne (){
      return (
        <div> Testing from formOne
          <input type="text"/>
          <button type="submit">Next</button>
          </div>
      )
  }

  formTwo (){
    return (
      <div> Testing from formOne
        <input type="text"/>
        <button type="submit">Next</button>
        </div>
    )
  }

  formThree (){
    return (
      <div> Testing from formOne
        <input type="text"/>
        <button type="submit">Next</button>
        </div>
    )
  }


  render() {
    return (
      <div> testing from App react
        <input type="text"/>
        <button type="submit">Next</button>
        </div>
    )
  } 
  
}

//F1 collects name, email, and password for account creation.
//collects ship to address (line 1, line 2, city, state, zip code) and phone number.
// collects credit card #, expiry date, CVV, and billing zip code.

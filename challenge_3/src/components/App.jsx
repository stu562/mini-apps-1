//now lets use react to render the components 

// import React, { Component } from 'react';
// import axios from 'axios'; 


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      password:'',
      line1:'',
      line2:'',
      city:'',
      zip:'',
      creditNumber:'',
      expiry:'',
      cvv:'',
      billingZip:''
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleNext = this.handleNext.bind(this); 
    // this.formOne = this.formOne.bind(this); 
    // this.formTwo = this.formTwo.bind(this); 
    // this.formThree = this.formThree.bind(this); 
    
  }


  // componentDidMount() {
  //   this.getAllItems();
  // }
  

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value });
    // () => console.log(this.state.name)
  }

  // handleNext(){
  //   //should move to next page on click
  // }
  //F1 collects name, email, and password for account creation.
  // formOne (){
    //
  //     return (
  //       <div> Testing from formOne
  //         <input type="text"/>
  //         <button type="submit">Next</button>
  //         </div>
  //     )
  // }

//F2collects ship to address (line 1, line 2, city, state, zip code) and phone number.  
// collects credit card #, expiry date, CVV, and billing zip code

  render() {
    return (
      <div> <h1>React Wants your info, yo!</h1>
        <form>
          <h3>{this.state.name}</h3>
          {/* just to test if  working */}
          <label> Name </label>
          <input type="text" name="name" onChange={this.handleChange}/><br />
          <label> Email </label>
          <input type="text" name="email" onChange={this.handleChange} /><br />
          <label> Password </label>
          <input type="text" name="password" onChange={this.handleChange} /><br />
          <button type="button" onClick={() => console.log('next page please')}>Next</button><br />


          <label> Line1 </label>
          <input type="text" name="line1" onChange={this.handleChange} /><br />
          <label> Line2 </label>
          <input type="text" name="line2" onChange={this.handleChange} /><br />
          <label> City </label>
          <input type="text" name="city" onChange={this.handleChange} /><br />
          <label> Zip </label>
          <input type="text" name="zip" onChange={this.handleChange} /><br />
        </form>
        <button type="button" onClick={() => console.log('next page please')}>Next</button><br />


      </div>
    )
  } 

  render2(){
    return ()
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
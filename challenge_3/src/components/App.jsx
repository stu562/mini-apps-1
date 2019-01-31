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
      zip:''
    };
    // this.handleInput = this.handleInput.bind(this); 
    // this.handleChange = this.handleChange.bind(this);
    // this.handleNext = this.handleNext.bind(this); 
    // this.formOne = this.formOne.bind(this); 
    // this.formTwo = this.formTwo.bind(this); 
    // this.formThree = this.formThree.bind(this); 
    


  }




  // componentDidMount() {
  //   this.getAllItems();
  // }
  
  // onChange (event) {
  //   console.log(event.target.name); // the name of the form element
  //   console.log(event.target.value); // the value of the form element
  // }



  handleInput(e) {
    //the user will put in input value 
    let { value } = e.target;
    console.log(e.target)
    // this.setState({}, () => console.log(this.state.))
    // this.setState({ })
  }

  handleChange (e) {
    //bracket syntax
    this.setState({ [e.target.name]: e.target.value });
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
  // formTwo (){
  //   return (
  //     <div> Testing from formOne
  //       <input type="text"/>
  //       <button type="submit">Next</button>
  //       </div>
  //   )
  // }

// collects credit card #, expiry date, CVV, and billing zip code
  // formThree (){
  //   return (
  //     <div> Testing from formOne
  //       <input type="text"/>
  //       <button type="submit">Next</button>
  //       </div>
  //   )
  // }


  render() {
    return (
      <div> testing from App react
        <form>
          <label> Name </label>
          <input type="text" name={this.state.name} onChange={this.handleChange}/><br />
          <label> Email </label>
          <input type="text" name={this.state.email} onChange={this.handleChange} /><br />
          <label> Password </label>
          <input type="text" name={this.state.password} onChange={this.handleChange} /><br />
          <label> Line1 </label>
          <input type="text" name={this.state.line1} onChange={this.handleChange} /><br />
          <label> Line2 </label>
          <input type="text" name={this.state.line2} onChange={this.handleChange} /><br />
          <label> City </label>
          <input type="text" name={this.state.city} onChange={this.handleChange} /><br />
          <label> Zip </label>
          <input type="text" name={this.state.zip} onChange={this.handleChange} /><br />
        </form>


      </div>
    )
  } 
}

ReactDOM.render(<App />, document.getElementById('app'));
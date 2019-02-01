// import React, { Component } from 'react';
// import axios from 'axios'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marker:'form1',
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
    this.handleNextForm1 = this.handleNextForm1.bind(this);
    this.handleNextForm2 = this.handleNextForm2.bind(this);
    this.handleNextForm3 = this.handleNextForm3.bind(this);
    this.handleNextFormFinal = this.handleNextFormFinal.bind(this);
    // this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  }
  handleNextForm1() {
    this.setState({
      marker: 'form1',
    });
    // axios
    //   .post('/shopping', this.state)
    //   .then((response) => console.log(response))
    //   .catch(err => console.error(err));
  }
  handleNextForm2() {
    this.setState({
      marker: 'form2',
    });
    // axios
    //   .post('/shopping', this.state)
    //   .then((response) => console.log(response))
    //   .catch(err => console.error(err));
    //needs to send request to database
  }
  handleNextForm3() {
    this.setState({
      marker: 'form3',
    });
    // axios
    //   .post('/shopping', this.state)
    //   .then((response) => console.log(response))
    //   .catch(err => console.error(err));
    //needs to send data to database
  }
  handleNextFormFinal() {
    this.setState({
      marker: 'formFinal',
    });
    // axios
    //   .post('/shopping', this.state)
    //   .then((response) => console.log(response))
    //   .catch(err => console.error(err));
    //needs to send data to database
  }
  // handleCheckout(){

  // }
  

  render() {
    if (this.state.marker === 'form1'){
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
            <button type="button" onClick={this.handleNextForm2}>Next</button><br />
            
          </form>
        </div>
      );
    } else if (this.state.marker === 'form2') {
      return (
      <div>
      <form id="form2">
        <label> Line1 </label>
        <input type="text" name="line1" onChange={this.handleChange} /><br />
        <label> Line2 </label>
        <input type="text" name="line2" onChange={this.handleChange} /><br />
        <label> City </label>
        <input type="text" name="city" onChange={this.handleChange} /><br />
        <label> Zip </label>
        <input type="text" name="zip" onChange={this.handleChange} /><br />
        <button type="button" onClick={this.handleNextForm1}>Back</button>
        <button type="button" onClick={this.handleNextForm3}>Next</button><br />
        
      </form>
      </div>
      );
    } else if (this.state.marker === 'form3') {
      return (
      <div>
        <form >
          <label> Credit Card Number </label>
          <input type="text"  name="creditNumber" onChange={this.handleChange} /><br />
          <label> Expiration Date </label>
          <input type="text" name="expiry" onChange={this.handleChange} /><br />
          <label> CVV </label>
          <input type="text" name="cvv" onChange={this.handleChange} /><br />
          <label> Billing Zip </label>
          <input type="text" name="billingZip" onChange={this.handleChange} /><br />
          <button type="button" onClick={this.handleNextForm2}>Back</button>
        <button type="button" onClick={this.handleNextFormFinal} >Check Out</button>
        
        </form>
  
      </div>
        );
    } else if (this.state.marker === 'formFinal') {
      return (
        <div>
          <form >
            <label> Name: {this.state.name} </label><br />
            <label> Email: {this.state.email} </label><br />
            <label> Password: {this.state.password} </label><br />
            <label> Line1: {this.state.line1} </label><br />
            <label> Line2: {this.state.line2} </label><br />
            <label> City: {this.state.city} </label><br />
            <label> Zip: {this.state.zip} </label><br />
            <label> Credit Card Number: {this.state.creditNumber} </label><br />
            <label> Exp Date: {this.state.expiry} </label><br />
            <label> CVV {this.state.cvv} </label><br />
            <label> Billing Zip {this.state.billingZip} </label><br />
          </form>
          <button type="button" onClick={()=> {
          this.handleNextForm1();
          this.render();
        }}>Purchase</button>
        </div>
      );


    }
  } 
}

ReactDOM.render(<App />, document.getElementById('app'));
//now lets use react to render the components 
// import React, { Component } from 'react';
// import axios from 'axios'; 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      zip: ''
    }; // this.handleInput = this.handleInput.bind(this); 
    // this.handleChange = this.handleChange.bind(this);
    // this.handleNext = this.handleNext.bind(this); 
    // this.formOne = this.formOne.bind(this); 
    // this.formTwo = this.formTwo.bind(this); 
    // this.formThree = this.formThree.bind(this); 
  } // componentDidMount() {
  //   this.getAllItems();
  // }
  // onChange (event) {
  //   console.log(event.target.name); // the name of the form element
  //   console.log(event.target.value); // the value of the form element
  // }


  handleInput(e) {
    //the user will put in input value 
    let {
      value
    } = e.target;
    console.log(e.target); // this.setState({}, () => console.log(this.state.))
    // this.setState({ })
  }

  handleChange(e) {
    //bracket syntax
    this.setState({
      [e.target.name]: e.target.value
    });
  } // handleNext(){
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
    return React.createElement("div", null, " testing from App react", React.createElement("form", null, React.createElement("label", null, " Name "), React.createElement("input", {
      type: "text",
      name: this.state.name,
      onChange: this.handleChange
    }), React.createElement("br", null), React.createElement("label", null, " Email "), React.createElement("input", {
      type: "text",
      name: this.state.email,
      onChange: this.handleChange
    }), React.createElement("br", null), React.createElement("label", null, " Password "), React.createElement("input", {
      type: "text",
      name: this.state.password,
      onChange: this.handleChange
    }), React.createElement("br", null), React.createElement("label", null, " Line1 "), React.createElement("input", {
      type: "text",
      name: this.state.line1,
      onChange: this.handleChange
    }), React.createElement("br", null), React.createElement("label", null, " Line2 "), React.createElement("input", {
      type: "text",
      name: this.state.line2,
      onChange: this.handleChange
    }), React.createElement("br", null), React.createElement("label", null, " City "), React.createElement("input", {
      type: "text",
      name: this.state.city,
      onChange: this.handleChange
    }), React.createElement("br", null), React.createElement("label", null, " Zip "), React.createElement("input", {
      type: "text",
      name: this.state.zip,
      onChange: this.handleChange
    }), React.createElement("br", null)));
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImxpbmUxIiwibGluZTIiLCJjaXR5IiwiemlwIiwiaGFuZGxlSW5wdXQiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7QUFDQTtBQUdBLE1BQU1BLEdBQU4sU0FBa0JDLEtBQUssQ0FBQ0MsU0FBeEIsQ0FBa0M7QUFDaENDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsSUFBSSxFQUFDLEVBRE07QUFFWEMsTUFBQUEsS0FBSyxFQUFDLEVBRks7QUFHWEMsTUFBQUEsUUFBUSxFQUFDLEVBSEU7QUFJWEMsTUFBQUEsS0FBSyxFQUFDLEVBSks7QUFLWEMsTUFBQUEsS0FBSyxFQUFDLEVBTEs7QUFNWEMsTUFBQUEsSUFBSSxFQUFDLEVBTk07QUFPWEMsTUFBQUEsR0FBRyxFQUFDO0FBUE8sS0FBYixDQUZpQixDQVdqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJRCxHQXJCK0IsQ0EwQmhDO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQUMsRUFBQUEsV0FBVyxDQUFDQyxDQUFELEVBQUk7QUFDYjtBQUNBLFFBQUk7QUFBRUMsTUFBQUE7QUFBRixRQUFZRCxDQUFDLENBQUNFLE1BQWxCO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixDQUFDLENBQUNFLE1BQWQsRUFIYSxDQUliO0FBQ0E7QUFDRDs7QUFFREcsRUFBQUEsWUFBWSxDQUFFTCxDQUFGLEVBQUs7QUFDZjtBQUNBLFNBQUtNLFFBQUwsQ0FBYztBQUFFLE9BQUNOLENBQUMsQ0FBQ0UsTUFBRixDQUFTVixJQUFWLEdBQWlCUSxDQUFDLENBQUNFLE1BQUYsQ0FBU0Q7QUFBNUIsS0FBZDtBQUNELEdBaEQrQixDQWtEaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRjtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBTSxFQUFBQSxNQUFNLEdBQUc7QUFDUCxXQUNFLDREQUNFLGtDQUNFLDRDQURGLEVBRUU7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFFLEtBQUtoQixLQUFMLENBQVdDLElBQXBDO0FBQTBDLE1BQUEsUUFBUSxFQUFFLEtBQUthO0FBQXpELE1BRkYsRUFFMEUsK0JBRjFFLEVBR0UsNkNBSEYsRUFJRTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxJQUFJLEVBQUUsS0FBS2QsS0FBTCxDQUFXRSxLQUFwQztBQUEyQyxNQUFBLFFBQVEsRUFBRSxLQUFLWTtBQUExRCxNQUpGLEVBSTRFLCtCQUo1RSxFQUtFLGdEQUxGLEVBTUU7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFFLEtBQUtkLEtBQUwsQ0FBV0csUUFBcEM7QUFBOEMsTUFBQSxRQUFRLEVBQUUsS0FBS1c7QUFBN0QsTUFORixFQU0rRSwrQkFOL0UsRUFPRSw2Q0FQRixFQVFFO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLElBQUksRUFBRSxLQUFLZCxLQUFMLENBQVdJLEtBQXBDO0FBQTJDLE1BQUEsUUFBUSxFQUFFLEtBQUtVO0FBQTFELE1BUkYsRUFRNEUsK0JBUjVFLEVBU0UsNkNBVEYsRUFVRTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxJQUFJLEVBQUUsS0FBS2QsS0FBTCxDQUFXSyxLQUFwQztBQUEyQyxNQUFBLFFBQVEsRUFBRSxLQUFLUztBQUExRCxNQVZGLEVBVTRFLCtCQVY1RSxFQVdFLDRDQVhGLEVBWUU7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFFLEtBQUtkLEtBQUwsQ0FBV00sSUFBcEM7QUFBMEMsTUFBQSxRQUFRLEVBQUUsS0FBS1E7QUFBekQsTUFaRixFQVkyRSwrQkFaM0UsRUFhRSwyQ0FiRixFQWNFO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLElBQUksRUFBRSxLQUFLZCxLQUFMLENBQVdPLEdBQXBDO0FBQXlDLE1BQUEsUUFBUSxFQUFFLEtBQUtPO0FBQXhELE1BZEYsRUFjMEUsK0JBZDFFLENBREYsQ0FERjtBQXNCRDs7QUE1RytCOztBQStHbENHLFFBQVEsQ0FBQ0QsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyIvL25vdyBsZXRzIHVzZSByZWFjdCB0byByZW5kZXIgdGhlIGNvbXBvbmVudHMgXG5cbi8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnOyBcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTonJyxcbiAgICAgIGVtYWlsOicnLFxuICAgICAgcGFzc3dvcmQ6JycsXG4gICAgICBsaW5lMTonJyxcbiAgICAgIGxpbmUyOicnLFxuICAgICAgY2l0eTonJyxcbiAgICAgIHppcDonJ1xuICAgIH07XG4gICAgLy8gdGhpcy5oYW5kbGVJbnB1dCA9IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKTsgXG4gICAgLy8gdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuaGFuZGxlTmV4dCA9IHRoaXMuaGFuZGxlTmV4dC5iaW5kKHRoaXMpOyBcbiAgICAvLyB0aGlzLmZvcm1PbmUgPSB0aGlzLmZvcm1PbmUuYmluZCh0aGlzKTsgXG4gICAgLy8gdGhpcy5mb3JtVHdvID0gdGhpcy5mb3JtVHdvLmJpbmQodGhpcyk7IFxuICAgIC8vIHRoaXMuZm9ybVRocmVlID0gdGhpcy5mb3JtVGhyZWUuYmluZCh0aGlzKTsgXG4gICAgXG5cblxuICB9XG5cblxuXG5cbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIC8vICAgdGhpcy5nZXRBbGxJdGVtcygpO1xuICAvLyB9XG4gIFxuICAvLyBvbkNoYW5nZSAoZXZlbnQpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQubmFtZSk7IC8vIHRoZSBuYW1lIG9mIHRoZSBmb3JtIGVsZW1lbnRcbiAgLy8gICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpOyAvLyB0aGUgdmFsdWUgb2YgdGhlIGZvcm0gZWxlbWVudFxuICAvLyB9XG5cblxuXG4gIGhhbmRsZUlucHV0KGUpIHtcbiAgICAvL3RoZSB1c2VyIHdpbGwgcHV0IGluIGlucHV0IHZhbHVlIFxuICAgIGxldCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICAvLyB0aGlzLnNldFN0YXRlKHt9LCAoKSA9PiBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLikpXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7IH0pXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgKGUpIHtcbiAgICAvL2JyYWNrZXQgc3ludGF4XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICAvLyBoYW5kbGVOZXh0KCl7XG4gIC8vICAgLy9zaG91bGQgbW92ZSB0byBuZXh0IHBhZ2Ugb24gY2xpY2tcbiAgLy8gfVxuICAvL0YxIGNvbGxlY3RzIG5hbWUsIGVtYWlsLCBhbmQgcGFzc3dvcmQgZm9yIGFjY291bnQgY3JlYXRpb24uXG4gIC8vIGZvcm1PbmUgKCl7XG4gICAgLy9cbiAgLy8gICAgIHJldHVybiAoXG4gIC8vICAgICAgIDxkaXY+IFRlc3RpbmcgZnJvbSBmb3JtT25lXG4gIC8vICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPlxuICAvLyAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPk5leHQ8L2J1dHRvbj5cbiAgLy8gICAgICAgICA8L2Rpdj5cbiAgLy8gICAgIClcbiAgLy8gfVxuXG4gIC8vRjJjb2xsZWN0cyBzaGlwIHRvIGFkZHJlc3MgKGxpbmUgMSwgbGluZSAyLCBjaXR5LCBzdGF0ZSwgemlwIGNvZGUpIGFuZCBwaG9uZSBudW1iZXIuICBcbiAgLy8gZm9ybVR3byAoKXtcbiAgLy8gICByZXR1cm4gKFxuICAvLyAgICAgPGRpdj4gVGVzdGluZyBmcm9tIGZvcm1PbmVcbiAgLy8gICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPlxuICAvLyAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5OZXh0PC9idXR0b24+XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgIClcbiAgLy8gfVxuXG4vLyBjb2xsZWN0cyBjcmVkaXQgY2FyZCAjLCBleHBpcnkgZGF0ZSwgQ1ZWLCBhbmQgYmlsbGluZyB6aXAgY29kZVxuICAvLyBmb3JtVGhyZWUgKCl7XG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIDxkaXY+IFRlc3RpbmcgZnJvbSBmb3JtT25lXG4gIC8vICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiLz5cbiAgLy8gICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TmV4dDwvYnV0dG9uPlxuICAvLyAgICAgICA8L2Rpdj5cbiAgLy8gICApXG4gIC8vIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj4gdGVzdGluZyBmcm9tIEFwcCByZWFjdFxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8bGFiZWw+IE5hbWUgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPjxiciAvPlxuICAgICAgICAgIDxsYWJlbD4gRW1haWwgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+PGJyIC8+XG4gICAgICAgICAgPGxhYmVsPiBQYXNzd29yZCA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz48YnIgLz5cbiAgICAgICAgICA8bGFiZWw+IExpbmUxIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5zdGF0ZS5saW5lMX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPjxiciAvPlxuICAgICAgICAgIDxsYWJlbD4gTGluZTIgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLnN0YXRlLmxpbmUyfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+PGJyIC8+XG4gICAgICAgICAgPGxhYmVsPiBDaXR5IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5zdGF0ZS5jaXR5fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+PGJyIC8+XG4gICAgICAgICAgPGxhYmVsPiBaaXAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLnN0YXRlLnppcH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPjxiciAvPlxuICAgICAgICA8L2Zvcm0+XG5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IFxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=
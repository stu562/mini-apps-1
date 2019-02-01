// import React, { Component } from 'react';
// import axios from 'axios'; 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: 'form1',
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      zip: '',
      creditNumber: '',
      expiry: '',
      cvv: '',
      billingZip: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNextForm1 = this.handleNextForm1.bind(this);
    this.handleNextForm2 = this.handleNextForm2.bind(this);
    this.handleNextForm3 = this.handleNextForm3.bind(this);
    this.handleNextFormFinal = this.handleNextFormFinal.bind(this); // this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.name, e.target.value);
  }

  handleNextForm1() {
    this.setState({
      marker: 'form1'
    });
    axios.post('/shopping', this.state).then(response => console.log(response)).catch(err => console.error(err));
  }

  handleNextForm2() {
    this.setState({
      marker: 'form2'
    }); // axios
    //   .post('/shopping', this.state)
    //   .then((response) => console.log(response))
    //   .catch(err => console.error(err));
    //needs to send post request
  }

  handleNextForm3() {
    this.setState({
      marker: 'form3'
    }); // axios
    //   .post('/shopping', this.state)
    //   .then((response) => console.log(response))
    //   .catch(err => console.error(err));
    //needs to send data to database
  }

  handleNextFormFinal() {
    this.setState({
      marker: 'formFinal'
    }); // axios
    //   .post('/shopping', this.state)
    //   .then((response) => console.log(response))
    //   .catch(err => console.error(err));
    //needs to send data to database
  } // handleCheckout(){
  // }


  render() {
    if (this.state.marker === 'form1') {
      return React.createElement("div", null, " ", React.createElement("h1", null, "React Wants your info, yo!"), React.createElement("form", null, React.createElement("label", null, " Name "), React.createElement("input", {
        type: "text",
        name: "name",
        onChange: this.handleChange
      }), React.createElement("br", null), React.createElement("label", null, " Email "), React.createElement("input", {
        type: "text",
        name: "email",
        onChange: this.handleChange
      }), React.createElement("br", null), React.createElement("label", null, " Password "), React.createElement("input", {
        type: "text",
        name: "password",
        onChange: this.handleChange
      }), React.createElement("br", null), React.createElement("button", {
        type: "button",
        onClick: this.handleNextForm2
      }, "Next"), React.createElement("br", null)));
    } else if (this.state.marker === 'form2') {
      return React.createElement("div", null, React.createElement("form", {
        id: "form2"
      }, React.createElement("label", null, " Line1 "), React.createElement("input", {
        type: "text",
        name: "line1",
        onChange: this.handleChange
      }), React.createElement("br", null), React.createElement("label", null, " Line2 "), React.createElement("input", {
        type: "text",
        name: "line2",
        onChange: this.handleChange
      }), React.createElement("br", null), React.createElement("label", null, " City "), React.createElement("input", {
        type: "text",
        name: "city",
        onChange: this.handleChange
      }), React.createElement("br", null), React.createElement("label", null, " Zip "), React.createElement("input", {
        type: "text",
        name: "zip",
        onChange: this.handleChange
      }), React.createElement("br", null), React.createElement("button", {
        type: "button",
        onClick: this.handleNextForm1
      }, "Back"), React.createElement("button", {
        type: "button",
        onClick: this.handleNextForm3
      }, "Next"), React.createElement("br", null)));
    } else if (this.state.marker === 'form3') {
      return React.createElement("div", null, React.createElement("form", null, React.createElement("label", null, " Credit Card Number "), React.createElement("input", {
        type: "text",
        name: "creditNumber",
        onChange: this.handleChange
      }), React.createElement("br", null), React.createElement("label", null, " Expiration Date "), React.createElement("input", {
        type: "text",
        name: "expiry",
        onChange: this.handleChange
      }), React.createElement("br", null), React.createElement("label", null, " CVV "), React.createElement("input", {
        type: "text",
        name: "cvv",
        onChange: this.handleChange
      }), React.createElement("br", null), React.createElement("label", null, " Billing Zip "), React.createElement("input", {
        type: "text",
        name: "billingZip",
        onChange: this.handleChange
      }), React.createElement("br", null), React.createElement("button", {
        type: "button",
        onClick: this.handleNextForm2
      }, "Back"), React.createElement("button", {
        type: "button",
        onClick: this.handleNextFormFinal
      }, "Check Out")));
    } else if (this.state.marker === 'formFinal') {
      return React.createElement("div", null, React.createElement("form", null, React.createElement("label", null, " Name: ", this.state.name, " "), React.createElement("br", null), React.createElement("label", null, " Email: ", this.state.email, " "), React.createElement("br", null), React.createElement("label", null, " Password: ", this.state.password, " "), React.createElement("br", null), React.createElement("label", null, " Line1: ", this.state.line1, " "), React.createElement("br", null), React.createElement("label", null, " Line2: ", this.state.line2, " "), React.createElement("br", null), React.createElement("label", null, " City: ", this.state.city, " "), React.createElement("br", null), React.createElement("label", null, " Zip: ", this.state.zip, " "), React.createElement("br", null), React.createElement("label", null, " Credit Card Number: ", this.state.creditNumber, " "), React.createElement("br", null), React.createElement("label", null, " Exp Date: ", this.state.expiry, " "), React.createElement("br", null), React.createElement("label", null, " CVV ", this.state.cvv, " "), React.createElement("br", null), React.createElement("label", null, " Billing Zip ", this.state.billingZip, " "), React.createElement("br", null)), React.createElement("button", {
        type: "button",
        onClick: () => {
          this.handleNextForm1();
          this.render();
        }
      }, "Confirm Purchase"));
    }
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtYXJrZXIiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImxpbmUxIiwibGluZTIiLCJjaXR5IiwiemlwIiwiY3JlZGl0TnVtYmVyIiwiZXhwaXJ5IiwiY3Z2IiwiYmlsbGluZ1ppcCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVOZXh0Rm9ybTEiLCJoYW5kbGVOZXh0Rm9ybTIiLCJoYW5kbGVOZXh0Rm9ybTMiLCJoYW5kbGVOZXh0Rm9ybUZpbmFsIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsInJlbmRlciIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUVBLE1BQU1BLEdBQU4sU0FBa0JDLEtBQUssQ0FBQ0MsU0FBeEIsQ0FBa0M7QUFDaENDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsTUFBTSxFQUFDLE9BREk7QUFFWEMsTUFBQUEsSUFBSSxFQUFDLEVBRk07QUFHWEMsTUFBQUEsS0FBSyxFQUFDLEVBSEs7QUFJWEMsTUFBQUEsUUFBUSxFQUFDLEVBSkU7QUFLWEMsTUFBQUEsS0FBSyxFQUFDLEVBTEs7QUFNWEMsTUFBQUEsS0FBSyxFQUFDLEVBTks7QUFPWEMsTUFBQUEsSUFBSSxFQUFDLEVBUE07QUFRWEMsTUFBQUEsR0FBRyxFQUFDLEVBUk87QUFTWEMsTUFBQUEsWUFBWSxFQUFDLEVBVEY7QUFVWEMsTUFBQUEsTUFBTSxFQUFDLEVBVkk7QUFXWEMsTUFBQUEs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LCtCQUw1QyxFQU1FLDhDQUFlLEtBQUtOLEtBQUwsQ0FBV08sSUFBMUIsTUFORixFQU0wQywrQkFOMUMsRUFPRSw2Q0FBYyxLQUFLUCxLQUFMLENBQVdRLEdBQXpCLE1BUEYsRUFPd0MsK0JBUHhDLEVBUUUsNERBQTZCLEtBQUtSLEtBQUwsQ0FBV1MsWUFBeEMsTUFSRixFQVFnRSwrQkFSaEUsRUFTRSxrREFBbUIsS0FBS1QsS0FBTCxDQUFXVSxNQUE5QixNQVRGLEVBU2dELCtCQVRoRCxFQVVFLDRDQUFhLEtBQUtWLEtBQUwsQ0FBV1csR0FBeEIsTUFWRixFQVV1QywrQkFWdkMsRUFXRSxvREFBcUIsS0FBS1gsS0FBTCxDQUFXWSxVQUFoQyxNQVhGLEVBV3NELCtCQVh0RCxDQURGLEVBY0U7QUFBUSxRQUFBLElBQUksRUFBQyxRQUFiO0FBQXNCLFFBQUEsT0FBTyxFQUFFLE1BQUs7QUFDcEMsZUFBS0csZUFBTDtBQUNBLGVBQUtpQixNQUFMO0FBQ0Q7QUFIQyw0QkFkRixDQURGO0FBdUJEO0FBQ0Y7O0FBekorQjs7QUE0SmxDQyxRQUFRLENBQUNELE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkUsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7IFxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWFya2VyOidmb3JtMScsXG4gICAgICBuYW1lOicnLFxuICAgICAgZW1haWw6JycsXG4gICAgICBwYXNzd29yZDonJyxcbiAgICAgIGxpbmUxOicnLFxuICAgICAgbGluZTI6JycsXG4gICAgICBjaXR5OicnLFxuICAgICAgemlwOicnLFxuICAgICAgY3JlZGl0TnVtYmVyOicnLFxuICAgICAgZXhwaXJ5OicnLFxuICAgICAgY3Z2OicnLFxuICAgICAgYmlsbGluZ1ppcDonJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTmV4dEZvcm0xID0gdGhpcy5oYW5kbGVOZXh0Rm9ybTEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU5leHRGb3JtMiA9IHRoaXMuaGFuZGxlTmV4dEZvcm0yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVOZXh0Rm9ybTMgPSB0aGlzLmhhbmRsZU5leHRGb3JtMy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTmV4dEZvcm1GaW5hbCA9IHRoaXMuaGFuZGxlTmV4dEZvcm1GaW5hbC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuaGFuZGxlVG9nZ2xlQ2xpY2sgPSB0aGlzLmhhbmRsZVRvZ2dsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XG4gIH1cbiAgaGFuZGxlTmV4dEZvcm0xKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFya2VyOiAnZm9ybTEnLFxuICAgIH0pO1xuICAgIGF4aW9zXG4gICAgICAucG9zdCgnL3Nob3BwaW5nJywgdGhpcy5zdGF0ZSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9XG4gIGhhbmRsZU5leHRGb3JtMigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtlcjogJ2Zvcm0yJyxcbiAgICB9KTtcbiAgICAvLyBheGlvc1xuICAgIC8vICAgLnBvc3QoJy9zaG9wcGluZycsIHRoaXMuc3RhdGUpXG4gICAgLy8gICAudGhlbigocmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSlcbiAgICAvLyAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICAvL25lZWRzIHRvIHNlbmQgcG9zdCByZXF1ZXN0XG4gIH1cbiAgaGFuZGxlTmV4dEZvcm0zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFya2VyOiAnZm9ybTMnLFxuICAgIH0pO1xuICAgIC8vIGF4aW9zXG4gICAgLy8gICAucG9zdCgnL3Nob3BwaW5nJywgdGhpcy5zdGF0ZSlcbiAgICAvLyAgIC50aGVuKChyZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKVxuICAgIC8vICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgIC8vbmVlZHMgdG8gc2VuZCBkYXRhIHRvIGRhdGFiYXNlXG4gIH1cbiAgaGFuZGxlTmV4dEZvcm1GaW5hbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtlcjogJ2Zvcm1GaW5hbCcsXG4gICAgfSk7XG4gICAgLy8gYXhpb3NcbiAgICAvLyAgIC5wb3N0KCcvc2hvcHBpbmcnLCB0aGlzLnN0YXRlKVxuICAgIC8vICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpXG4gICAgLy8gICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgLy9uZWVkcyB0byBzZW5kIGRhdGEgdG8gZGF0YWJhc2VcbiAgfVxuICAvLyBoYW5kbGVDaGVja291dCgpe1xuXG4gIC8vIH1cbiAgXG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm1hcmtlciA9PT0gJ2Zvcm0xJyl7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PiA8aDE+UmVhY3QgV2FudHMgeW91ciBpbmZvLCB5byE8L2gxPlxuICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgey8qIDxoMz57dGhpcy5zdGF0ZS5uYW1lfTwvaDM+ICovfVxuICAgICAgICAgICAgey8qIGp1c3QgdG8gdGVzdCBpZiAgd29ya2luZyAqL31cbiAgICAgICAgICAgIDxsYWJlbD4gTmFtZSA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz48YnIgLz5cbiAgICAgICAgICAgIDxsYWJlbD4gRW1haWwgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz48YnIgLz5cbiAgICAgICAgICAgIDxsYWJlbD4gUGFzc3dvcmQgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz48YnIgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dEZvcm0yfT5OZXh0PC9idXR0b24+PGJyIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUubWFya2VyID09PSAnZm9ybTInKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxmb3JtIGlkPVwiZm9ybTJcIj5cbiAgICAgICAgPGxhYmVsPiBMaW5lMSA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGluZTFcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+PGJyIC8+XG4gICAgICAgIDxsYWJlbD4gTGluZTIgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxpbmUyXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPjxiciAvPlxuICAgICAgICA8bGFiZWw+IENpdHkgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+PGJyIC8+XG4gICAgICAgIDxsYWJlbD4gWmlwIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXBcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+PGJyIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dEZvcm0xfT5CYWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dEZvcm0zfT5OZXh0PC9idXR0b24+PGJyIC8+XG4gICAgICAgIFxuICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5tYXJrZXIgPT09ICdmb3JtMycpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSA+XG4gICAgICAgICAgPGxhYmVsPiBDcmVkaXQgQ2FyZCBOdW1iZXIgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgbmFtZT1cImNyZWRpdE51bWJlclwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz48YnIgLz5cbiAgICAgICAgICA8bGFiZWw+IEV4cGlyYXRpb24gRGF0ZSA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJleHBpcnlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+PGJyIC8+XG4gICAgICAgICAgPGxhYmVsPiBDVlYgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3Z2XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPjxiciAvPlxuICAgICAgICAgIDxsYWJlbD4gQmlsbGluZyBaaXAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYmlsbGluZ1ppcFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz48YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHRGb3JtMn0+QmFjazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHRGb3JtRmluYWx9ID5DaGVjayBPdXQ8L2J1dHRvbj5cbiAgICAgICAgXG4gICAgICAgIDwvZm9ybT5cbiAgXG4gICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUubWFya2VyID09PSAnZm9ybUZpbmFsJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybSA+XG4gICAgICAgICAgICA8bGFiZWw+IE5hbWU6IHt0aGlzLnN0YXRlLm5hbWV9IDwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICA8bGFiZWw+IEVtYWlsOiB7dGhpcy5zdGF0ZS5lbWFpbH0gPC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxsYWJlbD4gUGFzc3dvcmQ6IHt0aGlzLnN0YXRlLnBhc3N3b3JkfSA8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgPGxhYmVsPiBMaW5lMToge3RoaXMuc3RhdGUubGluZTF9IDwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICA8bGFiZWw+IExpbmUyOiB7dGhpcy5zdGF0ZS5saW5lMn0gPC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxsYWJlbD4gQ2l0eToge3RoaXMuc3RhdGUuY2l0eX0gPC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxsYWJlbD4gWmlwOiB7dGhpcy5zdGF0ZS56aXB9IDwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICA8bGFiZWw+IENyZWRpdCBDYXJkIE51bWJlcjoge3RoaXMuc3RhdGUuY3JlZGl0TnVtYmVyfSA8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgPGxhYmVsPiBFeHAgRGF0ZToge3RoaXMuc3RhdGUuZXhwaXJ5fSA8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgPGxhYmVsPiBDVlYge3RoaXMuc3RhdGUuY3Z2fSA8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgPGxhYmVsPiBCaWxsaW5nIFppcCB7dGhpcy5zdGF0ZS5iaWxsaW5nWmlwfSA8L2xhYmVsPjxiciAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKT0+IHtcbiAgICAgICAgICB0aGlzLmhhbmRsZU5leHRGb3JtMSgpO1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH19PkNvbmZpcm0gUHVyY2hhc2U8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuXG5cbiAgICB9XG4gIH0gXG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==
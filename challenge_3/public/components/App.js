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
    }); // axios
    //   .post('/shopping', this.state)
    //   .then((response) => console.log(response))
    //   .catch(err => console.error(err));
  }

  handleNextForm2() {
    this.setState({
      marker: 'form2'
    }); // axios
    //   .post('/shopping', this.state)
    //   .then((response) => console.log(response))
    //   .catch(err => console.error(err));
    //needs to send request to database
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
      return React.createElement("div", null, " ", React.createElement("h1", null, "React Wants your info, yo!"), React.createElement("form", null, React.createElement("h3", null, this.state.name), React.createElement("label", null, " Name "), React.createElement("input", {
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
      }, "Purchase"));
    }
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtYXJrZXIiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImxpbmUxIiwibGluZTIiLCJjaXR5IiwiemlwIiwiY3JlZGl0TnVtYmVyIiwiZXhwaXJ5IiwiY3Z2IiwiYmlsbGluZ1ppcCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVOZXh0Rm9ybTEiLCJoYW5kbGVOZXh0Rm9ybTIiLCJoYW5kbGVOZXh0Rm9ybTMiLCJoYW5kbGVOZXh0Rm9ybUZpbmFsIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBRUEsTUFBTUEsR0FBTixTQUFrQkMsS0FBSyxDQUFDQyxTQUF4QixDQUFrQztBQUNoQ0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxNQUFNLEVBQUMsT0FESTtBQUVYQyxNQUFBQSxJQUFJLEVBQUMsRUFGTTtBQUdYQyxNQUFBQSxLQUFLLEVBQUMsRUFISztBQUlYQyxNQUFBQSxRQUFRLEVBQUMsRUFKRTtBQUtYQyxNQUFBQSxLQUFLLEVBQUMsRUFMSztBQU1YQyxNQUFBQSxLQUFLLEVBQUMsRUFOSztBQU9YQyxNQUFBQSxJQUFJLEVBQUMsRUFQTTtBQVFYQyxNQUFBQSxHQUFHLEVBQUMsRUFSTztBQVNYQyxNQUFBQSxZQUFZLEVBQUMsRUFURjtBQVVYQyxNQUFBQSxNQUFNLEVBQUMsRUFWSTtBQVdYQyxNQUFBQSxHQUFHLEVBQUMsRUFYTztBQVlYQyxNQUFBQSxVQUFVLEVBQUM7QUFaQSxLQUFiO0FBY0EsU0FB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a0RBQW1CLEtBQUtULEtBQUwsQ0FBV1UsTUFBOUIsTUFURixFQVNnRCwrQkFUaEQsRUFVRSw0Q0FBYSxLQUFLVixLQUFMLENBQVdXLEdBQXhCLE1BVkYsRUFVdUMsK0JBVnZDLEVBV0Usb0RBQXFCLEtBQUtYLEtBQUwsQ0FBV1ksVUFBaEMsTUFYRixFQVdzRCwrQkFYdEQsQ0FERixFQWNFO0FBQVEsUUFBQSxJQUFJLEVBQUMsUUFBYjtBQUFzQixRQUFBLE9BQU8sRUFBRSxNQUFLO0FBQ3BDLGVBQUtHLGVBQUw7QUFDQSxlQUFLVSxNQUFMO0FBQ0Q7QUFIQyxvQkFkRixDQURGO0FBdUJEO0FBQ0Y7O0FBekorQjs7QUE0SmxDQyxRQUFRLENBQUNELE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkUsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7IFxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWFya2VyOidmb3JtMScsXG4gICAgICBuYW1lOicnLFxuICAgICAgZW1haWw6JycsXG4gICAgICBwYXNzd29yZDonJyxcbiAgICAgIGxpbmUxOicnLFxuICAgICAgbGluZTI6JycsXG4gICAgICBjaXR5OicnLFxuICAgICAgemlwOicnLFxuICAgICAgY3JlZGl0TnVtYmVyOicnLFxuICAgICAgZXhwaXJ5OicnLFxuICAgICAgY3Z2OicnLFxuICAgICAgYmlsbGluZ1ppcDonJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTmV4dEZvcm0xID0gdGhpcy5oYW5kbGVOZXh0Rm9ybTEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU5leHRGb3JtMiA9IHRoaXMuaGFuZGxlTmV4dEZvcm0yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVOZXh0Rm9ybTMgPSB0aGlzLmhhbmRsZU5leHRGb3JtMy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTmV4dEZvcm1GaW5hbCA9IHRoaXMuaGFuZGxlTmV4dEZvcm1GaW5hbC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuaGFuZGxlVG9nZ2xlQ2xpY2sgPSB0aGlzLmhhbmRsZVRvZ2dsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XG4gIH1cbiAgaGFuZGxlTmV4dEZvcm0xKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFya2VyOiAnZm9ybTEnLFxuICAgIH0pO1xuICAgIC8vIGF4aW9zXG4gICAgLy8gICAucG9zdCgnL3Nob3BwaW5nJywgdGhpcy5zdGF0ZSlcbiAgICAvLyAgIC50aGVuKChyZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKVxuICAgIC8vICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9XG4gIGhhbmRsZU5leHRGb3JtMigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtlcjogJ2Zvcm0yJyxcbiAgICB9KTtcbiAgICAvLyBheGlvc1xuICAgIC8vICAgLnBvc3QoJy9zaG9wcGluZycsIHRoaXMuc3RhdGUpXG4gICAgLy8gICAudGhlbigocmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSlcbiAgICAvLyAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICAvL25lZWRzIHRvIHNlbmQgcmVxdWVzdCB0byBkYXRhYmFzZVxuICB9XG4gIGhhbmRsZU5leHRGb3JtMygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtlcjogJ2Zvcm0zJyxcbiAgICB9KTtcbiAgICAvLyBheGlvc1xuICAgIC8vICAgLnBvc3QoJy9zaG9wcGluZycsIHRoaXMuc3RhdGUpXG4gICAgLy8gICAudGhlbigocmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSlcbiAgICAvLyAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICAvL25lZWRzIHRvIHNlbmQgZGF0YSB0byBkYXRhYmFzZVxuICB9XG4gIGhhbmRsZU5leHRGb3JtRmluYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtYXJrZXI6ICdmb3JtRmluYWwnLFxuICAgIH0pO1xuICAgIC8vIGF4aW9zXG4gICAgLy8gICAucG9zdCgnL3Nob3BwaW5nJywgdGhpcy5zdGF0ZSlcbiAgICAvLyAgIC50aGVuKChyZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKVxuICAgIC8vICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgIC8vbmVlZHMgdG8gc2VuZCBkYXRhIHRvIGRhdGFiYXNlXG4gIH1cbiAgLy8gaGFuZGxlQ2hlY2tvdXQoKXtcblxuICAvLyB9XG4gIFxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5tYXJrZXIgPT09ICdmb3JtMScpe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj4gPGgxPlJlYWN0IFdhbnRzIHlvdXIgaW5mbywgeW8hPC9oMT5cbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxoMz57dGhpcy5zdGF0ZS5uYW1lfTwvaDM+XG4gICAgICAgICAgICB7LyoganVzdCB0byB0ZXN0IGlmICB3b3JraW5nICovfVxuICAgICAgICAgICAgPGxhYmVsPiBOYW1lIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPjxiciAvPlxuICAgICAgICAgICAgPGxhYmVsPiBFbWFpbCA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPjxiciAvPlxuICAgICAgICAgICAgPGxhYmVsPiBQYXNzd29yZCA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPjxiciAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0Rm9ybTJ9Pk5leHQ8L2J1dHRvbj48YnIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5tYXJrZXIgPT09ICdmb3JtMicpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGZvcm0gaWQ9XCJmb3JtMlwiPlxuICAgICAgICA8bGFiZWw+IExpbmUxIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsaW5lMVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz48YnIgLz5cbiAgICAgICAgPGxhYmVsPiBMaW5lMiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGluZTJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+PGJyIC8+XG4gICAgICAgIDxsYWJlbD4gQ2l0eSA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz48YnIgLz5cbiAgICAgICAgPGxhYmVsPiBaaXAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInppcFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz48YnIgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0Rm9ybTF9PkJhY2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0Rm9ybTN9Pk5leHQ8L2J1dHRvbj48YnIgLz5cbiAgICAgICAgXG4gICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm1hcmtlciA9PT0gJ2Zvcm0zJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtID5cbiAgICAgICAgICA8bGFiZWw+IENyZWRpdCBDYXJkIE51bWJlciA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICBuYW1lPVwiY3JlZGl0TnVtYmVyXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPjxiciAvPlxuICAgICAgICAgIDxsYWJlbD4gRXhwaXJhdGlvbiBEYXRlIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImV4cGlyeVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz48YnIgLz5cbiAgICAgICAgICA8bGFiZWw+IENWViA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjdnZcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+PGJyIC8+XG4gICAgICAgICAgPGxhYmVsPiBCaWxsaW5nIFppcCA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJiaWxsaW5nWmlwXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPjxiciAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dEZvcm0yfT5CYWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dEZvcm1GaW5hbH0gPkNoZWNrIE91dDwvYnV0dG9uPlxuICAgICAgICBcbiAgICAgICAgPC9mb3JtPlxuICBcbiAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5tYXJrZXIgPT09ICdmb3JtRmluYWwnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtID5cbiAgICAgICAgICAgIDxsYWJlbD4gTmFtZToge3RoaXMuc3RhdGUubmFtZX0gPC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxsYWJlbD4gRW1haWw6IHt0aGlzLnN0YXRlLmVtYWlsfSA8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgPGxhYmVsPiBQYXNzd29yZDoge3RoaXMuc3RhdGUucGFzc3dvcmR9IDwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICA8bGFiZWw+IExpbmUxOiB7dGhpcy5zdGF0ZS5saW5lMX0gPC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxsYWJlbD4gTGluZTI6IHt0aGlzLnN0YXRlLmxpbmUyfSA8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgPGxhYmVsPiBDaXR5OiB7dGhpcy5zdGF0ZS5jaXR5fSA8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgPGxhYmVsPiBaaXA6IHt0aGlzLnN0YXRlLnppcH0gPC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxsYWJlbD4gQ3JlZGl0IENhcmQgTnVtYmVyOiB7dGhpcy5zdGF0ZS5jcmVkaXROdW1iZXJ9IDwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICA8bGFiZWw+IEV4cCBEYXRlOiB7dGhpcy5zdGF0ZS5leHBpcnl9IDwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICA8bGFiZWw+IENWViB7dGhpcy5zdGF0ZS5jdnZ9IDwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICA8bGFiZWw+IEJpbGxpbmcgWmlwIHt0aGlzLnN0YXRlLmJpbGxpbmdaaXB9IDwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlTmV4dEZvcm0xKCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfX0+UHVyY2hhc2U8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuXG5cbiAgICB9XG4gIH0gXG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==
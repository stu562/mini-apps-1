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
    this.handleNextForm3 = this.handleNextForm3.bind(this); // this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    }); // () => console.log(this.state.name)
  }

  handleNextForm1(e) {
    // e.preventDefault();
    this.setState({
      marker: 'form1'
    }); // render();
  }

  handleNextForm2(e) {
    e.preventDefault();
    this.setState({
      marker: 'form2'
    });
  }

  handleNextForm3(e) {
    e.preventDefault();
    this.setState({
      marker: 'form3'
    });
  }

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
    } else {
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
        onClick: () => console.log('Check out page please')
      }, "Check Out"), React.createElement("button", {
        type: "button",
        onClick: () => {
          this.handleNextForm1();
          this.render();
        }
      }, "Purchase")));
    }
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtYXJrZXIiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImxpbmUxIiwibGluZTIiLCJjaXR5IiwiemlwIiwiY3JlZGl0TnVtYmVyIiwiZXhwaXJ5IiwiY3Z2IiwiYmlsbGluZ1ppcCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVOZXh0Rm9ybTEiLCJoYW5kbGVOZXh0Rm9ybTIiLCJoYW5kbGVOZXh0Rm9ybTMiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwicmVuZGVyIiwiY29uc29sZSIsImxvZyIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUVBLE1BQU1BLEdBQU4sU0FBa0JDLEtBQUssQ0FBQ0MsU0FBeEIsQ0FBa0M7QUFDaENDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsTUFBTSxFQUFDLE9BREk7QUFFWEMsTUFBQUEsSUFBSSxFQUFDLEVBRk07QUFHWEMsTUFBQUEsS0FBSyxFQUFDLEVBSEs7QUFJWEMsTUFBQUEsUUFBUSxFQUFDLEVBSkU7QUFLWEMsTUFBQUEsS0FBSyxFQUFDLEVBTEs7QUFNWEMsTUFBQUEsS0FBSyxFQUFDLEVBTks7QUFPWEMsTUFBQUEsSUFBSSxFQUFDLEVBUE07QUFRWEMsTUFBQUEsR0FBRyxFQUFDLEVBUk87QUFTWEMsTUFBQUEsWUFBWSxFQUFDLEVBVEY7QUFVWEMsTUFBQUEsTUFBTSxFQUFDLEVBVkk7QUFXWEMsTUFBQUEsR0FBRyxFQUFDLEVBWE87QUFZWEMsTUFBQUEsVUFBVSxFQUFDO0FBWkEsS0FBYjtBQWNBLFNBQUtDLFlB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QUksRUFBQyxRQUFiO0FBQXNCLFFBQUEsT0FBTyxFQUFFLE1BQU1RLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQXJDLHFCQVZBLEVBV0E7QUFBUSxRQUFBLElBQUksRUFBQyxRQUFiO0FBQXNCLFFBQUEsT0FBTyxFQUFFLE1BQUs7QUFDbEMsZUFBS1YsZUFBTDtBQUNBLGVBQUtRLE1BQUw7QUFDRDtBQUhELG9CQVhBLENBREYsQ0FEQTtBQXFCRDtBQUNGOztBQTdHK0I7O0FBZ0hsQ0csUUFBUSxDQUFDSCxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJJLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnOyBcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1hcmtlcjonZm9ybTEnLFxuICAgICAgbmFtZTonJyxcbiAgICAgIGVtYWlsOicnLFxuICAgICAgcGFzc3dvcmQ6JycsXG4gICAgICBsaW5lMTonJyxcbiAgICAgIGxpbmUyOicnLFxuICAgICAgY2l0eTonJyxcbiAgICAgIHppcDonJyxcbiAgICAgIGNyZWRpdE51bWJlcjonJyxcbiAgICAgIGV4cGlyeTonJyxcbiAgICAgIGN2djonJyxcbiAgICAgIGJpbGxpbmdaaXA6JydcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU5leHRGb3JtMSA9IHRoaXMuaGFuZGxlTmV4dEZvcm0xLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVOZXh0Rm9ybTIgPSB0aGlzLmhhbmRsZU5leHRGb3JtMi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTmV4dEZvcm0zID0gdGhpcy5oYW5kbGVOZXh0Rm9ybTMuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLmhhbmRsZVRvZ2dsZUNsaWNrID0gdGhpcy5oYW5kbGVUb2dnbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlIChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgLy8gKCkgPT4gY29uc29sZS5sb2codGhpcy5zdGF0ZS5uYW1lKVxuICB9XG4gIGhhbmRsZU5leHRGb3JtMShlKSB7XG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFya2VyOiAnZm9ybTEnLFxuICAgIH0pO1xuICAgIC8vIHJlbmRlcigpO1xuICB9XG4gIGhhbmRsZU5leHRGb3JtMihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFya2VyOiAnZm9ybTInLFxuICAgIH0pO1xuICB9XG4gIGhhbmRsZU5leHRGb3JtMyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFya2VyOiAnZm9ybTMnLFxuICAgIH0pO1xuICB9XG5cbiAgXG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm1hcmtlciA9PT0gJ2Zvcm0xJyl7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PiA8aDE+UmVhY3QgV2FudHMgeW91ciBpbmZvLCB5byE8L2gxPlxuICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGgzPnt0aGlzLnN0YXRlLm5hbWV9PC9oMz5cbiAgICAgICAgICAgIHsvKiBqdXN0IHRvIHRlc3QgaWYgIHdvcmtpbmcgKi99XG4gICAgICAgICAgICA8bGFiZWw+IE5hbWUgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+PGJyIC8+XG4gICAgICAgICAgICA8bGFiZWw+IEVtYWlsIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+PGJyIC8+XG4gICAgICAgICAgICA8bGFiZWw+IFBhc3N3b3JkIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+PGJyIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHRGb3JtMn0+TmV4dDwvYnV0dG9uPjxiciAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm1hcmtlciA9PT0gJ2Zvcm0yJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8Zm9ybSBpZD1cImZvcm0yXCI+XG4gICAgICAgIDxsYWJlbD4gTGluZTEgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxpbmUxXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPjxiciAvPlxuICAgICAgICA8bGFiZWw+IExpbmUyIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsaW5lMlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz48YnIgLz5cbiAgICAgICAgPGxhYmVsPiBDaXR5IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPjxiciAvPlxuICAgICAgICA8bGFiZWw+IFppcCA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiemlwXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPjxiciAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHRGb3JtMX0+QmFjazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHRGb3JtM30+TmV4dDwvYnV0dG9uPjxiciAvPlxuICAgICAgICBcbiAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtID5cbiAgICAgICAgICA8bGFiZWw+IENyZWRpdCBDYXJkIE51bWJlciA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjcmVkaXROdW1iZXJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+PGJyIC8+XG4gICAgICAgICAgPGxhYmVsPiBFeHBpcmF0aW9uIERhdGUgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZXhwaXJ5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPjxiciAvPlxuICAgICAgICAgIDxsYWJlbD4gQ1ZWIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImN2dlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz48YnIgLz5cbiAgICAgICAgICA8bGFiZWw+IEJpbGxpbmcgWmlwIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJpbGxpbmdaaXBcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+PGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0Rm9ybTJ9PkJhY2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ0NoZWNrIG91dCBwYWdlIHBsZWFzZScpfSA+Q2hlY2sgT3V0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlTmV4dEZvcm0xKCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfX0+UHVyY2hhc2U8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICBcbiAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH0gXG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==
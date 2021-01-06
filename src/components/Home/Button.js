import React, { Component } from 'react';
import history from '../../history';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick() {
    console.log("Working")
    //this.props.history.push('/scanqr');
    history.replace('/scanqr');
    window.location.reload();
  }
  render() {
  	const buttonStyle = {
    	"text-align": "center",
      position: 'absolute',
      bottom: '20px',
      padding: '63px 134px 31px'
    }
    return (
        <div style= {buttonStyle}>  
          <button type="button" onClick={() => this.handleClick()}>
            Scan QR Code
          </button>
        </div> 
    );
  }
};

export default Button;
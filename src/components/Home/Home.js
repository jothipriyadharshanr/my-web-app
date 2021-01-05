import React, { Component } from 'react';

class Home extends Component {
  handleClick() {
    this.props.history.push('/scanqr');
  }
  render() {
  	const buttonStyle = {
    	"text-align": "center",  
		border: '7px solid white',  
		width: '300px',  
		height: '200px',  
		paddingTop: '100px'  
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

export default Home;
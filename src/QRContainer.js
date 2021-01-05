import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class QRContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      facingMode: 'user',
      result: 'Hold QR code to scan',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(result){
    if(result){
      this.setState({ result })
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
      display: 'flex',
      "justify-content" : "center"
    }
    const camStyle = {
    	display: 'flex',
    	"justify-content": "center",
    	marginTop: '-50px'
    }
    const textStyle = {
    	fontSize: '30px',
    	"text-align": 'center',
    	marginTop: '-50px'
    }
    return(
    	<React.Fragment>
        	<div style= {camStyle}>
        		<QrReader
          			delay={this.state.delay}
          			style={previewStyle}
          			onError={this.handleError}
          			onScan={this.handleScan}
          			facingMode={this.state.facingMode}
          		/>
        	<p style= {textStyle}>
        		{this.state.result}
        	</p>
      		</div>
      	</React.Fragment>
    )
  }
}
export default QRContainer;
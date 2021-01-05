import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class ScanQR extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      facingMode: 'environment',
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(result){
    if(result){
      this.setState({ result })
      history.push('/cardselect')
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 300,
      width: 300,
      display: 'flex',
      "justify-content" : "center"
    }
    const camStyle = {
    	display: 'flex',
    	"justify-content": "center",
    	marginTop: '-20px'
    }
    const textStyle = {
    	fontSize: '15px',
    	"text-align": 'center',
    	marginBottom: '1000px'
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
          	</div>
        	<p style= {textStyle}>
        		{this.state.result}
        	</p>
      	</React.Fragment>
    )
  }
}
export default ScanQR;
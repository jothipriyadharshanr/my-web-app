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
      this.handleClick()
    }
  }
  handleClick() {
    console.log(this.state.result);
    this.props.history.push({
      pathname: '/selectcard',
      data: this.state.result // your data array of objects
    });
  }
  handleError(err){
    console.error(err)
  }

  render(){
    const previewStyle = {
      display: 'flex',
      "justify-content" : "center",
      minHeight: "100%",
      minWidth: "100%"
    }
    const camStyle = {
    	display: 'flex',
    	"justify-content": "center",
      minHeight: "100vh",
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
      	</React.Fragment>
    )
  }
}
export default ScanQR;
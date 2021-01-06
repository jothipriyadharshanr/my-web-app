import React, { Component } from 'react';
import TopBar from "./TopBar";
import FooterMenu from "./FooterMenu";
import Content from "./Content";
import Button from "./Button";

class Home extends Component {
  render() {
  	const buttonStyle = {
    	"text-align": "center",  
		border: '7px solid white',  
		width: '300px',  
		height: '200px',  
		paddingTop: '100px'  
    }
    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50
    };
    return (
    	<div
        	style={{
          		backgroundColor: styles.black(1),
          		minHeight: "100vh",
          		position: "relative"
        	}}
      	>
        	<Content styles={styles} />
        	<Button onClick={() => this.handleClick()} />
      	</div> 
    );
  }
};

export default Home;
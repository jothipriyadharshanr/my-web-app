import React, { Component } from 'react';
import Content from "./Content";
import Button from "./Button";

class Home extends Component {
  render() {
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
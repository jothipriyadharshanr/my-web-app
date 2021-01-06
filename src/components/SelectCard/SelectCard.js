import React, {Component} from 'react';

class SelectCard extends Component{
    value="Value From Parent";
    render(){
    	const { data } = this.props.location
        return(
            <div>
            	<h2>SelectCard Page</h2>
            	<p>{data}</p>
            </div>
        );
    }
}
export default SelectCard;
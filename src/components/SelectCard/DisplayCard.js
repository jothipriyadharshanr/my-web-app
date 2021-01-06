import React, {Component} from 'react';


class DisplayCard extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.valueFromParent}</h2>
            </div>
        );
    }
}
export default DisplayCard;
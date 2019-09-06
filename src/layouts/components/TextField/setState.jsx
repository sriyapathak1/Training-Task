import React, { Component } from 'react'

class setState extends Component {
    constructor() {
        super();
        this.state = {
            value:0,
            text:'',
        }
    }
    handleChange = () => {
        this.setState({
            value:this.state.value+1
        })
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("Should Component Update Method")
    }
    render() {
        // const { value } =this.state;
        // console.log(value)
        return (
            <div>
                <button onClick={this.handleChange}>
                    {this.state.value}
                </button>
            </div>
        )
    }
}

export default setState;

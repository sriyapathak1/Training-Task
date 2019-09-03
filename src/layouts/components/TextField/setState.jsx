import React, { Component } from 'react'

class setState extends Component {
    constructor() {
        super();
        this.state = {
            value:0,
        }
    }
    handleChange = () => {
        this.setState({
            value:this.state.value+1
        })
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

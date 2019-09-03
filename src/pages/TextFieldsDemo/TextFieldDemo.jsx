import React from 'react';
import { CustomTextField, Form } from './../../layouts/components';
import { NavBar } from './../../layouts/components';
// import SetState from '../../components/TextField/setState';

// const TextFieldDemo = () => {
class TextFieldDemo extends React.Component {
    constructor(){
        super();
        this.state={
            selectoption:'',
            radioFootball:'',
            radioCricket:'',
        }
    }

handleClick =(e) => {
    this.setState({
        selectoption:e.target.value,
        radioFootball:e.target.value,
        radioCricket:e.target.value

    });
}

render() {
// const { selectoption, radioCricket, radioFootball } = this.state;

        return (
            <div>
                <CustomTextField textValue="Hello"
                error="This is error"
                 />
                {/* <SetState /> */}
                <Form />
                <NavBar />
                
                {/* <SelectField 
                selectoption={selectoption}
                handleClick={this.handleClick} />
                <RadioGroup
                 selectoption={selectoption}
                 radioCricket={radioCricket}
                 radioFootball={radioFootball}
                 handleClick={this.handleClick}

                /> */}
               
            </div>     
        );
    }
}

export default TextFieldDemo;

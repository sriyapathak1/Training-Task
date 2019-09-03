import React, { Component } from 'react'
import * as yup from 'yup';
import { FormControl } from '@material-ui/core';


const Schema = yup.object().shape({
    value: yup
      .string()
      .required()
      .min(5)
      .label('Name'),
  });
 class Form extends Component {
     constructor(props){
         super(props)
         this.state={
             value: "",
             message:'',
             isError: '',
             error: {
                 value: '',
             }
         };
     }
    handleChange = field => (event) => {
        this.setState({[field]:event.target.value},
            () => this.handleValidate((field)));
    }
    // handleBlur = () => {
    //     const { value } = this.state;

    // }
    handleValidate = (e) => {
        const { value } = this.state;
        Schema.validate(
            {value},
            {abortEarly:false},
        )
        .then(() => {
            console.log('success');
        })
        .catch((error) => {
            console.log('error ', error);
        });
      }

    render() {
        const { value } = this.state;
        // const { meta: { error } } = this.props;
        console.log('name :', value);
        return (
            <div>
              <label>
              <input type="text"
               value={value}
               onChange={this.handleChange('value')} />
                {/* {error && <span>{error}</span>} */}
              </label>
               <p>{this.state.value}</p>
              
               <button onClick={this.handleValidate}>Submit</button>
               <FormControl>

               </FormControl>
            </div>
        )
    }
}

export default Form;

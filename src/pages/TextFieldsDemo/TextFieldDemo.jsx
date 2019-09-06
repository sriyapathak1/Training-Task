import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { Options, Cricket, FootBall } from '../../config/constant';
import RadioGroup from '../../layouts/components/RadioGroup/RadioGroup';
import SelectField from '../../layouts/components/selectField/SelectField';
import Form from '../../layouts/components/Form/Form';

// const schema = yup.object().shape({
//   name: yup.string().min(3).required(),
//   sport: yup.string().required(),
//   player: yup.string().required(),
// });

class InputDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sport: '',
      player: '',
      Err: {
        name: '',
        sport: '',
        player: '',
      },
      hasError: {
        name: false,
        sport: false,
        player: false,
      },
      isTouched: {
        name: false,
        sport: false,
        player: false,
      },
    };
  }

  onChangeHandler = field => (event) => {
    const { isTouched } = this.state;
    this.setState({
      [field]: event.target.value,
      isTouched: { ...isTouched, [field]: true },
    });
  }

  
  render() {

    const {
      sport, name
    } = this.state;

    let result = 0;
    if (sport === 'Cricket') {
      result = Cricket;
    } else if (sport === 'FootBall') {
      result = FootBall;
    }
    return (
      <div>
        <div>
          <Form />
         <TextField onChange={this.onChangeHandler('name')} value={name} />
          <h3>Select the game you play!</h3>
          <SelectField
             
            options={Options}
            value={sport}
            onChange={this.onChangeHandler('sport')}
          />
        </div>
        <div>
          {
            (result) ? (
              <RadioGroup
                options={result}
                onChange={this.onChangeHandler('player')}

              />
            )
              : ''
          }     
        </div>
      </div>
    );
  }
}
export default InputDemo;

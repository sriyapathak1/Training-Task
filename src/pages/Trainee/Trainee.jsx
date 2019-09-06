import React, { Component } from 'react'
// import { Typography } from '@material-ui/core';
import AddDailog from './components/AddDailog';
import { dialogBox } from '../../config/constant';
import TraineeList from './TraineeList';

 class Trainee extends Component {
    render() {
        return (
            <div>
                {/* <Typography>Add traineeggfgfgg</Typography> */}

                <AddDailog 
                title={dialogBox.heading}
                button1={dialogBox.saveBtn}
                button2={dialogBox.cancleBtn} />
                <TraineeList />
            </div>
        )
    }
}

export default Trainee;
